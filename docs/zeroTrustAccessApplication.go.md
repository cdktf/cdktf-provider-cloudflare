# `zeroTrustAccessApplication` Submodule <a name="`zeroTrustAccessApplication` Submodule" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustAccessApplication <a name="ZeroTrustAccessApplication" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application cloudflare_zero_trust_access_application}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustaccessapplication"

zerotrustaccessapplication.NewZeroTrustAccessApplication(scope Construct, id *string, config ZeroTrustAccessApplicationConfig) ZeroTrustAccessApplication
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig">ZeroTrustAccessApplicationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.Initializer.parameter.config"></a>

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
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.putDestinations">PutDestinations</a></code> | *No description.* |
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
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetDestinations">ResetDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetDomain">ResetDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetDomainType">ResetDomainType</a></code> | *No description.* |
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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCorsHeaders` <a name="PutCorsHeaders" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.putCorsHeaders"></a>

```go
func PutCorsHeaders(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.putCorsHeaders.parameter.value"></a>

- *Type:* interface{}

---

##### `PutDestinations` <a name="PutDestinations" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.putDestinations"></a>

```go
func PutDestinations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.putDestinations.parameter.value"></a>

- *Type:* interface{}

---

##### `PutFooterLinks` <a name="PutFooterLinks" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.putFooterLinks"></a>

```go
func PutFooterLinks(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.putFooterLinks.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLandingPageDesign` <a name="PutLandingPageDesign" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.putLandingPageDesign"></a>

```go
func PutLandingPageDesign(value ZeroTrustAccessApplicationLandingPageDesign)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.putLandingPageDesign.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesign">ZeroTrustAccessApplicationLandingPageDesign</a>

---

##### `PutSaasApp` <a name="PutSaasApp" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.putSaasApp"></a>

```go
func PutSaasApp(value ZeroTrustAccessApplicationSaasApp)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.putSaasApp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp">ZeroTrustAccessApplicationSaasApp</a>

---

##### `PutScimConfig` <a name="PutScimConfig" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.putScimConfig"></a>

```go
func PutScimConfig(value ZeroTrustAccessApplicationScimConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.putScimConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfig">ZeroTrustAccessApplicationScimConfig</a>

---

##### `PutTargetCriteria` <a name="PutTargetCriteria" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.putTargetCriteria"></a>

```go
func PutTargetCriteria(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.putTargetCriteria.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetAccountId"></a>

```go
func ResetAccountId()
```

##### `ResetAllowAuthenticateViaWarp` <a name="ResetAllowAuthenticateViaWarp" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetAllowAuthenticateViaWarp"></a>

```go
func ResetAllowAuthenticateViaWarp()
```

##### `ResetAllowedIdps` <a name="ResetAllowedIdps" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetAllowedIdps"></a>

```go
func ResetAllowedIdps()
```

##### `ResetAppLauncherLogoUrl` <a name="ResetAppLauncherLogoUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetAppLauncherLogoUrl"></a>

```go
func ResetAppLauncherLogoUrl()
```

##### `ResetAppLauncherVisible` <a name="ResetAppLauncherVisible" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetAppLauncherVisible"></a>

```go
func ResetAppLauncherVisible()
```

##### `ResetAutoRedirectToIdentity` <a name="ResetAutoRedirectToIdentity" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetAutoRedirectToIdentity"></a>

```go
func ResetAutoRedirectToIdentity()
```

##### `ResetBgColor` <a name="ResetBgColor" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetBgColor"></a>

```go
func ResetBgColor()
```

##### `ResetCorsHeaders` <a name="ResetCorsHeaders" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetCorsHeaders"></a>

```go
func ResetCorsHeaders()
```

##### `ResetCustomDenyMessage` <a name="ResetCustomDenyMessage" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetCustomDenyMessage"></a>

```go
func ResetCustomDenyMessage()
```

##### `ResetCustomDenyUrl` <a name="ResetCustomDenyUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetCustomDenyUrl"></a>

```go
func ResetCustomDenyUrl()
```

##### `ResetCustomNonIdentityDenyUrl` <a name="ResetCustomNonIdentityDenyUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetCustomNonIdentityDenyUrl"></a>

```go
func ResetCustomNonIdentityDenyUrl()
```

##### `ResetCustomPages` <a name="ResetCustomPages" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetCustomPages"></a>

```go
func ResetCustomPages()
```

##### `ResetDestinations` <a name="ResetDestinations" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetDestinations"></a>

```go
func ResetDestinations()
```

##### `ResetDomain` <a name="ResetDomain" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetDomain"></a>

```go
func ResetDomain()
```

##### `ResetDomainType` <a name="ResetDomainType" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetDomainType"></a>

```go
func ResetDomainType()
```

##### `ResetEnableBindingCookie` <a name="ResetEnableBindingCookie" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetEnableBindingCookie"></a>

```go
func ResetEnableBindingCookie()
```

##### `ResetFooterLinks` <a name="ResetFooterLinks" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetFooterLinks"></a>

```go
func ResetFooterLinks()
```

##### `ResetHeaderBgColor` <a name="ResetHeaderBgColor" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetHeaderBgColor"></a>

```go
func ResetHeaderBgColor()
```

##### `ResetHttpOnlyCookieAttribute` <a name="ResetHttpOnlyCookieAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetHttpOnlyCookieAttribute"></a>

```go
func ResetHttpOnlyCookieAttribute()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetId"></a>

```go
func ResetId()
```

##### `ResetLandingPageDesign` <a name="ResetLandingPageDesign" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetLandingPageDesign"></a>

```go
func ResetLandingPageDesign()
```

##### `ResetLogoUrl` <a name="ResetLogoUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetLogoUrl"></a>

```go
func ResetLogoUrl()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetName"></a>

```go
func ResetName()
```

##### `ResetOptionsPreflightBypass` <a name="ResetOptionsPreflightBypass" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetOptionsPreflightBypass"></a>

```go
func ResetOptionsPreflightBypass()
```

##### `ResetPolicies` <a name="ResetPolicies" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetPolicies"></a>

```go
func ResetPolicies()
```

##### `ResetSaasApp` <a name="ResetSaasApp" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetSaasApp"></a>

```go
func ResetSaasApp()
```

##### `ResetSameSiteCookieAttribute` <a name="ResetSameSiteCookieAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetSameSiteCookieAttribute"></a>

```go
func ResetSameSiteCookieAttribute()
```

##### `ResetScimConfig` <a name="ResetScimConfig" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetScimConfig"></a>

```go
func ResetScimConfig()
```

##### `ResetSelfHostedDomains` <a name="ResetSelfHostedDomains" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetSelfHostedDomains"></a>

```go
func ResetSelfHostedDomains()
```

##### `ResetServiceAuth401Redirect` <a name="ResetServiceAuth401Redirect" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetServiceAuth401Redirect"></a>

```go
func ResetServiceAuth401Redirect()
```

##### `ResetSessionDuration` <a name="ResetSessionDuration" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetSessionDuration"></a>

```go
func ResetSessionDuration()
```

##### `ResetSkipAppLauncherLoginPage` <a name="ResetSkipAppLauncherLoginPage" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetSkipAppLauncherLoginPage"></a>

```go
func ResetSkipAppLauncherLoginPage()
```

##### `ResetSkipInterstitial` <a name="ResetSkipInterstitial" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetSkipInterstitial"></a>

```go
func ResetSkipInterstitial()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTargetCriteria` <a name="ResetTargetCriteria" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetTargetCriteria"></a>

```go
func ResetTargetCriteria()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetType"></a>

```go
func ResetType()
```

##### `ResetZoneId` <a name="ResetZoneId" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetZoneId"></a>

```go
func ResetZoneId()
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

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustaccessapplication"

zerotrustaccessapplication.ZeroTrustAccessApplication_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustaccessapplication"

zerotrustaccessapplication.ZeroTrustAccessApplication_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustaccessapplication"

zerotrustaccessapplication.ZeroTrustAccessApplication_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustaccessapplication"

zerotrustaccessapplication.ZeroTrustAccessApplication_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ZeroTrustAccessApplication resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ZeroTrustAccessApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ZeroTrustAccessApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustAccessApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.aud">Aud</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.corsHeaders">CorsHeaders</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersList">ZeroTrustAccessApplicationCorsHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.destinations">Destinations</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsList">ZeroTrustAccessApplicationDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.footerLinks">FooterLinks</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksList">ZeroTrustAccessApplicationFooterLinksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.landingPageDesign">LandingPageDesign</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference">ZeroTrustAccessApplicationLandingPageDesignOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.saasApp">SaasApp</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference">ZeroTrustAccessApplicationSaasAppOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.scimConfig">ScimConfig</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference">ZeroTrustAccessApplicationScimConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.targetCriteria">TargetCriteria</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaList">ZeroTrustAccessApplicationTargetCriteriaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.allowAuthenticateViaWarpInput">AllowAuthenticateViaWarpInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.allowedIdpsInput">AllowedIdpsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.appLauncherLogoUrlInput">AppLauncherLogoUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.appLauncherVisibleInput">AppLauncherVisibleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.autoRedirectToIdentityInput">AutoRedirectToIdentityInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.bgColorInput">BgColorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.corsHeadersInput">CorsHeadersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.customDenyMessageInput">CustomDenyMessageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.customDenyUrlInput">CustomDenyUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.customNonIdentityDenyUrlInput">CustomNonIdentityDenyUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.customPagesInput">CustomPagesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.destinationsInput">DestinationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.domainInput">DomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.domainTypeInput">DomainTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.enableBindingCookieInput">EnableBindingCookieInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.footerLinksInput">FooterLinksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.headerBgColorInput">HeaderBgColorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.httpOnlyCookieAttributeInput">HttpOnlyCookieAttributeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.landingPageDesignInput">LandingPageDesignInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesign">ZeroTrustAccessApplicationLandingPageDesign</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.logoUrlInput">LogoUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.optionsPreflightBypassInput">OptionsPreflightBypassInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.policiesInput">PoliciesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.saasAppInput">SaasAppInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp">ZeroTrustAccessApplicationSaasApp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.sameSiteCookieAttributeInput">SameSiteCookieAttributeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.scimConfigInput">ScimConfigInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfig">ZeroTrustAccessApplicationScimConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.selfHostedDomainsInput">SelfHostedDomainsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.serviceAuth401RedirectInput">ServiceAuth401RedirectInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.sessionDurationInput">SessionDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.skipAppLauncherLoginPageInput">SkipAppLauncherLoginPageInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.skipInterstitialInput">SkipInterstitialInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.tagsInput">TagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.targetCriteriaInput">TargetCriteriaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.zoneIdInput">ZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.allowAuthenticateViaWarp">AllowAuthenticateViaWarp</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.allowedIdps">AllowedIdps</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.appLauncherLogoUrl">AppLauncherLogoUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.appLauncherVisible">AppLauncherVisible</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.autoRedirectToIdentity">AutoRedirectToIdentity</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.bgColor">BgColor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.customDenyMessage">CustomDenyMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.customDenyUrl">CustomDenyUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.customNonIdentityDenyUrl">CustomNonIdentityDenyUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.customPages">CustomPages</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.domainType">DomainType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.enableBindingCookie">EnableBindingCookie</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.headerBgColor">HeaderBgColor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.httpOnlyCookieAttribute">HttpOnlyCookieAttribute</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.logoUrl">LogoUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.optionsPreflightBypass">OptionsPreflightBypass</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.policies">Policies</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.sameSiteCookieAttribute">SameSiteCookieAttribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.selfHostedDomains">SelfHostedDomains</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.serviceAuth401Redirect">ServiceAuth401Redirect</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.sessionDuration">SessionDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.skipAppLauncherLoginPage">SkipAppLauncherLoginPage</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.skipInterstitial">SkipInterstitial</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Aud`<sup>Required</sup> <a name="Aud" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.aud"></a>

```go
func Aud() *string
```

- *Type:* *string

---

##### `CorsHeaders`<sup>Required</sup> <a name="CorsHeaders" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.corsHeaders"></a>

```go
func CorsHeaders() ZeroTrustAccessApplicationCorsHeadersList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersList">ZeroTrustAccessApplicationCorsHeadersList</a>

---

##### `Destinations`<sup>Required</sup> <a name="Destinations" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.destinations"></a>

```go
func Destinations() ZeroTrustAccessApplicationDestinationsList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsList">ZeroTrustAccessApplicationDestinationsList</a>

---

##### `FooterLinks`<sup>Required</sup> <a name="FooterLinks" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.footerLinks"></a>

```go
func FooterLinks() ZeroTrustAccessApplicationFooterLinksList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksList">ZeroTrustAccessApplicationFooterLinksList</a>

---

##### `LandingPageDesign`<sup>Required</sup> <a name="LandingPageDesign" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.landingPageDesign"></a>

```go
func LandingPageDesign() ZeroTrustAccessApplicationLandingPageDesignOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference">ZeroTrustAccessApplicationLandingPageDesignOutputReference</a>

---

##### `SaasApp`<sup>Required</sup> <a name="SaasApp" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.saasApp"></a>

```go
func SaasApp() ZeroTrustAccessApplicationSaasAppOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference">ZeroTrustAccessApplicationSaasAppOutputReference</a>

---

##### `ScimConfig`<sup>Required</sup> <a name="ScimConfig" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.scimConfig"></a>

```go
func ScimConfig() ZeroTrustAccessApplicationScimConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference">ZeroTrustAccessApplicationScimConfigOutputReference</a>

---

##### `TargetCriteria`<sup>Required</sup> <a name="TargetCriteria" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.targetCriteria"></a>

```go
func TargetCriteria() ZeroTrustAccessApplicationTargetCriteriaList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaList">ZeroTrustAccessApplicationTargetCriteriaList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `AllowAuthenticateViaWarpInput`<sup>Optional</sup> <a name="AllowAuthenticateViaWarpInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.allowAuthenticateViaWarpInput"></a>

```go
func AllowAuthenticateViaWarpInput() interface{}
```

- *Type:* interface{}

---

##### `AllowedIdpsInput`<sup>Optional</sup> <a name="AllowedIdpsInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.allowedIdpsInput"></a>

```go
func AllowedIdpsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AppLauncherLogoUrlInput`<sup>Optional</sup> <a name="AppLauncherLogoUrlInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.appLauncherLogoUrlInput"></a>

```go
func AppLauncherLogoUrlInput() *string
```

- *Type:* *string

---

##### `AppLauncherVisibleInput`<sup>Optional</sup> <a name="AppLauncherVisibleInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.appLauncherVisibleInput"></a>

```go
func AppLauncherVisibleInput() interface{}
```

- *Type:* interface{}

---

##### `AutoRedirectToIdentityInput`<sup>Optional</sup> <a name="AutoRedirectToIdentityInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.autoRedirectToIdentityInput"></a>

```go
func AutoRedirectToIdentityInput() interface{}
```

- *Type:* interface{}

---

##### `BgColorInput`<sup>Optional</sup> <a name="BgColorInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.bgColorInput"></a>

```go
func BgColorInput() *string
```

- *Type:* *string

---

##### `CorsHeadersInput`<sup>Optional</sup> <a name="CorsHeadersInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.corsHeadersInput"></a>

```go
func CorsHeadersInput() interface{}
```

- *Type:* interface{}

---

##### `CustomDenyMessageInput`<sup>Optional</sup> <a name="CustomDenyMessageInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.customDenyMessageInput"></a>

```go
func CustomDenyMessageInput() *string
```

- *Type:* *string

---

##### `CustomDenyUrlInput`<sup>Optional</sup> <a name="CustomDenyUrlInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.customDenyUrlInput"></a>

```go
func CustomDenyUrlInput() *string
```

- *Type:* *string

---

##### `CustomNonIdentityDenyUrlInput`<sup>Optional</sup> <a name="CustomNonIdentityDenyUrlInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.customNonIdentityDenyUrlInput"></a>

```go
func CustomNonIdentityDenyUrlInput() *string
```

- *Type:* *string

---

##### `CustomPagesInput`<sup>Optional</sup> <a name="CustomPagesInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.customPagesInput"></a>

```go
func CustomPagesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DestinationsInput`<sup>Optional</sup> <a name="DestinationsInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.destinationsInput"></a>

```go
func DestinationsInput() interface{}
```

- *Type:* interface{}

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.domainInput"></a>

```go
func DomainInput() *string
```

- *Type:* *string

---

##### `DomainTypeInput`<sup>Optional</sup> <a name="DomainTypeInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.domainTypeInput"></a>

```go
func DomainTypeInput() *string
```

- *Type:* *string

---

##### `EnableBindingCookieInput`<sup>Optional</sup> <a name="EnableBindingCookieInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.enableBindingCookieInput"></a>

```go
func EnableBindingCookieInput() interface{}
```

- *Type:* interface{}

---

##### `FooterLinksInput`<sup>Optional</sup> <a name="FooterLinksInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.footerLinksInput"></a>

```go
func FooterLinksInput() interface{}
```

- *Type:* interface{}

---

##### `HeaderBgColorInput`<sup>Optional</sup> <a name="HeaderBgColorInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.headerBgColorInput"></a>

```go
func HeaderBgColorInput() *string
```

- *Type:* *string

---

##### `HttpOnlyCookieAttributeInput`<sup>Optional</sup> <a name="HttpOnlyCookieAttributeInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.httpOnlyCookieAttributeInput"></a>

```go
func HttpOnlyCookieAttributeInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LandingPageDesignInput`<sup>Optional</sup> <a name="LandingPageDesignInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.landingPageDesignInput"></a>

```go
func LandingPageDesignInput() ZeroTrustAccessApplicationLandingPageDesign
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesign">ZeroTrustAccessApplicationLandingPageDesign</a>

---

##### `LogoUrlInput`<sup>Optional</sup> <a name="LogoUrlInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.logoUrlInput"></a>

```go
func LogoUrlInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OptionsPreflightBypassInput`<sup>Optional</sup> <a name="OptionsPreflightBypassInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.optionsPreflightBypassInput"></a>

```go
func OptionsPreflightBypassInput() interface{}
```

- *Type:* interface{}

---

##### `PoliciesInput`<sup>Optional</sup> <a name="PoliciesInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.policiesInput"></a>

```go
func PoliciesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SaasAppInput`<sup>Optional</sup> <a name="SaasAppInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.saasAppInput"></a>

```go
func SaasAppInput() ZeroTrustAccessApplicationSaasApp
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp">ZeroTrustAccessApplicationSaasApp</a>

---

##### `SameSiteCookieAttributeInput`<sup>Optional</sup> <a name="SameSiteCookieAttributeInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.sameSiteCookieAttributeInput"></a>

```go
func SameSiteCookieAttributeInput() *string
```

- *Type:* *string

---

##### `ScimConfigInput`<sup>Optional</sup> <a name="ScimConfigInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.scimConfigInput"></a>

```go
func ScimConfigInput() ZeroTrustAccessApplicationScimConfig
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfig">ZeroTrustAccessApplicationScimConfig</a>

---

##### `SelfHostedDomainsInput`<sup>Optional</sup> <a name="SelfHostedDomainsInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.selfHostedDomainsInput"></a>

```go
func SelfHostedDomainsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ServiceAuth401RedirectInput`<sup>Optional</sup> <a name="ServiceAuth401RedirectInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.serviceAuth401RedirectInput"></a>

```go
func ServiceAuth401RedirectInput() interface{}
```

- *Type:* interface{}

---

##### `SessionDurationInput`<sup>Optional</sup> <a name="SessionDurationInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.sessionDurationInput"></a>

```go
func SessionDurationInput() *string
```

- *Type:* *string

---

##### `SkipAppLauncherLoginPageInput`<sup>Optional</sup> <a name="SkipAppLauncherLoginPageInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.skipAppLauncherLoginPageInput"></a>

```go
func SkipAppLauncherLoginPageInput() interface{}
```

- *Type:* interface{}

---

##### `SkipInterstitialInput`<sup>Optional</sup> <a name="SkipInterstitialInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.skipInterstitialInput"></a>

```go
func SkipInterstitialInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.tagsInput"></a>

```go
func TagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TargetCriteriaInput`<sup>Optional</sup> <a name="TargetCriteriaInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.targetCriteriaInput"></a>

```go
func TargetCriteriaInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.zoneIdInput"></a>

```go
func ZoneIdInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `AllowAuthenticateViaWarp`<sup>Required</sup> <a name="AllowAuthenticateViaWarp" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.allowAuthenticateViaWarp"></a>

```go
func AllowAuthenticateViaWarp() interface{}
```

- *Type:* interface{}

---

##### `AllowedIdps`<sup>Required</sup> <a name="AllowedIdps" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.allowedIdps"></a>

```go
func AllowedIdps() *[]*string
```

- *Type:* *[]*string

---

##### `AppLauncherLogoUrl`<sup>Required</sup> <a name="AppLauncherLogoUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.appLauncherLogoUrl"></a>

```go
func AppLauncherLogoUrl() *string
```

- *Type:* *string

---

##### `AppLauncherVisible`<sup>Required</sup> <a name="AppLauncherVisible" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.appLauncherVisible"></a>

```go
func AppLauncherVisible() interface{}
```

- *Type:* interface{}

---

##### `AutoRedirectToIdentity`<sup>Required</sup> <a name="AutoRedirectToIdentity" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.autoRedirectToIdentity"></a>

```go
func AutoRedirectToIdentity() interface{}
```

- *Type:* interface{}

---

##### `BgColor`<sup>Required</sup> <a name="BgColor" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.bgColor"></a>

```go
func BgColor() *string
```

- *Type:* *string

---

##### `CustomDenyMessage`<sup>Required</sup> <a name="CustomDenyMessage" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.customDenyMessage"></a>

```go
func CustomDenyMessage() *string
```

- *Type:* *string

---

##### `CustomDenyUrl`<sup>Required</sup> <a name="CustomDenyUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.customDenyUrl"></a>

```go
func CustomDenyUrl() *string
```

- *Type:* *string

---

##### `CustomNonIdentityDenyUrl`<sup>Required</sup> <a name="CustomNonIdentityDenyUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.customNonIdentityDenyUrl"></a>

```go
func CustomNonIdentityDenyUrl() *string
```

- *Type:* *string

---

##### `CustomPages`<sup>Required</sup> <a name="CustomPages" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.customPages"></a>

```go
func CustomPages() *[]*string
```

- *Type:* *[]*string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `DomainType`<sup>Required</sup> <a name="DomainType" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.domainType"></a>

```go
func DomainType() *string
```

- *Type:* *string

---

##### `EnableBindingCookie`<sup>Required</sup> <a name="EnableBindingCookie" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.enableBindingCookie"></a>

```go
func EnableBindingCookie() interface{}
```

- *Type:* interface{}

---

##### `HeaderBgColor`<sup>Required</sup> <a name="HeaderBgColor" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.headerBgColor"></a>

```go
func HeaderBgColor() *string
```

- *Type:* *string

---

##### `HttpOnlyCookieAttribute`<sup>Required</sup> <a name="HttpOnlyCookieAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.httpOnlyCookieAttribute"></a>

```go
func HttpOnlyCookieAttribute() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LogoUrl`<sup>Required</sup> <a name="LogoUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.logoUrl"></a>

```go
func LogoUrl() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OptionsPreflightBypass`<sup>Required</sup> <a name="OptionsPreflightBypass" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.optionsPreflightBypass"></a>

```go
func OptionsPreflightBypass() interface{}
```

- *Type:* interface{}

---

##### `Policies`<sup>Required</sup> <a name="Policies" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.policies"></a>

```go
func Policies() *[]*string
```

- *Type:* *[]*string

---

##### `SameSiteCookieAttribute`<sup>Required</sup> <a name="SameSiteCookieAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.sameSiteCookieAttribute"></a>

```go
func SameSiteCookieAttribute() *string
```

- *Type:* *string

---

##### `SelfHostedDomains`<sup>Required</sup> <a name="SelfHostedDomains" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.selfHostedDomains"></a>

```go
func SelfHostedDomains() *[]*string
```

- *Type:* *[]*string

---

##### `ServiceAuth401Redirect`<sup>Required</sup> <a name="ServiceAuth401Redirect" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.serviceAuth401Redirect"></a>

```go
func ServiceAuth401Redirect() interface{}
```

- *Type:* interface{}

---

##### `SessionDuration`<sup>Required</sup> <a name="SessionDuration" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.sessionDuration"></a>

```go
func SessionDuration() *string
```

- *Type:* *string

---

##### `SkipAppLauncherLoginPage`<sup>Required</sup> <a name="SkipAppLauncherLoginPage" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.skipAppLauncherLoginPage"></a>

```go
func SkipAppLauncherLoginPage() interface{}
```

- *Type:* interface{}

---

##### `SkipInterstitial`<sup>Required</sup> <a name="SkipInterstitial" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.skipInterstitial"></a>

```go
func SkipInterstitial() interface{}
```

- *Type:* interface{}

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustAccessApplicationConfig <a name="ZeroTrustAccessApplicationConfig" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustaccessapplication"

&zerotrustaccessapplication.ZeroTrustAccessApplicationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	AllowAuthenticateViaWarp: interface{},
	AllowedIdps: *[]*string,
	AppLauncherLogoUrl: *string,
	AppLauncherVisible: interface{},
	AutoRedirectToIdentity: interface{},
	BgColor: *string,
	CorsHeaders: interface{},
	CustomDenyMessage: *string,
	CustomDenyUrl: *string,
	CustomNonIdentityDenyUrl: *string,
	CustomPages: *[]*string,
	Destinations: interface{},
	Domain: *string,
	DomainType: *string,
	EnableBindingCookie: interface{},
	FooterLinks: interface{},
	HeaderBgColor: *string,
	HttpOnlyCookieAttribute: interface{},
	Id: *string,
	LandingPageDesign: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesign,
	LogoUrl: *string,
	Name: *string,
	OptionsPreflightBypass: interface{},
	Policies: *[]*string,
	SaasApp: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp,
	SameSiteCookieAttribute: *string,
	ScimConfig: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfig,
	SelfHostedDomains: *[]*string,
	ServiceAuth401Redirect: interface{},
	SessionDuration: *string,
	SkipAppLauncherLoginPage: interface{},
	SkipInterstitial: interface{},
	Tags: *[]*string,
	TargetCriteria: interface{},
	Type: *string,
	ZoneId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.accountId">AccountId</a></code> | <code>*string</code> | The account identifier to target for the resource. Conflicts with `zone_id`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.allowAuthenticateViaWarp">AllowAuthenticateViaWarp</a></code> | <code>interface{}</code> | When set to true, users can authenticate to this application using their WARP session. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.allowedIdps">AllowedIdps</a></code> | <code>*[]*string</code> | The identity providers selected for the application. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.appLauncherLogoUrl">AppLauncherLogoUrl</a></code> | <code>*string</code> | The logo URL of the app launcher. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.appLauncherVisible">AppLauncherVisible</a></code> | <code>interface{}</code> | Option to show/hide applications in App Launcher. Defaults to `true`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.autoRedirectToIdentity">AutoRedirectToIdentity</a></code> | <code>interface{}</code> | Option to skip identity provider selection if only one is configured in `allowed_idps`. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.bgColor">BgColor</a></code> | <code>*string</code> | The background color of the app launcher. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.corsHeaders">CorsHeaders</a></code> | <code>interface{}</code> | cors_headers block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.customDenyMessage">CustomDenyMessage</a></code> | <code>*string</code> | Option that returns a custom error message when a user is denied access to the application. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.customDenyUrl">CustomDenyUrl</a></code> | <code>*string</code> | Option that redirects to a custom URL when a user is denied access to the application via identity based rules. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.customNonIdentityDenyUrl">CustomNonIdentityDenyUrl</a></code> | <code>*string</code> | Option that redirects to a custom URL when a user is denied access to the application via non identity rules. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.customPages">CustomPages</a></code> | <code>*[]*string</code> | The custom pages selected for the application. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.destinations">Destinations</a></code> | <code>interface{}</code> | destinations block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.domain">Domain</a></code> | <code>*string</code> | The primary hostname and path that Access will secure. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.domainType">DomainType</a></code> | <code>*string</code> | The type of the primary domain. Available values: `public`, `private`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.enableBindingCookie">EnableBindingCookie</a></code> | <code>interface{}</code> | Option to provide increased security against compromised authorization tokens and CSRF attacks by requiring an additional "binding" cookie on requests. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.footerLinks">FooterLinks</a></code> | <code>interface{}</code> | footer_links block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.headerBgColor">HeaderBgColor</a></code> | <code>*string</code> | The background color of the header bar in the app launcher. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.httpOnlyCookieAttribute">HttpOnlyCookieAttribute</a></code> | <code>interface{}</code> | Option to add the `HttpOnly` cookie flag to access tokens. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#id ZeroTrustAccessApplication#id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.landingPageDesign">LandingPageDesign</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesign">ZeroTrustAccessApplicationLandingPageDesign</a></code> | landing_page_design block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.logoUrl">LogoUrl</a></code> | <code>*string</code> | Image URL for the logo shown in the app launcher dashboard. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.name">Name</a></code> | <code>*string</code> | Friendly name of the Access Application. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.optionsPreflightBypass">OptionsPreflightBypass</a></code> | <code>interface{}</code> | Allows options preflight requests to bypass Access authentication and go directly to the origin. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.policies">Policies</a></code> | <code>*[]*string</code> | The policies associated with the application, in ascending order of precedence. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.saasApp">SaasApp</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp">ZeroTrustAccessApplicationSaasApp</a></code> | saas_app block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.sameSiteCookieAttribute">SameSiteCookieAttribute</a></code> | <code>*string</code> | Defines the same-site cookie setting for access tokens. Available values: `none`, `lax`, `strict`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.scimConfig">ScimConfig</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfig">ZeroTrustAccessApplicationScimConfig</a></code> | scim_config block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.selfHostedDomains">SelfHostedDomains</a></code> | <code>*[]*string</code> | List of public domains secured by Access. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.serviceAuth401Redirect">ServiceAuth401Redirect</a></code> | <code>interface{}</code> | Option to return a 401 status code in service authentication rules on failed requests. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.sessionDuration">SessionDuration</a></code> | <code>*string</code> | How often a user will be forced to re-authorise. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.skipAppLauncherLoginPage">SkipAppLauncherLoginPage</a></code> | <code>interface{}</code> | Option to skip the App Launcher landing page. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.skipInterstitial">SkipInterstitial</a></code> | <code>interface{}</code> | Option to skip the authorization interstitial when using the CLI. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.tags">Tags</a></code> | <code>*[]*string</code> | The itags associated with the application. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.targetCriteria">TargetCriteria</a></code> | <code>interface{}</code> | target_criteria block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.type">Type</a></code> | <code>*string</code> | The application type. Available values: `app_launcher`, `bookmark`, `biso`, `dash_sso`, `saas`, `self_hosted`, `ssh`, `vnc`, `warp`, `infrastructure`. Defaults to `self_hosted`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.zoneId">ZoneId</a></code> | <code>*string</code> | The zone identifier to target for the resource. Conflicts with `account_id`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

The account identifier to target for the resource. Conflicts with `zone_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#account_id ZeroTrustAccessApplication#account_id}

---

##### `AllowAuthenticateViaWarp`<sup>Optional</sup> <a name="AllowAuthenticateViaWarp" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.allowAuthenticateViaWarp"></a>

```go
AllowAuthenticateViaWarp interface{}
```

- *Type:* interface{}

When set to true, users can authenticate to this application using their WARP session.

When set to false this application will always require direct IdP authentication. This setting always overrides the organization setting for WARP authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#allow_authenticate_via_warp ZeroTrustAccessApplication#allow_authenticate_via_warp}

---

##### `AllowedIdps`<sup>Optional</sup> <a name="AllowedIdps" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.allowedIdps"></a>

```go
AllowedIdps *[]*string
```

- *Type:* *[]*string

The identity providers selected for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#allowed_idps ZeroTrustAccessApplication#allowed_idps}

---

##### `AppLauncherLogoUrl`<sup>Optional</sup> <a name="AppLauncherLogoUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.appLauncherLogoUrl"></a>

```go
AppLauncherLogoUrl *string
```

- *Type:* *string

The logo URL of the app launcher.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#app_launcher_logo_url ZeroTrustAccessApplication#app_launcher_logo_url}

---

##### `AppLauncherVisible`<sup>Optional</sup> <a name="AppLauncherVisible" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.appLauncherVisible"></a>

```go
AppLauncherVisible interface{}
```

- *Type:* interface{}

Option to show/hide applications in App Launcher. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#app_launcher_visible ZeroTrustAccessApplication#app_launcher_visible}

---

##### `AutoRedirectToIdentity`<sup>Optional</sup> <a name="AutoRedirectToIdentity" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.autoRedirectToIdentity"></a>

```go
AutoRedirectToIdentity interface{}
```

- *Type:* interface{}

Option to skip identity provider selection if only one is configured in `allowed_idps`. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#auto_redirect_to_identity ZeroTrustAccessApplication#auto_redirect_to_identity}

---

##### `BgColor`<sup>Optional</sup> <a name="BgColor" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.bgColor"></a>

```go
BgColor *string
```

- *Type:* *string

The background color of the app launcher.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#bg_color ZeroTrustAccessApplication#bg_color}

---

##### `CorsHeaders`<sup>Optional</sup> <a name="CorsHeaders" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.corsHeaders"></a>

```go
CorsHeaders interface{}
```

- *Type:* interface{}

cors_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#cors_headers ZeroTrustAccessApplication#cors_headers}

---

##### `CustomDenyMessage`<sup>Optional</sup> <a name="CustomDenyMessage" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.customDenyMessage"></a>

```go
CustomDenyMessage *string
```

- *Type:* *string

Option that returns a custom error message when a user is denied access to the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#custom_deny_message ZeroTrustAccessApplication#custom_deny_message}

---

##### `CustomDenyUrl`<sup>Optional</sup> <a name="CustomDenyUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.customDenyUrl"></a>

```go
CustomDenyUrl *string
```

- *Type:* *string

Option that redirects to a custom URL when a user is denied access to the application via identity based rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#custom_deny_url ZeroTrustAccessApplication#custom_deny_url}

---

##### `CustomNonIdentityDenyUrl`<sup>Optional</sup> <a name="CustomNonIdentityDenyUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.customNonIdentityDenyUrl"></a>

```go
CustomNonIdentityDenyUrl *string
```

- *Type:* *string

Option that redirects to a custom URL when a user is denied access to the application via non identity rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#custom_non_identity_deny_url ZeroTrustAccessApplication#custom_non_identity_deny_url}

---

##### `CustomPages`<sup>Optional</sup> <a name="CustomPages" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.customPages"></a>

```go
CustomPages *[]*string
```

- *Type:* *[]*string

The custom pages selected for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#custom_pages ZeroTrustAccessApplication#custom_pages}

---

##### `Destinations`<sup>Optional</sup> <a name="Destinations" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.destinations"></a>

```go
Destinations interface{}
```

- *Type:* interface{}

destinations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#destinations ZeroTrustAccessApplication#destinations}

---

##### `Domain`<sup>Optional</sup> <a name="Domain" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.domain"></a>

```go
Domain *string
```

- *Type:* *string

The primary hostname and path that Access will secure.

If the app is visible in the App Launcher dashboard, this is the domain that will be displayed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#domain ZeroTrustAccessApplication#domain}

---

##### `DomainType`<sup>Optional</sup> <a name="DomainType" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.domainType"></a>

```go
DomainType *string
```

- *Type:* *string

The type of the primary domain. Available values: `public`, `private`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#domain_type ZeroTrustAccessApplication#domain_type}

---

##### `EnableBindingCookie`<sup>Optional</sup> <a name="EnableBindingCookie" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.enableBindingCookie"></a>

```go
EnableBindingCookie interface{}
```

- *Type:* interface{}

Option to provide increased security against compromised authorization tokens and CSRF attacks by requiring an additional "binding" cookie on requests.

Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#enable_binding_cookie ZeroTrustAccessApplication#enable_binding_cookie}

---

##### `FooterLinks`<sup>Optional</sup> <a name="FooterLinks" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.footerLinks"></a>

```go
FooterLinks interface{}
```

- *Type:* interface{}

footer_links block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#footer_links ZeroTrustAccessApplication#footer_links}

---

##### `HeaderBgColor`<sup>Optional</sup> <a name="HeaderBgColor" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.headerBgColor"></a>

```go
HeaderBgColor *string
```

- *Type:* *string

The background color of the header bar in the app launcher.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#header_bg_color ZeroTrustAccessApplication#header_bg_color}

---

##### `HttpOnlyCookieAttribute`<sup>Optional</sup> <a name="HttpOnlyCookieAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.httpOnlyCookieAttribute"></a>

```go
HttpOnlyCookieAttribute interface{}
```

- *Type:* interface{}

Option to add the `HttpOnly` cookie flag to access tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#http_only_cookie_attribute ZeroTrustAccessApplication#http_only_cookie_attribute}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#id ZeroTrustAccessApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LandingPageDesign`<sup>Optional</sup> <a name="LandingPageDesign" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.landingPageDesign"></a>

```go
LandingPageDesign ZeroTrustAccessApplicationLandingPageDesign
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesign">ZeroTrustAccessApplicationLandingPageDesign</a>

landing_page_design block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#landing_page_design ZeroTrustAccessApplication#landing_page_design}

---

##### `LogoUrl`<sup>Optional</sup> <a name="LogoUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.logoUrl"></a>

```go
LogoUrl *string
```

- *Type:* *string

Image URL for the logo shown in the app launcher dashboard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#logo_url ZeroTrustAccessApplication#logo_url}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Friendly name of the Access Application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#name ZeroTrustAccessApplication#name}

---

##### `OptionsPreflightBypass`<sup>Optional</sup> <a name="OptionsPreflightBypass" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.optionsPreflightBypass"></a>

```go
OptionsPreflightBypass interface{}
```

- *Type:* interface{}

Allows options preflight requests to bypass Access authentication and go directly to the origin.

Cannot turn on if cors_headers is set. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#options_preflight_bypass ZeroTrustAccessApplication#options_preflight_bypass}

---

##### `Policies`<sup>Optional</sup> <a name="Policies" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.policies"></a>

```go
Policies *[]*string
```

- *Type:* *[]*string

The policies associated with the application, in ascending order of precedence.

Warning: Do not use this field while you still have this application ID referenced as `application_id` in any `cloudflare_access_policy` resource, as it can result in an inconsistent state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#policies ZeroTrustAccessApplication#policies}

---

##### `SaasApp`<sup>Optional</sup> <a name="SaasApp" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.saasApp"></a>

```go
SaasApp ZeroTrustAccessApplicationSaasApp
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp">ZeroTrustAccessApplicationSaasApp</a>

saas_app block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#saas_app ZeroTrustAccessApplication#saas_app}

---

##### `SameSiteCookieAttribute`<sup>Optional</sup> <a name="SameSiteCookieAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.sameSiteCookieAttribute"></a>

```go
SameSiteCookieAttribute *string
```

- *Type:* *string

Defines the same-site cookie setting for access tokens. Available values: `none`, `lax`, `strict`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#same_site_cookie_attribute ZeroTrustAccessApplication#same_site_cookie_attribute}

---

##### `ScimConfig`<sup>Optional</sup> <a name="ScimConfig" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.scimConfig"></a>

```go
ScimConfig ZeroTrustAccessApplicationScimConfig
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfig">ZeroTrustAccessApplicationScimConfig</a>

scim_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#scim_config ZeroTrustAccessApplication#scim_config}

---

##### `SelfHostedDomains`<sup>Optional</sup> <a name="SelfHostedDomains" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.selfHostedDomains"></a>

```go
SelfHostedDomains *[]*string
```

- *Type:* *[]*string

List of public domains secured by Access.

Only present for self_hosted, vnc, and ssh applications. Always includes the value set as `domain`. Deprecated in favor of `destinations` and will be removed in the next major version. Conflicts with `destinations`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#self_hosted_domains ZeroTrustAccessApplication#self_hosted_domains}

---

##### `ServiceAuth401Redirect`<sup>Optional</sup> <a name="ServiceAuth401Redirect" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.serviceAuth401Redirect"></a>

```go
ServiceAuth401Redirect interface{}
```

- *Type:* interface{}

Option to return a 401 status code in service authentication rules on failed requests. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#service_auth_401_redirect ZeroTrustAccessApplication#service_auth_401_redirect}

---

##### `SessionDuration`<sup>Optional</sup> <a name="SessionDuration" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.sessionDuration"></a>

```go
SessionDuration *string
```

- *Type:* *string

How often a user will be forced to re-authorise.

Must be in the format `48h` or `2h45m`. Defaults to `24h`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#session_duration ZeroTrustAccessApplication#session_duration}

---

##### `SkipAppLauncherLoginPage`<sup>Optional</sup> <a name="SkipAppLauncherLoginPage" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.skipAppLauncherLoginPage"></a>

```go
SkipAppLauncherLoginPage interface{}
```

- *Type:* interface{}

Option to skip the App Launcher landing page. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#skip_app_launcher_login_page ZeroTrustAccessApplication#skip_app_launcher_login_page}

---

##### `SkipInterstitial`<sup>Optional</sup> <a name="SkipInterstitial" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.skipInterstitial"></a>

```go
SkipInterstitial interface{}
```

- *Type:* interface{}

Option to skip the authorization interstitial when using the CLI. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#skip_interstitial ZeroTrustAccessApplication#skip_interstitial}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.tags"></a>

```go
Tags *[]*string
```

- *Type:* *[]*string

The itags associated with the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#tags ZeroTrustAccessApplication#tags}

---

##### `TargetCriteria`<sup>Optional</sup> <a name="TargetCriteria" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.targetCriteria"></a>

```go
TargetCriteria interface{}
```

- *Type:* interface{}

target_criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#target_criteria ZeroTrustAccessApplication#target_criteria}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

The application type. Available values: `app_launcher`, `bookmark`, `biso`, `dash_sso`, `saas`, `self_hosted`, `ssh`, `vnc`, `warp`, `infrastructure`. Defaults to `self_hosted`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#type ZeroTrustAccessApplication#type}

---

##### `ZoneId`<sup>Optional</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.zoneId"></a>

```go
ZoneId *string
```

- *Type:* *string

The zone identifier to target for the resource. Conflicts with `account_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#zone_id ZeroTrustAccessApplication#zone_id}

---

### ZeroTrustAccessApplicationCorsHeaders <a name="ZeroTrustAccessApplicationCorsHeaders" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeaders.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustaccessapplication"

&zerotrustaccessapplication.ZeroTrustAccessApplicationCorsHeaders {
	AllowAllHeaders: interface{},
	AllowAllMethods: interface{},
	AllowAllOrigins: interface{},
	AllowCredentials: interface{},
	AllowedHeaders: *[]*string,
	AllowedMethods: *[]*string,
	AllowedOrigins: *[]*string,
	MaxAge: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeaders.property.allowAllHeaders">AllowAllHeaders</a></code> | <code>interface{}</code> | Value to determine whether all HTTP headers are exposed. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeaders.property.allowAllMethods">AllowAllMethods</a></code> | <code>interface{}</code> | Value to determine whether all methods are exposed. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeaders.property.allowAllOrigins">AllowAllOrigins</a></code> | <code>interface{}</code> | Value to determine whether all origins are permitted to make CORS requests. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeaders.property.allowCredentials">AllowCredentials</a></code> | <code>interface{}</code> | Value to determine if credentials (cookies, authorization headers, or TLS client certificates) are included with requests. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeaders.property.allowedHeaders">AllowedHeaders</a></code> | <code>*[]*string</code> | List of HTTP headers to expose via CORS. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeaders.property.allowedMethods">AllowedMethods</a></code> | <code>*[]*string</code> | List of methods to expose via CORS. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeaders.property.allowedOrigins">AllowedOrigins</a></code> | <code>*[]*string</code> | List of origins permitted to make CORS requests. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeaders.property.maxAge">MaxAge</a></code> | <code>*f64</code> | The maximum time a preflight request will be cached. |

---

##### `AllowAllHeaders`<sup>Optional</sup> <a name="AllowAllHeaders" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeaders.property.allowAllHeaders"></a>

```go
AllowAllHeaders interface{}
```

- *Type:* interface{}

Value to determine whether all HTTP headers are exposed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#allow_all_headers ZeroTrustAccessApplication#allow_all_headers}

---

##### `AllowAllMethods`<sup>Optional</sup> <a name="AllowAllMethods" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeaders.property.allowAllMethods"></a>

```go
AllowAllMethods interface{}
```

- *Type:* interface{}

Value to determine whether all methods are exposed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#allow_all_methods ZeroTrustAccessApplication#allow_all_methods}

---

##### `AllowAllOrigins`<sup>Optional</sup> <a name="AllowAllOrigins" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeaders.property.allowAllOrigins"></a>

```go
AllowAllOrigins interface{}
```

- *Type:* interface{}

Value to determine whether all origins are permitted to make CORS requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#allow_all_origins ZeroTrustAccessApplication#allow_all_origins}

---

##### `AllowCredentials`<sup>Optional</sup> <a name="AllowCredentials" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeaders.property.allowCredentials"></a>

```go
AllowCredentials interface{}
```

- *Type:* interface{}

Value to determine if credentials (cookies, authorization headers, or TLS client certificates) are included with requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#allow_credentials ZeroTrustAccessApplication#allow_credentials}

---

##### `AllowedHeaders`<sup>Optional</sup> <a name="AllowedHeaders" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeaders.property.allowedHeaders"></a>

```go
AllowedHeaders *[]*string
```

- *Type:* *[]*string

List of HTTP headers to expose via CORS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#allowed_headers ZeroTrustAccessApplication#allowed_headers}

---

##### `AllowedMethods`<sup>Optional</sup> <a name="AllowedMethods" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeaders.property.allowedMethods"></a>

```go
AllowedMethods *[]*string
```

- *Type:* *[]*string

List of methods to expose via CORS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#allowed_methods ZeroTrustAccessApplication#allowed_methods}

---

##### `AllowedOrigins`<sup>Optional</sup> <a name="AllowedOrigins" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeaders.property.allowedOrigins"></a>

```go
AllowedOrigins *[]*string
```

- *Type:* *[]*string

List of origins permitted to make CORS requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#allowed_origins ZeroTrustAccessApplication#allowed_origins}

---

##### `MaxAge`<sup>Optional</sup> <a name="MaxAge" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeaders.property.maxAge"></a>

```go
MaxAge *f64
```

- *Type:* *f64

The maximum time a preflight request will be cached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#max_age ZeroTrustAccessApplication#max_age}

---

### ZeroTrustAccessApplicationDestinations <a name="ZeroTrustAccessApplicationDestinations" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustaccessapplication"

&zerotrustaccessapplication.ZeroTrustAccessApplicationDestinations {
	Uri: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinations.property.uri">Uri</a></code> | <code>*string</code> | The URI of the destination. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinations.property.type">Type</a></code> | <code>*string</code> | The destination type. Available values: `public`, `private`. Defaults to `public`. |

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinations.property.uri"></a>

```go
Uri *string
```

- *Type:* *string

The URI of the destination.

Public destinations can include a domain and path with wildcards. Private destinations are an early access feature and gated behind a feature flag. Private destinations support private IPv4, IPv6, and Server Name Indications (SNI) with optional port ranges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#uri ZeroTrustAccessApplication#uri}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinations.property.type"></a>

```go
Type *string
```

- *Type:* *string

The destination type. Available values: `public`, `private`. Defaults to `public`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#type ZeroTrustAccessApplication#type}

---

### ZeroTrustAccessApplicationFooterLinks <a name="ZeroTrustAccessApplicationFooterLinks" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinks.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustaccessapplication"

&zerotrustaccessapplication.ZeroTrustAccessApplicationFooterLinks {
	Name: *string,
	Url: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinks.property.name">Name</a></code> | <code>*string</code> | The name of the footer link. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinks.property.url">Url</a></code> | <code>*string</code> | The URL of the footer link. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinks.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the footer link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#name ZeroTrustAccessApplication#name}

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinks.property.url"></a>

```go
Url *string
```

- *Type:* *string

The URL of the footer link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#url ZeroTrustAccessApplication#url}

---

### ZeroTrustAccessApplicationLandingPageDesign <a name="ZeroTrustAccessApplicationLandingPageDesign" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesign"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesign.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustaccessapplication"

&zerotrustaccessapplication.ZeroTrustAccessApplicationLandingPageDesign {
	ButtonColor: *string,
	ButtonTextColor: *string,
	ImageUrl: *string,
	Message: *string,
	Title: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesign.property.buttonColor">ButtonColor</a></code> | <code>*string</code> | The button color of the landing page. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesign.property.buttonTextColor">ButtonTextColor</a></code> | <code>*string</code> | The button text color of the landing page. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesign.property.imageUrl">ImageUrl</a></code> | <code>*string</code> | The URL of the image to be displayed in the landing page. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesign.property.message">Message</a></code> | <code>*string</code> | The message of the landing page. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesign.property.title">Title</a></code> | <code>*string</code> | The title of the landing page. |

---

##### `ButtonColor`<sup>Optional</sup> <a name="ButtonColor" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesign.property.buttonColor"></a>

```go
ButtonColor *string
```

- *Type:* *string

The button color of the landing page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#button_color ZeroTrustAccessApplication#button_color}

---

##### `ButtonTextColor`<sup>Optional</sup> <a name="ButtonTextColor" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesign.property.buttonTextColor"></a>

```go
ButtonTextColor *string
```

- *Type:* *string

The button text color of the landing page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#button_text_color ZeroTrustAccessApplication#button_text_color}

---

##### `ImageUrl`<sup>Optional</sup> <a name="ImageUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesign.property.imageUrl"></a>

```go
ImageUrl *string
```

- *Type:* *string

The URL of the image to be displayed in the landing page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#image_url ZeroTrustAccessApplication#image_url}

---

##### `Message`<sup>Optional</sup> <a name="Message" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesign.property.message"></a>

```go
Message *string
```

- *Type:* *string

The message of the landing page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#message ZeroTrustAccessApplication#message}

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesign.property.title"></a>

```go
Title *string
```

- *Type:* *string

The title of the landing page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#title ZeroTrustAccessApplication#title}

---

### ZeroTrustAccessApplicationSaasApp <a name="ZeroTrustAccessApplicationSaasApp" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustaccessapplication"

&zerotrustaccessapplication.ZeroTrustAccessApplicationSaasApp {
	AccessTokenLifetime: *string,
	AllowPkceWithoutClientSecret: interface{},
	AppLauncherUrl: *string,
	AuthType: *string,
	ConsumerServiceUrl: *string,
	CustomAttribute: interface{},
	CustomClaim: interface{},
	DefaultRelayState: *string,
	GrantTypes: *[]*string,
	GroupFilterRegex: *string,
	HybridAndImplicitOptions: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions,
	NameIdFormat: *string,
	NameIdTransformJsonata: *string,
	RedirectUris: *[]*string,
	RefreshTokenOptions: interface{},
	SamlAttributeTransformJsonata: *string,
	Scopes: *[]*string,
	SpEntityId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.accessTokenLifetime">AccessTokenLifetime</a></code> | <code>*string</code> | The lifetime of the Access Token after creation. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.allowPkceWithoutClientSecret">AllowPkceWithoutClientSecret</a></code> | <code>interface{}</code> | Allow PKCE flow without a client secret. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.appLauncherUrl">AppLauncherUrl</a></code> | <code>*string</code> | The URL where this applications tile redirects users. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.authType">AuthType</a></code> | <code>*string</code> | **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.consumerServiceUrl">ConsumerServiceUrl</a></code> | <code>*string</code> | The service provider's endpoint that is responsible for receiving and parsing a SAML assertion. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.customAttribute">CustomAttribute</a></code> | <code>interface{}</code> | custom_attribute block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.customClaim">CustomClaim</a></code> | <code>interface{}</code> | custom_claim block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.defaultRelayState">DefaultRelayState</a></code> | <code>*string</code> | The relay state used if not provided by the identity provider. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.grantTypes">GrantTypes</a></code> | <code>*[]*string</code> | The OIDC flows supported by this application. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.groupFilterRegex">GroupFilterRegex</a></code> | <code>*string</code> | A regex to filter Cloudflare groups returned in ID token and userinfo endpoint. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.hybridAndImplicitOptions">HybridAndImplicitOptions</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions">ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions</a></code> | hybrid_and_implicit_options block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.nameIdFormat">NameIdFormat</a></code> | <code>*string</code> | The format of the name identifier sent to the SaaS application. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.nameIdTransformJsonata">NameIdTransformJsonata</a></code> | <code>*string</code> | A [JSONata](https://jsonata.org/) expression that transforms an application's user identities into a NameID value for its SAML assertion. This expression should evaluate to a singular string. The output of this expression can override the `name_id_format` setting. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.redirectUris">RedirectUris</a></code> | <code>*[]*string</code> | The permitted URL's for Cloudflare to return Authorization codes and Access/ID tokens. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.refreshTokenOptions">RefreshTokenOptions</a></code> | <code>interface{}</code> | refresh_token_options block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.samlAttributeTransformJsonata">SamlAttributeTransformJsonata</a></code> | <code>*string</code> | A [JSONata](https://jsonata.org/) expression that transforms an application's user identities into attribute assertions in the SAML response. The expression can transform id, email, name, and groups values. It can also transform fields listed in the saml_attributes or oidc_fields of the identity provider used to authenticate. The output of this expression must be a JSON object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.scopes">Scopes</a></code> | <code>*[]*string</code> | Define the user information shared with access. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.spEntityId">SpEntityId</a></code> | <code>*string</code> | A globally unique name for an identity or service provider. |

---

##### `AccessTokenLifetime`<sup>Optional</sup> <a name="AccessTokenLifetime" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.accessTokenLifetime"></a>

```go
AccessTokenLifetime *string
```

- *Type:* *string

The lifetime of the Access Token after creation.

Valid units are `m` and `h`. Must be greater than or equal to 1m and less than or equal to 24h.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#access_token_lifetime ZeroTrustAccessApplication#access_token_lifetime}

---

##### `AllowPkceWithoutClientSecret`<sup>Optional</sup> <a name="AllowPkceWithoutClientSecret" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.allowPkceWithoutClientSecret"></a>

```go
AllowPkceWithoutClientSecret interface{}
```

- *Type:* interface{}

Allow PKCE flow without a client secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#allow_pkce_without_client_secret ZeroTrustAccessApplication#allow_pkce_without_client_secret}

---

##### `AppLauncherUrl`<sup>Optional</sup> <a name="AppLauncherUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.appLauncherUrl"></a>

```go
AppLauncherUrl *string
```

- *Type:* *string

The URL where this applications tile redirects users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#app_launcher_url ZeroTrustAccessApplication#app_launcher_url}

---

##### `AuthType`<sup>Optional</sup> <a name="AuthType" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.authType"></a>

```go
AuthType *string
```

- *Type:* *string

**Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#auth_type ZeroTrustAccessApplication#auth_type}

---

##### `ConsumerServiceUrl`<sup>Optional</sup> <a name="ConsumerServiceUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.consumerServiceUrl"></a>

```go
ConsumerServiceUrl *string
```

- *Type:* *string

The service provider's endpoint that is responsible for receiving and parsing a SAML assertion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#consumer_service_url ZeroTrustAccessApplication#consumer_service_url}

---

##### `CustomAttribute`<sup>Optional</sup> <a name="CustomAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.customAttribute"></a>

```go
CustomAttribute interface{}
```

- *Type:* interface{}

custom_attribute block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#custom_attribute ZeroTrustAccessApplication#custom_attribute}

---

##### `CustomClaim`<sup>Optional</sup> <a name="CustomClaim" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.customClaim"></a>

```go
CustomClaim interface{}
```

- *Type:* interface{}

custom_claim block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#custom_claim ZeroTrustAccessApplication#custom_claim}

---

##### `DefaultRelayState`<sup>Optional</sup> <a name="DefaultRelayState" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.defaultRelayState"></a>

```go
DefaultRelayState *string
```

- *Type:* *string

The relay state used if not provided by the identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#default_relay_state ZeroTrustAccessApplication#default_relay_state}

---

##### `GrantTypes`<sup>Optional</sup> <a name="GrantTypes" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.grantTypes"></a>

```go
GrantTypes *[]*string
```

- *Type:* *[]*string

The OIDC flows supported by this application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#grant_types ZeroTrustAccessApplication#grant_types}

---

##### `GroupFilterRegex`<sup>Optional</sup> <a name="GroupFilterRegex" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.groupFilterRegex"></a>

```go
GroupFilterRegex *string
```

- *Type:* *string

A regex to filter Cloudflare groups returned in ID token and userinfo endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#group_filter_regex ZeroTrustAccessApplication#group_filter_regex}

---

##### `HybridAndImplicitOptions`<sup>Optional</sup> <a name="HybridAndImplicitOptions" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.hybridAndImplicitOptions"></a>

```go
HybridAndImplicitOptions ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions">ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions</a>

hybrid_and_implicit_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#hybrid_and_implicit_options ZeroTrustAccessApplication#hybrid_and_implicit_options}

---

##### `NameIdFormat`<sup>Optional</sup> <a name="NameIdFormat" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.nameIdFormat"></a>

```go
NameIdFormat *string
```

- *Type:* *string

The format of the name identifier sent to the SaaS application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#name_id_format ZeroTrustAccessApplication#name_id_format}

---

##### `NameIdTransformJsonata`<sup>Optional</sup> <a name="NameIdTransformJsonata" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.nameIdTransformJsonata"></a>

```go
NameIdTransformJsonata *string
```

- *Type:* *string

A [JSONata](https://jsonata.org/) expression that transforms an application's user identities into a NameID value for its SAML assertion. This expression should evaluate to a singular string. The output of this expression can override the `name_id_format` setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#name_id_transform_jsonata ZeroTrustAccessApplication#name_id_transform_jsonata}

---

##### `RedirectUris`<sup>Optional</sup> <a name="RedirectUris" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.redirectUris"></a>

```go
RedirectUris *[]*string
```

- *Type:* *[]*string

The permitted URL's for Cloudflare to return Authorization codes and Access/ID tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#redirect_uris ZeroTrustAccessApplication#redirect_uris}

---

##### `RefreshTokenOptions`<sup>Optional</sup> <a name="RefreshTokenOptions" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.refreshTokenOptions"></a>

```go
RefreshTokenOptions interface{}
```

- *Type:* interface{}

refresh_token_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#refresh_token_options ZeroTrustAccessApplication#refresh_token_options}

---

##### `SamlAttributeTransformJsonata`<sup>Optional</sup> <a name="SamlAttributeTransformJsonata" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.samlAttributeTransformJsonata"></a>

```go
SamlAttributeTransformJsonata *string
```

- *Type:* *string

A [JSONata](https://jsonata.org/) expression that transforms an application's user identities into attribute assertions in the SAML response. The expression can transform id, email, name, and groups values. It can also transform fields listed in the saml_attributes or oidc_fields of the identity provider used to authenticate. The output of this expression must be a JSON object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#saml_attribute_transform_jsonata ZeroTrustAccessApplication#saml_attribute_transform_jsonata}

---

##### `Scopes`<sup>Optional</sup> <a name="Scopes" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.scopes"></a>

```go
Scopes *[]*string
```

- *Type:* *[]*string

Define the user information shared with access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#scopes ZeroTrustAccessApplication#scopes}

---

##### `SpEntityId`<sup>Optional</sup> <a name="SpEntityId" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.spEntityId"></a>

```go
SpEntityId *string
```

- *Type:* *string

A globally unique name for an identity or service provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#sp_entity_id ZeroTrustAccessApplication#sp_entity_id}

---

### ZeroTrustAccessApplicationSaasAppCustomAttribute <a name="ZeroTrustAccessApplicationSaasAppCustomAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttribute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttribute.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustaccessapplication"

&zerotrustaccessapplication.ZeroTrustAccessApplicationSaasAppCustomAttribute {
	Source: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSource,
	FriendlyName: *string,
	Name: *string,
	NameFormat: *string,
	Required: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttribute.property.source">Source</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSource">ZeroTrustAccessApplicationSaasAppCustomAttributeSource</a></code> | source block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttribute.property.friendlyName">FriendlyName</a></code> | <code>*string</code> | A friendly name for the attribute as provided to the SaaS app. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttribute.property.name">Name</a></code> | <code>*string</code> | The name of the attribute as provided to the SaaS app. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttribute.property.nameFormat">NameFormat</a></code> | <code>*string</code> | A globally unique name for an identity or service provider. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttribute.property.required">Required</a></code> | <code>interface{}</code> | True if the attribute must be always present. |

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttribute.property.source"></a>

```go
Source ZeroTrustAccessApplicationSaasAppCustomAttributeSource
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSource">ZeroTrustAccessApplicationSaasAppCustomAttributeSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#source ZeroTrustAccessApplication#source}

---

##### `FriendlyName`<sup>Optional</sup> <a name="FriendlyName" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttribute.property.friendlyName"></a>

```go
FriendlyName *string
```

- *Type:* *string

A friendly name for the attribute as provided to the SaaS app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#friendly_name ZeroTrustAccessApplication#friendly_name}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttribute.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the attribute as provided to the SaaS app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#name ZeroTrustAccessApplication#name}

---

##### `NameFormat`<sup>Optional</sup> <a name="NameFormat" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttribute.property.nameFormat"></a>

```go
NameFormat *string
```

- *Type:* *string

A globally unique name for an identity or service provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#name_format ZeroTrustAccessApplication#name_format}

---

##### `Required`<sup>Optional</sup> <a name="Required" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttribute.property.required"></a>

```go
Required interface{}
```

- *Type:* interface{}

True if the attribute must be always present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#required ZeroTrustAccessApplication#required}

---

### ZeroTrustAccessApplicationSaasAppCustomAttributeSource <a name="ZeroTrustAccessApplicationSaasAppCustomAttributeSource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustaccessapplication"

&zerotrustaccessapplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSource {
	Name: *string,
	NameByIdp: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSource.property.name">Name</a></code> | <code>*string</code> | The name of the attribute as provided by the IDP. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSource.property.nameByIdp">NameByIdp</a></code> | <code>*map[string]*string</code> | A mapping from IdP ID to claim name. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSource.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the attribute as provided by the IDP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#name ZeroTrustAccessApplication#name}

---

##### `NameByIdp`<sup>Optional</sup> <a name="NameByIdp" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSource.property.nameByIdp"></a>

```go
NameByIdp *map[string]*string
```

- *Type:* *map[string]*string

A mapping from IdP ID to claim name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#name_by_idp ZeroTrustAccessApplication#name_by_idp}

---

### ZeroTrustAccessApplicationSaasAppCustomClaim <a name="ZeroTrustAccessApplicationSaasAppCustomClaim" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaim"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaim.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustaccessapplication"

&zerotrustaccessapplication.ZeroTrustAccessApplicationSaasAppCustomClaim {
	Source: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSource,
	Name: *string,
	Required: interface{},
	Scope: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaim.property.source">Source</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSource">ZeroTrustAccessApplicationSaasAppCustomClaimSource</a></code> | source block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaim.property.name">Name</a></code> | <code>*string</code> | The name of the attribute as provided to the SaaS app. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaim.property.required">Required</a></code> | <code>interface{}</code> | True if the attribute must be always present. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaim.property.scope">Scope</a></code> | <code>*string</code> | The scope of the claim. |

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaim.property.source"></a>

```go
Source ZeroTrustAccessApplicationSaasAppCustomClaimSource
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSource">ZeroTrustAccessApplicationSaasAppCustomClaimSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#source ZeroTrustAccessApplication#source}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaim.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the attribute as provided to the SaaS app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#name ZeroTrustAccessApplication#name}

---

##### `Required`<sup>Optional</sup> <a name="Required" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaim.property.required"></a>

```go
Required interface{}
```

- *Type:* interface{}

True if the attribute must be always present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#required ZeroTrustAccessApplication#required}

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaim.property.scope"></a>

```go
Scope *string
```

- *Type:* *string

The scope of the claim.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#scope ZeroTrustAccessApplication#scope}

---

### ZeroTrustAccessApplicationSaasAppCustomClaimSource <a name="ZeroTrustAccessApplicationSaasAppCustomClaimSource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustaccessapplication"

&zerotrustaccessapplication.ZeroTrustAccessApplicationSaasAppCustomClaimSource {
	Name: *string,
	NameByIdp: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSource.property.name">Name</a></code> | <code>*string</code> | The name of the attribute as provided by the IDP. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSource.property.nameByIdp">NameByIdp</a></code> | <code>*map[string]*string</code> | A mapping from IdP ID to claim name. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSource.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the attribute as provided by the IDP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#name ZeroTrustAccessApplication#name}

---

##### `NameByIdp`<sup>Optional</sup> <a name="NameByIdp" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSource.property.nameByIdp"></a>

```go
NameByIdp *map[string]*string
```

- *Type:* *map[string]*string

A mapping from IdP ID to claim name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#name_by_idp ZeroTrustAccessApplication#name_by_idp}

---

### ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions <a name="ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustaccessapplication"

&zerotrustaccessapplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions {
	ReturnAccessTokenFromAuthorizationEndpoint: interface{},
	ReturnIdTokenFromAuthorizationEndpoint: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions.property.returnAccessTokenFromAuthorizationEndpoint">ReturnAccessTokenFromAuthorizationEndpoint</a></code> | <code>interface{}</code> | If true, the authorization endpoint will return an access token. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions.property.returnIdTokenFromAuthorizationEndpoint">ReturnIdTokenFromAuthorizationEndpoint</a></code> | <code>interface{}</code> | If true, the authorization endpoint will return an id token. |

---

##### `ReturnAccessTokenFromAuthorizationEndpoint`<sup>Optional</sup> <a name="ReturnAccessTokenFromAuthorizationEndpoint" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions.property.returnAccessTokenFromAuthorizationEndpoint"></a>

```go
ReturnAccessTokenFromAuthorizationEndpoint interface{}
```

- *Type:* interface{}

If true, the authorization endpoint will return an access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#return_access_token_from_authorization_endpoint ZeroTrustAccessApplication#return_access_token_from_authorization_endpoint}

---

##### `ReturnIdTokenFromAuthorizationEndpoint`<sup>Optional</sup> <a name="ReturnIdTokenFromAuthorizationEndpoint" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions.property.returnIdTokenFromAuthorizationEndpoint"></a>

```go
ReturnIdTokenFromAuthorizationEndpoint interface{}
```

- *Type:* interface{}

If true, the authorization endpoint will return an id token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#return_id_token_from_authorization_endpoint ZeroTrustAccessApplication#return_id_token_from_authorization_endpoint}

---

### ZeroTrustAccessApplicationSaasAppRefreshTokenOptions <a name="ZeroTrustAccessApplicationSaasAppRefreshTokenOptions" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustaccessapplication"

&zerotrustaccessapplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptions {
	Lifetime: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptions.property.lifetime">Lifetime</a></code> | <code>*string</code> | How long a refresh token will be valid for after creation. |

---

##### `Lifetime`<sup>Optional</sup> <a name="Lifetime" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptions.property.lifetime"></a>

```go
Lifetime *string
```

- *Type:* *string

How long a refresh token will be valid for after creation.

Valid units are `m`, `h` and `d`. Must be longer than 1m.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#lifetime ZeroTrustAccessApplication#lifetime}

---

### ZeroTrustAccessApplicationScimConfig <a name="ZeroTrustAccessApplicationScimConfig" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustaccessapplication"

&zerotrustaccessapplication.ZeroTrustAccessApplicationScimConfig {
	IdpUid: *string,
	RemoteUri: *string,
	Authentication: interface{},
	DeactivateOnDelete: interface{},
	Enabled: interface{},
	Mappings: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfig.property.idpUid">IdpUid</a></code> | <code>*string</code> | The UIDs of the IdP to use as the source for SCIM resources to provision to this application. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfig.property.remoteUri">RemoteUri</a></code> | <code>*string</code> | The base URI for the application's SCIM-compatible API. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfig.property.authentication">Authentication</a></code> | <code>interface{}</code> | authentication block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfig.property.deactivateOnDelete">DeactivateOnDelete</a></code> | <code>interface{}</code> | If false, propagates DELETE requests to the target application for SCIM resources. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether SCIM provisioning is turned on for this application. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfig.property.mappings">Mappings</a></code> | <code>interface{}</code> | mappings block. |

---

##### `IdpUid`<sup>Required</sup> <a name="IdpUid" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfig.property.idpUid"></a>

```go
IdpUid *string
```

- *Type:* *string

The UIDs of the IdP to use as the source for SCIM resources to provision to this application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#idp_uid ZeroTrustAccessApplication#idp_uid}

---

##### `RemoteUri`<sup>Required</sup> <a name="RemoteUri" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfig.property.remoteUri"></a>

```go
RemoteUri *string
```

- *Type:* *string

The base URI for the application's SCIM-compatible API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#remote_uri ZeroTrustAccessApplication#remote_uri}

---

##### `Authentication`<sup>Optional</sup> <a name="Authentication" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfig.property.authentication"></a>

```go
Authentication interface{}
```

- *Type:* interface{}

authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#authentication ZeroTrustAccessApplication#authentication}

---

##### `DeactivateOnDelete`<sup>Optional</sup> <a name="DeactivateOnDelete" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfig.property.deactivateOnDelete"></a>

```go
DeactivateOnDelete interface{}
```

- *Type:* interface{}

If false, propagates DELETE requests to the target application for SCIM resources.

If true, sets 'active' to false on the SCIM resource. Note: Some targets do not support DELETE operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#deactivate_on_delete ZeroTrustAccessApplication#deactivate_on_delete}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether SCIM provisioning is turned on for this application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#enabled ZeroTrustAccessApplication#enabled}

---

##### `Mappings`<sup>Optional</sup> <a name="Mappings" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfig.property.mappings"></a>

```go
Mappings interface{}
```

- *Type:* interface{}

mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#mappings ZeroTrustAccessApplication#mappings}

---

### ZeroTrustAccessApplicationScimConfigAuthentication <a name="ZeroTrustAccessApplicationScimConfigAuthentication" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthentication.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustaccessapplication"

&zerotrustaccessapplication.ZeroTrustAccessApplicationScimConfigAuthentication {
	Scheme: *string,
	AuthorizationUrl: *string,
	ClientId: *string,
	ClientSecret: *string,
	Password: *string,
	Scopes: *[]*string,
	Token: *string,
	TokenUrl: *string,
	User: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthentication.property.scheme">Scheme</a></code> | <code>*string</code> | The authentication scheme to use when making SCIM requests to this application. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthentication.property.authorizationUrl">AuthorizationUrl</a></code> | <code>*string</code> | URL used to generate the auth code used during token generation. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthentication.property.clientId">ClientId</a></code> | <code>*string</code> | Client ID used to authenticate when generating a token for authenticating with the remote SCIM service. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthentication.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | Secret used to authenticate when generating a token for authenticating with the remove SCIM service. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthentication.property.password">Password</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#password ZeroTrustAccessApplication#password}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthentication.property.scopes">Scopes</a></code> | <code>*[]*string</code> | The authorization scopes to request when generating the token used to authenticate with the remove SCIM service. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthentication.property.token">Token</a></code> | <code>*string</code> | Token used to authenticate with the remote SCIM service. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthentication.property.tokenUrl">TokenUrl</a></code> | <code>*string</code> | URL used to generate the token used to authenticate with the remote SCIM service. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthentication.property.user">User</a></code> | <code>*string</code> | User name used to authenticate with the remote SCIM service. |

---

##### `Scheme`<sup>Required</sup> <a name="Scheme" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthentication.property.scheme"></a>

```go
Scheme *string
```

- *Type:* *string

The authentication scheme to use when making SCIM requests to this application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#scheme ZeroTrustAccessApplication#scheme}

---

##### `AuthorizationUrl`<sup>Optional</sup> <a name="AuthorizationUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthentication.property.authorizationUrl"></a>

```go
AuthorizationUrl *string
```

- *Type:* *string

URL used to generate the auth code used during token generation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#authorization_url ZeroTrustAccessApplication#authorization_url}

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthentication.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

Client ID used to authenticate when generating a token for authenticating with the remote SCIM service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#client_id ZeroTrustAccessApplication#client_id}

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthentication.property.clientSecret"></a>

```go
ClientSecret *string
```

- *Type:* *string

Secret used to authenticate when generating a token for authenticating with the remove SCIM service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#client_secret ZeroTrustAccessApplication#client_secret}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthentication.property.password"></a>

```go
Password *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#password ZeroTrustAccessApplication#password}.

---

##### `Scopes`<sup>Optional</sup> <a name="Scopes" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthentication.property.scopes"></a>

```go
Scopes *[]*string
```

- *Type:* *[]*string

The authorization scopes to request when generating the token used to authenticate with the remove SCIM service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#scopes ZeroTrustAccessApplication#scopes}

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthentication.property.token"></a>

```go
Token *string
```

- *Type:* *string

Token used to authenticate with the remote SCIM service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#token ZeroTrustAccessApplication#token}

---

##### `TokenUrl`<sup>Optional</sup> <a name="TokenUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthentication.property.tokenUrl"></a>

```go
TokenUrl *string
```

- *Type:* *string

URL used to generate the token used to authenticate with the remote SCIM service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#token_url ZeroTrustAccessApplication#token_url}

---

##### `User`<sup>Optional</sup> <a name="User" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthentication.property.user"></a>

```go
User *string
```

- *Type:* *string

User name used to authenticate with the remote SCIM service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#user ZeroTrustAccessApplication#user}

---

### ZeroTrustAccessApplicationScimConfigMappings <a name="ZeroTrustAccessApplicationScimConfigMappings" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustaccessapplication"

&zerotrustaccessapplication.ZeroTrustAccessApplicationScimConfigMappings {
	Schema: *string,
	Enabled: interface{},
	Filter: *string,
	Operations: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperations,
	Strictness: *string,
	TransformJsonata: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappings.property.schema">Schema</a></code> | <code>*string</code> | Which SCIM resource type this mapping applies to. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappings.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether or not this mapping is enabled. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappings.property.filter">Filter</a></code> | <code>*string</code> | A [SCIM filter expression](https://datatracker.ietf.org/doc/html/rfc7644#section-3.4.2.2) that matches resources that should be provisioned to this application. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappings.property.operations">Operations</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperations">ZeroTrustAccessApplicationScimConfigMappingsOperations</a></code> | operations block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappings.property.strictness">Strictness</a></code> | <code>*string</code> | How strictly to adhere to outbound resource schemas when provisioning to this mapping. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappings.property.transformJsonata">TransformJsonata</a></code> | <code>*string</code> | A [JSONata](https://jsonata.org/) expression that transforms the resource before provisioning it in the application. |

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappings.property.schema"></a>

```go
Schema *string
```

- *Type:* *string

Which SCIM resource type this mapping applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#schema ZeroTrustAccessApplication#schema}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappings.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether or not this mapping is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#enabled ZeroTrustAccessApplication#enabled}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappings.property.filter"></a>

```go
Filter *string
```

- *Type:* *string

A [SCIM filter expression](https://datatracker.ietf.org/doc/html/rfc7644#section-3.4.2.2) that matches resources that should be provisioned to this application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#filter ZeroTrustAccessApplication#filter}

---

##### `Operations`<sup>Optional</sup> <a name="Operations" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappings.property.operations"></a>

```go
Operations ZeroTrustAccessApplicationScimConfigMappingsOperations
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperations">ZeroTrustAccessApplicationScimConfigMappingsOperations</a>

operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#operations ZeroTrustAccessApplication#operations}

---

##### `Strictness`<sup>Optional</sup> <a name="Strictness" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappings.property.strictness"></a>

```go
Strictness *string
```

- *Type:* *string

How strictly to adhere to outbound resource schemas when provisioning to this mapping.

"strict" will remove unknown values when provisioning, while "passthrough" will pass unknown values to the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#strictness ZeroTrustAccessApplication#strictness}

---

##### `TransformJsonata`<sup>Optional</sup> <a name="TransformJsonata" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappings.property.transformJsonata"></a>

```go
TransformJsonata *string
```

- *Type:* *string

A [JSONata](https://jsonata.org/) expression that transforms the resource before provisioning it in the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#transform_jsonata ZeroTrustAccessApplication#transform_jsonata}

---

### ZeroTrustAccessApplicationScimConfigMappingsOperations <a name="ZeroTrustAccessApplicationScimConfigMappingsOperations" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustaccessapplication"

&zerotrustaccessapplication.ZeroTrustAccessApplicationScimConfigMappingsOperations {
	Create: interface{},
	Delete: interface{},
	Update: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperations.property.create">Create</a></code> | <code>interface{}</code> | Whether or not this mapping applies to create (POST) operations. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperations.property.delete">Delete</a></code> | <code>interface{}</code> | Whether or not this mapping applies to DELETE operations. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperations.property.update">Update</a></code> | <code>interface{}</code> | Whether or not this mapping applies to update (PATCH/PUT) operations. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperations.property.create"></a>

```go
Create interface{}
```

- *Type:* interface{}

Whether or not this mapping applies to create (POST) operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#create ZeroTrustAccessApplication#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperations.property.delete"></a>

```go
Delete interface{}
```

- *Type:* interface{}

Whether or not this mapping applies to DELETE operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#delete ZeroTrustAccessApplication#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperations.property.update"></a>

```go
Update interface{}
```

- *Type:* interface{}

Whether or not this mapping applies to update (PATCH/PUT) operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#update ZeroTrustAccessApplication#update}

---

### ZeroTrustAccessApplicationTargetCriteria <a name="ZeroTrustAccessApplicationTargetCriteria" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteria.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustaccessapplication"

&zerotrustaccessapplication.ZeroTrustAccessApplicationTargetCriteria {
	Port: *f64,
	Protocol: *string,
	TargetAttributes: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteria.property.port">Port</a></code> | <code>*f64</code> | The port that the targets use for the chosen communication protocol. A port cannot be assigned to multiple protocols. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteria.property.protocol">Protocol</a></code> | <code>*string</code> | The communication protocol your application secures. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteria.property.targetAttributes">TargetAttributes</a></code> | <code>interface{}</code> | target_attributes block. |

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteria.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

The port that the targets use for the chosen communication protocol. A port cannot be assigned to multiple protocols.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#port ZeroTrustAccessApplication#port}

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteria.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

The communication protocol your application secures.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#protocol ZeroTrustAccessApplication#protocol}

---

##### `TargetAttributes`<sup>Required</sup> <a name="TargetAttributes" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteria.property.targetAttributes"></a>

```go
TargetAttributes interface{}
```

- *Type:* interface{}

target_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#target_attributes ZeroTrustAccessApplication#target_attributes}

---

### ZeroTrustAccessApplicationTargetCriteriaTargetAttributes <a name="ZeroTrustAccessApplicationTargetCriteriaTargetAttributes" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustaccessapplication"

&zerotrustaccessapplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributes {
	Name: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributes.property.name">Name</a></code> | <code>*string</code> | The key of the attribute. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributes.property.values">Values</a></code> | <code>*[]*string</code> | The values of the attribute. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributes.property.name"></a>

```go
Name *string
```

- *Type:* *string

The key of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#name ZeroTrustAccessApplication#name}

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributes.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

The values of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_application#values ZeroTrustAccessApplication#values}

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustAccessApplicationCorsHeadersList <a name="ZeroTrustAccessApplicationCorsHeadersList" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustaccessapplication"

zerotrustaccessapplication.NewZeroTrustAccessApplicationCorsHeadersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ZeroTrustAccessApplicationCorsHeadersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersList.get"></a>

```go
func Get(index *f64) ZeroTrustAccessApplicationCorsHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustAccessApplicationCorsHeadersOutputReference <a name="ZeroTrustAccessApplicationCorsHeadersOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustaccessapplication"

zerotrustaccessapplication.NewZeroTrustAccessApplicationCorsHeadersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ZeroTrustAccessApplicationCorsHeadersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowAllHeaders` <a name="ResetAllowAllHeaders" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.resetAllowAllHeaders"></a>

```go
func ResetAllowAllHeaders()
```

##### `ResetAllowAllMethods` <a name="ResetAllowAllMethods" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.resetAllowAllMethods"></a>

```go
func ResetAllowAllMethods()
```

##### `ResetAllowAllOrigins` <a name="ResetAllowAllOrigins" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.resetAllowAllOrigins"></a>

```go
func ResetAllowAllOrigins()
```

##### `ResetAllowCredentials` <a name="ResetAllowCredentials" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.resetAllowCredentials"></a>

```go
func ResetAllowCredentials()
```

##### `ResetAllowedHeaders` <a name="ResetAllowedHeaders" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.resetAllowedHeaders"></a>

```go
func ResetAllowedHeaders()
```

##### `ResetAllowedMethods` <a name="ResetAllowedMethods" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.resetAllowedMethods"></a>

```go
func ResetAllowedMethods()
```

##### `ResetAllowedOrigins` <a name="ResetAllowedOrigins" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.resetAllowedOrigins"></a>

```go
func ResetAllowedOrigins()
```

##### `ResetMaxAge` <a name="ResetMaxAge" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.resetMaxAge"></a>

```go
func ResetMaxAge()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.allowAllHeadersInput">AllowAllHeadersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.allowAllMethodsInput">AllowAllMethodsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.allowAllOriginsInput">AllowAllOriginsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.allowCredentialsInput">AllowCredentialsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.allowedHeadersInput">AllowedHeadersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.allowedMethodsInput">AllowedMethodsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.allowedOriginsInput">AllowedOriginsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.maxAgeInput">MaxAgeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.allowAllHeaders">AllowAllHeaders</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.allowAllMethods">AllowAllMethods</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.allowAllOrigins">AllowAllOrigins</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.allowCredentials">AllowCredentials</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.allowedHeaders">AllowedHeaders</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.allowedMethods">AllowedMethods</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.allowedOrigins">AllowedOrigins</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.maxAge">MaxAge</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowAllHeadersInput`<sup>Optional</sup> <a name="AllowAllHeadersInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.allowAllHeadersInput"></a>

```go
func AllowAllHeadersInput() interface{}
```

- *Type:* interface{}

---

##### `AllowAllMethodsInput`<sup>Optional</sup> <a name="AllowAllMethodsInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.allowAllMethodsInput"></a>

```go
func AllowAllMethodsInput() interface{}
```

- *Type:* interface{}

---

##### `AllowAllOriginsInput`<sup>Optional</sup> <a name="AllowAllOriginsInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.allowAllOriginsInput"></a>

```go
func AllowAllOriginsInput() interface{}
```

- *Type:* interface{}

---

##### `AllowCredentialsInput`<sup>Optional</sup> <a name="AllowCredentialsInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.allowCredentialsInput"></a>

```go
func AllowCredentialsInput() interface{}
```

- *Type:* interface{}

---

##### `AllowedHeadersInput`<sup>Optional</sup> <a name="AllowedHeadersInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.allowedHeadersInput"></a>

```go
func AllowedHeadersInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedMethodsInput`<sup>Optional</sup> <a name="AllowedMethodsInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.allowedMethodsInput"></a>

```go
func AllowedMethodsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedOriginsInput`<sup>Optional</sup> <a name="AllowedOriginsInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.allowedOriginsInput"></a>

```go
func AllowedOriginsInput() *[]*string
```

- *Type:* *[]*string

---

##### `MaxAgeInput`<sup>Optional</sup> <a name="MaxAgeInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.maxAgeInput"></a>

```go
func MaxAgeInput() *f64
```

- *Type:* *f64

---

##### `AllowAllHeaders`<sup>Required</sup> <a name="AllowAllHeaders" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.allowAllHeaders"></a>

```go
func AllowAllHeaders() interface{}
```

- *Type:* interface{}

---

##### `AllowAllMethods`<sup>Required</sup> <a name="AllowAllMethods" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.allowAllMethods"></a>

```go
func AllowAllMethods() interface{}
```

- *Type:* interface{}

---

##### `AllowAllOrigins`<sup>Required</sup> <a name="AllowAllOrigins" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.allowAllOrigins"></a>

```go
func AllowAllOrigins() interface{}
```

- *Type:* interface{}

---

##### `AllowCredentials`<sup>Required</sup> <a name="AllowCredentials" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.allowCredentials"></a>

```go
func AllowCredentials() interface{}
```

- *Type:* interface{}

---

##### `AllowedHeaders`<sup>Required</sup> <a name="AllowedHeaders" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.allowedHeaders"></a>

```go
func AllowedHeaders() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedMethods`<sup>Required</sup> <a name="AllowedMethods" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.allowedMethods"></a>

```go
func AllowedMethods() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedOrigins`<sup>Required</sup> <a name="AllowedOrigins" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.allowedOrigins"></a>

```go
func AllowedOrigins() *[]*string
```

- *Type:* *[]*string

---

##### `MaxAge`<sup>Required</sup> <a name="MaxAge" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.maxAge"></a>

```go
func MaxAge() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustAccessApplicationDestinationsList <a name="ZeroTrustAccessApplicationDestinationsList" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustaccessapplication"

zerotrustaccessapplication.NewZeroTrustAccessApplicationDestinationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ZeroTrustAccessApplicationDestinationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsList.get"></a>

```go
func Get(index *f64) ZeroTrustAccessApplicationDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustAccessApplicationDestinationsOutputReference <a name="ZeroTrustAccessApplicationDestinationsOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustaccessapplication"

zerotrustaccessapplication.NewZeroTrustAccessApplicationDestinationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ZeroTrustAccessApplicationDestinationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.property.uriInput">UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.property.uriInput"></a>

```go
func UriInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationDestinationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustAccessApplicationFooterLinksList <a name="ZeroTrustAccessApplicationFooterLinksList" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustaccessapplication"

zerotrustaccessapplication.NewZeroTrustAccessApplicationFooterLinksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ZeroTrustAccessApplicationFooterLinksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksList.get"></a>

```go
func Get(index *f64) ZeroTrustAccessApplicationFooterLinksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustAccessApplicationFooterLinksOutputReference <a name="ZeroTrustAccessApplicationFooterLinksOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustaccessapplication"

zerotrustaccessapplication.NewZeroTrustAccessApplicationFooterLinksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ZeroTrustAccessApplicationFooterLinksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.resetUrl"></a>

```go
func ResetUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustAccessApplicationLandingPageDesignOutputReference <a name="ZeroTrustAccessApplicationLandingPageDesignOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustaccessapplication"

zerotrustaccessapplication.NewZeroTrustAccessApplicationLandingPageDesignOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ZeroTrustAccessApplicationLandingPageDesignOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetButtonColor` <a name="ResetButtonColor" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.resetButtonColor"></a>

```go
func ResetButtonColor()
```

##### `ResetButtonTextColor` <a name="ResetButtonTextColor" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.resetButtonTextColor"></a>

```go
func ResetButtonTextColor()
```

##### `ResetImageUrl` <a name="ResetImageUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.resetImageUrl"></a>

```go
func ResetImageUrl()
```

##### `ResetMessage` <a name="ResetMessage" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.resetMessage"></a>

```go
func ResetMessage()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.resetTitle"></a>

```go
func ResetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.property.buttonColorInput">ButtonColorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.property.buttonTextColorInput">ButtonTextColorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.property.imageUrlInput">ImageUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.property.messageInput">MessageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.property.buttonColor">ButtonColor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.property.buttonTextColor">ButtonTextColor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.property.imageUrl">ImageUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesign">ZeroTrustAccessApplicationLandingPageDesign</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ButtonColorInput`<sup>Optional</sup> <a name="ButtonColorInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.property.buttonColorInput"></a>

```go
func ButtonColorInput() *string
```

- *Type:* *string

---

##### `ButtonTextColorInput`<sup>Optional</sup> <a name="ButtonTextColorInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.property.buttonTextColorInput"></a>

```go
func ButtonTextColorInput() *string
```

- *Type:* *string

---

##### `ImageUrlInput`<sup>Optional</sup> <a name="ImageUrlInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.property.imageUrlInput"></a>

```go
func ImageUrlInput() *string
```

- *Type:* *string

---

##### `MessageInput`<sup>Optional</sup> <a name="MessageInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.property.messageInput"></a>

```go
func MessageInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `ButtonColor`<sup>Required</sup> <a name="ButtonColor" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.property.buttonColor"></a>

```go
func ButtonColor() *string
```

- *Type:* *string

---

##### `ButtonTextColor`<sup>Required</sup> <a name="ButtonTextColor" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.property.buttonTextColor"></a>

```go
func ButtonTextColor() *string
```

- *Type:* *string

---

##### `ImageUrl`<sup>Required</sup> <a name="ImageUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.property.imageUrl"></a>

```go
func ImageUrl() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.property.internalValue"></a>

```go
func InternalValue() ZeroTrustAccessApplicationLandingPageDesign
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesign">ZeroTrustAccessApplicationLandingPageDesign</a>

---


### ZeroTrustAccessApplicationSaasAppCustomAttributeList <a name="ZeroTrustAccessApplicationSaasAppCustomAttributeList" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustaccessapplication"

zerotrustaccessapplication.NewZeroTrustAccessApplicationSaasAppCustomAttributeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ZeroTrustAccessApplicationSaasAppCustomAttributeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeList.get"></a>

```go
func Get(index *f64) ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference <a name="ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustaccessapplication"

zerotrustaccessapplication.NewZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSource` <a name="PutSource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.putSource"></a>

```go
func PutSource(value ZeroTrustAccessApplicationSaasAppCustomAttributeSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSource">ZeroTrustAccessApplicationSaasAppCustomAttributeSource</a>

---

##### `ResetFriendlyName` <a name="ResetFriendlyName" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.resetFriendlyName"></a>

```go
func ResetFriendlyName()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetNameFormat` <a name="ResetNameFormat" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.resetNameFormat"></a>

```go
func ResetNameFormat()
```

##### `ResetRequired` <a name="ResetRequired" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.resetRequired"></a>

```go
func ResetRequired()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.property.source">Source</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference">ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.property.friendlyNameInput">FriendlyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.property.nameFormatInput">NameFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.property.requiredInput">RequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.property.sourceInput">SourceInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSource">ZeroTrustAccessApplicationSaasAppCustomAttributeSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.property.friendlyName">FriendlyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.property.nameFormat">NameFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.property.required">Required</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.property.source"></a>

```go
func Source() ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference">ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference</a>

---

##### `FriendlyNameInput`<sup>Optional</sup> <a name="FriendlyNameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.property.friendlyNameInput"></a>

```go
func FriendlyNameInput() *string
```

- *Type:* *string

---

##### `NameFormatInput`<sup>Optional</sup> <a name="NameFormatInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.property.nameFormatInput"></a>

```go
func NameFormatInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RequiredInput`<sup>Optional</sup> <a name="RequiredInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.property.requiredInput"></a>

```go
func RequiredInput() interface{}
```

- *Type:* interface{}

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.property.sourceInput"></a>

```go
func SourceInput() ZeroTrustAccessApplicationSaasAppCustomAttributeSource
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSource">ZeroTrustAccessApplicationSaasAppCustomAttributeSource</a>

---

##### `FriendlyName`<sup>Required</sup> <a name="FriendlyName" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.property.friendlyName"></a>

```go
func FriendlyName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NameFormat`<sup>Required</sup> <a name="NameFormat" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.property.nameFormat"></a>

```go
func NameFormat() *string
```

- *Type:* *string

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.property.required"></a>

```go
func Required() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference <a name="ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustaccessapplication"

zerotrustaccessapplication.NewZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNameByIdp` <a name="ResetNameByIdp" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.resetNameByIdp"></a>

```go
func ResetNameByIdp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.property.nameByIdpInput">NameByIdpInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.property.nameByIdp">NameByIdp</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSource">ZeroTrustAccessApplicationSaasAppCustomAttributeSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameByIdpInput`<sup>Optional</sup> <a name="NameByIdpInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.property.nameByIdpInput"></a>

```go
func NameByIdpInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NameByIdp`<sup>Required</sup> <a name="NameByIdp" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.property.nameByIdp"></a>

```go
func NameByIdp() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() ZeroTrustAccessApplicationSaasAppCustomAttributeSource
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSource">ZeroTrustAccessApplicationSaasAppCustomAttributeSource</a>

---


### ZeroTrustAccessApplicationSaasAppCustomClaimList <a name="ZeroTrustAccessApplicationSaasAppCustomClaimList" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustaccessapplication"

zerotrustaccessapplication.NewZeroTrustAccessApplicationSaasAppCustomClaimList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ZeroTrustAccessApplicationSaasAppCustomClaimList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimList.get"></a>

```go
func Get(index *f64) ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference <a name="ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustaccessapplication"

zerotrustaccessapplication.NewZeroTrustAccessApplicationSaasAppCustomClaimOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSource` <a name="PutSource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.putSource"></a>

```go
func PutSource(value ZeroTrustAccessApplicationSaasAppCustomClaimSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSource">ZeroTrustAccessApplicationSaasAppCustomClaimSource</a>

---

##### `ResetName` <a name="ResetName" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetRequired` <a name="ResetRequired" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.resetRequired"></a>

```go
func ResetRequired()
```

##### `ResetScope` <a name="ResetScope" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.resetScope"></a>

```go
func ResetScope()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.property.source">Source</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference">ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.property.requiredInput">RequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.property.scopeInput">ScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.property.sourceInput">SourceInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSource">ZeroTrustAccessApplicationSaasAppCustomClaimSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.property.required">Required</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.property.source"></a>

```go
func Source() ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference">ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RequiredInput`<sup>Optional</sup> <a name="RequiredInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.property.requiredInput"></a>

```go
func RequiredInput() interface{}
```

- *Type:* interface{}

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.property.scopeInput"></a>

```go
func ScopeInput() *string
```

- *Type:* *string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.property.sourceInput"></a>

```go
func SourceInput() ZeroTrustAccessApplicationSaasAppCustomClaimSource
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSource">ZeroTrustAccessApplicationSaasAppCustomClaimSource</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.property.required"></a>

```go
func Required() interface{}
```

- *Type:* interface{}

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference <a name="ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustaccessapplication"

zerotrustaccessapplication.NewZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNameByIdp` <a name="ResetNameByIdp" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.resetNameByIdp"></a>

```go
func ResetNameByIdp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.property.nameByIdpInput">NameByIdpInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.property.nameByIdp">NameByIdp</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSource">ZeroTrustAccessApplicationSaasAppCustomClaimSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameByIdpInput`<sup>Optional</sup> <a name="NameByIdpInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.property.nameByIdpInput"></a>

```go
func NameByIdpInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NameByIdp`<sup>Required</sup> <a name="NameByIdp" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.property.nameByIdp"></a>

```go
func NameByIdp() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() ZeroTrustAccessApplicationSaasAppCustomClaimSource
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSource">ZeroTrustAccessApplicationSaasAppCustomClaimSource</a>

---


### ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference <a name="ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustaccessapplication"

zerotrustaccessapplication.NewZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetReturnAccessTokenFromAuthorizationEndpoint` <a name="ResetReturnAccessTokenFromAuthorizationEndpoint" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.resetReturnAccessTokenFromAuthorizationEndpoint"></a>

```go
func ResetReturnAccessTokenFromAuthorizationEndpoint()
```

##### `ResetReturnIdTokenFromAuthorizationEndpoint` <a name="ResetReturnIdTokenFromAuthorizationEndpoint" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.resetReturnIdTokenFromAuthorizationEndpoint"></a>

```go
func ResetReturnIdTokenFromAuthorizationEndpoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.property.returnAccessTokenFromAuthorizationEndpointInput">ReturnAccessTokenFromAuthorizationEndpointInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.property.returnIdTokenFromAuthorizationEndpointInput">ReturnIdTokenFromAuthorizationEndpointInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.property.returnAccessTokenFromAuthorizationEndpoint">ReturnAccessTokenFromAuthorizationEndpoint</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.property.returnIdTokenFromAuthorizationEndpoint">ReturnIdTokenFromAuthorizationEndpoint</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions">ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReturnAccessTokenFromAuthorizationEndpointInput`<sup>Optional</sup> <a name="ReturnAccessTokenFromAuthorizationEndpointInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.property.returnAccessTokenFromAuthorizationEndpointInput"></a>

```go
func ReturnAccessTokenFromAuthorizationEndpointInput() interface{}
```

- *Type:* interface{}

---

##### `ReturnIdTokenFromAuthorizationEndpointInput`<sup>Optional</sup> <a name="ReturnIdTokenFromAuthorizationEndpointInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.property.returnIdTokenFromAuthorizationEndpointInput"></a>

```go
func ReturnIdTokenFromAuthorizationEndpointInput() interface{}
```

- *Type:* interface{}

---

##### `ReturnAccessTokenFromAuthorizationEndpoint`<sup>Required</sup> <a name="ReturnAccessTokenFromAuthorizationEndpoint" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.property.returnAccessTokenFromAuthorizationEndpoint"></a>

```go
func ReturnAccessTokenFromAuthorizationEndpoint() interface{}
```

- *Type:* interface{}

---

##### `ReturnIdTokenFromAuthorizationEndpoint`<sup>Required</sup> <a name="ReturnIdTokenFromAuthorizationEndpoint" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.property.returnIdTokenFromAuthorizationEndpoint"></a>

```go
func ReturnIdTokenFromAuthorizationEndpoint() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions">ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions</a>

---


### ZeroTrustAccessApplicationSaasAppOutputReference <a name="ZeroTrustAccessApplicationSaasAppOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustaccessapplication"

zerotrustaccessapplication.NewZeroTrustAccessApplicationSaasAppOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ZeroTrustAccessApplicationSaasAppOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomAttribute` <a name="PutCustomAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.putCustomAttribute"></a>

```go
func PutCustomAttribute(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.putCustomAttribute.parameter.value"></a>

- *Type:* interface{}

---

##### `PutCustomClaim` <a name="PutCustomClaim" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.putCustomClaim"></a>

```go
func PutCustomClaim(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.putCustomClaim.parameter.value"></a>

- *Type:* interface{}

---

##### `PutHybridAndImplicitOptions` <a name="PutHybridAndImplicitOptions" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.putHybridAndImplicitOptions"></a>

```go
func PutHybridAndImplicitOptions(value ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.putHybridAndImplicitOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions">ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions</a>

---

##### `PutRefreshTokenOptions` <a name="PutRefreshTokenOptions" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.putRefreshTokenOptions"></a>

```go
func PutRefreshTokenOptions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.putRefreshTokenOptions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAccessTokenLifetime` <a name="ResetAccessTokenLifetime" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetAccessTokenLifetime"></a>

```go
func ResetAccessTokenLifetime()
```

##### `ResetAllowPkceWithoutClientSecret` <a name="ResetAllowPkceWithoutClientSecret" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetAllowPkceWithoutClientSecret"></a>

```go
func ResetAllowPkceWithoutClientSecret()
```

##### `ResetAppLauncherUrl` <a name="ResetAppLauncherUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetAppLauncherUrl"></a>

```go
func ResetAppLauncherUrl()
```

##### `ResetAuthType` <a name="ResetAuthType" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetAuthType"></a>

```go
func ResetAuthType()
```

##### `ResetConsumerServiceUrl` <a name="ResetConsumerServiceUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetConsumerServiceUrl"></a>

```go
func ResetConsumerServiceUrl()
```

##### `ResetCustomAttribute` <a name="ResetCustomAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetCustomAttribute"></a>

```go
func ResetCustomAttribute()
```

##### `ResetCustomClaim` <a name="ResetCustomClaim" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetCustomClaim"></a>

```go
func ResetCustomClaim()
```

##### `ResetDefaultRelayState` <a name="ResetDefaultRelayState" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetDefaultRelayState"></a>

```go
func ResetDefaultRelayState()
```

##### `ResetGrantTypes` <a name="ResetGrantTypes" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetGrantTypes"></a>

```go
func ResetGrantTypes()
```

##### `ResetGroupFilterRegex` <a name="ResetGroupFilterRegex" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetGroupFilterRegex"></a>

```go
func ResetGroupFilterRegex()
```

##### `ResetHybridAndImplicitOptions` <a name="ResetHybridAndImplicitOptions" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetHybridAndImplicitOptions"></a>

```go
func ResetHybridAndImplicitOptions()
```

##### `ResetNameIdFormat` <a name="ResetNameIdFormat" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetNameIdFormat"></a>

```go
func ResetNameIdFormat()
```

##### `ResetNameIdTransformJsonata` <a name="ResetNameIdTransformJsonata" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetNameIdTransformJsonata"></a>

```go
func ResetNameIdTransformJsonata()
```

##### `ResetRedirectUris` <a name="ResetRedirectUris" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetRedirectUris"></a>

```go
func ResetRedirectUris()
```

##### `ResetRefreshTokenOptions` <a name="ResetRefreshTokenOptions" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetRefreshTokenOptions"></a>

```go
func ResetRefreshTokenOptions()
```

##### `ResetSamlAttributeTransformJsonata` <a name="ResetSamlAttributeTransformJsonata" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetSamlAttributeTransformJsonata"></a>

```go
func ResetSamlAttributeTransformJsonata()
```

##### `ResetScopes` <a name="ResetScopes" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetScopes"></a>

```go
func ResetScopes()
```

##### `ResetSpEntityId` <a name="ResetSpEntityId" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetSpEntityId"></a>

```go
func ResetSpEntityId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.customAttribute">CustomAttribute</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeList">ZeroTrustAccessApplicationSaasAppCustomAttributeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.customClaim">CustomClaim</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimList">ZeroTrustAccessApplicationSaasAppCustomClaimList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.hybridAndImplicitOptions">HybridAndImplicitOptions</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference">ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.idpEntityId">IdpEntityId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.publicKey">PublicKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.refreshTokenOptions">RefreshTokenOptions</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList">ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.ssoEndpoint">SsoEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.accessTokenLifetimeInput">AccessTokenLifetimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.allowPkceWithoutClientSecretInput">AllowPkceWithoutClientSecretInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.appLauncherUrlInput">AppLauncherUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.authTypeInput">AuthTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.consumerServiceUrlInput">ConsumerServiceUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.customAttributeInput">CustomAttributeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.customClaimInput">CustomClaimInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.defaultRelayStateInput">DefaultRelayStateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.grantTypesInput">GrantTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.groupFilterRegexInput">GroupFilterRegexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.hybridAndImplicitOptionsInput">HybridAndImplicitOptionsInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions">ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.nameIdFormatInput">NameIdFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.nameIdTransformJsonataInput">NameIdTransformJsonataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.redirectUrisInput">RedirectUrisInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.refreshTokenOptionsInput">RefreshTokenOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.samlAttributeTransformJsonataInput">SamlAttributeTransformJsonataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.scopesInput">ScopesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.spEntityIdInput">SpEntityIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.accessTokenLifetime">AccessTokenLifetime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.allowPkceWithoutClientSecret">AllowPkceWithoutClientSecret</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.appLauncherUrl">AppLauncherUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.authType">AuthType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.consumerServiceUrl">ConsumerServiceUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.defaultRelayState">DefaultRelayState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.grantTypes">GrantTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.groupFilterRegex">GroupFilterRegex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.nameIdFormat">NameIdFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.nameIdTransformJsonata">NameIdTransformJsonata</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.redirectUris">RedirectUris</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.samlAttributeTransformJsonata">SamlAttributeTransformJsonata</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.scopes">Scopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.spEntityId">SpEntityId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp">ZeroTrustAccessApplicationSaasApp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `CustomAttribute`<sup>Required</sup> <a name="CustomAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.customAttribute"></a>

```go
func CustomAttribute() ZeroTrustAccessApplicationSaasAppCustomAttributeList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeList">ZeroTrustAccessApplicationSaasAppCustomAttributeList</a>

---

##### `CustomClaim`<sup>Required</sup> <a name="CustomClaim" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.customClaim"></a>

```go
func CustomClaim() ZeroTrustAccessApplicationSaasAppCustomClaimList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimList">ZeroTrustAccessApplicationSaasAppCustomClaimList</a>

---

##### `HybridAndImplicitOptions`<sup>Required</sup> <a name="HybridAndImplicitOptions" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.hybridAndImplicitOptions"></a>

```go
func HybridAndImplicitOptions() ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference">ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference</a>

---

##### `IdpEntityId`<sup>Required</sup> <a name="IdpEntityId" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.idpEntityId"></a>

```go
func IdpEntityId() *string
```

- *Type:* *string

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.publicKey"></a>

```go
func PublicKey() *string
```

- *Type:* *string

---

##### `RefreshTokenOptions`<sup>Required</sup> <a name="RefreshTokenOptions" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.refreshTokenOptions"></a>

```go
func RefreshTokenOptions() ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList">ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList</a>

---

##### `SsoEndpoint`<sup>Required</sup> <a name="SsoEndpoint" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.ssoEndpoint"></a>

```go
func SsoEndpoint() *string
```

- *Type:* *string

---

##### `AccessTokenLifetimeInput`<sup>Optional</sup> <a name="AccessTokenLifetimeInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.accessTokenLifetimeInput"></a>

```go
func AccessTokenLifetimeInput() *string
```

- *Type:* *string

---

##### `AllowPkceWithoutClientSecretInput`<sup>Optional</sup> <a name="AllowPkceWithoutClientSecretInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.allowPkceWithoutClientSecretInput"></a>

```go
func AllowPkceWithoutClientSecretInput() interface{}
```

- *Type:* interface{}

---

##### `AppLauncherUrlInput`<sup>Optional</sup> <a name="AppLauncherUrlInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.appLauncherUrlInput"></a>

```go
func AppLauncherUrlInput() *string
```

- *Type:* *string

---

##### `AuthTypeInput`<sup>Optional</sup> <a name="AuthTypeInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.authTypeInput"></a>

```go
func AuthTypeInput() *string
```

- *Type:* *string

---

##### `ConsumerServiceUrlInput`<sup>Optional</sup> <a name="ConsumerServiceUrlInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.consumerServiceUrlInput"></a>

```go
func ConsumerServiceUrlInput() *string
```

- *Type:* *string

---

##### `CustomAttributeInput`<sup>Optional</sup> <a name="CustomAttributeInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.customAttributeInput"></a>

```go
func CustomAttributeInput() interface{}
```

- *Type:* interface{}

---

##### `CustomClaimInput`<sup>Optional</sup> <a name="CustomClaimInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.customClaimInput"></a>

```go
func CustomClaimInput() interface{}
```

- *Type:* interface{}

---

##### `DefaultRelayStateInput`<sup>Optional</sup> <a name="DefaultRelayStateInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.defaultRelayStateInput"></a>

```go
func DefaultRelayStateInput() *string
```

- *Type:* *string

---

##### `GrantTypesInput`<sup>Optional</sup> <a name="GrantTypesInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.grantTypesInput"></a>

```go
func GrantTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `GroupFilterRegexInput`<sup>Optional</sup> <a name="GroupFilterRegexInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.groupFilterRegexInput"></a>

```go
func GroupFilterRegexInput() *string
```

- *Type:* *string

---

##### `HybridAndImplicitOptionsInput`<sup>Optional</sup> <a name="HybridAndImplicitOptionsInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.hybridAndImplicitOptionsInput"></a>

```go
func HybridAndImplicitOptionsInput() ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions">ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions</a>

---

##### `NameIdFormatInput`<sup>Optional</sup> <a name="NameIdFormatInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.nameIdFormatInput"></a>

```go
func NameIdFormatInput() *string
```

- *Type:* *string

---

##### `NameIdTransformJsonataInput`<sup>Optional</sup> <a name="NameIdTransformJsonataInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.nameIdTransformJsonataInput"></a>

```go
func NameIdTransformJsonataInput() *string
```

- *Type:* *string

---

##### `RedirectUrisInput`<sup>Optional</sup> <a name="RedirectUrisInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.redirectUrisInput"></a>

```go
func RedirectUrisInput() *[]*string
```

- *Type:* *[]*string

---

##### `RefreshTokenOptionsInput`<sup>Optional</sup> <a name="RefreshTokenOptionsInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.refreshTokenOptionsInput"></a>

```go
func RefreshTokenOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `SamlAttributeTransformJsonataInput`<sup>Optional</sup> <a name="SamlAttributeTransformJsonataInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.samlAttributeTransformJsonataInput"></a>

```go
func SamlAttributeTransformJsonataInput() *string
```

- *Type:* *string

---

##### `ScopesInput`<sup>Optional</sup> <a name="ScopesInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.scopesInput"></a>

```go
func ScopesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SpEntityIdInput`<sup>Optional</sup> <a name="SpEntityIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.spEntityIdInput"></a>

```go
func SpEntityIdInput() *string
```

- *Type:* *string

---

##### `AccessTokenLifetime`<sup>Required</sup> <a name="AccessTokenLifetime" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.accessTokenLifetime"></a>

```go
func AccessTokenLifetime() *string
```

- *Type:* *string

---

##### `AllowPkceWithoutClientSecret`<sup>Required</sup> <a name="AllowPkceWithoutClientSecret" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.allowPkceWithoutClientSecret"></a>

```go
func AllowPkceWithoutClientSecret() interface{}
```

- *Type:* interface{}

---

##### `AppLauncherUrl`<sup>Required</sup> <a name="AppLauncherUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.appLauncherUrl"></a>

```go
func AppLauncherUrl() *string
```

- *Type:* *string

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.authType"></a>

```go
func AuthType() *string
```

- *Type:* *string

---

##### `ConsumerServiceUrl`<sup>Required</sup> <a name="ConsumerServiceUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.consumerServiceUrl"></a>

```go
func ConsumerServiceUrl() *string
```

- *Type:* *string

---

##### `DefaultRelayState`<sup>Required</sup> <a name="DefaultRelayState" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.defaultRelayState"></a>

```go
func DefaultRelayState() *string
```

- *Type:* *string

---

##### `GrantTypes`<sup>Required</sup> <a name="GrantTypes" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.grantTypes"></a>

```go
func GrantTypes() *[]*string
```

- *Type:* *[]*string

---

##### `GroupFilterRegex`<sup>Required</sup> <a name="GroupFilterRegex" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.groupFilterRegex"></a>

```go
func GroupFilterRegex() *string
```

- *Type:* *string

---

##### `NameIdFormat`<sup>Required</sup> <a name="NameIdFormat" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.nameIdFormat"></a>

```go
func NameIdFormat() *string
```

- *Type:* *string

---

##### `NameIdTransformJsonata`<sup>Required</sup> <a name="NameIdTransformJsonata" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.nameIdTransformJsonata"></a>

```go
func NameIdTransformJsonata() *string
```

- *Type:* *string

---

##### `RedirectUris`<sup>Required</sup> <a name="RedirectUris" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.redirectUris"></a>

```go
func RedirectUris() *[]*string
```

- *Type:* *[]*string

---

##### `SamlAttributeTransformJsonata`<sup>Required</sup> <a name="SamlAttributeTransformJsonata" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.samlAttributeTransformJsonata"></a>

```go
func SamlAttributeTransformJsonata() *string
```

- *Type:* *string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.scopes"></a>

```go
func Scopes() *[]*string
```

- *Type:* *[]*string

---

##### `SpEntityId`<sup>Required</sup> <a name="SpEntityId" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.spEntityId"></a>

```go
func SpEntityId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.internalValue"></a>

```go
func InternalValue() ZeroTrustAccessApplicationSaasApp
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp">ZeroTrustAccessApplicationSaasApp</a>

---


### ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList <a name="ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustaccessapplication"

zerotrustaccessapplication.NewZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList.get"></a>

```go
func Get(index *f64) ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference <a name="ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustaccessapplication"

zerotrustaccessapplication.NewZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLifetime` <a name="ResetLifetime" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.resetLifetime"></a>

```go
func ResetLifetime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.property.lifetimeInput">LifetimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.property.lifetime">Lifetime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LifetimeInput`<sup>Optional</sup> <a name="LifetimeInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.property.lifetimeInput"></a>

```go
func LifetimeInput() *string
```

- *Type:* *string

---

##### `Lifetime`<sup>Required</sup> <a name="Lifetime" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.property.lifetime"></a>

```go
func Lifetime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustAccessApplicationScimConfigAuthenticationList <a name="ZeroTrustAccessApplicationScimConfigAuthenticationList" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustaccessapplication"

zerotrustaccessapplication.NewZeroTrustAccessApplicationScimConfigAuthenticationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ZeroTrustAccessApplicationScimConfigAuthenticationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationList.get"></a>

```go
func Get(index *f64) ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference <a name="ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustaccessapplication"

zerotrustaccessapplication.NewZeroTrustAccessApplicationScimConfigAuthenticationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthorizationUrl` <a name="ResetAuthorizationUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.resetAuthorizationUrl"></a>

```go
func ResetAuthorizationUrl()
```

##### `ResetClientId` <a name="ResetClientId" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.resetClientId"></a>

```go
func ResetClientId()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.resetClientSecret"></a>

```go
func ResetClientSecret()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetScopes` <a name="ResetScopes" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.resetScopes"></a>

```go
func ResetScopes()
```

##### `ResetToken` <a name="ResetToken" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.resetToken"></a>

```go
func ResetToken()
```

##### `ResetTokenUrl` <a name="ResetTokenUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.resetTokenUrl"></a>

```go
func ResetTokenUrl()
```

##### `ResetUser` <a name="ResetUser" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.resetUser"></a>

```go
func ResetUser()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.authorizationUrlInput">AuthorizationUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.schemeInput">SchemeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.scopesInput">ScopesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.tokenInput">TokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.tokenUrlInput">TokenUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.userInput">UserInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.authorizationUrl">AuthorizationUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.scheme">Scheme</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.scopes">Scopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.token">Token</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.tokenUrl">TokenUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.user">User</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorizationUrlInput`<sup>Optional</sup> <a name="AuthorizationUrlInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.authorizationUrlInput"></a>

```go
func AuthorizationUrlInput() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.clientSecretInput"></a>

```go
func ClientSecretInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `SchemeInput`<sup>Optional</sup> <a name="SchemeInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.schemeInput"></a>

```go
func SchemeInput() *string
```

- *Type:* *string

---

##### `ScopesInput`<sup>Optional</sup> <a name="ScopesInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.scopesInput"></a>

```go
func ScopesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.tokenInput"></a>

```go
func TokenInput() *string
```

- *Type:* *string

---

##### `TokenUrlInput`<sup>Optional</sup> <a name="TokenUrlInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.tokenUrlInput"></a>

```go
func TokenUrlInput() *string
```

- *Type:* *string

---

##### `UserInput`<sup>Optional</sup> <a name="UserInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.userInput"></a>

```go
func UserInput() *string
```

- *Type:* *string

---

##### `AuthorizationUrl`<sup>Required</sup> <a name="AuthorizationUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.authorizationUrl"></a>

```go
func AuthorizationUrl() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Scheme`<sup>Required</sup> <a name="Scheme" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.scheme"></a>

```go
func Scheme() *string
```

- *Type:* *string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.scopes"></a>

```go
func Scopes() *[]*string
```

- *Type:* *[]*string

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.token"></a>

```go
func Token() *string
```

- *Type:* *string

---

##### `TokenUrl`<sup>Required</sup> <a name="TokenUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.tokenUrl"></a>

```go
func TokenUrl() *string
```

- *Type:* *string

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.user"></a>

```go
func User() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustAccessApplicationScimConfigMappingsList <a name="ZeroTrustAccessApplicationScimConfigMappingsList" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustaccessapplication"

zerotrustaccessapplication.NewZeroTrustAccessApplicationScimConfigMappingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ZeroTrustAccessApplicationScimConfigMappingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsList.get"></a>

```go
func Get(index *f64) ZeroTrustAccessApplicationScimConfigMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference <a name="ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustaccessapplication"

zerotrustaccessapplication.NewZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.property.createInput">CreateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.property.updateInput">UpdateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.property.create">Create</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.property.delete">Delete</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.property.update">Update</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperations">ZeroTrustAccessApplicationScimConfigMappingsOperations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.property.createInput"></a>

```go
func CreateInput() interface{}
```

- *Type:* interface{}

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() interface{}
```

- *Type:* interface{}

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.property.updateInput"></a>

```go
func UpdateInput() interface{}
```

- *Type:* interface{}

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.property.create"></a>

```go
func Create() interface{}
```

- *Type:* interface{}

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.property.delete"></a>

```go
func Delete() interface{}
```

- *Type:* interface{}

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.property.update"></a>

```go
func Update() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.property.internalValue"></a>

```go
func InternalValue() ZeroTrustAccessApplicationScimConfigMappingsOperations
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperations">ZeroTrustAccessApplicationScimConfigMappingsOperations</a>

---


### ZeroTrustAccessApplicationScimConfigMappingsOutputReference <a name="ZeroTrustAccessApplicationScimConfigMappingsOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustaccessapplication"

zerotrustaccessapplication.NewZeroTrustAccessApplicationScimConfigMappingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ZeroTrustAccessApplicationScimConfigMappingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.resetStrictness">ResetStrictness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.resetTransformJsonata">ResetTransformJsonata</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOperations` <a name="PutOperations" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.putOperations"></a>

```go
func PutOperations(value ZeroTrustAccessApplicationScimConfigMappingsOperations)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.putOperations.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperations">ZeroTrustAccessApplicationScimConfigMappingsOperations</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetOperations` <a name="ResetOperations" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.resetOperations"></a>

```go
func ResetOperations()
```

##### `ResetStrictness` <a name="ResetStrictness" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.resetStrictness"></a>

```go
func ResetStrictness()
```

##### `ResetTransformJsonata` <a name="ResetTransformJsonata" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.resetTransformJsonata"></a>

```go
func ResetTransformJsonata()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.property.operations">Operations</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference">ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.property.filterInput">FilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.property.operationsInput">OperationsInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperations">ZeroTrustAccessApplicationScimConfigMappingsOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.property.schemaInput">SchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.property.strictnessInput">StrictnessInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.property.transformJsonataInput">TransformJsonataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.property.filter">Filter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.property.schema">Schema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.property.strictness">Strictness</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.property.transformJsonata">TransformJsonata</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Operations`<sup>Required</sup> <a name="Operations" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.property.operations"></a>

```go
func Operations() ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference">ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.property.filterInput"></a>

```go
func FilterInput() *string
```

- *Type:* *string

---

##### `OperationsInput`<sup>Optional</sup> <a name="OperationsInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.property.operationsInput"></a>

```go
func OperationsInput() ZeroTrustAccessApplicationScimConfigMappingsOperations
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperations">ZeroTrustAccessApplicationScimConfigMappingsOperations</a>

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.property.schemaInput"></a>

```go
func SchemaInput() *string
```

- *Type:* *string

---

##### `StrictnessInput`<sup>Optional</sup> <a name="StrictnessInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.property.strictnessInput"></a>

```go
func StrictnessInput() *string
```

- *Type:* *string

---

##### `TransformJsonataInput`<sup>Optional</sup> <a name="TransformJsonataInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.property.transformJsonataInput"></a>

```go
func TransformJsonataInput() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.property.filter"></a>

```go
func Filter() *string
```

- *Type:* *string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.property.schema"></a>

```go
func Schema() *string
```

- *Type:* *string

---

##### `Strictness`<sup>Required</sup> <a name="Strictness" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.property.strictness"></a>

```go
func Strictness() *string
```

- *Type:* *string

---

##### `TransformJsonata`<sup>Required</sup> <a name="TransformJsonata" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.property.transformJsonata"></a>

```go
func TransformJsonata() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustAccessApplicationScimConfigOutputReference <a name="ZeroTrustAccessApplicationScimConfigOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustaccessapplication"

zerotrustaccessapplication.NewZeroTrustAccessApplicationScimConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ZeroTrustAccessApplicationScimConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthentication` <a name="PutAuthentication" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.putAuthentication"></a>

```go
func PutAuthentication(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.putAuthentication.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMappings` <a name="PutMappings" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.putMappings"></a>

```go
func PutMappings(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.putMappings.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAuthentication` <a name="ResetAuthentication" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.resetAuthentication"></a>

```go
func ResetAuthentication()
```

##### `ResetDeactivateOnDelete` <a name="ResetDeactivateOnDelete" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.resetDeactivateOnDelete"></a>

```go
func ResetDeactivateOnDelete()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetMappings` <a name="ResetMappings" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.resetMappings"></a>

```go
func ResetMappings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.authentication">Authentication</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationList">ZeroTrustAccessApplicationScimConfigAuthenticationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.mappings">Mappings</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsList">ZeroTrustAccessApplicationScimConfigMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.authenticationInput">AuthenticationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.deactivateOnDeleteInput">DeactivateOnDeleteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.idpUidInput">IdpUidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.mappingsInput">MappingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.remoteUriInput">RemoteUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.deactivateOnDelete">DeactivateOnDelete</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.idpUid">IdpUid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.remoteUri">RemoteUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfig">ZeroTrustAccessApplicationScimConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Authentication`<sup>Required</sup> <a name="Authentication" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.authentication"></a>

```go
func Authentication() ZeroTrustAccessApplicationScimConfigAuthenticationList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationList">ZeroTrustAccessApplicationScimConfigAuthenticationList</a>

---

##### `Mappings`<sup>Required</sup> <a name="Mappings" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.mappings"></a>

```go
func Mappings() ZeroTrustAccessApplicationScimConfigMappingsList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsList">ZeroTrustAccessApplicationScimConfigMappingsList</a>

---

##### `AuthenticationInput`<sup>Optional</sup> <a name="AuthenticationInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.authenticationInput"></a>

```go
func AuthenticationInput() interface{}
```

- *Type:* interface{}

---

##### `DeactivateOnDeleteInput`<sup>Optional</sup> <a name="DeactivateOnDeleteInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.deactivateOnDeleteInput"></a>

```go
func DeactivateOnDeleteInput() interface{}
```

- *Type:* interface{}

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdpUidInput`<sup>Optional</sup> <a name="IdpUidInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.idpUidInput"></a>

```go
func IdpUidInput() *string
```

- *Type:* *string

---

##### `MappingsInput`<sup>Optional</sup> <a name="MappingsInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.mappingsInput"></a>

```go
func MappingsInput() interface{}
```

- *Type:* interface{}

---

##### `RemoteUriInput`<sup>Optional</sup> <a name="RemoteUriInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.remoteUriInput"></a>

```go
func RemoteUriInput() *string
```

- *Type:* *string

---

##### `DeactivateOnDelete`<sup>Required</sup> <a name="DeactivateOnDelete" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.deactivateOnDelete"></a>

```go
func DeactivateOnDelete() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `IdpUid`<sup>Required</sup> <a name="IdpUid" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.idpUid"></a>

```go
func IdpUid() *string
```

- *Type:* *string

---

##### `RemoteUri`<sup>Required</sup> <a name="RemoteUri" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.remoteUri"></a>

```go
func RemoteUri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ZeroTrustAccessApplicationScimConfig
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfig">ZeroTrustAccessApplicationScimConfig</a>

---


### ZeroTrustAccessApplicationTargetCriteriaList <a name="ZeroTrustAccessApplicationTargetCriteriaList" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustaccessapplication"

zerotrustaccessapplication.NewZeroTrustAccessApplicationTargetCriteriaList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ZeroTrustAccessApplicationTargetCriteriaList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaList.get"></a>

```go
func Get(index *f64) ZeroTrustAccessApplicationTargetCriteriaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustAccessApplicationTargetCriteriaOutputReference <a name="ZeroTrustAccessApplicationTargetCriteriaOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustaccessapplication"

zerotrustaccessapplication.NewZeroTrustAccessApplicationTargetCriteriaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ZeroTrustAccessApplicationTargetCriteriaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTargetAttributes` <a name="PutTargetAttributes" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.putTargetAttributes"></a>

```go
func PutTargetAttributes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.putTargetAttributes.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.property.targetAttributes">TargetAttributes</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList">ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.property.targetAttributesInput">TargetAttributesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TargetAttributes`<sup>Required</sup> <a name="TargetAttributes" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.property.targetAttributes"></a>

```go
func TargetAttributes() ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList">ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList</a>

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `TargetAttributesInput`<sup>Optional</sup> <a name="TargetAttributesInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.property.targetAttributesInput"></a>

```go
func TargetAttributesInput() interface{}
```

- *Type:* interface{}

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList <a name="ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustaccessapplication"

zerotrustaccessapplication.NewZeroTrustAccessApplicationTargetCriteriaTargetAttributesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList.get"></a>

```go
func Get(index *f64) ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference <a name="ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustaccessapplication"

zerotrustaccessapplication.NewZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



