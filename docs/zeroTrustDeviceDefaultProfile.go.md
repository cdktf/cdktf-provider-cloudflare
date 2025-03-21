# `zeroTrustDeviceDefaultProfile` Submodule <a name="`zeroTrustDeviceDefaultProfile` Submodule" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustDeviceDefaultProfile <a name="ZeroTrustDeviceDefaultProfile" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_device_default_profile cloudflare_zero_trust_device_default_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustdevicedefaultprofile"

zerotrustdevicedefaultprofile.NewZeroTrustDeviceDefaultProfile(scope Construct, id *string, config ZeroTrustDeviceDefaultProfileConfig) ZeroTrustDeviceDefaultProfile
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig">ZeroTrustDeviceDefaultProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig">ZeroTrustDeviceDefaultProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.putExclude">PutExclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.putInclude">PutInclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.putServiceModeV2">PutServiceModeV2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetAllowedToLeave">ResetAllowedToLeave</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetAllowModeSwitch">ResetAllowModeSwitch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetAllowUpdates">ResetAllowUpdates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetAutoConnect">ResetAutoConnect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetCaptivePortal">ResetCaptivePortal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetDisableAutoFallback">ResetDisableAutoFallback</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetExclude">ResetExclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetExcludeOfficeIps">ResetExcludeOfficeIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetInclude">ResetInclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetRegisterInterfaceIpWithDns">ResetRegisterInterfaceIpWithDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetServiceModeV2">ResetServiceModeV2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetSupportUrl">ResetSupportUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetSwitchLocked">ResetSwitchLocked</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetTunnelProtocol">ResetTunnelProtocol</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutExclude` <a name="PutExclude" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.putExclude"></a>

```go
func PutExclude(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.putExclude.parameter.value"></a>

- *Type:* interface{}

---

##### `PutInclude` <a name="PutInclude" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.putInclude"></a>

```go
func PutInclude(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.putInclude.parameter.value"></a>

- *Type:* interface{}

---

##### `PutServiceModeV2` <a name="PutServiceModeV2" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.putServiceModeV2"></a>

```go
func PutServiceModeV2(value ZeroTrustDeviceDefaultProfileServiceModeV2)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.putServiceModeV2.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2">ZeroTrustDeviceDefaultProfileServiceModeV2</a>

---

##### `ResetAllowedToLeave` <a name="ResetAllowedToLeave" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetAllowedToLeave"></a>

```go
func ResetAllowedToLeave()
```

##### `ResetAllowModeSwitch` <a name="ResetAllowModeSwitch" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetAllowModeSwitch"></a>

```go
func ResetAllowModeSwitch()
```

##### `ResetAllowUpdates` <a name="ResetAllowUpdates" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetAllowUpdates"></a>

```go
func ResetAllowUpdates()
```

##### `ResetAutoConnect` <a name="ResetAutoConnect" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetAutoConnect"></a>

```go
func ResetAutoConnect()
```

##### `ResetCaptivePortal` <a name="ResetCaptivePortal" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetCaptivePortal"></a>

```go
func ResetCaptivePortal()
```

##### `ResetDisableAutoFallback` <a name="ResetDisableAutoFallback" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetDisableAutoFallback"></a>

```go
func ResetDisableAutoFallback()
```

##### `ResetExclude` <a name="ResetExclude" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetExclude"></a>

```go
func ResetExclude()
```

##### `ResetExcludeOfficeIps` <a name="ResetExcludeOfficeIps" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetExcludeOfficeIps"></a>

```go
func ResetExcludeOfficeIps()
```

##### `ResetInclude` <a name="ResetInclude" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetInclude"></a>

```go
func ResetInclude()
```

##### `ResetRegisterInterfaceIpWithDns` <a name="ResetRegisterInterfaceIpWithDns" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetRegisterInterfaceIpWithDns"></a>

```go
func ResetRegisterInterfaceIpWithDns()
```

##### `ResetServiceModeV2` <a name="ResetServiceModeV2" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetServiceModeV2"></a>

```go
func ResetServiceModeV2()
```

##### `ResetSupportUrl` <a name="ResetSupportUrl" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetSupportUrl"></a>

```go
func ResetSupportUrl()
```

##### `ResetSwitchLocked` <a name="ResetSwitchLocked" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetSwitchLocked"></a>

```go
func ResetSwitchLocked()
```

##### `ResetTunnelProtocol` <a name="ResetTunnelProtocol" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetTunnelProtocol"></a>

```go
func ResetTunnelProtocol()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ZeroTrustDeviceDefaultProfile resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustdevicedefaultprofile"

zerotrustdevicedefaultprofile.ZeroTrustDeviceDefaultProfile_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustdevicedefaultprofile"

zerotrustdevicedefaultprofile.ZeroTrustDeviceDefaultProfile_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustdevicedefaultprofile"

zerotrustdevicedefaultprofile.ZeroTrustDeviceDefaultProfile_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustdevicedefaultprofile"

zerotrustdevicedefaultprofile.ZeroTrustDeviceDefaultProfile_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ZeroTrustDeviceDefaultProfile resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ZeroTrustDeviceDefaultProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ZeroTrustDeviceDefaultProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_device_default_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustDeviceDefaultProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.default">Default</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.exclude">Exclude</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList">ZeroTrustDeviceDefaultProfileExcludeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.fallbackDomains">FallbackDomains</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList">ZeroTrustDeviceDefaultProfileFallbackDomainsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.gatewayUniqueId">GatewayUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.include">Include</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList">ZeroTrustDeviceDefaultProfileIncludeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.serviceModeV2">ServiceModeV2</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference">ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.allowedToLeaveInput">AllowedToLeaveInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.allowModeSwitchInput">AllowModeSwitchInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.allowUpdatesInput">AllowUpdatesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.autoConnectInput">AutoConnectInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.captivePortalInput">CaptivePortalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.disableAutoFallbackInput">DisableAutoFallbackInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.excludeInput">ExcludeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.excludeOfficeIpsInput">ExcludeOfficeIpsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.includeInput">IncludeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.registerInterfaceIpWithDnsInput">RegisterInterfaceIpWithDnsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.serviceModeV2Input">ServiceModeV2Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.supportUrlInput">SupportUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.switchLockedInput">SwitchLockedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.tunnelProtocolInput">TunnelProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.allowedToLeave">AllowedToLeave</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.allowModeSwitch">AllowModeSwitch</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.allowUpdates">AllowUpdates</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.autoConnect">AutoConnect</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.captivePortal">CaptivePortal</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.disableAutoFallback">DisableAutoFallback</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.excludeOfficeIps">ExcludeOfficeIps</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.registerInterfaceIpWithDns">RegisterInterfaceIpWithDns</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.supportUrl">SupportUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.switchLocked">SwitchLocked</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.tunnelProtocol">TunnelProtocol</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.default"></a>

```go
func Default() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Exclude`<sup>Required</sup> <a name="Exclude" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.exclude"></a>

```go
func Exclude() ZeroTrustDeviceDefaultProfileExcludeList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList">ZeroTrustDeviceDefaultProfileExcludeList</a>

---

##### `FallbackDomains`<sup>Required</sup> <a name="FallbackDomains" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.fallbackDomains"></a>

```go
func FallbackDomains() ZeroTrustDeviceDefaultProfileFallbackDomainsList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList">ZeroTrustDeviceDefaultProfileFallbackDomainsList</a>

---

##### `GatewayUniqueId`<sup>Required</sup> <a name="GatewayUniqueId" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.gatewayUniqueId"></a>

```go
func GatewayUniqueId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.include"></a>

```go
func Include() ZeroTrustDeviceDefaultProfileIncludeList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList">ZeroTrustDeviceDefaultProfileIncludeList</a>

---

##### `ServiceModeV2`<sup>Required</sup> <a name="ServiceModeV2" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.serviceModeV2"></a>

```go
func ServiceModeV2() ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference">ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `AllowedToLeaveInput`<sup>Optional</sup> <a name="AllowedToLeaveInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.allowedToLeaveInput"></a>

```go
func AllowedToLeaveInput() interface{}
```

- *Type:* interface{}

---

##### `AllowModeSwitchInput`<sup>Optional</sup> <a name="AllowModeSwitchInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.allowModeSwitchInput"></a>

```go
func AllowModeSwitchInput() interface{}
```

- *Type:* interface{}

---

##### `AllowUpdatesInput`<sup>Optional</sup> <a name="AllowUpdatesInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.allowUpdatesInput"></a>

```go
func AllowUpdatesInput() interface{}
```

- *Type:* interface{}

---

##### `AutoConnectInput`<sup>Optional</sup> <a name="AutoConnectInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.autoConnectInput"></a>

```go
func AutoConnectInput() *f64
```

- *Type:* *f64

---

##### `CaptivePortalInput`<sup>Optional</sup> <a name="CaptivePortalInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.captivePortalInput"></a>

```go
func CaptivePortalInput() *f64
```

- *Type:* *f64

---

##### `DisableAutoFallbackInput`<sup>Optional</sup> <a name="DisableAutoFallbackInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.disableAutoFallbackInput"></a>

```go
func DisableAutoFallbackInput() interface{}
```

- *Type:* interface{}

---

##### `ExcludeInput`<sup>Optional</sup> <a name="ExcludeInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.excludeInput"></a>

```go
func ExcludeInput() interface{}
```

- *Type:* interface{}

---

##### `ExcludeOfficeIpsInput`<sup>Optional</sup> <a name="ExcludeOfficeIpsInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.excludeOfficeIpsInput"></a>

```go
func ExcludeOfficeIpsInput() interface{}
```

- *Type:* interface{}

---

##### `IncludeInput`<sup>Optional</sup> <a name="IncludeInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.includeInput"></a>

```go
func IncludeInput() interface{}
```

- *Type:* interface{}

---

##### `RegisterInterfaceIpWithDnsInput`<sup>Optional</sup> <a name="RegisterInterfaceIpWithDnsInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.registerInterfaceIpWithDnsInput"></a>

```go
func RegisterInterfaceIpWithDnsInput() interface{}
```

- *Type:* interface{}

---

##### `ServiceModeV2Input`<sup>Optional</sup> <a name="ServiceModeV2Input" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.serviceModeV2Input"></a>

```go
func ServiceModeV2Input() interface{}
```

- *Type:* interface{}

---

##### `SupportUrlInput`<sup>Optional</sup> <a name="SupportUrlInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.supportUrlInput"></a>

```go
func SupportUrlInput() *string
```

- *Type:* *string

---

##### `SwitchLockedInput`<sup>Optional</sup> <a name="SwitchLockedInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.switchLockedInput"></a>

```go
func SwitchLockedInput() interface{}
```

- *Type:* interface{}

---

##### `TunnelProtocolInput`<sup>Optional</sup> <a name="TunnelProtocolInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.tunnelProtocolInput"></a>

```go
func TunnelProtocolInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `AllowedToLeave`<sup>Required</sup> <a name="AllowedToLeave" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.allowedToLeave"></a>

```go
func AllowedToLeave() interface{}
```

- *Type:* interface{}

---

##### `AllowModeSwitch`<sup>Required</sup> <a name="AllowModeSwitch" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.allowModeSwitch"></a>

```go
func AllowModeSwitch() interface{}
```

- *Type:* interface{}

---

##### `AllowUpdates`<sup>Required</sup> <a name="AllowUpdates" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.allowUpdates"></a>

```go
func AllowUpdates() interface{}
```

- *Type:* interface{}

---

##### `AutoConnect`<sup>Required</sup> <a name="AutoConnect" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.autoConnect"></a>

```go
func AutoConnect() *f64
```

- *Type:* *f64

---

##### `CaptivePortal`<sup>Required</sup> <a name="CaptivePortal" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.captivePortal"></a>

```go
func CaptivePortal() *f64
```

- *Type:* *f64

---

##### `DisableAutoFallback`<sup>Required</sup> <a name="DisableAutoFallback" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.disableAutoFallback"></a>

```go
func DisableAutoFallback() interface{}
```

- *Type:* interface{}

---

##### `ExcludeOfficeIps`<sup>Required</sup> <a name="ExcludeOfficeIps" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.excludeOfficeIps"></a>

```go
func ExcludeOfficeIps() interface{}
```

- *Type:* interface{}

---

##### `RegisterInterfaceIpWithDns`<sup>Required</sup> <a name="RegisterInterfaceIpWithDns" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.registerInterfaceIpWithDns"></a>

```go
func RegisterInterfaceIpWithDns() interface{}
```

- *Type:* interface{}

---

##### `SupportUrl`<sup>Required</sup> <a name="SupportUrl" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.supportUrl"></a>

```go
func SupportUrl() *string
```

- *Type:* *string

---

##### `SwitchLocked`<sup>Required</sup> <a name="SwitchLocked" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.switchLocked"></a>

```go
func SwitchLocked() interface{}
```

- *Type:* interface{}

---

##### `TunnelProtocol`<sup>Required</sup> <a name="TunnelProtocol" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.tunnelProtocol"></a>

```go
func TunnelProtocol() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustDeviceDefaultProfileConfig <a name="ZeroTrustDeviceDefaultProfileConfig" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustdevicedefaultprofile"

&zerotrustdevicedefaultprofile.ZeroTrustDeviceDefaultProfileConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	AllowedToLeave: interface{},
	AllowModeSwitch: interface{},
	AllowUpdates: interface{},
	AutoConnect: *f64,
	CaptivePortal: *f64,
	DisableAutoFallback: interface{},
	Exclude: interface{},
	ExcludeOfficeIps: interface{},
	Include: interface{},
	RegisterInterfaceIpWithDns: interface{},
	ServiceModeV2: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2,
	SupportUrl: *string,
	SwitchLocked: interface{},
	TunnelProtocol: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_device_default_profile#account_id ZeroTrustDeviceDefaultProfile#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.allowedToLeave">AllowedToLeave</a></code> | <code>interface{}</code> | Whether to allow devices to leave the organization. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.allowModeSwitch">AllowModeSwitch</a></code> | <code>interface{}</code> | Whether to allow the user to switch WARP between modes. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.allowUpdates">AllowUpdates</a></code> | <code>interface{}</code> | Whether to receive update notifications when a new version of the client is available. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.autoConnect">AutoConnect</a></code> | <code>*f64</code> | The amount of time in seconds to reconnect after having been disabled. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.captivePortal">CaptivePortal</a></code> | <code>*f64</code> | Turn on the captive portal after the specified amount of time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.disableAutoFallback">DisableAutoFallback</a></code> | <code>interface{}</code> | If the `dns_server` field of a fallback domain is not present, the client will fall back to a best guess of the default/system DNS resolvers unless this policy option is set to `true`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.exclude">Exclude</a></code> | <code>interface{}</code> | List of routes excluded in the WARP client's tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.excludeOfficeIps">ExcludeOfficeIps</a></code> | <code>interface{}</code> | Whether to add Microsoft IPs to Split Tunnel exclusions. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.include">Include</a></code> | <code>interface{}</code> | List of routes included in the WARP client's tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.registerInterfaceIpWithDns">RegisterInterfaceIpWithDns</a></code> | <code>interface{}</code> | Determines if the operating system will register WARP's local interface IP with your on-premises DNS server. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.serviceModeV2">ServiceModeV2</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2">ZeroTrustDeviceDefaultProfileServiceModeV2</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_device_default_profile#service_mode_v2 ZeroTrustDeviceDefaultProfile#service_mode_v2}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.supportUrl">SupportUrl</a></code> | <code>*string</code> | The URL to launch when the Send Feedback button is clicked. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.switchLocked">SwitchLocked</a></code> | <code>interface{}</code> | Whether to allow the user to turn off the WARP switch and disconnect the client. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.tunnelProtocol">TunnelProtocol</a></code> | <code>*string</code> | Determines which tunnel protocol to use. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_device_default_profile#account_id ZeroTrustDeviceDefaultProfile#account_id}.

---

##### `AllowedToLeave`<sup>Optional</sup> <a name="AllowedToLeave" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.allowedToLeave"></a>

```go
AllowedToLeave interface{}
```

- *Type:* interface{}

Whether to allow devices to leave the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_device_default_profile#allowed_to_leave ZeroTrustDeviceDefaultProfile#allowed_to_leave}

---

##### `AllowModeSwitch`<sup>Optional</sup> <a name="AllowModeSwitch" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.allowModeSwitch"></a>

```go
AllowModeSwitch interface{}
```

- *Type:* interface{}

Whether to allow the user to switch WARP between modes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_device_default_profile#allow_mode_switch ZeroTrustDeviceDefaultProfile#allow_mode_switch}

---

##### `AllowUpdates`<sup>Optional</sup> <a name="AllowUpdates" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.allowUpdates"></a>

```go
AllowUpdates interface{}
```

- *Type:* interface{}

Whether to receive update notifications when a new version of the client is available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_device_default_profile#allow_updates ZeroTrustDeviceDefaultProfile#allow_updates}

---

##### `AutoConnect`<sup>Optional</sup> <a name="AutoConnect" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.autoConnect"></a>

```go
AutoConnect *f64
```

- *Type:* *f64

The amount of time in seconds to reconnect after having been disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_device_default_profile#auto_connect ZeroTrustDeviceDefaultProfile#auto_connect}

---

##### `CaptivePortal`<sup>Optional</sup> <a name="CaptivePortal" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.captivePortal"></a>

```go
CaptivePortal *f64
```

- *Type:* *f64

Turn on the captive portal after the specified amount of time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_device_default_profile#captive_portal ZeroTrustDeviceDefaultProfile#captive_portal}

---

##### `DisableAutoFallback`<sup>Optional</sup> <a name="DisableAutoFallback" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.disableAutoFallback"></a>

```go
DisableAutoFallback interface{}
```

- *Type:* interface{}

If the `dns_server` field of a fallback domain is not present, the client will fall back to a best guess of the default/system DNS resolvers unless this policy option is set to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_device_default_profile#disable_auto_fallback ZeroTrustDeviceDefaultProfile#disable_auto_fallback}

---

##### `Exclude`<sup>Optional</sup> <a name="Exclude" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.exclude"></a>

```go
Exclude interface{}
```

- *Type:* interface{}

List of routes excluded in the WARP client's tunnel.

Both 'exclude' and 'include' cannot be set in the same request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_device_default_profile#exclude ZeroTrustDeviceDefaultProfile#exclude}

---

##### `ExcludeOfficeIps`<sup>Optional</sup> <a name="ExcludeOfficeIps" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.excludeOfficeIps"></a>

```go
ExcludeOfficeIps interface{}
```

- *Type:* interface{}

Whether to add Microsoft IPs to Split Tunnel exclusions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_device_default_profile#exclude_office_ips ZeroTrustDeviceDefaultProfile#exclude_office_ips}

---

##### `Include`<sup>Optional</sup> <a name="Include" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.include"></a>

```go
Include interface{}
```

- *Type:* interface{}

List of routes included in the WARP client's tunnel.

Both 'exclude' and 'include' cannot be set in the same request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_device_default_profile#include ZeroTrustDeviceDefaultProfile#include}

---

##### `RegisterInterfaceIpWithDns`<sup>Optional</sup> <a name="RegisterInterfaceIpWithDns" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.registerInterfaceIpWithDns"></a>

```go
RegisterInterfaceIpWithDns interface{}
```

- *Type:* interface{}

Determines if the operating system will register WARP's local interface IP with your on-premises DNS server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_device_default_profile#register_interface_ip_with_dns ZeroTrustDeviceDefaultProfile#register_interface_ip_with_dns}

---

##### `ServiceModeV2`<sup>Optional</sup> <a name="ServiceModeV2" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.serviceModeV2"></a>

```go
ServiceModeV2 ZeroTrustDeviceDefaultProfileServiceModeV2
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2">ZeroTrustDeviceDefaultProfileServiceModeV2</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_device_default_profile#service_mode_v2 ZeroTrustDeviceDefaultProfile#service_mode_v2}.

---

##### `SupportUrl`<sup>Optional</sup> <a name="SupportUrl" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.supportUrl"></a>

```go
SupportUrl *string
```

- *Type:* *string

The URL to launch when the Send Feedback button is clicked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_device_default_profile#support_url ZeroTrustDeviceDefaultProfile#support_url}

---

##### `SwitchLocked`<sup>Optional</sup> <a name="SwitchLocked" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.switchLocked"></a>

```go
SwitchLocked interface{}
```

- *Type:* interface{}

Whether to allow the user to turn off the WARP switch and disconnect the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_device_default_profile#switch_locked ZeroTrustDeviceDefaultProfile#switch_locked}

---

##### `TunnelProtocol`<sup>Optional</sup> <a name="TunnelProtocol" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.tunnelProtocol"></a>

```go
TunnelProtocol *string
```

- *Type:* *string

Determines which tunnel protocol to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_device_default_profile#tunnel_protocol ZeroTrustDeviceDefaultProfile#tunnel_protocol}

---

### ZeroTrustDeviceDefaultProfileExclude <a name="ZeroTrustDeviceDefaultProfileExclude" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExclude"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExclude.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustdevicedefaultprofile"

&zerotrustdevicedefaultprofile.ZeroTrustDeviceDefaultProfileExclude {
	Address: *string,
	Description: *string,
	Host: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExclude.property.address">Address</a></code> | <code>*string</code> | The address in CIDR format to exclude from the tunnel. If `address` is present, `host` must not be present. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExclude.property.description">Description</a></code> | <code>*string</code> | A description of the Split Tunnel item, displayed in the client UI. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExclude.property.host">Host</a></code> | <code>*string</code> | The domain name to exclude from the tunnel. If `host` is present, `address` must not be present. |

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExclude.property.address"></a>

```go
Address *string
```

- *Type:* *string

The address in CIDR format to exclude from the tunnel. If `address` is present, `host` must not be present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_device_default_profile#address ZeroTrustDeviceDefaultProfile#address}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExclude.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description of the Split Tunnel item, displayed in the client UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_device_default_profile#description ZeroTrustDeviceDefaultProfile#description}

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExclude.property.host"></a>

```go
Host *string
```

- *Type:* *string

The domain name to exclude from the tunnel. If `host` is present, `address` must not be present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_device_default_profile#host ZeroTrustDeviceDefaultProfile#host}

---

### ZeroTrustDeviceDefaultProfileFallbackDomains <a name="ZeroTrustDeviceDefaultProfileFallbackDomains" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomains"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomains.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustdevicedefaultprofile"

&zerotrustdevicedefaultprofile.ZeroTrustDeviceDefaultProfileFallbackDomains {

}
```


### ZeroTrustDeviceDefaultProfileInclude <a name="ZeroTrustDeviceDefaultProfileInclude" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileInclude"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileInclude.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustdevicedefaultprofile"

&zerotrustdevicedefaultprofile.ZeroTrustDeviceDefaultProfileInclude {
	Address: *string,
	Description: *string,
	Host: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileInclude.property.address">Address</a></code> | <code>*string</code> | The address in CIDR format to exclude from the tunnel. If `address` is present, `host` must not be present. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileInclude.property.description">Description</a></code> | <code>*string</code> | A description of the Split Tunnel item, displayed in the client UI. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileInclude.property.host">Host</a></code> | <code>*string</code> | The domain name to exclude from the tunnel. If `host` is present, `address` must not be present. |

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileInclude.property.address"></a>

```go
Address *string
```

- *Type:* *string

The address in CIDR format to exclude from the tunnel. If `address` is present, `host` must not be present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_device_default_profile#address ZeroTrustDeviceDefaultProfile#address}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileInclude.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description of the Split Tunnel item, displayed in the client UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_device_default_profile#description ZeroTrustDeviceDefaultProfile#description}

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileInclude.property.host"></a>

```go
Host *string
```

- *Type:* *string

The domain name to exclude from the tunnel. If `host` is present, `address` must not be present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_device_default_profile#host ZeroTrustDeviceDefaultProfile#host}

---

### ZeroTrustDeviceDefaultProfileServiceModeV2 <a name="ZeroTrustDeviceDefaultProfileServiceModeV2" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustdevicedefaultprofile"

&zerotrustdevicedefaultprofile.ZeroTrustDeviceDefaultProfileServiceModeV2 {
	Mode: *string,
	Port: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2.property.mode">Mode</a></code> | <code>*string</code> | The mode to run the WARP client under. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2.property.port">Port</a></code> | <code>*f64</code> | The port number when used with proxy mode. |

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

The mode to run the WARP client under.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_device_default_profile#mode ZeroTrustDeviceDefaultProfile#mode}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

The port number when used with proxy mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_device_default_profile#port ZeroTrustDeviceDefaultProfile#port}

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustDeviceDefaultProfileExcludeList <a name="ZeroTrustDeviceDefaultProfileExcludeList" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustdevicedefaultprofile"

zerotrustdevicedefaultprofile.NewZeroTrustDeviceDefaultProfileExcludeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ZeroTrustDeviceDefaultProfileExcludeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.get"></a>

```go
func Get(index *f64) ZeroTrustDeviceDefaultProfileExcludeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustDeviceDefaultProfileExcludeOutputReference <a name="ZeroTrustDeviceDefaultProfileExcludeOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustdevicedefaultprofile"

zerotrustdevicedefaultprofile.NewZeroTrustDeviceDefaultProfileExcludeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ZeroTrustDeviceDefaultProfileExcludeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.resetHost">ResetHost</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHost` <a name="ResetHost" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.resetHost"></a>

```go
func ResetHost()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.property.addressInput">AddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.property.hostInput">HostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.property.addressInput"></a>

```go
func AddressInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.property.hostInput"></a>

```go
func HostInput() *string
```

- *Type:* *string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustDeviceDefaultProfileFallbackDomainsList <a name="ZeroTrustDeviceDefaultProfileFallbackDomainsList" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustdevicedefaultprofile"

zerotrustdevicedefaultprofile.NewZeroTrustDeviceDefaultProfileFallbackDomainsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ZeroTrustDeviceDefaultProfileFallbackDomainsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.get"></a>

```go
func Get(index *f64) ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference <a name="ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustdevicedefaultprofile"

zerotrustdevicedefaultprofile.NewZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.property.dnsServer">DnsServer</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.property.suffix">Suffix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomains">ZeroTrustDeviceDefaultProfileFallbackDomains</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DnsServer`<sup>Required</sup> <a name="DnsServer" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.property.dnsServer"></a>

```go
func DnsServer() *[]*string
```

- *Type:* *[]*string

---

##### `Suffix`<sup>Required</sup> <a name="Suffix" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.property.suffix"></a>

```go
func Suffix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.property.internalValue"></a>

```go
func InternalValue() ZeroTrustDeviceDefaultProfileFallbackDomains
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomains">ZeroTrustDeviceDefaultProfileFallbackDomains</a>

---


### ZeroTrustDeviceDefaultProfileIncludeList <a name="ZeroTrustDeviceDefaultProfileIncludeList" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustdevicedefaultprofile"

zerotrustdevicedefaultprofile.NewZeroTrustDeviceDefaultProfileIncludeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ZeroTrustDeviceDefaultProfileIncludeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.get"></a>

```go
func Get(index *f64) ZeroTrustDeviceDefaultProfileIncludeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustDeviceDefaultProfileIncludeOutputReference <a name="ZeroTrustDeviceDefaultProfileIncludeOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustdevicedefaultprofile"

zerotrustdevicedefaultprofile.NewZeroTrustDeviceDefaultProfileIncludeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ZeroTrustDeviceDefaultProfileIncludeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.resetHost">ResetHost</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHost` <a name="ResetHost" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.resetHost"></a>

```go
func ResetHost()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.property.addressInput">AddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.property.hostInput">HostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.property.addressInput"></a>

```go
func AddressInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.property.hostInput"></a>

```go
func HostInput() *string
```

- *Type:* *string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference <a name="ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustdevicedefaultprofile"

zerotrustdevicedefaultprofile.NewZeroTrustDeviceDefaultProfileServiceModeV2OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.resetPort">ResetPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.resetMode"></a>

```go
func ResetMode()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.resetPort"></a>

```go
func ResetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



