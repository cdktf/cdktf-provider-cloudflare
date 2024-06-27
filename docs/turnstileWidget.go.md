# `turnstileWidget` Submodule <a name="`turnstileWidget` Submodule" id="@cdktf/provider-cloudflare.turnstileWidget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TurnstileWidget <a name="TurnstileWidget" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/turnstile_widget cloudflare_turnstile_widget}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/turnstilewidget"

turnstilewidget.NewTurnstileWidget(scope Construct, id *string, config TurnstileWidgetConfig) TurnstileWidget
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig">TurnstileWidgetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig">TurnstileWidgetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.resetBotFightMode">ResetBotFightMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.resetOfflabel">ResetOfflabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetBotFightMode` <a name="ResetBotFightMode" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.resetBotFightMode"></a>

```go
func ResetBotFightMode()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.resetId"></a>

```go
func ResetId()
```

##### `ResetOfflabel` <a name="ResetOfflabel" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.resetOfflabel"></a>

```go
func ResetOfflabel()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.resetRegion"></a>

```go
func ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a TurnstileWidget resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/turnstilewidget"

turnstilewidget.TurnstileWidget_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/turnstilewidget"

turnstilewidget.TurnstileWidget_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/turnstilewidget"

turnstilewidget.TurnstileWidget_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/turnstilewidget"

turnstilewidget.TurnstileWidget_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a TurnstileWidget resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the TurnstileWidget to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing TurnstileWidget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/turnstile_widget#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the TurnstileWidget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.secret">Secret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.botFightModeInput">BotFightModeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.domainsInput">DomainsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.offlabelInput">OfflabelInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.botFightMode">BotFightMode</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.domains">Domains</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.offlabel">Offlabel</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.secret"></a>

```go
func Secret() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `BotFightModeInput`<sup>Optional</sup> <a name="BotFightModeInput" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.botFightModeInput"></a>

```go
func BotFightModeInput() interface{}
```

- *Type:* interface{}

---

##### `DomainsInput`<sup>Optional</sup> <a name="DomainsInput" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.domainsInput"></a>

```go
func DomainsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OfflabelInput`<sup>Optional</sup> <a name="OfflabelInput" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.offlabelInput"></a>

```go
func OfflabelInput() interface{}
```

- *Type:* interface{}

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `BotFightMode`<sup>Required</sup> <a name="BotFightMode" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.botFightMode"></a>

```go
func BotFightMode() interface{}
```

- *Type:* interface{}

---

##### `Domains`<sup>Required</sup> <a name="Domains" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.domains"></a>

```go
func Domains() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Offlabel`<sup>Required</sup> <a name="Offlabel" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.offlabel"></a>

```go
func Offlabel() interface{}
```

- *Type:* interface{}

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### TurnstileWidgetConfig <a name="TurnstileWidgetConfig" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/turnstilewidget"

&turnstilewidget.TurnstileWidgetConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	Domains: *[]*string,
	Mode: *string,
	Name: *string,
	BotFightMode: interface{},
	Id: *string,
	Offlabel: interface{},
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.accountId">AccountId</a></code> | <code>*string</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.domains">Domains</a></code> | <code>*[]*string</code> | Domains where the widget is deployed. |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.mode">Mode</a></code> | <code>*string</code> | Widget Mode. Available values: `non-interactive`, `invisible`, `managed`. |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.name">Name</a></code> | <code>*string</code> | Human readable widget name. |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.botFightMode">BotFightMode</a></code> | <code>interface{}</code> | If bot_fight_mode is set to true, Cloudflare issues computationally expensive challenges in response to malicious bots (Enterprise only). |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.id">Id</a></code> | <code>*string</code> | The identifier of this resource. This is the site key value. |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.offlabel">Offlabel</a></code> | <code>interface{}</code> | Do not show any Cloudflare branding on the widget (Enterprise only). |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.region">Region</a></code> | <code>*string</code> | Region where this widget can be used. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/turnstile_widget#account_id TurnstileWidget#account_id}

---

##### `Domains`<sup>Required</sup> <a name="Domains" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.domains"></a>

```go
Domains *[]*string
```

- *Type:* *[]*string

Domains where the widget is deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/turnstile_widget#domains TurnstileWidget#domains}

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

Widget Mode. Available values: `non-interactive`, `invisible`, `managed`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/turnstile_widget#mode TurnstileWidget#mode}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Human readable widget name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/turnstile_widget#name TurnstileWidget#name}

---

##### `BotFightMode`<sup>Optional</sup> <a name="BotFightMode" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.botFightMode"></a>

```go
BotFightMode interface{}
```

- *Type:* interface{}

If bot_fight_mode is set to true, Cloudflare issues computationally expensive challenges in response to malicious bots (Enterprise only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/turnstile_widget#bot_fight_mode TurnstileWidget#bot_fight_mode}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

The identifier of this resource. This is the site key value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/turnstile_widget#id TurnstileWidget#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Offlabel`<sup>Optional</sup> <a name="Offlabel" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.offlabel"></a>

```go
Offlabel interface{}
```

- *Type:* interface{}

Do not show any Cloudflare branding on the widget (Enterprise only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/turnstile_widget#offlabel TurnstileWidget#offlabel}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this widget can be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.36.0/docs/resources/turnstile_widget#region TurnstileWidget#region}

---



