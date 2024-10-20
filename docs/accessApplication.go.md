# `accessApplication` Submodule <a name="`accessApplication` Submodule" id="@cdktf/provider-cloudflare.accessApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccessApplication <a name="AccessApplication" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application cloudflare_access_application}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/accessapplication"

accessapplication.NewAccessApplication(scope Construct, id *string, config AccessApplicationConfig) AccessApplication
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig">AccessApplicationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig">AccessApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.putCorsHeaders">PutCorsHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.putFooterLinks">PutFooterLinks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.putLandingPageDesign">PutLandingPageDesign</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.putSaasApp">PutSaasApp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.putScimConfig">PutScimConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.putTargetCriteria">PutTargetCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetAllowAuthenticateViaWarp">ResetAllowAuthenticateViaWarp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetAllowedIdps">ResetAllowedIdps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetAppLauncherLogoUrl">ResetAppLauncherLogoUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetAppLauncherVisible">ResetAppLauncherVisible</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetAutoRedirectToIdentity">ResetAutoRedirectToIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetBgColor">ResetBgColor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetCorsHeaders">ResetCorsHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetCustomDenyMessage">ResetCustomDenyMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetCustomDenyUrl">ResetCustomDenyUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetCustomNonIdentityDenyUrl">ResetCustomNonIdentityDenyUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetCustomPages">ResetCustomPages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetDomain">ResetDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetEnableBindingCookie">ResetEnableBindingCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetFooterLinks">ResetFooterLinks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetHeaderBgColor">ResetHeaderBgColor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetHttpOnlyCookieAttribute">ResetHttpOnlyCookieAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetLandingPageDesign">ResetLandingPageDesign</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetLogoUrl">ResetLogoUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetOptionsPreflightBypass">ResetOptionsPreflightBypass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetPolicies">ResetPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetSaasApp">ResetSaasApp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetSameSiteCookieAttribute">ResetSameSiteCookieAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetScimConfig">ResetScimConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetSelfHostedDomains">ResetSelfHostedDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetServiceAuth401Redirect">ResetServiceAuth401Redirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetSessionDuration">ResetSessionDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetSkipAppLauncherLoginPage">ResetSkipAppLauncherLoginPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetSkipInterstitial">ResetSkipInterstitial</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetTargetCriteria">ResetTargetCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetZoneId">ResetZoneId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCorsHeaders` <a name="PutCorsHeaders" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.putCorsHeaders"></a>

```go
func PutCorsHeaders(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.putCorsHeaders.parameter.value"></a>

- *Type:* interface{}

---

##### `PutFooterLinks` <a name="PutFooterLinks" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.putFooterLinks"></a>

```go
func PutFooterLinks(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.putFooterLinks.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLandingPageDesign` <a name="PutLandingPageDesign" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.putLandingPageDesign"></a>

```go
func PutLandingPageDesign(value AccessApplicationLandingPageDesign)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.putLandingPageDesign.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesign">AccessApplicationLandingPageDesign</a>

---

##### `PutSaasApp` <a name="PutSaasApp" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.putSaasApp"></a>

```go
func PutSaasApp(value AccessApplicationSaasApp)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.putSaasApp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp">AccessApplicationSaasApp</a>

---

##### `PutScimConfig` <a name="PutScimConfig" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.putScimConfig"></a>

```go
func PutScimConfig(value AccessApplicationScimConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.putScimConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfig">AccessApplicationScimConfig</a>

---

##### `PutTargetCriteria` <a name="PutTargetCriteria" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.putTargetCriteria"></a>

```go
func PutTargetCriteria(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.putTargetCriteria.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetAccountId"></a>

```go
func ResetAccountId()
```

##### `ResetAllowAuthenticateViaWarp` <a name="ResetAllowAuthenticateViaWarp" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetAllowAuthenticateViaWarp"></a>

```go
func ResetAllowAuthenticateViaWarp()
```

##### `ResetAllowedIdps` <a name="ResetAllowedIdps" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetAllowedIdps"></a>

```go
func ResetAllowedIdps()
```

##### `ResetAppLauncherLogoUrl` <a name="ResetAppLauncherLogoUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetAppLauncherLogoUrl"></a>

```go
func ResetAppLauncherLogoUrl()
```

##### `ResetAppLauncherVisible` <a name="ResetAppLauncherVisible" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetAppLauncherVisible"></a>

```go
func ResetAppLauncherVisible()
```

##### `ResetAutoRedirectToIdentity` <a name="ResetAutoRedirectToIdentity" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetAutoRedirectToIdentity"></a>

```go
func ResetAutoRedirectToIdentity()
```

##### `ResetBgColor` <a name="ResetBgColor" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetBgColor"></a>

```go
func ResetBgColor()
```

##### `ResetCorsHeaders` <a name="ResetCorsHeaders" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetCorsHeaders"></a>

```go
func ResetCorsHeaders()
```

##### `ResetCustomDenyMessage` <a name="ResetCustomDenyMessage" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetCustomDenyMessage"></a>

```go
func ResetCustomDenyMessage()
```

##### `ResetCustomDenyUrl` <a name="ResetCustomDenyUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetCustomDenyUrl"></a>

```go
func ResetCustomDenyUrl()
```

##### `ResetCustomNonIdentityDenyUrl` <a name="ResetCustomNonIdentityDenyUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetCustomNonIdentityDenyUrl"></a>

```go
func ResetCustomNonIdentityDenyUrl()
```

##### `ResetCustomPages` <a name="ResetCustomPages" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetCustomPages"></a>

```go
func ResetCustomPages()
```

##### `ResetDomain` <a name="ResetDomain" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetDomain"></a>

```go
func ResetDomain()
```

##### `ResetEnableBindingCookie` <a name="ResetEnableBindingCookie" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetEnableBindingCookie"></a>

```go
func ResetEnableBindingCookie()
```

##### `ResetFooterLinks` <a name="ResetFooterLinks" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetFooterLinks"></a>

```go
func ResetFooterLinks()
```

##### `ResetHeaderBgColor` <a name="ResetHeaderBgColor" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetHeaderBgColor"></a>

```go
func ResetHeaderBgColor()
```

##### `ResetHttpOnlyCookieAttribute` <a name="ResetHttpOnlyCookieAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetHttpOnlyCookieAttribute"></a>

```go
func ResetHttpOnlyCookieAttribute()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetId"></a>

```go
func ResetId()
```

##### `ResetLandingPageDesign` <a name="ResetLandingPageDesign" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetLandingPageDesign"></a>

```go
func ResetLandingPageDesign()
```

##### `ResetLogoUrl` <a name="ResetLogoUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetLogoUrl"></a>

```go
func ResetLogoUrl()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetName"></a>

```go
func ResetName()
```

##### `ResetOptionsPreflightBypass` <a name="ResetOptionsPreflightBypass" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetOptionsPreflightBypass"></a>

```go
func ResetOptionsPreflightBypass()
```

##### `ResetPolicies` <a name="ResetPolicies" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetPolicies"></a>

```go
func ResetPolicies()
```

##### `ResetSaasApp` <a name="ResetSaasApp" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetSaasApp"></a>

```go
func ResetSaasApp()
```

##### `ResetSameSiteCookieAttribute` <a name="ResetSameSiteCookieAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetSameSiteCookieAttribute"></a>

```go
func ResetSameSiteCookieAttribute()
```

##### `ResetScimConfig` <a name="ResetScimConfig" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetScimConfig"></a>

```go
func ResetScimConfig()
```

##### `ResetSelfHostedDomains` <a name="ResetSelfHostedDomains" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetSelfHostedDomains"></a>

```go
func ResetSelfHostedDomains()
```

##### `ResetServiceAuth401Redirect` <a name="ResetServiceAuth401Redirect" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetServiceAuth401Redirect"></a>

```go
func ResetServiceAuth401Redirect()
```

##### `ResetSessionDuration` <a name="ResetSessionDuration" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetSessionDuration"></a>

```go
func ResetSessionDuration()
```

##### `ResetSkipAppLauncherLoginPage` <a name="ResetSkipAppLauncherLoginPage" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetSkipAppLauncherLoginPage"></a>

```go
func ResetSkipAppLauncherLoginPage()
```

##### `ResetSkipInterstitial` <a name="ResetSkipInterstitial" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetSkipInterstitial"></a>

```go
func ResetSkipInterstitial()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTargetCriteria` <a name="ResetTargetCriteria" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetTargetCriteria"></a>

```go
func ResetTargetCriteria()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetType"></a>

```go
func ResetType()
```

##### `ResetZoneId` <a name="ResetZoneId" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetZoneId"></a>

```go
func ResetZoneId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AccessApplication resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/accessapplication"

accessapplication.AccessApplication_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/accessapplication"

accessapplication.AccessApplication_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/accessapplication"

accessapplication.AccessApplication_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/accessapplication"

accessapplication.AccessApplication_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a AccessApplication resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AccessApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AccessApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the AccessApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.aud">Aud</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.corsHeaders">CorsHeaders</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList">AccessApplicationCorsHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.footerLinks">FooterLinks</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksList">AccessApplicationFooterLinksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.landingPageDesign">LandingPageDesign</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference">AccessApplicationLandingPageDesignOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.saasApp">SaasApp</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference">AccessApplicationSaasAppOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.scimConfig">ScimConfig</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference">AccessApplicationScimConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.targetCriteria">TargetCriteria</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaList">AccessApplicationTargetCriteriaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.allowAuthenticateViaWarpInput">AllowAuthenticateViaWarpInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.allowedIdpsInput">AllowedIdpsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.appLauncherLogoUrlInput">AppLauncherLogoUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.appLauncherVisibleInput">AppLauncherVisibleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.autoRedirectToIdentityInput">AutoRedirectToIdentityInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.bgColorInput">BgColorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.corsHeadersInput">CorsHeadersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.customDenyMessageInput">CustomDenyMessageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.customDenyUrlInput">CustomDenyUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.customNonIdentityDenyUrlInput">CustomNonIdentityDenyUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.customPagesInput">CustomPagesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.domainInput">DomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.enableBindingCookieInput">EnableBindingCookieInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.footerLinksInput">FooterLinksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.headerBgColorInput">HeaderBgColorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.httpOnlyCookieAttributeInput">HttpOnlyCookieAttributeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.landingPageDesignInput">LandingPageDesignInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesign">AccessApplicationLandingPageDesign</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.logoUrlInput">LogoUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.optionsPreflightBypassInput">OptionsPreflightBypassInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.policiesInput">PoliciesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.saasAppInput">SaasAppInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp">AccessApplicationSaasApp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.sameSiteCookieAttributeInput">SameSiteCookieAttributeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.scimConfigInput">ScimConfigInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfig">AccessApplicationScimConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.selfHostedDomainsInput">SelfHostedDomainsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.serviceAuth401RedirectInput">ServiceAuth401RedirectInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.sessionDurationInput">SessionDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.skipAppLauncherLoginPageInput">SkipAppLauncherLoginPageInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.skipInterstitialInput">SkipInterstitialInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.tagsInput">TagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.targetCriteriaInput">TargetCriteriaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.zoneIdInput">ZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.allowAuthenticateViaWarp">AllowAuthenticateViaWarp</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.allowedIdps">AllowedIdps</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.appLauncherLogoUrl">AppLauncherLogoUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.appLauncherVisible">AppLauncherVisible</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.autoRedirectToIdentity">AutoRedirectToIdentity</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.bgColor">BgColor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.customDenyMessage">CustomDenyMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.customDenyUrl">CustomDenyUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.customNonIdentityDenyUrl">CustomNonIdentityDenyUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.customPages">CustomPages</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.enableBindingCookie">EnableBindingCookie</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.headerBgColor">HeaderBgColor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.httpOnlyCookieAttribute">HttpOnlyCookieAttribute</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.logoUrl">LogoUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.optionsPreflightBypass">OptionsPreflightBypass</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.policies">Policies</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.sameSiteCookieAttribute">SameSiteCookieAttribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.selfHostedDomains">SelfHostedDomains</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.serviceAuth401Redirect">ServiceAuth401Redirect</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.sessionDuration">SessionDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.skipAppLauncherLoginPage">SkipAppLauncherLoginPage</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.skipInterstitial">SkipInterstitial</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Aud`<sup>Required</sup> <a name="Aud" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.aud"></a>

```go
func Aud() *string
```

- *Type:* *string

---

##### `CorsHeaders`<sup>Required</sup> <a name="CorsHeaders" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.corsHeaders"></a>

```go
func CorsHeaders() AccessApplicationCorsHeadersList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList">AccessApplicationCorsHeadersList</a>

---

##### `FooterLinks`<sup>Required</sup> <a name="FooterLinks" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.footerLinks"></a>

```go
func FooterLinks() AccessApplicationFooterLinksList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksList">AccessApplicationFooterLinksList</a>

---

##### `LandingPageDesign`<sup>Required</sup> <a name="LandingPageDesign" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.landingPageDesign"></a>

```go
func LandingPageDesign() AccessApplicationLandingPageDesignOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference">AccessApplicationLandingPageDesignOutputReference</a>

---

##### `SaasApp`<sup>Required</sup> <a name="SaasApp" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.saasApp"></a>

```go
func SaasApp() AccessApplicationSaasAppOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference">AccessApplicationSaasAppOutputReference</a>

---

##### `ScimConfig`<sup>Required</sup> <a name="ScimConfig" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.scimConfig"></a>

```go
func ScimConfig() AccessApplicationScimConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference">AccessApplicationScimConfigOutputReference</a>

---

##### `TargetCriteria`<sup>Required</sup> <a name="TargetCriteria" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.targetCriteria"></a>

```go
func TargetCriteria() AccessApplicationTargetCriteriaList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaList">AccessApplicationTargetCriteriaList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `AllowAuthenticateViaWarpInput`<sup>Optional</sup> <a name="AllowAuthenticateViaWarpInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.allowAuthenticateViaWarpInput"></a>

```go
func AllowAuthenticateViaWarpInput() interface{}
```

- *Type:* interface{}

---

##### `AllowedIdpsInput`<sup>Optional</sup> <a name="AllowedIdpsInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.allowedIdpsInput"></a>

```go
func AllowedIdpsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AppLauncherLogoUrlInput`<sup>Optional</sup> <a name="AppLauncherLogoUrlInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.appLauncherLogoUrlInput"></a>

```go
func AppLauncherLogoUrlInput() *string
```

- *Type:* *string

---

##### `AppLauncherVisibleInput`<sup>Optional</sup> <a name="AppLauncherVisibleInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.appLauncherVisibleInput"></a>

```go
func AppLauncherVisibleInput() interface{}
```

- *Type:* interface{}

---

##### `AutoRedirectToIdentityInput`<sup>Optional</sup> <a name="AutoRedirectToIdentityInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.autoRedirectToIdentityInput"></a>

```go
func AutoRedirectToIdentityInput() interface{}
```

- *Type:* interface{}

---

##### `BgColorInput`<sup>Optional</sup> <a name="BgColorInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.bgColorInput"></a>

```go
func BgColorInput() *string
```

- *Type:* *string

---

##### `CorsHeadersInput`<sup>Optional</sup> <a name="CorsHeadersInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.corsHeadersInput"></a>

```go
func CorsHeadersInput() interface{}
```

- *Type:* interface{}

---

##### `CustomDenyMessageInput`<sup>Optional</sup> <a name="CustomDenyMessageInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.customDenyMessageInput"></a>

```go
func CustomDenyMessageInput() *string
```

- *Type:* *string

---

##### `CustomDenyUrlInput`<sup>Optional</sup> <a name="CustomDenyUrlInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.customDenyUrlInput"></a>

```go
func CustomDenyUrlInput() *string
```

- *Type:* *string

---

##### `CustomNonIdentityDenyUrlInput`<sup>Optional</sup> <a name="CustomNonIdentityDenyUrlInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.customNonIdentityDenyUrlInput"></a>

```go
func CustomNonIdentityDenyUrlInput() *string
```

- *Type:* *string

---

##### `CustomPagesInput`<sup>Optional</sup> <a name="CustomPagesInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.customPagesInput"></a>

```go
func CustomPagesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.domainInput"></a>

```go
func DomainInput() *string
```

- *Type:* *string

---

##### `EnableBindingCookieInput`<sup>Optional</sup> <a name="EnableBindingCookieInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.enableBindingCookieInput"></a>

```go
func EnableBindingCookieInput() interface{}
```

- *Type:* interface{}

---

##### `FooterLinksInput`<sup>Optional</sup> <a name="FooterLinksInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.footerLinksInput"></a>

```go
func FooterLinksInput() interface{}
```

- *Type:* interface{}

---

##### `HeaderBgColorInput`<sup>Optional</sup> <a name="HeaderBgColorInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.headerBgColorInput"></a>

```go
func HeaderBgColorInput() *string
```

- *Type:* *string

---

##### `HttpOnlyCookieAttributeInput`<sup>Optional</sup> <a name="HttpOnlyCookieAttributeInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.httpOnlyCookieAttributeInput"></a>

```go
func HttpOnlyCookieAttributeInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LandingPageDesignInput`<sup>Optional</sup> <a name="LandingPageDesignInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.landingPageDesignInput"></a>

```go
func LandingPageDesignInput() AccessApplicationLandingPageDesign
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesign">AccessApplicationLandingPageDesign</a>

---

##### `LogoUrlInput`<sup>Optional</sup> <a name="LogoUrlInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.logoUrlInput"></a>

```go
func LogoUrlInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OptionsPreflightBypassInput`<sup>Optional</sup> <a name="OptionsPreflightBypassInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.optionsPreflightBypassInput"></a>

```go
func OptionsPreflightBypassInput() interface{}
```

- *Type:* interface{}

---

##### `PoliciesInput`<sup>Optional</sup> <a name="PoliciesInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.policiesInput"></a>

```go
func PoliciesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SaasAppInput`<sup>Optional</sup> <a name="SaasAppInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.saasAppInput"></a>

```go
func SaasAppInput() AccessApplicationSaasApp
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp">AccessApplicationSaasApp</a>

---

##### `SameSiteCookieAttributeInput`<sup>Optional</sup> <a name="SameSiteCookieAttributeInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.sameSiteCookieAttributeInput"></a>

```go
func SameSiteCookieAttributeInput() *string
```

- *Type:* *string

---

##### `ScimConfigInput`<sup>Optional</sup> <a name="ScimConfigInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.scimConfigInput"></a>

```go
func ScimConfigInput() AccessApplicationScimConfig
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfig">AccessApplicationScimConfig</a>

---

##### `SelfHostedDomainsInput`<sup>Optional</sup> <a name="SelfHostedDomainsInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.selfHostedDomainsInput"></a>

```go
func SelfHostedDomainsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ServiceAuth401RedirectInput`<sup>Optional</sup> <a name="ServiceAuth401RedirectInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.serviceAuth401RedirectInput"></a>

```go
func ServiceAuth401RedirectInput() interface{}
```

- *Type:* interface{}

---

##### `SessionDurationInput`<sup>Optional</sup> <a name="SessionDurationInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.sessionDurationInput"></a>

```go
func SessionDurationInput() *string
```

- *Type:* *string

---

##### `SkipAppLauncherLoginPageInput`<sup>Optional</sup> <a name="SkipAppLauncherLoginPageInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.skipAppLauncherLoginPageInput"></a>

```go
func SkipAppLauncherLoginPageInput() interface{}
```

- *Type:* interface{}

---

##### `SkipInterstitialInput`<sup>Optional</sup> <a name="SkipInterstitialInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.skipInterstitialInput"></a>

```go
func SkipInterstitialInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.tagsInput"></a>

```go
func TagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TargetCriteriaInput`<sup>Optional</sup> <a name="TargetCriteriaInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.targetCriteriaInput"></a>

```go
func TargetCriteriaInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.zoneIdInput"></a>

```go
func ZoneIdInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `AllowAuthenticateViaWarp`<sup>Required</sup> <a name="AllowAuthenticateViaWarp" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.allowAuthenticateViaWarp"></a>

```go
func AllowAuthenticateViaWarp() interface{}
```

- *Type:* interface{}

---

##### `AllowedIdps`<sup>Required</sup> <a name="AllowedIdps" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.allowedIdps"></a>

```go
func AllowedIdps() *[]*string
```

- *Type:* *[]*string

---

##### `AppLauncherLogoUrl`<sup>Required</sup> <a name="AppLauncherLogoUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.appLauncherLogoUrl"></a>

```go
func AppLauncherLogoUrl() *string
```

- *Type:* *string

---

##### `AppLauncherVisible`<sup>Required</sup> <a name="AppLauncherVisible" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.appLauncherVisible"></a>

```go
func AppLauncherVisible() interface{}
```

- *Type:* interface{}

---

##### `AutoRedirectToIdentity`<sup>Required</sup> <a name="AutoRedirectToIdentity" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.autoRedirectToIdentity"></a>

```go
func AutoRedirectToIdentity() interface{}
```

- *Type:* interface{}

---

##### `BgColor`<sup>Required</sup> <a name="BgColor" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.bgColor"></a>

```go
func BgColor() *string
```

- *Type:* *string

---

##### `CustomDenyMessage`<sup>Required</sup> <a name="CustomDenyMessage" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.customDenyMessage"></a>

```go
func CustomDenyMessage() *string
```

- *Type:* *string

---

##### `CustomDenyUrl`<sup>Required</sup> <a name="CustomDenyUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.customDenyUrl"></a>

```go
func CustomDenyUrl() *string
```

- *Type:* *string

---

##### `CustomNonIdentityDenyUrl`<sup>Required</sup> <a name="CustomNonIdentityDenyUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.customNonIdentityDenyUrl"></a>

```go
func CustomNonIdentityDenyUrl() *string
```

- *Type:* *string

---

##### `CustomPages`<sup>Required</sup> <a name="CustomPages" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.customPages"></a>

```go
func CustomPages() *[]*string
```

- *Type:* *[]*string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `EnableBindingCookie`<sup>Required</sup> <a name="EnableBindingCookie" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.enableBindingCookie"></a>

```go
func EnableBindingCookie() interface{}
```

- *Type:* interface{}

---

##### `HeaderBgColor`<sup>Required</sup> <a name="HeaderBgColor" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.headerBgColor"></a>

```go
func HeaderBgColor() *string
```

- *Type:* *string

---

##### `HttpOnlyCookieAttribute`<sup>Required</sup> <a name="HttpOnlyCookieAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.httpOnlyCookieAttribute"></a>

```go
func HttpOnlyCookieAttribute() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LogoUrl`<sup>Required</sup> <a name="LogoUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.logoUrl"></a>

```go
func LogoUrl() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OptionsPreflightBypass`<sup>Required</sup> <a name="OptionsPreflightBypass" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.optionsPreflightBypass"></a>

```go
func OptionsPreflightBypass() interface{}
```

- *Type:* interface{}

---

##### `Policies`<sup>Required</sup> <a name="Policies" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.policies"></a>

```go
func Policies() *[]*string
```

- *Type:* *[]*string

---

##### `SameSiteCookieAttribute`<sup>Required</sup> <a name="SameSiteCookieAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.sameSiteCookieAttribute"></a>

```go
func SameSiteCookieAttribute() *string
```

- *Type:* *string

---

##### `SelfHostedDomains`<sup>Required</sup> <a name="SelfHostedDomains" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.selfHostedDomains"></a>

```go
func SelfHostedDomains() *[]*string
```

- *Type:* *[]*string

---

##### `ServiceAuth401Redirect`<sup>Required</sup> <a name="ServiceAuth401Redirect" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.serviceAuth401Redirect"></a>

```go
func ServiceAuth401Redirect() interface{}
```

- *Type:* interface{}

---

##### `SessionDuration`<sup>Required</sup> <a name="SessionDuration" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.sessionDuration"></a>

```go
func SessionDuration() *string
```

- *Type:* *string

---

##### `SkipAppLauncherLoginPage`<sup>Required</sup> <a name="SkipAppLauncherLoginPage" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.skipAppLauncherLoginPage"></a>

```go
func SkipAppLauncherLoginPage() interface{}
```

- *Type:* interface{}

---

##### `SkipInterstitial`<sup>Required</sup> <a name="SkipInterstitial" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.skipInterstitial"></a>

```go
func SkipInterstitial() interface{}
```

- *Type:* interface{}

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AccessApplicationConfig <a name="AccessApplicationConfig" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/accessapplication"

&accessapplication.AccessApplicationConfig {
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
	Domain: *string,
	EnableBindingCookie: interface{},
	FooterLinks: interface{},
	HeaderBgColor: *string,
	HttpOnlyCookieAttribute: interface{},
	Id: *string,
	LandingPageDesign: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.accessApplication.AccessApplicationLandingPageDesign,
	LogoUrl: *string,
	Name: *string,
	OptionsPreflightBypass: interface{},
	Policies: *[]*string,
	SaasApp: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.accessApplication.AccessApplicationSaasApp,
	SameSiteCookieAttribute: *string,
	ScimConfig: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.accessApplication.AccessApplicationScimConfig,
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
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.accountId">AccountId</a></code> | <code>*string</code> | The account identifier to target for the resource. Conflicts with `zone_id`. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.allowAuthenticateViaWarp">AllowAuthenticateViaWarp</a></code> | <code>interface{}</code> | When set to true, users can authenticate to this application using their WARP session. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.allowedIdps">AllowedIdps</a></code> | <code>*[]*string</code> | The identity providers selected for the application. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.appLauncherLogoUrl">AppLauncherLogoUrl</a></code> | <code>*string</code> | The logo URL of the app launcher. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.appLauncherVisible">AppLauncherVisible</a></code> | <code>interface{}</code> | Option to show/hide applications in App Launcher. Defaults to `true`. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.autoRedirectToIdentity">AutoRedirectToIdentity</a></code> | <code>interface{}</code> | Option to skip identity provider selection if only one is configured in `allowed_idps`. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.bgColor">BgColor</a></code> | <code>*string</code> | The background color of the app launcher. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.corsHeaders">CorsHeaders</a></code> | <code>interface{}</code> | cors_headers block. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.customDenyMessage">CustomDenyMessage</a></code> | <code>*string</code> | Option that returns a custom error message when a user is denied access to the application. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.customDenyUrl">CustomDenyUrl</a></code> | <code>*string</code> | Option that redirects to a custom URL when a user is denied access to the application via identity based rules. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.customNonIdentityDenyUrl">CustomNonIdentityDenyUrl</a></code> | <code>*string</code> | Option that redirects to a custom URL when a user is denied access to the application via non identity rules. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.customPages">CustomPages</a></code> | <code>*[]*string</code> | The custom pages selected for the application. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.domain">Domain</a></code> | <code>*string</code> | The primary hostname and path that Access will secure. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.enableBindingCookie">EnableBindingCookie</a></code> | <code>interface{}</code> | Option to provide increased security against compromised authorization tokens and CSRF attacks by requiring an additional "binding" cookie on requests. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.footerLinks">FooterLinks</a></code> | <code>interface{}</code> | footer_links block. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.headerBgColor">HeaderBgColor</a></code> | <code>*string</code> | The background color of the header bar in the app launcher. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.httpOnlyCookieAttribute">HttpOnlyCookieAttribute</a></code> | <code>interface{}</code> | Option to add the `HttpOnly` cookie flag to access tokens. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#id AccessApplication#id}. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.landingPageDesign">LandingPageDesign</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesign">AccessApplicationLandingPageDesign</a></code> | landing_page_design block. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.logoUrl">LogoUrl</a></code> | <code>*string</code> | Image URL for the logo shown in the app launcher dashboard. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.name">Name</a></code> | <code>*string</code> | Friendly name of the Access Application. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.optionsPreflightBypass">OptionsPreflightBypass</a></code> | <code>interface{}</code> | Allows options preflight requests to bypass Access authentication and go directly to the origin. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.policies">Policies</a></code> | <code>*[]*string</code> | The policies associated with the application, in ascending order of precedence. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.saasApp">SaasApp</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp">AccessApplicationSaasApp</a></code> | saas_app block. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.sameSiteCookieAttribute">SameSiteCookieAttribute</a></code> | <code>*string</code> | Defines the same-site cookie setting for access tokens. Available values: `none`, `lax`, `strict`. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.scimConfig">ScimConfig</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfig">AccessApplicationScimConfig</a></code> | scim_config block. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.selfHostedDomains">SelfHostedDomains</a></code> | <code>*[]*string</code> | List of domains that access will secure. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.serviceAuth401Redirect">ServiceAuth401Redirect</a></code> | <code>interface{}</code> | Option to return a 401 status code in service authentication rules on failed requests. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.sessionDuration">SessionDuration</a></code> | <code>*string</code> | How often a user will be forced to re-authorise. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.skipAppLauncherLoginPage">SkipAppLauncherLoginPage</a></code> | <code>interface{}</code> | Option to skip the App Launcher landing page. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.skipInterstitial">SkipInterstitial</a></code> | <code>interface{}</code> | Option to skip the authorization interstitial when using the CLI. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.tags">Tags</a></code> | <code>*[]*string</code> | The itags associated with the application. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.targetCriteria">TargetCriteria</a></code> | <code>interface{}</code> | target_criteria block. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.type">Type</a></code> | <code>*string</code> | The application type. Available values: `app_launcher`, `bookmark`, `biso`, `dash_sso`, `saas`, `self_hosted`, `ssh`, `vnc`, `warp`, `infrastructure`. Defaults to `self_hosted`. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.zoneId">ZoneId</a></code> | <code>*string</code> | The zone identifier to target for the resource. Conflicts with `account_id`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

The account identifier to target for the resource. Conflicts with `zone_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#account_id AccessApplication#account_id}

---

##### `AllowAuthenticateViaWarp`<sup>Optional</sup> <a name="AllowAuthenticateViaWarp" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.allowAuthenticateViaWarp"></a>

```go
AllowAuthenticateViaWarp interface{}
```

- *Type:* interface{}

When set to true, users can authenticate to this application using their WARP session.

When set to false this application will always require direct IdP authentication. This setting always overrides the organization setting for WARP authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#allow_authenticate_via_warp AccessApplication#allow_authenticate_via_warp}

---

##### `AllowedIdps`<sup>Optional</sup> <a name="AllowedIdps" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.allowedIdps"></a>

```go
AllowedIdps *[]*string
```

- *Type:* *[]*string

The identity providers selected for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#allowed_idps AccessApplication#allowed_idps}

---

##### `AppLauncherLogoUrl`<sup>Optional</sup> <a name="AppLauncherLogoUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.appLauncherLogoUrl"></a>

```go
AppLauncherLogoUrl *string
```

- *Type:* *string

The logo URL of the app launcher.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#app_launcher_logo_url AccessApplication#app_launcher_logo_url}

---

##### `AppLauncherVisible`<sup>Optional</sup> <a name="AppLauncherVisible" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.appLauncherVisible"></a>

```go
AppLauncherVisible interface{}
```

- *Type:* interface{}

Option to show/hide applications in App Launcher. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#app_launcher_visible AccessApplication#app_launcher_visible}

---

##### `AutoRedirectToIdentity`<sup>Optional</sup> <a name="AutoRedirectToIdentity" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.autoRedirectToIdentity"></a>

```go
AutoRedirectToIdentity interface{}
```

- *Type:* interface{}

Option to skip identity provider selection if only one is configured in `allowed_idps`. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#auto_redirect_to_identity AccessApplication#auto_redirect_to_identity}

---

##### `BgColor`<sup>Optional</sup> <a name="BgColor" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.bgColor"></a>

```go
BgColor *string
```

- *Type:* *string

The background color of the app launcher.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#bg_color AccessApplication#bg_color}

---

##### `CorsHeaders`<sup>Optional</sup> <a name="CorsHeaders" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.corsHeaders"></a>

```go
CorsHeaders interface{}
```

- *Type:* interface{}

cors_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#cors_headers AccessApplication#cors_headers}

---

##### `CustomDenyMessage`<sup>Optional</sup> <a name="CustomDenyMessage" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.customDenyMessage"></a>

```go
CustomDenyMessage *string
```

- *Type:* *string

Option that returns a custom error message when a user is denied access to the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#custom_deny_message AccessApplication#custom_deny_message}

---

##### `CustomDenyUrl`<sup>Optional</sup> <a name="CustomDenyUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.customDenyUrl"></a>

```go
CustomDenyUrl *string
```

- *Type:* *string

Option that redirects to a custom URL when a user is denied access to the application via identity based rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#custom_deny_url AccessApplication#custom_deny_url}

---

##### `CustomNonIdentityDenyUrl`<sup>Optional</sup> <a name="CustomNonIdentityDenyUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.customNonIdentityDenyUrl"></a>

```go
CustomNonIdentityDenyUrl *string
```

- *Type:* *string

Option that redirects to a custom URL when a user is denied access to the application via non identity rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#custom_non_identity_deny_url AccessApplication#custom_non_identity_deny_url}

---

##### `CustomPages`<sup>Optional</sup> <a name="CustomPages" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.customPages"></a>

```go
CustomPages *[]*string
```

- *Type:* *[]*string

The custom pages selected for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#custom_pages AccessApplication#custom_pages}

---

##### `Domain`<sup>Optional</sup> <a name="Domain" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.domain"></a>

```go
Domain *string
```

- *Type:* *string

The primary hostname and path that Access will secure.

If the app is visible in the App Launcher dashboard, this is the domain that will be displayed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#domain AccessApplication#domain}

---

##### `EnableBindingCookie`<sup>Optional</sup> <a name="EnableBindingCookie" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.enableBindingCookie"></a>

```go
EnableBindingCookie interface{}
```

- *Type:* interface{}

Option to provide increased security against compromised authorization tokens and CSRF attacks by requiring an additional "binding" cookie on requests.

Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#enable_binding_cookie AccessApplication#enable_binding_cookie}

---

##### `FooterLinks`<sup>Optional</sup> <a name="FooterLinks" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.footerLinks"></a>

```go
FooterLinks interface{}
```

- *Type:* interface{}

footer_links block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#footer_links AccessApplication#footer_links}

---

##### `HeaderBgColor`<sup>Optional</sup> <a name="HeaderBgColor" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.headerBgColor"></a>

```go
HeaderBgColor *string
```

- *Type:* *string

The background color of the header bar in the app launcher.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#header_bg_color AccessApplication#header_bg_color}

---

##### `HttpOnlyCookieAttribute`<sup>Optional</sup> <a name="HttpOnlyCookieAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.httpOnlyCookieAttribute"></a>

```go
HttpOnlyCookieAttribute interface{}
```

- *Type:* interface{}

Option to add the `HttpOnly` cookie flag to access tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#http_only_cookie_attribute AccessApplication#http_only_cookie_attribute}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#id AccessApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LandingPageDesign`<sup>Optional</sup> <a name="LandingPageDesign" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.landingPageDesign"></a>

```go
LandingPageDesign AccessApplicationLandingPageDesign
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesign">AccessApplicationLandingPageDesign</a>

landing_page_design block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#landing_page_design AccessApplication#landing_page_design}

---

##### `LogoUrl`<sup>Optional</sup> <a name="LogoUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.logoUrl"></a>

```go
LogoUrl *string
```

- *Type:* *string

Image URL for the logo shown in the app launcher dashboard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#logo_url AccessApplication#logo_url}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Friendly name of the Access Application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#name AccessApplication#name}

---

##### `OptionsPreflightBypass`<sup>Optional</sup> <a name="OptionsPreflightBypass" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.optionsPreflightBypass"></a>

```go
OptionsPreflightBypass interface{}
```

- *Type:* interface{}

Allows options preflight requests to bypass Access authentication and go directly to the origin.

Cannot turn on if cors_headers is set. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#options_preflight_bypass AccessApplication#options_preflight_bypass}

---

##### `Policies`<sup>Optional</sup> <a name="Policies" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.policies"></a>

```go
Policies *[]*string
```

- *Type:* *[]*string

The policies associated with the application, in ascending order of precedence.

Warning: Do not use this field while you still have this application ID referenced as `application_id` in any `cloudflare_access_policy` resource, as it can result in an inconsistent state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#policies AccessApplication#policies}

---

##### `SaasApp`<sup>Optional</sup> <a name="SaasApp" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.saasApp"></a>

```go
SaasApp AccessApplicationSaasApp
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp">AccessApplicationSaasApp</a>

saas_app block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#saas_app AccessApplication#saas_app}

---

##### `SameSiteCookieAttribute`<sup>Optional</sup> <a name="SameSiteCookieAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.sameSiteCookieAttribute"></a>

```go
SameSiteCookieAttribute *string
```

- *Type:* *string

Defines the same-site cookie setting for access tokens. Available values: `none`, `lax`, `strict`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#same_site_cookie_attribute AccessApplication#same_site_cookie_attribute}

---

##### `ScimConfig`<sup>Optional</sup> <a name="ScimConfig" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.scimConfig"></a>

```go
ScimConfig AccessApplicationScimConfig
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfig">AccessApplicationScimConfig</a>

scim_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#scim_config AccessApplication#scim_config}

---

##### `SelfHostedDomains`<sup>Optional</sup> <a name="SelfHostedDomains" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.selfHostedDomains"></a>

```go
SelfHostedDomains *[]*string
```

- *Type:* *[]*string

List of domains that access will secure.

Only present for self_hosted, vnc, and ssh applications. Always includes the value set as `domain`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#self_hosted_domains AccessApplication#self_hosted_domains}

---

##### `ServiceAuth401Redirect`<sup>Optional</sup> <a name="ServiceAuth401Redirect" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.serviceAuth401Redirect"></a>

```go
ServiceAuth401Redirect interface{}
```

- *Type:* interface{}

Option to return a 401 status code in service authentication rules on failed requests. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#service_auth_401_redirect AccessApplication#service_auth_401_redirect}

---

##### `SessionDuration`<sup>Optional</sup> <a name="SessionDuration" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.sessionDuration"></a>

```go
SessionDuration *string
```

- *Type:* *string

How often a user will be forced to re-authorise.

Must be in the format `48h` or `2h45m`. Defaults to `24h`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#session_duration AccessApplication#session_duration}

---

##### `SkipAppLauncherLoginPage`<sup>Optional</sup> <a name="SkipAppLauncherLoginPage" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.skipAppLauncherLoginPage"></a>

```go
SkipAppLauncherLoginPage interface{}
```

- *Type:* interface{}

Option to skip the App Launcher landing page. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#skip_app_launcher_login_page AccessApplication#skip_app_launcher_login_page}

---

##### `SkipInterstitial`<sup>Optional</sup> <a name="SkipInterstitial" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.skipInterstitial"></a>

```go
SkipInterstitial interface{}
```

- *Type:* interface{}

Option to skip the authorization interstitial when using the CLI. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#skip_interstitial AccessApplication#skip_interstitial}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.tags"></a>

```go
Tags *[]*string
```

- *Type:* *[]*string

The itags associated with the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#tags AccessApplication#tags}

---

##### `TargetCriteria`<sup>Optional</sup> <a name="TargetCriteria" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.targetCriteria"></a>

```go
TargetCriteria interface{}
```

- *Type:* interface{}

target_criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#target_criteria AccessApplication#target_criteria}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

The application type. Available values: `app_launcher`, `bookmark`, `biso`, `dash_sso`, `saas`, `self_hosted`, `ssh`, `vnc`, `warp`, `infrastructure`. Defaults to `self_hosted`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#type AccessApplication#type}

---

##### `ZoneId`<sup>Optional</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.zoneId"></a>

```go
ZoneId *string
```

- *Type:* *string

The zone identifier to target for the resource. Conflicts with `account_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#zone_id AccessApplication#zone_id}

---

### AccessApplicationCorsHeaders <a name="AccessApplicationCorsHeaders" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/accessapplication"

&accessapplication.AccessApplicationCorsHeaders {
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
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders.property.allowAllHeaders">AllowAllHeaders</a></code> | <code>interface{}</code> | Value to determine whether all HTTP headers are exposed. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders.property.allowAllMethods">AllowAllMethods</a></code> | <code>interface{}</code> | Value to determine whether all methods are exposed. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders.property.allowAllOrigins">AllowAllOrigins</a></code> | <code>interface{}</code> | Value to determine whether all origins are permitted to make CORS requests. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders.property.allowCredentials">AllowCredentials</a></code> | <code>interface{}</code> | Value to determine if credentials (cookies, authorization headers, or TLS client certificates) are included with requests. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders.property.allowedHeaders">AllowedHeaders</a></code> | <code>*[]*string</code> | List of HTTP headers to expose via CORS. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders.property.allowedMethods">AllowedMethods</a></code> | <code>*[]*string</code> | List of methods to expose via CORS. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders.property.allowedOrigins">AllowedOrigins</a></code> | <code>*[]*string</code> | List of origins permitted to make CORS requests. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders.property.maxAge">MaxAge</a></code> | <code>*f64</code> | The maximum time a preflight request will be cached. |

---

##### `AllowAllHeaders`<sup>Optional</sup> <a name="AllowAllHeaders" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders.property.allowAllHeaders"></a>

```go
AllowAllHeaders interface{}
```

- *Type:* interface{}

Value to determine whether all HTTP headers are exposed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#allow_all_headers AccessApplication#allow_all_headers}

---

##### `AllowAllMethods`<sup>Optional</sup> <a name="AllowAllMethods" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders.property.allowAllMethods"></a>

```go
AllowAllMethods interface{}
```

- *Type:* interface{}

Value to determine whether all methods are exposed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#allow_all_methods AccessApplication#allow_all_methods}

---

##### `AllowAllOrigins`<sup>Optional</sup> <a name="AllowAllOrigins" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders.property.allowAllOrigins"></a>

```go
AllowAllOrigins interface{}
```

- *Type:* interface{}

Value to determine whether all origins are permitted to make CORS requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#allow_all_origins AccessApplication#allow_all_origins}

---

##### `AllowCredentials`<sup>Optional</sup> <a name="AllowCredentials" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders.property.allowCredentials"></a>

```go
AllowCredentials interface{}
```

- *Type:* interface{}

Value to determine if credentials (cookies, authorization headers, or TLS client certificates) are included with requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#allow_credentials AccessApplication#allow_credentials}

---

##### `AllowedHeaders`<sup>Optional</sup> <a name="AllowedHeaders" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders.property.allowedHeaders"></a>

```go
AllowedHeaders *[]*string
```

- *Type:* *[]*string

List of HTTP headers to expose via CORS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#allowed_headers AccessApplication#allowed_headers}

---

##### `AllowedMethods`<sup>Optional</sup> <a name="AllowedMethods" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders.property.allowedMethods"></a>

```go
AllowedMethods *[]*string
```

- *Type:* *[]*string

List of methods to expose via CORS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#allowed_methods AccessApplication#allowed_methods}

---

##### `AllowedOrigins`<sup>Optional</sup> <a name="AllowedOrigins" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders.property.allowedOrigins"></a>

```go
AllowedOrigins *[]*string
```

- *Type:* *[]*string

List of origins permitted to make CORS requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#allowed_origins AccessApplication#allowed_origins}

---

##### `MaxAge`<sup>Optional</sup> <a name="MaxAge" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders.property.maxAge"></a>

```go
MaxAge *f64
```

- *Type:* *f64

The maximum time a preflight request will be cached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#max_age AccessApplication#max_age}

---

### AccessApplicationFooterLinks <a name="AccessApplicationFooterLinks" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinks.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/accessapplication"

&accessapplication.AccessApplicationFooterLinks {
	Name: *string,
	Url: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinks.property.name">Name</a></code> | <code>*string</code> | The name of the footer link. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinks.property.url">Url</a></code> | <code>*string</code> | The URL of the footer link. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinks.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the footer link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#name AccessApplication#name}

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinks.property.url"></a>

```go
Url *string
```

- *Type:* *string

The URL of the footer link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#url AccessApplication#url}

---

### AccessApplicationLandingPageDesign <a name="AccessApplicationLandingPageDesign" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesign"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesign.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/accessapplication"

&accessapplication.AccessApplicationLandingPageDesign {
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
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesign.property.buttonColor">ButtonColor</a></code> | <code>*string</code> | The button color of the landing page. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesign.property.buttonTextColor">ButtonTextColor</a></code> | <code>*string</code> | The button text color of the landing page. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesign.property.imageUrl">ImageUrl</a></code> | <code>*string</code> | The URL of the image to be displayed in the landing page. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesign.property.message">Message</a></code> | <code>*string</code> | The message of the landing page. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesign.property.title">Title</a></code> | <code>*string</code> | The title of the landing page. |

---

##### `ButtonColor`<sup>Optional</sup> <a name="ButtonColor" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesign.property.buttonColor"></a>

```go
ButtonColor *string
```

- *Type:* *string

The button color of the landing page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#button_color AccessApplication#button_color}

---

##### `ButtonTextColor`<sup>Optional</sup> <a name="ButtonTextColor" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesign.property.buttonTextColor"></a>

```go
ButtonTextColor *string
```

- *Type:* *string

The button text color of the landing page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#button_text_color AccessApplication#button_text_color}

---

##### `ImageUrl`<sup>Optional</sup> <a name="ImageUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesign.property.imageUrl"></a>

```go
ImageUrl *string
```

- *Type:* *string

The URL of the image to be displayed in the landing page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#image_url AccessApplication#image_url}

---

##### `Message`<sup>Optional</sup> <a name="Message" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesign.property.message"></a>

```go
Message *string
```

- *Type:* *string

The message of the landing page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#message AccessApplication#message}

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesign.property.title"></a>

```go
Title *string
```

- *Type:* *string

The title of the landing page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#title AccessApplication#title}

---

### AccessApplicationSaasApp <a name="AccessApplicationSaasApp" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/accessapplication"

&accessapplication.AccessApplicationSaasApp {
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
	HybridAndImplicitOptions: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptions,
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
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.accessTokenLifetime">AccessTokenLifetime</a></code> | <code>*string</code> | The lifetime of the Access Token after creation. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.allowPkceWithoutClientSecret">AllowPkceWithoutClientSecret</a></code> | <code>interface{}</code> | Allow PKCE flow without a client secret. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.appLauncherUrl">AppLauncherUrl</a></code> | <code>*string</code> | The URL where this applications tile redirects users. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.authType">AuthType</a></code> | <code>*string</code> | **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.consumerServiceUrl">ConsumerServiceUrl</a></code> | <code>*string</code> | The service provider's endpoint that is responsible for receiving and parsing a SAML assertion. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.customAttribute">CustomAttribute</a></code> | <code>interface{}</code> | custom_attribute block. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.customClaim">CustomClaim</a></code> | <code>interface{}</code> | custom_claim block. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.defaultRelayState">DefaultRelayState</a></code> | <code>*string</code> | The relay state used if not provided by the identity provider. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.grantTypes">GrantTypes</a></code> | <code>*[]*string</code> | The OIDC flows supported by this application. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.groupFilterRegex">GroupFilterRegex</a></code> | <code>*string</code> | A regex to filter Cloudflare groups returned in ID token and userinfo endpoint. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.hybridAndImplicitOptions">HybridAndImplicitOptions</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptions">AccessApplicationSaasAppHybridAndImplicitOptions</a></code> | hybrid_and_implicit_options block. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.nameIdFormat">NameIdFormat</a></code> | <code>*string</code> | The format of the name identifier sent to the SaaS application. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.nameIdTransformJsonata">NameIdTransformJsonata</a></code> | <code>*string</code> | A [JSONata](https://jsonata.org/) expression that transforms an application's user identities into a NameID value for its SAML assertion. This expression should evaluate to a singular string. The output of this expression can override the `name_id_format` setting. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.redirectUris">RedirectUris</a></code> | <code>*[]*string</code> | The permitted URL's for Cloudflare to return Authorization codes and Access/ID tokens. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.refreshTokenOptions">RefreshTokenOptions</a></code> | <code>interface{}</code> | refresh_token_options block. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.samlAttributeTransformJsonata">SamlAttributeTransformJsonata</a></code> | <code>*string</code> | A [JSONata](https://jsonata.org/) expression that transforms an application's user identities into attribute assertions in the SAML response. The expression can transform id, email, name, and groups values. It can also transform fields listed in the saml_attributes or oidc_fields of the identity provider used to authenticate. The output of this expression must be a JSON object. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.scopes">Scopes</a></code> | <code>*[]*string</code> | Define the user information shared with access. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.spEntityId">SpEntityId</a></code> | <code>*string</code> | A globally unique name for an identity or service provider. |

---

##### `AccessTokenLifetime`<sup>Optional</sup> <a name="AccessTokenLifetime" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.accessTokenLifetime"></a>

```go
AccessTokenLifetime *string
```

- *Type:* *string

The lifetime of the Access Token after creation.

Valid units are `m` and `h`. Must be greater than or equal to 1m and less than or equal to 24h.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#access_token_lifetime AccessApplication#access_token_lifetime}

---

##### `AllowPkceWithoutClientSecret`<sup>Optional</sup> <a name="AllowPkceWithoutClientSecret" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.allowPkceWithoutClientSecret"></a>

```go
AllowPkceWithoutClientSecret interface{}
```

- *Type:* interface{}

Allow PKCE flow without a client secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#allow_pkce_without_client_secret AccessApplication#allow_pkce_without_client_secret}

---

##### `AppLauncherUrl`<sup>Optional</sup> <a name="AppLauncherUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.appLauncherUrl"></a>

```go
AppLauncherUrl *string
```

- *Type:* *string

The URL where this applications tile redirects users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#app_launcher_url AccessApplication#app_launcher_url}

---

##### `AuthType`<sup>Optional</sup> <a name="AuthType" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.authType"></a>

```go
AuthType *string
```

- *Type:* *string

**Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#auth_type AccessApplication#auth_type}

---

##### `ConsumerServiceUrl`<sup>Optional</sup> <a name="ConsumerServiceUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.consumerServiceUrl"></a>

```go
ConsumerServiceUrl *string
```

- *Type:* *string

The service provider's endpoint that is responsible for receiving and parsing a SAML assertion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#consumer_service_url AccessApplication#consumer_service_url}

---

##### `CustomAttribute`<sup>Optional</sup> <a name="CustomAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.customAttribute"></a>

```go
CustomAttribute interface{}
```

- *Type:* interface{}

custom_attribute block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#custom_attribute AccessApplication#custom_attribute}

---

##### `CustomClaim`<sup>Optional</sup> <a name="CustomClaim" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.customClaim"></a>

```go
CustomClaim interface{}
```

- *Type:* interface{}

custom_claim block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#custom_claim AccessApplication#custom_claim}

---

##### `DefaultRelayState`<sup>Optional</sup> <a name="DefaultRelayState" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.defaultRelayState"></a>

```go
DefaultRelayState *string
```

- *Type:* *string

The relay state used if not provided by the identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#default_relay_state AccessApplication#default_relay_state}

---

##### `GrantTypes`<sup>Optional</sup> <a name="GrantTypes" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.grantTypes"></a>

```go
GrantTypes *[]*string
```

- *Type:* *[]*string

The OIDC flows supported by this application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#grant_types AccessApplication#grant_types}

---

##### `GroupFilterRegex`<sup>Optional</sup> <a name="GroupFilterRegex" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.groupFilterRegex"></a>

```go
GroupFilterRegex *string
```

- *Type:* *string

A regex to filter Cloudflare groups returned in ID token and userinfo endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#group_filter_regex AccessApplication#group_filter_regex}

---

##### `HybridAndImplicitOptions`<sup>Optional</sup> <a name="HybridAndImplicitOptions" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.hybridAndImplicitOptions"></a>

```go
HybridAndImplicitOptions AccessApplicationSaasAppHybridAndImplicitOptions
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptions">AccessApplicationSaasAppHybridAndImplicitOptions</a>

hybrid_and_implicit_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#hybrid_and_implicit_options AccessApplication#hybrid_and_implicit_options}

---

##### `NameIdFormat`<sup>Optional</sup> <a name="NameIdFormat" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.nameIdFormat"></a>

```go
NameIdFormat *string
```

- *Type:* *string

The format of the name identifier sent to the SaaS application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#name_id_format AccessApplication#name_id_format}

---

##### `NameIdTransformJsonata`<sup>Optional</sup> <a name="NameIdTransformJsonata" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.nameIdTransformJsonata"></a>

```go
NameIdTransformJsonata *string
```

- *Type:* *string

A [JSONata](https://jsonata.org/) expression that transforms an application's user identities into a NameID value for its SAML assertion. This expression should evaluate to a singular string. The output of this expression can override the `name_id_format` setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#name_id_transform_jsonata AccessApplication#name_id_transform_jsonata}

---

##### `RedirectUris`<sup>Optional</sup> <a name="RedirectUris" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.redirectUris"></a>

```go
RedirectUris *[]*string
```

- *Type:* *[]*string

The permitted URL's for Cloudflare to return Authorization codes and Access/ID tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#redirect_uris AccessApplication#redirect_uris}

---

##### `RefreshTokenOptions`<sup>Optional</sup> <a name="RefreshTokenOptions" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.refreshTokenOptions"></a>

```go
RefreshTokenOptions interface{}
```

- *Type:* interface{}

refresh_token_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#refresh_token_options AccessApplication#refresh_token_options}

---

##### `SamlAttributeTransformJsonata`<sup>Optional</sup> <a name="SamlAttributeTransformJsonata" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.samlAttributeTransformJsonata"></a>

```go
SamlAttributeTransformJsonata *string
```

- *Type:* *string

A [JSONata](https://jsonata.org/) expression that transforms an application's user identities into attribute assertions in the SAML response. The expression can transform id, email, name, and groups values. It can also transform fields listed in the saml_attributes or oidc_fields of the identity provider used to authenticate. The output of this expression must be a JSON object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#saml_attribute_transform_jsonata AccessApplication#saml_attribute_transform_jsonata}

---

##### `Scopes`<sup>Optional</sup> <a name="Scopes" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.scopes"></a>

```go
Scopes *[]*string
```

- *Type:* *[]*string

Define the user information shared with access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#scopes AccessApplication#scopes}

---

##### `SpEntityId`<sup>Optional</sup> <a name="SpEntityId" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.spEntityId"></a>

```go
SpEntityId *string
```

- *Type:* *string

A globally unique name for an identity or service provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#sp_entity_id AccessApplication#sp_entity_id}

---

### AccessApplicationSaasAppCustomAttribute <a name="AccessApplicationSaasAppCustomAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttribute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttribute.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/accessapplication"

&accessapplication.AccessApplicationSaasAppCustomAttribute {
	Source: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSource,
	FriendlyName: *string,
	Name: *string,
	NameFormat: *string,
	Required: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttribute.property.source">Source</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSource">AccessApplicationSaasAppCustomAttributeSource</a></code> | source block. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttribute.property.friendlyName">FriendlyName</a></code> | <code>*string</code> | A friendly name for the attribute as provided to the SaaS app. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttribute.property.name">Name</a></code> | <code>*string</code> | The name of the attribute as provided to the SaaS app. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttribute.property.nameFormat">NameFormat</a></code> | <code>*string</code> | A globally unique name for an identity or service provider. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttribute.property.required">Required</a></code> | <code>interface{}</code> | True if the attribute must be always present. |

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttribute.property.source"></a>

```go
Source AccessApplicationSaasAppCustomAttributeSource
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSource">AccessApplicationSaasAppCustomAttributeSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#source AccessApplication#source}

---

##### `FriendlyName`<sup>Optional</sup> <a name="FriendlyName" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttribute.property.friendlyName"></a>

```go
FriendlyName *string
```

- *Type:* *string

A friendly name for the attribute as provided to the SaaS app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#friendly_name AccessApplication#friendly_name}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttribute.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the attribute as provided to the SaaS app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#name AccessApplication#name}

---

##### `NameFormat`<sup>Optional</sup> <a name="NameFormat" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttribute.property.nameFormat"></a>

```go
NameFormat *string
```

- *Type:* *string

A globally unique name for an identity or service provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#name_format AccessApplication#name_format}

---

##### `Required`<sup>Optional</sup> <a name="Required" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttribute.property.required"></a>

```go
Required interface{}
```

- *Type:* interface{}

True if the attribute must be always present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#required AccessApplication#required}

---

### AccessApplicationSaasAppCustomAttributeSource <a name="AccessApplicationSaasAppCustomAttributeSource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/accessapplication"

&accessapplication.AccessApplicationSaasAppCustomAttributeSource {
	Name: *string,
	NameByIdp: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSource.property.name">Name</a></code> | <code>*string</code> | The name of the attribute as provided by the IDP. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSource.property.nameByIdp">NameByIdp</a></code> | <code>*map[string]*string</code> | A mapping from IdP ID to claim name. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSource.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the attribute as provided by the IDP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#name AccessApplication#name}

---

##### `NameByIdp`<sup>Optional</sup> <a name="NameByIdp" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSource.property.nameByIdp"></a>

```go
NameByIdp *map[string]*string
```

- *Type:* *map[string]*string

A mapping from IdP ID to claim name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#name_by_idp AccessApplication#name_by_idp}

---

### AccessApplicationSaasAppCustomClaim <a name="AccessApplicationSaasAppCustomClaim" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaim"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaim.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/accessapplication"

&accessapplication.AccessApplicationSaasAppCustomClaim {
	Source: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSource,
	Name: *string,
	Required: interface{},
	Scope: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaim.property.source">Source</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSource">AccessApplicationSaasAppCustomClaimSource</a></code> | source block. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaim.property.name">Name</a></code> | <code>*string</code> | The name of the attribute as provided to the SaaS app. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaim.property.required">Required</a></code> | <code>interface{}</code> | True if the attribute must be always present. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaim.property.scope">Scope</a></code> | <code>*string</code> | The scope of the claim. |

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaim.property.source"></a>

```go
Source AccessApplicationSaasAppCustomClaimSource
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSource">AccessApplicationSaasAppCustomClaimSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#source AccessApplication#source}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaim.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the attribute as provided to the SaaS app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#name AccessApplication#name}

---

##### `Required`<sup>Optional</sup> <a name="Required" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaim.property.required"></a>

```go
Required interface{}
```

- *Type:* interface{}

True if the attribute must be always present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#required AccessApplication#required}

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaim.property.scope"></a>

```go
Scope *string
```

- *Type:* *string

The scope of the claim.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#scope AccessApplication#scope}

---

### AccessApplicationSaasAppCustomClaimSource <a name="AccessApplicationSaasAppCustomClaimSource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/accessapplication"

&accessapplication.AccessApplicationSaasAppCustomClaimSource {
	Name: *string,
	NameByIdp: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSource.property.name">Name</a></code> | <code>*string</code> | The name of the attribute as provided by the IDP. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSource.property.nameByIdp">NameByIdp</a></code> | <code>*map[string]*string</code> | A mapping from IdP ID to claim name. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSource.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the attribute as provided by the IDP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#name AccessApplication#name}

---

##### `NameByIdp`<sup>Optional</sup> <a name="NameByIdp" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSource.property.nameByIdp"></a>

```go
NameByIdp *map[string]*string
```

- *Type:* *map[string]*string

A mapping from IdP ID to claim name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#name_by_idp AccessApplication#name_by_idp}

---

### AccessApplicationSaasAppHybridAndImplicitOptions <a name="AccessApplicationSaasAppHybridAndImplicitOptions" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/accessapplication"

&accessapplication.AccessApplicationSaasAppHybridAndImplicitOptions {
	ReturnAccessTokenFromAuthorizationEndpoint: interface{},
	ReturnIdTokenFromAuthorizationEndpoint: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptions.property.returnAccessTokenFromAuthorizationEndpoint">ReturnAccessTokenFromAuthorizationEndpoint</a></code> | <code>interface{}</code> | If true, the authorization endpoint will return an access token. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptions.property.returnIdTokenFromAuthorizationEndpoint">ReturnIdTokenFromAuthorizationEndpoint</a></code> | <code>interface{}</code> | If true, the authorization endpoint will return an id token. |

---

##### `ReturnAccessTokenFromAuthorizationEndpoint`<sup>Optional</sup> <a name="ReturnAccessTokenFromAuthorizationEndpoint" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptions.property.returnAccessTokenFromAuthorizationEndpoint"></a>

```go
ReturnAccessTokenFromAuthorizationEndpoint interface{}
```

- *Type:* interface{}

If true, the authorization endpoint will return an access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#return_access_token_from_authorization_endpoint AccessApplication#return_access_token_from_authorization_endpoint}

---

##### `ReturnIdTokenFromAuthorizationEndpoint`<sup>Optional</sup> <a name="ReturnIdTokenFromAuthorizationEndpoint" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptions.property.returnIdTokenFromAuthorizationEndpoint"></a>

```go
ReturnIdTokenFromAuthorizationEndpoint interface{}
```

- *Type:* interface{}

If true, the authorization endpoint will return an id token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#return_id_token_from_authorization_endpoint AccessApplication#return_id_token_from_authorization_endpoint}

---

### AccessApplicationSaasAppRefreshTokenOptions <a name="AccessApplicationSaasAppRefreshTokenOptions" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/accessapplication"

&accessapplication.AccessApplicationSaasAppRefreshTokenOptions {
	Lifetime: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptions.property.lifetime">Lifetime</a></code> | <code>*string</code> | How long a refresh token will be valid for after creation. |

---

##### `Lifetime`<sup>Optional</sup> <a name="Lifetime" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptions.property.lifetime"></a>

```go
Lifetime *string
```

- *Type:* *string

How long a refresh token will be valid for after creation.

Valid units are `m`, `h` and `d`. Must be longer than 1m.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#lifetime AccessApplication#lifetime}

---

### AccessApplicationScimConfig <a name="AccessApplicationScimConfig" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/accessapplication"

&accessapplication.AccessApplicationScimConfig {
	IdpUid: *string,
	RemoteUri: *string,
	Authentication: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.accessApplication.AccessApplicationScimConfigAuthentication,
	DeactivateOnDelete: interface{},
	Enabled: interface{},
	Mappings: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfig.property.idpUid">IdpUid</a></code> | <code>*string</code> | The UID of the IdP to use as the source for SCIM resources to provision to this application. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfig.property.remoteUri">RemoteUri</a></code> | <code>*string</code> | The base URI for the application's SCIM-compatible API. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfig.property.authentication">Authentication</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthentication">AccessApplicationScimConfigAuthentication</a></code> | authentication block. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfig.property.deactivateOnDelete">DeactivateOnDelete</a></code> | <code>interface{}</code> | If false, propagates DELETE requests to the target application for SCIM resources. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether SCIM provisioning is turned on for this application. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfig.property.mappings">Mappings</a></code> | <code>interface{}</code> | mappings block. |

---

##### `IdpUid`<sup>Required</sup> <a name="IdpUid" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfig.property.idpUid"></a>

```go
IdpUid *string
```

- *Type:* *string

The UID of the IdP to use as the source for SCIM resources to provision to this application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#idp_uid AccessApplication#idp_uid}

---

##### `RemoteUri`<sup>Required</sup> <a name="RemoteUri" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfig.property.remoteUri"></a>

```go
RemoteUri *string
```

- *Type:* *string

The base URI for the application's SCIM-compatible API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#remote_uri AccessApplication#remote_uri}

---

##### `Authentication`<sup>Optional</sup> <a name="Authentication" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfig.property.authentication"></a>

```go
Authentication AccessApplicationScimConfigAuthentication
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthentication">AccessApplicationScimConfigAuthentication</a>

authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#authentication AccessApplication#authentication}

---

##### `DeactivateOnDelete`<sup>Optional</sup> <a name="DeactivateOnDelete" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfig.property.deactivateOnDelete"></a>

```go
DeactivateOnDelete interface{}
```

- *Type:* interface{}

If false, propagates DELETE requests to the target application for SCIM resources.

If true, sets 'active' to false on the SCIM resource. Note: Some targets do not support DELETE operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#deactivate_on_delete AccessApplication#deactivate_on_delete}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether SCIM provisioning is turned on for this application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#enabled AccessApplication#enabled}

---

##### `Mappings`<sup>Optional</sup> <a name="Mappings" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfig.property.mappings"></a>

```go
Mappings interface{}
```

- *Type:* interface{}

mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#mappings AccessApplication#mappings}

---

### AccessApplicationScimConfigAuthentication <a name="AccessApplicationScimConfigAuthentication" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthentication.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/accessapplication"

&accessapplication.AccessApplicationScimConfigAuthentication {
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
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthentication.property.scheme">Scheme</a></code> | <code>*string</code> | The authentication scheme to use when making SCIM requests to this application. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthentication.property.authorizationUrl">AuthorizationUrl</a></code> | <code>*string</code> | URL used to generate the auth code used during token generation. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthentication.property.clientId">ClientId</a></code> | <code>*string</code> | Client ID used to authenticate when generating a token for authenticating with the remote SCIM service. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthentication.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | Secret used to authenticate when generating a token for authenticating with the remove SCIM service. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthentication.property.password">Password</a></code> | <code>*string</code> | Required when using `scim_config.0.authentication.0.user`. Conflicts with `scim_config.0.authentication.0.token`, `scim_config.0.authentication.0.client_id`, `scim_config.0.authentication.0.client_secret`, `scim_config.0.authentication.0.authorization_url`, `scim_config.0.authentication.0.token_url`, `scim_config.0.authentication.0.scopes`. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthentication.property.scopes">Scopes</a></code> | <code>*[]*string</code> | The authorization scopes to request when generating the token used to authenticate with the remove SCIM service. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthentication.property.token">Token</a></code> | <code>*string</code> | Token used to authenticate with the remote SCIM service. Conflicts with `scim_config.0.authentication.0.user`, `scim_config.0.authentication.0.password`, `scim_config.0.authentication.0.client_id`, `scim_config.0.authentication.0.client_secret`, `scim_config.0.authentication.0.authorization_url`, `scim_config.0.authentication.0.token_url`, `scim_config.0.authentication.0.scopes`. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthentication.property.tokenUrl">TokenUrl</a></code> | <code>*string</code> | URL used to generate the token used to authenticate with the remote SCIM service. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthentication.property.user">User</a></code> | <code>*string</code> | User name used to authenticate with the remote SCIM service. |

---

##### `Scheme`<sup>Required</sup> <a name="Scheme" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthentication.property.scheme"></a>

```go
Scheme *string
```

- *Type:* *string

The authentication scheme to use when making SCIM requests to this application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#scheme AccessApplication#scheme}

---

##### `AuthorizationUrl`<sup>Optional</sup> <a name="AuthorizationUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthentication.property.authorizationUrl"></a>

```go
AuthorizationUrl *string
```

- *Type:* *string

URL used to generate the auth code used during token generation.

Required when using `scim_config.0.authentication.0.client_secret`, `scim_config.0.authentication.0.client_id`, `scim_config.0.authentication.0.token_url`. Conflicts with `scim_config.0.authentication.0.user`, `scim_config.0.authentication.0.password`, `scim_config.0.authentication.0.token`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#authorization_url AccessApplication#authorization_url}

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthentication.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

Client ID used to authenticate when generating a token for authenticating with the remote SCIM service.

Required when using `scim_config.0.authentication.0.client_secret`, `scim_config.0.authentication.0.authorization_url`, `scim_config.0.authentication.0.token_url`. Conflicts with `scim_config.0.authentication.0.user`, `scim_config.0.authentication.0.password`, `scim_config.0.authentication.0.token`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#client_id AccessApplication#client_id}

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthentication.property.clientSecret"></a>

```go
ClientSecret *string
```

- *Type:* *string

Secret used to authenticate when generating a token for authenticating with the remove SCIM service.

Required when using `scim_config.0.authentication.0.client_id`, `scim_config.0.authentication.0.authorization_url`, `scim_config.0.authentication.0.token_url`. Conflicts with `scim_config.0.authentication.0.user`, `scim_config.0.authentication.0.password`, `scim_config.0.authentication.0.token`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#client_secret AccessApplication#client_secret}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthentication.property.password"></a>

```go
Password *string
```

- *Type:* *string

Required when using `scim_config.0.authentication.0.user`. Conflicts with `scim_config.0.authentication.0.token`, `scim_config.0.authentication.0.client_id`, `scim_config.0.authentication.0.client_secret`, `scim_config.0.authentication.0.authorization_url`, `scim_config.0.authentication.0.token_url`, `scim_config.0.authentication.0.scopes`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#password AccessApplication#password}

---

##### `Scopes`<sup>Optional</sup> <a name="Scopes" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthentication.property.scopes"></a>

```go
Scopes *[]*string
```

- *Type:* *[]*string

The authorization scopes to request when generating the token used to authenticate with the remove SCIM service.

Conflicts with `scim_config.0.authentication.0.user`, `scim_config.0.authentication.0.password`, `scim_config.0.authentication.0.token`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#scopes AccessApplication#scopes}

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthentication.property.token"></a>

```go
Token *string
```

- *Type:* *string

Token used to authenticate with the remote SCIM service. Conflicts with `scim_config.0.authentication.0.user`, `scim_config.0.authentication.0.password`, `scim_config.0.authentication.0.client_id`, `scim_config.0.authentication.0.client_secret`, `scim_config.0.authentication.0.authorization_url`, `scim_config.0.authentication.0.token_url`, `scim_config.0.authentication.0.scopes`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#token AccessApplication#token}

---

##### `TokenUrl`<sup>Optional</sup> <a name="TokenUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthentication.property.tokenUrl"></a>

```go
TokenUrl *string
```

- *Type:* *string

URL used to generate the token used to authenticate with the remote SCIM service.

Required when using `scim_config.0.authentication.0.client_secret`, `scim_config.0.authentication.0.authorization_url`, `scim_config.0.authentication.0.client_id`. Conflicts with `scim_config.0.authentication.0.user`, `scim_config.0.authentication.0.password`, `scim_config.0.authentication.0.token`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#token_url AccessApplication#token_url}

---

##### `User`<sup>Optional</sup> <a name="User" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthentication.property.user"></a>

```go
User *string
```

- *Type:* *string

User name used to authenticate with the remote SCIM service.

Required when using `scim_config.0.authentication.0.password`. Conflicts with `scim_config.0.authentication.0.token`, `scim_config.0.authentication.0.client_id`, `scim_config.0.authentication.0.client_secret`, `scim_config.0.authentication.0.authorization_url`, `scim_config.0.authentication.0.token_url`, `scim_config.0.authentication.0.scopes`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#user AccessApplication#user}

---

### AccessApplicationScimConfigMappings <a name="AccessApplicationScimConfigMappings" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/accessapplication"

&accessapplication.AccessApplicationScimConfigMappings {
	Schema: *string,
	Enabled: interface{},
	Filter: *string,
	Operations: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperations,
	TransformJsonata: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappings.property.schema">Schema</a></code> | <code>*string</code> | Which SCIM resource type this mapping applies to. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappings.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether or not this mapping is enabled. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappings.property.filter">Filter</a></code> | <code>*string</code> | A [SCIM filter expression](https://datatracker.ietf.org/doc/html/rfc7644#section-3.4.2.2) that matches resources that should be provisioned to this application. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappings.property.operations">Operations</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperations">AccessApplicationScimConfigMappingsOperations</a></code> | operations block. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappings.property.transformJsonata">TransformJsonata</a></code> | <code>*string</code> | A [JSONata](https://jsonata.org/) expression that transforms the resource before provisioning it in the application. |

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappings.property.schema"></a>

```go
Schema *string
```

- *Type:* *string

Which SCIM resource type this mapping applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#schema AccessApplication#schema}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappings.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether or not this mapping is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#enabled AccessApplication#enabled}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappings.property.filter"></a>

```go
Filter *string
```

- *Type:* *string

A [SCIM filter expression](https://datatracker.ietf.org/doc/html/rfc7644#section-3.4.2.2) that matches resources that should be provisioned to this application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#filter AccessApplication#filter}

---

##### `Operations`<sup>Optional</sup> <a name="Operations" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappings.property.operations"></a>

```go
Operations AccessApplicationScimConfigMappingsOperations
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperations">AccessApplicationScimConfigMappingsOperations</a>

operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#operations AccessApplication#operations}

---

##### `TransformJsonata`<sup>Optional</sup> <a name="TransformJsonata" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappings.property.transformJsonata"></a>

```go
TransformJsonata *string
```

- *Type:* *string

A [JSONata](https://jsonata.org/) expression that transforms the resource before provisioning it in the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#transform_jsonata AccessApplication#transform_jsonata}

---

### AccessApplicationScimConfigMappingsOperations <a name="AccessApplicationScimConfigMappingsOperations" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/accessapplication"

&accessapplication.AccessApplicationScimConfigMappingsOperations {
	Create: interface{},
	Delete: interface{},
	Update: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperations.property.create">Create</a></code> | <code>interface{}</code> | Whether or not this mapping applies to create (POST) operations. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperations.property.delete">Delete</a></code> | <code>interface{}</code> | Whether or not this mapping applies to DELETE operations. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperations.property.update">Update</a></code> | <code>interface{}</code> | Whether or not this mapping applies to update (PATCH/PUT) operations. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperations.property.create"></a>

```go
Create interface{}
```

- *Type:* interface{}

Whether or not this mapping applies to create (POST) operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#create AccessApplication#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperations.property.delete"></a>

```go
Delete interface{}
```

- *Type:* interface{}

Whether or not this mapping applies to DELETE operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#delete AccessApplication#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperations.property.update"></a>

```go
Update interface{}
```

- *Type:* interface{}

Whether or not this mapping applies to update (PATCH/PUT) operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#update AccessApplication#update}

---

### AccessApplicationTargetCriteria <a name="AccessApplicationTargetCriteria" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteria.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/accessapplication"

&accessapplication.AccessApplicationTargetCriteria {
	Port: *f64,
	Protocol: *string,
	TargetAttributes: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteria.property.port">Port</a></code> | <code>*f64</code> | The port that the targets use for the chosen communication protocol. A port cannot be assigned to multiple protocols. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteria.property.protocol">Protocol</a></code> | <code>*string</code> | The communication protocol your application secures. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteria.property.targetAttributes">TargetAttributes</a></code> | <code>interface{}</code> | target_attributes block. |

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteria.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

The port that the targets use for the chosen communication protocol. A port cannot be assigned to multiple protocols.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#port AccessApplication#port}

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteria.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

The communication protocol your application secures.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#protocol AccessApplication#protocol}

---

##### `TargetAttributes`<sup>Required</sup> <a name="TargetAttributes" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteria.property.targetAttributes"></a>

```go
TargetAttributes interface{}
```

- *Type:* interface{}

target_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#target_attributes AccessApplication#target_attributes}

---

### AccessApplicationTargetCriteriaTargetAttributes <a name="AccessApplicationTargetCriteriaTargetAttributes" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/accessapplication"

&accessapplication.AccessApplicationTargetCriteriaTargetAttributes {
	Name: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributes.property.name">Name</a></code> | <code>*string</code> | The key of the attribute. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributes.property.values">Values</a></code> | <code>*[]*string</code> | The values of the attribute. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributes.property.name"></a>

```go
Name *string
```

- *Type:* *string

The key of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#name AccessApplication#name}

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributes.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

The values of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/access_application#values AccessApplication#values}

---

## Classes <a name="Classes" id="Classes"></a>

### AccessApplicationCorsHeadersList <a name="AccessApplicationCorsHeadersList" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/accessapplication"

accessapplication.NewAccessApplicationCorsHeadersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AccessApplicationCorsHeadersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.get"></a>

```go
func Get(index *f64) AccessApplicationCorsHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AccessApplicationCorsHeadersOutputReference <a name="AccessApplicationCorsHeadersOutputReference" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/accessapplication"

accessapplication.NewAccessApplicationCorsHeadersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AccessApplicationCorsHeadersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.resetAllowAllHeaders">ResetAllowAllHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.resetAllowAllMethods">ResetAllowAllMethods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.resetAllowAllOrigins">ResetAllowAllOrigins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.resetAllowCredentials">ResetAllowCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.resetAllowedHeaders">ResetAllowedHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.resetAllowedMethods">ResetAllowedMethods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.resetAllowedOrigins">ResetAllowedOrigins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.resetMaxAge">ResetMaxAge</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowAllHeaders` <a name="ResetAllowAllHeaders" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.resetAllowAllHeaders"></a>

```go
func ResetAllowAllHeaders()
```

##### `ResetAllowAllMethods` <a name="ResetAllowAllMethods" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.resetAllowAllMethods"></a>

```go
func ResetAllowAllMethods()
```

##### `ResetAllowAllOrigins` <a name="ResetAllowAllOrigins" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.resetAllowAllOrigins"></a>

```go
func ResetAllowAllOrigins()
```

##### `ResetAllowCredentials` <a name="ResetAllowCredentials" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.resetAllowCredentials"></a>

```go
func ResetAllowCredentials()
```

##### `ResetAllowedHeaders` <a name="ResetAllowedHeaders" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.resetAllowedHeaders"></a>

```go
func ResetAllowedHeaders()
```

##### `ResetAllowedMethods` <a name="ResetAllowedMethods" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.resetAllowedMethods"></a>

```go
func ResetAllowedMethods()
```

##### `ResetAllowedOrigins` <a name="ResetAllowedOrigins" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.resetAllowedOrigins"></a>

```go
func ResetAllowedOrigins()
```

##### `ResetMaxAge` <a name="ResetMaxAge" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.resetMaxAge"></a>

```go
func ResetMaxAge()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowAllHeadersInput">AllowAllHeadersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowAllMethodsInput">AllowAllMethodsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowAllOriginsInput">AllowAllOriginsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowCredentialsInput">AllowCredentialsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowedHeadersInput">AllowedHeadersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowedMethodsInput">AllowedMethodsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowedOriginsInput">AllowedOriginsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.maxAgeInput">MaxAgeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowAllHeaders">AllowAllHeaders</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowAllMethods">AllowAllMethods</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowAllOrigins">AllowAllOrigins</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowCredentials">AllowCredentials</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowedHeaders">AllowedHeaders</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowedMethods">AllowedMethods</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowedOrigins">AllowedOrigins</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.maxAge">MaxAge</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowAllHeadersInput`<sup>Optional</sup> <a name="AllowAllHeadersInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowAllHeadersInput"></a>

```go
func AllowAllHeadersInput() interface{}
```

- *Type:* interface{}

---

##### `AllowAllMethodsInput`<sup>Optional</sup> <a name="AllowAllMethodsInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowAllMethodsInput"></a>

```go
func AllowAllMethodsInput() interface{}
```

- *Type:* interface{}

---

##### `AllowAllOriginsInput`<sup>Optional</sup> <a name="AllowAllOriginsInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowAllOriginsInput"></a>

```go
func AllowAllOriginsInput() interface{}
```

- *Type:* interface{}

---

##### `AllowCredentialsInput`<sup>Optional</sup> <a name="AllowCredentialsInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowCredentialsInput"></a>

```go
func AllowCredentialsInput() interface{}
```

- *Type:* interface{}

---

##### `AllowedHeadersInput`<sup>Optional</sup> <a name="AllowedHeadersInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowedHeadersInput"></a>

```go
func AllowedHeadersInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedMethodsInput`<sup>Optional</sup> <a name="AllowedMethodsInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowedMethodsInput"></a>

```go
func AllowedMethodsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedOriginsInput`<sup>Optional</sup> <a name="AllowedOriginsInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowedOriginsInput"></a>

```go
func AllowedOriginsInput() *[]*string
```

- *Type:* *[]*string

---

##### `MaxAgeInput`<sup>Optional</sup> <a name="MaxAgeInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.maxAgeInput"></a>

```go
func MaxAgeInput() *f64
```

- *Type:* *f64

---

##### `AllowAllHeaders`<sup>Required</sup> <a name="AllowAllHeaders" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowAllHeaders"></a>

```go
func AllowAllHeaders() interface{}
```

- *Type:* interface{}

---

##### `AllowAllMethods`<sup>Required</sup> <a name="AllowAllMethods" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowAllMethods"></a>

```go
func AllowAllMethods() interface{}
```

- *Type:* interface{}

---

##### `AllowAllOrigins`<sup>Required</sup> <a name="AllowAllOrigins" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowAllOrigins"></a>

```go
func AllowAllOrigins() interface{}
```

- *Type:* interface{}

---

##### `AllowCredentials`<sup>Required</sup> <a name="AllowCredentials" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowCredentials"></a>

```go
func AllowCredentials() interface{}
```

- *Type:* interface{}

---

##### `AllowedHeaders`<sup>Required</sup> <a name="AllowedHeaders" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowedHeaders"></a>

```go
func AllowedHeaders() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedMethods`<sup>Required</sup> <a name="AllowedMethods" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowedMethods"></a>

```go
func AllowedMethods() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedOrigins`<sup>Required</sup> <a name="AllowedOrigins" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowedOrigins"></a>

```go
func AllowedOrigins() *[]*string
```

- *Type:* *[]*string

---

##### `MaxAge`<sup>Required</sup> <a name="MaxAge" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.maxAge"></a>

```go
func MaxAge() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AccessApplicationFooterLinksList <a name="AccessApplicationFooterLinksList" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/accessapplication"

accessapplication.NewAccessApplicationFooterLinksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AccessApplicationFooterLinksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksList.get"></a>

```go
func Get(index *f64) AccessApplicationFooterLinksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AccessApplicationFooterLinksOutputReference <a name="AccessApplicationFooterLinksOutputReference" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/accessapplication"

accessapplication.NewAccessApplicationFooterLinksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AccessApplicationFooterLinksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.resetUrl">ResetUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.resetUrl"></a>

```go
func ResetUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AccessApplicationLandingPageDesignOutputReference <a name="AccessApplicationLandingPageDesignOutputReference" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/accessapplication"

accessapplication.NewAccessApplicationLandingPageDesignOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AccessApplicationLandingPageDesignOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.resetButtonColor">ResetButtonColor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.resetButtonTextColor">ResetButtonTextColor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.resetImageUrl">ResetImageUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.resetMessage">ResetMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.resetTitle">ResetTitle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetButtonColor` <a name="ResetButtonColor" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.resetButtonColor"></a>

```go
func ResetButtonColor()
```

##### `ResetButtonTextColor` <a name="ResetButtonTextColor" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.resetButtonTextColor"></a>

```go
func ResetButtonTextColor()
```

##### `ResetImageUrl` <a name="ResetImageUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.resetImageUrl"></a>

```go
func ResetImageUrl()
```

##### `ResetMessage` <a name="ResetMessage" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.resetMessage"></a>

```go
func ResetMessage()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.resetTitle"></a>

```go
func ResetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.property.buttonColorInput">ButtonColorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.property.buttonTextColorInput">ButtonTextColorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.property.imageUrlInput">ImageUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.property.messageInput">MessageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.property.buttonColor">ButtonColor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.property.buttonTextColor">ButtonTextColor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.property.imageUrl">ImageUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesign">AccessApplicationLandingPageDesign</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ButtonColorInput`<sup>Optional</sup> <a name="ButtonColorInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.property.buttonColorInput"></a>

```go
func ButtonColorInput() *string
```

- *Type:* *string

---

##### `ButtonTextColorInput`<sup>Optional</sup> <a name="ButtonTextColorInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.property.buttonTextColorInput"></a>

```go
func ButtonTextColorInput() *string
```

- *Type:* *string

---

##### `ImageUrlInput`<sup>Optional</sup> <a name="ImageUrlInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.property.imageUrlInput"></a>

```go
func ImageUrlInput() *string
```

- *Type:* *string

---

##### `MessageInput`<sup>Optional</sup> <a name="MessageInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.property.messageInput"></a>

```go
func MessageInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `ButtonColor`<sup>Required</sup> <a name="ButtonColor" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.property.buttonColor"></a>

```go
func ButtonColor() *string
```

- *Type:* *string

---

##### `ButtonTextColor`<sup>Required</sup> <a name="ButtonTextColor" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.property.buttonTextColor"></a>

```go
func ButtonTextColor() *string
```

- *Type:* *string

---

##### `ImageUrl`<sup>Required</sup> <a name="ImageUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.property.imageUrl"></a>

```go
func ImageUrl() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.property.internalValue"></a>

```go
func InternalValue() AccessApplicationLandingPageDesign
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesign">AccessApplicationLandingPageDesign</a>

---


### AccessApplicationSaasAppCustomAttributeList <a name="AccessApplicationSaasAppCustomAttributeList" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/accessapplication"

accessapplication.NewAccessApplicationSaasAppCustomAttributeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AccessApplicationSaasAppCustomAttributeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList.get"></a>

```go
func Get(index *f64) AccessApplicationSaasAppCustomAttributeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AccessApplicationSaasAppCustomAttributeOutputReference <a name="AccessApplicationSaasAppCustomAttributeOutputReference" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/accessapplication"

accessapplication.NewAccessApplicationSaasAppCustomAttributeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AccessApplicationSaasAppCustomAttributeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.resetFriendlyName">ResetFriendlyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.resetNameFormat">ResetNameFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.resetRequired">ResetRequired</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSource` <a name="PutSource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.putSource"></a>

```go
func PutSource(value AccessApplicationSaasAppCustomAttributeSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSource">AccessApplicationSaasAppCustomAttributeSource</a>

---

##### `ResetFriendlyName` <a name="ResetFriendlyName" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.resetFriendlyName"></a>

```go
func ResetFriendlyName()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetNameFormat` <a name="ResetNameFormat" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.resetNameFormat"></a>

```go
func ResetNameFormat()
```

##### `ResetRequired` <a name="ResetRequired" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.resetRequired"></a>

```go
func ResetRequired()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.property.source">Source</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference">AccessApplicationSaasAppCustomAttributeSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.property.friendlyNameInput">FriendlyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.property.nameFormatInput">NameFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.property.requiredInput">RequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.property.sourceInput">SourceInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSource">AccessApplicationSaasAppCustomAttributeSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.property.friendlyName">FriendlyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.property.nameFormat">NameFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.property.required">Required</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.property.source"></a>

```go
func Source() AccessApplicationSaasAppCustomAttributeSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference">AccessApplicationSaasAppCustomAttributeSourceOutputReference</a>

---

##### `FriendlyNameInput`<sup>Optional</sup> <a name="FriendlyNameInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.property.friendlyNameInput"></a>

```go
func FriendlyNameInput() *string
```

- *Type:* *string

---

##### `NameFormatInput`<sup>Optional</sup> <a name="NameFormatInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.property.nameFormatInput"></a>

```go
func NameFormatInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RequiredInput`<sup>Optional</sup> <a name="RequiredInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.property.requiredInput"></a>

```go
func RequiredInput() interface{}
```

- *Type:* interface{}

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.property.sourceInput"></a>

```go
func SourceInput() AccessApplicationSaasAppCustomAttributeSource
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSource">AccessApplicationSaasAppCustomAttributeSource</a>

---

##### `FriendlyName`<sup>Required</sup> <a name="FriendlyName" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.property.friendlyName"></a>

```go
func FriendlyName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NameFormat`<sup>Required</sup> <a name="NameFormat" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.property.nameFormat"></a>

```go
func NameFormat() *string
```

- *Type:* *string

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.property.required"></a>

```go
func Required() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AccessApplicationSaasAppCustomAttributeSourceOutputReference <a name="AccessApplicationSaasAppCustomAttributeSourceOutputReference" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/accessapplication"

accessapplication.NewAccessApplicationSaasAppCustomAttributeSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AccessApplicationSaasAppCustomAttributeSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.resetNameByIdp">ResetNameByIdp</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNameByIdp` <a name="ResetNameByIdp" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.resetNameByIdp"></a>

```go
func ResetNameByIdp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.property.nameByIdpInput">NameByIdpInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.property.nameByIdp">NameByIdp</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSource">AccessApplicationSaasAppCustomAttributeSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameByIdpInput`<sup>Optional</sup> <a name="NameByIdpInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.property.nameByIdpInput"></a>

```go
func NameByIdpInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NameByIdp`<sup>Required</sup> <a name="NameByIdp" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.property.nameByIdp"></a>

```go
func NameByIdp() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() AccessApplicationSaasAppCustomAttributeSource
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSource">AccessApplicationSaasAppCustomAttributeSource</a>

---


### AccessApplicationSaasAppCustomClaimList <a name="AccessApplicationSaasAppCustomClaimList" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/accessapplication"

accessapplication.NewAccessApplicationSaasAppCustomClaimList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AccessApplicationSaasAppCustomClaimList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimList.get"></a>

```go
func Get(index *f64) AccessApplicationSaasAppCustomClaimOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AccessApplicationSaasAppCustomClaimOutputReference <a name="AccessApplicationSaasAppCustomClaimOutputReference" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/accessapplication"

accessapplication.NewAccessApplicationSaasAppCustomClaimOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AccessApplicationSaasAppCustomClaimOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.resetRequired">ResetRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.resetScope">ResetScope</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSource` <a name="PutSource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.putSource"></a>

```go
func PutSource(value AccessApplicationSaasAppCustomClaimSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSource">AccessApplicationSaasAppCustomClaimSource</a>

---

##### `ResetName` <a name="ResetName" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetRequired` <a name="ResetRequired" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.resetRequired"></a>

```go
func ResetRequired()
```

##### `ResetScope` <a name="ResetScope" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.resetScope"></a>

```go
func ResetScope()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.property.source">Source</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference">AccessApplicationSaasAppCustomClaimSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.property.requiredInput">RequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.property.scopeInput">ScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.property.sourceInput">SourceInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSource">AccessApplicationSaasAppCustomClaimSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.property.required">Required</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.property.source"></a>

```go
func Source() AccessApplicationSaasAppCustomClaimSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference">AccessApplicationSaasAppCustomClaimSourceOutputReference</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RequiredInput`<sup>Optional</sup> <a name="RequiredInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.property.requiredInput"></a>

```go
func RequiredInput() interface{}
```

- *Type:* interface{}

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.property.scopeInput"></a>

```go
func ScopeInput() *string
```

- *Type:* *string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.property.sourceInput"></a>

```go
func SourceInput() AccessApplicationSaasAppCustomClaimSource
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSource">AccessApplicationSaasAppCustomClaimSource</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.property.required"></a>

```go
func Required() interface{}
```

- *Type:* interface{}

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AccessApplicationSaasAppCustomClaimSourceOutputReference <a name="AccessApplicationSaasAppCustomClaimSourceOutputReference" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/accessapplication"

accessapplication.NewAccessApplicationSaasAppCustomClaimSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AccessApplicationSaasAppCustomClaimSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.resetNameByIdp">ResetNameByIdp</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNameByIdp` <a name="ResetNameByIdp" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.resetNameByIdp"></a>

```go
func ResetNameByIdp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.property.nameByIdpInput">NameByIdpInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.property.nameByIdp">NameByIdp</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSource">AccessApplicationSaasAppCustomClaimSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameByIdpInput`<sup>Optional</sup> <a name="NameByIdpInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.property.nameByIdpInput"></a>

```go
func NameByIdpInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NameByIdp`<sup>Required</sup> <a name="NameByIdp" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.property.nameByIdp"></a>

```go
func NameByIdp() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() AccessApplicationSaasAppCustomClaimSource
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSource">AccessApplicationSaasAppCustomClaimSource</a>

---


### AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference <a name="AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/accessapplication"

accessapplication.NewAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.resetReturnAccessTokenFromAuthorizationEndpoint">ResetReturnAccessTokenFromAuthorizationEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.resetReturnIdTokenFromAuthorizationEndpoint">ResetReturnIdTokenFromAuthorizationEndpoint</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetReturnAccessTokenFromAuthorizationEndpoint` <a name="ResetReturnAccessTokenFromAuthorizationEndpoint" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.resetReturnAccessTokenFromAuthorizationEndpoint"></a>

```go
func ResetReturnAccessTokenFromAuthorizationEndpoint()
```

##### `ResetReturnIdTokenFromAuthorizationEndpoint` <a name="ResetReturnIdTokenFromAuthorizationEndpoint" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.resetReturnIdTokenFromAuthorizationEndpoint"></a>

```go
func ResetReturnIdTokenFromAuthorizationEndpoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.property.returnAccessTokenFromAuthorizationEndpointInput">ReturnAccessTokenFromAuthorizationEndpointInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.property.returnIdTokenFromAuthorizationEndpointInput">ReturnIdTokenFromAuthorizationEndpointInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.property.returnAccessTokenFromAuthorizationEndpoint">ReturnAccessTokenFromAuthorizationEndpoint</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.property.returnIdTokenFromAuthorizationEndpoint">ReturnIdTokenFromAuthorizationEndpoint</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptions">AccessApplicationSaasAppHybridAndImplicitOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReturnAccessTokenFromAuthorizationEndpointInput`<sup>Optional</sup> <a name="ReturnAccessTokenFromAuthorizationEndpointInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.property.returnAccessTokenFromAuthorizationEndpointInput"></a>

```go
func ReturnAccessTokenFromAuthorizationEndpointInput() interface{}
```

- *Type:* interface{}

---

##### `ReturnIdTokenFromAuthorizationEndpointInput`<sup>Optional</sup> <a name="ReturnIdTokenFromAuthorizationEndpointInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.property.returnIdTokenFromAuthorizationEndpointInput"></a>

```go
func ReturnIdTokenFromAuthorizationEndpointInput() interface{}
```

- *Type:* interface{}

---

##### `ReturnAccessTokenFromAuthorizationEndpoint`<sup>Required</sup> <a name="ReturnAccessTokenFromAuthorizationEndpoint" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.property.returnAccessTokenFromAuthorizationEndpoint"></a>

```go
func ReturnAccessTokenFromAuthorizationEndpoint() interface{}
```

- *Type:* interface{}

---

##### `ReturnIdTokenFromAuthorizationEndpoint`<sup>Required</sup> <a name="ReturnIdTokenFromAuthorizationEndpoint" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.property.returnIdTokenFromAuthorizationEndpoint"></a>

```go
func ReturnIdTokenFromAuthorizationEndpoint() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() AccessApplicationSaasAppHybridAndImplicitOptions
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptions">AccessApplicationSaasAppHybridAndImplicitOptions</a>

---


### AccessApplicationSaasAppOutputReference <a name="AccessApplicationSaasAppOutputReference" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/accessapplication"

accessapplication.NewAccessApplicationSaasAppOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AccessApplicationSaasAppOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.putCustomAttribute">PutCustomAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.putCustomClaim">PutCustomClaim</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.putHybridAndImplicitOptions">PutHybridAndImplicitOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.putRefreshTokenOptions">PutRefreshTokenOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetAccessTokenLifetime">ResetAccessTokenLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetAllowPkceWithoutClientSecret">ResetAllowPkceWithoutClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetAppLauncherUrl">ResetAppLauncherUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetAuthType">ResetAuthType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetConsumerServiceUrl">ResetConsumerServiceUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetCustomAttribute">ResetCustomAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetCustomClaim">ResetCustomClaim</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetDefaultRelayState">ResetDefaultRelayState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetGrantTypes">ResetGrantTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetGroupFilterRegex">ResetGroupFilterRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetHybridAndImplicitOptions">ResetHybridAndImplicitOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetNameIdFormat">ResetNameIdFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetNameIdTransformJsonata">ResetNameIdTransformJsonata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetRedirectUris">ResetRedirectUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetRefreshTokenOptions">ResetRefreshTokenOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetSamlAttributeTransformJsonata">ResetSamlAttributeTransformJsonata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetScopes">ResetScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetSpEntityId">ResetSpEntityId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomAttribute` <a name="PutCustomAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.putCustomAttribute"></a>

```go
func PutCustomAttribute(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.putCustomAttribute.parameter.value"></a>

- *Type:* interface{}

---

##### `PutCustomClaim` <a name="PutCustomClaim" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.putCustomClaim"></a>

```go
func PutCustomClaim(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.putCustomClaim.parameter.value"></a>

- *Type:* interface{}

---

##### `PutHybridAndImplicitOptions` <a name="PutHybridAndImplicitOptions" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.putHybridAndImplicitOptions"></a>

```go
func PutHybridAndImplicitOptions(value AccessApplicationSaasAppHybridAndImplicitOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.putHybridAndImplicitOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptions">AccessApplicationSaasAppHybridAndImplicitOptions</a>

---

##### `PutRefreshTokenOptions` <a name="PutRefreshTokenOptions" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.putRefreshTokenOptions"></a>

```go
func PutRefreshTokenOptions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.putRefreshTokenOptions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAccessTokenLifetime` <a name="ResetAccessTokenLifetime" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetAccessTokenLifetime"></a>

```go
func ResetAccessTokenLifetime()
```

##### `ResetAllowPkceWithoutClientSecret` <a name="ResetAllowPkceWithoutClientSecret" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetAllowPkceWithoutClientSecret"></a>

```go
func ResetAllowPkceWithoutClientSecret()
```

##### `ResetAppLauncherUrl` <a name="ResetAppLauncherUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetAppLauncherUrl"></a>

```go
func ResetAppLauncherUrl()
```

##### `ResetAuthType` <a name="ResetAuthType" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetAuthType"></a>

```go
func ResetAuthType()
```

##### `ResetConsumerServiceUrl` <a name="ResetConsumerServiceUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetConsumerServiceUrl"></a>

```go
func ResetConsumerServiceUrl()
```

##### `ResetCustomAttribute` <a name="ResetCustomAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetCustomAttribute"></a>

```go
func ResetCustomAttribute()
```

##### `ResetCustomClaim` <a name="ResetCustomClaim" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetCustomClaim"></a>

```go
func ResetCustomClaim()
```

##### `ResetDefaultRelayState` <a name="ResetDefaultRelayState" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetDefaultRelayState"></a>

```go
func ResetDefaultRelayState()
```

##### `ResetGrantTypes` <a name="ResetGrantTypes" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetGrantTypes"></a>

```go
func ResetGrantTypes()
```

##### `ResetGroupFilterRegex` <a name="ResetGroupFilterRegex" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetGroupFilterRegex"></a>

```go
func ResetGroupFilterRegex()
```

##### `ResetHybridAndImplicitOptions` <a name="ResetHybridAndImplicitOptions" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetHybridAndImplicitOptions"></a>

```go
func ResetHybridAndImplicitOptions()
```

##### `ResetNameIdFormat` <a name="ResetNameIdFormat" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetNameIdFormat"></a>

```go
func ResetNameIdFormat()
```

##### `ResetNameIdTransformJsonata` <a name="ResetNameIdTransformJsonata" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetNameIdTransformJsonata"></a>

```go
func ResetNameIdTransformJsonata()
```

##### `ResetRedirectUris` <a name="ResetRedirectUris" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetRedirectUris"></a>

```go
func ResetRedirectUris()
```

##### `ResetRefreshTokenOptions` <a name="ResetRefreshTokenOptions" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetRefreshTokenOptions"></a>

```go
func ResetRefreshTokenOptions()
```

##### `ResetSamlAttributeTransformJsonata` <a name="ResetSamlAttributeTransformJsonata" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetSamlAttributeTransformJsonata"></a>

```go
func ResetSamlAttributeTransformJsonata()
```

##### `ResetScopes` <a name="ResetScopes" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetScopes"></a>

```go
func ResetScopes()
```

##### `ResetSpEntityId` <a name="ResetSpEntityId" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetSpEntityId"></a>

```go
func ResetSpEntityId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.customAttribute">CustomAttribute</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList">AccessApplicationSaasAppCustomAttributeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.customClaim">CustomClaim</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimList">AccessApplicationSaasAppCustomClaimList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.hybridAndImplicitOptions">HybridAndImplicitOptions</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference">AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.idpEntityId">IdpEntityId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.publicKey">PublicKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.refreshTokenOptions">RefreshTokenOptions</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsList">AccessApplicationSaasAppRefreshTokenOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.ssoEndpoint">SsoEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.accessTokenLifetimeInput">AccessTokenLifetimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.allowPkceWithoutClientSecretInput">AllowPkceWithoutClientSecretInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.appLauncherUrlInput">AppLauncherUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.authTypeInput">AuthTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.consumerServiceUrlInput">ConsumerServiceUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.customAttributeInput">CustomAttributeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.customClaimInput">CustomClaimInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.defaultRelayStateInput">DefaultRelayStateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.grantTypesInput">GrantTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.groupFilterRegexInput">GroupFilterRegexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.hybridAndImplicitOptionsInput">HybridAndImplicitOptionsInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptions">AccessApplicationSaasAppHybridAndImplicitOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.nameIdFormatInput">NameIdFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.nameIdTransformJsonataInput">NameIdTransformJsonataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.redirectUrisInput">RedirectUrisInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.refreshTokenOptionsInput">RefreshTokenOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.samlAttributeTransformJsonataInput">SamlAttributeTransformJsonataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.scopesInput">ScopesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.spEntityIdInput">SpEntityIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.accessTokenLifetime">AccessTokenLifetime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.allowPkceWithoutClientSecret">AllowPkceWithoutClientSecret</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.appLauncherUrl">AppLauncherUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.authType">AuthType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.consumerServiceUrl">ConsumerServiceUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.defaultRelayState">DefaultRelayState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.grantTypes">GrantTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.groupFilterRegex">GroupFilterRegex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.nameIdFormat">NameIdFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.nameIdTransformJsonata">NameIdTransformJsonata</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.redirectUris">RedirectUris</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.samlAttributeTransformJsonata">SamlAttributeTransformJsonata</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.scopes">Scopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.spEntityId">SpEntityId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp">AccessApplicationSaasApp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `CustomAttribute`<sup>Required</sup> <a name="CustomAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.customAttribute"></a>

```go
func CustomAttribute() AccessApplicationSaasAppCustomAttributeList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList">AccessApplicationSaasAppCustomAttributeList</a>

---

##### `CustomClaim`<sup>Required</sup> <a name="CustomClaim" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.customClaim"></a>

```go
func CustomClaim() AccessApplicationSaasAppCustomClaimList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimList">AccessApplicationSaasAppCustomClaimList</a>

---

##### `HybridAndImplicitOptions`<sup>Required</sup> <a name="HybridAndImplicitOptions" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.hybridAndImplicitOptions"></a>

```go
func HybridAndImplicitOptions() AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference">AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference</a>

---

##### `IdpEntityId`<sup>Required</sup> <a name="IdpEntityId" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.idpEntityId"></a>

```go
func IdpEntityId() *string
```

- *Type:* *string

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.publicKey"></a>

```go
func PublicKey() *string
```

- *Type:* *string

---

##### `RefreshTokenOptions`<sup>Required</sup> <a name="RefreshTokenOptions" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.refreshTokenOptions"></a>

```go
func RefreshTokenOptions() AccessApplicationSaasAppRefreshTokenOptionsList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsList">AccessApplicationSaasAppRefreshTokenOptionsList</a>

---

##### `SsoEndpoint`<sup>Required</sup> <a name="SsoEndpoint" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.ssoEndpoint"></a>

```go
func SsoEndpoint() *string
```

- *Type:* *string

---

##### `AccessTokenLifetimeInput`<sup>Optional</sup> <a name="AccessTokenLifetimeInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.accessTokenLifetimeInput"></a>

```go
func AccessTokenLifetimeInput() *string
```

- *Type:* *string

---

##### `AllowPkceWithoutClientSecretInput`<sup>Optional</sup> <a name="AllowPkceWithoutClientSecretInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.allowPkceWithoutClientSecretInput"></a>

```go
func AllowPkceWithoutClientSecretInput() interface{}
```

- *Type:* interface{}

---

##### `AppLauncherUrlInput`<sup>Optional</sup> <a name="AppLauncherUrlInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.appLauncherUrlInput"></a>

```go
func AppLauncherUrlInput() *string
```

- *Type:* *string

---

##### `AuthTypeInput`<sup>Optional</sup> <a name="AuthTypeInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.authTypeInput"></a>

```go
func AuthTypeInput() *string
```

- *Type:* *string

---

##### `ConsumerServiceUrlInput`<sup>Optional</sup> <a name="ConsumerServiceUrlInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.consumerServiceUrlInput"></a>

```go
func ConsumerServiceUrlInput() *string
```

- *Type:* *string

---

##### `CustomAttributeInput`<sup>Optional</sup> <a name="CustomAttributeInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.customAttributeInput"></a>

```go
func CustomAttributeInput() interface{}
```

- *Type:* interface{}

---

##### `CustomClaimInput`<sup>Optional</sup> <a name="CustomClaimInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.customClaimInput"></a>

```go
func CustomClaimInput() interface{}
```

- *Type:* interface{}

---

##### `DefaultRelayStateInput`<sup>Optional</sup> <a name="DefaultRelayStateInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.defaultRelayStateInput"></a>

```go
func DefaultRelayStateInput() *string
```

- *Type:* *string

---

##### `GrantTypesInput`<sup>Optional</sup> <a name="GrantTypesInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.grantTypesInput"></a>

```go
func GrantTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `GroupFilterRegexInput`<sup>Optional</sup> <a name="GroupFilterRegexInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.groupFilterRegexInput"></a>

```go
func GroupFilterRegexInput() *string
```

- *Type:* *string

---

##### `HybridAndImplicitOptionsInput`<sup>Optional</sup> <a name="HybridAndImplicitOptionsInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.hybridAndImplicitOptionsInput"></a>

```go
func HybridAndImplicitOptionsInput() AccessApplicationSaasAppHybridAndImplicitOptions
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptions">AccessApplicationSaasAppHybridAndImplicitOptions</a>

---

##### `NameIdFormatInput`<sup>Optional</sup> <a name="NameIdFormatInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.nameIdFormatInput"></a>

```go
func NameIdFormatInput() *string
```

- *Type:* *string

---

##### `NameIdTransformJsonataInput`<sup>Optional</sup> <a name="NameIdTransformJsonataInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.nameIdTransformJsonataInput"></a>

```go
func NameIdTransformJsonataInput() *string
```

- *Type:* *string

---

##### `RedirectUrisInput`<sup>Optional</sup> <a name="RedirectUrisInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.redirectUrisInput"></a>

```go
func RedirectUrisInput() *[]*string
```

- *Type:* *[]*string

---

##### `RefreshTokenOptionsInput`<sup>Optional</sup> <a name="RefreshTokenOptionsInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.refreshTokenOptionsInput"></a>

```go
func RefreshTokenOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `SamlAttributeTransformJsonataInput`<sup>Optional</sup> <a name="SamlAttributeTransformJsonataInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.samlAttributeTransformJsonataInput"></a>

```go
func SamlAttributeTransformJsonataInput() *string
```

- *Type:* *string

---

##### `ScopesInput`<sup>Optional</sup> <a name="ScopesInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.scopesInput"></a>

```go
func ScopesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SpEntityIdInput`<sup>Optional</sup> <a name="SpEntityIdInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.spEntityIdInput"></a>

```go
func SpEntityIdInput() *string
```

- *Type:* *string

---

##### `AccessTokenLifetime`<sup>Required</sup> <a name="AccessTokenLifetime" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.accessTokenLifetime"></a>

```go
func AccessTokenLifetime() *string
```

- *Type:* *string

---

##### `AllowPkceWithoutClientSecret`<sup>Required</sup> <a name="AllowPkceWithoutClientSecret" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.allowPkceWithoutClientSecret"></a>

```go
func AllowPkceWithoutClientSecret() interface{}
```

- *Type:* interface{}

---

##### `AppLauncherUrl`<sup>Required</sup> <a name="AppLauncherUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.appLauncherUrl"></a>

```go
func AppLauncherUrl() *string
```

- *Type:* *string

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.authType"></a>

```go
func AuthType() *string
```

- *Type:* *string

---

##### `ConsumerServiceUrl`<sup>Required</sup> <a name="ConsumerServiceUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.consumerServiceUrl"></a>

```go
func ConsumerServiceUrl() *string
```

- *Type:* *string

---

##### `DefaultRelayState`<sup>Required</sup> <a name="DefaultRelayState" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.defaultRelayState"></a>

```go
func DefaultRelayState() *string
```

- *Type:* *string

---

##### `GrantTypes`<sup>Required</sup> <a name="GrantTypes" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.grantTypes"></a>

```go
func GrantTypes() *[]*string
```

- *Type:* *[]*string

---

##### `GroupFilterRegex`<sup>Required</sup> <a name="GroupFilterRegex" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.groupFilterRegex"></a>

```go
func GroupFilterRegex() *string
```

- *Type:* *string

---

##### `NameIdFormat`<sup>Required</sup> <a name="NameIdFormat" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.nameIdFormat"></a>

```go
func NameIdFormat() *string
```

- *Type:* *string

---

##### `NameIdTransformJsonata`<sup>Required</sup> <a name="NameIdTransformJsonata" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.nameIdTransformJsonata"></a>

```go
func NameIdTransformJsonata() *string
```

- *Type:* *string

---

##### `RedirectUris`<sup>Required</sup> <a name="RedirectUris" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.redirectUris"></a>

```go
func RedirectUris() *[]*string
```

- *Type:* *[]*string

---

##### `SamlAttributeTransformJsonata`<sup>Required</sup> <a name="SamlAttributeTransformJsonata" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.samlAttributeTransformJsonata"></a>

```go
func SamlAttributeTransformJsonata() *string
```

- *Type:* *string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.scopes"></a>

```go
func Scopes() *[]*string
```

- *Type:* *[]*string

---

##### `SpEntityId`<sup>Required</sup> <a name="SpEntityId" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.spEntityId"></a>

```go
func SpEntityId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.internalValue"></a>

```go
func InternalValue() AccessApplicationSaasApp
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp">AccessApplicationSaasApp</a>

---


### AccessApplicationSaasAppRefreshTokenOptionsList <a name="AccessApplicationSaasAppRefreshTokenOptionsList" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/accessapplication"

accessapplication.NewAccessApplicationSaasAppRefreshTokenOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AccessApplicationSaasAppRefreshTokenOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsList.get"></a>

```go
func Get(index *f64) AccessApplicationSaasAppRefreshTokenOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AccessApplicationSaasAppRefreshTokenOptionsOutputReference <a name="AccessApplicationSaasAppRefreshTokenOptionsOutputReference" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/accessapplication"

accessapplication.NewAccessApplicationSaasAppRefreshTokenOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AccessApplicationSaasAppRefreshTokenOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.resetLifetime">ResetLifetime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLifetime` <a name="ResetLifetime" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.resetLifetime"></a>

```go
func ResetLifetime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.property.lifetimeInput">LifetimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.property.lifetime">Lifetime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LifetimeInput`<sup>Optional</sup> <a name="LifetimeInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.property.lifetimeInput"></a>

```go
func LifetimeInput() *string
```

- *Type:* *string

---

##### `Lifetime`<sup>Required</sup> <a name="Lifetime" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.property.lifetime"></a>

```go
func Lifetime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AccessApplicationScimConfigAuthenticationOutputReference <a name="AccessApplicationScimConfigAuthenticationOutputReference" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/accessapplication"

accessapplication.NewAccessApplicationScimConfigAuthenticationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AccessApplicationScimConfigAuthenticationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.resetAuthorizationUrl">ResetAuthorizationUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.resetScopes">ResetScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.resetToken">ResetToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.resetTokenUrl">ResetTokenUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.resetUser">ResetUser</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthorizationUrl` <a name="ResetAuthorizationUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.resetAuthorizationUrl"></a>

```go
func ResetAuthorizationUrl()
```

##### `ResetClientId` <a name="ResetClientId" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.resetClientId"></a>

```go
func ResetClientId()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.resetClientSecret"></a>

```go
func ResetClientSecret()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetScopes` <a name="ResetScopes" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.resetScopes"></a>

```go
func ResetScopes()
```

##### `ResetToken` <a name="ResetToken" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.resetToken"></a>

```go
func ResetToken()
```

##### `ResetTokenUrl` <a name="ResetTokenUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.resetTokenUrl"></a>

```go
func ResetTokenUrl()
```

##### `ResetUser` <a name="ResetUser" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.resetUser"></a>

```go
func ResetUser()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.authorizationUrlInput">AuthorizationUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.schemeInput">SchemeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.scopesInput">ScopesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.tokenInput">TokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.tokenUrlInput">TokenUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.userInput">UserInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.authorizationUrl">AuthorizationUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.scheme">Scheme</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.scopes">Scopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.token">Token</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.tokenUrl">TokenUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.user">User</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthentication">AccessApplicationScimConfigAuthentication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorizationUrlInput`<sup>Optional</sup> <a name="AuthorizationUrlInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.authorizationUrlInput"></a>

```go
func AuthorizationUrlInput() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.clientSecretInput"></a>

```go
func ClientSecretInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `SchemeInput`<sup>Optional</sup> <a name="SchemeInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.schemeInput"></a>

```go
func SchemeInput() *string
```

- *Type:* *string

---

##### `ScopesInput`<sup>Optional</sup> <a name="ScopesInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.scopesInput"></a>

```go
func ScopesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.tokenInput"></a>

```go
func TokenInput() *string
```

- *Type:* *string

---

##### `TokenUrlInput`<sup>Optional</sup> <a name="TokenUrlInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.tokenUrlInput"></a>

```go
func TokenUrlInput() *string
```

- *Type:* *string

---

##### `UserInput`<sup>Optional</sup> <a name="UserInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.userInput"></a>

```go
func UserInput() *string
```

- *Type:* *string

---

##### `AuthorizationUrl`<sup>Required</sup> <a name="AuthorizationUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.authorizationUrl"></a>

```go
func AuthorizationUrl() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Scheme`<sup>Required</sup> <a name="Scheme" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.scheme"></a>

```go
func Scheme() *string
```

- *Type:* *string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.scopes"></a>

```go
func Scopes() *[]*string
```

- *Type:* *[]*string

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.token"></a>

```go
func Token() *string
```

- *Type:* *string

---

##### `TokenUrl`<sup>Required</sup> <a name="TokenUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.tokenUrl"></a>

```go
func TokenUrl() *string
```

- *Type:* *string

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.user"></a>

```go
func User() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.internalValue"></a>

```go
func InternalValue() AccessApplicationScimConfigAuthentication
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthentication">AccessApplicationScimConfigAuthentication</a>

---


### AccessApplicationScimConfigMappingsList <a name="AccessApplicationScimConfigMappingsList" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/accessapplication"

accessapplication.NewAccessApplicationScimConfigMappingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AccessApplicationScimConfigMappingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsList.get"></a>

```go
func Get(index *f64) AccessApplicationScimConfigMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AccessApplicationScimConfigMappingsOperationsOutputReference <a name="AccessApplicationScimConfigMappingsOperationsOutputReference" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/accessapplication"

accessapplication.NewAccessApplicationScimConfigMappingsOperationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AccessApplicationScimConfigMappingsOperationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.property.createInput">CreateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.property.updateInput">UpdateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.property.create">Create</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.property.delete">Delete</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.property.update">Update</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperations">AccessApplicationScimConfigMappingsOperations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.property.createInput"></a>

```go
func CreateInput() interface{}
```

- *Type:* interface{}

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() interface{}
```

- *Type:* interface{}

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.property.updateInput"></a>

```go
func UpdateInput() interface{}
```

- *Type:* interface{}

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.property.create"></a>

```go
func Create() interface{}
```

- *Type:* interface{}

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.property.delete"></a>

```go
func Delete() interface{}
```

- *Type:* interface{}

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.property.update"></a>

```go
func Update() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.property.internalValue"></a>

```go
func InternalValue() AccessApplicationScimConfigMappingsOperations
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperations">AccessApplicationScimConfigMappingsOperations</a>

---


### AccessApplicationScimConfigMappingsOutputReference <a name="AccessApplicationScimConfigMappingsOutputReference" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/accessapplication"

accessapplication.NewAccessApplicationScimConfigMappingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AccessApplicationScimConfigMappingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.putOperations">PutOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.resetOperations">ResetOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.resetTransformJsonata">ResetTransformJsonata</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOperations` <a name="PutOperations" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.putOperations"></a>

```go
func PutOperations(value AccessApplicationScimConfigMappingsOperations)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.putOperations.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperations">AccessApplicationScimConfigMappingsOperations</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetOperations` <a name="ResetOperations" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.resetOperations"></a>

```go
func ResetOperations()
```

##### `ResetTransformJsonata` <a name="ResetTransformJsonata" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.resetTransformJsonata"></a>

```go
func ResetTransformJsonata()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.property.operations">Operations</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference">AccessApplicationScimConfigMappingsOperationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.property.filterInput">FilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.property.operationsInput">OperationsInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperations">AccessApplicationScimConfigMappingsOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.property.schemaInput">SchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.property.transformJsonataInput">TransformJsonataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.property.filter">Filter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.property.schema">Schema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.property.transformJsonata">TransformJsonata</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Operations`<sup>Required</sup> <a name="Operations" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.property.operations"></a>

```go
func Operations() AccessApplicationScimConfigMappingsOperationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference">AccessApplicationScimConfigMappingsOperationsOutputReference</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.property.filterInput"></a>

```go
func FilterInput() *string
```

- *Type:* *string

---

##### `OperationsInput`<sup>Optional</sup> <a name="OperationsInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.property.operationsInput"></a>

```go
func OperationsInput() AccessApplicationScimConfigMappingsOperations
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperations">AccessApplicationScimConfigMappingsOperations</a>

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.property.schemaInput"></a>

```go
func SchemaInput() *string
```

- *Type:* *string

---

##### `TransformJsonataInput`<sup>Optional</sup> <a name="TransformJsonataInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.property.transformJsonataInput"></a>

```go
func TransformJsonataInput() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.property.filter"></a>

```go
func Filter() *string
```

- *Type:* *string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.property.schema"></a>

```go
func Schema() *string
```

- *Type:* *string

---

##### `TransformJsonata`<sup>Required</sup> <a name="TransformJsonata" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.property.transformJsonata"></a>

```go
func TransformJsonata() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AccessApplicationScimConfigOutputReference <a name="AccessApplicationScimConfigOutputReference" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/accessapplication"

accessapplication.NewAccessApplicationScimConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AccessApplicationScimConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.putAuthentication">PutAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.putMappings">PutMappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.resetAuthentication">ResetAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.resetDeactivateOnDelete">ResetDeactivateOnDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.resetMappings">ResetMappings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthentication` <a name="PutAuthentication" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.putAuthentication"></a>

```go
func PutAuthentication(value AccessApplicationScimConfigAuthentication)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.putAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthentication">AccessApplicationScimConfigAuthentication</a>

---

##### `PutMappings` <a name="PutMappings" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.putMappings"></a>

```go
func PutMappings(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.putMappings.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAuthentication` <a name="ResetAuthentication" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.resetAuthentication"></a>

```go
func ResetAuthentication()
```

##### `ResetDeactivateOnDelete` <a name="ResetDeactivateOnDelete" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.resetDeactivateOnDelete"></a>

```go
func ResetDeactivateOnDelete()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetMappings` <a name="ResetMappings" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.resetMappings"></a>

```go
func ResetMappings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.authentication">Authentication</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference">AccessApplicationScimConfigAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.mappings">Mappings</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsList">AccessApplicationScimConfigMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.authenticationInput">AuthenticationInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthentication">AccessApplicationScimConfigAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.deactivateOnDeleteInput">DeactivateOnDeleteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.idpUidInput">IdpUidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.mappingsInput">MappingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.remoteUriInput">RemoteUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.deactivateOnDelete">DeactivateOnDelete</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.idpUid">IdpUid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.remoteUri">RemoteUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfig">AccessApplicationScimConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Authentication`<sup>Required</sup> <a name="Authentication" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.authentication"></a>

```go
func Authentication() AccessApplicationScimConfigAuthenticationOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference">AccessApplicationScimConfigAuthenticationOutputReference</a>

---

##### `Mappings`<sup>Required</sup> <a name="Mappings" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.mappings"></a>

```go
func Mappings() AccessApplicationScimConfigMappingsList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsList">AccessApplicationScimConfigMappingsList</a>

---

##### `AuthenticationInput`<sup>Optional</sup> <a name="AuthenticationInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.authenticationInput"></a>

```go
func AuthenticationInput() AccessApplicationScimConfigAuthentication
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthentication">AccessApplicationScimConfigAuthentication</a>

---

##### `DeactivateOnDeleteInput`<sup>Optional</sup> <a name="DeactivateOnDeleteInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.deactivateOnDeleteInput"></a>

```go
func DeactivateOnDeleteInput() interface{}
```

- *Type:* interface{}

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdpUidInput`<sup>Optional</sup> <a name="IdpUidInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.idpUidInput"></a>

```go
func IdpUidInput() *string
```

- *Type:* *string

---

##### `MappingsInput`<sup>Optional</sup> <a name="MappingsInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.mappingsInput"></a>

```go
func MappingsInput() interface{}
```

- *Type:* interface{}

---

##### `RemoteUriInput`<sup>Optional</sup> <a name="RemoteUriInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.remoteUriInput"></a>

```go
func RemoteUriInput() *string
```

- *Type:* *string

---

##### `DeactivateOnDelete`<sup>Required</sup> <a name="DeactivateOnDelete" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.deactivateOnDelete"></a>

```go
func DeactivateOnDelete() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `IdpUid`<sup>Required</sup> <a name="IdpUid" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.idpUid"></a>

```go
func IdpUid() *string
```

- *Type:* *string

---

##### `RemoteUri`<sup>Required</sup> <a name="RemoteUri" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.remoteUri"></a>

```go
func RemoteUri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() AccessApplicationScimConfig
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfig">AccessApplicationScimConfig</a>

---


### AccessApplicationTargetCriteriaList <a name="AccessApplicationTargetCriteriaList" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/accessapplication"

accessapplication.NewAccessApplicationTargetCriteriaList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AccessApplicationTargetCriteriaList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaList.get"></a>

```go
func Get(index *f64) AccessApplicationTargetCriteriaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AccessApplicationTargetCriteriaOutputReference <a name="AccessApplicationTargetCriteriaOutputReference" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/accessapplication"

accessapplication.NewAccessApplicationTargetCriteriaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AccessApplicationTargetCriteriaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.putTargetAttributes">PutTargetAttributes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTargetAttributes` <a name="PutTargetAttributes" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.putTargetAttributes"></a>

```go
func PutTargetAttributes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.putTargetAttributes.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.property.targetAttributes">TargetAttributes</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesList">AccessApplicationTargetCriteriaTargetAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.property.targetAttributesInput">TargetAttributesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TargetAttributes`<sup>Required</sup> <a name="TargetAttributes" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.property.targetAttributes"></a>

```go
func TargetAttributes() AccessApplicationTargetCriteriaTargetAttributesList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesList">AccessApplicationTargetCriteriaTargetAttributesList</a>

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `TargetAttributesInput`<sup>Optional</sup> <a name="TargetAttributesInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.property.targetAttributesInput"></a>

```go
func TargetAttributesInput() interface{}
```

- *Type:* interface{}

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AccessApplicationTargetCriteriaTargetAttributesList <a name="AccessApplicationTargetCriteriaTargetAttributesList" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/accessapplication"

accessapplication.NewAccessApplicationTargetCriteriaTargetAttributesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AccessApplicationTargetCriteriaTargetAttributesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesList.get"></a>

```go
func Get(index *f64) AccessApplicationTargetCriteriaTargetAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AccessApplicationTargetCriteriaTargetAttributesOutputReference <a name="AccessApplicationTargetCriteriaTargetAttributesOutputReference" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/accessapplication"

accessapplication.NewAccessApplicationTargetCriteriaTargetAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AccessApplicationTargetCriteriaTargetAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



