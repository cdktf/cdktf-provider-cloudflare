# `waitingRoom` Submodule <a name="`waitingRoom` Submodule" id="@cdktf/provider-cloudflare.waitingRoom"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WaitingRoom <a name="WaitingRoom" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/waiting_room cloudflare_waiting_room}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/waitingroom"

waitingroom.NewWaitingRoom(scope Construct, id *string, config WaitingRoomConfig) WaitingRoom
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig">WaitingRoomConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig">WaitingRoomConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.putAdditionalRoutes">PutAdditionalRoutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetAdditionalRoutes">ResetAdditionalRoutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetCookieSuffix">ResetCookieSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetCustomPageHtml">ResetCustomPageHtml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetDefaultTemplateLanguage">ResetDefaultTemplateLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetDisableSessionRenewal">ResetDisableSessionRenewal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetEnabledOriginCommands">ResetEnabledOriginCommands</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetJsonResponseEnabled">ResetJsonResponseEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetQueueAll">ResetQueueAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetQueueingMethod">ResetQueueingMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetQueueingStatusCode">ResetQueueingStatusCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetSessionDuration">ResetSessionDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetSuspended">ResetSuspended</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetTurnstileAction">ResetTurnstileAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetTurnstileMode">ResetTurnstileMode</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAdditionalRoutes` <a name="PutAdditionalRoutes" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.putAdditionalRoutes"></a>

```go
func PutAdditionalRoutes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.putAdditionalRoutes.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.putTimeouts"></a>

```go
func PutTimeouts(value WaitingRoomTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeouts">WaitingRoomTimeouts</a>

---

##### `ResetAdditionalRoutes` <a name="ResetAdditionalRoutes" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetAdditionalRoutes"></a>

```go
func ResetAdditionalRoutes()
```

##### `ResetCookieSuffix` <a name="ResetCookieSuffix" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetCookieSuffix"></a>

```go
func ResetCookieSuffix()
```

##### `ResetCustomPageHtml` <a name="ResetCustomPageHtml" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetCustomPageHtml"></a>

```go
func ResetCustomPageHtml()
```

##### `ResetDefaultTemplateLanguage` <a name="ResetDefaultTemplateLanguage" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetDefaultTemplateLanguage"></a>

```go
func ResetDefaultTemplateLanguage()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisableSessionRenewal` <a name="ResetDisableSessionRenewal" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetDisableSessionRenewal"></a>

```go
func ResetDisableSessionRenewal()
```

##### `ResetEnabledOriginCommands` <a name="ResetEnabledOriginCommands" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetEnabledOriginCommands"></a>

```go
func ResetEnabledOriginCommands()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetId"></a>

```go
func ResetId()
```

##### `ResetJsonResponseEnabled` <a name="ResetJsonResponseEnabled" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetJsonResponseEnabled"></a>

```go
func ResetJsonResponseEnabled()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetPath"></a>

```go
func ResetPath()
```

##### `ResetQueueAll` <a name="ResetQueueAll" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetQueueAll"></a>

```go
func ResetQueueAll()
```

##### `ResetQueueingMethod` <a name="ResetQueueingMethod" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetQueueingMethod"></a>

```go
func ResetQueueingMethod()
```

##### `ResetQueueingStatusCode` <a name="ResetQueueingStatusCode" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetQueueingStatusCode"></a>

```go
func ResetQueueingStatusCode()
```

##### `ResetSessionDuration` <a name="ResetSessionDuration" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetSessionDuration"></a>

```go
func ResetSessionDuration()
```

##### `ResetSuspended` <a name="ResetSuspended" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetSuspended"></a>

```go
func ResetSuspended()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTurnstileAction` <a name="ResetTurnstileAction" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetTurnstileAction"></a>

```go
func ResetTurnstileAction()
```

##### `ResetTurnstileMode` <a name="ResetTurnstileMode" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetTurnstileMode"></a>

```go
func ResetTurnstileMode()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a WaitingRoom resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/waitingroom"

waitingroom.WaitingRoom_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/waitingroom"

waitingroom.WaitingRoom_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/waitingroom"

waitingroom.WaitingRoom_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/waitingroom"

waitingroom.WaitingRoom_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a WaitingRoom resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the WaitingRoom to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing WaitingRoom that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/waiting_room#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the WaitingRoom to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.additionalRoutes">AdditionalRoutes</a></code> | <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList">WaitingRoomAdditionalRoutesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference">WaitingRoomTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.additionalRoutesInput">AdditionalRoutesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.cookieSuffixInput">CookieSuffixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.customPageHtmlInput">CustomPageHtmlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.defaultTemplateLanguageInput">DefaultTemplateLanguageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.disableSessionRenewalInput">DisableSessionRenewalInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.enabledOriginCommandsInput">EnabledOriginCommandsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.hostInput">HostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.jsonResponseEnabledInput">JsonResponseEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.newUsersPerMinuteInput">NewUsersPerMinuteInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.queueAllInput">QueueAllInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.queueingMethodInput">QueueingMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.queueingStatusCodeInput">QueueingStatusCodeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.sessionDurationInput">SessionDurationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.suspendedInput">SuspendedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.totalActiveUsersInput">TotalActiveUsersInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.turnstileActionInput">TurnstileActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.turnstileModeInput">TurnstileModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.zoneIdInput">ZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.cookieSuffix">CookieSuffix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.customPageHtml">CustomPageHtml</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.defaultTemplateLanguage">DefaultTemplateLanguage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.disableSessionRenewal">DisableSessionRenewal</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.enabledOriginCommands">EnabledOriginCommands</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.jsonResponseEnabled">JsonResponseEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.newUsersPerMinute">NewUsersPerMinute</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.queueAll">QueueAll</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.queueingMethod">QueueingMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.queueingStatusCode">QueueingStatusCode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.sessionDuration">SessionDuration</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.suspended">Suspended</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.totalActiveUsers">TotalActiveUsers</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.turnstileAction">TurnstileAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.turnstileMode">TurnstileMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AdditionalRoutes`<sup>Required</sup> <a name="AdditionalRoutes" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.additionalRoutes"></a>

```go
func AdditionalRoutes() WaitingRoomAdditionalRoutesList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList">WaitingRoomAdditionalRoutesList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.timeouts"></a>

```go
func Timeouts() WaitingRoomTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference">WaitingRoomTimeoutsOutputReference</a>

---

##### `AdditionalRoutesInput`<sup>Optional</sup> <a name="AdditionalRoutesInput" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.additionalRoutesInput"></a>

```go
func AdditionalRoutesInput() interface{}
```

- *Type:* interface{}

---

##### `CookieSuffixInput`<sup>Optional</sup> <a name="CookieSuffixInput" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.cookieSuffixInput"></a>

```go
func CookieSuffixInput() *string
```

- *Type:* *string

---

##### `CustomPageHtmlInput`<sup>Optional</sup> <a name="CustomPageHtmlInput" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.customPageHtmlInput"></a>

```go
func CustomPageHtmlInput() *string
```

- *Type:* *string

---

##### `DefaultTemplateLanguageInput`<sup>Optional</sup> <a name="DefaultTemplateLanguageInput" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.defaultTemplateLanguageInput"></a>

```go
func DefaultTemplateLanguageInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisableSessionRenewalInput`<sup>Optional</sup> <a name="DisableSessionRenewalInput" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.disableSessionRenewalInput"></a>

```go
func DisableSessionRenewalInput() interface{}
```

- *Type:* interface{}

---

##### `EnabledOriginCommandsInput`<sup>Optional</sup> <a name="EnabledOriginCommandsInput" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.enabledOriginCommandsInput"></a>

```go
func EnabledOriginCommandsInput() *[]*string
```

- *Type:* *[]*string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.hostInput"></a>

```go
func HostInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `JsonResponseEnabledInput`<sup>Optional</sup> <a name="JsonResponseEnabledInput" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.jsonResponseEnabledInput"></a>

```go
func JsonResponseEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NewUsersPerMinuteInput`<sup>Optional</sup> <a name="NewUsersPerMinuteInput" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.newUsersPerMinuteInput"></a>

```go
func NewUsersPerMinuteInput() *f64
```

- *Type:* *f64

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `QueueAllInput`<sup>Optional</sup> <a name="QueueAllInput" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.queueAllInput"></a>

```go
func QueueAllInput() interface{}
```

- *Type:* interface{}

---

##### `QueueingMethodInput`<sup>Optional</sup> <a name="QueueingMethodInput" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.queueingMethodInput"></a>

```go
func QueueingMethodInput() *string
```

- *Type:* *string

---

##### `QueueingStatusCodeInput`<sup>Optional</sup> <a name="QueueingStatusCodeInput" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.queueingStatusCodeInput"></a>

```go
func QueueingStatusCodeInput() *f64
```

- *Type:* *f64

---

##### `SessionDurationInput`<sup>Optional</sup> <a name="SessionDurationInput" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.sessionDurationInput"></a>

```go
func SessionDurationInput() *f64
```

- *Type:* *f64

---

##### `SuspendedInput`<sup>Optional</sup> <a name="SuspendedInput" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.suspendedInput"></a>

```go
func SuspendedInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TotalActiveUsersInput`<sup>Optional</sup> <a name="TotalActiveUsersInput" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.totalActiveUsersInput"></a>

```go
func TotalActiveUsersInput() *f64
```

- *Type:* *f64

---

##### `TurnstileActionInput`<sup>Optional</sup> <a name="TurnstileActionInput" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.turnstileActionInput"></a>

```go
func TurnstileActionInput() *string
```

- *Type:* *string

---

##### `TurnstileModeInput`<sup>Optional</sup> <a name="TurnstileModeInput" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.turnstileModeInput"></a>

```go
func TurnstileModeInput() *string
```

- *Type:* *string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.zoneIdInput"></a>

```go
func ZoneIdInput() *string
```

- *Type:* *string

---

##### `CookieSuffix`<sup>Required</sup> <a name="CookieSuffix" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.cookieSuffix"></a>

```go
func CookieSuffix() *string
```

- *Type:* *string

---

##### `CustomPageHtml`<sup>Required</sup> <a name="CustomPageHtml" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.customPageHtml"></a>

```go
func CustomPageHtml() *string
```

- *Type:* *string

---

##### `DefaultTemplateLanguage`<sup>Required</sup> <a name="DefaultTemplateLanguage" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.defaultTemplateLanguage"></a>

```go
func DefaultTemplateLanguage() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisableSessionRenewal`<sup>Required</sup> <a name="DisableSessionRenewal" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.disableSessionRenewal"></a>

```go
func DisableSessionRenewal() interface{}
```

- *Type:* interface{}

---

##### `EnabledOriginCommands`<sup>Required</sup> <a name="EnabledOriginCommands" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.enabledOriginCommands"></a>

```go
func EnabledOriginCommands() *[]*string
```

- *Type:* *[]*string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `JsonResponseEnabled`<sup>Required</sup> <a name="JsonResponseEnabled" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.jsonResponseEnabled"></a>

```go
func JsonResponseEnabled() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NewUsersPerMinute`<sup>Required</sup> <a name="NewUsersPerMinute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.newUsersPerMinute"></a>

```go
func NewUsersPerMinute() *f64
```

- *Type:* *f64

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `QueueAll`<sup>Required</sup> <a name="QueueAll" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.queueAll"></a>

```go
func QueueAll() interface{}
```

- *Type:* interface{}

---

##### `QueueingMethod`<sup>Required</sup> <a name="QueueingMethod" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.queueingMethod"></a>

```go
func QueueingMethod() *string
```

- *Type:* *string

---

##### `QueueingStatusCode`<sup>Required</sup> <a name="QueueingStatusCode" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.queueingStatusCode"></a>

```go
func QueueingStatusCode() *f64
```

- *Type:* *f64

---

##### `SessionDuration`<sup>Required</sup> <a name="SessionDuration" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.sessionDuration"></a>

```go
func SessionDuration() *f64
```

- *Type:* *f64

---

##### `Suspended`<sup>Required</sup> <a name="Suspended" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.suspended"></a>

```go
func Suspended() interface{}
```

- *Type:* interface{}

---

##### `TotalActiveUsers`<sup>Required</sup> <a name="TotalActiveUsers" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.totalActiveUsers"></a>

```go
func TotalActiveUsers() *f64
```

- *Type:* *f64

---

##### `TurnstileAction`<sup>Required</sup> <a name="TurnstileAction" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.turnstileAction"></a>

```go
func TurnstileAction() *string
```

- *Type:* *string

---

##### `TurnstileMode`<sup>Required</sup> <a name="TurnstileMode" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.turnstileMode"></a>

```go
func TurnstileMode() *string
```

- *Type:* *string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### WaitingRoomAdditionalRoutes <a name="WaitingRoomAdditionalRoutes" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/waitingroom"

&waitingroom.WaitingRoomAdditionalRoutes {
	Host: *string,
	Path: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutes.property.host">Host</a></code> | <code>*string</code> | The additional host name for which the waiting room to be applied on (no wildcards). |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutes.property.path">Path</a></code> | <code>*string</code> | The path within the additional host to enable the waiting room on. Defaults to `/`. |

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutes.property.host"></a>

```go
Host *string
```

- *Type:* *string

The additional host name for which the waiting room to be applied on (no wildcards).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/waiting_room#host WaitingRoom#host}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutes.property.path"></a>

```go
Path *string
```

- *Type:* *string

The path within the additional host to enable the waiting room on. Defaults to `/`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/waiting_room#path WaitingRoom#path}

---

### WaitingRoomConfig <a name="WaitingRoomConfig" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/waitingroom"

&waitingroom.WaitingRoomConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Host: *string,
	Name: *string,
	NewUsersPerMinute: *f64,
	TotalActiveUsers: *f64,
	ZoneId: *string,
	AdditionalRoutes: interface{},
	CookieSuffix: *string,
	CustomPageHtml: *string,
	DefaultTemplateLanguage: *string,
	Description: *string,
	DisableSessionRenewal: interface{},
	EnabledOriginCommands: *[]*string,
	Id: *string,
	JsonResponseEnabled: interface{},
	Path: *string,
	QueueAll: interface{},
	QueueingMethod: *string,
	QueueingStatusCode: *f64,
	SessionDuration: *f64,
	Suspended: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11.waitingRoom.WaitingRoomTimeouts,
	TurnstileAction: *string,
	TurnstileMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.host">Host</a></code> | <code>*string</code> | Host name for which the waiting room will be applied (no wildcards). |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.name">Name</a></code> | <code>*string</code> | A unique name to identify the waiting room. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.newUsersPerMinute">NewUsersPerMinute</a></code> | <code>*f64</code> | The number of new users that will be let into the route every minute. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.totalActiveUsers">TotalActiveUsers</a></code> | <code>*f64</code> | The total number of active user sessions on the route at a point in time. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.zoneId">ZoneId</a></code> | <code>*string</code> | The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.additionalRoutes">AdditionalRoutes</a></code> | <code>interface{}</code> | additional_routes block. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.cookieSuffix">CookieSuffix</a></code> | <code>*string</code> | A cookie suffix to be appended to the Cloudflare waiting room cookie name. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.customPageHtml">CustomPageHtml</a></code> | <code>*string</code> | This is a templated html file that will be rendered at the edge. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.defaultTemplateLanguage">DefaultTemplateLanguage</a></code> | <code>*string</code> | The language to use for the default waiting room page. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.description">Description</a></code> | <code>*string</code> | A description to add more details about the waiting room. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.disableSessionRenewal">DisableSessionRenewal</a></code> | <code>interface{}</code> | Disables automatic renewal of session cookies. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.enabledOriginCommands">EnabledOriginCommands</a></code> | <code>*[]*string</code> | The list of enabled origin commands for the waiting room. Available values: `revoke`. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/waiting_room#id WaitingRoom#id}. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.jsonResponseEnabled">JsonResponseEnabled</a></code> | <code>interface{}</code> | If true, requests to the waiting room with the header `Accept: application/json` will receive a JSON response object. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.path">Path</a></code> | <code>*string</code> | The path within the host to enable the waiting room on. Defaults to `/`. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.queueAll">QueueAll</a></code> | <code>interface{}</code> | If queue_all is true, then all traffic will be sent to the waiting room. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.queueingMethod">QueueingMethod</a></code> | <code>*string</code> | The queueing method used by the waiting room. Available values: `fifo`, `random`, `passthrough`, `reject`. Defaults to `fifo`. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.queueingStatusCode">QueueingStatusCode</a></code> | <code>*f64</code> | HTTP status code returned to a user while in the queue. Defaults to `200`. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.sessionDuration">SessionDuration</a></code> | <code>*f64</code> | Lifetime of a cookie (in minutes) set by Cloudflare for users who get access to the origin. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.suspended">Suspended</a></code> | <code>interface{}</code> | Suspends the waiting room. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeouts">WaitingRoomTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.turnstileAction">TurnstileAction</a></code> | <code>*string</code> | The action to take when an end user fails a Turnstile challenge. Available values: `log`, `infinite_queue`. Defaults to `log`. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.turnstileMode">TurnstileMode</a></code> | <code>*string</code> | The type of Turnstile widget to use. Available values: `off`, `invisible`, `visible_non_interactive`, `visible_managed`. Defaults to `off`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.host"></a>

```go
Host *string
```

- *Type:* *string

Host name for which the waiting room will be applied (no wildcards).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/waiting_room#host WaitingRoom#host}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

A unique name to identify the waiting room. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/waiting_room#name WaitingRoom#name}

---

##### `NewUsersPerMinute`<sup>Required</sup> <a name="NewUsersPerMinute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.newUsersPerMinute"></a>

```go
NewUsersPerMinute *f64
```

- *Type:* *f64

The number of new users that will be let into the route every minute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/waiting_room#new_users_per_minute WaitingRoom#new_users_per_minute}

---

##### `TotalActiveUsers`<sup>Required</sup> <a name="TotalActiveUsers" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.totalActiveUsers"></a>

```go
TotalActiveUsers *f64
```

- *Type:* *f64

The total number of active user sessions on the route at a point in time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/waiting_room#total_active_users WaitingRoom#total_active_users}

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.zoneId"></a>

```go
ZoneId *string
```

- *Type:* *string

The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/waiting_room#zone_id WaitingRoom#zone_id}

---

##### `AdditionalRoutes`<sup>Optional</sup> <a name="AdditionalRoutes" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.additionalRoutes"></a>

```go
AdditionalRoutes interface{}
```

- *Type:* interface{}

additional_routes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/waiting_room#additional_routes WaitingRoom#additional_routes}

---

##### `CookieSuffix`<sup>Optional</sup> <a name="CookieSuffix" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.cookieSuffix"></a>

```go
CookieSuffix *string
```

- *Type:* *string

A cookie suffix to be appended to the Cloudflare waiting room cookie name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/waiting_room#cookie_suffix WaitingRoom#cookie_suffix}

---

##### `CustomPageHtml`<sup>Optional</sup> <a name="CustomPageHtml" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.customPageHtml"></a>

```go
CustomPageHtml *string
```

- *Type:* *string

This is a templated html file that will be rendered at the edge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/waiting_room#custom_page_html WaitingRoom#custom_page_html}

---

##### `DefaultTemplateLanguage`<sup>Optional</sup> <a name="DefaultTemplateLanguage" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.defaultTemplateLanguage"></a>

```go
DefaultTemplateLanguage *string
```

- *Type:* *string

The language to use for the default waiting room page.

Available values: `de-DE`, `es-ES`, `en-US`, `fr-FR`, `id-ID`, `it-IT`, `ja-JP`, `ko-KR`, `nl-NL`, `pl-PL`, `pt-BR`, `tr-TR`, `zh-CN`, `zh-TW`, `ru-RU`, `fa-IR`, `bg-BG`, `hr-HR`, `cs-CZ`, `da-DK`, `fi-FI`, `lt-LT`, `ms-MY`, `nb-NO`, `ro-RO`, `el-GR`, `he-IL`, `hi-IN`, `hu-HU`, `sr-BA`, `sk-SK`, `sl-SI`, `sv-SE`, `tl-PH`, `th-TH`, `uk-UA`, `vi-VN`. Defaults to `en-US`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/waiting_room#default_template_language WaitingRoom#default_template_language}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description to add more details about the waiting room.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/waiting_room#description WaitingRoom#description}

---

##### `DisableSessionRenewal`<sup>Optional</sup> <a name="DisableSessionRenewal" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.disableSessionRenewal"></a>

```go
DisableSessionRenewal interface{}
```

- *Type:* interface{}

Disables automatic renewal of session cookies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/waiting_room#disable_session_renewal WaitingRoom#disable_session_renewal}

---

##### `EnabledOriginCommands`<sup>Optional</sup> <a name="EnabledOriginCommands" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.enabledOriginCommands"></a>

```go
EnabledOriginCommands *[]*string
```

- *Type:* *[]*string

The list of enabled origin commands for the waiting room. Available values: `revoke`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/waiting_room#enabled_origin_commands WaitingRoom#enabled_origin_commands}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/waiting_room#id WaitingRoom#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `JsonResponseEnabled`<sup>Optional</sup> <a name="JsonResponseEnabled" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.jsonResponseEnabled"></a>

```go
JsonResponseEnabled interface{}
```

- *Type:* interface{}

If true, requests to the waiting room with the header `Accept: application/json` will receive a JSON response object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/waiting_room#json_response_enabled WaitingRoom#json_response_enabled}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.path"></a>

```go
Path *string
```

- *Type:* *string

The path within the host to enable the waiting room on. Defaults to `/`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/waiting_room#path WaitingRoom#path}

---

##### `QueueAll`<sup>Optional</sup> <a name="QueueAll" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.queueAll"></a>

```go
QueueAll interface{}
```

- *Type:* interface{}

If queue_all is true, then all traffic will be sent to the waiting room.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/waiting_room#queue_all WaitingRoom#queue_all}

---

##### `QueueingMethod`<sup>Optional</sup> <a name="QueueingMethod" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.queueingMethod"></a>

```go
QueueingMethod *string
```

- *Type:* *string

The queueing method used by the waiting room. Available values: `fifo`, `random`, `passthrough`, `reject`. Defaults to `fifo`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/waiting_room#queueing_method WaitingRoom#queueing_method}

---

##### `QueueingStatusCode`<sup>Optional</sup> <a name="QueueingStatusCode" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.queueingStatusCode"></a>

```go
QueueingStatusCode *f64
```

- *Type:* *f64

HTTP status code returned to a user while in the queue. Defaults to `200`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/waiting_room#queueing_status_code WaitingRoom#queueing_status_code}

---

##### `SessionDuration`<sup>Optional</sup> <a name="SessionDuration" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.sessionDuration"></a>

```go
SessionDuration *f64
```

- *Type:* *f64

Lifetime of a cookie (in minutes) set by Cloudflare for users who get access to the origin.

Defaults to `5`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/waiting_room#session_duration WaitingRoom#session_duration}

---

##### `Suspended`<sup>Optional</sup> <a name="Suspended" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.suspended"></a>

```go
Suspended interface{}
```

- *Type:* interface{}

Suspends the waiting room.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/waiting_room#suspended WaitingRoom#suspended}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.timeouts"></a>

```go
Timeouts WaitingRoomTimeouts
```

- *Type:* <a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeouts">WaitingRoomTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/waiting_room#timeouts WaitingRoom#timeouts}

---

##### `TurnstileAction`<sup>Optional</sup> <a name="TurnstileAction" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.turnstileAction"></a>

```go
TurnstileAction *string
```

- *Type:* *string

The action to take when an end user fails a Turnstile challenge. Available values: `log`, `infinite_queue`. Defaults to `log`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/waiting_room#turnstile_action WaitingRoom#turnstile_action}

---

##### `TurnstileMode`<sup>Optional</sup> <a name="TurnstileMode" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.turnstileMode"></a>

```go
TurnstileMode *string
```

- *Type:* *string

The type of Turnstile widget to use. Available values: `off`, `invisible`, `visible_non_interactive`, `visible_managed`. Defaults to `off`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/waiting_room#turnstile_mode WaitingRoom#turnstile_mode}

---

### WaitingRoomTimeouts <a name="WaitingRoomTimeouts" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/waitingroom"

&waitingroom.WaitingRoomTimeouts {
	Create: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/waiting_room#create WaitingRoom#create}. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/waiting_room#update WaitingRoom#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/waiting_room#create WaitingRoom#create}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/waiting_room#update WaitingRoom#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### WaitingRoomAdditionalRoutesList <a name="WaitingRoomAdditionalRoutesList" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/waitingroom"

waitingroom.NewWaitingRoomAdditionalRoutesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WaitingRoomAdditionalRoutesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList.get"></a>

```go
func Get(index *f64) WaitingRoomAdditionalRoutesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WaitingRoomAdditionalRoutesOutputReference <a name="WaitingRoomAdditionalRoutesOutputReference" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/waitingroom"

waitingroom.NewWaitingRoomAdditionalRoutesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WaitingRoomAdditionalRoutesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.resetPath">ResetPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.resetPath"></a>

```go
func ResetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.property.hostInput">HostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.property.hostInput"></a>

```go
func HostInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WaitingRoomTimeoutsOutputReference <a name="WaitingRoomTimeoutsOutputReference" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/waitingroom"

waitingroom.NewWaitingRoomTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WaitingRoomTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



