# `notificationPolicy` Submodule <a name="`notificationPolicy` Submodule" id="@cdktf/provider-cloudflare.notificationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NotificationPolicy <a name="NotificationPolicy" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/notification_policy cloudflare_notification_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/notificationpolicy"

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
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
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
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.putFilters">PutFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.putMechanisms">PutMechanisms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.resetAlertInterval">ResetAlertInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.resetFilters">ResetFilters</a></code> | *No description.* |

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

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

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

##### `PutFilters` <a name="PutFilters" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.putFilters"></a>

```go
func PutFilters(value NotificationPolicyFilters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.putFilters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters">NotificationPolicyFilters</a>

---

##### `PutMechanisms` <a name="PutMechanisms" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.putMechanisms"></a>

```go
func PutMechanisms(value NotificationPolicyMechanisms)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.putMechanisms.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanisms">NotificationPolicyMechanisms</a>

---

##### `ResetAlertInterval` <a name="ResetAlertInterval" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.resetAlertInterval"></a>

```go
func ResetAlertInterval()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetFilters` <a name="ResetFilters" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.resetFilters"></a>

```go
func ResetFilters()
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
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/notificationpolicy"

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
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/notificationpolicy"

notificationpolicy.NotificationPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/notificationpolicy"

notificationpolicy.NotificationPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/notificationpolicy"

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

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/notification_policy#import import section} in the documentation of this resource for the id to use

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
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.filters">Filters</a></code> | <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference">NotificationPolicyFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.mechanisms">Mechanisms</a></code> | <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference">NotificationPolicyMechanismsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.modified">Modified</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.alertIntervalInput">AlertIntervalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.alertTypeInput">AlertTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.filtersInput">FiltersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.mechanismsInput">MechanismsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.alertInterval">AlertInterval</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.alertType">AlertType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
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

##### `Filters`<sup>Required</sup> <a name="Filters" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.filters"></a>

```go
func Filters() NotificationPolicyFiltersOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference">NotificationPolicyFiltersOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Mechanisms`<sup>Required</sup> <a name="Mechanisms" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.mechanisms"></a>

```go
func Mechanisms() NotificationPolicyMechanismsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference">NotificationPolicyMechanismsOutputReference</a>

---

##### `Modified`<sup>Required</sup> <a name="Modified" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.modified"></a>

```go
func Modified() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `AlertIntervalInput`<sup>Optional</sup> <a name="AlertIntervalInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.alertIntervalInput"></a>

```go
func AlertIntervalInput() *string
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

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `FiltersInput`<sup>Optional</sup> <a name="FiltersInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.filtersInput"></a>

```go
func FiltersInput() interface{}
```

- *Type:* interface{}

---

##### `MechanismsInput`<sup>Optional</sup> <a name="MechanismsInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.mechanismsInput"></a>

```go
func MechanismsInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `AlertInterval`<sup>Required</sup> <a name="AlertInterval" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicy.property.alertInterval"></a>

```go
func AlertInterval() *string
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
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/notificationpolicy"

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
	Mechanisms: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13.notificationPolicy.NotificationPolicyMechanisms,
	Name: *string,
	AlertInterval: *string,
	Description: *string,
	Enabled: interface{},
	Filters: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13.notificationPolicy.NotificationPolicyFilters,
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
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.accountId">AccountId</a></code> | <code>*string</code> | The account id. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.alertType">AlertType</a></code> | <code>*string</code> | Refers to which event will trigger a Notification dispatch. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.mechanisms">Mechanisms</a></code> | <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanisms">NotificationPolicyMechanisms</a></code> | List of IDs that will be used when dispatching a notification. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.name">Name</a></code> | <code>*string</code> | Name of the policy. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.alertInterval">AlertInterval</a></code> | <code>*string</code> | Optional specification of how often to re-alert from the same incident, not support on all alert types. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.description">Description</a></code> | <code>*string</code> | Optional description for the Notification policy. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether or not the Notification policy is enabled. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.filters">Filters</a></code> | <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters">NotificationPolicyFilters</a></code> | Optional filters that allow you to be alerted only on a subset of events for that alert type based on some criteria. |

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

The account id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/notification_policy#account_id NotificationPolicy#account_id}

---

##### `AlertType`<sup>Required</sup> <a name="AlertType" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.alertType"></a>

```go
AlertType *string
```

- *Type:* *string

Refers to which event will trigger a Notification dispatch.

You can use the endpoint to get available alert types which then will give you a list of possible values.
Available values: "access_custom_certificate_expiration_type", "advanced_ddos_attack_l4_alert", "advanced_ddos_attack_l7_alert", "advanced_http_alert_error", "bgp_hijack_notification", "billing_usage_alert", "block_notification_block_removed", "block_notification_new_block", "block_notification_review_rejected", "bot_traffic_basic_alert", "brand_protection_alert", "brand_protection_digest", "clickhouse_alert_fw_anomaly", "clickhouse_alert_fw_ent_anomaly", "cloudforce_one_request_notification", "custom_analytics", "custom_bot_detection_alert", "custom_ssl_certificate_event_type", "dedicated_ssl_certificate_event_type", "device_connectivity_anomaly_alert", "dos_attack_l4", "dos_attack_l7", "expiring_service_token_alert", "failing_logpush_job_disabled_alert", "fbm_auto_advertisement", "fbm_dosd_attack", "fbm_volumetric_attack", "health_check_status_notification", "hostname_aop_custom_certificate_expiration_type", "http_alert_edge_error", "http_alert_origin_error", "image_notification", "image_resizing_notification", "incident_alert", "load_balancing_health_alert", "load_balancing_pool_enablement_alert", "logo_match_alert", "magic_tunnel_health_check_event", "magic_wan_tunnel_health", "maintenance_event_notification", "mtls_certificate_store_certificate_expiration_type", "pages_event_alert", "radar_notification", "real_origin_monitoring", "scriptmonitor_alert_new_code_change_detections", "scriptmonitor_alert_new_hosts", "scriptmonitor_alert_new_malicious_hosts", "scriptmonitor_alert_new_malicious_scripts", "scriptmonitor_alert_new_malicious_url", "scriptmonitor_alert_new_max_length_resource_url", "scriptmonitor_alert_new_resources", "secondary_dns_all_primaries_failing", "secondary_dns_primaries_failing", "secondary_dns_warning", "secondary_dns_zone_successfully_updated", "secondary_dns_zone_validation_warning", "security_insights_alert", "sentinel_alert", "stream_live_notifications", "synthetic_test_latency_alert", "synthetic_test_low_availability_alert", "traffic_anomalies_alert", "tunnel_health_event", "tunnel_update_event", "universal_ssl_event_type", "web_analytics_metrics_update", "zone_aop_custom_certificate_expiration_type".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/notification_policy#alert_type NotificationPolicy#alert_type}

---

##### `Mechanisms`<sup>Required</sup> <a name="Mechanisms" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.mechanisms"></a>

```go
Mechanisms NotificationPolicyMechanisms
```

- *Type:* <a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanisms">NotificationPolicyMechanisms</a>

List of IDs that will be used when dispatching a notification.

IDs for email type will be the email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/notification_policy#mechanisms NotificationPolicy#mechanisms}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/notification_policy#name NotificationPolicy#name}

---

##### `AlertInterval`<sup>Optional</sup> <a name="AlertInterval" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.alertInterval"></a>

```go
AlertInterval *string
```

- *Type:* *string

Optional specification of how often to re-alert from the same incident, not support on all alert types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/notification_policy#alert_interval NotificationPolicy#alert_interval}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Optional description for the Notification policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/notification_policy#description NotificationPolicy#description}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether or not the Notification policy is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/notification_policy#enabled NotificationPolicy#enabled}

---

##### `Filters`<sup>Optional</sup> <a name="Filters" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyConfig.property.filters"></a>

```go
Filters NotificationPolicyFilters
```

- *Type:* <a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters">NotificationPolicyFilters</a>

Optional filters that allow you to be alerted only on a subset of events for that alert type based on some criteria.

This is only available for select alert types. See alert type documentation for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/notification_policy#filters NotificationPolicy#filters}

---

### NotificationPolicyFilters <a name="NotificationPolicyFilters" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/notificationpolicy"

&notificationpolicy.NotificationPolicyFilters {
	Actions: *[]*string,
	AffectedAsns: *[]*string,
	AffectedComponents: *[]*string,
	AffectedLocations: *[]*string,
	AirportCode: *[]*string,
	AlertTriggerPreferences: *[]*string,
	AlertTriggerPreferencesValue: *[]*string,
	Enabled: *[]*string,
	Environment: *[]*string,
	Event: *[]*string,
	EventSource: *[]*string,
	EventType: *[]*string,
	GroupBy: *[]*string,
	HealthCheckId: *[]*string,
	IncidentImpact: *[]*string,
	InputId: *[]*string,
	InsightClass: *[]*string,
	Limit: *[]*string,
	LogoTag: *[]*string,
	MegabitsPerSecond: *[]*string,
	NewHealth: *[]*string,
	NewStatus: *[]*string,
	PacketsPerSecond: *[]*string,
	PoolId: *[]*string,
	PopNames: *[]*string,
	Product: *[]*string,
	ProjectId: *[]*string,
	Protocol: *[]*string,
	QueryTag: *[]*string,
	RequestsPerSecond: *[]*string,
	Selectors: *[]*string,
	Services: *[]*string,
	Slo: *[]*string,
	Status: *[]*string,
	TargetHostname: *[]*string,
	TargetIp: *[]*string,
	TargetZoneName: *[]*string,
	TrafficExclusions: *[]*string,
	TunnelId: *[]*string,
	TunnelName: *[]*string,
	Where: *[]*string,
	Zones: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.actions">Actions</a></code> | <code>*[]*string</code> | Usage depends on specific alert type. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.affectedAsns">AffectedAsns</a></code> | <code>*[]*string</code> | Used for configuring radar_notification. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.affectedComponents">AffectedComponents</a></code> | <code>*[]*string</code> | Used for configuring incident_alert. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.affectedLocations">AffectedLocations</a></code> | <code>*[]*string</code> | Used for configuring radar_notification. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.airportCode">AirportCode</a></code> | <code>*[]*string</code> | Used for configuring maintenance_event_notification. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.alertTriggerPreferences">AlertTriggerPreferences</a></code> | <code>*[]*string</code> | Usage depends on specific alert type. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.alertTriggerPreferencesValue">AlertTriggerPreferencesValue</a></code> | <code>*[]*string</code> | Usage depends on specific alert type. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.enabled">Enabled</a></code> | <code>*[]*string</code> | Used for configuring load_balancing_pool_enablement_alert. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.environment">Environment</a></code> | <code>*[]*string</code> | Used for configuring pages_event_alert. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.event">Event</a></code> | <code>*[]*string</code> | Used for configuring pages_event_alert. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.eventSource">EventSource</a></code> | <code>*[]*string</code> | Used for configuring load_balancing_health_alert. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.eventType">EventType</a></code> | <code>*[]*string</code> | Usage depends on specific alert type. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.groupBy">GroupBy</a></code> | <code>*[]*string</code> | Usage depends on specific alert type. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.healthCheckId">HealthCheckId</a></code> | <code>*[]*string</code> | Used for configuring health_check_status_notification. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.incidentImpact">IncidentImpact</a></code> | <code>*[]*string</code> | Used for configuring incident_alert. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.inputId">InputId</a></code> | <code>*[]*string</code> | Used for configuring stream_live_notifications. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.insightClass">InsightClass</a></code> | <code>*[]*string</code> | Used for configuring security_insights_alert. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.limit">Limit</a></code> | <code>*[]*string</code> | Used for configuring billing_usage_alert. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.logoTag">LogoTag</a></code> | <code>*[]*string</code> | Used for configuring logo_match_alert. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.megabitsPerSecond">MegabitsPerSecond</a></code> | <code>*[]*string</code> | Used for configuring advanced_ddos_attack_l4_alert. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.newHealth">NewHealth</a></code> | <code>*[]*string</code> | Used for configuring load_balancing_health_alert. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.newStatus">NewStatus</a></code> | <code>*[]*string</code> | Used for configuring tunnel_health_event. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.packetsPerSecond">PacketsPerSecond</a></code> | <code>*[]*string</code> | Used for configuring advanced_ddos_attack_l4_alert. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.poolId">PoolId</a></code> | <code>*[]*string</code> | Usage depends on specific alert type. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.popNames">PopNames</a></code> | <code>*[]*string</code> | Usage depends on specific alert type. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.product">Product</a></code> | <code>*[]*string</code> | Used for configuring billing_usage_alert. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.projectId">ProjectId</a></code> | <code>*[]*string</code> | Used for configuring pages_event_alert. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.protocol">Protocol</a></code> | <code>*[]*string</code> | Used for configuring advanced_ddos_attack_l4_alert. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.queryTag">QueryTag</a></code> | <code>*[]*string</code> | Usage depends on specific alert type. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.requestsPerSecond">RequestsPerSecond</a></code> | <code>*[]*string</code> | Used for configuring advanced_ddos_attack_l7_alert. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.selectors">Selectors</a></code> | <code>*[]*string</code> | Usage depends on specific alert type. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.services">Services</a></code> | <code>*[]*string</code> | Used for configuring clickhouse_alert_fw_ent_anomaly. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.slo">Slo</a></code> | <code>*[]*string</code> | Usage depends on specific alert type. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.status">Status</a></code> | <code>*[]*string</code> | Used for configuring health_check_status_notification. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.targetHostname">TargetHostname</a></code> | <code>*[]*string</code> | Used for configuring advanced_ddos_attack_l7_alert. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.targetIp">TargetIp</a></code> | <code>*[]*string</code> | Used for configuring advanced_ddos_attack_l4_alert. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.targetZoneName">TargetZoneName</a></code> | <code>*[]*string</code> | Used for configuring advanced_ddos_attack_l7_alert. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.trafficExclusions">TrafficExclusions</a></code> | <code>*[]*string</code> | Used for configuring traffic_anomalies_alert. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.tunnelId">TunnelId</a></code> | <code>*[]*string</code> | Used for configuring tunnel_health_event. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.tunnelName">TunnelName</a></code> | <code>*[]*string</code> | Usage depends on specific alert type. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.where">Where</a></code> | <code>*[]*string</code> | Usage depends on specific alert type. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.zones">Zones</a></code> | <code>*[]*string</code> | Usage depends on specific alert type. |

---

##### `Actions`<sup>Optional</sup> <a name="Actions" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.actions"></a>

```go
Actions *[]*string
```

- *Type:* *[]*string

Usage depends on specific alert type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/notification_policy#actions NotificationPolicy#actions}

---

##### `AffectedAsns`<sup>Optional</sup> <a name="AffectedAsns" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.affectedAsns"></a>

```go
AffectedAsns *[]*string
```

- *Type:* *[]*string

Used for configuring radar_notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/notification_policy#affected_asns NotificationPolicy#affected_asns}

---

##### `AffectedComponents`<sup>Optional</sup> <a name="AffectedComponents" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.affectedComponents"></a>

```go
AffectedComponents *[]*string
```

- *Type:* *[]*string

Used for configuring incident_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/notification_policy#affected_components NotificationPolicy#affected_components}

---

##### `AffectedLocations`<sup>Optional</sup> <a name="AffectedLocations" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.affectedLocations"></a>

```go
AffectedLocations *[]*string
```

- *Type:* *[]*string

Used for configuring radar_notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/notification_policy#affected_locations NotificationPolicy#affected_locations}

---

##### `AirportCode`<sup>Optional</sup> <a name="AirportCode" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.airportCode"></a>

```go
AirportCode *[]*string
```

- *Type:* *[]*string

Used for configuring maintenance_event_notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/notification_policy#airport_code NotificationPolicy#airport_code}

---

##### `AlertTriggerPreferences`<sup>Optional</sup> <a name="AlertTriggerPreferences" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.alertTriggerPreferences"></a>

```go
AlertTriggerPreferences *[]*string
```

- *Type:* *[]*string

Usage depends on specific alert type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/notification_policy#alert_trigger_preferences NotificationPolicy#alert_trigger_preferences}

---

##### `AlertTriggerPreferencesValue`<sup>Optional</sup> <a name="AlertTriggerPreferencesValue" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.alertTriggerPreferencesValue"></a>

```go
AlertTriggerPreferencesValue *[]*string
```

- *Type:* *[]*string

Usage depends on specific alert type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/notification_policy#alert_trigger_preferences_value NotificationPolicy#alert_trigger_preferences_value}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.enabled"></a>

```go
Enabled *[]*string
```

- *Type:* *[]*string

Used for configuring load_balancing_pool_enablement_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/notification_policy#enabled NotificationPolicy#enabled}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.environment"></a>

```go
Environment *[]*string
```

- *Type:* *[]*string

Used for configuring pages_event_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/notification_policy#environment NotificationPolicy#environment}

---

##### `Event`<sup>Optional</sup> <a name="Event" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.event"></a>

```go
Event *[]*string
```

- *Type:* *[]*string

Used for configuring pages_event_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/notification_policy#event NotificationPolicy#event}

---

##### `EventSource`<sup>Optional</sup> <a name="EventSource" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.eventSource"></a>

```go
EventSource *[]*string
```

- *Type:* *[]*string

Used for configuring load_balancing_health_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/notification_policy#event_source NotificationPolicy#event_source}

---

##### `EventType`<sup>Optional</sup> <a name="EventType" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.eventType"></a>

```go
EventType *[]*string
```

- *Type:* *[]*string

Usage depends on specific alert type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/notification_policy#event_type NotificationPolicy#event_type}

---

##### `GroupBy`<sup>Optional</sup> <a name="GroupBy" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.groupBy"></a>

```go
GroupBy *[]*string
```

- *Type:* *[]*string

Usage depends on specific alert type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/notification_policy#group_by NotificationPolicy#group_by}

---

##### `HealthCheckId`<sup>Optional</sup> <a name="HealthCheckId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.healthCheckId"></a>

```go
HealthCheckId *[]*string
```

- *Type:* *[]*string

Used for configuring health_check_status_notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/notification_policy#health_check_id NotificationPolicy#health_check_id}

---

##### `IncidentImpact`<sup>Optional</sup> <a name="IncidentImpact" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.incidentImpact"></a>

```go
IncidentImpact *[]*string
```

- *Type:* *[]*string

Used for configuring incident_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/notification_policy#incident_impact NotificationPolicy#incident_impact}

---

##### `InputId`<sup>Optional</sup> <a name="InputId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.inputId"></a>

```go
InputId *[]*string
```

- *Type:* *[]*string

Used for configuring stream_live_notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/notification_policy#input_id NotificationPolicy#input_id}

---

##### `InsightClass`<sup>Optional</sup> <a name="InsightClass" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.insightClass"></a>

```go
InsightClass *[]*string
```

- *Type:* *[]*string

Used for configuring security_insights_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/notification_policy#insight_class NotificationPolicy#insight_class}

---

##### `Limit`<sup>Optional</sup> <a name="Limit" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.limit"></a>

```go
Limit *[]*string
```

- *Type:* *[]*string

Used for configuring billing_usage_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/notification_policy#limit NotificationPolicy#limit}

---

##### `LogoTag`<sup>Optional</sup> <a name="LogoTag" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.logoTag"></a>

```go
LogoTag *[]*string
```

- *Type:* *[]*string

Used for configuring logo_match_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/notification_policy#logo_tag NotificationPolicy#logo_tag}

---

##### `MegabitsPerSecond`<sup>Optional</sup> <a name="MegabitsPerSecond" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.megabitsPerSecond"></a>

```go
MegabitsPerSecond *[]*string
```

- *Type:* *[]*string

Used for configuring advanced_ddos_attack_l4_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/notification_policy#megabits_per_second NotificationPolicy#megabits_per_second}

---

##### `NewHealth`<sup>Optional</sup> <a name="NewHealth" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.newHealth"></a>

```go
NewHealth *[]*string
```

- *Type:* *[]*string

Used for configuring load_balancing_health_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/notification_policy#new_health NotificationPolicy#new_health}

---

##### `NewStatus`<sup>Optional</sup> <a name="NewStatus" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.newStatus"></a>

```go
NewStatus *[]*string
```

- *Type:* *[]*string

Used for configuring tunnel_health_event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/notification_policy#new_status NotificationPolicy#new_status}

---

##### `PacketsPerSecond`<sup>Optional</sup> <a name="PacketsPerSecond" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.packetsPerSecond"></a>

```go
PacketsPerSecond *[]*string
```

- *Type:* *[]*string

Used for configuring advanced_ddos_attack_l4_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/notification_policy#packets_per_second NotificationPolicy#packets_per_second}

---

##### `PoolId`<sup>Optional</sup> <a name="PoolId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.poolId"></a>

```go
PoolId *[]*string
```

- *Type:* *[]*string

Usage depends on specific alert type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/notification_policy#pool_id NotificationPolicy#pool_id}

---

##### `PopNames`<sup>Optional</sup> <a name="PopNames" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.popNames"></a>

```go
PopNames *[]*string
```

- *Type:* *[]*string

Usage depends on specific alert type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/notification_policy#pop_names NotificationPolicy#pop_names}

---

##### `Product`<sup>Optional</sup> <a name="Product" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.product"></a>

```go
Product *[]*string
```

- *Type:* *[]*string

Used for configuring billing_usage_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/notification_policy#product NotificationPolicy#product}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.projectId"></a>

```go
ProjectId *[]*string
```

- *Type:* *[]*string

Used for configuring pages_event_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/notification_policy#project_id NotificationPolicy#project_id}

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.protocol"></a>

```go
Protocol *[]*string
```

- *Type:* *[]*string

Used for configuring advanced_ddos_attack_l4_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/notification_policy#protocol NotificationPolicy#protocol}

---

##### `QueryTag`<sup>Optional</sup> <a name="QueryTag" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.queryTag"></a>

```go
QueryTag *[]*string
```

- *Type:* *[]*string

Usage depends on specific alert type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/notification_policy#query_tag NotificationPolicy#query_tag}

---

##### `RequestsPerSecond`<sup>Optional</sup> <a name="RequestsPerSecond" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.requestsPerSecond"></a>

```go
RequestsPerSecond *[]*string
```

- *Type:* *[]*string

Used for configuring advanced_ddos_attack_l7_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/notification_policy#requests_per_second NotificationPolicy#requests_per_second}

---

##### `Selectors`<sup>Optional</sup> <a name="Selectors" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.selectors"></a>

```go
Selectors *[]*string
```

- *Type:* *[]*string

Usage depends on specific alert type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/notification_policy#selectors NotificationPolicy#selectors}

---

##### `Services`<sup>Optional</sup> <a name="Services" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.services"></a>

```go
Services *[]*string
```

- *Type:* *[]*string

Used for configuring clickhouse_alert_fw_ent_anomaly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/notification_policy#services NotificationPolicy#services}

---

##### `Slo`<sup>Optional</sup> <a name="Slo" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.slo"></a>

```go
Slo *[]*string
```

- *Type:* *[]*string

Usage depends on specific alert type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/notification_policy#slo NotificationPolicy#slo}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.status"></a>

```go
Status *[]*string
```

- *Type:* *[]*string

Used for configuring health_check_status_notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/notification_policy#status NotificationPolicy#status}

---

##### `TargetHostname`<sup>Optional</sup> <a name="TargetHostname" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.targetHostname"></a>

```go
TargetHostname *[]*string
```

- *Type:* *[]*string

Used for configuring advanced_ddos_attack_l7_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/notification_policy#target_hostname NotificationPolicy#target_hostname}

---

##### `TargetIp`<sup>Optional</sup> <a name="TargetIp" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.targetIp"></a>

```go
TargetIp *[]*string
```

- *Type:* *[]*string

Used for configuring advanced_ddos_attack_l4_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/notification_policy#target_ip NotificationPolicy#target_ip}

---

##### `TargetZoneName`<sup>Optional</sup> <a name="TargetZoneName" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.targetZoneName"></a>

```go
TargetZoneName *[]*string
```

- *Type:* *[]*string

Used for configuring advanced_ddos_attack_l7_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/notification_policy#target_zone_name NotificationPolicy#target_zone_name}

---

##### `TrafficExclusions`<sup>Optional</sup> <a name="TrafficExclusions" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.trafficExclusions"></a>

```go
TrafficExclusions *[]*string
```

- *Type:* *[]*string

Used for configuring traffic_anomalies_alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/notification_policy#traffic_exclusions NotificationPolicy#traffic_exclusions}

---

##### `TunnelId`<sup>Optional</sup> <a name="TunnelId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.tunnelId"></a>

```go
TunnelId *[]*string
```

- *Type:* *[]*string

Used for configuring tunnel_health_event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/notification_policy#tunnel_id NotificationPolicy#tunnel_id}

---

##### `TunnelName`<sup>Optional</sup> <a name="TunnelName" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.tunnelName"></a>

```go
TunnelName *[]*string
```

- *Type:* *[]*string

Usage depends on specific alert type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/notification_policy#tunnel_name NotificationPolicy#tunnel_name}

---

##### `Where`<sup>Optional</sup> <a name="Where" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.where"></a>

```go
Where *[]*string
```

- *Type:* *[]*string

Usage depends on specific alert type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/notification_policy#where NotificationPolicy#where}

---

##### `Zones`<sup>Optional</sup> <a name="Zones" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFilters.property.zones"></a>

```go
Zones *[]*string
```

- *Type:* *[]*string

Usage depends on specific alert type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/notification_policy#zones NotificationPolicy#zones}

---

### NotificationPolicyMechanisms <a name="NotificationPolicyMechanisms" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanisms"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanisms.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/notificationpolicy"

&notificationpolicy.NotificationPolicyMechanisms {
	Email: interface{},
	Pagerduty: interface{},
	Webhooks: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanisms.property.email">Email</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/notification_policy#email NotificationPolicy#email}. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanisms.property.pagerduty">Pagerduty</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/notification_policy#pagerduty NotificationPolicy#pagerduty}. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanisms.property.webhooks">Webhooks</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/notification_policy#webhooks NotificationPolicy#webhooks}. |

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanisms.property.email"></a>

```go
Email interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/notification_policy#email NotificationPolicy#email}.

---

##### `Pagerduty`<sup>Optional</sup> <a name="Pagerduty" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanisms.property.pagerduty"></a>

```go
Pagerduty interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/notification_policy#pagerduty NotificationPolicy#pagerduty}.

---

##### `Webhooks`<sup>Optional</sup> <a name="Webhooks" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanisms.property.webhooks"></a>

```go
Webhooks interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/notification_policy#webhooks NotificationPolicy#webhooks}.

---

### NotificationPolicyMechanismsEmail <a name="NotificationPolicyMechanismsEmail" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmail"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmail.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/notificationpolicy"

&notificationpolicy.NotificationPolicyMechanismsEmail {
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmail.property.id">Id</a></code> | <code>*string</code> | The email address. |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmail.property.id"></a>

```go
Id *string
```

- *Type:* *string

The email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/notification_policy#id NotificationPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### NotificationPolicyMechanismsPagerduty <a name="NotificationPolicyMechanismsPagerduty" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerduty"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerduty.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/notificationpolicy"

&notificationpolicy.NotificationPolicyMechanismsPagerduty {
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerduty.property.id">Id</a></code> | <code>*string</code> | UUID. |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerduty.property.id"></a>

```go
Id *string
```

- *Type:* *string

UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/notification_policy#id NotificationPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### NotificationPolicyMechanismsWebhooks <a name="NotificationPolicyMechanismsWebhooks" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooks.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/notificationpolicy"

&notificationpolicy.NotificationPolicyMechanismsWebhooks {
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooks.property.id">Id</a></code> | <code>*string</code> | UUID. |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooks.property.id"></a>

```go
Id *string
```

- *Type:* *string

UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/notification_policy#id NotificationPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### NotificationPolicyFiltersOutputReference <a name="NotificationPolicyFiltersOutputReference" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/notificationpolicy"

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
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetAffectedAsns">ResetAffectedAsns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetAffectedComponents">ResetAffectedComponents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetAffectedLocations">ResetAffectedLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetAirportCode">ResetAirportCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetAlertTriggerPreferences">ResetAlertTriggerPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetAlertTriggerPreferencesValue">ResetAlertTriggerPreferencesValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetEvent">ResetEvent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetEventSource">ResetEventSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetEventType">ResetEventType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetGroupBy">ResetGroupBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetHealthCheckId">ResetHealthCheckId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetIncidentImpact">ResetIncidentImpact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetInputId">ResetInputId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetInsightClass">ResetInsightClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetLimit">ResetLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetLogoTag">ResetLogoTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetMegabitsPerSecond">ResetMegabitsPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetNewHealth">ResetNewHealth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetNewStatus">ResetNewStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetPacketsPerSecond">ResetPacketsPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetPoolId">ResetPoolId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetPopNames">ResetPopNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetProduct">ResetProduct</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetQueryTag">ResetQueryTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetRequestsPerSecond">ResetRequestsPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetSelectors">ResetSelectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetServices">ResetServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetSlo">ResetSlo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetTargetHostname">ResetTargetHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetTargetIp">ResetTargetIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetTargetZoneName">ResetTargetZoneName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetTrafficExclusions">ResetTrafficExclusions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetTunnelId">ResetTunnelId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetTunnelName">ResetTunnelName</a></code> | *No description.* |
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

##### `ResetAffectedAsns` <a name="ResetAffectedAsns" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetAffectedAsns"></a>

```go
func ResetAffectedAsns()
```

##### `ResetAffectedComponents` <a name="ResetAffectedComponents" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetAffectedComponents"></a>

```go
func ResetAffectedComponents()
```

##### `ResetAffectedLocations` <a name="ResetAffectedLocations" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetAffectedLocations"></a>

```go
func ResetAffectedLocations()
```

##### `ResetAirportCode` <a name="ResetAirportCode" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetAirportCode"></a>

```go
func ResetAirportCode()
```

##### `ResetAlertTriggerPreferences` <a name="ResetAlertTriggerPreferences" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetAlertTriggerPreferences"></a>

```go
func ResetAlertTriggerPreferences()
```

##### `ResetAlertTriggerPreferencesValue` <a name="ResetAlertTriggerPreferencesValue" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetAlertTriggerPreferencesValue"></a>

```go
func ResetAlertTriggerPreferencesValue()
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

##### `ResetInsightClass` <a name="ResetInsightClass" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetInsightClass"></a>

```go
func ResetInsightClass()
```

##### `ResetLimit` <a name="ResetLimit" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetLimit"></a>

```go
func ResetLimit()
```

##### `ResetLogoTag` <a name="ResetLogoTag" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetLogoTag"></a>

```go
func ResetLogoTag()
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

##### `ResetPopNames` <a name="ResetPopNames" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetPopNames"></a>

```go
func ResetPopNames()
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

##### `ResetQueryTag` <a name="ResetQueryTag" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetQueryTag"></a>

```go
func ResetQueryTag()
```

##### `ResetRequestsPerSecond` <a name="ResetRequestsPerSecond" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetRequestsPerSecond"></a>

```go
func ResetRequestsPerSecond()
```

##### `ResetSelectors` <a name="ResetSelectors" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetSelectors"></a>

```go
func ResetSelectors()
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

##### `ResetTargetIp` <a name="ResetTargetIp" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetTargetIp"></a>

```go
func ResetTargetIp()
```

##### `ResetTargetZoneName` <a name="ResetTargetZoneName" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetTargetZoneName"></a>

```go
func ResetTargetZoneName()
```

##### `ResetTrafficExclusions` <a name="ResetTrafficExclusions" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetTrafficExclusions"></a>

```go
func ResetTrafficExclusions()
```

##### `ResetTunnelId` <a name="ResetTunnelId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetTunnelId"></a>

```go
func ResetTunnelId()
```

##### `ResetTunnelName` <a name="ResetTunnelName" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.resetTunnelName"></a>

```go
func ResetTunnelName()
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
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.affectedAsnsInput">AffectedAsnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.affectedComponentsInput">AffectedComponentsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.affectedLocationsInput">AffectedLocationsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.airportCodeInput">AirportCodeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.alertTriggerPreferencesInput">AlertTriggerPreferencesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.alertTriggerPreferencesValueInput">AlertTriggerPreferencesValueInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.enabledInput">EnabledInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.environmentInput">EnvironmentInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.eventInput">EventInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.eventSourceInput">EventSourceInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.eventTypeInput">EventTypeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.groupByInput">GroupByInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.healthCheckIdInput">HealthCheckIdInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.incidentImpactInput">IncidentImpactInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.inputIdInput">InputIdInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.insightClassInput">InsightClassInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.limitInput">LimitInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.logoTagInput">LogoTagInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.megabitsPerSecondInput">MegabitsPerSecondInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.newHealthInput">NewHealthInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.newStatusInput">NewStatusInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.packetsPerSecondInput">PacketsPerSecondInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.poolIdInput">PoolIdInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.popNamesInput">PopNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.productInput">ProductInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.queryTagInput">QueryTagInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.requestsPerSecondInput">RequestsPerSecondInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.selectorsInput">SelectorsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.servicesInput">ServicesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.sloInput">SloInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.statusInput">StatusInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.targetHostnameInput">TargetHostnameInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.targetIpInput">TargetIpInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.targetZoneNameInput">TargetZoneNameInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.trafficExclusionsInput">TrafficExclusionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.tunnelIdInput">TunnelIdInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.tunnelNameInput">TunnelNameInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.whereInput">WhereInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.zonesInput">ZonesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.actions">Actions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.affectedAsns">AffectedAsns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.affectedComponents">AffectedComponents</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.affectedLocations">AffectedLocations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.airportCode">AirportCode</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.alertTriggerPreferences">AlertTriggerPreferences</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.alertTriggerPreferencesValue">AlertTriggerPreferencesValue</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.enabled">Enabled</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.environment">Environment</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.event">Event</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.eventSource">EventSource</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.eventType">EventType</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.groupBy">GroupBy</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.healthCheckId">HealthCheckId</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.incidentImpact">IncidentImpact</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.inputId">InputId</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.insightClass">InsightClass</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.limit">Limit</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.logoTag">LogoTag</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.megabitsPerSecond">MegabitsPerSecond</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.newHealth">NewHealth</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.newStatus">NewStatus</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.packetsPerSecond">PacketsPerSecond</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.poolId">PoolId</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.popNames">PopNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.product">Product</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.projectId">ProjectId</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.protocol">Protocol</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.queryTag">QueryTag</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.requestsPerSecond">RequestsPerSecond</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.selectors">Selectors</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.services">Services</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.slo">Slo</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.status">Status</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.targetHostname">TargetHostname</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.targetIp">TargetIp</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.targetZoneName">TargetZoneName</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.trafficExclusions">TrafficExclusions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.tunnelId">TunnelId</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.tunnelName">TunnelName</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.where">Where</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.zones">Zones</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

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

##### `AffectedAsnsInput`<sup>Optional</sup> <a name="AffectedAsnsInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.affectedAsnsInput"></a>

```go
func AffectedAsnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AffectedComponentsInput`<sup>Optional</sup> <a name="AffectedComponentsInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.affectedComponentsInput"></a>

```go
func AffectedComponentsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AffectedLocationsInput`<sup>Optional</sup> <a name="AffectedLocationsInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.affectedLocationsInput"></a>

```go
func AffectedLocationsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AirportCodeInput`<sup>Optional</sup> <a name="AirportCodeInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.airportCodeInput"></a>

```go
func AirportCodeInput() *[]*string
```

- *Type:* *[]*string

---

##### `AlertTriggerPreferencesInput`<sup>Optional</sup> <a name="AlertTriggerPreferencesInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.alertTriggerPreferencesInput"></a>

```go
func AlertTriggerPreferencesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AlertTriggerPreferencesValueInput`<sup>Optional</sup> <a name="AlertTriggerPreferencesValueInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.alertTriggerPreferencesValueInput"></a>

```go
func AlertTriggerPreferencesValueInput() *[]*string
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

##### `InsightClassInput`<sup>Optional</sup> <a name="InsightClassInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.insightClassInput"></a>

```go
func InsightClassInput() *[]*string
```

- *Type:* *[]*string

---

##### `LimitInput`<sup>Optional</sup> <a name="LimitInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.limitInput"></a>

```go
func LimitInput() *[]*string
```

- *Type:* *[]*string

---

##### `LogoTagInput`<sup>Optional</sup> <a name="LogoTagInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.logoTagInput"></a>

```go
func LogoTagInput() *[]*string
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

##### `PopNamesInput`<sup>Optional</sup> <a name="PopNamesInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.popNamesInput"></a>

```go
func PopNamesInput() *[]*string
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

##### `QueryTagInput`<sup>Optional</sup> <a name="QueryTagInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.queryTagInput"></a>

```go
func QueryTagInput() *[]*string
```

- *Type:* *[]*string

---

##### `RequestsPerSecondInput`<sup>Optional</sup> <a name="RequestsPerSecondInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.requestsPerSecondInput"></a>

```go
func RequestsPerSecondInput() *[]*string
```

- *Type:* *[]*string

---

##### `SelectorsInput`<sup>Optional</sup> <a name="SelectorsInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.selectorsInput"></a>

```go
func SelectorsInput() *[]*string
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

##### `TargetIpInput`<sup>Optional</sup> <a name="TargetIpInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.targetIpInput"></a>

```go
func TargetIpInput() *[]*string
```

- *Type:* *[]*string

---

##### `TargetZoneNameInput`<sup>Optional</sup> <a name="TargetZoneNameInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.targetZoneNameInput"></a>

```go
func TargetZoneNameInput() *[]*string
```

- *Type:* *[]*string

---

##### `TrafficExclusionsInput`<sup>Optional</sup> <a name="TrafficExclusionsInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.trafficExclusionsInput"></a>

```go
func TrafficExclusionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TunnelIdInput`<sup>Optional</sup> <a name="TunnelIdInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.tunnelIdInput"></a>

```go
func TunnelIdInput() *[]*string
```

- *Type:* *[]*string

---

##### `TunnelNameInput`<sup>Optional</sup> <a name="TunnelNameInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.tunnelNameInput"></a>

```go
func TunnelNameInput() *[]*string
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

##### `AffectedAsns`<sup>Required</sup> <a name="AffectedAsns" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.affectedAsns"></a>

```go
func AffectedAsns() *[]*string
```

- *Type:* *[]*string

---

##### `AffectedComponents`<sup>Required</sup> <a name="AffectedComponents" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.affectedComponents"></a>

```go
func AffectedComponents() *[]*string
```

- *Type:* *[]*string

---

##### `AffectedLocations`<sup>Required</sup> <a name="AffectedLocations" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.affectedLocations"></a>

```go
func AffectedLocations() *[]*string
```

- *Type:* *[]*string

---

##### `AirportCode`<sup>Required</sup> <a name="AirportCode" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.airportCode"></a>

```go
func AirportCode() *[]*string
```

- *Type:* *[]*string

---

##### `AlertTriggerPreferences`<sup>Required</sup> <a name="AlertTriggerPreferences" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.alertTriggerPreferences"></a>

```go
func AlertTriggerPreferences() *[]*string
```

- *Type:* *[]*string

---

##### `AlertTriggerPreferencesValue`<sup>Required</sup> <a name="AlertTriggerPreferencesValue" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.alertTriggerPreferencesValue"></a>

```go
func AlertTriggerPreferencesValue() *[]*string
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

##### `InsightClass`<sup>Required</sup> <a name="InsightClass" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.insightClass"></a>

```go
func InsightClass() *[]*string
```

- *Type:* *[]*string

---

##### `Limit`<sup>Required</sup> <a name="Limit" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.limit"></a>

```go
func Limit() *[]*string
```

- *Type:* *[]*string

---

##### `LogoTag`<sup>Required</sup> <a name="LogoTag" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.logoTag"></a>

```go
func LogoTag() *[]*string
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

##### `PopNames`<sup>Required</sup> <a name="PopNames" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.popNames"></a>

```go
func PopNames() *[]*string
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

##### `QueryTag`<sup>Required</sup> <a name="QueryTag" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.queryTag"></a>

```go
func QueryTag() *[]*string
```

- *Type:* *[]*string

---

##### `RequestsPerSecond`<sup>Required</sup> <a name="RequestsPerSecond" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.requestsPerSecond"></a>

```go
func RequestsPerSecond() *[]*string
```

- *Type:* *[]*string

---

##### `Selectors`<sup>Required</sup> <a name="Selectors" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.selectors"></a>

```go
func Selectors() *[]*string
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

##### `TargetIp`<sup>Required</sup> <a name="TargetIp" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.targetIp"></a>

```go
func TargetIp() *[]*string
```

- *Type:* *[]*string

---

##### `TargetZoneName`<sup>Required</sup> <a name="TargetZoneName" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.targetZoneName"></a>

```go
func TargetZoneName() *[]*string
```

- *Type:* *[]*string

---

##### `TrafficExclusions`<sup>Required</sup> <a name="TrafficExclusions" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.trafficExclusions"></a>

```go
func TrafficExclusions() *[]*string
```

- *Type:* *[]*string

---

##### `TunnelId`<sup>Required</sup> <a name="TunnelId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.tunnelId"></a>

```go
func TunnelId() *[]*string
```

- *Type:* *[]*string

---

##### `TunnelName`<sup>Required</sup> <a name="TunnelName" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyFiltersOutputReference.property.tunnelName"></a>

```go
func TunnelName() *[]*string
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
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NotificationPolicyMechanismsEmailList <a name="NotificationPolicyMechanismsEmailList" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/notificationpolicy"

notificationpolicy.NewNotificationPolicyMechanismsEmailList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NotificationPolicyMechanismsEmailList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.get"></a>

```go
func Get(index *f64) NotificationPolicyMechanismsEmailOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NotificationPolicyMechanismsEmailOutputReference <a name="NotificationPolicyMechanismsEmailOutputReference" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/notificationpolicy"

notificationpolicy.NewNotificationPolicyMechanismsEmailOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NotificationPolicyMechanismsEmailOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.resetId">ResetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.resetId"></a>

```go
func ResetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NotificationPolicyMechanismsOutputReference <a name="NotificationPolicyMechanismsOutputReference" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/notificationpolicy"

notificationpolicy.NewNotificationPolicyMechanismsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NotificationPolicyMechanismsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.putEmail">PutEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.putPagerduty">PutPagerduty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.putWebhooks">PutWebhooks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.resetPagerduty">ResetPagerduty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.resetWebhooks">ResetWebhooks</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEmail` <a name="PutEmail" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.putEmail"></a>

```go
func PutEmail(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.putEmail.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPagerduty` <a name="PutPagerduty" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.putPagerduty"></a>

```go
func PutPagerduty(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.putPagerduty.parameter.value"></a>

- *Type:* interface{}

---

##### `PutWebhooks` <a name="PutWebhooks" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.putWebhooks"></a>

```go
func PutWebhooks(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.putWebhooks.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetEmail` <a name="ResetEmail" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.resetEmail"></a>

```go
func ResetEmail()
```

##### `ResetPagerduty` <a name="ResetPagerduty" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.resetPagerduty"></a>

```go
func ResetPagerduty()
```

##### `ResetWebhooks` <a name="ResetWebhooks" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.resetWebhooks"></a>

```go
func ResetWebhooks()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.property.email">Email</a></code> | <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList">NotificationPolicyMechanismsEmailList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.property.pagerduty">Pagerduty</a></code> | <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList">NotificationPolicyMechanismsPagerdutyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.property.webhooks">Webhooks</a></code> | <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList">NotificationPolicyMechanismsWebhooksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.property.emailInput">EmailInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.property.pagerdutyInput">PagerdutyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.property.webhooksInput">WebhooksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.property.email"></a>

```go
func Email() NotificationPolicyMechanismsEmailList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsEmailList">NotificationPolicyMechanismsEmailList</a>

---

##### `Pagerduty`<sup>Required</sup> <a name="Pagerduty" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.property.pagerduty"></a>

```go
func Pagerduty() NotificationPolicyMechanismsPagerdutyList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList">NotificationPolicyMechanismsPagerdutyList</a>

---

##### `Webhooks`<sup>Required</sup> <a name="Webhooks" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.property.webhooks"></a>

```go
func Webhooks() NotificationPolicyMechanismsWebhooksList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList">NotificationPolicyMechanismsWebhooksList</a>

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.property.emailInput"></a>

```go
func EmailInput() interface{}
```

- *Type:* interface{}

---

##### `PagerdutyInput`<sup>Optional</sup> <a name="PagerdutyInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.property.pagerdutyInput"></a>

```go
func PagerdutyInput() interface{}
```

- *Type:* interface{}

---

##### `WebhooksInput`<sup>Optional</sup> <a name="WebhooksInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.property.webhooksInput"></a>

```go
func WebhooksInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NotificationPolicyMechanismsPagerdutyList <a name="NotificationPolicyMechanismsPagerdutyList" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/notificationpolicy"

notificationpolicy.NewNotificationPolicyMechanismsPagerdutyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NotificationPolicyMechanismsPagerdutyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.get"></a>

```go
func Get(index *f64) NotificationPolicyMechanismsPagerdutyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NotificationPolicyMechanismsPagerdutyOutputReference <a name="NotificationPolicyMechanismsPagerdutyOutputReference" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/notificationpolicy"

notificationpolicy.NewNotificationPolicyMechanismsPagerdutyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NotificationPolicyMechanismsPagerdutyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.resetId">ResetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.resetId"></a>

```go
func ResetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsPagerdutyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NotificationPolicyMechanismsWebhooksList <a name="NotificationPolicyMechanismsWebhooksList" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/notificationpolicy"

notificationpolicy.NewNotificationPolicyMechanismsWebhooksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NotificationPolicyMechanismsWebhooksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.get"></a>

```go
func Get(index *f64) NotificationPolicyMechanismsWebhooksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NotificationPolicyMechanismsWebhooksOutputReference <a name="NotificationPolicyMechanismsWebhooksOutputReference" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/notificationpolicy"

notificationpolicy.NewNotificationPolicyMechanismsWebhooksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NotificationPolicyMechanismsWebhooksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.resetId">ResetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.resetId"></a>

```go
func ResetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.notificationPolicy.NotificationPolicyMechanismsWebhooksOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



