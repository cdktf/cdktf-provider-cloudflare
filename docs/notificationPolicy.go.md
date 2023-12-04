# `notificationPolicy` Submodule <a name="`notificationPolicy` Submodule" id="@cdktf/provider-cloudflare.notificationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NotificationPolicy <a name="NotificationPolicy" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/notification_policy cloudflare_notification_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10/notificationpolicy"

notificationpolicy.NewNotificationPolicy(scope Construct, id *string, config NotificationPolicyConfig) NotificationPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig">NotificationPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig">NotificationPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.putEmailIntegration">PutEmailIntegration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.putFilters">PutFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.putPagerdutyIntegration">PutPagerdutyIntegration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.putWebhooksIntegration">PutWebhooksIntegration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.resetEmailIntegration">ResetEmailIntegration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.resetFilters">ResetFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.resetPagerdutyIntegration">ResetPagerdutyIntegration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.resetWebhooksIntegration">ResetWebhooksIntegration</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEmailIntegration` <a name="PutEmailIntegration" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.putEmailIntegration"></a>

```go
func PutEmailIntegration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.putEmailIntegration.parameter.value"></a>

- *Type:* interface{}

---

##### `PutFilters` <a name="PutFilters" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.putFilters"></a>

```go
func PutFilters(value NotificationPolicyFilters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.putFilters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters">NotificationPolicyFilters</a>

---

##### `PutPagerdutyIntegration` <a name="PutPagerdutyIntegration" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.putPagerdutyIntegration"></a>

```go
func PutPagerdutyIntegration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.putPagerdutyIntegration.parameter.value"></a>

- *Type:* interface{}

---

##### `PutWebhooksIntegration` <a name="PutWebhooksIntegration" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.putWebhooksIntegration"></a>

```go
func PutWebhooksIntegration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.putWebhooksIntegration.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEmailIntegration` <a name="ResetEmailIntegration" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.resetEmailIntegration"></a>

```go
func ResetEmailIntegration()
```

##### `ResetFilters` <a name="ResetFilters" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.resetFilters"></a>

```go
func ResetFilters()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetPagerdutyIntegration` <a name="ResetPagerdutyIntegration" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.resetPagerdutyIntegration"></a>

```go
func ResetPagerdutyIntegration()
```

##### `ResetWebhooksIntegration` <a name="ResetWebhooksIntegration" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.resetWebhooksIntegration"></a>

```go
func ResetWebhooksIntegration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a NotificationPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10/notificationpolicy"

notificationpolicy.NotificationPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10/notificationpolicy"

notificationpolicy.NotificationPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10/notificationpolicy"

notificationpolicy.NotificationPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10/notificationpolicy"

notificationpolicy.NotificationPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a NotificationPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NotificationPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NotificationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/notification_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the NotificationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.created">Created</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.emailIntegration">EmailIntegration</a></code> | <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegrationList">NotificationPolicyEmailIntegrationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.filters">Filters</a></code> | <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference">NotificationPolicyFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.modified">Modified</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.pagerdutyIntegration">PagerdutyIntegration</a></code> | <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegrationList">NotificationPolicyPagerdutyIntegrationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.webhooksIntegration">WebhooksIntegration</a></code> | <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegrationList">NotificationPolicyWebhooksIntegrationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.alertTypeInput">AlertTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.emailIntegrationInput">EmailIntegrationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.filtersInput">FiltersInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters">NotificationPolicyFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.pagerdutyIntegrationInput">PagerdutyIntegrationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.webhooksIntegrationInput">WebhooksIntegrationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.alertType">AlertType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Created`<sup>Required</sup> <a name="Created" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.created"></a>

```go
func Created() *string
```

- *Type:* *string

---

##### `EmailIntegration`<sup>Required</sup> <a name="EmailIntegration" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.emailIntegration"></a>

```go
func EmailIntegration() NotificationPolicyEmailIntegrationList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegrationList">NotificationPolicyEmailIntegrationList</a>

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.filters"></a>

```go
func Filters() NotificationPolicyFiltersOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference">NotificationPolicyFiltersOutputReference</a>

---

##### `Modified`<sup>Required</sup> <a name="Modified" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.modified"></a>

```go
func Modified() *string
```

- *Type:* *string

---

##### `PagerdutyIntegration`<sup>Required</sup> <a name="PagerdutyIntegration" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.pagerdutyIntegration"></a>

```go
func PagerdutyIntegration() NotificationPolicyPagerdutyIntegrationList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegrationList">NotificationPolicyPagerdutyIntegrationList</a>

---

##### `WebhooksIntegration`<sup>Required</sup> <a name="WebhooksIntegration" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.webhooksIntegration"></a>

```go
func WebhooksIntegration() NotificationPolicyWebhooksIntegrationList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegrationList">NotificationPolicyWebhooksIntegrationList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `AlertTypeInput`<sup>Optional</sup> <a name="AlertTypeInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.alertTypeInput"></a>

```go
func AlertTypeInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EmailIntegrationInput`<sup>Optional</sup> <a name="EmailIntegrationInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.emailIntegrationInput"></a>

```go
func EmailIntegrationInput() interface{}
```

- *Type:* interface{}

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `FiltersInput`<sup>Optional</sup> <a name="FiltersInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.filtersInput"></a>

```go
func FiltersInput() NotificationPolicyFilters
```

- *Type:* <a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters">NotificationPolicyFilters</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PagerdutyIntegrationInput`<sup>Optional</sup> <a name="PagerdutyIntegrationInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.pagerdutyIntegrationInput"></a>

```go
func PagerdutyIntegrationInput() interface{}
```

- *Type:* interface{}

---

##### `WebhooksIntegrationInput`<sup>Optional</sup> <a name="WebhooksIntegrationInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.webhooksIntegrationInput"></a>

```go
func WebhooksIntegrationInput() interface{}
```

- *Type:* interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `AlertType`<sup>Required</sup> <a name="AlertType" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.alertType"></a>

```go
func AlertType() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NotificationPolicyConfig <a name="NotificationPolicyConfig" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10/notificationpolicy"

&notificationpolicy.NotificationPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	AlertType: *string,
	Enabled: interface{},
	Name: *string,
	Description: *string,
	EmailIntegration: interface{},
	Filters: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10.notificationPolicy.NotificationPolicyFilters,
	Id: *string,
	PagerdutyIntegration: interface{},
	WebhooksIntegration: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.accountId">AccountId</a></code> | <code>*string</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.alertType">AlertType</a></code> | <code>*string</code> | The event type that will trigger the dispatch of a notification. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | The status of the notification policy. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.name">Name</a></code> | <code>*string</code> | The name of the notification policy. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.description">Description</a></code> | <code>*string</code> | Description of the notification policy. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.emailIntegration">EmailIntegration</a></code> | <code>interface{}</code> | email_integration block. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.filters">Filters</a></code> | <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters">NotificationPolicyFilters</a></code> | filters block. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/notification_policy#id NotificationPolicy#id}. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.pagerdutyIntegration">PagerdutyIntegration</a></code> | <code>interface{}</code> | pagerduty_integration block. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.webhooksIntegration">WebhooksIntegration</a></code> | <code>interface{}</code> | webhooks_integration block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/notification_policy#account_id NotificationPolicy#account_id}

---

##### `AlertType`<sup>Required</sup> <a name="AlertType" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.alertType"></a>

```go
AlertType *string
```

- *Type:* *string

The event type that will trigger the dispatch of a notification.

See the developer documentation for descriptions of [available alert types](https://developers.cloudflare.com/fundamentals/notifications/notification-available/). Available values: `advanced_http_alert_error`, `access_custom_certificate_expiration_type`, `advanced_ddos_attack_l4_alert`, `advanced_ddos_attack_l7_alert`, `bgp_hijack_notification`, `billing_usage_alert`, `block_notification_block_removed`, `block_notification_new_block`, `block_notification_review_rejected`, `brand_protection_alert`, `brand_protection_digest`, `clickhouse_alert_fw_anomaly`, `clickhouse_alert_fw_ent_anomaly`, `custom_ssl_certificate_event_type`, `dedicated_ssl_certificate_event_type`, `dos_attack_l4`, `dos_attack_l7`, `expiring_service_token_alert`, `failing_logpush_job_disabled_alert`, `fbm_auto_advertisement`, `fbm_dosd_attack`, `fbm_volumetric_attack`, `health_check_status_notification`, `hostname_aop_custom_certificate_expiration_type`, `http_alert_edge_error`, `http_alert_origin_error`, `incident_alert`, `load_balancing_health_alert`, `load_balancing_pool_enablement_alert`, `logo_match_alert`, `magic_tunnel_health_check_event`, `maintenance_event_notification`, `mtls_certificate_store_certificate_expiration_type`, `pages_event_alert`, `radar_notification`, `real_origin_monitoring`, `scriptmonitor_alert_new_code_change_detections`, `scriptmonitor_alert_new_hosts`, `scriptmonitor_alert_new_malicious_hosts`, `scriptmonitor_alert_new_malicious_scripts`, `scriptmonitor_alert_new_malicious_url`, `scriptmonitor_alert_new_max_length_resource_url`, `scriptmonitor_alert_new_resources`, `secondary_dns_all_primaries_failing`, `secondary_dns_primaries_failing`, `secondary_dns_zone_successfully_updated`, `secondary_dns_zone_validation_warning`, `sentinel_alert`, `stream_live_notifications`, `tunnel_health_event`, `tunnel_update_event`, `universal_ssl_event_type`, `web_analytics_metrics_update`, `weekly_account_overview`, `workers_alert`, `zone_aop_custom_certificate_expiration_type`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/notification_policy#alert_type NotificationPolicy#alert_type}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

The status of the notification policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/notification_policy#enabled NotificationPolicy#enabled}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the notification policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/notification_policy#name NotificationPolicy#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of the notification policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/notification_policy#description NotificationPolicy#description}

---

##### `EmailIntegration`<sup>Optional</sup> <a name="EmailIntegration" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.emailIntegration"></a>

```go
EmailIntegration interface{}
```

- *Type:* interface{}

email_integration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/notification_policy#email_integration NotificationPolicy#email_integration}

---

##### `Filters`<sup>Optional</sup> <a name="Filters" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.filters"></a>

```go
Filters NotificationPolicyFilters
```

- *Type:* <a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters">NotificationPolicyFilters</a>

filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/notification_policy#filters NotificationPolicy#filters}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/notification_policy#id NotificationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PagerdutyIntegration`<sup>Optional</sup> <a name="PagerdutyIntegration" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.pagerdutyIntegration"></a>

```go
PagerdutyIntegration interface{}
```

- *Type:* interface{}

pagerduty_integration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/notification_policy#pagerduty_integration NotificationPolicy#pagerduty_integration}

---

##### `WebhooksIntegration`<sup>Optional</sup> <a name="WebhooksIntegration" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.webhooksIntegration"></a>

```go
WebhooksIntegration interface{}
```

- *Type:* interface{}

webhooks_integration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/notification_policy#webhooks_integration NotificationPolicy#webhooks_integration}

---

### NotificationPolicyEmailIntegration <a name="NotificationPolicyEmailIntegration" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10/notificationpolicy"

&notificationpolicy.NotificationPolicyEmailIntegration {
	Id: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegration.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/notification_policy#id NotificationPolicy#id}. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegration.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/notification_policy#name NotificationPolicy#name}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegration.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/notification_policy#id NotificationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegration.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/notification_policy#name NotificationPolicy#name}.

---

### NotificationPolicyFilters <a name="NotificationPolicyFilters" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10/notificationpolicy"

&notificationpolicy.NotificationPolicyFilters {
	Actions: *[]*string,
	AlertTriggerPreferences: *[]*string,
	Enabled: *[]*string,
	Environment: *[]*string,
	Event: *[]*string,
	EventSource: *[]*string,
	EventType: *[]*string,
	GroupBy: *[]*string,
	HealthCheckId: *[]*string,
	IncidentImpact: *[]*string,
	InputId: *[]*string,
	Limit: *[]*string,
	MegabitsPerSecond: *[]*string,
	NewHealth: *[]*string,
	NewStatus: *[]*string,
	PacketsPerSecond: *[]*string,
	PoolId: *[]*string,
	Product: *[]*string,
	ProjectId: *[]*string,
	Protocol: *[]*string,
	RequestsPerSecond: *[]*string,
	Services: *[]*string,
	Slo: *[]*string,
	Status: *[]*string,
	TargetHostname: *[]*string,
	TargetZoneName: *[]*string,
	Where: *[]*string,
	Zones: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.actions">Actions</a></code> | <code>*[]*string</code> | Targeted actions for alert. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.alertTriggerPreferences">AlertTriggerPreferences</a></code> | <code>*[]*string</code> | Alert trigger preferences. Example: `slo`. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.enabled">Enabled</a></code> | <code>*[]*string</code> | State of the pool to alert on. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.environment">Environment</a></code> | <code>*[]*string</code> | Environment of pages. Available values: `ENVIRONMENT_PREVIEW`, `ENVIRONMENT_PRODUCTION`. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.event">Event</a></code> | <code>*[]*string</code> | Pages event to alert. Available values: `EVENT_DEPLOYMENT_STARTED`, `EVENT_DEPLOYMENT_FAILED`, `EVENT_DEPLOYMENT_SUCCESS`. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.eventSource">EventSource</a></code> | <code>*[]*string</code> | Source configuration to alert on for pool or origin. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.eventType">EventType</a></code> | <code>*[]*string</code> | Stream event type to alert on. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.groupBy">GroupBy</a></code> | <code>*[]*string</code> | Alert grouping. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.healthCheckId">HealthCheckId</a></code> | <code>*[]*string</code> | Identifier health check. Required when using `filters.0.status`. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.incidentImpact">IncidentImpact</a></code> | <code>*[]*string</code> | The incident impact level that will trigger the dispatch of a notification. Available values: `INCIDENT_IMPACT_NONE`, `INCIDENT_IMPACT_MINOR`, `INCIDENT_IMPACT_MAJOR`, `INCIDENT_IMPACT_CRITICAL`. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.inputId">InputId</a></code> | <code>*[]*string</code> | Stream input id to alert on. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.limit">Limit</a></code> | <code>*[]*string</code> | A numerical limit. Example: `100`. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.megabitsPerSecond">MegabitsPerSecond</a></code> | <code>*[]*string</code> | Megabits per second threshold for dos alert. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.newHealth">NewHealth</a></code> | <code>*[]*string</code> | Health status to alert on for pool or origin. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.newStatus">NewStatus</a></code> | <code>*[]*string</code> | Tunnel health status to alert on. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.packetsPerSecond">PacketsPerSecond</a></code> | <code>*[]*string</code> | Packets per second threshold for dos alert. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.poolId">PoolId</a></code> | <code>*[]*string</code> | Load balancer pool identifier. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.product">Product</a></code> | <code>*[]*string</code> | Product name. Available values: `worker_requests`, `worker_durable_objects_requests`, `worker_durable_objects_duration`, `worker_durable_objects_data_transfer`, `worker_durable_objects_stored_data`, `worker_durable_objects_storage_deletes`, `worker_durable_objects_storage_writes`, `worker_durable_objects_storage_reads`. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.projectId">ProjectId</a></code> | <code>*[]*string</code> | Identifier of pages project. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.protocol">Protocol</a></code> | <code>*[]*string</code> | Protocol to alert on for dos. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.requestsPerSecond">RequestsPerSecond</a></code> | <code>*[]*string</code> | Requests per second threshold for dos alert. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.services">Services</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/notification_policy#services NotificationPolicy#services}. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.slo">Slo</a></code> | <code>*[]*string</code> | A numerical limit. Example: `99.9`. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.status">Status</a></code> | <code>*[]*string</code> | Status to alert on. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.targetHostname">TargetHostname</a></code> | <code>*[]*string</code> | Target host to alert on for dos. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.targetZoneName">TargetZoneName</a></code> | <code>*[]*string</code> | Target domain to alert on. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.where">Where</a></code> | <code>*[]*string</code> | Filter for alert. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.zones">Zones</a></code> | <code>*[]*string</code> | A list of zone identifiers. |

---

##### `Actions`<sup>Optional</sup> <a name="Actions" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.actions"></a>

```go
Actions *[]*string
```

- *Type:* *[]*string

Targeted actions for alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/notification_policy#actions NotificationPolicy#actions}

---

##### `AlertTriggerPreferences`<sup>Optional</sup> <a name="AlertTriggerPreferences" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.alertTriggerPreferences"></a>

```go
AlertTriggerPreferences *[]*string
```

- *Type:* *[]*string

Alert trigger preferences. Example: `slo`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/notification_policy#alert_trigger_preferences NotificationPolicy#alert_trigger_preferences}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.enabled"></a>

```go
Enabled *[]*string
```

- *Type:* *[]*string

State of the pool to alert on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/notification_policy#enabled NotificationPolicy#enabled}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.environment"></a>

```go
Environment *[]*string
```

- *Type:* *[]*string

Environment of pages. Available values: `ENVIRONMENT_PREVIEW`, `ENVIRONMENT_PRODUCTION`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/notification_policy#environment NotificationPolicy#environment}

---

##### `Event`<sup>Optional</sup> <a name="Event" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.event"></a>

```go
Event *[]*string
```

- *Type:* *[]*string

Pages event to alert. Available values: `EVENT_DEPLOYMENT_STARTED`, `EVENT_DEPLOYMENT_FAILED`, `EVENT_DEPLOYMENT_SUCCESS`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/notification_policy#event NotificationPolicy#event}

---

##### `EventSource`<sup>Optional</sup> <a name="EventSource" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.eventSource"></a>

```go
EventSource *[]*string
```

- *Type:* *[]*string

Source configuration to alert on for pool or origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/notification_policy#event_source NotificationPolicy#event_source}

---

##### `EventType`<sup>Optional</sup> <a name="EventType" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.eventType"></a>

```go
EventType *[]*string
```

- *Type:* *[]*string

Stream event type to alert on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/notification_policy#event_type NotificationPolicy#event_type}

---

##### `GroupBy`<sup>Optional</sup> <a name="GroupBy" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.groupBy"></a>

```go
GroupBy *[]*string
```

- *Type:* *[]*string

Alert grouping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/notification_policy#group_by NotificationPolicy#group_by}

---

##### `HealthCheckId`<sup>Optional</sup> <a name="HealthCheckId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.healthCheckId"></a>

```go
HealthCheckId *[]*string
```

- *Type:* *[]*string

Identifier health check. Required when using `filters.0.status`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/notification_policy#health_check_id NotificationPolicy#health_check_id}

---

##### `IncidentImpact`<sup>Optional</sup> <a name="IncidentImpact" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.incidentImpact"></a>

```go
IncidentImpact *[]*string
```

- *Type:* *[]*string

The incident impact level that will trigger the dispatch of a notification. Available values: `INCIDENT_IMPACT_NONE`, `INCIDENT_IMPACT_MINOR`, `INCIDENT_IMPACT_MAJOR`, `INCIDENT_IMPACT_CRITICAL`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/notification_policy#incident_impact NotificationPolicy#incident_impact}

---

##### `InputId`<sup>Optional</sup> <a name="InputId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.inputId"></a>

```go
InputId *[]*string
```

- *Type:* *[]*string

Stream input id to alert on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/notification_policy#input_id NotificationPolicy#input_id}

---

##### `Limit`<sup>Optional</sup> <a name="Limit" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.limit"></a>

```go
Limit *[]*string
```

- *Type:* *[]*string

A numerical limit. Example: `100`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/notification_policy#limit NotificationPolicy#limit}

---

##### `MegabitsPerSecond`<sup>Optional</sup> <a name="MegabitsPerSecond" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.megabitsPerSecond"></a>

```go
MegabitsPerSecond *[]*string
```

- *Type:* *[]*string

Megabits per second threshold for dos alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/notification_policy#megabits_per_second NotificationPolicy#megabits_per_second}

---

##### `NewHealth`<sup>Optional</sup> <a name="NewHealth" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.newHealth"></a>

```go
NewHealth *[]*string
```

- *Type:* *[]*string

Health status to alert on for pool or origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/notification_policy#new_health NotificationPolicy#new_health}

---

##### `NewStatus`<sup>Optional</sup> <a name="NewStatus" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.newStatus"></a>

```go
NewStatus *[]*string
```

- *Type:* *[]*string

Tunnel health status to alert on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/notification_policy#new_status NotificationPolicy#new_status}

---

##### `PacketsPerSecond`<sup>Optional</sup> <a name="PacketsPerSecond" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.packetsPerSecond"></a>

```go
PacketsPerSecond *[]*string
```

- *Type:* *[]*string

Packets per second threshold for dos alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/notification_policy#packets_per_second NotificationPolicy#packets_per_second}

---

##### `PoolId`<sup>Optional</sup> <a name="PoolId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.poolId"></a>

```go
PoolId *[]*string
```

- *Type:* *[]*string

Load balancer pool identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/notification_policy#pool_id NotificationPolicy#pool_id}

---

##### `Product`<sup>Optional</sup> <a name="Product" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.product"></a>

```go
Product *[]*string
```

- *Type:* *[]*string

Product name. Available values: `worker_requests`, `worker_durable_objects_requests`, `worker_durable_objects_duration`, `worker_durable_objects_data_transfer`, `worker_durable_objects_stored_data`, `worker_durable_objects_storage_deletes`, `worker_durable_objects_storage_writes`, `worker_durable_objects_storage_reads`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/notification_policy#product NotificationPolicy#product}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.projectId"></a>

```go
ProjectId *[]*string
```

- *Type:* *[]*string

Identifier of pages project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/notification_policy#project_id NotificationPolicy#project_id}

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.protocol"></a>

```go
Protocol *[]*string
```

- *Type:* *[]*string

Protocol to alert on for dos.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/notification_policy#protocol NotificationPolicy#protocol}

---

##### `RequestsPerSecond`<sup>Optional</sup> <a name="RequestsPerSecond" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.requestsPerSecond"></a>

```go
RequestsPerSecond *[]*string
```

- *Type:* *[]*string

Requests per second threshold for dos alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/notification_policy#requests_per_second NotificationPolicy#requests_per_second}

---

##### `Services`<sup>Optional</sup> <a name="Services" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.services"></a>

```go
Services *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/notification_policy#services NotificationPolicy#services}.

---

##### `Slo`<sup>Optional</sup> <a name="Slo" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.slo"></a>

```go
Slo *[]*string
```

- *Type:* *[]*string

A numerical limit. Example: `99.9`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/notification_policy#slo NotificationPolicy#slo}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.status"></a>

```go
Status *[]*string
```

- *Type:* *[]*string

Status to alert on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/notification_policy#status NotificationPolicy#status}

---

##### `TargetHostname`<sup>Optional</sup> <a name="TargetHostname" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.targetHostname"></a>

```go
TargetHostname *[]*string
```

- *Type:* *[]*string

Target host to alert on for dos.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/notification_policy#target_hostname NotificationPolicy#target_hostname}

---

##### `TargetZoneName`<sup>Optional</sup> <a name="TargetZoneName" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.targetZoneName"></a>

```go
TargetZoneName *[]*string
```

- *Type:* *[]*string

Target domain to alert on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/notification_policy#target_zone_name NotificationPolicy#target_zone_name}

---

##### `Where`<sup>Optional</sup> <a name="Where" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.where"></a>

```go
Where *[]*string
```

- *Type:* *[]*string

Filter for alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/notification_policy#where NotificationPolicy#where}

---

##### `Zones`<sup>Optional</sup> <a name="Zones" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.zones"></a>

```go
Zones *[]*string
```

- *Type:* *[]*string

A list of zone identifiers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/notification_policy#zones NotificationPolicy#zones}

---

### NotificationPolicyPagerdutyIntegration <a name="NotificationPolicyPagerdutyIntegration" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10/notificationpolicy"

&notificationpolicy.NotificationPolicyPagerdutyIntegration {
	Id: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegration.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/notification_policy#id NotificationPolicy#id}. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegration.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/notification_policy#name NotificationPolicy#name}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegration.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/notification_policy#id NotificationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegration.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/notification_policy#name NotificationPolicy#name}.

---

### NotificationPolicyWebhooksIntegration <a name="NotificationPolicyWebhooksIntegration" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10/notificationpolicy"

&notificationpolicy.NotificationPolicyWebhooksIntegration {
	Id: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegration.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/notification_policy#id NotificationPolicy#id}. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegration.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/notification_policy#name NotificationPolicy#name}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegration.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/notification_policy#id NotificationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegration.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/notification_policy#name NotificationPolicy#name}.

---

## Classes <a name="Classes" id="Classes"></a>

### NotificationPolicyEmailIntegrationList <a name="NotificationPolicyEmailIntegrationList" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegrationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegrationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10/notificationpolicy"

notificationpolicy.NewNotificationPolicyEmailIntegrationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NotificationPolicyEmailIntegrationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegrationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegrationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegrationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegrationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegrationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegrationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegrationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegrationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegrationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegrationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegrationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegrationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegrationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegrationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegrationList.get"></a>

```go
func Get(index *f64) NotificationPolicyEmailIntegrationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegrationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegrationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegrationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegrationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegrationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegrationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegrationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NotificationPolicyEmailIntegrationOutputReference <a name="NotificationPolicyEmailIntegrationOutputReference" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegrationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10/notificationpolicy"

notificationpolicy.NewNotificationPolicyEmailIntegrationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NotificationPolicyEmailIntegrationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegrationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegrationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegrationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegrationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegrationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegrationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegrationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegrationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegrationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegrationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegrationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegrationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegrationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegrationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegrationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegrationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegrationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegrationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegrationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegrationOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegrationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegrationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegrationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegrationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegrationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegrationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegrationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegrationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegrationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegrationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegrationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegrationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegrationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegrationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegrationOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegrationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegrationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegrationOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegrationOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegrationOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegrationOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegrationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegrationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegrationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegrationOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegrationOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegrationOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegrationOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyEmailIntegrationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NotificationPolicyFiltersOutputReference <a name="NotificationPolicyFiltersOutputReference" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10/notificationpolicy"

notificationpolicy.NewNotificationPolicyFiltersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NotificationPolicyFiltersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetActions">ResetActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetAlertTriggerPreferences">ResetAlertTriggerPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetEvent">ResetEvent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetEventSource">ResetEventSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetEventType">ResetEventType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetGroupBy">ResetGroupBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetHealthCheckId">ResetHealthCheckId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetIncidentImpact">ResetIncidentImpact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetInputId">ResetInputId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetLimit">ResetLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetMegabitsPerSecond">ResetMegabitsPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetNewHealth">ResetNewHealth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetNewStatus">ResetNewStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetPacketsPerSecond">ResetPacketsPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetPoolId">ResetPoolId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetProduct">ResetProduct</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetRequestsPerSecond">ResetRequestsPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetServices">ResetServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetSlo">ResetSlo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetTargetHostname">ResetTargetHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetTargetZoneName">ResetTargetZoneName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetWhere">ResetWhere</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetZones">ResetZones</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetActions` <a name="ResetActions" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetActions"></a>

```go
func ResetActions()
```

##### `ResetAlertTriggerPreferences` <a name="ResetAlertTriggerPreferences" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetAlertTriggerPreferences"></a>

```go
func ResetAlertTriggerPreferences()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetEnvironment"></a>

```go
func ResetEnvironment()
```

##### `ResetEvent` <a name="ResetEvent" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetEvent"></a>

```go
func ResetEvent()
```

##### `ResetEventSource` <a name="ResetEventSource" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetEventSource"></a>

```go
func ResetEventSource()
```

##### `ResetEventType` <a name="ResetEventType" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetEventType"></a>

```go
func ResetEventType()
```

##### `ResetGroupBy` <a name="ResetGroupBy" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetGroupBy"></a>

```go
func ResetGroupBy()
```

##### `ResetHealthCheckId` <a name="ResetHealthCheckId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetHealthCheckId"></a>

```go
func ResetHealthCheckId()
```

##### `ResetIncidentImpact` <a name="ResetIncidentImpact" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetIncidentImpact"></a>

```go
func ResetIncidentImpact()
```

##### `ResetInputId` <a name="ResetInputId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetInputId"></a>

```go
func ResetInputId()
```

##### `ResetLimit` <a name="ResetLimit" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetLimit"></a>

```go
func ResetLimit()
```

##### `ResetMegabitsPerSecond` <a name="ResetMegabitsPerSecond" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetMegabitsPerSecond"></a>

```go
func ResetMegabitsPerSecond()
```

##### `ResetNewHealth` <a name="ResetNewHealth" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetNewHealth"></a>

```go
func ResetNewHealth()
```

##### `ResetNewStatus` <a name="ResetNewStatus" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetNewStatus"></a>

```go
func ResetNewStatus()
```

##### `ResetPacketsPerSecond` <a name="ResetPacketsPerSecond" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetPacketsPerSecond"></a>

```go
func ResetPacketsPerSecond()
```

##### `ResetPoolId` <a name="ResetPoolId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetPoolId"></a>

```go
func ResetPoolId()
```

##### `ResetProduct` <a name="ResetProduct" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetProduct"></a>

```go
func ResetProduct()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetProjectId"></a>

```go
func ResetProjectId()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetProtocol"></a>

```go
func ResetProtocol()
```

##### `ResetRequestsPerSecond` <a name="ResetRequestsPerSecond" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetRequestsPerSecond"></a>

```go
func ResetRequestsPerSecond()
```

##### `ResetServices` <a name="ResetServices" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetServices"></a>

```go
func ResetServices()
```

##### `ResetSlo` <a name="ResetSlo" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetSlo"></a>

```go
func ResetSlo()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetTargetHostname` <a name="ResetTargetHostname" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetTargetHostname"></a>

```go
func ResetTargetHostname()
```

##### `ResetTargetZoneName` <a name="ResetTargetZoneName" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetTargetZoneName"></a>

```go
func ResetTargetZoneName()
```

##### `ResetWhere` <a name="ResetWhere" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetWhere"></a>

```go
func ResetWhere()
```

##### `ResetZones` <a name="ResetZones" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetZones"></a>

```go
func ResetZones()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.actionsInput">ActionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.alertTriggerPreferencesInput">AlertTriggerPreferencesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.enabledInput">EnabledInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.environmentInput">EnvironmentInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.eventInput">EventInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.eventSourceInput">EventSourceInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.eventTypeInput">EventTypeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.groupByInput">GroupByInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.healthCheckIdInput">HealthCheckIdInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.incidentImpactInput">IncidentImpactInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.inputIdInput">InputIdInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.limitInput">LimitInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.megabitsPerSecondInput">MegabitsPerSecondInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.newHealthInput">NewHealthInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.newStatusInput">NewStatusInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.packetsPerSecondInput">PacketsPerSecondInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.poolIdInput">PoolIdInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.productInput">ProductInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.requestsPerSecondInput">RequestsPerSecondInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.servicesInput">ServicesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.sloInput">SloInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.statusInput">StatusInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.targetHostnameInput">TargetHostnameInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.targetZoneNameInput">TargetZoneNameInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.whereInput">WhereInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.zonesInput">ZonesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.actions">Actions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.alertTriggerPreferences">AlertTriggerPreferences</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.enabled">Enabled</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.environment">Environment</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.event">Event</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.eventSource">EventSource</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.eventType">EventType</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.groupBy">GroupBy</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.healthCheckId">HealthCheckId</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.incidentImpact">IncidentImpact</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.inputId">InputId</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.limit">Limit</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.megabitsPerSecond">MegabitsPerSecond</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.newHealth">NewHealth</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.newStatus">NewStatus</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.packetsPerSecond">PacketsPerSecond</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.poolId">PoolId</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.product">Product</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.projectId">ProjectId</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.protocol">Protocol</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.requestsPerSecond">RequestsPerSecond</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.services">Services</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.slo">Slo</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.status">Status</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.targetHostname">TargetHostname</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.targetZoneName">TargetZoneName</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.where">Where</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.zones">Zones</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters">NotificationPolicyFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionsInput`<sup>Optional</sup> <a name="ActionsInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.actionsInput"></a>

```go
func ActionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AlertTriggerPreferencesInput`<sup>Optional</sup> <a name="AlertTriggerPreferencesInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.alertTriggerPreferencesInput"></a>

```go
func AlertTriggerPreferencesInput() *[]*string
```

- *Type:* *[]*string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.enabledInput"></a>

```go
func EnabledInput() *[]*string
```

- *Type:* *[]*string

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.environmentInput"></a>

```go
func EnvironmentInput() *[]*string
```

- *Type:* *[]*string

---

##### `EventInput`<sup>Optional</sup> <a name="EventInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.eventInput"></a>

```go
func EventInput() *[]*string
```

- *Type:* *[]*string

---

##### `EventSourceInput`<sup>Optional</sup> <a name="EventSourceInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.eventSourceInput"></a>

```go
func EventSourceInput() *[]*string
```

- *Type:* *[]*string

---

##### `EventTypeInput`<sup>Optional</sup> <a name="EventTypeInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.eventTypeInput"></a>

```go
func EventTypeInput() *[]*string
```

- *Type:* *[]*string

---

##### `GroupByInput`<sup>Optional</sup> <a name="GroupByInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.groupByInput"></a>

```go
func GroupByInput() *[]*string
```

- *Type:* *[]*string

---

##### `HealthCheckIdInput`<sup>Optional</sup> <a name="HealthCheckIdInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.healthCheckIdInput"></a>

```go
func HealthCheckIdInput() *[]*string
```

- *Type:* *[]*string

---

##### `IncidentImpactInput`<sup>Optional</sup> <a name="IncidentImpactInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.incidentImpactInput"></a>

```go
func IncidentImpactInput() *[]*string
```

- *Type:* *[]*string

---

##### `InputIdInput`<sup>Optional</sup> <a name="InputIdInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.inputIdInput"></a>

```go
func InputIdInput() *[]*string
```

- *Type:* *[]*string

---

##### `LimitInput`<sup>Optional</sup> <a name="LimitInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.limitInput"></a>

```go
func LimitInput() *[]*string
```

- *Type:* *[]*string

---

##### `MegabitsPerSecondInput`<sup>Optional</sup> <a name="MegabitsPerSecondInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.megabitsPerSecondInput"></a>

```go
func MegabitsPerSecondInput() *[]*string
```

- *Type:* *[]*string

---

##### `NewHealthInput`<sup>Optional</sup> <a name="NewHealthInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.newHealthInput"></a>

```go
func NewHealthInput() *[]*string
```

- *Type:* *[]*string

---

##### `NewStatusInput`<sup>Optional</sup> <a name="NewStatusInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.newStatusInput"></a>

```go
func NewStatusInput() *[]*string
```

- *Type:* *[]*string

---

##### `PacketsPerSecondInput`<sup>Optional</sup> <a name="PacketsPerSecondInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.packetsPerSecondInput"></a>

```go
func PacketsPerSecondInput() *[]*string
```

- *Type:* *[]*string

---

##### `PoolIdInput`<sup>Optional</sup> <a name="PoolIdInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.poolIdInput"></a>

```go
func PoolIdInput() *[]*string
```

- *Type:* *[]*string

---

##### `ProductInput`<sup>Optional</sup> <a name="ProductInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.productInput"></a>

```go
func ProductInput() *[]*string
```

- *Type:* *[]*string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.projectIdInput"></a>

```go
func ProjectIdInput() *[]*string
```

- *Type:* *[]*string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *[]*string
```

- *Type:* *[]*string

---

##### `RequestsPerSecondInput`<sup>Optional</sup> <a name="RequestsPerSecondInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.requestsPerSecondInput"></a>

```go
func RequestsPerSecondInput() *[]*string
```

- *Type:* *[]*string

---

##### `ServicesInput`<sup>Optional</sup> <a name="ServicesInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.servicesInput"></a>

```go
func ServicesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SloInput`<sup>Optional</sup> <a name="SloInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.sloInput"></a>

```go
func SloInput() *[]*string
```

- *Type:* *[]*string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.statusInput"></a>

```go
func StatusInput() *[]*string
```

- *Type:* *[]*string

---

##### `TargetHostnameInput`<sup>Optional</sup> <a name="TargetHostnameInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.targetHostnameInput"></a>

```go
func TargetHostnameInput() *[]*string
```

- *Type:* *[]*string

---

##### `TargetZoneNameInput`<sup>Optional</sup> <a name="TargetZoneNameInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.targetZoneNameInput"></a>

```go
func TargetZoneNameInput() *[]*string
```

- *Type:* *[]*string

---

##### `WhereInput`<sup>Optional</sup> <a name="WhereInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.whereInput"></a>

```go
func WhereInput() *[]*string
```

- *Type:* *[]*string

---

##### `ZonesInput`<sup>Optional</sup> <a name="ZonesInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.zonesInput"></a>

```go
func ZonesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.actions"></a>

```go
func Actions() *[]*string
```

- *Type:* *[]*string

---

##### `AlertTriggerPreferences`<sup>Required</sup> <a name="AlertTriggerPreferences" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.alertTriggerPreferences"></a>

```go
func AlertTriggerPreferences() *[]*string
```

- *Type:* *[]*string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.enabled"></a>

```go
func Enabled() *[]*string
```

- *Type:* *[]*string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.environment"></a>

```go
func Environment() *[]*string
```

- *Type:* *[]*string

---

##### `Event`<sup>Required</sup> <a name="Event" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.event"></a>

```go
func Event() *[]*string
```

- *Type:* *[]*string

---

##### `EventSource`<sup>Required</sup> <a name="EventSource" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.eventSource"></a>

```go
func EventSource() *[]*string
```

- *Type:* *[]*string

---

##### `EventType`<sup>Required</sup> <a name="EventType" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.eventType"></a>

```go
func EventType() *[]*string
```

- *Type:* *[]*string

---

##### `GroupBy`<sup>Required</sup> <a name="GroupBy" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.groupBy"></a>

```go
func GroupBy() *[]*string
```

- *Type:* *[]*string

---

##### `HealthCheckId`<sup>Required</sup> <a name="HealthCheckId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.healthCheckId"></a>

```go
func HealthCheckId() *[]*string
```

- *Type:* *[]*string

---

##### `IncidentImpact`<sup>Required</sup> <a name="IncidentImpact" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.incidentImpact"></a>

```go
func IncidentImpact() *[]*string
```

- *Type:* *[]*string

---

##### `InputId`<sup>Required</sup> <a name="InputId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.inputId"></a>

```go
func InputId() *[]*string
```

- *Type:* *[]*string

---

##### `Limit`<sup>Required</sup> <a name="Limit" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.limit"></a>

```go
func Limit() *[]*string
```

- *Type:* *[]*string

---

##### `MegabitsPerSecond`<sup>Required</sup> <a name="MegabitsPerSecond" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.megabitsPerSecond"></a>

```go
func MegabitsPerSecond() *[]*string
```

- *Type:* *[]*string

---

##### `NewHealth`<sup>Required</sup> <a name="NewHealth" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.newHealth"></a>

```go
func NewHealth() *[]*string
```

- *Type:* *[]*string

---

##### `NewStatus`<sup>Required</sup> <a name="NewStatus" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.newStatus"></a>

```go
func NewStatus() *[]*string
```

- *Type:* *[]*string

---

##### `PacketsPerSecond`<sup>Required</sup> <a name="PacketsPerSecond" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.packetsPerSecond"></a>

```go
func PacketsPerSecond() *[]*string
```

- *Type:* *[]*string

---

##### `PoolId`<sup>Required</sup> <a name="PoolId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.poolId"></a>

```go
func PoolId() *[]*string
```

- *Type:* *[]*string

---

##### `Product`<sup>Required</sup> <a name="Product" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.product"></a>

```go
func Product() *[]*string
```

- *Type:* *[]*string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.projectId"></a>

```go
func ProjectId() *[]*string
```

- *Type:* *[]*string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.protocol"></a>

```go
func Protocol() *[]*string
```

- *Type:* *[]*string

---

##### `RequestsPerSecond`<sup>Required</sup> <a name="RequestsPerSecond" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.requestsPerSecond"></a>

```go
func RequestsPerSecond() *[]*string
```

- *Type:* *[]*string

---

##### `Services`<sup>Required</sup> <a name="Services" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.services"></a>

```go
func Services() *[]*string
```

- *Type:* *[]*string

---

##### `Slo`<sup>Required</sup> <a name="Slo" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.slo"></a>

```go
func Slo() *[]*string
```

- *Type:* *[]*string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.status"></a>

```go
func Status() *[]*string
```

- *Type:* *[]*string

---

##### `TargetHostname`<sup>Required</sup> <a name="TargetHostname" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.targetHostname"></a>

```go
func TargetHostname() *[]*string
```

- *Type:* *[]*string

---

##### `TargetZoneName`<sup>Required</sup> <a name="TargetZoneName" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.targetZoneName"></a>

```go
func TargetZoneName() *[]*string
```

- *Type:* *[]*string

---

##### `Where`<sup>Required</sup> <a name="Where" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.where"></a>

```go
func Where() *[]*string
```

- *Type:* *[]*string

---

##### `Zones`<sup>Required</sup> <a name="Zones" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.zones"></a>

```go
func Zones() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.internalValue"></a>

```go
func InternalValue() NotificationPolicyFilters
```

- *Type:* <a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters">NotificationPolicyFilters</a>

---


### NotificationPolicyPagerdutyIntegrationList <a name="NotificationPolicyPagerdutyIntegrationList" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegrationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegrationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10/notificationpolicy"

notificationpolicy.NewNotificationPolicyPagerdutyIntegrationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NotificationPolicyPagerdutyIntegrationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegrationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegrationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegrationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegrationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegrationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegrationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegrationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegrationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegrationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegrationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegrationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegrationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegrationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegrationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegrationList.get"></a>

```go
func Get(index *f64) NotificationPolicyPagerdutyIntegrationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegrationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegrationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegrationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegrationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegrationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegrationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegrationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NotificationPolicyPagerdutyIntegrationOutputReference <a name="NotificationPolicyPagerdutyIntegrationOutputReference" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegrationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10/notificationpolicy"

notificationpolicy.NewNotificationPolicyPagerdutyIntegrationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NotificationPolicyPagerdutyIntegrationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegrationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegrationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegrationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegrationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegrationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegrationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegrationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegrationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegrationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegrationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegrationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegrationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegrationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegrationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegrationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegrationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegrationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegrationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegrationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegrationOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegrationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegrationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegrationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegrationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegrationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegrationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegrationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegrationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegrationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegrationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegrationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegrationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegrationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegrationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegrationOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegrationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegrationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegrationOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegrationOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegrationOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegrationOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegrationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegrationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegrationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegrationOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegrationOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegrationOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegrationOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyPagerdutyIntegrationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NotificationPolicyWebhooksIntegrationList <a name="NotificationPolicyWebhooksIntegrationList" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegrationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegrationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10/notificationpolicy"

notificationpolicy.NewNotificationPolicyWebhooksIntegrationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NotificationPolicyWebhooksIntegrationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegrationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegrationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegrationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegrationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegrationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegrationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegrationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegrationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegrationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegrationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegrationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegrationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegrationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegrationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegrationList.get"></a>

```go
func Get(index *f64) NotificationPolicyWebhooksIntegrationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegrationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegrationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegrationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegrationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegrationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegrationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegrationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NotificationPolicyWebhooksIntegrationOutputReference <a name="NotificationPolicyWebhooksIntegrationOutputReference" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegrationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10/notificationpolicy"

notificationpolicy.NewNotificationPolicyWebhooksIntegrationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NotificationPolicyWebhooksIntegrationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegrationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegrationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegrationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegrationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegrationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegrationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegrationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegrationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegrationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegrationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegrationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegrationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegrationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegrationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegrationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegrationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegrationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegrationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegrationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegrationOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegrationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegrationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegrationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegrationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegrationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegrationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegrationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegrationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegrationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegrationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegrationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegrationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegrationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegrationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegrationOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegrationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegrationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegrationOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegrationOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegrationOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegrationOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegrationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegrationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegrationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegrationOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegrationOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegrationOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegrationOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyWebhooksIntegrationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



