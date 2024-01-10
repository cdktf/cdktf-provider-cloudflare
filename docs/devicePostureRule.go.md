# `devicePostureRule` Submodule <a name="`devicePostureRule` Submodule" id="@cdktf/provider-cloudflare.devicePostureRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevicePostureRule <a name="DevicePostureRule" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_posture_rule cloudflare_device_posture_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/deviceposturerule"

deviceposturerule.NewDevicePostureRule(scope Construct, id *string, config DevicePostureRuleConfig) DevicePostureRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig">DevicePostureRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig">DevicePostureRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.putInput">PutInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.putMatch">PutMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.resetExpiration">ResetExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.resetInput">ResetInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.resetMatch">ResetMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.resetSchedule">ResetSchedule</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutInput` <a name="PutInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.putInput"></a>

```go
func PutInput(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.putInput.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMatch` <a name="PutMatch" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.putMatch"></a>

```go
func PutMatch(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.putMatch.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetExpiration` <a name="ResetExpiration" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.resetExpiration"></a>

```go
func ResetExpiration()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.resetId"></a>

```go
func ResetId()
```

##### `ResetInput` <a name="ResetInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.resetInput"></a>

```go
func ResetInput()
```

##### `ResetMatch` <a name="ResetMatch" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.resetMatch"></a>

```go
func ResetMatch()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.resetName"></a>

```go
func ResetName()
```

##### `ResetSchedule` <a name="ResetSchedule" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.resetSchedule"></a>

```go
func ResetSchedule()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DevicePostureRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/deviceposturerule"

deviceposturerule.DevicePostureRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/deviceposturerule"

deviceposturerule.DevicePostureRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/deviceposturerule"

deviceposturerule.DevicePostureRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/deviceposturerule"

deviceposturerule.DevicePostureRule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DevicePostureRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DevicePostureRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DevicePostureRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_posture_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DevicePostureRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.input">Input</a></code> | <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList">DevicePostureRuleInputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.match">Match</a></code> | <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList">DevicePostureRuleMatchList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.expirationInput">ExpirationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.inputInput">InputInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.matchInput">MatchInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.scheduleInput">ScheduleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.expiration">Expiration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.schedule">Schedule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.input"></a>

```go
func Input() DevicePostureRuleInputList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList">DevicePostureRuleInputList</a>

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.match"></a>

```go
func Match() DevicePostureRuleMatchList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList">DevicePostureRuleMatchList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpirationInput`<sup>Optional</sup> <a name="ExpirationInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.expirationInput"></a>

```go
func ExpirationInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InputInput`<sup>Optional</sup> <a name="InputInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.inputInput"></a>

```go
func InputInput() interface{}
```

- *Type:* interface{}

---

##### `MatchInput`<sup>Optional</sup> <a name="MatchInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.matchInput"></a>

```go
func MatchInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.scheduleInput"></a>

```go
func ScheduleInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Expiration`<sup>Required</sup> <a name="Expiration" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.expiration"></a>

```go
func Expiration() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.schedule"></a>

```go
func Schedule() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DevicePostureRuleConfig <a name="DevicePostureRuleConfig" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/deviceposturerule"

&deviceposturerule.DevicePostureRuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	Type: *string,
	Description: *string,
	Expiration: *string,
	Id: *string,
	Input: interface{},
	Match: interface{},
	Name: *string,
	Schedule: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.accountId">AccountId</a></code> | <code>*string</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.type">Type</a></code> | <code>*string</code> | The device posture rule type. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_posture_rule#description DevicePostureRule#description}. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.expiration">Expiration</a></code> | <code>*string</code> | Expire posture results after the specified amount of time. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_posture_rule#id DevicePostureRule#id}. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.input">Input</a></code> | <code>interface{}</code> | input block. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.match">Match</a></code> | <code>interface{}</code> | match block. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.name">Name</a></code> | <code>*string</code> | Name of the device posture rule. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.schedule">Schedule</a></code> | <code>*string</code> | Tells the client when to run the device posture check. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_posture_rule#account_id DevicePostureRule#account_id}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

The device posture rule type.

Available values: `serial_number`, `file`, `application`, `gateway`, `warp`, `domain_joined`, `os_version`, `disk_encryption`, `firewall`, `client_certificate`, `workspace_one`, `unique_client_id`, `crowdstrike_s2s`, `sentinelone`, `kolide`, `tanium_s2s`, `intune`, `sentinelone_s2s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_posture_rule#type DevicePostureRule#type}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_posture_rule#description DevicePostureRule#description}.

---

##### `Expiration`<sup>Optional</sup> <a name="Expiration" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.expiration"></a>

```go
Expiration *string
```

- *Type:* *string

Expire posture results after the specified amount of time.

Must be in the format `1h` or `30m`. Valid units are `h` and `m`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_posture_rule#expiration DevicePostureRule#expiration}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_posture_rule#id DevicePostureRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Input`<sup>Optional</sup> <a name="Input" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.input"></a>

```go
Input interface{}
```

- *Type:* interface{}

input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_posture_rule#input DevicePostureRule#input}

---

##### `Match`<sup>Optional</sup> <a name="Match" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.match"></a>

```go
Match interface{}
```

- *Type:* interface{}

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_posture_rule#match DevicePostureRule#match}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the device posture rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_posture_rule#name DevicePostureRule#name}

---

##### `Schedule`<sup>Optional</sup> <a name="Schedule" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.schedule"></a>

```go
Schedule *string
```

- *Type:* *string

Tells the client when to run the device posture check.

Must be in the format `1h` or `30m`. Valid units are `h` and `m`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_posture_rule#schedule DevicePostureRule#schedule}

---

### DevicePostureRuleInput <a name="DevicePostureRuleInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/deviceposturerule"

&deviceposturerule.DevicePostureRuleInput {
	ActiveThreats: *f64,
	CertificateId: *string,
	CheckDisks: *[]*string,
	Cn: *string,
	ComplianceStatus: *string,
	ConnectionId: *string,
	CountOperator: *string,
	Domain: *string,
	EidLastSeen: *string,
	Enabled: interface{},
	Exists: interface{},
	Id: *string,
	Infected: interface{},
	IsActive: interface{},
	IssueCount: *string,
	NetworkStatus: *string,
	Operator: *string,
	Os: *string,
	OsDistroName: *string,
	OsDistroRevision: *string,
	Overall: *string,
	Path: *string,
	RequireAll: interface{},
	RiskLevel: *string,
	Running: interface{},
	SensorConfig: *string,
	Sha256: *string,
	Thumbprint: *string,
	TotalScore: *f64,
	Version: *string,
	VersionOperator: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.activeThreats">ActiveThreats</a></code> | <code>*f64</code> | The number of active threats from SentinelOne. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.certificateId">CertificateId</a></code> | <code>*string</code> | The UUID of a Cloudflare managed certificate. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.checkDisks">CheckDisks</a></code> | <code>*[]*string</code> | Specific volume(s) to check for encryption. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.cn">Cn</a></code> | <code>*string</code> | The common name for a certificate. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.complianceStatus">ComplianceStatus</a></code> | <code>*string</code> | The workspace one device compliance status. Available values: `compliant`, `noncompliant`. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.connectionId">ConnectionId</a></code> | <code>*string</code> | The workspace one connection id. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.countOperator">CountOperator</a></code> | <code>*string</code> | The count comparison operator for kolide. Available values: `>`, `>=`, `<`, `<=`, `==`. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.domain">Domain</a></code> | <code>*string</code> | The domain that the client must join. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.eidLastSeen">EidLastSeen</a></code> | <code>*string</code> | The datetime a device last seen in RFC 3339 format from Tanium. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.enabled">Enabled</a></code> | <code>interface{}</code> | True if the firewall must be enabled. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.exists">Exists</a></code> | <code>interface{}</code> | Checks if the file should exist. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.id">Id</a></code> | <code>*string</code> | The Teams List id. Required for `serial_number` and `unique_client_id` rule types. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.infected">Infected</a></code> | <code>interface{}</code> | True if SentinelOne device is infected. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.isActive">IsActive</a></code> | <code>interface{}</code> | True if SentinelOne device is active. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.issueCount">IssueCount</a></code> | <code>*string</code> | The number of issues for kolide. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.networkStatus">NetworkStatus</a></code> | <code>*string</code> | The network status from SentinelOne. Available values: `connected`, `disconnected`, `disconnecting`, `connecting`. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.operator">Operator</a></code> | <code>*string</code> | The version comparison operator. Available values: `>`, `>=`, `<`, `<=`, `==`. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.os">Os</a></code> | <code>*string</code> | OS signal score from Crowdstrike. Value must be between 1 and 100. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.osDistroName">OsDistroName</a></code> | <code>*string</code> | The operating system excluding version information. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.osDistroRevision">OsDistroRevision</a></code> | <code>*string</code> | The operating system version excluding OS name information or release name. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.overall">Overall</a></code> | <code>*string</code> | Overall ZTA score from Crowdstrike. Value must be between 1 and 100. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.path">Path</a></code> | <code>*string</code> | The path to the file. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.requireAll">RequireAll</a></code> | <code>interface{}</code> | True if all drives must be encrypted. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.riskLevel">RiskLevel</a></code> | <code>*string</code> | The risk level from Tanium. Available values: `low`, `medium`, `high`, `critical`. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.running">Running</a></code> | <code>interface{}</code> | Checks if the application should be running. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.sensorConfig">SensorConfig</a></code> | <code>*string</code> | Sensor signal score from Crowdstrike. Value must be between 1 and 100. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.sha256">Sha256</a></code> | <code>*string</code> | The sha256 hash of the file. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.thumbprint">Thumbprint</a></code> | <code>*string</code> | The thumbprint of the file certificate. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.totalScore">TotalScore</a></code> | <code>*f64</code> | The total score from Tanium. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.version">Version</a></code> | <code>*string</code> | The operating system semantic version. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.versionOperator">VersionOperator</a></code> | <code>*string</code> | The version comparison operator for crowdstrike. Available values: `>`, `>=`, `<`, `<=`, `==`. |

---

##### `ActiveThreats`<sup>Optional</sup> <a name="ActiveThreats" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.activeThreats"></a>

```go
ActiveThreats *f64
```

- *Type:* *f64

The number of active threats from SentinelOne.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_posture_rule#active_threats DevicePostureRule#active_threats}

---

##### `CertificateId`<sup>Optional</sup> <a name="CertificateId" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.certificateId"></a>

```go
CertificateId *string
```

- *Type:* *string

The UUID of a Cloudflare managed certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_posture_rule#certificate_id DevicePostureRule#certificate_id}

---

##### `CheckDisks`<sup>Optional</sup> <a name="CheckDisks" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.checkDisks"></a>

```go
CheckDisks *[]*string
```

- *Type:* *[]*string

Specific volume(s) to check for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_posture_rule#check_disks DevicePostureRule#check_disks}

---

##### `Cn`<sup>Optional</sup> <a name="Cn" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.cn"></a>

```go
Cn *string
```

- *Type:* *string

The common name for a certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_posture_rule#cn DevicePostureRule#cn}

---

##### `ComplianceStatus`<sup>Optional</sup> <a name="ComplianceStatus" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.complianceStatus"></a>

```go
ComplianceStatus *string
```

- *Type:* *string

The workspace one device compliance status. Available values: `compliant`, `noncompliant`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_posture_rule#compliance_status DevicePostureRule#compliance_status}

---

##### `ConnectionId`<sup>Optional</sup> <a name="ConnectionId" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.connectionId"></a>

```go
ConnectionId *string
```

- *Type:* *string

The workspace one connection id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_posture_rule#connection_id DevicePostureRule#connection_id}

---

##### `CountOperator`<sup>Optional</sup> <a name="CountOperator" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.countOperator"></a>

```go
CountOperator *string
```

- *Type:* *string

The count comparison operator for kolide. Available values: `>`, `>=`, `<`, `<=`, `==`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_posture_rule#count_operator DevicePostureRule#count_operator}

---

##### `Domain`<sup>Optional</sup> <a name="Domain" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.domain"></a>

```go
Domain *string
```

- *Type:* *string

The domain that the client must join.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_posture_rule#domain DevicePostureRule#domain}

---

##### `EidLastSeen`<sup>Optional</sup> <a name="EidLastSeen" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.eidLastSeen"></a>

```go
EidLastSeen *string
```

- *Type:* *string

The datetime a device last seen in RFC 3339 format from Tanium.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_posture_rule#eid_last_seen DevicePostureRule#eid_last_seen}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

True if the firewall must be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_posture_rule#enabled DevicePostureRule#enabled}

---

##### `Exists`<sup>Optional</sup> <a name="Exists" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.exists"></a>

```go
Exists interface{}
```

- *Type:* interface{}

Checks if the file should exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_posture_rule#exists DevicePostureRule#exists}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.id"></a>

```go
Id *string
```

- *Type:* *string

The Teams List id. Required for `serial_number` and `unique_client_id` rule types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_posture_rule#id DevicePostureRule#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Infected`<sup>Optional</sup> <a name="Infected" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.infected"></a>

```go
Infected interface{}
```

- *Type:* interface{}

True if SentinelOne device is infected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_posture_rule#infected DevicePostureRule#infected}

---

##### `IsActive`<sup>Optional</sup> <a name="IsActive" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.isActive"></a>

```go
IsActive interface{}
```

- *Type:* interface{}

True if SentinelOne device is active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_posture_rule#is_active DevicePostureRule#is_active}

---

##### `IssueCount`<sup>Optional</sup> <a name="IssueCount" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.issueCount"></a>

```go
IssueCount *string
```

- *Type:* *string

The number of issues for kolide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_posture_rule#issue_count DevicePostureRule#issue_count}

---

##### `NetworkStatus`<sup>Optional</sup> <a name="NetworkStatus" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.networkStatus"></a>

```go
NetworkStatus *string
```

- *Type:* *string

The network status from SentinelOne. Available values: `connected`, `disconnected`, `disconnecting`, `connecting`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_posture_rule#network_status DevicePostureRule#network_status}

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

The version comparison operator. Available values: `>`, `>=`, `<`, `<=`, `==`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_posture_rule#operator DevicePostureRule#operator}

---

##### `Os`<sup>Optional</sup> <a name="Os" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.os"></a>

```go
Os *string
```

- *Type:* *string

OS signal score from Crowdstrike. Value must be between 1 and 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_posture_rule#os DevicePostureRule#os}

---

##### `OsDistroName`<sup>Optional</sup> <a name="OsDistroName" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.osDistroName"></a>

```go
OsDistroName *string
```

- *Type:* *string

The operating system excluding version information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_posture_rule#os_distro_name DevicePostureRule#os_distro_name}

---

##### `OsDistroRevision`<sup>Optional</sup> <a name="OsDistroRevision" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.osDistroRevision"></a>

```go
OsDistroRevision *string
```

- *Type:* *string

The operating system version excluding OS name information or release name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_posture_rule#os_distro_revision DevicePostureRule#os_distro_revision}

---

##### `Overall`<sup>Optional</sup> <a name="Overall" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.overall"></a>

```go
Overall *string
```

- *Type:* *string

Overall ZTA score from Crowdstrike. Value must be between 1 and 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_posture_rule#overall DevicePostureRule#overall}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.path"></a>

```go
Path *string
```

- *Type:* *string

The path to the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_posture_rule#path DevicePostureRule#path}

---

##### `RequireAll`<sup>Optional</sup> <a name="RequireAll" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.requireAll"></a>

```go
RequireAll interface{}
```

- *Type:* interface{}

True if all drives must be encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_posture_rule#require_all DevicePostureRule#require_all}

---

##### `RiskLevel`<sup>Optional</sup> <a name="RiskLevel" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.riskLevel"></a>

```go
RiskLevel *string
```

- *Type:* *string

The risk level from Tanium. Available values: `low`, `medium`, `high`, `critical`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_posture_rule#risk_level DevicePostureRule#risk_level}

---

##### `Running`<sup>Optional</sup> <a name="Running" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.running"></a>

```go
Running interface{}
```

- *Type:* interface{}

Checks if the application should be running.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_posture_rule#running DevicePostureRule#running}

---

##### `SensorConfig`<sup>Optional</sup> <a name="SensorConfig" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.sensorConfig"></a>

```go
SensorConfig *string
```

- *Type:* *string

Sensor signal score from Crowdstrike. Value must be between 1 and 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_posture_rule#sensor_config DevicePostureRule#sensor_config}

---

##### `Sha256`<sup>Optional</sup> <a name="Sha256" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.sha256"></a>

```go
Sha256 *string
```

- *Type:* *string

The sha256 hash of the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_posture_rule#sha256 DevicePostureRule#sha256}

---

##### `Thumbprint`<sup>Optional</sup> <a name="Thumbprint" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.thumbprint"></a>

```go
Thumbprint *string
```

- *Type:* *string

The thumbprint of the file certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_posture_rule#thumbprint DevicePostureRule#thumbprint}

---

##### `TotalScore`<sup>Optional</sup> <a name="TotalScore" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.totalScore"></a>

```go
TotalScore *f64
```

- *Type:* *f64

The total score from Tanium.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_posture_rule#total_score DevicePostureRule#total_score}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.version"></a>

```go
Version *string
```

- *Type:* *string

The operating system semantic version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_posture_rule#version DevicePostureRule#version}

---

##### `VersionOperator`<sup>Optional</sup> <a name="VersionOperator" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.versionOperator"></a>

```go
VersionOperator *string
```

- *Type:* *string

The version comparison operator for crowdstrike. Available values: `>`, `>=`, `<`, `<=`, `==`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_posture_rule#version_operator DevicePostureRule#version_operator}

---

### DevicePostureRuleMatch <a name="DevicePostureRuleMatch" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatch.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/deviceposturerule"

&deviceposturerule.DevicePostureRuleMatch {
	Platform: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatch.property.platform">Platform</a></code> | <code>*string</code> | The platform of the device. Available values: `windows`, `mac`, `linux`, `android`, `ios`, `chromeos`. |

---

##### `Platform`<sup>Optional</sup> <a name="Platform" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatch.property.platform"></a>

```go
Platform *string
```

- *Type:* *string

The platform of the device. Available values: `windows`, `mac`, `linux`, `android`, `ios`, `chromeos`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.22.0/docs/resources/device_posture_rule#platform DevicePostureRule#platform}

---

## Classes <a name="Classes" id="Classes"></a>

### DevicePostureRuleInputList <a name="DevicePostureRuleInputList" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/deviceposturerule"

deviceposturerule.NewDevicePostureRuleInputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DevicePostureRuleInputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.get"></a>

```go
func Get(index *f64) DevicePostureRuleInputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevicePostureRuleInputOutputReference <a name="DevicePostureRuleInputOutputReference" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/deviceposturerule"

deviceposturerule.NewDevicePostureRuleInputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DevicePostureRuleInputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetActiveThreats">ResetActiveThreats</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetCertificateId">ResetCertificateId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetCheckDisks">ResetCheckDisks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetCn">ResetCn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetComplianceStatus">ResetComplianceStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetConnectionId">ResetConnectionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetCountOperator">ResetCountOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetDomain">ResetDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetEidLastSeen">ResetEidLastSeen</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetExists">ResetExists</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetInfected">ResetInfected</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetIsActive">ResetIsActive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetIssueCount">ResetIssueCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetNetworkStatus">ResetNetworkStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetOs">ResetOs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetOsDistroName">ResetOsDistroName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetOsDistroRevision">ResetOsDistroRevision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetOverall">ResetOverall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetRequireAll">ResetRequireAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetRiskLevel">ResetRiskLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetRunning">ResetRunning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetSensorConfig">ResetSensorConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetSha256">ResetSha256</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetThumbprint">ResetThumbprint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetTotalScore">ResetTotalScore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetVersionOperator">ResetVersionOperator</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetActiveThreats` <a name="ResetActiveThreats" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetActiveThreats"></a>

```go
func ResetActiveThreats()
```

##### `ResetCertificateId` <a name="ResetCertificateId" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetCertificateId"></a>

```go
func ResetCertificateId()
```

##### `ResetCheckDisks` <a name="ResetCheckDisks" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetCheckDisks"></a>

```go
func ResetCheckDisks()
```

##### `ResetCn` <a name="ResetCn" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetCn"></a>

```go
func ResetCn()
```

##### `ResetComplianceStatus` <a name="ResetComplianceStatus" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetComplianceStatus"></a>

```go
func ResetComplianceStatus()
```

##### `ResetConnectionId` <a name="ResetConnectionId" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetConnectionId"></a>

```go
func ResetConnectionId()
```

##### `ResetCountOperator` <a name="ResetCountOperator" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetCountOperator"></a>

```go
func ResetCountOperator()
```

##### `ResetDomain` <a name="ResetDomain" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetDomain"></a>

```go
func ResetDomain()
```

##### `ResetEidLastSeen` <a name="ResetEidLastSeen" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetEidLastSeen"></a>

```go
func ResetEidLastSeen()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetExists` <a name="ResetExists" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetExists"></a>

```go
func ResetExists()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetInfected` <a name="ResetInfected" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetInfected"></a>

```go
func ResetInfected()
```

##### `ResetIsActive` <a name="ResetIsActive" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetIsActive"></a>

```go
func ResetIsActive()
```

##### `ResetIssueCount` <a name="ResetIssueCount" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetIssueCount"></a>

```go
func ResetIssueCount()
```

##### `ResetNetworkStatus` <a name="ResetNetworkStatus" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetNetworkStatus"></a>

```go
func ResetNetworkStatus()
```

##### `ResetOperator` <a name="ResetOperator" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetOperator"></a>

```go
func ResetOperator()
```

##### `ResetOs` <a name="ResetOs" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetOs"></a>

```go
func ResetOs()
```

##### `ResetOsDistroName` <a name="ResetOsDistroName" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetOsDistroName"></a>

```go
func ResetOsDistroName()
```

##### `ResetOsDistroRevision` <a name="ResetOsDistroRevision" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetOsDistroRevision"></a>

```go
func ResetOsDistroRevision()
```

##### `ResetOverall` <a name="ResetOverall" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetOverall"></a>

```go
func ResetOverall()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetPath"></a>

```go
func ResetPath()
```

##### `ResetRequireAll` <a name="ResetRequireAll" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetRequireAll"></a>

```go
func ResetRequireAll()
```

##### `ResetRiskLevel` <a name="ResetRiskLevel" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetRiskLevel"></a>

```go
func ResetRiskLevel()
```

##### `ResetRunning` <a name="ResetRunning" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetRunning"></a>

```go
func ResetRunning()
```

##### `ResetSensorConfig` <a name="ResetSensorConfig" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetSensorConfig"></a>

```go
func ResetSensorConfig()
```

##### `ResetSha256` <a name="ResetSha256" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetSha256"></a>

```go
func ResetSha256()
```

##### `ResetThumbprint` <a name="ResetThumbprint" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetThumbprint"></a>

```go
func ResetThumbprint()
```

##### `ResetTotalScore` <a name="ResetTotalScore" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetTotalScore"></a>

```go
func ResetTotalScore()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetVersion"></a>

```go
func ResetVersion()
```

##### `ResetVersionOperator` <a name="ResetVersionOperator" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetVersionOperator"></a>

```go
func ResetVersionOperator()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.activeThreatsInput">ActiveThreatsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.certificateIdInput">CertificateIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.checkDisksInput">CheckDisksInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.cnInput">CnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.complianceStatusInput">ComplianceStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.connectionIdInput">ConnectionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.countOperatorInput">CountOperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.domainInput">DomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.eidLastSeenInput">EidLastSeenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.existsInput">ExistsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.infectedInput">InfectedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.isActiveInput">IsActiveInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.issueCountInput">IssueCountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.networkStatusInput">NetworkStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.osDistroNameInput">OsDistroNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.osDistroRevisionInput">OsDistroRevisionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.osInput">OsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.overallInput">OverallInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.requireAllInput">RequireAllInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.riskLevelInput">RiskLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.runningInput">RunningInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.sensorConfigInput">SensorConfigInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.sha256Input">Sha256Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.thumbprintInput">ThumbprintInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.totalScoreInput">TotalScoreInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.versionOperatorInput">VersionOperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.activeThreats">ActiveThreats</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.certificateId">CertificateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.checkDisks">CheckDisks</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.cn">Cn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.complianceStatus">ComplianceStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.connectionId">ConnectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.countOperator">CountOperator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.eidLastSeen">EidLastSeen</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.exists">Exists</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.infected">Infected</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.isActive">IsActive</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.issueCount">IssueCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.networkStatus">NetworkStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.os">Os</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.osDistroName">OsDistroName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.osDistroRevision">OsDistroRevision</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.overall">Overall</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.requireAll">RequireAll</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.riskLevel">RiskLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.running">Running</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.sensorConfig">SensorConfig</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.sha256">Sha256</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.thumbprint">Thumbprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.totalScore">TotalScore</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.versionOperator">VersionOperator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActiveThreatsInput`<sup>Optional</sup> <a name="ActiveThreatsInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.activeThreatsInput"></a>

```go
func ActiveThreatsInput() *f64
```

- *Type:* *f64

---

##### `CertificateIdInput`<sup>Optional</sup> <a name="CertificateIdInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.certificateIdInput"></a>

```go
func CertificateIdInput() *string
```

- *Type:* *string

---

##### `CheckDisksInput`<sup>Optional</sup> <a name="CheckDisksInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.checkDisksInput"></a>

```go
func CheckDisksInput() *[]*string
```

- *Type:* *[]*string

---

##### `CnInput`<sup>Optional</sup> <a name="CnInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.cnInput"></a>

```go
func CnInput() *string
```

- *Type:* *string

---

##### `ComplianceStatusInput`<sup>Optional</sup> <a name="ComplianceStatusInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.complianceStatusInput"></a>

```go
func ComplianceStatusInput() *string
```

- *Type:* *string

---

##### `ConnectionIdInput`<sup>Optional</sup> <a name="ConnectionIdInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.connectionIdInput"></a>

```go
func ConnectionIdInput() *string
```

- *Type:* *string

---

##### `CountOperatorInput`<sup>Optional</sup> <a name="CountOperatorInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.countOperatorInput"></a>

```go
func CountOperatorInput() *string
```

- *Type:* *string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.domainInput"></a>

```go
func DomainInput() *string
```

- *Type:* *string

---

##### `EidLastSeenInput`<sup>Optional</sup> <a name="EidLastSeenInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.eidLastSeenInput"></a>

```go
func EidLastSeenInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ExistsInput`<sup>Optional</sup> <a name="ExistsInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.existsInput"></a>

```go
func ExistsInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InfectedInput`<sup>Optional</sup> <a name="InfectedInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.infectedInput"></a>

```go
func InfectedInput() interface{}
```

- *Type:* interface{}

---

##### `IsActiveInput`<sup>Optional</sup> <a name="IsActiveInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.isActiveInput"></a>

```go
func IsActiveInput() interface{}
```

- *Type:* interface{}

---

##### `IssueCountInput`<sup>Optional</sup> <a name="IssueCountInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.issueCountInput"></a>

```go
func IssueCountInput() *string
```

- *Type:* *string

---

##### `NetworkStatusInput`<sup>Optional</sup> <a name="NetworkStatusInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.networkStatusInput"></a>

```go
func NetworkStatusInput() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `OsDistroNameInput`<sup>Optional</sup> <a name="OsDistroNameInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.osDistroNameInput"></a>

```go
func OsDistroNameInput() *string
```

- *Type:* *string

---

##### `OsDistroRevisionInput`<sup>Optional</sup> <a name="OsDistroRevisionInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.osDistroRevisionInput"></a>

```go
func OsDistroRevisionInput() *string
```

- *Type:* *string

---

##### `OsInput`<sup>Optional</sup> <a name="OsInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.osInput"></a>

```go
func OsInput() *string
```

- *Type:* *string

---

##### `OverallInput`<sup>Optional</sup> <a name="OverallInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.overallInput"></a>

```go
func OverallInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `RequireAllInput`<sup>Optional</sup> <a name="RequireAllInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.requireAllInput"></a>

```go
func RequireAllInput() interface{}
```

- *Type:* interface{}

---

##### `RiskLevelInput`<sup>Optional</sup> <a name="RiskLevelInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.riskLevelInput"></a>

```go
func RiskLevelInput() *string
```

- *Type:* *string

---

##### `RunningInput`<sup>Optional</sup> <a name="RunningInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.runningInput"></a>

```go
func RunningInput() interface{}
```

- *Type:* interface{}

---

##### `SensorConfigInput`<sup>Optional</sup> <a name="SensorConfigInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.sensorConfigInput"></a>

```go
func SensorConfigInput() *string
```

- *Type:* *string

---

##### `Sha256Input`<sup>Optional</sup> <a name="Sha256Input" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.sha256Input"></a>

```go
func Sha256Input() *string
```

- *Type:* *string

---

##### `ThumbprintInput`<sup>Optional</sup> <a name="ThumbprintInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.thumbprintInput"></a>

```go
func ThumbprintInput() *string
```

- *Type:* *string

---

##### `TotalScoreInput`<sup>Optional</sup> <a name="TotalScoreInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.totalScoreInput"></a>

```go
func TotalScoreInput() *f64
```

- *Type:* *f64

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `VersionOperatorInput`<sup>Optional</sup> <a name="VersionOperatorInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.versionOperatorInput"></a>

```go
func VersionOperatorInput() *string
```

- *Type:* *string

---

##### `ActiveThreats`<sup>Required</sup> <a name="ActiveThreats" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.activeThreats"></a>

```go
func ActiveThreats() *f64
```

- *Type:* *f64

---

##### `CertificateId`<sup>Required</sup> <a name="CertificateId" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.certificateId"></a>

```go
func CertificateId() *string
```

- *Type:* *string

---

##### `CheckDisks`<sup>Required</sup> <a name="CheckDisks" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.checkDisks"></a>

```go
func CheckDisks() *[]*string
```

- *Type:* *[]*string

---

##### `Cn`<sup>Required</sup> <a name="Cn" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.cn"></a>

```go
func Cn() *string
```

- *Type:* *string

---

##### `ComplianceStatus`<sup>Required</sup> <a name="ComplianceStatus" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.complianceStatus"></a>

```go
func ComplianceStatus() *string
```

- *Type:* *string

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.connectionId"></a>

```go
func ConnectionId() *string
```

- *Type:* *string

---

##### `CountOperator`<sup>Required</sup> <a name="CountOperator" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.countOperator"></a>

```go
func CountOperator() *string
```

- *Type:* *string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `EidLastSeen`<sup>Required</sup> <a name="EidLastSeen" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.eidLastSeen"></a>

```go
func EidLastSeen() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Exists`<sup>Required</sup> <a name="Exists" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.exists"></a>

```go
func Exists() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Infected`<sup>Required</sup> <a name="Infected" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.infected"></a>

```go
func Infected() interface{}
```

- *Type:* interface{}

---

##### `IsActive`<sup>Required</sup> <a name="IsActive" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.isActive"></a>

```go
func IsActive() interface{}
```

- *Type:* interface{}

---

##### `IssueCount`<sup>Required</sup> <a name="IssueCount" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.issueCount"></a>

```go
func IssueCount() *string
```

- *Type:* *string

---

##### `NetworkStatus`<sup>Required</sup> <a name="NetworkStatus" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.networkStatus"></a>

```go
func NetworkStatus() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Os`<sup>Required</sup> <a name="Os" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.os"></a>

```go
func Os() *string
```

- *Type:* *string

---

##### `OsDistroName`<sup>Required</sup> <a name="OsDistroName" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.osDistroName"></a>

```go
func OsDistroName() *string
```

- *Type:* *string

---

##### `OsDistroRevision`<sup>Required</sup> <a name="OsDistroRevision" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.osDistroRevision"></a>

```go
func OsDistroRevision() *string
```

- *Type:* *string

---

##### `Overall`<sup>Required</sup> <a name="Overall" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.overall"></a>

```go
func Overall() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `RequireAll`<sup>Required</sup> <a name="RequireAll" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.requireAll"></a>

```go
func RequireAll() interface{}
```

- *Type:* interface{}

---

##### `RiskLevel`<sup>Required</sup> <a name="RiskLevel" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.riskLevel"></a>

```go
func RiskLevel() *string
```

- *Type:* *string

---

##### `Running`<sup>Required</sup> <a name="Running" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.running"></a>

```go
func Running() interface{}
```

- *Type:* interface{}

---

##### `SensorConfig`<sup>Required</sup> <a name="SensorConfig" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.sensorConfig"></a>

```go
func SensorConfig() *string
```

- *Type:* *string

---

##### `Sha256`<sup>Required</sup> <a name="Sha256" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.sha256"></a>

```go
func Sha256() *string
```

- *Type:* *string

---

##### `Thumbprint`<sup>Required</sup> <a name="Thumbprint" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.thumbprint"></a>

```go
func Thumbprint() *string
```

- *Type:* *string

---

##### `TotalScore`<sup>Required</sup> <a name="TotalScore" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.totalScore"></a>

```go
func TotalScore() *f64
```

- *Type:* *f64

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `VersionOperator`<sup>Required</sup> <a name="VersionOperator" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.versionOperator"></a>

```go
func VersionOperator() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevicePostureRuleMatchList <a name="DevicePostureRuleMatchList" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/deviceposturerule"

deviceposturerule.NewDevicePostureRuleMatchList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DevicePostureRuleMatchList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.get"></a>

```go
func Get(index *f64) DevicePostureRuleMatchOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevicePostureRuleMatchOutputReference <a name="DevicePostureRuleMatchOutputReference" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/deviceposturerule"

deviceposturerule.NewDevicePostureRuleMatchOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DevicePostureRuleMatchOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.resetPlatform">ResetPlatform</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPlatform` <a name="ResetPlatform" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.resetPlatform"></a>

```go
func ResetPlatform()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.property.platformInput">PlatformInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.property.platform">Platform</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PlatformInput`<sup>Optional</sup> <a name="PlatformInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.property.platformInput"></a>

```go
func PlatformInput() *string
```

- *Type:* *string

---

##### `Platform`<sup>Required</sup> <a name="Platform" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.property.platform"></a>

```go
func Platform() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



