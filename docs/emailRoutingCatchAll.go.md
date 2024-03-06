# `emailRoutingCatchAll` Submodule <a name="`emailRoutingCatchAll` Submodule" id="@cdktf/provider-cloudflare.emailRoutingCatchAll"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EmailRoutingCatchAll <a name="EmailRoutingCatchAll" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/email_routing_catch_all cloudflare_email_routing_catch_all}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/emailroutingcatchall"

emailroutingcatchall.NewEmailRoutingCatchAll(scope Construct, id *string, config EmailRoutingCatchAllConfig) EmailRoutingCatchAll
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllConfig">EmailRoutingCatchAllConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllConfig">EmailRoutingCatchAllConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.putAction">PutAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.putMatcher">PutMatcher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAction` <a name="PutAction" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.putAction"></a>

```go
func PutAction(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.putAction.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMatcher` <a name="PutMatcher" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.putMatcher"></a>

```go
func PutMatcher(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.putMatcher.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a EmailRoutingCatchAll resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/emailroutingcatchall"

emailroutingcatchall.EmailRoutingCatchAll_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/emailroutingcatchall"

emailroutingcatchall.EmailRoutingCatchAll_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/emailroutingcatchall"

emailroutingcatchall.EmailRoutingCatchAll_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/emailroutingcatchall"

emailroutingcatchall.EmailRoutingCatchAll_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a EmailRoutingCatchAll resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the EmailRoutingCatchAll to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing EmailRoutingCatchAll that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/email_routing_catch_all#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the EmailRoutingCatchAll to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.action">Action</a></code> | <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionList">EmailRoutingCatchAllActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.matcher">Matcher</a></code> | <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherList">EmailRoutingCatchAllMatcherList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.tag">Tag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.actionInput">ActionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.matcherInput">MatcherInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.zoneIdInput">ZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.action"></a>

```go
func Action() EmailRoutingCatchAllActionList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionList">EmailRoutingCatchAllActionList</a>

---

##### `Matcher`<sup>Required</sup> <a name="Matcher" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.matcher"></a>

```go
func Matcher() EmailRoutingCatchAllMatcherList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherList">EmailRoutingCatchAllMatcherList</a>

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.tag"></a>

```go
func Tag() *string
```

- *Type:* *string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.actionInput"></a>

```go
func ActionInput() interface{}
```

- *Type:* interface{}

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MatcherInput`<sup>Optional</sup> <a name="MatcherInput" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.matcherInput"></a>

```go
func MatcherInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.zoneIdInput"></a>

```go
func ZoneIdInput() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAll.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EmailRoutingCatchAllAction <a name="EmailRoutingCatchAllAction" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllAction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/emailroutingcatchall"

&emailroutingcatchall.EmailRoutingCatchAllAction {
	Type: *string,
	Value: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllAction.property.type">Type</a></code> | <code>*string</code> | Type of supported action. Available values: `drop`, `forward`, `worker`. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllAction.property.value">Value</a></code> | <code>*[]*string</code> | A list with items in the following form. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllAction.property.type"></a>

```go
Type *string
```

- *Type:* *string

Type of supported action. Available values: `drop`, `forward`, `worker`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/email_routing_catch_all#type EmailRoutingCatchAll#type}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllAction.property.value"></a>

```go
Value *[]*string
```

- *Type:* *[]*string

A list with items in the following form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/email_routing_catch_all#value EmailRoutingCatchAll#value}

---

### EmailRoutingCatchAllConfig <a name="EmailRoutingCatchAllConfig" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/emailroutingcatchall"

&emailroutingcatchall.EmailRoutingCatchAllConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Action: interface{},
	Matcher: interface{},
	Name: *string,
	ZoneId: *string,
	Enabled: interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllConfig.property.action">Action</a></code> | <code>interface{}</code> | action block. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllConfig.property.matcher">Matcher</a></code> | <code>interface{}</code> | matcher block. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllConfig.property.name">Name</a></code> | <code>*string</code> | Routing rule name. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllConfig.property.zoneId">ZoneId</a></code> | <code>*string</code> | The zone identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Routing rule status. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/email_routing_catch_all#id EmailRoutingCatchAll#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllConfig.property.action"></a>

```go
Action interface{}
```

- *Type:* interface{}

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/email_routing_catch_all#action EmailRoutingCatchAll#action}

---

##### `Matcher`<sup>Required</sup> <a name="Matcher" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllConfig.property.matcher"></a>

```go
Matcher interface{}
```

- *Type:* interface{}

matcher block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/email_routing_catch_all#matcher EmailRoutingCatchAll#matcher}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Routing rule name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/email_routing_catch_all#name EmailRoutingCatchAll#name}

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllConfig.property.zoneId"></a>

```go
ZoneId *string
```

- *Type:* *string

The zone identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/email_routing_catch_all#zone_id EmailRoutingCatchAll#zone_id}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Routing rule status.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/email_routing_catch_all#enabled EmailRoutingCatchAll#enabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/email_routing_catch_all#id EmailRoutingCatchAll#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### EmailRoutingCatchAllMatcher <a name="EmailRoutingCatchAllMatcher" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcher"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcher.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/emailroutingcatchall"

&emailroutingcatchall.EmailRoutingCatchAllMatcher {
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcher.property.type">Type</a></code> | <code>*string</code> | Type of matcher. Available values: `all`. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcher.property.type"></a>

```go
Type *string
```

- *Type:* *string

Type of matcher. Available values: `all`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/email_routing_catch_all#type EmailRoutingCatchAll#type}

---

## Classes <a name="Classes" id="Classes"></a>

### EmailRoutingCatchAllActionList <a name="EmailRoutingCatchAllActionList" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/emailroutingcatchall"

emailroutingcatchall.NewEmailRoutingCatchAllActionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EmailRoutingCatchAllActionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionList.get"></a>

```go
func Get(index *f64) EmailRoutingCatchAllActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EmailRoutingCatchAllActionOutputReference <a name="EmailRoutingCatchAllActionOutputReference" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/emailroutingcatchall"

emailroutingcatchall.NewEmailRoutingCatchAllActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EmailRoutingCatchAllActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.property.valueInput">ValueInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.property.value">Value</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.property.valueInput"></a>

```go
func ValueInput() *[]*string
```

- *Type:* *[]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.property.value"></a>

```go
func Value() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllActionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EmailRoutingCatchAllMatcherList <a name="EmailRoutingCatchAllMatcherList" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/emailroutingcatchall"

emailroutingcatchall.NewEmailRoutingCatchAllMatcherList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EmailRoutingCatchAllMatcherList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherList.get"></a>

```go
func Get(index *f64) EmailRoutingCatchAllMatcherOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EmailRoutingCatchAllMatcherOutputReference <a name="EmailRoutingCatchAllMatcherOutputReference" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/emailroutingcatchall"

emailroutingcatchall.NewEmailRoutingCatchAllMatcherOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EmailRoutingCatchAllMatcherOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.emailRoutingCatchAll.EmailRoutingCatchAllMatcherOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



