# `deviceSettingsPolicy` Submodule <a name="`deviceSettingsPolicy` Submodule" id="@cdktf/provider-cloudflare.deviceSettingsPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DeviceSettingsPolicy <a name="DeviceSettingsPolicy" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_settings_policy cloudflare_device_settings_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10/devicesettingspolicy"

devicesettingspolicy.NewDeviceSettingsPolicy(scope Construct, id *string, config DeviceSettingsPolicyConfig) DeviceSettingsPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig">DeviceSettingsPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig">DeviceSettingsPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetAllowedToLeave">ResetAllowedToLeave</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetAllowModeSwitch">ResetAllowModeSwitch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetAllowUpdates">ResetAllowUpdates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetAutoConnect">ResetAutoConnect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetCaptivePortal">ResetCaptivePortal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetDefault">ResetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetDisableAutoFallback">ResetDisableAutoFallback</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetExcludeOfficeIps">ResetExcludeOfficeIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetMatch">ResetMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetPrecedence">ResetPrecedence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetServiceModeV2Mode">ResetServiceModeV2Mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetServiceModeV2Port">ResetServiceModeV2Port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetSupportUrl">ResetSupportUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetSwitchLocked">ResetSwitchLocked</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAllowedToLeave` <a name="ResetAllowedToLeave" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetAllowedToLeave"></a>

```go
func ResetAllowedToLeave()
```

##### `ResetAllowModeSwitch` <a name="ResetAllowModeSwitch" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetAllowModeSwitch"></a>

```go
func ResetAllowModeSwitch()
```

##### `ResetAllowUpdates` <a name="ResetAllowUpdates" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetAllowUpdates"></a>

```go
func ResetAllowUpdates()
```

##### `ResetAutoConnect` <a name="ResetAutoConnect" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetAutoConnect"></a>

```go
func ResetAutoConnect()
```

##### `ResetCaptivePortal` <a name="ResetCaptivePortal" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetCaptivePortal"></a>

```go
func ResetCaptivePortal()
```

##### `ResetDefault` <a name="ResetDefault" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetDefault"></a>

```go
func ResetDefault()
```

##### `ResetDisableAutoFallback` <a name="ResetDisableAutoFallback" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetDisableAutoFallback"></a>

```go
func ResetDisableAutoFallback()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetExcludeOfficeIps` <a name="ResetExcludeOfficeIps" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetExcludeOfficeIps"></a>

```go
func ResetExcludeOfficeIps()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetMatch` <a name="ResetMatch" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetMatch"></a>

```go
func ResetMatch()
```

##### `ResetPrecedence` <a name="ResetPrecedence" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetPrecedence"></a>

```go
func ResetPrecedence()
```

##### `ResetServiceModeV2Mode` <a name="ResetServiceModeV2Mode" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetServiceModeV2Mode"></a>

```go
func ResetServiceModeV2Mode()
```

##### `ResetServiceModeV2Port` <a name="ResetServiceModeV2Port" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetServiceModeV2Port"></a>

```go
func ResetServiceModeV2Port()
```

##### `ResetSupportUrl` <a name="ResetSupportUrl" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetSupportUrl"></a>

```go
func ResetSupportUrl()
```

##### `ResetSwitchLocked` <a name="ResetSwitchLocked" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.resetSwitchLocked"></a>

```go
func ResetSwitchLocked()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DeviceSettingsPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10/devicesettingspolicy"

devicesettingspolicy.DeviceSettingsPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10/devicesettingspolicy"

devicesettingspolicy.DeviceSettingsPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10/devicesettingspolicy"

devicesettingspolicy.DeviceSettingsPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10/devicesettingspolicy"

devicesettingspolicy.DeviceSettingsPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DeviceSettingsPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DeviceSettingsPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DeviceSettingsPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_settings_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DeviceSettingsPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.allowedToLeaveInput">AllowedToLeaveInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.allowModeSwitchInput">AllowModeSwitchInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.allowUpdatesInput">AllowUpdatesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.autoConnectInput">AutoConnectInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.captivePortalInput">CaptivePortalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.defaultInput">DefaultInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.disableAutoFallbackInput">DisableAutoFallbackInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.excludeOfficeIpsInput">ExcludeOfficeIpsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.matchInput">MatchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.precedenceInput">PrecedenceInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.serviceModeV2ModeInput">ServiceModeV2ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.serviceModeV2PortInput">ServiceModeV2PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.supportUrlInput">SupportUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.switchLockedInput">SwitchLockedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.allowedToLeave">AllowedToLeave</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.allowModeSwitch">AllowModeSwitch</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.allowUpdates">AllowUpdates</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.autoConnect">AutoConnect</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.captivePortal">CaptivePortal</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.default">Default</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.disableAutoFallback">DisableAutoFallback</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.excludeOfficeIps">ExcludeOfficeIps</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.match">Match</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.precedence">Precedence</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.serviceModeV2Mode">ServiceModeV2Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.serviceModeV2Port">ServiceModeV2Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.supportUrl">SupportUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.switchLocked">SwitchLocked</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `AllowedToLeaveInput`<sup>Optional</sup> <a name="AllowedToLeaveInput" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.allowedToLeaveInput"></a>

```go
func AllowedToLeaveInput() interface{}
```

- *Type:* interface{}

---

##### `AllowModeSwitchInput`<sup>Optional</sup> <a name="AllowModeSwitchInput" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.allowModeSwitchInput"></a>

```go
func AllowModeSwitchInput() interface{}
```

- *Type:* interface{}

---

##### `AllowUpdatesInput`<sup>Optional</sup> <a name="AllowUpdatesInput" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.allowUpdatesInput"></a>

```go
func AllowUpdatesInput() interface{}
```

- *Type:* interface{}

---

##### `AutoConnectInput`<sup>Optional</sup> <a name="AutoConnectInput" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.autoConnectInput"></a>

```go
func AutoConnectInput() *f64
```

- *Type:* *f64

---

##### `CaptivePortalInput`<sup>Optional</sup> <a name="CaptivePortalInput" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.captivePortalInput"></a>

```go
func CaptivePortalInput() *f64
```

- *Type:* *f64

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.defaultInput"></a>

```go
func DefaultInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisableAutoFallbackInput`<sup>Optional</sup> <a name="DisableAutoFallbackInput" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.disableAutoFallbackInput"></a>

```go
func DisableAutoFallbackInput() interface{}
```

- *Type:* interface{}

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ExcludeOfficeIpsInput`<sup>Optional</sup> <a name="ExcludeOfficeIpsInput" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.excludeOfficeIpsInput"></a>

```go
func ExcludeOfficeIpsInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MatchInput`<sup>Optional</sup> <a name="MatchInput" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.matchInput"></a>

```go
func MatchInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PrecedenceInput`<sup>Optional</sup> <a name="PrecedenceInput" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.precedenceInput"></a>

```go
func PrecedenceInput() *f64
```

- *Type:* *f64

---

##### `ServiceModeV2ModeInput`<sup>Optional</sup> <a name="ServiceModeV2ModeInput" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.serviceModeV2ModeInput"></a>

```go
func ServiceModeV2ModeInput() *string
```

- *Type:* *string

---

##### `ServiceModeV2PortInput`<sup>Optional</sup> <a name="ServiceModeV2PortInput" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.serviceModeV2PortInput"></a>

```go
func ServiceModeV2PortInput() *f64
```

- *Type:* *f64

---

##### `SupportUrlInput`<sup>Optional</sup> <a name="SupportUrlInput" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.supportUrlInput"></a>

```go
func SupportUrlInput() *string
```

- *Type:* *string

---

##### `SwitchLockedInput`<sup>Optional</sup> <a name="SwitchLockedInput" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.switchLockedInput"></a>

```go
func SwitchLockedInput() interface{}
```

- *Type:* interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `AllowedToLeave`<sup>Required</sup> <a name="AllowedToLeave" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.allowedToLeave"></a>

```go
func AllowedToLeave() interface{}
```

- *Type:* interface{}

---

##### `AllowModeSwitch`<sup>Required</sup> <a name="AllowModeSwitch" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.allowModeSwitch"></a>

```go
func AllowModeSwitch() interface{}
```

- *Type:* interface{}

---

##### `AllowUpdates`<sup>Required</sup> <a name="AllowUpdates" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.allowUpdates"></a>

```go
func AllowUpdates() interface{}
```

- *Type:* interface{}

---

##### `AutoConnect`<sup>Required</sup> <a name="AutoConnect" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.autoConnect"></a>

```go
func AutoConnect() *f64
```

- *Type:* *f64

---

##### `CaptivePortal`<sup>Required</sup> <a name="CaptivePortal" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.captivePortal"></a>

```go
func CaptivePortal() *f64
```

- *Type:* *f64

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.default"></a>

```go
func Default() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisableAutoFallback`<sup>Required</sup> <a name="DisableAutoFallback" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.disableAutoFallback"></a>

```go
func DisableAutoFallback() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `ExcludeOfficeIps`<sup>Required</sup> <a name="ExcludeOfficeIps" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.excludeOfficeIps"></a>

```go
func ExcludeOfficeIps() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.match"></a>

```go
func Match() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Precedence`<sup>Required</sup> <a name="Precedence" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.precedence"></a>

```go
func Precedence() *f64
```

- *Type:* *f64

---

##### `ServiceModeV2Mode`<sup>Required</sup> <a name="ServiceModeV2Mode" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.serviceModeV2Mode"></a>

```go
func ServiceModeV2Mode() *string
```

- *Type:* *string

---

##### `ServiceModeV2Port`<sup>Required</sup> <a name="ServiceModeV2Port" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.serviceModeV2Port"></a>

```go
func ServiceModeV2Port() *f64
```

- *Type:* *f64

---

##### `SupportUrl`<sup>Required</sup> <a name="SupportUrl" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.supportUrl"></a>

```go
func SupportUrl() *string
```

- *Type:* *string

---

##### `SwitchLocked`<sup>Required</sup> <a name="SwitchLocked" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.switchLocked"></a>

```go
func SwitchLocked() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DeviceSettingsPolicyConfig <a name="DeviceSettingsPolicyConfig" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10/devicesettingspolicy"

&devicesettingspolicy.DeviceSettingsPolicyConfig {
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
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.accountId">AccountId</a></code> | <code>*string</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.description">Description</a></code> | <code>*string</code> | Description of Policy. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.name">Name</a></code> | <code>*string</code> | Name of the policy. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.allowedToLeave">AllowedToLeave</a></code> | <code>interface{}</code> | Whether to allow devices to leave the organization. Defaults to `true`. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.allowModeSwitch">AllowModeSwitch</a></code> | <code>interface{}</code> | Whether to allow mode switch for this policy. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.allowUpdates">AllowUpdates</a></code> | <code>interface{}</code> | Whether to allow updates under this policy. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.autoConnect">AutoConnect</a></code> | <code>*f64</code> | The amount of time in minutes to reconnect after having been disabled. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.captivePortal">CaptivePortal</a></code> | <code>*f64</code> | The captive portal value for this policy. Defaults to `180`. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.default">Default</a></code> | <code>interface{}</code> | Whether the policy refers to the default account policy. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.disableAutoFallback">DisableAutoFallback</a></code> | <code>interface{}</code> | Whether to disable auto fallback for this policy. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether the policy is enabled (cannot be set for default policies). Defaults to `true`. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.excludeOfficeIps">ExcludeOfficeIps</a></code> | <code>interface{}</code> | Whether to add Microsoft IPs to split tunnel exclusions. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_settings_policy#id DeviceSettingsPolicy#id}. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.match">Match</a></code> | <code>*string</code> | Wirefilter expression to match a device against when evaluating whether this policy should take effect for that device. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.precedence">Precedence</a></code> | <code>*f64</code> | The precedence of the policy. Lower values indicate higher precedence. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.serviceModeV2Mode">ServiceModeV2Mode</a></code> | <code>*string</code> | The service mode. Available values: `1dot1`, `warp`, `proxy`, `posture_only`, `warp_tunnel_only`. Defaults to `warp`. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.serviceModeV2Port">ServiceModeV2Port</a></code> | <code>*f64</code> | The port to use for the proxy service mode. Required when using `service_mode_v2_mode`. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.supportUrl">SupportUrl</a></code> | <code>*string</code> | The support URL that will be opened when sending feedback. |
| <code><a href="#@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.switchLocked">SwitchLocked</a></code> | <code>interface{}</code> | Enablement of the ZT client switch lock. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_settings_policy#account_id DeviceSettingsPolicy#account_id}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_settings_policy#description DeviceSettingsPolicy#description}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_settings_policy#name DeviceSettingsPolicy#name}

---

##### `AllowedToLeave`<sup>Optional</sup> <a name="AllowedToLeave" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.allowedToLeave"></a>

```go
AllowedToLeave interface{}
```

- *Type:* interface{}

Whether to allow devices to leave the organization. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_settings_policy#allowed_to_leave DeviceSettingsPolicy#allowed_to_leave}

---

##### `AllowModeSwitch`<sup>Optional</sup> <a name="AllowModeSwitch" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.allowModeSwitch"></a>

```go
AllowModeSwitch interface{}
```

- *Type:* interface{}

Whether to allow mode switch for this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_settings_policy#allow_mode_switch DeviceSettingsPolicy#allow_mode_switch}

---

##### `AllowUpdates`<sup>Optional</sup> <a name="AllowUpdates" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.allowUpdates"></a>

```go
AllowUpdates interface{}
```

- *Type:* interface{}

Whether to allow updates under this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_settings_policy#allow_updates DeviceSettingsPolicy#allow_updates}

---

##### `AutoConnect`<sup>Optional</sup> <a name="AutoConnect" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.autoConnect"></a>

```go
AutoConnect *f64
```

- *Type:* *f64

The amount of time in minutes to reconnect after having been disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_settings_policy#auto_connect DeviceSettingsPolicy#auto_connect}

---

##### `CaptivePortal`<sup>Optional</sup> <a name="CaptivePortal" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.captivePortal"></a>

```go
CaptivePortal *f64
```

- *Type:* *f64

The captive portal value for this policy. Defaults to `180`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_settings_policy#captive_portal DeviceSettingsPolicy#captive_portal}

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.default"></a>

```go
Default interface{}
```

- *Type:* interface{}

Whether the policy refers to the default account policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_settings_policy#default DeviceSettingsPolicy#default}

---

##### `DisableAutoFallback`<sup>Optional</sup> <a name="DisableAutoFallback" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.disableAutoFallback"></a>

```go
DisableAutoFallback interface{}
```

- *Type:* interface{}

Whether to disable auto fallback for this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_settings_policy#disable_auto_fallback DeviceSettingsPolicy#disable_auto_fallback}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether the policy is enabled (cannot be set for default policies). Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_settings_policy#enabled DeviceSettingsPolicy#enabled}

---

##### `ExcludeOfficeIps`<sup>Optional</sup> <a name="ExcludeOfficeIps" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.excludeOfficeIps"></a>

```go
ExcludeOfficeIps interface{}
```

- *Type:* interface{}

Whether to add Microsoft IPs to split tunnel exclusions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_settings_policy#exclude_office_ips DeviceSettingsPolicy#exclude_office_ips}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_settings_policy#id DeviceSettingsPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Match`<sup>Optional</sup> <a name="Match" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.match"></a>

```go
Match *string
```

- *Type:* *string

Wirefilter expression to match a device against when evaluating whether this policy should take effect for that device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_settings_policy#match DeviceSettingsPolicy#match}

---

##### `Precedence`<sup>Optional</sup> <a name="Precedence" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.precedence"></a>

```go
Precedence *f64
```

- *Type:* *f64

The precedence of the policy. Lower values indicate higher precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_settings_policy#precedence DeviceSettingsPolicy#precedence}

---

##### `ServiceModeV2Mode`<sup>Optional</sup> <a name="ServiceModeV2Mode" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.serviceModeV2Mode"></a>

```go
ServiceModeV2Mode *string
```

- *Type:* *string

The service mode. Available values: `1dot1`, `warp`, `proxy`, `posture_only`, `warp_tunnel_only`. Defaults to `warp`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_settings_policy#service_mode_v2_mode DeviceSettingsPolicy#service_mode_v2_mode}

---

##### `ServiceModeV2Port`<sup>Optional</sup> <a name="ServiceModeV2Port" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.serviceModeV2Port"></a>

```go
ServiceModeV2Port *f64
```

- *Type:* *f64

The port to use for the proxy service mode. Required when using `service_mode_v2_mode`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_settings_policy#service_mode_v2_port DeviceSettingsPolicy#service_mode_v2_port}

---

##### `SupportUrl`<sup>Optional</sup> <a name="SupportUrl" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.supportUrl"></a>

```go
SupportUrl *string
```

- *Type:* *string

The support URL that will be opened when sending feedback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_settings_policy#support_url DeviceSettingsPolicy#support_url}

---

##### `SwitchLocked`<sup>Optional</sup> <a name="SwitchLocked" id="@cdktf/provider-cloudflare.deviceSettingsPolicy.DeviceSettingsPolicyConfig.property.switchLocked"></a>

```go
SwitchLocked interface{}
```

- *Type:* interface{}

Enablement of the ZT client switch lock.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_settings_policy#switch_locked DeviceSettingsPolicy#switch_locked}

---



