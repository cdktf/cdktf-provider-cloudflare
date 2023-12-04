# `accessApplication` Submodule <a name="`accessApplication` Submodule" id="@cdktf/provider-cloudflare.accessApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccessApplication <a name="AccessApplication" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_application cloudflare_access_application}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10/accessapplication"

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

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig">AccessApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
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
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.putSaasApp">PutSaasApp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetAllowedIdps">ResetAllowedIdps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetAppLauncherVisible">ResetAppLauncherVisible</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetAutoRedirectToIdentity">ResetAutoRedirectToIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetCorsHeaders">ResetCorsHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetCustomDenyMessage">ResetCustomDenyMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetCustomDenyUrl">ResetCustomDenyUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetCustomNonIdentityDenyUrl">ResetCustomNonIdentityDenyUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetCustomPages">ResetCustomPages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetDomain">ResetDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetEnableBindingCookie">ResetEnableBindingCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetHttpOnlyCookieAttribute">ResetHttpOnlyCookieAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetLogoUrl">ResetLogoUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetSaasApp">ResetSaasApp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetSameSiteCookieAttribute">ResetSameSiteCookieAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetSelfHostedDomains">ResetSelfHostedDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetServiceAuth401Redirect">ResetServiceAuth401Redirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetSessionDuration">ResetSessionDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetSkipInterstitial">ResetSkipInterstitial</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetTags">ResetTags</a></code> | *No description.* |
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

##### `PutSaasApp` <a name="PutSaasApp" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.putSaasApp"></a>

```go
func PutSaasApp(value AccessApplicationSaasApp)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.putSaasApp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp">AccessApplicationSaasApp</a>

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetAccountId"></a>

```go
func ResetAccountId()
```

##### `ResetAllowedIdps` <a name="ResetAllowedIdps" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetAllowedIdps"></a>

```go
func ResetAllowedIdps()
```

##### `ResetAppLauncherVisible` <a name="ResetAppLauncherVisible" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetAppLauncherVisible"></a>

```go
func ResetAppLauncherVisible()
```

##### `ResetAutoRedirectToIdentity` <a name="ResetAutoRedirectToIdentity" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetAutoRedirectToIdentity"></a>

```go
func ResetAutoRedirectToIdentity()
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

##### `ResetHttpOnlyCookieAttribute` <a name="ResetHttpOnlyCookieAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetHttpOnlyCookieAttribute"></a>

```go
func ResetHttpOnlyCookieAttribute()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetId"></a>

```go
func ResetId()
```

##### `ResetLogoUrl` <a name="ResetLogoUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetLogoUrl"></a>

```go
func ResetLogoUrl()
```

##### `ResetSaasApp` <a name="ResetSaasApp" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetSaasApp"></a>

```go
func ResetSaasApp()
```

##### `ResetSameSiteCookieAttribute` <a name="ResetSameSiteCookieAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetSameSiteCookieAttribute"></a>

```go
func ResetSameSiteCookieAttribute()
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

##### `ResetSkipInterstitial` <a name="ResetSkipInterstitial" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetSkipInterstitial"></a>

```go
func ResetSkipInterstitial()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetTags"></a>

```go
func ResetTags()
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
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10/accessapplication"

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
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10/accessapplication"

accessapplication.AccessApplication_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10/accessapplication"

accessapplication.AccessApplication_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10/accessapplication"

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

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_application#import import section} in the documentation of this resource for the id to use

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
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.saasApp">SaasApp</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference">AccessApplicationSaasAppOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.allowedIdpsInput">AllowedIdpsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.appLauncherVisibleInput">AppLauncherVisibleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.autoRedirectToIdentityInput">AutoRedirectToIdentityInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.corsHeadersInput">CorsHeadersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.customDenyMessageInput">CustomDenyMessageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.customDenyUrlInput">CustomDenyUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.customNonIdentityDenyUrlInput">CustomNonIdentityDenyUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.customPagesInput">CustomPagesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.domainInput">DomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.enableBindingCookieInput">EnableBindingCookieInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.httpOnlyCookieAttributeInput">HttpOnlyCookieAttributeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.logoUrlInput">LogoUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.saasAppInput">SaasAppInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp">AccessApplicationSaasApp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.sameSiteCookieAttributeInput">SameSiteCookieAttributeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.selfHostedDomainsInput">SelfHostedDomainsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.serviceAuth401RedirectInput">ServiceAuth401RedirectInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.sessionDurationInput">SessionDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.skipInterstitialInput">SkipInterstitialInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.tagsInput">TagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.zoneIdInput">ZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.allowedIdps">AllowedIdps</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.appLauncherVisible">AppLauncherVisible</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.autoRedirectToIdentity">AutoRedirectToIdentity</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.customDenyMessage">CustomDenyMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.customDenyUrl">CustomDenyUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.customNonIdentityDenyUrl">CustomNonIdentityDenyUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.customPages">CustomPages</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.enableBindingCookie">EnableBindingCookie</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.httpOnlyCookieAttribute">HttpOnlyCookieAttribute</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.logoUrl">LogoUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.sameSiteCookieAttribute">SameSiteCookieAttribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.selfHostedDomains">SelfHostedDomains</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.serviceAuth401Redirect">ServiceAuth401Redirect</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.sessionDuration">SessionDuration</a></code> | <code>*string</code> | *No description.* |
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

##### `SaasApp`<sup>Required</sup> <a name="SaasApp" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.saasApp"></a>

```go
func SaasApp() AccessApplicationSaasAppOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference">AccessApplicationSaasAppOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `AllowedIdpsInput`<sup>Optional</sup> <a name="AllowedIdpsInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.allowedIdpsInput"></a>

```go
func AllowedIdpsInput() *[]*string
```

- *Type:* *[]*string

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

##### `AllowedIdps`<sup>Required</sup> <a name="AllowedIdps" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.allowedIdps"></a>

```go
func AllowedIdps() *[]*string
```

- *Type:* *[]*string

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
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10/accessapplication"

&accessapplication.AccessApplicationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	AccountId: *string,
	AllowedIdps: *[]*string,
	AppLauncherVisible: interface{},
	AutoRedirectToIdentity: interface{},
	CorsHeaders: interface{},
	CustomDenyMessage: *string,
	CustomDenyUrl: *string,
	CustomNonIdentityDenyUrl: *string,
	CustomPages: *[]*string,
	Domain: *string,
	EnableBindingCookie: interface{},
	HttpOnlyCookieAttribute: interface{},
	Id: *string,
	LogoUrl: *string,
	SaasApp: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10.accessApplication.AccessApplicationSaasApp,
	SameSiteCookieAttribute: *string,
	SelfHostedDomains: *[]*string,
	ServiceAuth401Redirect: interface{},
	SessionDuration: *string,
	SkipInterstitial: interface{},
	Tags: *[]*string,
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
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.name">Name</a></code> | <code>*string</code> | Friendly name of the Access Application. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.accountId">AccountId</a></code> | <code>*string</code> | The account identifier to target for the resource. Conflicts with `zone_id`. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.allowedIdps">AllowedIdps</a></code> | <code>*[]*string</code> | The identity providers selected for the application. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.appLauncherVisible">AppLauncherVisible</a></code> | <code>interface{}</code> | Option to show/hide applications in App Launcher. Defaults to `true`. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.autoRedirectToIdentity">AutoRedirectToIdentity</a></code> | <code>interface{}</code> | Option to skip identity provider selection if only one is configured in `allowed_idps`. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.corsHeaders">CorsHeaders</a></code> | <code>interface{}</code> | cors_headers block. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.customDenyMessage">CustomDenyMessage</a></code> | <code>*string</code> | Option that returns a custom error message when a user is denied access to the application. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.customDenyUrl">CustomDenyUrl</a></code> | <code>*string</code> | Option that redirects to a custom URL when a user is denied access to the application via identity based rules. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.customNonIdentityDenyUrl">CustomNonIdentityDenyUrl</a></code> | <code>*string</code> | Option that redirects to a custom URL when a user is denied access to the application via non identity rules. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.customPages">CustomPages</a></code> | <code>*[]*string</code> | The custom pages selected for the application. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.domain">Domain</a></code> | <code>*string</code> | The primary hostname and path that Access will secure. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.enableBindingCookie">EnableBindingCookie</a></code> | <code>interface{}</code> | Option to provide increased security against compromised authorization tokens and CSRF attacks by requiring an additional "binding" cookie on requests. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.httpOnlyCookieAttribute">HttpOnlyCookieAttribute</a></code> | <code>interface{}</code> | Option to add the `HttpOnly` cookie flag to access tokens. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_application#id AccessApplication#id}. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.logoUrl">LogoUrl</a></code> | <code>*string</code> | Image URL for the logo shown in the app launcher dashboard. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.saasApp">SaasApp</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp">AccessApplicationSaasApp</a></code> | saas_app block. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.sameSiteCookieAttribute">SameSiteCookieAttribute</a></code> | <code>*string</code> | Defines the same-site cookie setting for access tokens. Available values: `none`, `lax`, `strict`. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.selfHostedDomains">SelfHostedDomains</a></code> | <code>*[]*string</code> | List of domains that access will secure. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.serviceAuth401Redirect">ServiceAuth401Redirect</a></code> | <code>interface{}</code> | Option to return a 401 status code in service authentication rules on failed requests. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.sessionDuration">SessionDuration</a></code> | <code>*string</code> | How often a user will be forced to re-authorise. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.skipInterstitial">SkipInterstitial</a></code> | <code>interface{}</code> | Option to skip the authorization interstitial when using the CLI. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.tags">Tags</a></code> | <code>*[]*string</code> | The itags associated with the application. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.type">Type</a></code> | <code>*string</code> | The application type. Available values: `app_launcher`, `bookmark`, `biso`, `dash_sso`, `saas`, `self_hosted`, `ssh`, `vnc`, `warp`. Defaults to `self_hosted`. |
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

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Friendly name of the Access Application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_application#name AccessApplication#name}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

The account identifier to target for the resource. Conflicts with `zone_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_application#account_id AccessApplication#account_id}

---

##### `AllowedIdps`<sup>Optional</sup> <a name="AllowedIdps" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.allowedIdps"></a>

```go
AllowedIdps *[]*string
```

- *Type:* *[]*string

The identity providers selected for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_application#allowed_idps AccessApplication#allowed_idps}

---

##### `AppLauncherVisible`<sup>Optional</sup> <a name="AppLauncherVisible" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.appLauncherVisible"></a>

```go
AppLauncherVisible interface{}
```

- *Type:* interface{}

Option to show/hide applications in App Launcher. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_application#app_launcher_visible AccessApplication#app_launcher_visible}

---

##### `AutoRedirectToIdentity`<sup>Optional</sup> <a name="AutoRedirectToIdentity" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.autoRedirectToIdentity"></a>

```go
AutoRedirectToIdentity interface{}
```

- *Type:* interface{}

Option to skip identity provider selection if only one is configured in `allowed_idps`. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_application#auto_redirect_to_identity AccessApplication#auto_redirect_to_identity}

---

##### `CorsHeaders`<sup>Optional</sup> <a name="CorsHeaders" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.corsHeaders"></a>

```go
CorsHeaders interface{}
```

- *Type:* interface{}

cors_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_application#cors_headers AccessApplication#cors_headers}

---

##### `CustomDenyMessage`<sup>Optional</sup> <a name="CustomDenyMessage" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.customDenyMessage"></a>

```go
CustomDenyMessage *string
```

- *Type:* *string

Option that returns a custom error message when a user is denied access to the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_application#custom_deny_message AccessApplication#custom_deny_message}

---

##### `CustomDenyUrl`<sup>Optional</sup> <a name="CustomDenyUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.customDenyUrl"></a>

```go
CustomDenyUrl *string
```

- *Type:* *string

Option that redirects to a custom URL when a user is denied access to the application via identity based rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_application#custom_deny_url AccessApplication#custom_deny_url}

---

##### `CustomNonIdentityDenyUrl`<sup>Optional</sup> <a name="CustomNonIdentityDenyUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.customNonIdentityDenyUrl"></a>

```go
CustomNonIdentityDenyUrl *string
```

- *Type:* *string

Option that redirects to a custom URL when a user is denied access to the application via non identity rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_application#custom_non_identity_deny_url AccessApplication#custom_non_identity_deny_url}

---

##### `CustomPages`<sup>Optional</sup> <a name="CustomPages" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.customPages"></a>

```go
CustomPages *[]*string
```

- *Type:* *[]*string

The custom pages selected for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_application#custom_pages AccessApplication#custom_pages}

---

##### `Domain`<sup>Optional</sup> <a name="Domain" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.domain"></a>

```go
Domain *string
```

- *Type:* *string

The primary hostname and path that Access will secure.

If the app is visible in the App Launcher dashboard, this is the domain that will be displayed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_application#domain AccessApplication#domain}

---

##### `EnableBindingCookie`<sup>Optional</sup> <a name="EnableBindingCookie" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.enableBindingCookie"></a>

```go
EnableBindingCookie interface{}
```

- *Type:* interface{}

Option to provide increased security against compromised authorization tokens and CSRF attacks by requiring an additional "binding" cookie on requests.

Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_application#enable_binding_cookie AccessApplication#enable_binding_cookie}

---

##### `HttpOnlyCookieAttribute`<sup>Optional</sup> <a name="HttpOnlyCookieAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.httpOnlyCookieAttribute"></a>

```go
HttpOnlyCookieAttribute interface{}
```

- *Type:* interface{}

Option to add the `HttpOnly` cookie flag to access tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_application#http_only_cookie_attribute AccessApplication#http_only_cookie_attribute}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_application#id AccessApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LogoUrl`<sup>Optional</sup> <a name="LogoUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.logoUrl"></a>

```go
LogoUrl *string
```

- *Type:* *string

Image URL for the logo shown in the app launcher dashboard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_application#logo_url AccessApplication#logo_url}

---

##### `SaasApp`<sup>Optional</sup> <a name="SaasApp" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.saasApp"></a>

```go
SaasApp AccessApplicationSaasApp
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp">AccessApplicationSaasApp</a>

saas_app block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_application#saas_app AccessApplication#saas_app}

---

##### `SameSiteCookieAttribute`<sup>Optional</sup> <a name="SameSiteCookieAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.sameSiteCookieAttribute"></a>

```go
SameSiteCookieAttribute *string
```

- *Type:* *string

Defines the same-site cookie setting for access tokens. Available values: `none`, `lax`, `strict`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_application#same_site_cookie_attribute AccessApplication#same_site_cookie_attribute}

---

##### `SelfHostedDomains`<sup>Optional</sup> <a name="SelfHostedDomains" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.selfHostedDomains"></a>

```go
SelfHostedDomains *[]*string
```

- *Type:* *[]*string

List of domains that access will secure.

Only present for self_hosted, vnc, and ssh applications. Always includes the value set as `domain`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_application#self_hosted_domains AccessApplication#self_hosted_domains}

---

##### `ServiceAuth401Redirect`<sup>Optional</sup> <a name="ServiceAuth401Redirect" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.serviceAuth401Redirect"></a>

```go
ServiceAuth401Redirect interface{}
```

- *Type:* interface{}

Option to return a 401 status code in service authentication rules on failed requests. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_application#service_auth_401_redirect AccessApplication#service_auth_401_redirect}

---

##### `SessionDuration`<sup>Optional</sup> <a name="SessionDuration" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.sessionDuration"></a>

```go
SessionDuration *string
```

- *Type:* *string

How often a user will be forced to re-authorise.

Must be in the format `48h` or `2h45m`. Defaults to `24h`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_application#session_duration AccessApplication#session_duration}

---

##### `SkipInterstitial`<sup>Optional</sup> <a name="SkipInterstitial" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.skipInterstitial"></a>

```go
SkipInterstitial interface{}
```

- *Type:* interface{}

Option to skip the authorization interstitial when using the CLI. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_application#skip_interstitial AccessApplication#skip_interstitial}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.tags"></a>

```go
Tags *[]*string
```

- *Type:* *[]*string

The itags associated with the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_application#tags AccessApplication#tags}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

The application type. Available values: `app_launcher`, `bookmark`, `biso`, `dash_sso`, `saas`, `self_hosted`, `ssh`, `vnc`, `warp`. Defaults to `self_hosted`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_application#type AccessApplication#type}

---

##### `ZoneId`<sup>Optional</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.zoneId"></a>

```go
ZoneId *string
```

- *Type:* *string

The zone identifier to target for the resource. Conflicts with `account_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_application#zone_id AccessApplication#zone_id}

---

### AccessApplicationCorsHeaders <a name="AccessApplicationCorsHeaders" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10/accessapplication"

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_application#allow_all_headers AccessApplication#allow_all_headers}

---

##### `AllowAllMethods`<sup>Optional</sup> <a name="AllowAllMethods" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders.property.allowAllMethods"></a>

```go
AllowAllMethods interface{}
```

- *Type:* interface{}

Value to determine whether all methods are exposed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_application#allow_all_methods AccessApplication#allow_all_methods}

---

##### `AllowAllOrigins`<sup>Optional</sup> <a name="AllowAllOrigins" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders.property.allowAllOrigins"></a>

```go
AllowAllOrigins interface{}
```

- *Type:* interface{}

Value to determine whether all origins are permitted to make CORS requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_application#allow_all_origins AccessApplication#allow_all_origins}

---

##### `AllowCredentials`<sup>Optional</sup> <a name="AllowCredentials" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders.property.allowCredentials"></a>

```go
AllowCredentials interface{}
```

- *Type:* interface{}

Value to determine if credentials (cookies, authorization headers, or TLS client certificates) are included with requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_application#allow_credentials AccessApplication#allow_credentials}

---

##### `AllowedHeaders`<sup>Optional</sup> <a name="AllowedHeaders" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders.property.allowedHeaders"></a>

```go
AllowedHeaders *[]*string
```

- *Type:* *[]*string

List of HTTP headers to expose via CORS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_application#allowed_headers AccessApplication#allowed_headers}

---

##### `AllowedMethods`<sup>Optional</sup> <a name="AllowedMethods" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders.property.allowedMethods"></a>

```go
AllowedMethods *[]*string
```

- *Type:* *[]*string

List of methods to expose via CORS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_application#allowed_methods AccessApplication#allowed_methods}

---

##### `AllowedOrigins`<sup>Optional</sup> <a name="AllowedOrigins" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders.property.allowedOrigins"></a>

```go
AllowedOrigins *[]*string
```

- *Type:* *[]*string

List of origins permitted to make CORS requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_application#allowed_origins AccessApplication#allowed_origins}

---

##### `MaxAge`<sup>Optional</sup> <a name="MaxAge" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders.property.maxAge"></a>

```go
MaxAge *f64
```

- *Type:* *f64

The maximum time a preflight request will be cached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_application#max_age AccessApplication#max_age}

---

### AccessApplicationSaasApp <a name="AccessApplicationSaasApp" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10/accessapplication"

&accessapplication.AccessApplicationSaasApp {
	ConsumerServiceUrl: *string,
	SpEntityId: *string,
	CustomAttribute: interface{},
	NameIdFormat: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.consumerServiceUrl">ConsumerServiceUrl</a></code> | <code>*string</code> | The service provider's endpoint that is responsible for receiving and parsing a SAML assertion. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.spEntityId">SpEntityId</a></code> | <code>*string</code> | A globally unique name for an identity or service provider. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.customAttribute">CustomAttribute</a></code> | <code>interface{}</code> | custom_attribute block. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.nameIdFormat">NameIdFormat</a></code> | <code>*string</code> | The format of the name identifier sent to the SaaS application. Defaults to `email`. |

---

##### `ConsumerServiceUrl`<sup>Required</sup> <a name="ConsumerServiceUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.consumerServiceUrl"></a>

```go
ConsumerServiceUrl *string
```

- *Type:* *string

The service provider's endpoint that is responsible for receiving and parsing a SAML assertion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_application#consumer_service_url AccessApplication#consumer_service_url}

---

##### `SpEntityId`<sup>Required</sup> <a name="SpEntityId" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.spEntityId"></a>

```go
SpEntityId *string
```

- *Type:* *string

A globally unique name for an identity or service provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_application#sp_entity_id AccessApplication#sp_entity_id}

---

##### `CustomAttribute`<sup>Optional</sup> <a name="CustomAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.customAttribute"></a>

```go
CustomAttribute interface{}
```

- *Type:* interface{}

custom_attribute block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_application#custom_attribute AccessApplication#custom_attribute}

---

##### `NameIdFormat`<sup>Optional</sup> <a name="NameIdFormat" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.nameIdFormat"></a>

```go
NameIdFormat *string
```

- *Type:* *string

The format of the name identifier sent to the SaaS application. Defaults to `email`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_application#name_id_format AccessApplication#name_id_format}

---

### AccessApplicationSaasAppCustomAttribute <a name="AccessApplicationSaasAppCustomAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttribute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttribute.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10/accessapplication"

&accessapplication.AccessApplicationSaasAppCustomAttribute {
	Source: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10.accessApplication.AccessApplicationSaasAppCustomAttributeSource,
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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_application#source AccessApplication#source}

---

##### `FriendlyName`<sup>Optional</sup> <a name="FriendlyName" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttribute.property.friendlyName"></a>

```go
FriendlyName *string
```

- *Type:* *string

A friendly name for the attribute as provided to the SaaS app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_application#friendly_name AccessApplication#friendly_name}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttribute.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the attribute as provided to the SaaS app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_application#name AccessApplication#name}

---

##### `NameFormat`<sup>Optional</sup> <a name="NameFormat" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttribute.property.nameFormat"></a>

```go
NameFormat *string
```

- *Type:* *string

A globally unique name for an identity or service provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_application#name_format AccessApplication#name_format}

---

##### `Required`<sup>Optional</sup> <a name="Required" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttribute.property.required"></a>

```go
Required interface{}
```

- *Type:* interface{}

True if the attribute must be always present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_application#required AccessApplication#required}

---

### AccessApplicationSaasAppCustomAttributeSource <a name="AccessApplicationSaasAppCustomAttributeSource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10/accessapplication"

&accessapplication.AccessApplicationSaasAppCustomAttributeSource {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSource.property.name">Name</a></code> | <code>*string</code> | The name of the attribute as provided by the IDP. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSource.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the attribute as provided by the IDP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/access_application#name AccessApplication#name}

---

## Classes <a name="Classes" id="Classes"></a>

### AccessApplicationCorsHeadersList <a name="AccessApplicationCorsHeadersList" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10/accessapplication"

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
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.get">Get</a></code> | *No description.* |

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
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10/accessapplication"

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


### AccessApplicationSaasAppCustomAttributeList <a name="AccessApplicationSaasAppCustomAttributeList" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10/accessapplication"

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
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList.get">Get</a></code> | *No description.* |

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
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10/accessapplication"

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
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10/accessapplication"

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


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
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

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() AccessApplicationSaasAppCustomAttributeSource
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSource">AccessApplicationSaasAppCustomAttributeSource</a>

---


### AccessApplicationSaasAppOutputReference <a name="AccessApplicationSaasAppOutputReference" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10/accessapplication"

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
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetCustomAttribute">ResetCustomAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetNameIdFormat">ResetNameIdFormat</a></code> | *No description.* |

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

##### `ResetCustomAttribute` <a name="ResetCustomAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetCustomAttribute"></a>

```go
func ResetCustomAttribute()
```

##### `ResetNameIdFormat` <a name="ResetNameIdFormat" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetNameIdFormat"></a>

```go
func ResetNameIdFormat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.customAttribute">CustomAttribute</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList">AccessApplicationSaasAppCustomAttributeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.idpEntityId">IdpEntityId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.publicKey">PublicKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.ssoEndpoint">SsoEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.consumerServiceUrlInput">ConsumerServiceUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.customAttributeInput">CustomAttributeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.nameIdFormatInput">NameIdFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.spEntityIdInput">SpEntityIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.consumerServiceUrl">ConsumerServiceUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.nameIdFormat">NameIdFormat</a></code> | <code>*string</code> | *No description.* |
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

##### `CustomAttribute`<sup>Required</sup> <a name="CustomAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.customAttribute"></a>

```go
func CustomAttribute() AccessApplicationSaasAppCustomAttributeList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList">AccessApplicationSaasAppCustomAttributeList</a>

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

##### `SsoEndpoint`<sup>Required</sup> <a name="SsoEndpoint" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.ssoEndpoint"></a>

```go
func SsoEndpoint() *string
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

##### `NameIdFormatInput`<sup>Optional</sup> <a name="NameIdFormatInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.nameIdFormatInput"></a>

```go
func NameIdFormatInput() *string
```

- *Type:* *string

---

##### `SpEntityIdInput`<sup>Optional</sup> <a name="SpEntityIdInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.spEntityIdInput"></a>

```go
func SpEntityIdInput() *string
```

- *Type:* *string

---

##### `ConsumerServiceUrl`<sup>Required</sup> <a name="ConsumerServiceUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.consumerServiceUrl"></a>

```go
func ConsumerServiceUrl() *string
```

- *Type:* *string

---

##### `NameIdFormat`<sup>Required</sup> <a name="NameIdFormat" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.nameIdFormat"></a>

```go
func NameIdFormat() *string
```

- *Type:* *string

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



