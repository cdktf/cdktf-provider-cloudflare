# `teamsAccount` Submodule <a name="`teamsAccount` Submodule" id="@cdktf/provider-cloudflare.teamsAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TeamsAccount <a name="TeamsAccount" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/teams_account cloudflare_teams_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/teamsaccount"

teamsaccount.NewTeamsAccount(scope Construct, id *string, config TeamsAccountConfig) TeamsAccount
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig">TeamsAccountConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.Initializer.parameter.config"></a>

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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAntivirus` <a name="PutAntivirus" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putAntivirus"></a>

```go
func PutAntivirus(value TeamsAccountAntivirus)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putAntivirus.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirus">TeamsAccountAntivirus</a>

---

##### `PutBlockPage` <a name="PutBlockPage" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putBlockPage"></a>

```go
func PutBlockPage(value TeamsAccountBlockPage)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putBlockPage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage">TeamsAccountBlockPage</a>

---

##### `PutBodyScanning` <a name="PutBodyScanning" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putBodyScanning"></a>

```go
func PutBodyScanning(value TeamsAccountBodyScanning)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putBodyScanning.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanning">TeamsAccountBodyScanning</a>

---

##### `PutCertificate` <a name="PutCertificate" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putCertificate"></a>

```go
func PutCertificate(value TeamsAccountCertificate)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putCertificate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificate">TeamsAccountCertificate</a>

---

##### `PutCustomCertificate` <a name="PutCustomCertificate" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putCustomCertificate"></a>

```go
func PutCustomCertificate(value TeamsAccountCustomCertificate)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putCustomCertificate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificate">TeamsAccountCustomCertificate</a>

---

##### `PutExtendedEmailMatching` <a name="PutExtendedEmailMatching" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putExtendedEmailMatching"></a>

```go
func PutExtendedEmailMatching(value TeamsAccountExtendedEmailMatching)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putExtendedEmailMatching.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatching">TeamsAccountExtendedEmailMatching</a>

---

##### `PutFips` <a name="PutFips" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putFips"></a>

```go
func PutFips(value TeamsAccountFips)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putFips.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFips">TeamsAccountFips</a>

---

##### `PutLogging` <a name="PutLogging" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putLogging"></a>

```go
func PutLogging(value TeamsAccountLogging)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putLogging.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLogging">TeamsAccountLogging</a>

---

##### `PutPayloadLog` <a name="PutPayloadLog" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putPayloadLog"></a>

```go
func PutPayloadLog(value TeamsAccountPayloadLog)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putPayloadLog.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLog">TeamsAccountPayloadLog</a>

---

##### `PutProxy` <a name="PutProxy" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putProxy"></a>

```go
func PutProxy(value TeamsAccountProxy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putProxy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxy">TeamsAccountProxy</a>

---

##### `PutSshSessionLog` <a name="PutSshSessionLog" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putSshSessionLog"></a>

```go
func PutSshSessionLog(value TeamsAccountSshSessionLog)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putSshSessionLog.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLog">TeamsAccountSshSessionLog</a>

---

##### `ResetActivityLogEnabled` <a name="ResetActivityLogEnabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetActivityLogEnabled"></a>

```go
func ResetActivityLogEnabled()
```

##### `ResetAntivirus` <a name="ResetAntivirus" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetAntivirus"></a>

```go
func ResetAntivirus()
```

##### `ResetBlockPage` <a name="ResetBlockPage" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetBlockPage"></a>

```go
func ResetBlockPage()
```

##### `ResetBodyScanning` <a name="ResetBodyScanning" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetBodyScanning"></a>

```go
func ResetBodyScanning()
```

##### `ResetCertificate` <a name="ResetCertificate" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetCertificate"></a>

```go
func ResetCertificate()
```

##### `ResetCustomCertificate` <a name="ResetCustomCertificate" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetCustomCertificate"></a>

```go
func ResetCustomCertificate()
```

##### `ResetExtendedEmailMatching` <a name="ResetExtendedEmailMatching" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetExtendedEmailMatching"></a>

```go
func ResetExtendedEmailMatching()
```

##### `ResetFips` <a name="ResetFips" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetFips"></a>

```go
func ResetFips()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetId"></a>

```go
func ResetId()
```

##### `ResetLogging` <a name="ResetLogging" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetLogging"></a>

```go
func ResetLogging()
```

##### `ResetNonIdentityBrowserIsolationEnabled` <a name="ResetNonIdentityBrowserIsolationEnabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetNonIdentityBrowserIsolationEnabled"></a>

```go
func ResetNonIdentityBrowserIsolationEnabled()
```

##### `ResetPayloadLog` <a name="ResetPayloadLog" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetPayloadLog"></a>

```go
func ResetPayloadLog()
```

##### `ResetProtocolDetectionEnabled` <a name="ResetProtocolDetectionEnabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetProtocolDetectionEnabled"></a>

```go
func ResetProtocolDetectionEnabled()
```

##### `ResetProxy` <a name="ResetProxy" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetProxy"></a>

```go
func ResetProxy()
```

##### `ResetSshSessionLog` <a name="ResetSshSessionLog" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetSshSessionLog"></a>

```go
func ResetSshSessionLog()
```

##### `ResetTlsDecryptEnabled` <a name="ResetTlsDecryptEnabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetTlsDecryptEnabled"></a>

```go
func ResetTlsDecryptEnabled()
```

##### `ResetUrlBrowserIsolationEnabled` <a name="ResetUrlBrowserIsolationEnabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetUrlBrowserIsolationEnabled"></a>

```go
func ResetUrlBrowserIsolationEnabled()
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

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/teamsaccount"

teamsaccount.TeamsAccount_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/teamsaccount"

teamsaccount.TeamsAccount_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/teamsaccount"

teamsaccount.TeamsAccount_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/teamsaccount"

teamsaccount.TeamsAccount_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a TeamsAccount resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the TeamsAccount to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing TeamsAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/teams_account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the TeamsAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
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
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.activityLogEnabledInput">ActivityLogEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.antivirusInput">AntivirusInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirus">TeamsAccountAntivirus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.blockPageInput">BlockPageInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage">TeamsAccountBlockPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.bodyScanningInput">BodyScanningInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanning">TeamsAccountBodyScanning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.certificateInput">CertificateInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificate">TeamsAccountCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.customCertificateInput">CustomCertificateInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificate">TeamsAccountCustomCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.extendedEmailMatchingInput">ExtendedEmailMatchingInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatching">TeamsAccountExtendedEmailMatching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.fipsInput">FipsInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFips">TeamsAccountFips</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.loggingInput">LoggingInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLogging">TeamsAccountLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.nonIdentityBrowserIsolationEnabledInput">NonIdentityBrowserIsolationEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.payloadLogInput">PayloadLogInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLog">TeamsAccountPayloadLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.protocolDetectionEnabledInput">ProtocolDetectionEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.proxyInput">ProxyInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxy">TeamsAccountProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.sshSessionLogInput">SshSessionLogInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLog">TeamsAccountSshSessionLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.tlsDecryptEnabledInput">TlsDecryptEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.urlBrowserIsolationEnabledInput">UrlBrowserIsolationEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.activityLogEnabled">ActivityLogEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.nonIdentityBrowserIsolationEnabled">NonIdentityBrowserIsolationEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.protocolDetectionEnabled">ProtocolDetectionEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.tlsDecryptEnabled">TlsDecryptEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.urlBrowserIsolationEnabled">UrlBrowserIsolationEnabled</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Antivirus`<sup>Required</sup> <a name="Antivirus" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.antivirus"></a>

```go
func Antivirus() TeamsAccountAntivirusOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference">TeamsAccountAntivirusOutputReference</a>

---

##### `BlockPage`<sup>Required</sup> <a name="BlockPage" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.blockPage"></a>

```go
func BlockPage() TeamsAccountBlockPageOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference">TeamsAccountBlockPageOutputReference</a>

---

##### `BodyScanning`<sup>Required</sup> <a name="BodyScanning" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.bodyScanning"></a>

```go
func BodyScanning() TeamsAccountBodyScanningOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference">TeamsAccountBodyScanningOutputReference</a>

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.certificate"></a>

```go
func Certificate() TeamsAccountCertificateOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference">TeamsAccountCertificateOutputReference</a>

---

##### `CustomCertificate`<sup>Required</sup> <a name="CustomCertificate" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.customCertificate"></a>

```go
func CustomCertificate() TeamsAccountCustomCertificateOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference">TeamsAccountCustomCertificateOutputReference</a>

---

##### `ExtendedEmailMatching`<sup>Required</sup> <a name="ExtendedEmailMatching" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.extendedEmailMatching"></a>

```go
func ExtendedEmailMatching() TeamsAccountExtendedEmailMatchingOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference">TeamsAccountExtendedEmailMatchingOutputReference</a>

---

##### `Fips`<sup>Required</sup> <a name="Fips" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.fips"></a>

```go
func Fips() TeamsAccountFipsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference">TeamsAccountFipsOutputReference</a>

---

##### `Logging`<sup>Required</sup> <a name="Logging" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.logging"></a>

```go
func Logging() TeamsAccountLoggingOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference">TeamsAccountLoggingOutputReference</a>

---

##### `PayloadLog`<sup>Required</sup> <a name="PayloadLog" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.payloadLog"></a>

```go
func PayloadLog() TeamsAccountPayloadLogOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference">TeamsAccountPayloadLogOutputReference</a>

---

##### `Proxy`<sup>Required</sup> <a name="Proxy" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.proxy"></a>

```go
func Proxy() TeamsAccountProxyOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference">TeamsAccountProxyOutputReference</a>

---

##### `SshSessionLog`<sup>Required</sup> <a name="SshSessionLog" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.sshSessionLog"></a>

```go
func SshSessionLog() TeamsAccountSshSessionLogOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference">TeamsAccountSshSessionLogOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `ActivityLogEnabledInput`<sup>Optional</sup> <a name="ActivityLogEnabledInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.activityLogEnabledInput"></a>

```go
func ActivityLogEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `AntivirusInput`<sup>Optional</sup> <a name="AntivirusInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.antivirusInput"></a>

```go
func AntivirusInput() TeamsAccountAntivirus
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirus">TeamsAccountAntivirus</a>

---

##### `BlockPageInput`<sup>Optional</sup> <a name="BlockPageInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.blockPageInput"></a>

```go
func BlockPageInput() TeamsAccountBlockPage
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage">TeamsAccountBlockPage</a>

---

##### `BodyScanningInput`<sup>Optional</sup> <a name="BodyScanningInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.bodyScanningInput"></a>

```go
func BodyScanningInput() TeamsAccountBodyScanning
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanning">TeamsAccountBodyScanning</a>

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.certificateInput"></a>

```go
func CertificateInput() TeamsAccountCertificate
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificate">TeamsAccountCertificate</a>

---

##### `CustomCertificateInput`<sup>Optional</sup> <a name="CustomCertificateInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.customCertificateInput"></a>

```go
func CustomCertificateInput() TeamsAccountCustomCertificate
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificate">TeamsAccountCustomCertificate</a>

---

##### `ExtendedEmailMatchingInput`<sup>Optional</sup> <a name="ExtendedEmailMatchingInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.extendedEmailMatchingInput"></a>

```go
func ExtendedEmailMatchingInput() TeamsAccountExtendedEmailMatching
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatching">TeamsAccountExtendedEmailMatching</a>

---

##### `FipsInput`<sup>Optional</sup> <a name="FipsInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.fipsInput"></a>

```go
func FipsInput() TeamsAccountFips
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFips">TeamsAccountFips</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LoggingInput`<sup>Optional</sup> <a name="LoggingInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.loggingInput"></a>

```go
func LoggingInput() TeamsAccountLogging
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLogging">TeamsAccountLogging</a>

---

##### `NonIdentityBrowserIsolationEnabledInput`<sup>Optional</sup> <a name="NonIdentityBrowserIsolationEnabledInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.nonIdentityBrowserIsolationEnabledInput"></a>

```go
func NonIdentityBrowserIsolationEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `PayloadLogInput`<sup>Optional</sup> <a name="PayloadLogInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.payloadLogInput"></a>

```go
func PayloadLogInput() TeamsAccountPayloadLog
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLog">TeamsAccountPayloadLog</a>

---

##### `ProtocolDetectionEnabledInput`<sup>Optional</sup> <a name="ProtocolDetectionEnabledInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.protocolDetectionEnabledInput"></a>

```go
func ProtocolDetectionEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ProxyInput`<sup>Optional</sup> <a name="ProxyInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.proxyInput"></a>

```go
func ProxyInput() TeamsAccountProxy
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxy">TeamsAccountProxy</a>

---

##### `SshSessionLogInput`<sup>Optional</sup> <a name="SshSessionLogInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.sshSessionLogInput"></a>

```go
func SshSessionLogInput() TeamsAccountSshSessionLog
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLog">TeamsAccountSshSessionLog</a>

---

##### `TlsDecryptEnabledInput`<sup>Optional</sup> <a name="TlsDecryptEnabledInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.tlsDecryptEnabledInput"></a>

```go
func TlsDecryptEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `UrlBrowserIsolationEnabledInput`<sup>Optional</sup> <a name="UrlBrowserIsolationEnabledInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.urlBrowserIsolationEnabledInput"></a>

```go
func UrlBrowserIsolationEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `ActivityLogEnabled`<sup>Required</sup> <a name="ActivityLogEnabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.activityLogEnabled"></a>

```go
func ActivityLogEnabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `NonIdentityBrowserIsolationEnabled`<sup>Required</sup> <a name="NonIdentityBrowserIsolationEnabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.nonIdentityBrowserIsolationEnabled"></a>

```go
func NonIdentityBrowserIsolationEnabled() interface{}
```

- *Type:* interface{}

---

##### `ProtocolDetectionEnabled`<sup>Required</sup> <a name="ProtocolDetectionEnabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.protocolDetectionEnabled"></a>

```go
func ProtocolDetectionEnabled() interface{}
```

- *Type:* interface{}

---

##### `TlsDecryptEnabled`<sup>Required</sup> <a name="TlsDecryptEnabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.tlsDecryptEnabled"></a>

```go
func TlsDecryptEnabled() interface{}
```

- *Type:* interface{}

---

##### `UrlBrowserIsolationEnabled`<sup>Required</sup> <a name="UrlBrowserIsolationEnabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.urlBrowserIsolationEnabled"></a>

```go
func UrlBrowserIsolationEnabled() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### TeamsAccountAntivirus <a name="TeamsAccountAntivirus" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirus.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/teamsaccount"

&teamsaccount.TeamsAccountAntivirus {
	EnabledDownloadPhase: interface{},
	EnabledUploadPhase: interface{},
	FailClosed: interface{},
	NotificationSettings: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettings,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirus.property.enabledDownloadPhase">EnabledDownloadPhase</a></code> | <code>interface{}</code> | Scan on file download. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirus.property.enabledUploadPhase">EnabledUploadPhase</a></code> | <code>interface{}</code> | Scan on file upload. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirus.property.failClosed">FailClosed</a></code> | <code>interface{}</code> | Block requests for files that cannot be scanned. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirus.property.notificationSettings">NotificationSettings</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettings">TeamsAccountAntivirusNotificationSettings</a></code> | notification_settings block. |

---

##### `EnabledDownloadPhase`<sup>Required</sup> <a name="EnabledDownloadPhase" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirus.property.enabledDownloadPhase"></a>

```go
EnabledDownloadPhase interface{}
```

- *Type:* interface{}

Scan on file download.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/teams_account#enabled_download_phase TeamsAccount#enabled_download_phase}

---

##### `EnabledUploadPhase`<sup>Required</sup> <a name="EnabledUploadPhase" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirus.property.enabledUploadPhase"></a>

```go
EnabledUploadPhase interface{}
```

- *Type:* interface{}

Scan on file upload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/teams_account#enabled_upload_phase TeamsAccount#enabled_upload_phase}

---

##### `FailClosed`<sup>Required</sup> <a name="FailClosed" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirus.property.failClosed"></a>

```go
FailClosed interface{}
```

- *Type:* interface{}

Block requests for files that cannot be scanned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/teams_account#fail_closed TeamsAccount#fail_closed}

---

##### `NotificationSettings`<sup>Optional</sup> <a name="NotificationSettings" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirus.property.notificationSettings"></a>

```go
NotificationSettings TeamsAccountAntivirusNotificationSettings
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettings">TeamsAccountAntivirusNotificationSettings</a>

notification_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/teams_account#notification_settings TeamsAccount#notification_settings}

---

### TeamsAccountAntivirusNotificationSettings <a name="TeamsAccountAntivirusNotificationSettings" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/teamsaccount"

&teamsaccount.TeamsAccountAntivirusNotificationSettings {
	Enabled: interface{},
	Message: *string,
	SupportUrl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettings.property.enabled">Enabled</a></code> | <code>interface{}</code> | Enable notification settings. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettings.property.message">Message</a></code> | <code>*string</code> | Notification content. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettings.property.supportUrl">SupportUrl</a></code> | <code>*string</code> | Support URL to show in the notification. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettings.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Enable notification settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/teams_account#enabled TeamsAccount#enabled}

---

##### `Message`<sup>Optional</sup> <a name="Message" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettings.property.message"></a>

```go
Message *string
```

- *Type:* *string

Notification content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/teams_account#message TeamsAccount#message}

---

##### `SupportUrl`<sup>Optional</sup> <a name="SupportUrl" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettings.property.supportUrl"></a>

```go
SupportUrl *string
```

- *Type:* *string

Support URL to show in the notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/teams_account#support_url TeamsAccount#support_url}

---

### TeamsAccountBlockPage <a name="TeamsAccountBlockPage" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/teamsaccount"

&teamsaccount.TeamsAccountBlockPage {
	BackgroundColor: *string,
	Enabled: interface{},
	FooterText: *string,
	HeaderText: *string,
	LogoPath: *string,
	MailtoAddress: *string,
	MailtoSubject: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage.property.backgroundColor">BackgroundColor</a></code> | <code>*string</code> | Hex code of block page background color. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage.property.enabled">Enabled</a></code> | <code>interface{}</code> | Indicator of enablement. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage.property.footerText">FooterText</a></code> | <code>*string</code> | Block page footer text. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage.property.headerText">HeaderText</a></code> | <code>*string</code> | Block page header text. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage.property.logoPath">LogoPath</a></code> | <code>*string</code> | URL of block page logo. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage.property.mailtoAddress">MailtoAddress</a></code> | <code>*string</code> | Admin email for users to contact. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage.property.mailtoSubject">MailtoSubject</a></code> | <code>*string</code> | Subject line for emails created from block page. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage.property.name">Name</a></code> | <code>*string</code> | Name of block page configuration. |

---

##### `BackgroundColor`<sup>Optional</sup> <a name="BackgroundColor" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage.property.backgroundColor"></a>

```go
BackgroundColor *string
```

- *Type:* *string

Hex code of block page background color.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/teams_account#background_color TeamsAccount#background_color}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Indicator of enablement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/teams_account#enabled TeamsAccount#enabled}

---

##### `FooterText`<sup>Optional</sup> <a name="FooterText" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage.property.footerText"></a>

```go
FooterText *string
```

- *Type:* *string

Block page footer text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/teams_account#footer_text TeamsAccount#footer_text}

---

##### `HeaderText`<sup>Optional</sup> <a name="HeaderText" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage.property.headerText"></a>

```go
HeaderText *string
```

- *Type:* *string

Block page header text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/teams_account#header_text TeamsAccount#header_text}

---

##### `LogoPath`<sup>Optional</sup> <a name="LogoPath" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage.property.logoPath"></a>

```go
LogoPath *string
```

- *Type:* *string

URL of block page logo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/teams_account#logo_path TeamsAccount#logo_path}

---

##### `MailtoAddress`<sup>Optional</sup> <a name="MailtoAddress" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage.property.mailtoAddress"></a>

```go
MailtoAddress *string
```

- *Type:* *string

Admin email for users to contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/teams_account#mailto_address TeamsAccount#mailto_address}

---

##### `MailtoSubject`<sup>Optional</sup> <a name="MailtoSubject" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage.property.mailtoSubject"></a>

```go
MailtoSubject *string
```

- *Type:* *string

Subject line for emails created from block page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/teams_account#mailto_subject TeamsAccount#mailto_subject}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of block page configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/teams_account#name TeamsAccount#name}

---

### TeamsAccountBodyScanning <a name="TeamsAccountBodyScanning" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanning"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanning.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/teamsaccount"

&teamsaccount.TeamsAccountBodyScanning {
	InspectionMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanning.property.inspectionMode">InspectionMode</a></code> | <code>*string</code> | Body scanning inspection mode. Available values: `deep`, `shallow`. |

---

##### `InspectionMode`<sup>Required</sup> <a name="InspectionMode" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanning.property.inspectionMode"></a>

```go
InspectionMode *string
```

- *Type:* *string

Body scanning inspection mode. Available values: `deep`, `shallow`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/teams_account#inspection_mode TeamsAccount#inspection_mode}

---

### TeamsAccountCertificate <a name="TeamsAccountCertificate" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/teamsaccount"

&teamsaccount.TeamsAccountCertificate {
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificate.property.id">Id</a></code> | <code>*string</code> | ID of certificate for TLS interception. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificate.property.id"></a>

```go
Id *string
```

- *Type:* *string

ID of certificate for TLS interception.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/teams_account#id TeamsAccount#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### TeamsAccountConfig <a name="TeamsAccountConfig" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/teamsaccount"

&teamsaccount.TeamsAccountConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	ActivityLogEnabled: interface{},
	Antivirus: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.teamsAccount.TeamsAccountAntivirus,
	BlockPage: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.teamsAccount.TeamsAccountBlockPage,
	BodyScanning: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.teamsAccount.TeamsAccountBodyScanning,
	Certificate: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.teamsAccount.TeamsAccountCertificate,
	CustomCertificate: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.teamsAccount.TeamsAccountCustomCertificate,
	ExtendedEmailMatching: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.teamsAccount.TeamsAccountExtendedEmailMatching,
	Fips: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.teamsAccount.TeamsAccountFips,
	Id: *string,
	Logging: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.teamsAccount.TeamsAccountLogging,
	NonIdentityBrowserIsolationEnabled: interface{},
	PayloadLog: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.teamsAccount.TeamsAccountPayloadLog,
	ProtocolDetectionEnabled: interface{},
	Proxy: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.teamsAccount.TeamsAccountProxy,
	SshSessionLog: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.teamsAccount.TeamsAccountSshSessionLog,
	TlsDecryptEnabled: interface{},
	UrlBrowserIsolationEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.accountId">AccountId</a></code> | <code>*string</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.activityLogEnabled">ActivityLogEnabled</a></code> | <code>interface{}</code> | Whether to enable the activity log. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.antivirus">Antivirus</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirus">TeamsAccountAntivirus</a></code> | antivirus block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.blockPage">BlockPage</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage">TeamsAccountBlockPage</a></code> | block_page block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.bodyScanning">BodyScanning</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanning">TeamsAccountBodyScanning</a></code> | body_scanning block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.certificate">Certificate</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificate">TeamsAccountCertificate</a></code> | certificate block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.customCertificate">CustomCertificate</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificate">TeamsAccountCustomCertificate</a></code> | custom_certificate block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.extendedEmailMatching">ExtendedEmailMatching</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatching">TeamsAccountExtendedEmailMatching</a></code> | extended_email_matching block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.fips">Fips</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFips">TeamsAccountFips</a></code> | fips block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/teams_account#id TeamsAccount#id}. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.logging">Logging</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLogging">TeamsAccountLogging</a></code> | logging block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.nonIdentityBrowserIsolationEnabled">NonIdentityBrowserIsolationEnabled</a></code> | <code>interface{}</code> | Enable non-identity onramp for Browser Isolation. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.payloadLog">PayloadLog</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLog">TeamsAccountPayloadLog</a></code> | payload_log block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.protocolDetectionEnabled">ProtocolDetectionEnabled</a></code> | <code>interface{}</code> | Indicator that protocol detection is enabled. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.proxy">Proxy</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxy">TeamsAccountProxy</a></code> | proxy block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.sshSessionLog">SshSessionLog</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLog">TeamsAccountSshSessionLog</a></code> | ssh_session_log block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.tlsDecryptEnabled">TlsDecryptEnabled</a></code> | <code>interface{}</code> | Indicator that decryption of TLS traffic is enabled. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.urlBrowserIsolationEnabled">UrlBrowserIsolationEnabled</a></code> | <code>interface{}</code> | Safely browse websites in Browser Isolation through a URL. Defaults to `false`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/teams_account#account_id TeamsAccount#account_id}

---

##### `ActivityLogEnabled`<sup>Optional</sup> <a name="ActivityLogEnabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.activityLogEnabled"></a>

```go
ActivityLogEnabled interface{}
```

- *Type:* interface{}

Whether to enable the activity log.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/teams_account#activity_log_enabled TeamsAccount#activity_log_enabled}

---

##### `Antivirus`<sup>Optional</sup> <a name="Antivirus" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.antivirus"></a>

```go
Antivirus TeamsAccountAntivirus
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirus">TeamsAccountAntivirus</a>

antivirus block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/teams_account#antivirus TeamsAccount#antivirus}

---

##### `BlockPage`<sup>Optional</sup> <a name="BlockPage" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.blockPage"></a>

```go
BlockPage TeamsAccountBlockPage
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage">TeamsAccountBlockPage</a>

block_page block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/teams_account#block_page TeamsAccount#block_page}

---

##### `BodyScanning`<sup>Optional</sup> <a name="BodyScanning" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.bodyScanning"></a>

```go
BodyScanning TeamsAccountBodyScanning
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanning">TeamsAccountBodyScanning</a>

body_scanning block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/teams_account#body_scanning TeamsAccount#body_scanning}

---

##### `Certificate`<sup>Optional</sup> <a name="Certificate" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.certificate"></a>

```go
Certificate TeamsAccountCertificate
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificate">TeamsAccountCertificate</a>

certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/teams_account#certificate TeamsAccount#certificate}

---

##### `CustomCertificate`<sup>Optional</sup> <a name="CustomCertificate" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.customCertificate"></a>

```go
CustomCertificate TeamsAccountCustomCertificate
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificate">TeamsAccountCustomCertificate</a>

custom_certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/teams_account#custom_certificate TeamsAccount#custom_certificate}

---

##### `ExtendedEmailMatching`<sup>Optional</sup> <a name="ExtendedEmailMatching" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.extendedEmailMatching"></a>

```go
ExtendedEmailMatching TeamsAccountExtendedEmailMatching
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatching">TeamsAccountExtendedEmailMatching</a>

extended_email_matching block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/teams_account#extended_email_matching TeamsAccount#extended_email_matching}

---

##### `Fips`<sup>Optional</sup> <a name="Fips" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.fips"></a>

```go
Fips TeamsAccountFips
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFips">TeamsAccountFips</a>

fips block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/teams_account#fips TeamsAccount#fips}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/teams_account#id TeamsAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Logging`<sup>Optional</sup> <a name="Logging" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.logging"></a>

```go
Logging TeamsAccountLogging
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLogging">TeamsAccountLogging</a>

logging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/teams_account#logging TeamsAccount#logging}

---

##### `NonIdentityBrowserIsolationEnabled`<sup>Optional</sup> <a name="NonIdentityBrowserIsolationEnabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.nonIdentityBrowserIsolationEnabled"></a>

```go
NonIdentityBrowserIsolationEnabled interface{}
```

- *Type:* interface{}

Enable non-identity onramp for Browser Isolation. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/teams_account#non_identity_browser_isolation_enabled TeamsAccount#non_identity_browser_isolation_enabled}

---

##### `PayloadLog`<sup>Optional</sup> <a name="PayloadLog" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.payloadLog"></a>

```go
PayloadLog TeamsAccountPayloadLog
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLog">TeamsAccountPayloadLog</a>

payload_log block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/teams_account#payload_log TeamsAccount#payload_log}

---

##### `ProtocolDetectionEnabled`<sup>Optional</sup> <a name="ProtocolDetectionEnabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.protocolDetectionEnabled"></a>

```go
ProtocolDetectionEnabled interface{}
```

- *Type:* interface{}

Indicator that protocol detection is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/teams_account#protocol_detection_enabled TeamsAccount#protocol_detection_enabled}

---

##### `Proxy`<sup>Optional</sup> <a name="Proxy" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.proxy"></a>

```go
Proxy TeamsAccountProxy
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxy">TeamsAccountProxy</a>

proxy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/teams_account#proxy TeamsAccount#proxy}

---

##### `SshSessionLog`<sup>Optional</sup> <a name="SshSessionLog" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.sshSessionLog"></a>

```go
SshSessionLog TeamsAccountSshSessionLog
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLog">TeamsAccountSshSessionLog</a>

ssh_session_log block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/teams_account#ssh_session_log TeamsAccount#ssh_session_log}

---

##### `TlsDecryptEnabled`<sup>Optional</sup> <a name="TlsDecryptEnabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.tlsDecryptEnabled"></a>

```go
TlsDecryptEnabled interface{}
```

- *Type:* interface{}

Indicator that decryption of TLS traffic is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/teams_account#tls_decrypt_enabled TeamsAccount#tls_decrypt_enabled}

---

##### `UrlBrowserIsolationEnabled`<sup>Optional</sup> <a name="UrlBrowserIsolationEnabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.urlBrowserIsolationEnabled"></a>

```go
UrlBrowserIsolationEnabled interface{}
```

- *Type:* interface{}

Safely browse websites in Browser Isolation through a URL. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/teams_account#url_browser_isolation_enabled TeamsAccount#url_browser_isolation_enabled}

---

### TeamsAccountCustomCertificate <a name="TeamsAccountCustomCertificate" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/teamsaccount"

&teamsaccount.TeamsAccountCustomCertificate {
	Enabled: interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificate.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether TLS encryption should use a custom certificate. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificate.property.id">Id</a></code> | <code>*string</code> | ID of custom certificate. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificate.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether TLS encryption should use a custom certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/teams_account#enabled TeamsAccount#enabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificate.property.id"></a>

```go
Id *string
```

- *Type:* *string

ID of custom certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/teams_account#id TeamsAccount#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### TeamsAccountExtendedEmailMatching <a name="TeamsAccountExtendedEmailMatching" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatching"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatching.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/teamsaccount"

&teamsaccount.TeamsAccountExtendedEmailMatching {
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatching.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether e-mails should be matched on all variants of user emails (with + or . modifiers) in Firewall policies. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatching.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether e-mails should be matched on all variants of user emails (with + or . modifiers) in Firewall policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/teams_account#enabled TeamsAccount#enabled}

---

### TeamsAccountFips <a name="TeamsAccountFips" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFips"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFips.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/teamsaccount"

&teamsaccount.TeamsAccountFips {
	Tls: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFips.property.tls">Tls</a></code> | <code>interface{}</code> | Only allow FIPS-compliant TLS configuration. |

---

##### `Tls`<sup>Optional</sup> <a name="Tls" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFips.property.tls"></a>

```go
Tls interface{}
```

- *Type:* interface{}

Only allow FIPS-compliant TLS configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/teams_account#tls TeamsAccount#tls}

---

### TeamsAccountLogging <a name="TeamsAccountLogging" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLogging"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLogging.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/teamsaccount"

&teamsaccount.TeamsAccountLogging {
	RedactPii: interface{},
	SettingsByRuleType: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleType,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLogging.property.redactPii">RedactPii</a></code> | <code>interface{}</code> | Redact personally identifiable information from activity logging (PII fields are: source IP, user email, user ID, device ID, URL, referrer, user agent). |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLogging.property.settingsByRuleType">SettingsByRuleType</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleType">TeamsAccountLoggingSettingsByRuleType</a></code> | settings_by_rule_type block. |

---

##### `RedactPii`<sup>Required</sup> <a name="RedactPii" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLogging.property.redactPii"></a>

```go
RedactPii interface{}
```

- *Type:* interface{}

Redact personally identifiable information from activity logging (PII fields are: source IP, user email, user ID, device ID, URL, referrer, user agent).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/teams_account#redact_pii TeamsAccount#redact_pii}

---

##### `SettingsByRuleType`<sup>Required</sup> <a name="SettingsByRuleType" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLogging.property.settingsByRuleType"></a>

```go
SettingsByRuleType TeamsAccountLoggingSettingsByRuleType
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleType">TeamsAccountLoggingSettingsByRuleType</a>

settings_by_rule_type block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/teams_account#settings_by_rule_type TeamsAccount#settings_by_rule_type}

---

### TeamsAccountLoggingSettingsByRuleType <a name="TeamsAccountLoggingSettingsByRuleType" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleType"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleType.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/teamsaccount"

&teamsaccount.TeamsAccountLoggingSettingsByRuleType {
	Dns: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDns,
	Http: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttp,
	L4: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleType.property.dns">Dns</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDns">TeamsAccountLoggingSettingsByRuleTypeDns</a></code> | dns block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleType.property.http">Http</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttp">TeamsAccountLoggingSettingsByRuleTypeHttp</a></code> | http block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleType.property.l4">L4</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4">TeamsAccountLoggingSettingsByRuleTypeL4</a></code> | l4 block. |

---

##### `Dns`<sup>Required</sup> <a name="Dns" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleType.property.dns"></a>

```go
Dns TeamsAccountLoggingSettingsByRuleTypeDns
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDns">TeamsAccountLoggingSettingsByRuleTypeDns</a>

dns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/teams_account#dns TeamsAccount#dns}

---

##### `Http`<sup>Required</sup> <a name="Http" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleType.property.http"></a>

```go
Http TeamsAccountLoggingSettingsByRuleTypeHttp
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttp">TeamsAccountLoggingSettingsByRuleTypeHttp</a>

http block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/teams_account#http TeamsAccount#http}

---

##### `L4`<sup>Required</sup> <a name="L4" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleType.property.l4"></a>

```go
L4 TeamsAccountLoggingSettingsByRuleTypeL4
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4">TeamsAccountLoggingSettingsByRuleTypeL4</a>

l4 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/teams_account#l4 TeamsAccount#l4}

---

### TeamsAccountLoggingSettingsByRuleTypeDns <a name="TeamsAccountLoggingSettingsByRuleTypeDns" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDns.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/teamsaccount"

&teamsaccount.TeamsAccountLoggingSettingsByRuleTypeDns {
	LogAll: interface{},
	LogBlocks: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDns.property.logAll">LogAll</a></code> | <code>interface{}</code> | Whether to log all activity. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDns.property.logBlocks">LogBlocks</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/teams_account#log_blocks TeamsAccount#log_blocks}. |

---

##### `LogAll`<sup>Required</sup> <a name="LogAll" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDns.property.logAll"></a>

```go
LogAll interface{}
```

- *Type:* interface{}

Whether to log all activity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/teams_account#log_all TeamsAccount#log_all}

---

##### `LogBlocks`<sup>Required</sup> <a name="LogBlocks" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDns.property.logBlocks"></a>

```go
LogBlocks interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/teams_account#log_blocks TeamsAccount#log_blocks}.

---

### TeamsAccountLoggingSettingsByRuleTypeHttp <a name="TeamsAccountLoggingSettingsByRuleTypeHttp" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttp.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/teamsaccount"

&teamsaccount.TeamsAccountLoggingSettingsByRuleTypeHttp {
	LogAll: interface{},
	LogBlocks: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttp.property.logAll">LogAll</a></code> | <code>interface{}</code> | Whether to log all activity. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttp.property.logBlocks">LogBlocks</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/teams_account#log_blocks TeamsAccount#log_blocks}. |

---

##### `LogAll`<sup>Required</sup> <a name="LogAll" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttp.property.logAll"></a>

```go
LogAll interface{}
```

- *Type:* interface{}

Whether to log all activity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/teams_account#log_all TeamsAccount#log_all}

---

##### `LogBlocks`<sup>Required</sup> <a name="LogBlocks" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttp.property.logBlocks"></a>

```go
LogBlocks interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/teams_account#log_blocks TeamsAccount#log_blocks}.

---

### TeamsAccountLoggingSettingsByRuleTypeL4 <a name="TeamsAccountLoggingSettingsByRuleTypeL4" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/teamsaccount"

&teamsaccount.TeamsAccountLoggingSettingsByRuleTypeL4 {
	LogAll: interface{},
	LogBlocks: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4.property.logAll">LogAll</a></code> | <code>interface{}</code> | Whether to log all activity. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4.property.logBlocks">LogBlocks</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/teams_account#log_blocks TeamsAccount#log_blocks}. |

---

##### `LogAll`<sup>Required</sup> <a name="LogAll" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4.property.logAll"></a>

```go
LogAll interface{}
```

- *Type:* interface{}

Whether to log all activity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/teams_account#log_all TeamsAccount#log_all}

---

##### `LogBlocks`<sup>Required</sup> <a name="LogBlocks" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4.property.logBlocks"></a>

```go
LogBlocks interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/teams_account#log_blocks TeamsAccount#log_blocks}.

---

### TeamsAccountPayloadLog <a name="TeamsAccountPayloadLog" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLog.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/teamsaccount"

&teamsaccount.TeamsAccountPayloadLog {
	PublicKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLog.property.publicKey">PublicKey</a></code> | <code>*string</code> | Public key used to encrypt matched payloads. |

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLog.property.publicKey"></a>

```go
PublicKey *string
```

- *Type:* *string

Public key used to encrypt matched payloads.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/teams_account#public_key TeamsAccount#public_key}

---

### TeamsAccountProxy <a name="TeamsAccountProxy" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/teamsaccount"

&teamsaccount.TeamsAccountProxy {
	DisableForTime: *f64,
	RootCa: interface{},
	Tcp: interface{},
	Udp: interface{},
	VirtualIp: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxy.property.disableForTime">DisableForTime</a></code> | <code>*f64</code> | Sets the time limit in seconds that a user can use an override code to bypass WARP. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxy.property.rootCa">RootCa</a></code> | <code>interface{}</code> | Whether root ca is enabled account wide for ZT clients. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxy.property.tcp">Tcp</a></code> | <code>interface{}</code> | Whether gateway proxy is enabled on gateway devices for TCP traffic. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxy.property.udp">Udp</a></code> | <code>interface{}</code> | Whether gateway proxy is enabled on gateway devices for UDP traffic. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxy.property.virtualIp">VirtualIp</a></code> | <code>interface{}</code> | Whether virtual IP (CGNAT) is enabled account wide and will override existing local interface IP for ZT clients. |

---

##### `DisableForTime`<sup>Required</sup> <a name="DisableForTime" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxy.property.disableForTime"></a>

```go
DisableForTime *f64
```

- *Type:* *f64

Sets the time limit in seconds that a user can use an override code to bypass WARP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/teams_account#disable_for_time TeamsAccount#disable_for_time}

---

##### `RootCa`<sup>Required</sup> <a name="RootCa" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxy.property.rootCa"></a>

```go
RootCa interface{}
```

- *Type:* interface{}

Whether root ca is enabled account wide for ZT clients.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/teams_account#root_ca TeamsAccount#root_ca}

---

##### `Tcp`<sup>Required</sup> <a name="Tcp" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxy.property.tcp"></a>

```go
Tcp interface{}
```

- *Type:* interface{}

Whether gateway proxy is enabled on gateway devices for TCP traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/teams_account#tcp TeamsAccount#tcp}

---

##### `Udp`<sup>Required</sup> <a name="Udp" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxy.property.udp"></a>

```go
Udp interface{}
```

- *Type:* interface{}

Whether gateway proxy is enabled on gateway devices for UDP traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/teams_account#udp TeamsAccount#udp}

---

##### `VirtualIp`<sup>Required</sup> <a name="VirtualIp" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxy.property.virtualIp"></a>

```go
VirtualIp interface{}
```

- *Type:* interface{}

Whether virtual IP (CGNAT) is enabled account wide and will override existing local interface IP for ZT clients.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/teams_account#virtual_ip TeamsAccount#virtual_ip}

---

### TeamsAccountSshSessionLog <a name="TeamsAccountSshSessionLog" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLog.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/teamsaccount"

&teamsaccount.TeamsAccountSshSessionLog {
	PublicKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLog.property.publicKey">PublicKey</a></code> | <code>*string</code> | Public key used to encrypt ssh session. |

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLog.property.publicKey"></a>

```go
PublicKey *string
```

- *Type:* *string

Public key used to encrypt ssh session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/teams_account#public_key TeamsAccount#public_key}

---

## Classes <a name="Classes" id="Classes"></a>

### TeamsAccountAntivirusNotificationSettingsOutputReference <a name="TeamsAccountAntivirusNotificationSettingsOutputReference" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/teamsaccount"

teamsaccount.NewTeamsAccountAntivirusNotificationSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TeamsAccountAntivirusNotificationSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetMessage` <a name="ResetMessage" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.resetMessage"></a>

```go
func ResetMessage()
```

##### `ResetSupportUrl` <a name="ResetSupportUrl" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.resetSupportUrl"></a>

```go
func ResetSupportUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.property.messageInput">MessageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.property.supportUrlInput">SupportUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.property.supportUrl">SupportUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettings">TeamsAccountAntivirusNotificationSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `MessageInput`<sup>Optional</sup> <a name="MessageInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.property.messageInput"></a>

```go
func MessageInput() *string
```

- *Type:* *string

---

##### `SupportUrlInput`<sup>Optional</sup> <a name="SupportUrlInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.property.supportUrlInput"></a>

```go
func SupportUrlInput() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `SupportUrl`<sup>Required</sup> <a name="SupportUrl" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.property.supportUrl"></a>

```go
func SupportUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() TeamsAccountAntivirusNotificationSettings
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettings">TeamsAccountAntivirusNotificationSettings</a>

---


### TeamsAccountAntivirusOutputReference <a name="TeamsAccountAntivirusOutputReference" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/teamsaccount"

teamsaccount.NewTeamsAccountAntivirusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TeamsAccountAntivirusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNotificationSettings` <a name="PutNotificationSettings" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.putNotificationSettings"></a>

```go
func PutNotificationSettings(value TeamsAccountAntivirusNotificationSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.putNotificationSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettings">TeamsAccountAntivirusNotificationSettings</a>

---

##### `ResetNotificationSettings` <a name="ResetNotificationSettings" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.resetNotificationSettings"></a>

```go
func ResetNotificationSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.notificationSettings">NotificationSettings</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference">TeamsAccountAntivirusNotificationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.enabledDownloadPhaseInput">EnabledDownloadPhaseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.enabledUploadPhaseInput">EnabledUploadPhaseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.failClosedInput">FailClosedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.notificationSettingsInput">NotificationSettingsInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettings">TeamsAccountAntivirusNotificationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.enabledDownloadPhase">EnabledDownloadPhase</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.enabledUploadPhase">EnabledUploadPhase</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.failClosed">FailClosed</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirus">TeamsAccountAntivirus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NotificationSettings`<sup>Required</sup> <a name="NotificationSettings" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.notificationSettings"></a>

```go
func NotificationSettings() TeamsAccountAntivirusNotificationSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference">TeamsAccountAntivirusNotificationSettingsOutputReference</a>

---

##### `EnabledDownloadPhaseInput`<sup>Optional</sup> <a name="EnabledDownloadPhaseInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.enabledDownloadPhaseInput"></a>

```go
func EnabledDownloadPhaseInput() interface{}
```

- *Type:* interface{}

---

##### `EnabledUploadPhaseInput`<sup>Optional</sup> <a name="EnabledUploadPhaseInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.enabledUploadPhaseInput"></a>

```go
func EnabledUploadPhaseInput() interface{}
```

- *Type:* interface{}

---

##### `FailClosedInput`<sup>Optional</sup> <a name="FailClosedInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.failClosedInput"></a>

```go
func FailClosedInput() interface{}
```

- *Type:* interface{}

---

##### `NotificationSettingsInput`<sup>Optional</sup> <a name="NotificationSettingsInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.notificationSettingsInput"></a>

```go
func NotificationSettingsInput() TeamsAccountAntivirusNotificationSettings
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettings">TeamsAccountAntivirusNotificationSettings</a>

---

##### `EnabledDownloadPhase`<sup>Required</sup> <a name="EnabledDownloadPhase" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.enabledDownloadPhase"></a>

```go
func EnabledDownloadPhase() interface{}
```

- *Type:* interface{}

---

##### `EnabledUploadPhase`<sup>Required</sup> <a name="EnabledUploadPhase" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.enabledUploadPhase"></a>

```go
func EnabledUploadPhase() interface{}
```

- *Type:* interface{}

---

##### `FailClosed`<sup>Required</sup> <a name="FailClosed" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.failClosed"></a>

```go
func FailClosed() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.internalValue"></a>

```go
func InternalValue() TeamsAccountAntivirus
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirus">TeamsAccountAntivirus</a>

---


### TeamsAccountBlockPageOutputReference <a name="TeamsAccountBlockPageOutputReference" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/teamsaccount"

teamsaccount.NewTeamsAccountBlockPageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TeamsAccountBlockPageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBackgroundColor` <a name="ResetBackgroundColor" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.resetBackgroundColor"></a>

```go
func ResetBackgroundColor()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetFooterText` <a name="ResetFooterText" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.resetFooterText"></a>

```go
func ResetFooterText()
```

##### `ResetHeaderText` <a name="ResetHeaderText" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.resetHeaderText"></a>

```go
func ResetHeaderText()
```

##### `ResetLogoPath` <a name="ResetLogoPath" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.resetLogoPath"></a>

```go
func ResetLogoPath()
```

##### `ResetMailtoAddress` <a name="ResetMailtoAddress" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.resetMailtoAddress"></a>

```go
func ResetMailtoAddress()
```

##### `ResetMailtoSubject` <a name="ResetMailtoSubject" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.resetMailtoSubject"></a>

```go
func ResetMailtoSubject()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.backgroundColorInput">BackgroundColorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.footerTextInput">FooterTextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.headerTextInput">HeaderTextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.logoPathInput">LogoPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.mailtoAddressInput">MailtoAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.mailtoSubjectInput">MailtoSubjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.backgroundColor">BackgroundColor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.footerText">FooterText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.headerText">HeaderText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.logoPath">LogoPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.mailtoAddress">MailtoAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.mailtoSubject">MailtoSubject</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage">TeamsAccountBlockPage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackgroundColorInput`<sup>Optional</sup> <a name="BackgroundColorInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.backgroundColorInput"></a>

```go
func BackgroundColorInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `FooterTextInput`<sup>Optional</sup> <a name="FooterTextInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.footerTextInput"></a>

```go
func FooterTextInput() *string
```

- *Type:* *string

---

##### `HeaderTextInput`<sup>Optional</sup> <a name="HeaderTextInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.headerTextInput"></a>

```go
func HeaderTextInput() *string
```

- *Type:* *string

---

##### `LogoPathInput`<sup>Optional</sup> <a name="LogoPathInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.logoPathInput"></a>

```go
func LogoPathInput() *string
```

- *Type:* *string

---

##### `MailtoAddressInput`<sup>Optional</sup> <a name="MailtoAddressInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.mailtoAddressInput"></a>

```go
func MailtoAddressInput() *string
```

- *Type:* *string

---

##### `MailtoSubjectInput`<sup>Optional</sup> <a name="MailtoSubjectInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.mailtoSubjectInput"></a>

```go
func MailtoSubjectInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `BackgroundColor`<sup>Required</sup> <a name="BackgroundColor" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.backgroundColor"></a>

```go
func BackgroundColor() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `FooterText`<sup>Required</sup> <a name="FooterText" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.footerText"></a>

```go
func FooterText() *string
```

- *Type:* *string

---

##### `HeaderText`<sup>Required</sup> <a name="HeaderText" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.headerText"></a>

```go
func HeaderText() *string
```

- *Type:* *string

---

##### `LogoPath`<sup>Required</sup> <a name="LogoPath" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.logoPath"></a>

```go
func LogoPath() *string
```

- *Type:* *string

---

##### `MailtoAddress`<sup>Required</sup> <a name="MailtoAddress" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.mailtoAddress"></a>

```go
func MailtoAddress() *string
```

- *Type:* *string

---

##### `MailtoSubject`<sup>Required</sup> <a name="MailtoSubject" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.mailtoSubject"></a>

```go
func MailtoSubject() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.internalValue"></a>

```go
func InternalValue() TeamsAccountBlockPage
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage">TeamsAccountBlockPage</a>

---


### TeamsAccountBodyScanningOutputReference <a name="TeamsAccountBodyScanningOutputReference" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/teamsaccount"

teamsaccount.NewTeamsAccountBodyScanningOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TeamsAccountBodyScanningOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.property.inspectionModeInput">InspectionModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.property.inspectionMode">InspectionMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanning">TeamsAccountBodyScanning</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InspectionModeInput`<sup>Optional</sup> <a name="InspectionModeInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.property.inspectionModeInput"></a>

```go
func InspectionModeInput() *string
```

- *Type:* *string

---

##### `InspectionMode`<sup>Required</sup> <a name="InspectionMode" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.property.inspectionMode"></a>

```go
func InspectionMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.property.internalValue"></a>

```go
func InternalValue() TeamsAccountBodyScanning
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanning">TeamsAccountBodyScanning</a>

---


### TeamsAccountCertificateOutputReference <a name="TeamsAccountCertificateOutputReference" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/teamsaccount"

teamsaccount.NewTeamsAccountCertificateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TeamsAccountCertificateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificate">TeamsAccountCertificate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.property.internalValue"></a>

```go
func InternalValue() TeamsAccountCertificate
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificate">TeamsAccountCertificate</a>

---


### TeamsAccountCustomCertificateOutputReference <a name="TeamsAccountCustomCertificateOutputReference" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/teamsaccount"

teamsaccount.NewTeamsAccountCustomCertificateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TeamsAccountCustomCertificateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.resetId"></a>

```go
func ResetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificate">TeamsAccountCustomCertificate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.property.internalValue"></a>

```go
func InternalValue() TeamsAccountCustomCertificate
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificate">TeamsAccountCustomCertificate</a>

---


### TeamsAccountExtendedEmailMatchingOutputReference <a name="TeamsAccountExtendedEmailMatchingOutputReference" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/teamsaccount"

teamsaccount.NewTeamsAccountExtendedEmailMatchingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TeamsAccountExtendedEmailMatchingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatching">TeamsAccountExtendedEmailMatching</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.property.internalValue"></a>

```go
func InternalValue() TeamsAccountExtendedEmailMatching
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatching">TeamsAccountExtendedEmailMatching</a>

---


### TeamsAccountFipsOutputReference <a name="TeamsAccountFipsOutputReference" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/teamsaccount"

teamsaccount.NewTeamsAccountFipsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TeamsAccountFipsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTls` <a name="ResetTls" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.resetTls"></a>

```go
func ResetTls()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.property.tlsInput">TlsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.property.tls">Tls</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFips">TeamsAccountFips</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TlsInput`<sup>Optional</sup> <a name="TlsInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.property.tlsInput"></a>

```go
func TlsInput() interface{}
```

- *Type:* interface{}

---

##### `Tls`<sup>Required</sup> <a name="Tls" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.property.tls"></a>

```go
func Tls() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.property.internalValue"></a>

```go
func InternalValue() TeamsAccountFips
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFips">TeamsAccountFips</a>

---


### TeamsAccountLoggingOutputReference <a name="TeamsAccountLoggingOutputReference" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/teamsaccount"

teamsaccount.NewTeamsAccountLoggingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TeamsAccountLoggingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSettingsByRuleType` <a name="PutSettingsByRuleType" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.putSettingsByRuleType"></a>

```go
func PutSettingsByRuleType(value TeamsAccountLoggingSettingsByRuleType)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.putSettingsByRuleType.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleType">TeamsAccountLoggingSettingsByRuleType</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.property.settingsByRuleType">SettingsByRuleType</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference">TeamsAccountLoggingSettingsByRuleTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.property.redactPiiInput">RedactPiiInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.property.settingsByRuleTypeInput">SettingsByRuleTypeInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleType">TeamsAccountLoggingSettingsByRuleType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.property.redactPii">RedactPii</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLogging">TeamsAccountLogging</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SettingsByRuleType`<sup>Required</sup> <a name="SettingsByRuleType" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.property.settingsByRuleType"></a>

```go
func SettingsByRuleType() TeamsAccountLoggingSettingsByRuleTypeOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference">TeamsAccountLoggingSettingsByRuleTypeOutputReference</a>

---

##### `RedactPiiInput`<sup>Optional</sup> <a name="RedactPiiInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.property.redactPiiInput"></a>

```go
func RedactPiiInput() interface{}
```

- *Type:* interface{}

---

##### `SettingsByRuleTypeInput`<sup>Optional</sup> <a name="SettingsByRuleTypeInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.property.settingsByRuleTypeInput"></a>

```go
func SettingsByRuleTypeInput() TeamsAccountLoggingSettingsByRuleType
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleType">TeamsAccountLoggingSettingsByRuleType</a>

---

##### `RedactPii`<sup>Required</sup> <a name="RedactPii" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.property.redactPii"></a>

```go
func RedactPii() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.property.internalValue"></a>

```go
func InternalValue() TeamsAccountLogging
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLogging">TeamsAccountLogging</a>

---


### TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference <a name="TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/teamsaccount"

teamsaccount.NewTeamsAccountLoggingSettingsByRuleTypeDnsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.property.logAllInput">LogAllInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.property.logBlocksInput">LogBlocksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.property.logAll">LogAll</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.property.logBlocks">LogBlocks</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDns">TeamsAccountLoggingSettingsByRuleTypeDns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LogAllInput`<sup>Optional</sup> <a name="LogAllInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.property.logAllInput"></a>

```go
func LogAllInput() interface{}
```

- *Type:* interface{}

---

##### `LogBlocksInput`<sup>Optional</sup> <a name="LogBlocksInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.property.logBlocksInput"></a>

```go
func LogBlocksInput() interface{}
```

- *Type:* interface{}

---

##### `LogAll`<sup>Required</sup> <a name="LogAll" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.property.logAll"></a>

```go
func LogAll() interface{}
```

- *Type:* interface{}

---

##### `LogBlocks`<sup>Required</sup> <a name="LogBlocks" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.property.logBlocks"></a>

```go
func LogBlocks() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.property.internalValue"></a>

```go
func InternalValue() TeamsAccountLoggingSettingsByRuleTypeDns
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDns">TeamsAccountLoggingSettingsByRuleTypeDns</a>

---


### TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference <a name="TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/teamsaccount"

teamsaccount.NewTeamsAccountLoggingSettingsByRuleTypeHttpOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.property.logAllInput">LogAllInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.property.logBlocksInput">LogBlocksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.property.logAll">LogAll</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.property.logBlocks">LogBlocks</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttp">TeamsAccountLoggingSettingsByRuleTypeHttp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LogAllInput`<sup>Optional</sup> <a name="LogAllInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.property.logAllInput"></a>

```go
func LogAllInput() interface{}
```

- *Type:* interface{}

---

##### `LogBlocksInput`<sup>Optional</sup> <a name="LogBlocksInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.property.logBlocksInput"></a>

```go
func LogBlocksInput() interface{}
```

- *Type:* interface{}

---

##### `LogAll`<sup>Required</sup> <a name="LogAll" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.property.logAll"></a>

```go
func LogAll() interface{}
```

- *Type:* interface{}

---

##### `LogBlocks`<sup>Required</sup> <a name="LogBlocks" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.property.logBlocks"></a>

```go
func LogBlocks() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.property.internalValue"></a>

```go
func InternalValue() TeamsAccountLoggingSettingsByRuleTypeHttp
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttp">TeamsAccountLoggingSettingsByRuleTypeHttp</a>

---


### TeamsAccountLoggingSettingsByRuleTypeL4OutputReference <a name="TeamsAccountLoggingSettingsByRuleTypeL4OutputReference" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/teamsaccount"

teamsaccount.NewTeamsAccountLoggingSettingsByRuleTypeL4OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TeamsAccountLoggingSettingsByRuleTypeL4OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.property.logAllInput">LogAllInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.property.logBlocksInput">LogBlocksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.property.logAll">LogAll</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.property.logBlocks">LogBlocks</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4">TeamsAccountLoggingSettingsByRuleTypeL4</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LogAllInput`<sup>Optional</sup> <a name="LogAllInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.property.logAllInput"></a>

```go
func LogAllInput() interface{}
```

- *Type:* interface{}

---

##### `LogBlocksInput`<sup>Optional</sup> <a name="LogBlocksInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.property.logBlocksInput"></a>

```go
func LogBlocksInput() interface{}
```

- *Type:* interface{}

---

##### `LogAll`<sup>Required</sup> <a name="LogAll" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.property.logAll"></a>

```go
func LogAll() interface{}
```

- *Type:* interface{}

---

##### `LogBlocks`<sup>Required</sup> <a name="LogBlocks" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.property.logBlocks"></a>

```go
func LogBlocks() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.property.internalValue"></a>

```go
func InternalValue() TeamsAccountLoggingSettingsByRuleTypeL4
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4">TeamsAccountLoggingSettingsByRuleTypeL4</a>

---


### TeamsAccountLoggingSettingsByRuleTypeOutputReference <a name="TeamsAccountLoggingSettingsByRuleTypeOutputReference" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/teamsaccount"

teamsaccount.NewTeamsAccountLoggingSettingsByRuleTypeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TeamsAccountLoggingSettingsByRuleTypeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDns` <a name="PutDns" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.putDns"></a>

```go
func PutDns(value TeamsAccountLoggingSettingsByRuleTypeDns)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.putDns.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDns">TeamsAccountLoggingSettingsByRuleTypeDns</a>

---

##### `PutHttp` <a name="PutHttp" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.putHttp"></a>

```go
func PutHttp(value TeamsAccountLoggingSettingsByRuleTypeHttp)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.putHttp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttp">TeamsAccountLoggingSettingsByRuleTypeHttp</a>

---

##### `PutL4` <a name="PutL4" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.putL4"></a>

```go
func PutL4(value TeamsAccountLoggingSettingsByRuleTypeL4)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.putL4.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4">TeamsAccountLoggingSettingsByRuleTypeL4</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.dns">Dns</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference">TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.http">Http</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference">TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.l4">L4</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference">TeamsAccountLoggingSettingsByRuleTypeL4OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.dnsInput">DnsInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDns">TeamsAccountLoggingSettingsByRuleTypeDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.httpInput">HttpInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttp">TeamsAccountLoggingSettingsByRuleTypeHttp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.l4Input">L4Input</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4">TeamsAccountLoggingSettingsByRuleTypeL4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleType">TeamsAccountLoggingSettingsByRuleType</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Dns`<sup>Required</sup> <a name="Dns" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.dns"></a>

```go
func Dns() TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference">TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference</a>

---

##### `Http`<sup>Required</sup> <a name="Http" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.http"></a>

```go
func Http() TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference">TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference</a>

---

##### `L4`<sup>Required</sup> <a name="L4" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.l4"></a>

```go
func L4() TeamsAccountLoggingSettingsByRuleTypeL4OutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference">TeamsAccountLoggingSettingsByRuleTypeL4OutputReference</a>

---

##### `DnsInput`<sup>Optional</sup> <a name="DnsInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.dnsInput"></a>

```go
func DnsInput() TeamsAccountLoggingSettingsByRuleTypeDns
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDns">TeamsAccountLoggingSettingsByRuleTypeDns</a>

---

##### `HttpInput`<sup>Optional</sup> <a name="HttpInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.httpInput"></a>

```go
func HttpInput() TeamsAccountLoggingSettingsByRuleTypeHttp
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttp">TeamsAccountLoggingSettingsByRuleTypeHttp</a>

---

##### `L4Input`<sup>Optional</sup> <a name="L4Input" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.l4Input"></a>

```go
func L4Input() TeamsAccountLoggingSettingsByRuleTypeL4
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4">TeamsAccountLoggingSettingsByRuleTypeL4</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.internalValue"></a>

```go
func InternalValue() TeamsAccountLoggingSettingsByRuleType
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleType">TeamsAccountLoggingSettingsByRuleType</a>

---


### TeamsAccountPayloadLogOutputReference <a name="TeamsAccountPayloadLogOutputReference" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/teamsaccount"

teamsaccount.NewTeamsAccountPayloadLogOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TeamsAccountPayloadLogOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.property.publicKeyInput">PublicKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.property.publicKey">PublicKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLog">TeamsAccountPayloadLog</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PublicKeyInput`<sup>Optional</sup> <a name="PublicKeyInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.property.publicKeyInput"></a>

```go
func PublicKeyInput() *string
```

- *Type:* *string

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.property.publicKey"></a>

```go
func PublicKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.property.internalValue"></a>

```go
func InternalValue() TeamsAccountPayloadLog
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLog">TeamsAccountPayloadLog</a>

---


### TeamsAccountProxyOutputReference <a name="TeamsAccountProxyOutputReference" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/teamsaccount"

teamsaccount.NewTeamsAccountProxyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TeamsAccountProxyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.disableForTimeInput">DisableForTimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.rootCaInput">RootCaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.tcpInput">TcpInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.udpInput">UdpInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.virtualIpInput">VirtualIpInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.disableForTime">DisableForTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.rootCa">RootCa</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.tcp">Tcp</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.udp">Udp</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.virtualIp">VirtualIp</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxy">TeamsAccountProxy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisableForTimeInput`<sup>Optional</sup> <a name="DisableForTimeInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.disableForTimeInput"></a>

```go
func DisableForTimeInput() *f64
```

- *Type:* *f64

---

##### `RootCaInput`<sup>Optional</sup> <a name="RootCaInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.rootCaInput"></a>

```go
func RootCaInput() interface{}
```

- *Type:* interface{}

---

##### `TcpInput`<sup>Optional</sup> <a name="TcpInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.tcpInput"></a>

```go
func TcpInput() interface{}
```

- *Type:* interface{}

---

##### `UdpInput`<sup>Optional</sup> <a name="UdpInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.udpInput"></a>

```go
func UdpInput() interface{}
```

- *Type:* interface{}

---

##### `VirtualIpInput`<sup>Optional</sup> <a name="VirtualIpInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.virtualIpInput"></a>

```go
func VirtualIpInput() interface{}
```

- *Type:* interface{}

---

##### `DisableForTime`<sup>Required</sup> <a name="DisableForTime" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.disableForTime"></a>

```go
func DisableForTime() *f64
```

- *Type:* *f64

---

##### `RootCa`<sup>Required</sup> <a name="RootCa" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.rootCa"></a>

```go
func RootCa() interface{}
```

- *Type:* interface{}

---

##### `Tcp`<sup>Required</sup> <a name="Tcp" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.tcp"></a>

```go
func Tcp() interface{}
```

- *Type:* interface{}

---

##### `Udp`<sup>Required</sup> <a name="Udp" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.udp"></a>

```go
func Udp() interface{}
```

- *Type:* interface{}

---

##### `VirtualIp`<sup>Required</sup> <a name="VirtualIp" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.virtualIp"></a>

```go
func VirtualIp() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.internalValue"></a>

```go
func InternalValue() TeamsAccountProxy
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxy">TeamsAccountProxy</a>

---


### TeamsAccountSshSessionLogOutputReference <a name="TeamsAccountSshSessionLogOutputReference" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/teamsaccount"

teamsaccount.NewTeamsAccountSshSessionLogOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TeamsAccountSshSessionLogOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.property.publicKeyInput">PublicKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.property.publicKey">PublicKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLog">TeamsAccountSshSessionLog</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PublicKeyInput`<sup>Optional</sup> <a name="PublicKeyInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.property.publicKeyInput"></a>

```go
func PublicKeyInput() *string
```

- *Type:* *string

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.property.publicKey"></a>

```go
func PublicKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.property.internalValue"></a>

```go
func InternalValue() TeamsAccountSshSessionLog
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLog">TeamsAccountSshSessionLog</a>

---



