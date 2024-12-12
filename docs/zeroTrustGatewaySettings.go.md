# `zeroTrustGatewaySettings` Submodule <a name="`zeroTrustGatewaySettings` Submodule" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustGatewaySettings <a name="ZeroTrustGatewaySettings" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_gateway_settings cloudflare_zero_trust_gateway_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustgatewaysettings"

zerotrustgatewaysettings.NewZeroTrustGatewaySettings(scope Construct, id *string, config ZeroTrustGatewaySettingsConfig) ZeroTrustGatewaySettings
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig">ZeroTrustGatewaySettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig">ZeroTrustGatewaySettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putAntivirus">PutAntivirus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putBlockPage">PutBlockPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putBodyScanning">PutBodyScanning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putCertificate">PutCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putCustomCertificate">PutCustomCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putExtendedEmailMatching">PutExtendedEmailMatching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putFips">PutFips</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putLogging">PutLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putPayloadLog">PutPayloadLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putProxy">PutProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putSshSessionLog">PutSshSessionLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetActivityLogEnabled">ResetActivityLogEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetAntivirus">ResetAntivirus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetBlockPage">ResetBlockPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetBodyScanning">ResetBodyScanning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetCertificate">ResetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetCustomCertificate">ResetCustomCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetExtendedEmailMatching">ResetExtendedEmailMatching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetFips">ResetFips</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetLogging">ResetLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetNonIdentityBrowserIsolationEnabled">ResetNonIdentityBrowserIsolationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetPayloadLog">ResetPayloadLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetProtocolDetectionEnabled">ResetProtocolDetectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetProxy">ResetProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetSshSessionLog">ResetSshSessionLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetTlsDecryptEnabled">ResetTlsDecryptEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetUrlBrowserIsolationEnabled">ResetUrlBrowserIsolationEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAntivirus` <a name="PutAntivirus" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putAntivirus"></a>

```go
func PutAntivirus(value ZeroTrustGatewaySettingsAntivirus)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putAntivirus.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirus">ZeroTrustGatewaySettingsAntivirus</a>

---

##### `PutBlockPage` <a name="PutBlockPage" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putBlockPage"></a>

```go
func PutBlockPage(value ZeroTrustGatewaySettingsBlockPage)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putBlockPage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage">ZeroTrustGatewaySettingsBlockPage</a>

---

##### `PutBodyScanning` <a name="PutBodyScanning" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putBodyScanning"></a>

```go
func PutBodyScanning(value ZeroTrustGatewaySettingsBodyScanning)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putBodyScanning.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanning">ZeroTrustGatewaySettingsBodyScanning</a>

---

##### `PutCertificate` <a name="PutCertificate" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putCertificate"></a>

```go
func PutCertificate(value ZeroTrustGatewaySettingsCertificate)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putCertificate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificate">ZeroTrustGatewaySettingsCertificate</a>

---

##### `PutCustomCertificate` <a name="PutCustomCertificate" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putCustomCertificate"></a>

```go
func PutCustomCertificate(value ZeroTrustGatewaySettingsCustomCertificate)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putCustomCertificate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificate">ZeroTrustGatewaySettingsCustomCertificate</a>

---

##### `PutExtendedEmailMatching` <a name="PutExtendedEmailMatching" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putExtendedEmailMatching"></a>

```go
func PutExtendedEmailMatching(value ZeroTrustGatewaySettingsExtendedEmailMatching)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putExtendedEmailMatching.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatching">ZeroTrustGatewaySettingsExtendedEmailMatching</a>

---

##### `PutFips` <a name="PutFips" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putFips"></a>

```go
func PutFips(value ZeroTrustGatewaySettingsFips)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putFips.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFips">ZeroTrustGatewaySettingsFips</a>

---

##### `PutLogging` <a name="PutLogging" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putLogging"></a>

```go
func PutLogging(value ZeroTrustGatewaySettingsLogging)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putLogging.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLogging">ZeroTrustGatewaySettingsLogging</a>

---

##### `PutPayloadLog` <a name="PutPayloadLog" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putPayloadLog"></a>

```go
func PutPayloadLog(value ZeroTrustGatewaySettingsPayloadLog)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putPayloadLog.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLog">ZeroTrustGatewaySettingsPayloadLog</a>

---

##### `PutProxy` <a name="PutProxy" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putProxy"></a>

```go
func PutProxy(value ZeroTrustGatewaySettingsProxy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putProxy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxy">ZeroTrustGatewaySettingsProxy</a>

---

##### `PutSshSessionLog` <a name="PutSshSessionLog" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putSshSessionLog"></a>

```go
func PutSshSessionLog(value ZeroTrustGatewaySettingsSshSessionLog)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putSshSessionLog.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLog">ZeroTrustGatewaySettingsSshSessionLog</a>

---

##### `ResetActivityLogEnabled` <a name="ResetActivityLogEnabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetActivityLogEnabled"></a>

```go
func ResetActivityLogEnabled()
```

##### `ResetAntivirus` <a name="ResetAntivirus" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetAntivirus"></a>

```go
func ResetAntivirus()
```

##### `ResetBlockPage` <a name="ResetBlockPage" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetBlockPage"></a>

```go
func ResetBlockPage()
```

##### `ResetBodyScanning` <a name="ResetBodyScanning" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetBodyScanning"></a>

```go
func ResetBodyScanning()
```

##### `ResetCertificate` <a name="ResetCertificate" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetCertificate"></a>

```go
func ResetCertificate()
```

##### `ResetCustomCertificate` <a name="ResetCustomCertificate" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetCustomCertificate"></a>

```go
func ResetCustomCertificate()
```

##### `ResetExtendedEmailMatching` <a name="ResetExtendedEmailMatching" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetExtendedEmailMatching"></a>

```go
func ResetExtendedEmailMatching()
```

##### `ResetFips` <a name="ResetFips" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetFips"></a>

```go
func ResetFips()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetId"></a>

```go
func ResetId()
```

##### `ResetLogging` <a name="ResetLogging" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetLogging"></a>

```go
func ResetLogging()
```

##### `ResetNonIdentityBrowserIsolationEnabled` <a name="ResetNonIdentityBrowserIsolationEnabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetNonIdentityBrowserIsolationEnabled"></a>

```go
func ResetNonIdentityBrowserIsolationEnabled()
```

##### `ResetPayloadLog` <a name="ResetPayloadLog" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetPayloadLog"></a>

```go
func ResetPayloadLog()
```

##### `ResetProtocolDetectionEnabled` <a name="ResetProtocolDetectionEnabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetProtocolDetectionEnabled"></a>

```go
func ResetProtocolDetectionEnabled()
```

##### `ResetProxy` <a name="ResetProxy" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetProxy"></a>

```go
func ResetProxy()
```

##### `ResetSshSessionLog` <a name="ResetSshSessionLog" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetSshSessionLog"></a>

```go
func ResetSshSessionLog()
```

##### `ResetTlsDecryptEnabled` <a name="ResetTlsDecryptEnabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetTlsDecryptEnabled"></a>

```go
func ResetTlsDecryptEnabled()
```

##### `ResetUrlBrowserIsolationEnabled` <a name="ResetUrlBrowserIsolationEnabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetUrlBrowserIsolationEnabled"></a>

```go
func ResetUrlBrowserIsolationEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ZeroTrustGatewaySettings resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustgatewaysettings"

zerotrustgatewaysettings.ZeroTrustGatewaySettings_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustgatewaysettings"

zerotrustgatewaysettings.ZeroTrustGatewaySettings_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustgatewaysettings"

zerotrustgatewaysettings.ZeroTrustGatewaySettings_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustgatewaysettings"

zerotrustgatewaysettings.ZeroTrustGatewaySettings_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ZeroTrustGatewaySettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ZeroTrustGatewaySettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ZeroTrustGatewaySettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_gateway_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustGatewaySettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.antivirus">Antivirus</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference">ZeroTrustGatewaySettingsAntivirusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.blockPage">BlockPage</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference">ZeroTrustGatewaySettingsBlockPageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.bodyScanning">BodyScanning</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference">ZeroTrustGatewaySettingsBodyScanningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.certificate">Certificate</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference">ZeroTrustGatewaySettingsCertificateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.customCertificate">CustomCertificate</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference">ZeroTrustGatewaySettingsCustomCertificateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.extendedEmailMatching">ExtendedEmailMatching</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference">ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.fips">Fips</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference">ZeroTrustGatewaySettingsFipsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.logging">Logging</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference">ZeroTrustGatewaySettingsLoggingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.payloadLog">PayloadLog</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference">ZeroTrustGatewaySettingsPayloadLogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.proxy">Proxy</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference">ZeroTrustGatewaySettingsProxyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.sshSessionLog">SshSessionLog</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference">ZeroTrustGatewaySettingsSshSessionLogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.activityLogEnabledInput">ActivityLogEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.antivirusInput">AntivirusInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirus">ZeroTrustGatewaySettingsAntivirus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.blockPageInput">BlockPageInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage">ZeroTrustGatewaySettingsBlockPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.bodyScanningInput">BodyScanningInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanning">ZeroTrustGatewaySettingsBodyScanning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.certificateInput">CertificateInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificate">ZeroTrustGatewaySettingsCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.customCertificateInput">CustomCertificateInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificate">ZeroTrustGatewaySettingsCustomCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.extendedEmailMatchingInput">ExtendedEmailMatchingInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatching">ZeroTrustGatewaySettingsExtendedEmailMatching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.fipsInput">FipsInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFips">ZeroTrustGatewaySettingsFips</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.loggingInput">LoggingInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLogging">ZeroTrustGatewaySettingsLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.nonIdentityBrowserIsolationEnabledInput">NonIdentityBrowserIsolationEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.payloadLogInput">PayloadLogInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLog">ZeroTrustGatewaySettingsPayloadLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.protocolDetectionEnabledInput">ProtocolDetectionEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.proxyInput">ProxyInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxy">ZeroTrustGatewaySettingsProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.sshSessionLogInput">SshSessionLogInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLog">ZeroTrustGatewaySettingsSshSessionLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.tlsDecryptEnabledInput">TlsDecryptEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.urlBrowserIsolationEnabledInput">UrlBrowserIsolationEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.activityLogEnabled">ActivityLogEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.nonIdentityBrowserIsolationEnabled">NonIdentityBrowserIsolationEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.protocolDetectionEnabled">ProtocolDetectionEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.tlsDecryptEnabled">TlsDecryptEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.urlBrowserIsolationEnabled">UrlBrowserIsolationEnabled</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Antivirus`<sup>Required</sup> <a name="Antivirus" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.antivirus"></a>

```go
func Antivirus() ZeroTrustGatewaySettingsAntivirusOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference">ZeroTrustGatewaySettingsAntivirusOutputReference</a>

---

##### `BlockPage`<sup>Required</sup> <a name="BlockPage" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.blockPage"></a>

```go
func BlockPage() ZeroTrustGatewaySettingsBlockPageOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference">ZeroTrustGatewaySettingsBlockPageOutputReference</a>

---

##### `BodyScanning`<sup>Required</sup> <a name="BodyScanning" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.bodyScanning"></a>

```go
func BodyScanning() ZeroTrustGatewaySettingsBodyScanningOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference">ZeroTrustGatewaySettingsBodyScanningOutputReference</a>

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.certificate"></a>

```go
func Certificate() ZeroTrustGatewaySettingsCertificateOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference">ZeroTrustGatewaySettingsCertificateOutputReference</a>

---

##### `CustomCertificate`<sup>Required</sup> <a name="CustomCertificate" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.customCertificate"></a>

```go
func CustomCertificate() ZeroTrustGatewaySettingsCustomCertificateOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference">ZeroTrustGatewaySettingsCustomCertificateOutputReference</a>

---

##### `ExtendedEmailMatching`<sup>Required</sup> <a name="ExtendedEmailMatching" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.extendedEmailMatching"></a>

```go
func ExtendedEmailMatching() ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference">ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference</a>

---

##### `Fips`<sup>Required</sup> <a name="Fips" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.fips"></a>

```go
func Fips() ZeroTrustGatewaySettingsFipsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference">ZeroTrustGatewaySettingsFipsOutputReference</a>

---

##### `Logging`<sup>Required</sup> <a name="Logging" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.logging"></a>

```go
func Logging() ZeroTrustGatewaySettingsLoggingOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference">ZeroTrustGatewaySettingsLoggingOutputReference</a>

---

##### `PayloadLog`<sup>Required</sup> <a name="PayloadLog" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.payloadLog"></a>

```go
func PayloadLog() ZeroTrustGatewaySettingsPayloadLogOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference">ZeroTrustGatewaySettingsPayloadLogOutputReference</a>

---

##### `Proxy`<sup>Required</sup> <a name="Proxy" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.proxy"></a>

```go
func Proxy() ZeroTrustGatewaySettingsProxyOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference">ZeroTrustGatewaySettingsProxyOutputReference</a>

---

##### `SshSessionLog`<sup>Required</sup> <a name="SshSessionLog" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.sshSessionLog"></a>

```go
func SshSessionLog() ZeroTrustGatewaySettingsSshSessionLogOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference">ZeroTrustGatewaySettingsSshSessionLogOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `ActivityLogEnabledInput`<sup>Optional</sup> <a name="ActivityLogEnabledInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.activityLogEnabledInput"></a>

```go
func ActivityLogEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `AntivirusInput`<sup>Optional</sup> <a name="AntivirusInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.antivirusInput"></a>

```go
func AntivirusInput() ZeroTrustGatewaySettingsAntivirus
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirus">ZeroTrustGatewaySettingsAntivirus</a>

---

##### `BlockPageInput`<sup>Optional</sup> <a name="BlockPageInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.blockPageInput"></a>

```go
func BlockPageInput() ZeroTrustGatewaySettingsBlockPage
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage">ZeroTrustGatewaySettingsBlockPage</a>

---

##### `BodyScanningInput`<sup>Optional</sup> <a name="BodyScanningInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.bodyScanningInput"></a>

```go
func BodyScanningInput() ZeroTrustGatewaySettingsBodyScanning
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanning">ZeroTrustGatewaySettingsBodyScanning</a>

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.certificateInput"></a>

```go
func CertificateInput() ZeroTrustGatewaySettingsCertificate
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificate">ZeroTrustGatewaySettingsCertificate</a>

---

##### `CustomCertificateInput`<sup>Optional</sup> <a name="CustomCertificateInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.customCertificateInput"></a>

```go
func CustomCertificateInput() ZeroTrustGatewaySettingsCustomCertificate
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificate">ZeroTrustGatewaySettingsCustomCertificate</a>

---

##### `ExtendedEmailMatchingInput`<sup>Optional</sup> <a name="ExtendedEmailMatchingInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.extendedEmailMatchingInput"></a>

```go
func ExtendedEmailMatchingInput() ZeroTrustGatewaySettingsExtendedEmailMatching
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatching">ZeroTrustGatewaySettingsExtendedEmailMatching</a>

---

##### `FipsInput`<sup>Optional</sup> <a name="FipsInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.fipsInput"></a>

```go
func FipsInput() ZeroTrustGatewaySettingsFips
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFips">ZeroTrustGatewaySettingsFips</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LoggingInput`<sup>Optional</sup> <a name="LoggingInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.loggingInput"></a>

```go
func LoggingInput() ZeroTrustGatewaySettingsLogging
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLogging">ZeroTrustGatewaySettingsLogging</a>

---

##### `NonIdentityBrowserIsolationEnabledInput`<sup>Optional</sup> <a name="NonIdentityBrowserIsolationEnabledInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.nonIdentityBrowserIsolationEnabledInput"></a>

```go
func NonIdentityBrowserIsolationEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `PayloadLogInput`<sup>Optional</sup> <a name="PayloadLogInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.payloadLogInput"></a>

```go
func PayloadLogInput() ZeroTrustGatewaySettingsPayloadLog
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLog">ZeroTrustGatewaySettingsPayloadLog</a>

---

##### `ProtocolDetectionEnabledInput`<sup>Optional</sup> <a name="ProtocolDetectionEnabledInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.protocolDetectionEnabledInput"></a>

```go
func ProtocolDetectionEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ProxyInput`<sup>Optional</sup> <a name="ProxyInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.proxyInput"></a>

```go
func ProxyInput() ZeroTrustGatewaySettingsProxy
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxy">ZeroTrustGatewaySettingsProxy</a>

---

##### `SshSessionLogInput`<sup>Optional</sup> <a name="SshSessionLogInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.sshSessionLogInput"></a>

```go
func SshSessionLogInput() ZeroTrustGatewaySettingsSshSessionLog
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLog">ZeroTrustGatewaySettingsSshSessionLog</a>

---

##### `TlsDecryptEnabledInput`<sup>Optional</sup> <a name="TlsDecryptEnabledInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.tlsDecryptEnabledInput"></a>

```go
func TlsDecryptEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `UrlBrowserIsolationEnabledInput`<sup>Optional</sup> <a name="UrlBrowserIsolationEnabledInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.urlBrowserIsolationEnabledInput"></a>

```go
func UrlBrowserIsolationEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `ActivityLogEnabled`<sup>Required</sup> <a name="ActivityLogEnabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.activityLogEnabled"></a>

```go
func ActivityLogEnabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `NonIdentityBrowserIsolationEnabled`<sup>Required</sup> <a name="NonIdentityBrowserIsolationEnabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.nonIdentityBrowserIsolationEnabled"></a>

```go
func NonIdentityBrowserIsolationEnabled() interface{}
```

- *Type:* interface{}

---

##### `ProtocolDetectionEnabled`<sup>Required</sup> <a name="ProtocolDetectionEnabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.protocolDetectionEnabled"></a>

```go
func ProtocolDetectionEnabled() interface{}
```

- *Type:* interface{}

---

##### `TlsDecryptEnabled`<sup>Required</sup> <a name="TlsDecryptEnabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.tlsDecryptEnabled"></a>

```go
func TlsDecryptEnabled() interface{}
```

- *Type:* interface{}

---

##### `UrlBrowserIsolationEnabled`<sup>Required</sup> <a name="UrlBrowserIsolationEnabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.urlBrowserIsolationEnabled"></a>

```go
func UrlBrowserIsolationEnabled() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustGatewaySettingsAntivirus <a name="ZeroTrustGatewaySettingsAntivirus" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirus.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustgatewaysettings"

&zerotrustgatewaysettings.ZeroTrustGatewaySettingsAntivirus {
	EnabledDownloadPhase: interface{},
	EnabledUploadPhase: interface{},
	FailClosed: interface{},
	NotificationSettings: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettings,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirus.property.enabledDownloadPhase">EnabledDownloadPhase</a></code> | <code>interface{}</code> | Scan on file download. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirus.property.enabledUploadPhase">EnabledUploadPhase</a></code> | <code>interface{}</code> | Scan on file upload. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirus.property.failClosed">FailClosed</a></code> | <code>interface{}</code> | Block requests for files that cannot be scanned. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirus.property.notificationSettings">NotificationSettings</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettings">ZeroTrustGatewaySettingsAntivirusNotificationSettings</a></code> | notification_settings block. |

---

##### `EnabledDownloadPhase`<sup>Required</sup> <a name="EnabledDownloadPhase" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirus.property.enabledDownloadPhase"></a>

```go
EnabledDownloadPhase interface{}
```

- *Type:* interface{}

Scan on file download.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_gateway_settings#enabled_download_phase ZeroTrustGatewaySettings#enabled_download_phase}

---

##### `EnabledUploadPhase`<sup>Required</sup> <a name="EnabledUploadPhase" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirus.property.enabledUploadPhase"></a>

```go
EnabledUploadPhase interface{}
```

- *Type:* interface{}

Scan on file upload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_gateway_settings#enabled_upload_phase ZeroTrustGatewaySettings#enabled_upload_phase}

---

##### `FailClosed`<sup>Required</sup> <a name="FailClosed" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirus.property.failClosed"></a>

```go
FailClosed interface{}
```

- *Type:* interface{}

Block requests for files that cannot be scanned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_gateway_settings#fail_closed ZeroTrustGatewaySettings#fail_closed}

---

##### `NotificationSettings`<sup>Optional</sup> <a name="NotificationSettings" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirus.property.notificationSettings"></a>

```go
NotificationSettings ZeroTrustGatewaySettingsAntivirusNotificationSettings
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettings">ZeroTrustGatewaySettingsAntivirusNotificationSettings</a>

notification_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_gateway_settings#notification_settings ZeroTrustGatewaySettings#notification_settings}

---

### ZeroTrustGatewaySettingsAntivirusNotificationSettings <a name="ZeroTrustGatewaySettingsAntivirusNotificationSettings" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustgatewaysettings"

&zerotrustgatewaysettings.ZeroTrustGatewaySettingsAntivirusNotificationSettings {
	Enabled: interface{},
	Message: *string,
	SupportUrl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettings.property.enabled">Enabled</a></code> | <code>interface{}</code> | Enable notification settings. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettings.property.message">Message</a></code> | <code>*string</code> | Notification content. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettings.property.supportUrl">SupportUrl</a></code> | <code>*string</code> | Support URL to show in the notification. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettings.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Enable notification settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_gateway_settings#enabled ZeroTrustGatewaySettings#enabled}

---

##### `Message`<sup>Optional</sup> <a name="Message" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettings.property.message"></a>

```go
Message *string
```

- *Type:* *string

Notification content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_gateway_settings#message ZeroTrustGatewaySettings#message}

---

##### `SupportUrl`<sup>Optional</sup> <a name="SupportUrl" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettings.property.supportUrl"></a>

```go
SupportUrl *string
```

- *Type:* *string

Support URL to show in the notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_gateway_settings#support_url ZeroTrustGatewaySettings#support_url}

---

### ZeroTrustGatewaySettingsBlockPage <a name="ZeroTrustGatewaySettingsBlockPage" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustgatewaysettings"

&zerotrustgatewaysettings.ZeroTrustGatewaySettingsBlockPage {
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
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage.property.backgroundColor">BackgroundColor</a></code> | <code>*string</code> | Hex code of block page background color. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage.property.enabled">Enabled</a></code> | <code>interface{}</code> | Indicator of enablement. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage.property.footerText">FooterText</a></code> | <code>*string</code> | Block page footer text. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage.property.headerText">HeaderText</a></code> | <code>*string</code> | Block page header text. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage.property.logoPath">LogoPath</a></code> | <code>*string</code> | URL of block page logo. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage.property.mailtoAddress">MailtoAddress</a></code> | <code>*string</code> | Admin email for users to contact. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage.property.mailtoSubject">MailtoSubject</a></code> | <code>*string</code> | Subject line for emails created from block page. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage.property.name">Name</a></code> | <code>*string</code> | Name of block page configuration. |

---

##### `BackgroundColor`<sup>Optional</sup> <a name="BackgroundColor" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage.property.backgroundColor"></a>

```go
BackgroundColor *string
```

- *Type:* *string

Hex code of block page background color.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_gateway_settings#background_color ZeroTrustGatewaySettings#background_color}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Indicator of enablement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_gateway_settings#enabled ZeroTrustGatewaySettings#enabled}

---

##### `FooterText`<sup>Optional</sup> <a name="FooterText" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage.property.footerText"></a>

```go
FooterText *string
```

- *Type:* *string

Block page footer text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_gateway_settings#footer_text ZeroTrustGatewaySettings#footer_text}

---

##### `HeaderText`<sup>Optional</sup> <a name="HeaderText" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage.property.headerText"></a>

```go
HeaderText *string
```

- *Type:* *string

Block page header text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_gateway_settings#header_text ZeroTrustGatewaySettings#header_text}

---

##### `LogoPath`<sup>Optional</sup> <a name="LogoPath" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage.property.logoPath"></a>

```go
LogoPath *string
```

- *Type:* *string

URL of block page logo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_gateway_settings#logo_path ZeroTrustGatewaySettings#logo_path}

---

##### `MailtoAddress`<sup>Optional</sup> <a name="MailtoAddress" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage.property.mailtoAddress"></a>

```go
MailtoAddress *string
```

- *Type:* *string

Admin email for users to contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_gateway_settings#mailto_address ZeroTrustGatewaySettings#mailto_address}

---

##### `MailtoSubject`<sup>Optional</sup> <a name="MailtoSubject" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage.property.mailtoSubject"></a>

```go
MailtoSubject *string
```

- *Type:* *string

Subject line for emails created from block page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_gateway_settings#mailto_subject ZeroTrustGatewaySettings#mailto_subject}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of block page configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_gateway_settings#name ZeroTrustGatewaySettings#name}

---

### ZeroTrustGatewaySettingsBodyScanning <a name="ZeroTrustGatewaySettingsBodyScanning" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanning"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanning.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustgatewaysettings"

&zerotrustgatewaysettings.ZeroTrustGatewaySettingsBodyScanning {
	InspectionMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanning.property.inspectionMode">InspectionMode</a></code> | <code>*string</code> | Body scanning inspection mode. Available values: `deep`, `shallow`. |

---

##### `InspectionMode`<sup>Required</sup> <a name="InspectionMode" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanning.property.inspectionMode"></a>

```go
InspectionMode *string
```

- *Type:* *string

Body scanning inspection mode. Available values: `deep`, `shallow`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_gateway_settings#inspection_mode ZeroTrustGatewaySettings#inspection_mode}

---

### ZeroTrustGatewaySettingsCertificate <a name="ZeroTrustGatewaySettingsCertificate" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustgatewaysettings"

&zerotrustgatewaysettings.ZeroTrustGatewaySettingsCertificate {
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificate.property.id">Id</a></code> | <code>*string</code> | ID of certificate for TLS interception. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificate.property.id"></a>

```go
Id *string
```

- *Type:* *string

ID of certificate for TLS interception.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_gateway_settings#id ZeroTrustGatewaySettings#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### ZeroTrustGatewaySettingsConfig <a name="ZeroTrustGatewaySettingsConfig" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustgatewaysettings"

&zerotrustgatewaysettings.ZeroTrustGatewaySettingsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	ActivityLogEnabled: interface{},
	Antivirus: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirus,
	BlockPage: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage,
	BodyScanning: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanning,
	Certificate: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificate,
	CustomCertificate: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificate,
	ExtendedEmailMatching: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatching,
	Fips: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFips,
	Id: *string,
	Logging: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLogging,
	NonIdentityBrowserIsolationEnabled: interface{},
	PayloadLog: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLog,
	ProtocolDetectionEnabled: interface{},
	Proxy: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxy,
	SshSessionLog: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLog,
	TlsDecryptEnabled: interface{},
	UrlBrowserIsolationEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.accountId">AccountId</a></code> | <code>*string</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.activityLogEnabled">ActivityLogEnabled</a></code> | <code>interface{}</code> | Whether to enable the activity log. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.antivirus">Antivirus</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirus">ZeroTrustGatewaySettingsAntivirus</a></code> | antivirus block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.blockPage">BlockPage</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage">ZeroTrustGatewaySettingsBlockPage</a></code> | block_page block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.bodyScanning">BodyScanning</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanning">ZeroTrustGatewaySettingsBodyScanning</a></code> | body_scanning block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.certificate">Certificate</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificate">ZeroTrustGatewaySettingsCertificate</a></code> | certificate block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.customCertificate">CustomCertificate</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificate">ZeroTrustGatewaySettingsCustomCertificate</a></code> | custom_certificate block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.extendedEmailMatching">ExtendedEmailMatching</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatching">ZeroTrustGatewaySettingsExtendedEmailMatching</a></code> | extended_email_matching block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.fips">Fips</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFips">ZeroTrustGatewaySettingsFips</a></code> | fips block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_gateway_settings#id ZeroTrustGatewaySettings#id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.logging">Logging</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLogging">ZeroTrustGatewaySettingsLogging</a></code> | logging block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.nonIdentityBrowserIsolationEnabled">NonIdentityBrowserIsolationEnabled</a></code> | <code>interface{}</code> | Enable non-identity onramp for Browser Isolation. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.payloadLog">PayloadLog</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLog">ZeroTrustGatewaySettingsPayloadLog</a></code> | payload_log block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.protocolDetectionEnabled">ProtocolDetectionEnabled</a></code> | <code>interface{}</code> | Indicator that protocol detection is enabled. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.proxy">Proxy</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxy">ZeroTrustGatewaySettingsProxy</a></code> | proxy block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.sshSessionLog">SshSessionLog</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLog">ZeroTrustGatewaySettingsSshSessionLog</a></code> | ssh_session_log block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.tlsDecryptEnabled">TlsDecryptEnabled</a></code> | <code>interface{}</code> | Indicator that decryption of TLS traffic is enabled. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.urlBrowserIsolationEnabled">UrlBrowserIsolationEnabled</a></code> | <code>interface{}</code> | Safely browse websites in Browser Isolation through a URL. Defaults to `false`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_gateway_settings#account_id ZeroTrustGatewaySettings#account_id}

---

##### `ActivityLogEnabled`<sup>Optional</sup> <a name="ActivityLogEnabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.activityLogEnabled"></a>

```go
ActivityLogEnabled interface{}
```

- *Type:* interface{}

Whether to enable the activity log.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_gateway_settings#activity_log_enabled ZeroTrustGatewaySettings#activity_log_enabled}

---

##### `Antivirus`<sup>Optional</sup> <a name="Antivirus" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.antivirus"></a>

```go
Antivirus ZeroTrustGatewaySettingsAntivirus
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirus">ZeroTrustGatewaySettingsAntivirus</a>

antivirus block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_gateway_settings#antivirus ZeroTrustGatewaySettings#antivirus}

---

##### `BlockPage`<sup>Optional</sup> <a name="BlockPage" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.blockPage"></a>

```go
BlockPage ZeroTrustGatewaySettingsBlockPage
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage">ZeroTrustGatewaySettingsBlockPage</a>

block_page block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_gateway_settings#block_page ZeroTrustGatewaySettings#block_page}

---

##### `BodyScanning`<sup>Optional</sup> <a name="BodyScanning" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.bodyScanning"></a>

```go
BodyScanning ZeroTrustGatewaySettingsBodyScanning
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanning">ZeroTrustGatewaySettingsBodyScanning</a>

body_scanning block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_gateway_settings#body_scanning ZeroTrustGatewaySettings#body_scanning}

---

##### `Certificate`<sup>Optional</sup> <a name="Certificate" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.certificate"></a>

```go
Certificate ZeroTrustGatewaySettingsCertificate
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificate">ZeroTrustGatewaySettingsCertificate</a>

certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_gateway_settings#certificate ZeroTrustGatewaySettings#certificate}

---

##### `CustomCertificate`<sup>Optional</sup> <a name="CustomCertificate" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.customCertificate"></a>

```go
CustomCertificate ZeroTrustGatewaySettingsCustomCertificate
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificate">ZeroTrustGatewaySettingsCustomCertificate</a>

custom_certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_gateway_settings#custom_certificate ZeroTrustGatewaySettings#custom_certificate}

---

##### `ExtendedEmailMatching`<sup>Optional</sup> <a name="ExtendedEmailMatching" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.extendedEmailMatching"></a>

```go
ExtendedEmailMatching ZeroTrustGatewaySettingsExtendedEmailMatching
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatching">ZeroTrustGatewaySettingsExtendedEmailMatching</a>

extended_email_matching block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_gateway_settings#extended_email_matching ZeroTrustGatewaySettings#extended_email_matching}

---

##### `Fips`<sup>Optional</sup> <a name="Fips" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.fips"></a>

```go
Fips ZeroTrustGatewaySettingsFips
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFips">ZeroTrustGatewaySettingsFips</a>

fips block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_gateway_settings#fips ZeroTrustGatewaySettings#fips}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_gateway_settings#id ZeroTrustGatewaySettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Logging`<sup>Optional</sup> <a name="Logging" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.logging"></a>

```go
Logging ZeroTrustGatewaySettingsLogging
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLogging">ZeroTrustGatewaySettingsLogging</a>

logging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_gateway_settings#logging ZeroTrustGatewaySettings#logging}

---

##### `NonIdentityBrowserIsolationEnabled`<sup>Optional</sup> <a name="NonIdentityBrowserIsolationEnabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.nonIdentityBrowserIsolationEnabled"></a>

```go
NonIdentityBrowserIsolationEnabled interface{}
```

- *Type:* interface{}

Enable non-identity onramp for Browser Isolation. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_gateway_settings#non_identity_browser_isolation_enabled ZeroTrustGatewaySettings#non_identity_browser_isolation_enabled}

---

##### `PayloadLog`<sup>Optional</sup> <a name="PayloadLog" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.payloadLog"></a>

```go
PayloadLog ZeroTrustGatewaySettingsPayloadLog
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLog">ZeroTrustGatewaySettingsPayloadLog</a>

payload_log block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_gateway_settings#payload_log ZeroTrustGatewaySettings#payload_log}

---

##### `ProtocolDetectionEnabled`<sup>Optional</sup> <a name="ProtocolDetectionEnabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.protocolDetectionEnabled"></a>

```go
ProtocolDetectionEnabled interface{}
```

- *Type:* interface{}

Indicator that protocol detection is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_gateway_settings#protocol_detection_enabled ZeroTrustGatewaySettings#protocol_detection_enabled}

---

##### `Proxy`<sup>Optional</sup> <a name="Proxy" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.proxy"></a>

```go
Proxy ZeroTrustGatewaySettingsProxy
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxy">ZeroTrustGatewaySettingsProxy</a>

proxy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_gateway_settings#proxy ZeroTrustGatewaySettings#proxy}

---

##### `SshSessionLog`<sup>Optional</sup> <a name="SshSessionLog" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.sshSessionLog"></a>

```go
SshSessionLog ZeroTrustGatewaySettingsSshSessionLog
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLog">ZeroTrustGatewaySettingsSshSessionLog</a>

ssh_session_log block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_gateway_settings#ssh_session_log ZeroTrustGatewaySettings#ssh_session_log}

---

##### `TlsDecryptEnabled`<sup>Optional</sup> <a name="TlsDecryptEnabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.tlsDecryptEnabled"></a>

```go
TlsDecryptEnabled interface{}
```

- *Type:* interface{}

Indicator that decryption of TLS traffic is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_gateway_settings#tls_decrypt_enabled ZeroTrustGatewaySettings#tls_decrypt_enabled}

---

##### `UrlBrowserIsolationEnabled`<sup>Optional</sup> <a name="UrlBrowserIsolationEnabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.urlBrowserIsolationEnabled"></a>

```go
UrlBrowserIsolationEnabled interface{}
```

- *Type:* interface{}

Safely browse websites in Browser Isolation through a URL. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_gateway_settings#url_browser_isolation_enabled ZeroTrustGatewaySettings#url_browser_isolation_enabled}

---

### ZeroTrustGatewaySettingsCustomCertificate <a name="ZeroTrustGatewaySettingsCustomCertificate" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustgatewaysettings"

&zerotrustgatewaysettings.ZeroTrustGatewaySettingsCustomCertificate {
	Enabled: interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificate.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether TLS encryption should use a custom certificate. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificate.property.id">Id</a></code> | <code>*string</code> | ID of custom certificate. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificate.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether TLS encryption should use a custom certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_gateway_settings#enabled ZeroTrustGatewaySettings#enabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificate.property.id"></a>

```go
Id *string
```

- *Type:* *string

ID of custom certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_gateway_settings#id ZeroTrustGatewaySettings#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### ZeroTrustGatewaySettingsExtendedEmailMatching <a name="ZeroTrustGatewaySettingsExtendedEmailMatching" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatching"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatching.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustgatewaysettings"

&zerotrustgatewaysettings.ZeroTrustGatewaySettingsExtendedEmailMatching {
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatching.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether e-mails should be matched on all variants of user emails (with + or . modifiers) in Firewall policies. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatching.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether e-mails should be matched on all variants of user emails (with + or . modifiers) in Firewall policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_gateway_settings#enabled ZeroTrustGatewaySettings#enabled}

---

### ZeroTrustGatewaySettingsFips <a name="ZeroTrustGatewaySettingsFips" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFips"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFips.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustgatewaysettings"

&zerotrustgatewaysettings.ZeroTrustGatewaySettingsFips {
	Tls: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFips.property.tls">Tls</a></code> | <code>interface{}</code> | Only allow FIPS-compliant TLS configuration. |

---

##### `Tls`<sup>Optional</sup> <a name="Tls" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFips.property.tls"></a>

```go
Tls interface{}
```

- *Type:* interface{}

Only allow FIPS-compliant TLS configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_gateway_settings#tls ZeroTrustGatewaySettings#tls}

---

### ZeroTrustGatewaySettingsLogging <a name="ZeroTrustGatewaySettingsLogging" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLogging"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLogging.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustgatewaysettings"

&zerotrustgatewaysettings.ZeroTrustGatewaySettingsLogging {
	RedactPii: interface{},
	SettingsByRuleType: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleType,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLogging.property.redactPii">RedactPii</a></code> | <code>interface{}</code> | Redact personally identifiable information from activity logging (PII fields are: source IP, user email, user ID, device ID, URL, referrer, user agent). |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLogging.property.settingsByRuleType">SettingsByRuleType</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleType">ZeroTrustGatewaySettingsLoggingSettingsByRuleType</a></code> | settings_by_rule_type block. |

---

##### `RedactPii`<sup>Required</sup> <a name="RedactPii" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLogging.property.redactPii"></a>

```go
RedactPii interface{}
```

- *Type:* interface{}

Redact personally identifiable information from activity logging (PII fields are: source IP, user email, user ID, device ID, URL, referrer, user agent).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_gateway_settings#redact_pii ZeroTrustGatewaySettings#redact_pii}

---

##### `SettingsByRuleType`<sup>Required</sup> <a name="SettingsByRuleType" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLogging.property.settingsByRuleType"></a>

```go
SettingsByRuleType ZeroTrustGatewaySettingsLoggingSettingsByRuleType
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleType">ZeroTrustGatewaySettingsLoggingSettingsByRuleType</a>

settings_by_rule_type block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_gateway_settings#settings_by_rule_type ZeroTrustGatewaySettings#settings_by_rule_type}

---

### ZeroTrustGatewaySettingsLoggingSettingsByRuleType <a name="ZeroTrustGatewaySettingsLoggingSettingsByRuleType" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleType"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleType.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustgatewaysettings"

&zerotrustgatewaysettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleType {
	Dns: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns,
	Http: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp,
	L4: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleType.property.dns">Dns</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns</a></code> | dns block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleType.property.http">Http</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp</a></code> | http block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleType.property.l4">L4</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4</a></code> | l4 block. |

---

##### `Dns`<sup>Required</sup> <a name="Dns" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleType.property.dns"></a>

```go
Dns ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns</a>

dns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_gateway_settings#dns ZeroTrustGatewaySettings#dns}

---

##### `Http`<sup>Required</sup> <a name="Http" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleType.property.http"></a>

```go
Http ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp</a>

http block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_gateway_settings#http ZeroTrustGatewaySettings#http}

---

##### `L4`<sup>Required</sup> <a name="L4" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleType.property.l4"></a>

```go
L4 ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4</a>

l4 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_gateway_settings#l4 ZeroTrustGatewaySettings#l4}

---

### ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns <a name="ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustgatewaysettings"

&zerotrustgatewaysettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns {
	LogAll: interface{},
	LogBlocks: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns.property.logAll">LogAll</a></code> | <code>interface{}</code> | Whether to log all activity. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns.property.logBlocks">LogBlocks</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_gateway_settings#log_blocks ZeroTrustGatewaySettings#log_blocks}. |

---

##### `LogAll`<sup>Required</sup> <a name="LogAll" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns.property.logAll"></a>

```go
LogAll interface{}
```

- *Type:* interface{}

Whether to log all activity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_gateway_settings#log_all ZeroTrustGatewaySettings#log_all}

---

##### `LogBlocks`<sup>Required</sup> <a name="LogBlocks" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns.property.logBlocks"></a>

```go
LogBlocks interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_gateway_settings#log_blocks ZeroTrustGatewaySettings#log_blocks}.

---

### ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp <a name="ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustgatewaysettings"

&zerotrustgatewaysettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp {
	LogAll: interface{},
	LogBlocks: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp.property.logAll">LogAll</a></code> | <code>interface{}</code> | Whether to log all activity. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp.property.logBlocks">LogBlocks</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_gateway_settings#log_blocks ZeroTrustGatewaySettings#log_blocks}. |

---

##### `LogAll`<sup>Required</sup> <a name="LogAll" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp.property.logAll"></a>

```go
LogAll interface{}
```

- *Type:* interface{}

Whether to log all activity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_gateway_settings#log_all ZeroTrustGatewaySettings#log_all}

---

##### `LogBlocks`<sup>Required</sup> <a name="LogBlocks" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp.property.logBlocks"></a>

```go
LogBlocks interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_gateway_settings#log_blocks ZeroTrustGatewaySettings#log_blocks}.

---

### ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4 <a name="ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustgatewaysettings"

&zerotrustgatewaysettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4 {
	LogAll: interface{},
	LogBlocks: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4.property.logAll">LogAll</a></code> | <code>interface{}</code> | Whether to log all activity. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4.property.logBlocks">LogBlocks</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_gateway_settings#log_blocks ZeroTrustGatewaySettings#log_blocks}. |

---

##### `LogAll`<sup>Required</sup> <a name="LogAll" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4.property.logAll"></a>

```go
LogAll interface{}
```

- *Type:* interface{}

Whether to log all activity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_gateway_settings#log_all ZeroTrustGatewaySettings#log_all}

---

##### `LogBlocks`<sup>Required</sup> <a name="LogBlocks" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4.property.logBlocks"></a>

```go
LogBlocks interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_gateway_settings#log_blocks ZeroTrustGatewaySettings#log_blocks}.

---

### ZeroTrustGatewaySettingsPayloadLog <a name="ZeroTrustGatewaySettingsPayloadLog" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLog.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustgatewaysettings"

&zerotrustgatewaysettings.ZeroTrustGatewaySettingsPayloadLog {
	PublicKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLog.property.publicKey">PublicKey</a></code> | <code>*string</code> | Public key used to encrypt matched payloads. |

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLog.property.publicKey"></a>

```go
PublicKey *string
```

- *Type:* *string

Public key used to encrypt matched payloads.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_gateway_settings#public_key ZeroTrustGatewaySettings#public_key}

---

### ZeroTrustGatewaySettingsProxy <a name="ZeroTrustGatewaySettingsProxy" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustgatewaysettings"

&zerotrustgatewaysettings.ZeroTrustGatewaySettingsProxy {
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
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxy.property.disableForTime">DisableForTime</a></code> | <code>*f64</code> | Sets the time limit in seconds that a user can use an override code to bypass WARP. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxy.property.rootCa">RootCa</a></code> | <code>interface{}</code> | Whether root ca is enabled account wide for ZT clients. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxy.property.tcp">Tcp</a></code> | <code>interface{}</code> | Whether gateway proxy is enabled on gateway devices for TCP traffic. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxy.property.udp">Udp</a></code> | <code>interface{}</code> | Whether gateway proxy is enabled on gateway devices for UDP traffic. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxy.property.virtualIp">VirtualIp</a></code> | <code>interface{}</code> | Whether virtual IP (CGNAT) is enabled account wide and will override existing local interface IP for ZT clients. |

---

##### `DisableForTime`<sup>Required</sup> <a name="DisableForTime" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxy.property.disableForTime"></a>

```go
DisableForTime *f64
```

- *Type:* *f64

Sets the time limit in seconds that a user can use an override code to bypass WARP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_gateway_settings#disable_for_time ZeroTrustGatewaySettings#disable_for_time}

---

##### `RootCa`<sup>Required</sup> <a name="RootCa" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxy.property.rootCa"></a>

```go
RootCa interface{}
```

- *Type:* interface{}

Whether root ca is enabled account wide for ZT clients.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_gateway_settings#root_ca ZeroTrustGatewaySettings#root_ca}

---

##### `Tcp`<sup>Required</sup> <a name="Tcp" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxy.property.tcp"></a>

```go
Tcp interface{}
```

- *Type:* interface{}

Whether gateway proxy is enabled on gateway devices for TCP traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_gateway_settings#tcp ZeroTrustGatewaySettings#tcp}

---

##### `Udp`<sup>Required</sup> <a name="Udp" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxy.property.udp"></a>

```go
Udp interface{}
```

- *Type:* interface{}

Whether gateway proxy is enabled on gateway devices for UDP traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_gateway_settings#udp ZeroTrustGatewaySettings#udp}

---

##### `VirtualIp`<sup>Required</sup> <a name="VirtualIp" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxy.property.virtualIp"></a>

```go
VirtualIp interface{}
```

- *Type:* interface{}

Whether virtual IP (CGNAT) is enabled account wide and will override existing local interface IP for ZT clients.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_gateway_settings#virtual_ip ZeroTrustGatewaySettings#virtual_ip}

---

### ZeroTrustGatewaySettingsSshSessionLog <a name="ZeroTrustGatewaySettingsSshSessionLog" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLog.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustgatewaysettings"

&zerotrustgatewaysettings.ZeroTrustGatewaySettingsSshSessionLog {
	PublicKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLog.property.publicKey">PublicKey</a></code> | <code>*string</code> | Public key used to encrypt ssh session. |

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLog.property.publicKey"></a>

```go
PublicKey *string
```

- *Type:* *string

Public key used to encrypt ssh session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_gateway_settings#public_key ZeroTrustGatewaySettings#public_key}

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference <a name="ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustgatewaysettings"

zerotrustgatewaysettings.NewZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.resetMessage">ResetMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.resetSupportUrl">ResetSupportUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetMessage` <a name="ResetMessage" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.resetMessage"></a>

```go
func ResetMessage()
```

##### `ResetSupportUrl` <a name="ResetSupportUrl" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.resetSupportUrl"></a>

```go
func ResetSupportUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.property.messageInput">MessageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.property.supportUrlInput">SupportUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.property.supportUrl">SupportUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettings">ZeroTrustGatewaySettingsAntivirusNotificationSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `MessageInput`<sup>Optional</sup> <a name="MessageInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.property.messageInput"></a>

```go
func MessageInput() *string
```

- *Type:* *string

---

##### `SupportUrlInput`<sup>Optional</sup> <a name="SupportUrlInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.property.supportUrlInput"></a>

```go
func SupportUrlInput() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `SupportUrl`<sup>Required</sup> <a name="SupportUrl" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.property.supportUrl"></a>

```go
func SupportUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() ZeroTrustGatewaySettingsAntivirusNotificationSettings
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettings">ZeroTrustGatewaySettingsAntivirusNotificationSettings</a>

---


### ZeroTrustGatewaySettingsAntivirusOutputReference <a name="ZeroTrustGatewaySettingsAntivirusOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustgatewaysettings"

zerotrustgatewaysettings.NewZeroTrustGatewaySettingsAntivirusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ZeroTrustGatewaySettingsAntivirusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.putNotificationSettings">PutNotificationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.resetNotificationSettings">ResetNotificationSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNotificationSettings` <a name="PutNotificationSettings" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.putNotificationSettings"></a>

```go
func PutNotificationSettings(value ZeroTrustGatewaySettingsAntivirusNotificationSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.putNotificationSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettings">ZeroTrustGatewaySettingsAntivirusNotificationSettings</a>

---

##### `ResetNotificationSettings` <a name="ResetNotificationSettings" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.resetNotificationSettings"></a>

```go
func ResetNotificationSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.property.notificationSettings">NotificationSettings</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference">ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.property.enabledDownloadPhaseInput">EnabledDownloadPhaseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.property.enabledUploadPhaseInput">EnabledUploadPhaseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.property.failClosedInput">FailClosedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.property.notificationSettingsInput">NotificationSettingsInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettings">ZeroTrustGatewaySettingsAntivirusNotificationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.property.enabledDownloadPhase">EnabledDownloadPhase</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.property.enabledUploadPhase">EnabledUploadPhase</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.property.failClosed">FailClosed</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirus">ZeroTrustGatewaySettingsAntivirus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NotificationSettings`<sup>Required</sup> <a name="NotificationSettings" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.property.notificationSettings"></a>

```go
func NotificationSettings() ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference">ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference</a>

---

##### `EnabledDownloadPhaseInput`<sup>Optional</sup> <a name="EnabledDownloadPhaseInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.property.enabledDownloadPhaseInput"></a>

```go
func EnabledDownloadPhaseInput() interface{}
```

- *Type:* interface{}

---

##### `EnabledUploadPhaseInput`<sup>Optional</sup> <a name="EnabledUploadPhaseInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.property.enabledUploadPhaseInput"></a>

```go
func EnabledUploadPhaseInput() interface{}
```

- *Type:* interface{}

---

##### `FailClosedInput`<sup>Optional</sup> <a name="FailClosedInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.property.failClosedInput"></a>

```go
func FailClosedInput() interface{}
```

- *Type:* interface{}

---

##### `NotificationSettingsInput`<sup>Optional</sup> <a name="NotificationSettingsInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.property.notificationSettingsInput"></a>

```go
func NotificationSettingsInput() ZeroTrustGatewaySettingsAntivirusNotificationSettings
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettings">ZeroTrustGatewaySettingsAntivirusNotificationSettings</a>

---

##### `EnabledDownloadPhase`<sup>Required</sup> <a name="EnabledDownloadPhase" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.property.enabledDownloadPhase"></a>

```go
func EnabledDownloadPhase() interface{}
```

- *Type:* interface{}

---

##### `EnabledUploadPhase`<sup>Required</sup> <a name="EnabledUploadPhase" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.property.enabledUploadPhase"></a>

```go
func EnabledUploadPhase() interface{}
```

- *Type:* interface{}

---

##### `FailClosed`<sup>Required</sup> <a name="FailClosed" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.property.failClosed"></a>

```go
func FailClosed() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.property.internalValue"></a>

```go
func InternalValue() ZeroTrustGatewaySettingsAntivirus
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirus">ZeroTrustGatewaySettingsAntivirus</a>

---


### ZeroTrustGatewaySettingsBlockPageOutputReference <a name="ZeroTrustGatewaySettingsBlockPageOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustgatewaysettings"

zerotrustgatewaysettings.NewZeroTrustGatewaySettingsBlockPageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ZeroTrustGatewaySettingsBlockPageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.resetBackgroundColor">ResetBackgroundColor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.resetFooterText">ResetFooterText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.resetHeaderText">ResetHeaderText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.resetLogoPath">ResetLogoPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.resetMailtoAddress">ResetMailtoAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.resetMailtoSubject">ResetMailtoSubject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBackgroundColor` <a name="ResetBackgroundColor" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.resetBackgroundColor"></a>

```go
func ResetBackgroundColor()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetFooterText` <a name="ResetFooterText" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.resetFooterText"></a>

```go
func ResetFooterText()
```

##### `ResetHeaderText` <a name="ResetHeaderText" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.resetHeaderText"></a>

```go
func ResetHeaderText()
```

##### `ResetLogoPath` <a name="ResetLogoPath" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.resetLogoPath"></a>

```go
func ResetLogoPath()
```

##### `ResetMailtoAddress` <a name="ResetMailtoAddress" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.resetMailtoAddress"></a>

```go
func ResetMailtoAddress()
```

##### `ResetMailtoSubject` <a name="ResetMailtoSubject" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.resetMailtoSubject"></a>

```go
func ResetMailtoSubject()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.backgroundColorInput">BackgroundColorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.footerTextInput">FooterTextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.headerTextInput">HeaderTextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.logoPathInput">LogoPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.mailtoAddressInput">MailtoAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.mailtoSubjectInput">MailtoSubjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.backgroundColor">BackgroundColor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.footerText">FooterText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.headerText">HeaderText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.logoPath">LogoPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.mailtoAddress">MailtoAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.mailtoSubject">MailtoSubject</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage">ZeroTrustGatewaySettingsBlockPage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackgroundColorInput`<sup>Optional</sup> <a name="BackgroundColorInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.backgroundColorInput"></a>

```go
func BackgroundColorInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `FooterTextInput`<sup>Optional</sup> <a name="FooterTextInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.footerTextInput"></a>

```go
func FooterTextInput() *string
```

- *Type:* *string

---

##### `HeaderTextInput`<sup>Optional</sup> <a name="HeaderTextInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.headerTextInput"></a>

```go
func HeaderTextInput() *string
```

- *Type:* *string

---

##### `LogoPathInput`<sup>Optional</sup> <a name="LogoPathInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.logoPathInput"></a>

```go
func LogoPathInput() *string
```

- *Type:* *string

---

##### `MailtoAddressInput`<sup>Optional</sup> <a name="MailtoAddressInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.mailtoAddressInput"></a>

```go
func MailtoAddressInput() *string
```

- *Type:* *string

---

##### `MailtoSubjectInput`<sup>Optional</sup> <a name="MailtoSubjectInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.mailtoSubjectInput"></a>

```go
func MailtoSubjectInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `BackgroundColor`<sup>Required</sup> <a name="BackgroundColor" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.backgroundColor"></a>

```go
func BackgroundColor() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `FooterText`<sup>Required</sup> <a name="FooterText" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.footerText"></a>

```go
func FooterText() *string
```

- *Type:* *string

---

##### `HeaderText`<sup>Required</sup> <a name="HeaderText" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.headerText"></a>

```go
func HeaderText() *string
```

- *Type:* *string

---

##### `LogoPath`<sup>Required</sup> <a name="LogoPath" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.logoPath"></a>

```go
func LogoPath() *string
```

- *Type:* *string

---

##### `MailtoAddress`<sup>Required</sup> <a name="MailtoAddress" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.mailtoAddress"></a>

```go
func MailtoAddress() *string
```

- *Type:* *string

---

##### `MailtoSubject`<sup>Required</sup> <a name="MailtoSubject" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.mailtoSubject"></a>

```go
func MailtoSubject() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.internalValue"></a>

```go
func InternalValue() ZeroTrustGatewaySettingsBlockPage
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage">ZeroTrustGatewaySettingsBlockPage</a>

---


### ZeroTrustGatewaySettingsBodyScanningOutputReference <a name="ZeroTrustGatewaySettingsBodyScanningOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustgatewaysettings"

zerotrustgatewaysettings.NewZeroTrustGatewaySettingsBodyScanningOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ZeroTrustGatewaySettingsBodyScanningOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.property.inspectionModeInput">InspectionModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.property.inspectionMode">InspectionMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanning">ZeroTrustGatewaySettingsBodyScanning</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InspectionModeInput`<sup>Optional</sup> <a name="InspectionModeInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.property.inspectionModeInput"></a>

```go
func InspectionModeInput() *string
```

- *Type:* *string

---

##### `InspectionMode`<sup>Required</sup> <a name="InspectionMode" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.property.inspectionMode"></a>

```go
func InspectionMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.property.internalValue"></a>

```go
func InternalValue() ZeroTrustGatewaySettingsBodyScanning
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanning">ZeroTrustGatewaySettingsBodyScanning</a>

---


### ZeroTrustGatewaySettingsCertificateOutputReference <a name="ZeroTrustGatewaySettingsCertificateOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustgatewaysettings"

zerotrustgatewaysettings.NewZeroTrustGatewaySettingsCertificateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ZeroTrustGatewaySettingsCertificateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificate">ZeroTrustGatewaySettingsCertificate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.property.internalValue"></a>

```go
func InternalValue() ZeroTrustGatewaySettingsCertificate
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificate">ZeroTrustGatewaySettingsCertificate</a>

---


### ZeroTrustGatewaySettingsCustomCertificateOutputReference <a name="ZeroTrustGatewaySettingsCustomCertificateOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustgatewaysettings"

zerotrustgatewaysettings.NewZeroTrustGatewaySettingsCustomCertificateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ZeroTrustGatewaySettingsCustomCertificateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.resetId">ResetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.resetId"></a>

```go
func ResetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificate">ZeroTrustGatewaySettingsCustomCertificate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.property.internalValue"></a>

```go
func InternalValue() ZeroTrustGatewaySettingsCustomCertificate
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificate">ZeroTrustGatewaySettingsCustomCertificate</a>

---


### ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference <a name="ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustgatewaysettings"

zerotrustgatewaysettings.NewZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatching">ZeroTrustGatewaySettingsExtendedEmailMatching</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.property.internalValue"></a>

```go
func InternalValue() ZeroTrustGatewaySettingsExtendedEmailMatching
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatching">ZeroTrustGatewaySettingsExtendedEmailMatching</a>

---


### ZeroTrustGatewaySettingsFipsOutputReference <a name="ZeroTrustGatewaySettingsFipsOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustgatewaysettings"

zerotrustgatewaysettings.NewZeroTrustGatewaySettingsFipsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ZeroTrustGatewaySettingsFipsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.resetTls">ResetTls</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTls` <a name="ResetTls" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.resetTls"></a>

```go
func ResetTls()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.property.tlsInput">TlsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.property.tls">Tls</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFips">ZeroTrustGatewaySettingsFips</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TlsInput`<sup>Optional</sup> <a name="TlsInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.property.tlsInput"></a>

```go
func TlsInput() interface{}
```

- *Type:* interface{}

---

##### `Tls`<sup>Required</sup> <a name="Tls" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.property.tls"></a>

```go
func Tls() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.property.internalValue"></a>

```go
func InternalValue() ZeroTrustGatewaySettingsFips
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFips">ZeroTrustGatewaySettingsFips</a>

---


### ZeroTrustGatewaySettingsLoggingOutputReference <a name="ZeroTrustGatewaySettingsLoggingOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustgatewaysettings"

zerotrustgatewaysettings.NewZeroTrustGatewaySettingsLoggingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ZeroTrustGatewaySettingsLoggingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.putSettingsByRuleType">PutSettingsByRuleType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSettingsByRuleType` <a name="PutSettingsByRuleType" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.putSettingsByRuleType"></a>

```go
func PutSettingsByRuleType(value ZeroTrustGatewaySettingsLoggingSettingsByRuleType)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.putSettingsByRuleType.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleType">ZeroTrustGatewaySettingsLoggingSettingsByRuleType</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.property.settingsByRuleType">SettingsByRuleType</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.property.redactPiiInput">RedactPiiInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.property.settingsByRuleTypeInput">SettingsByRuleTypeInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleType">ZeroTrustGatewaySettingsLoggingSettingsByRuleType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.property.redactPii">RedactPii</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLogging">ZeroTrustGatewaySettingsLogging</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SettingsByRuleType`<sup>Required</sup> <a name="SettingsByRuleType" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.property.settingsByRuleType"></a>

```go
func SettingsByRuleType() ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference</a>

---

##### `RedactPiiInput`<sup>Optional</sup> <a name="RedactPiiInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.property.redactPiiInput"></a>

```go
func RedactPiiInput() interface{}
```

- *Type:* interface{}

---

##### `SettingsByRuleTypeInput`<sup>Optional</sup> <a name="SettingsByRuleTypeInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.property.settingsByRuleTypeInput"></a>

```go
func SettingsByRuleTypeInput() ZeroTrustGatewaySettingsLoggingSettingsByRuleType
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleType">ZeroTrustGatewaySettingsLoggingSettingsByRuleType</a>

---

##### `RedactPii`<sup>Required</sup> <a name="RedactPii" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.property.redactPii"></a>

```go
func RedactPii() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.property.internalValue"></a>

```go
func InternalValue() ZeroTrustGatewaySettingsLogging
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLogging">ZeroTrustGatewaySettingsLogging</a>

---


### ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference <a name="ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustgatewaysettings"

zerotrustgatewaysettings.NewZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.property.logAllInput">LogAllInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.property.logBlocksInput">LogBlocksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.property.logAll">LogAll</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.property.logBlocks">LogBlocks</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LogAllInput`<sup>Optional</sup> <a name="LogAllInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.property.logAllInput"></a>

```go
func LogAllInput() interface{}
```

- *Type:* interface{}

---

##### `LogBlocksInput`<sup>Optional</sup> <a name="LogBlocksInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.property.logBlocksInput"></a>

```go
func LogBlocksInput() interface{}
```

- *Type:* interface{}

---

##### `LogAll`<sup>Required</sup> <a name="LogAll" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.property.logAll"></a>

```go
func LogAll() interface{}
```

- *Type:* interface{}

---

##### `LogBlocks`<sup>Required</sup> <a name="LogBlocks" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.property.logBlocks"></a>

```go
func LogBlocks() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.property.internalValue"></a>

```go
func InternalValue() ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns</a>

---


### ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference <a name="ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustgatewaysettings"

zerotrustgatewaysettings.NewZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.property.logAllInput">LogAllInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.property.logBlocksInput">LogBlocksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.property.logAll">LogAll</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.property.logBlocks">LogBlocks</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LogAllInput`<sup>Optional</sup> <a name="LogAllInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.property.logAllInput"></a>

```go
func LogAllInput() interface{}
```

- *Type:* interface{}

---

##### `LogBlocksInput`<sup>Optional</sup> <a name="LogBlocksInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.property.logBlocksInput"></a>

```go
func LogBlocksInput() interface{}
```

- *Type:* interface{}

---

##### `LogAll`<sup>Required</sup> <a name="LogAll" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.property.logAll"></a>

```go
func LogAll() interface{}
```

- *Type:* interface{}

---

##### `LogBlocks`<sup>Required</sup> <a name="LogBlocks" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.property.logBlocks"></a>

```go
func LogBlocks() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.property.internalValue"></a>

```go
func InternalValue() ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp</a>

---


### ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference <a name="ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustgatewaysettings"

zerotrustgatewaysettings.NewZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.property.logAllInput">LogAllInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.property.logBlocksInput">LogBlocksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.property.logAll">LogAll</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.property.logBlocks">LogBlocks</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LogAllInput`<sup>Optional</sup> <a name="LogAllInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.property.logAllInput"></a>

```go
func LogAllInput() interface{}
```

- *Type:* interface{}

---

##### `LogBlocksInput`<sup>Optional</sup> <a name="LogBlocksInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.property.logBlocksInput"></a>

```go
func LogBlocksInput() interface{}
```

- *Type:* interface{}

---

##### `LogAll`<sup>Required</sup> <a name="LogAll" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.property.logAll"></a>

```go
func LogAll() interface{}
```

- *Type:* interface{}

---

##### `LogBlocks`<sup>Required</sup> <a name="LogBlocks" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.property.logBlocks"></a>

```go
func LogBlocks() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.property.internalValue"></a>

```go
func InternalValue() ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4</a>

---


### ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference <a name="ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustgatewaysettings"

zerotrustgatewaysettings.NewZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.putDns">PutDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.putHttp">PutHttp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.putL4">PutL4</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDns` <a name="PutDns" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.putDns"></a>

```go
func PutDns(value ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.putDns.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns</a>

---

##### `PutHttp` <a name="PutHttp" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.putHttp"></a>

```go
func PutHttp(value ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.putHttp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp</a>

---

##### `PutL4` <a name="PutL4" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.putL4"></a>

```go
func PutL4(value ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.putL4.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.property.dns">Dns</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.property.http">Http</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.property.l4">L4</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.property.dnsInput">DnsInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.property.httpInput">HttpInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.property.l4Input">L4Input</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleType">ZeroTrustGatewaySettingsLoggingSettingsByRuleType</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Dns`<sup>Required</sup> <a name="Dns" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.property.dns"></a>

```go
func Dns() ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference</a>

---

##### `Http`<sup>Required</sup> <a name="Http" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.property.http"></a>

```go
func Http() ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference</a>

---

##### `L4`<sup>Required</sup> <a name="L4" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.property.l4"></a>

```go
func L4() ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference</a>

---

##### `DnsInput`<sup>Optional</sup> <a name="DnsInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.property.dnsInput"></a>

```go
func DnsInput() ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns</a>

---

##### `HttpInput`<sup>Optional</sup> <a name="HttpInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.property.httpInput"></a>

```go
func HttpInput() ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp</a>

---

##### `L4Input`<sup>Optional</sup> <a name="L4Input" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.property.l4Input"></a>

```go
func L4Input() ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.property.internalValue"></a>

```go
func InternalValue() ZeroTrustGatewaySettingsLoggingSettingsByRuleType
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleType">ZeroTrustGatewaySettingsLoggingSettingsByRuleType</a>

---


### ZeroTrustGatewaySettingsPayloadLogOutputReference <a name="ZeroTrustGatewaySettingsPayloadLogOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustgatewaysettings"

zerotrustgatewaysettings.NewZeroTrustGatewaySettingsPayloadLogOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ZeroTrustGatewaySettingsPayloadLogOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.property.publicKeyInput">PublicKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.property.publicKey">PublicKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLog">ZeroTrustGatewaySettingsPayloadLog</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PublicKeyInput`<sup>Optional</sup> <a name="PublicKeyInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.property.publicKeyInput"></a>

```go
func PublicKeyInput() *string
```

- *Type:* *string

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.property.publicKey"></a>

```go
func PublicKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.property.internalValue"></a>

```go
func InternalValue() ZeroTrustGatewaySettingsPayloadLog
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLog">ZeroTrustGatewaySettingsPayloadLog</a>

---


### ZeroTrustGatewaySettingsProxyOutputReference <a name="ZeroTrustGatewaySettingsProxyOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustgatewaysettings"

zerotrustgatewaysettings.NewZeroTrustGatewaySettingsProxyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ZeroTrustGatewaySettingsProxyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.disableForTimeInput">DisableForTimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.rootCaInput">RootCaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.tcpInput">TcpInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.udpInput">UdpInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.virtualIpInput">VirtualIpInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.disableForTime">DisableForTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.rootCa">RootCa</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.tcp">Tcp</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.udp">Udp</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.virtualIp">VirtualIp</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxy">ZeroTrustGatewaySettingsProxy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisableForTimeInput`<sup>Optional</sup> <a name="DisableForTimeInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.disableForTimeInput"></a>

```go
func DisableForTimeInput() *f64
```

- *Type:* *f64

---

##### `RootCaInput`<sup>Optional</sup> <a name="RootCaInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.rootCaInput"></a>

```go
func RootCaInput() interface{}
```

- *Type:* interface{}

---

##### `TcpInput`<sup>Optional</sup> <a name="TcpInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.tcpInput"></a>

```go
func TcpInput() interface{}
```

- *Type:* interface{}

---

##### `UdpInput`<sup>Optional</sup> <a name="UdpInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.udpInput"></a>

```go
func UdpInput() interface{}
```

- *Type:* interface{}

---

##### `VirtualIpInput`<sup>Optional</sup> <a name="VirtualIpInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.virtualIpInput"></a>

```go
func VirtualIpInput() interface{}
```

- *Type:* interface{}

---

##### `DisableForTime`<sup>Required</sup> <a name="DisableForTime" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.disableForTime"></a>

```go
func DisableForTime() *f64
```

- *Type:* *f64

---

##### `RootCa`<sup>Required</sup> <a name="RootCa" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.rootCa"></a>

```go
func RootCa() interface{}
```

- *Type:* interface{}

---

##### `Tcp`<sup>Required</sup> <a name="Tcp" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.tcp"></a>

```go
func Tcp() interface{}
```

- *Type:* interface{}

---

##### `Udp`<sup>Required</sup> <a name="Udp" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.udp"></a>

```go
func Udp() interface{}
```

- *Type:* interface{}

---

##### `VirtualIp`<sup>Required</sup> <a name="VirtualIp" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.virtualIp"></a>

```go
func VirtualIp() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.internalValue"></a>

```go
func InternalValue() ZeroTrustGatewaySettingsProxy
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxy">ZeroTrustGatewaySettingsProxy</a>

---


### ZeroTrustGatewaySettingsSshSessionLogOutputReference <a name="ZeroTrustGatewaySettingsSshSessionLogOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustgatewaysettings"

zerotrustgatewaysettings.NewZeroTrustGatewaySettingsSshSessionLogOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ZeroTrustGatewaySettingsSshSessionLogOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.property.publicKeyInput">PublicKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.property.publicKey">PublicKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLog">ZeroTrustGatewaySettingsSshSessionLog</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PublicKeyInput`<sup>Optional</sup> <a name="PublicKeyInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.property.publicKeyInput"></a>

```go
func PublicKeyInput() *string
```

- *Type:* *string

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.property.publicKey"></a>

```go
func PublicKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.property.internalValue"></a>

```go
func InternalValue() ZeroTrustGatewaySettingsSshSessionLog
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLog">ZeroTrustGatewaySettingsSshSessionLog</a>

---



