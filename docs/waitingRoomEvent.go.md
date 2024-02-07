# `waitingRoomEvent` Submodule <a name="`waitingRoomEvent` Submodule" id="@cdktf/provider-cloudflare.waitingRoomEvent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WaitingRoomEvent <a name="WaitingRoomEvent" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/waiting_room_event cloudflare_waiting_room_event}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/waitingroomevent"

waitingroomevent.NewWaitingRoomEvent(scope Construct, id *string, config WaitingRoomEventConfig) WaitingRoomEvent
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig">WaitingRoomEventConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig">WaitingRoomEventConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetCustomPageHtml">ResetCustomPageHtml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetDisableSessionRenewal">ResetDisableSessionRenewal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetNewUsersPerMinute">ResetNewUsersPerMinute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetPrequeueStartTime">ResetPrequeueStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetQueueingMethod">ResetQueueingMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetSessionDuration">ResetSessionDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetShuffleAtEventStart">ResetShuffleAtEventStart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetSuspended">ResetSuspended</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetTotalActiveUsers">ResetTotalActiveUsers</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCustomPageHtml` <a name="ResetCustomPageHtml" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetCustomPageHtml"></a>

```go
func ResetCustomPageHtml()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisableSessionRenewal` <a name="ResetDisableSessionRenewal" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetDisableSessionRenewal"></a>

```go
func ResetDisableSessionRenewal()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetId"></a>

```go
func ResetId()
```

##### `ResetNewUsersPerMinute` <a name="ResetNewUsersPerMinute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetNewUsersPerMinute"></a>

```go
func ResetNewUsersPerMinute()
```

##### `ResetPrequeueStartTime` <a name="ResetPrequeueStartTime" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetPrequeueStartTime"></a>

```go
func ResetPrequeueStartTime()
```

##### `ResetQueueingMethod` <a name="ResetQueueingMethod" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetQueueingMethod"></a>

```go
func ResetQueueingMethod()
```

##### `ResetSessionDuration` <a name="ResetSessionDuration" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetSessionDuration"></a>

```go
func ResetSessionDuration()
```

##### `ResetShuffleAtEventStart` <a name="ResetShuffleAtEventStart" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetShuffleAtEventStart"></a>

```go
func ResetShuffleAtEventStart()
```

##### `ResetSuspended` <a name="ResetSuspended" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetSuspended"></a>

```go
func ResetSuspended()
```

##### `ResetTotalActiveUsers` <a name="ResetTotalActiveUsers" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetTotalActiveUsers"></a>

```go
func ResetTotalActiveUsers()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a WaitingRoomEvent resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/waitingroomevent"

waitingroomevent.WaitingRoomEvent_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/waitingroomevent"

waitingroomevent.WaitingRoomEvent_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/waitingroomevent"

waitingroomevent.WaitingRoomEvent_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/waitingroomevent"

waitingroomevent.WaitingRoomEvent_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a WaitingRoomEvent resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the WaitingRoomEvent to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing WaitingRoomEvent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/waiting_room_event#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the WaitingRoomEvent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.modifiedOn">ModifiedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.customPageHtmlInput">CustomPageHtmlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.disableSessionRenewalInput">DisableSessionRenewalInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.eventEndTimeInput">EventEndTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.eventStartTimeInput">EventStartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.newUsersPerMinuteInput">NewUsersPerMinuteInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.prequeueStartTimeInput">PrequeueStartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.queueingMethodInput">QueueingMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.sessionDurationInput">SessionDurationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.shuffleAtEventStartInput">ShuffleAtEventStartInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.suspendedInput">SuspendedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.totalActiveUsersInput">TotalActiveUsersInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.waitingRoomIdInput">WaitingRoomIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.zoneIdInput">ZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.customPageHtml">CustomPageHtml</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.disableSessionRenewal">DisableSessionRenewal</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.eventEndTime">EventEndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.eventStartTime">EventStartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.newUsersPerMinute">NewUsersPerMinute</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.prequeueStartTime">PrequeueStartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.queueingMethod">QueueingMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.sessionDuration">SessionDuration</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.shuffleAtEventStart">ShuffleAtEventStart</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.suspended">Suspended</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.totalActiveUsers">TotalActiveUsers</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.waitingRoomId">WaitingRoomId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `ModifiedOn`<sup>Required</sup> <a name="ModifiedOn" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.modifiedOn"></a>

```go
func ModifiedOn() *string
```

- *Type:* *string

---

##### `CustomPageHtmlInput`<sup>Optional</sup> <a name="CustomPageHtmlInput" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.customPageHtmlInput"></a>

```go
func CustomPageHtmlInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisableSessionRenewalInput`<sup>Optional</sup> <a name="DisableSessionRenewalInput" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.disableSessionRenewalInput"></a>

```go
func DisableSessionRenewalInput() interface{}
```

- *Type:* interface{}

---

##### `EventEndTimeInput`<sup>Optional</sup> <a name="EventEndTimeInput" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.eventEndTimeInput"></a>

```go
func EventEndTimeInput() *string
```

- *Type:* *string

---

##### `EventStartTimeInput`<sup>Optional</sup> <a name="EventStartTimeInput" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.eventStartTimeInput"></a>

```go
func EventStartTimeInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NewUsersPerMinuteInput`<sup>Optional</sup> <a name="NewUsersPerMinuteInput" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.newUsersPerMinuteInput"></a>

```go
func NewUsersPerMinuteInput() *f64
```

- *Type:* *f64

---

##### `PrequeueStartTimeInput`<sup>Optional</sup> <a name="PrequeueStartTimeInput" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.prequeueStartTimeInput"></a>

```go
func PrequeueStartTimeInput() *string
```

- *Type:* *string

---

##### `QueueingMethodInput`<sup>Optional</sup> <a name="QueueingMethodInput" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.queueingMethodInput"></a>

```go
func QueueingMethodInput() *string
```

- *Type:* *string

---

##### `SessionDurationInput`<sup>Optional</sup> <a name="SessionDurationInput" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.sessionDurationInput"></a>

```go
func SessionDurationInput() *f64
```

- *Type:* *f64

---

##### `ShuffleAtEventStartInput`<sup>Optional</sup> <a name="ShuffleAtEventStartInput" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.shuffleAtEventStartInput"></a>

```go
func ShuffleAtEventStartInput() interface{}
```

- *Type:* interface{}

---

##### `SuspendedInput`<sup>Optional</sup> <a name="SuspendedInput" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.suspendedInput"></a>

```go
func SuspendedInput() interface{}
```

- *Type:* interface{}

---

##### `TotalActiveUsersInput`<sup>Optional</sup> <a name="TotalActiveUsersInput" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.totalActiveUsersInput"></a>

```go
func TotalActiveUsersInput() *f64
```

- *Type:* *f64

---

##### `WaitingRoomIdInput`<sup>Optional</sup> <a name="WaitingRoomIdInput" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.waitingRoomIdInput"></a>

```go
func WaitingRoomIdInput() *string
```

- *Type:* *string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.zoneIdInput"></a>

```go
func ZoneIdInput() *string
```

- *Type:* *string

---

##### `CustomPageHtml`<sup>Required</sup> <a name="CustomPageHtml" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.customPageHtml"></a>

```go
func CustomPageHtml() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisableSessionRenewal`<sup>Required</sup> <a name="DisableSessionRenewal" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.disableSessionRenewal"></a>

```go
func DisableSessionRenewal() interface{}
```

- *Type:* interface{}

---

##### `EventEndTime`<sup>Required</sup> <a name="EventEndTime" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.eventEndTime"></a>

```go
func EventEndTime() *string
```

- *Type:* *string

---

##### `EventStartTime`<sup>Required</sup> <a name="EventStartTime" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.eventStartTime"></a>

```go
func EventStartTime() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NewUsersPerMinute`<sup>Required</sup> <a name="NewUsersPerMinute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.newUsersPerMinute"></a>

```go
func NewUsersPerMinute() *f64
```

- *Type:* *f64

---

##### `PrequeueStartTime`<sup>Required</sup> <a name="PrequeueStartTime" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.prequeueStartTime"></a>

```go
func PrequeueStartTime() *string
```

- *Type:* *string

---

##### `QueueingMethod`<sup>Required</sup> <a name="QueueingMethod" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.queueingMethod"></a>

```go
func QueueingMethod() *string
```

- *Type:* *string

---

##### `SessionDuration`<sup>Required</sup> <a name="SessionDuration" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.sessionDuration"></a>

```go
func SessionDuration() *f64
```

- *Type:* *f64

---

##### `ShuffleAtEventStart`<sup>Required</sup> <a name="ShuffleAtEventStart" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.shuffleAtEventStart"></a>

```go
func ShuffleAtEventStart() interface{}
```

- *Type:* interface{}

---

##### `Suspended`<sup>Required</sup> <a name="Suspended" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.suspended"></a>

```go
func Suspended() interface{}
```

- *Type:* interface{}

---

##### `TotalActiveUsers`<sup>Required</sup> <a name="TotalActiveUsers" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.totalActiveUsers"></a>

```go
func TotalActiveUsers() *f64
```

- *Type:* *f64

---

##### `WaitingRoomId`<sup>Required</sup> <a name="WaitingRoomId" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.waitingRoomId"></a>

```go
func WaitingRoomId() *string
```

- *Type:* *string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### WaitingRoomEventConfig <a name="WaitingRoomEventConfig" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/waitingroomevent"

&waitingroomevent.WaitingRoomEventConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	EventEndTime: *string,
	EventStartTime: *string,
	Name: *string,
	WaitingRoomId: *string,
	ZoneId: *string,
	CustomPageHtml: *string,
	Description: *string,
	DisableSessionRenewal: interface{},
	Id: *string,
	NewUsersPerMinute: *f64,
	PrequeueStartTime: *string,
	QueueingMethod: *string,
	SessionDuration: *f64,
	ShuffleAtEventStart: interface{},
	Suspended: interface{},
	TotalActiveUsers: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.eventEndTime">EventEndTime</a></code> | <code>*string</code> | ISO 8601 timestamp that marks the end of the event. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.eventStartTime">EventStartTime</a></code> | <code>*string</code> | ISO 8601 timestamp that marks the start of the event. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.name">Name</a></code> | <code>*string</code> | A unique name to identify the event. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.waitingRoomId">WaitingRoomId</a></code> | <code>*string</code> | The Waiting Room ID the event should apply to. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.zoneId">ZoneId</a></code> | <code>*string</code> | The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.customPageHtml">CustomPageHtml</a></code> | <code>*string</code> | This is a templated html file that will be rendered at the edge. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.description">Description</a></code> | <code>*string</code> | A description to let users add more details about the event. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.disableSessionRenewal">DisableSessionRenewal</a></code> | <code>interface{}</code> | Disables automatic renewal of session cookies. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/waiting_room_event#id WaitingRoomEvent#id}. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.newUsersPerMinute">NewUsersPerMinute</a></code> | <code>*f64</code> | The number of new users that will be let into the route every minute. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.prequeueStartTime">PrequeueStartTime</a></code> | <code>*string</code> | ISO 8601 timestamp that marks when to begin queueing all users before the event starts. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.queueingMethod">QueueingMethod</a></code> | <code>*string</code> | The queueing method used by the waiting room. Available values: `fifo`, `random`, `passthrough`, `reject`. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.sessionDuration">SessionDuration</a></code> | <code>*f64</code> | Lifetime of a cookie (in minutes) set by Cloudflare for users who get access to the origin. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.shuffleAtEventStart">ShuffleAtEventStart</a></code> | <code>interface{}</code> | Users in the prequeue will be shuffled randomly at the `event_start_time`. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.suspended">Suspended</a></code> | <code>interface{}</code> | If suspended, the event is ignored and traffic will be handled based on the waiting room configuration. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.totalActiveUsers">TotalActiveUsers</a></code> | <code>*f64</code> | The total number of active user sessions on the route at a point in time. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EventEndTime`<sup>Required</sup> <a name="EventEndTime" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.eventEndTime"></a>

```go
EventEndTime *string
```

- *Type:* *string

ISO 8601 timestamp that marks the end of the event.

**Modifying this attribute will force creation of a new resource.**

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/waiting_room_event#event_end_time WaitingRoomEvent#event_end_time}

---

##### `EventStartTime`<sup>Required</sup> <a name="EventStartTime" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.eventStartTime"></a>

```go
EventStartTime *string
```

- *Type:* *string

ISO 8601 timestamp that marks the start of the event.

Must occur at least 1 minute before `event_end_time`. **Modifying this attribute will force creation of a new resource.**

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/waiting_room_event#event_start_time WaitingRoomEvent#event_start_time}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

A unique name to identify the event.

Only alphanumeric characters, hyphens, and underscores are allowed. **Modifying this attribute will force creation of a new resource.**

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/waiting_room_event#name WaitingRoomEvent#name}

---

##### `WaitingRoomId`<sup>Required</sup> <a name="WaitingRoomId" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.waitingRoomId"></a>

```go
WaitingRoomId *string
```

- *Type:* *string

The Waiting Room ID the event should apply to. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/waiting_room_event#waiting_room_id WaitingRoomEvent#waiting_room_id}

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.zoneId"></a>

```go
ZoneId *string
```

- *Type:* *string

The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/waiting_room_event#zone_id WaitingRoomEvent#zone_id}

---

##### `CustomPageHtml`<sup>Optional</sup> <a name="CustomPageHtml" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.customPageHtml"></a>

```go
CustomPageHtml *string
```

- *Type:* *string

This is a templated html file that will be rendered at the edge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/waiting_room_event#custom_page_html WaitingRoomEvent#custom_page_html}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description to let users add more details about the event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/waiting_room_event#description WaitingRoomEvent#description}

---

##### `DisableSessionRenewal`<sup>Optional</sup> <a name="DisableSessionRenewal" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.disableSessionRenewal"></a>

```go
DisableSessionRenewal interface{}
```

- *Type:* interface{}

Disables automatic renewal of session cookies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/waiting_room_event#disable_session_renewal WaitingRoomEvent#disable_session_renewal}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/waiting_room_event#id WaitingRoomEvent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NewUsersPerMinute`<sup>Optional</sup> <a name="NewUsersPerMinute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.newUsersPerMinute"></a>

```go
NewUsersPerMinute *f64
```

- *Type:* *f64

The number of new users that will be let into the route every minute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/waiting_room_event#new_users_per_minute WaitingRoomEvent#new_users_per_minute}

---

##### `PrequeueStartTime`<sup>Optional</sup> <a name="PrequeueStartTime" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.prequeueStartTime"></a>

```go
PrequeueStartTime *string
```

- *Type:* *string

ISO 8601 timestamp that marks when to begin queueing all users before the event starts.

Must occur at least 5 minutes before `event_start_time`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/waiting_room_event#prequeue_start_time WaitingRoomEvent#prequeue_start_time}

---

##### `QueueingMethod`<sup>Optional</sup> <a name="QueueingMethod" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.queueingMethod"></a>

```go
QueueingMethod *string
```

- *Type:* *string

The queueing method used by the waiting room. Available values: `fifo`, `random`, `passthrough`, `reject`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/waiting_room_event#queueing_method WaitingRoomEvent#queueing_method}

---

##### `SessionDuration`<sup>Optional</sup> <a name="SessionDuration" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.sessionDuration"></a>

```go
SessionDuration *f64
```

- *Type:* *f64

Lifetime of a cookie (in minutes) set by Cloudflare for users who get access to the origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/waiting_room_event#session_duration WaitingRoomEvent#session_duration}

---

##### `ShuffleAtEventStart`<sup>Optional</sup> <a name="ShuffleAtEventStart" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.shuffleAtEventStart"></a>

```go
ShuffleAtEventStart interface{}
```

- *Type:* interface{}

Users in the prequeue will be shuffled randomly at the `event_start_time`.

Requires that `prequeue_start_time` is not null. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/waiting_room_event#shuffle_at_event_start WaitingRoomEvent#shuffle_at_event_start}

---

##### `Suspended`<sup>Optional</sup> <a name="Suspended" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.suspended"></a>

```go
Suspended interface{}
```

- *Type:* interface{}

If suspended, the event is ignored and traffic will be handled based on the waiting room configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/waiting_room_event#suspended WaitingRoomEvent#suspended}

---

##### `TotalActiveUsers`<sup>Optional</sup> <a name="TotalActiveUsers" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.totalActiveUsers"></a>

```go
TotalActiveUsers *f64
```

- *Type:* *f64

The total number of active user sessions on the route at a point in time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/waiting_room_event#total_active_users WaitingRoomEvent#total_active_users}

---



