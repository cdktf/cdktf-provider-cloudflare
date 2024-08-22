# `zeroTrustDeviceProfiles` Submodule <a name="`zeroTrustDeviceProfiles` Submodule" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustDeviceProfiles <a name="ZeroTrustDeviceProfiles" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_device_profiles cloudflare_zero_trust_device_profiles}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zerotrustdeviceprofiles"

zerotrustdeviceprofiles.NewZeroTrustDeviceProfiles(scope Construct, id *string, config ZeroTrustDeviceProfilesConfig) ZeroTrustDeviceProfiles
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig">ZeroTrustDeviceProfilesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig">ZeroTrustDeviceProfilesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetAllowedToLeave">ResetAllowedToLeave</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetAllowModeSwitch">ResetAllowModeSwitch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetAllowUpdates">ResetAllowUpdates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetAutoConnect">ResetAutoConnect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetCaptivePortal">ResetCaptivePortal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetDefault">ResetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetDisableAutoFallback">ResetDisableAutoFallback</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetExcludeOfficeIps">ResetExcludeOfficeIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetMatch">ResetMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetPrecedence">ResetPrecedence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetServiceModeV2Mode">ResetServiceModeV2Mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetServiceModeV2Port">ResetServiceModeV2Port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetSupportUrl">ResetSupportUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetSwitchLocked">ResetSwitchLocked</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetTunnelProtocol">ResetTunnelProtocol</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAllowedToLeave` <a name="ResetAllowedToLeave" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetAllowedToLeave"></a>

```go
func ResetAllowedToLeave()
```

##### `ResetAllowModeSwitch` <a name="ResetAllowModeSwitch" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetAllowModeSwitch"></a>

```go
func ResetAllowModeSwitch()
```

##### `ResetAllowUpdates` <a name="ResetAllowUpdates" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetAllowUpdates"></a>

```go
func ResetAllowUpdates()
```

##### `ResetAutoConnect` <a name="ResetAutoConnect" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetAutoConnect"></a>

```go
func ResetAutoConnect()
```

##### `ResetCaptivePortal` <a name="ResetCaptivePortal" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetCaptivePortal"></a>

```go
func ResetCaptivePortal()
```

##### `ResetDefault` <a name="ResetDefault" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetDefault"></a>

```go
func ResetDefault()
```

##### `ResetDisableAutoFallback` <a name="ResetDisableAutoFallback" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetDisableAutoFallback"></a>

```go
func ResetDisableAutoFallback()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetExcludeOfficeIps` <a name="ResetExcludeOfficeIps" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetExcludeOfficeIps"></a>

```go
func ResetExcludeOfficeIps()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetId"></a>

```go
func ResetId()
```

##### `ResetMatch` <a name="ResetMatch" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetMatch"></a>

```go
func ResetMatch()
```

##### `ResetPrecedence` <a name="ResetPrecedence" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetPrecedence"></a>

```go
func ResetPrecedence()
```

##### `ResetServiceModeV2Mode` <a name="ResetServiceModeV2Mode" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetServiceModeV2Mode"></a>

```go
func ResetServiceModeV2Mode()
```

##### `ResetServiceModeV2Port` <a name="ResetServiceModeV2Port" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetServiceModeV2Port"></a>

```go
func ResetServiceModeV2Port()
```

##### `ResetSupportUrl` <a name="ResetSupportUrl" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetSupportUrl"></a>

```go
func ResetSupportUrl()
```

##### `ResetSwitchLocked` <a name="ResetSwitchLocked" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetSwitchLocked"></a>

```go
func ResetSwitchLocked()
```

##### `ResetTunnelProtocol` <a name="ResetTunnelProtocol" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetTunnelProtocol"></a>

```go
func ResetTunnelProtocol()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ZeroTrustDeviceProfiles resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zerotrustdeviceprofiles"

zerotrustdeviceprofiles.ZeroTrustDeviceProfiles_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zerotrustdeviceprofiles"

zerotrustdeviceprofiles.ZeroTrustDeviceProfiles_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zerotrustdeviceprofiles"

zerotrustdeviceprofiles.ZeroTrustDeviceProfiles_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zerotrustdeviceprofiles"

zerotrustdeviceprofiles.ZeroTrustDeviceProfiles_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ZeroTrustDeviceProfiles resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ZeroTrustDeviceProfiles to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ZeroTrustDeviceProfiles that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_device_profiles#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustDeviceProfiles to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.allowedToLeaveInput">AllowedToLeaveInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.allowModeSwitchInput">AllowModeSwitchInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.allowUpdatesInput">AllowUpdatesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.autoConnectInput">AutoConnectInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.captivePortalInput">CaptivePortalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.defaultInput">DefaultInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.disableAutoFallbackInput">DisableAutoFallbackInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.excludeOfficeIpsInput">ExcludeOfficeIpsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.matchInput">MatchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.precedenceInput">PrecedenceInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.serviceModeV2ModeInput">ServiceModeV2ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.serviceModeV2PortInput">ServiceModeV2PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.supportUrlInput">SupportUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.switchLockedInput">SwitchLockedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.tunnelProtocolInput">TunnelProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.allowedToLeave">AllowedToLeave</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.allowModeSwitch">AllowModeSwitch</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.allowUpdates">AllowUpdates</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.autoConnect">AutoConnect</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.captivePortal">CaptivePortal</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.default">Default</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.disableAutoFallback">DisableAutoFallback</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.excludeOfficeIps">ExcludeOfficeIps</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.match">Match</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.precedence">Precedence</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.serviceModeV2Mode">ServiceModeV2Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.serviceModeV2Port">ServiceModeV2Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.supportUrl">SupportUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.switchLocked">SwitchLocked</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.tunnelProtocol">TunnelProtocol</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `AllowedToLeaveInput`<sup>Optional</sup> <a name="AllowedToLeaveInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.allowedToLeaveInput"></a>

```go
func AllowedToLeaveInput() interface{}
```

- *Type:* interface{}

---

##### `AllowModeSwitchInput`<sup>Optional</sup> <a name="AllowModeSwitchInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.allowModeSwitchInput"></a>

```go
func AllowModeSwitchInput() interface{}
```

- *Type:* interface{}

---

##### `AllowUpdatesInput`<sup>Optional</sup> <a name="AllowUpdatesInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.allowUpdatesInput"></a>

```go
func AllowUpdatesInput() interface{}
```

- *Type:* interface{}

---

##### `AutoConnectInput`<sup>Optional</sup> <a name="AutoConnectInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.autoConnectInput"></a>

```go
func AutoConnectInput() *f64
```

- *Type:* *f64

---

##### `CaptivePortalInput`<sup>Optional</sup> <a name="CaptivePortalInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.captivePortalInput"></a>

```go
func CaptivePortalInput() *f64
```

- *Type:* *f64

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.defaultInput"></a>

```go
func DefaultInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisableAutoFallbackInput`<sup>Optional</sup> <a name="DisableAutoFallbackInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.disableAutoFallbackInput"></a>

```go
func DisableAutoFallbackInput() interface{}
```

- *Type:* interface{}

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ExcludeOfficeIpsInput`<sup>Optional</sup> <a name="ExcludeOfficeIpsInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.excludeOfficeIpsInput"></a>

```go
func ExcludeOfficeIpsInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MatchInput`<sup>Optional</sup> <a name="MatchInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.matchInput"></a>

```go
func MatchInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PrecedenceInput`<sup>Optional</sup> <a name="PrecedenceInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.precedenceInput"></a>

```go
func PrecedenceInput() *f64
```

- *Type:* *f64

---

##### `ServiceModeV2ModeInput`<sup>Optional</sup> <a name="ServiceModeV2ModeInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.serviceModeV2ModeInput"></a>

```go
func ServiceModeV2ModeInput() *string
```

- *Type:* *string

---

##### `ServiceModeV2PortInput`<sup>Optional</sup> <a name="ServiceModeV2PortInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.serviceModeV2PortInput"></a>

```go
func ServiceModeV2PortInput() *f64
```

- *Type:* *f64

---

##### `SupportUrlInput`<sup>Optional</sup> <a name="SupportUrlInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.supportUrlInput"></a>

```go
func SupportUrlInput() *string
```

- *Type:* *string

---

##### `SwitchLockedInput`<sup>Optional</sup> <a name="SwitchLockedInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.switchLockedInput"></a>

```go
func SwitchLockedInput() interface{}
```

- *Type:* interface{}

---

##### `TunnelProtocolInput`<sup>Optional</sup> <a name="TunnelProtocolInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.tunnelProtocolInput"></a>

```go
func TunnelProtocolInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `AllowedToLeave`<sup>Required</sup> <a name="AllowedToLeave" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.allowedToLeave"></a>

```go
func AllowedToLeave() interface{}
```

- *Type:* interface{}

---

##### `AllowModeSwitch`<sup>Required</sup> <a name="AllowModeSwitch" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.allowModeSwitch"></a>

```go
func AllowModeSwitch() interface{}
```

- *Type:* interface{}

---

##### `AllowUpdates`<sup>Required</sup> <a name="AllowUpdates" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.allowUpdates"></a>

```go
func AllowUpdates() interface{}
```

- *Type:* interface{}

---

##### `AutoConnect`<sup>Required</sup> <a name="AutoConnect" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.autoConnect"></a>

```go
func AutoConnect() *f64
```

- *Type:* *f64

---

##### `CaptivePortal`<sup>Required</sup> <a name="CaptivePortal" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.captivePortal"></a>

```go
func CaptivePortal() *f64
```

- *Type:* *f64

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.default"></a>

```go
func Default() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisableAutoFallback`<sup>Required</sup> <a name="DisableAutoFallback" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.disableAutoFallback"></a>

```go
func DisableAutoFallback() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `ExcludeOfficeIps`<sup>Required</sup> <a name="ExcludeOfficeIps" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.excludeOfficeIps"></a>

```go
func ExcludeOfficeIps() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.match"></a>

```go
func Match() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Precedence`<sup>Required</sup> <a name="Precedence" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.precedence"></a>

```go
func Precedence() *f64
```

- *Type:* *f64

---

##### `ServiceModeV2Mode`<sup>Required</sup> <a name="ServiceModeV2Mode" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.serviceModeV2Mode"></a>

```go
func ServiceModeV2Mode() *string
```

- *Type:* *string

---

##### `ServiceModeV2Port`<sup>Required</sup> <a name="ServiceModeV2Port" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.serviceModeV2Port"></a>

```go
func ServiceModeV2Port() *f64
```

- *Type:* *f64

---

##### `SupportUrl`<sup>Required</sup> <a name="SupportUrl" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.supportUrl"></a>

```go
func SupportUrl() *string
```

- *Type:* *string

---

##### `SwitchLocked`<sup>Required</sup> <a name="SwitchLocked" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.switchLocked"></a>

```go
func SwitchLocked() interface{}
```

- *Type:* interface{}

---

##### `TunnelProtocol`<sup>Required</sup> <a name="TunnelProtocol" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.tunnelProtocol"></a>

```go
func TunnelProtocol() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustDeviceProfilesConfig <a name="ZeroTrustDeviceProfilesConfig" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zerotrustdeviceprofiles"

&zerotrustdeviceprofiles.ZeroTrustDeviceProfilesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	Description: *string,
	Name: *string,
	AllowedToLeave: interface{},
	AllowModeSwitch: interface{},
	AllowUpdates: interface{},
	AutoConnect: *f64,
	CaptivePortal: *f64,
	Default: interface{},
	DisableAutoFallback: interface{},
	Enabled: interface{},
	ExcludeOfficeIps: interface{},
	Id: *string,
	Match: *string,
	Precedence: *f64,
	ServiceModeV2Mode: *string,
	ServiceModeV2Port: *f64,
	SupportUrl: *string,
	SwitchLocked: interface{},
	TunnelProtocol: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.accountId">AccountId</a></code> | <code>*string</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.description">Description</a></code> | <code>*string</code> | Description of Policy. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.name">Name</a></code> | <code>*string</code> | Name of the policy. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.allowedToLeave">AllowedToLeave</a></code> | <code>interface{}</code> | Whether to allow devices to leave the organization. Defaults to `true`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.allowModeSwitch">AllowModeSwitch</a></code> | <code>interface{}</code> | Whether to allow mode switch for this policy. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.allowUpdates">AllowUpdates</a></code> | <code>interface{}</code> | Whether to allow updates under this policy. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.autoConnect">AutoConnect</a></code> | <code>*f64</code> | The amount of time in seconds to reconnect after having been disabled. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.captivePortal">CaptivePortal</a></code> | <code>*f64</code> | The captive portal value for this policy. Defaults to `180`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.default">Default</a></code> | <code>interface{}</code> | Whether the policy refers to the default account policy. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.disableAutoFallback">DisableAutoFallback</a></code> | <code>interface{}</code> | Whether to disable auto fallback for this policy. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether the policy is enabled (cannot be set for default policies). Defaults to `true`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.excludeOfficeIps">ExcludeOfficeIps</a></code> | <code>interface{}</code> | Whether to add Microsoft IPs to split tunnel exclusions. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_device_profiles#id ZeroTrustDeviceProfiles#id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.match">Match</a></code> | <code>*string</code> | Wirefilter expression to match a device against when evaluating whether this policy should take effect for that device. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.precedence">Precedence</a></code> | <code>*f64</code> | The precedence of the policy. Lower values indicate higher precedence. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.serviceModeV2Mode">ServiceModeV2Mode</a></code> | <code>*string</code> | The service mode. Available values: `1dot1`, `warp`, `proxy`, `posture_only`, `warp_tunnel_only`. Defaults to `warp`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.serviceModeV2Port">ServiceModeV2Port</a></code> | <code>*f64</code> | The port to use for the proxy service mode. Required when using `service_mode_v2_mode`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.supportUrl">SupportUrl</a></code> | <code>*string</code> | The support URL that will be opened when sending feedback. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.switchLocked">SwitchLocked</a></code> | <code>interface{}</code> | Enablement of the ZT client switch lock. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.tunnelProtocol">TunnelProtocol</a></code> | <code>*string</code> | Determines which tunnel protocol to use. Available values: `""`, `wireguard`, `masque`. Defaults to `wireguard`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_device_profiles#account_id ZeroTrustDeviceProfiles#account_id}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_device_profiles#description ZeroTrustDeviceProfiles#description}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_device_profiles#name ZeroTrustDeviceProfiles#name}

---

##### `AllowedToLeave`<sup>Optional</sup> <a name="AllowedToLeave" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.allowedToLeave"></a>

```go
AllowedToLeave interface{}
```

- *Type:* interface{}

Whether to allow devices to leave the organization. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_device_profiles#allowed_to_leave ZeroTrustDeviceProfiles#allowed_to_leave}

---

##### `AllowModeSwitch`<sup>Optional</sup> <a name="AllowModeSwitch" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.allowModeSwitch"></a>

```go
AllowModeSwitch interface{}
```

- *Type:* interface{}

Whether to allow mode switch for this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_device_profiles#allow_mode_switch ZeroTrustDeviceProfiles#allow_mode_switch}

---

##### `AllowUpdates`<sup>Optional</sup> <a name="AllowUpdates" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.allowUpdates"></a>

```go
AllowUpdates interface{}
```

- *Type:* interface{}

Whether to allow updates under this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_device_profiles#allow_updates ZeroTrustDeviceProfiles#allow_updates}

---

##### `AutoConnect`<sup>Optional</sup> <a name="AutoConnect" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.autoConnect"></a>

```go
AutoConnect *f64
```

- *Type:* *f64

The amount of time in seconds to reconnect after having been disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_device_profiles#auto_connect ZeroTrustDeviceProfiles#auto_connect}

---

##### `CaptivePortal`<sup>Optional</sup> <a name="CaptivePortal" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.captivePortal"></a>

```go
CaptivePortal *f64
```

- *Type:* *f64

The captive portal value for this policy. Defaults to `180`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_device_profiles#captive_portal ZeroTrustDeviceProfiles#captive_portal}

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.default"></a>

```go
Default interface{}
```

- *Type:* interface{}

Whether the policy refers to the default account policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_device_profiles#default ZeroTrustDeviceProfiles#default}

---

##### `DisableAutoFallback`<sup>Optional</sup> <a name="DisableAutoFallback" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.disableAutoFallback"></a>

```go
DisableAutoFallback interface{}
```

- *Type:* interface{}

Whether to disable auto fallback for this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_device_profiles#disable_auto_fallback ZeroTrustDeviceProfiles#disable_auto_fallback}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether the policy is enabled (cannot be set for default policies). Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_device_profiles#enabled ZeroTrustDeviceProfiles#enabled}

---

##### `ExcludeOfficeIps`<sup>Optional</sup> <a name="ExcludeOfficeIps" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.excludeOfficeIps"></a>

```go
ExcludeOfficeIps interface{}
```

- *Type:* interface{}

Whether to add Microsoft IPs to split tunnel exclusions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_device_profiles#exclude_office_ips ZeroTrustDeviceProfiles#exclude_office_ips}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_device_profiles#id ZeroTrustDeviceProfiles#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Match`<sup>Optional</sup> <a name="Match" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.match"></a>

```go
Match *string
```

- *Type:* *string

Wirefilter expression to match a device against when evaluating whether this policy should take effect for that device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_device_profiles#match ZeroTrustDeviceProfiles#match}

---

##### `Precedence`<sup>Optional</sup> <a name="Precedence" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.precedence"></a>

```go
Precedence *f64
```

- *Type:* *f64

The precedence of the policy. Lower values indicate higher precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_device_profiles#precedence ZeroTrustDeviceProfiles#precedence}

---

##### `ServiceModeV2Mode`<sup>Optional</sup> <a name="ServiceModeV2Mode" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.serviceModeV2Mode"></a>

```go
ServiceModeV2Mode *string
```

- *Type:* *string

The service mode. Available values: `1dot1`, `warp`, `proxy`, `posture_only`, `warp_tunnel_only`. Defaults to `warp`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_device_profiles#service_mode_v2_mode ZeroTrustDeviceProfiles#service_mode_v2_mode}

---

##### `ServiceModeV2Port`<sup>Optional</sup> <a name="ServiceModeV2Port" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.serviceModeV2Port"></a>

```go
ServiceModeV2Port *f64
```

- *Type:* *f64

The port to use for the proxy service mode. Required when using `service_mode_v2_mode`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_device_profiles#service_mode_v2_port ZeroTrustDeviceProfiles#service_mode_v2_port}

---

##### `SupportUrl`<sup>Optional</sup> <a name="SupportUrl" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.supportUrl"></a>

```go
SupportUrl *string
```

- *Type:* *string

The support URL that will be opened when sending feedback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_device_profiles#support_url ZeroTrustDeviceProfiles#support_url}

---

##### `SwitchLocked`<sup>Optional</sup> <a name="SwitchLocked" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.switchLocked"></a>

```go
SwitchLocked interface{}
```

- *Type:* interface{}

Enablement of the ZT client switch lock.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_device_profiles#switch_locked ZeroTrustDeviceProfiles#switch_locked}

---

##### `TunnelProtocol`<sup>Optional</sup> <a name="TunnelProtocol" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.tunnelProtocol"></a>

```go
TunnelProtocol *string
```

- *Type:* *string

Determines which tunnel protocol to use. Available values: `""`, `wireguard`, `masque`. Defaults to `wireguard`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_device_profiles#tunnel_protocol ZeroTrustDeviceProfiles#tunnel_protocol}

---



