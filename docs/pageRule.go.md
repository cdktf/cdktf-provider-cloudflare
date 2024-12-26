# `pageRule` Submodule <a name="`pageRule` Submodule" id="@cdktf/provider-cloudflare.pageRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PageRule <a name="PageRule" id="@cdktf/provider-cloudflare.pageRule.PageRule"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule cloudflare_page_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pageRule.PageRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/pagerule"

pagerule.NewPageRule(scope Construct, id *string, config PageRuleConfig) PageRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleConfig">PageRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.pageRule.PageRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.pageRule.PageRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.pageRule.PageRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleConfig">PageRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.putActions">PutActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.pageRule.PageRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.pageRule.PageRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.pageRule.PageRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.pageRule.PageRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.pageRule.PageRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.pageRule.PageRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.pageRule.PageRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.pageRule.PageRule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.pageRule.PageRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.pageRule.PageRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.pageRule.PageRule.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.pageRule.PageRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.pageRule.PageRule.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.pageRule.PageRule.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.pageRule.PageRule.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.pageRule.PageRule.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.pageRule.PageRule.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.pageRule.PageRule.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.pageRule.PageRule.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.pageRule.PageRule.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.pageRule.PageRule.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.pageRule.PageRule.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.pageRule.PageRule.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutActions` <a name="PutActions" id="@cdktf/provider-cloudflare.pageRule.PageRule.putActions"></a>

```go
func PutActions(value PageRuleActions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.pageRule.PageRule.putActions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions">PageRuleActions</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.pageRule.PageRule.resetId"></a>

```go
func ResetId()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-cloudflare.pageRule.PageRule.resetPriority"></a>

```go
func ResetPriority()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-cloudflare.pageRule.PageRule.resetStatus"></a>

```go
func ResetStatus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a PageRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.pageRule.PageRule.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/pagerule"

pagerule.PageRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.pageRule.PageRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.pageRule.PageRule.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/pagerule"

pagerule.PageRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.pageRule.PageRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.pageRule.PageRule.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/pagerule"

pagerule.PageRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.pageRule.PageRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.pageRule.PageRule.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/pagerule"

pagerule.PageRule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a PageRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.pageRule.PageRule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.pageRule.PageRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the PageRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.pageRule.PageRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing PageRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.pageRule.PageRule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the PageRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.property.actions">Actions</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference">PageRuleActionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.property.actionsInput">ActionsInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions">PageRuleActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.property.targetInput">TargetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.property.zoneIdInput">ZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.property.target">Target</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.pageRule.PageRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.pageRule.PageRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.pageRule.PageRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.pageRule.PageRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.pageRule.PageRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.pageRule.PageRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.pageRule.PageRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.pageRule.PageRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.pageRule.PageRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.pageRule.PageRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.pageRule.PageRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.pageRule.PageRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.pageRule.PageRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.pageRule.PageRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktf/provider-cloudflare.pageRule.PageRule.property.actions"></a>

```go
func Actions() PageRuleActionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference">PageRuleActionsOutputReference</a>

---

##### `ActionsInput`<sup>Optional</sup> <a name="ActionsInput" id="@cdktf/provider-cloudflare.pageRule.PageRule.property.actionsInput"></a>

```go
func ActionsInput() PageRuleActions
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions">PageRuleActions</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.pageRule.PageRule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-cloudflare.pageRule.PageRule.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-cloudflare.pageRule.PageRule.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-cloudflare.pageRule.PageRule.property.targetInput"></a>

```go
func TargetInput() *string
```

- *Type:* *string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.pageRule.PageRule.property.zoneIdInput"></a>

```go
func ZoneIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.pageRule.PageRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-cloudflare.pageRule.PageRule.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-cloudflare.pageRule.PageRule.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-cloudflare.pageRule.PageRule.property.target"></a>

```go
func Target() *string
```

- *Type:* *string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.pageRule.PageRule.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.pageRule.PageRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PageRuleActions <a name="PageRuleActions" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/pagerule"

&pagerule.PageRuleActions {
	AlwaysUseHttps: interface{},
	AutomaticHttpsRewrites: *string,
	BrowserCacheTtl: *string,
	BrowserCheck: *string,
	BypassCacheOnCookie: *string,
	CacheByDeviceType: *string,
	CacheDeceptionArmor: *string,
	CacheKeyFields: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11.pageRule.PageRuleActionsCacheKeyFields,
	CacheLevel: *string,
	CacheOnCookie: *string,
	CacheTtlByStatus: interface{},
	DisableApps: interface{},
	DisablePerformance: interface{},
	DisableRailgun: interface{},
	DisableSecurity: interface{},
	DisableZaraz: interface{},
	EdgeCacheTtl: *f64,
	EmailObfuscation: *string,
	ExplicitCacheControl: *string,
	ForwardingUrl: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11.pageRule.PageRuleActionsForwardingUrl,
	HostHeaderOverride: *string,
	IpGeolocation: *string,
	Minify: interface{},
	Mirage: *string,
	OpportunisticEncryption: *string,
	OriginErrorPagePassThru: *string,
	Polish: *string,
	ResolveOverride: *string,
	RespectStrongEtag: *string,
	ResponseBuffering: *string,
	RocketLoader: *string,
	SecurityLevel: *string,
	ServerSideExclude: *string,
	SortQueryStringForCache: *string,
	Ssl: *string,
	TrueClientIpHeader: *string,
	Waf: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.alwaysUseHttps">AlwaysUseHttps</a></code> | <code>interface{}</code> | Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.automaticHttpsRewrites">AutomaticHttpsRewrites</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#automatic_https_rewrites PageRule#automatic_https_rewrites}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.browserCacheTtl">BrowserCacheTtl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#browser_cache_ttl PageRule#browser_cache_ttl}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.browserCheck">BrowserCheck</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#browser_check PageRule#browser_check}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.bypassCacheOnCookie">BypassCacheOnCookie</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#bypass_cache_on_cookie PageRule#bypass_cache_on_cookie}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.cacheByDeviceType">CacheByDeviceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#cache_by_device_type PageRule#cache_by_device_type}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.cacheDeceptionArmor">CacheDeceptionArmor</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#cache_deception_armor PageRule#cache_deception_armor}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.cacheKeyFields">CacheKeyFields</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFields">PageRuleActionsCacheKeyFields</a></code> | cache_key_fields block. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.cacheLevel">CacheLevel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#cache_level PageRule#cache_level}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.cacheOnCookie">CacheOnCookie</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#cache_on_cookie PageRule#cache_on_cookie}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.cacheTtlByStatus">CacheTtlByStatus</a></code> | <code>interface{}</code> | cache_ttl_by_status block. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.disableApps">DisableApps</a></code> | <code>interface{}</code> | Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.disablePerformance">DisablePerformance</a></code> | <code>interface{}</code> | Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.disableRailgun">DisableRailgun</a></code> | <code>interface{}</code> | Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.disableSecurity">DisableSecurity</a></code> | <code>interface{}</code> | Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.disableZaraz">DisableZaraz</a></code> | <code>interface{}</code> | Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.edgeCacheTtl">EdgeCacheTtl</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#edge_cache_ttl PageRule#edge_cache_ttl}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.emailObfuscation">EmailObfuscation</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#email_obfuscation PageRule#email_obfuscation}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.explicitCacheControl">ExplicitCacheControl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#explicit_cache_control PageRule#explicit_cache_control}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.forwardingUrl">ForwardingUrl</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrl">PageRuleActionsForwardingUrl</a></code> | forwarding_url block. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.hostHeaderOverride">HostHeaderOverride</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#host_header_override PageRule#host_header_override}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.ipGeolocation">IpGeolocation</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#ip_geolocation PageRule#ip_geolocation}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.minify">Minify</a></code> | <code>interface{}</code> | minify block. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.mirage">Mirage</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#mirage PageRule#mirage}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.opportunisticEncryption">OpportunisticEncryption</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#opportunistic_encryption PageRule#opportunistic_encryption}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.originErrorPagePassThru">OriginErrorPagePassThru</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#origin_error_page_pass_thru PageRule#origin_error_page_pass_thru}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.polish">Polish</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#polish PageRule#polish}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.resolveOverride">ResolveOverride</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#resolve_override PageRule#resolve_override}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.respectStrongEtag">RespectStrongEtag</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#respect_strong_etag PageRule#respect_strong_etag}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.responseBuffering">ResponseBuffering</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#response_buffering PageRule#response_buffering}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.rocketLoader">RocketLoader</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#rocket_loader PageRule#rocket_loader}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.securityLevel">SecurityLevel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#security_level PageRule#security_level}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.serverSideExclude">ServerSideExclude</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#server_side_exclude PageRule#server_side_exclude}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.sortQueryStringForCache">SortQueryStringForCache</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#sort_query_string_for_cache PageRule#sort_query_string_for_cache}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.ssl">Ssl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#ssl PageRule#ssl}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.trueClientIpHeader">TrueClientIpHeader</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#true_client_ip_header PageRule#true_client_ip_header}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.waf">Waf</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#waf PageRule#waf}. |

---

##### `AlwaysUseHttps`<sup>Optional</sup> <a name="AlwaysUseHttps" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.alwaysUseHttps"></a>

```go
AlwaysUseHttps interface{}
```

- *Type:* interface{}

Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#always_use_https PageRule#always_use_https}

---

##### `AutomaticHttpsRewrites`<sup>Optional</sup> <a name="AutomaticHttpsRewrites" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.automaticHttpsRewrites"></a>

```go
AutomaticHttpsRewrites *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#automatic_https_rewrites PageRule#automatic_https_rewrites}.

---

##### `BrowserCacheTtl`<sup>Optional</sup> <a name="BrowserCacheTtl" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.browserCacheTtl"></a>

```go
BrowserCacheTtl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#browser_cache_ttl PageRule#browser_cache_ttl}.

---

##### `BrowserCheck`<sup>Optional</sup> <a name="BrowserCheck" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.browserCheck"></a>

```go
BrowserCheck *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#browser_check PageRule#browser_check}.

---

##### `BypassCacheOnCookie`<sup>Optional</sup> <a name="BypassCacheOnCookie" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.bypassCacheOnCookie"></a>

```go
BypassCacheOnCookie *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#bypass_cache_on_cookie PageRule#bypass_cache_on_cookie}.

---

##### `CacheByDeviceType`<sup>Optional</sup> <a name="CacheByDeviceType" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.cacheByDeviceType"></a>

```go
CacheByDeviceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#cache_by_device_type PageRule#cache_by_device_type}.

---

##### `CacheDeceptionArmor`<sup>Optional</sup> <a name="CacheDeceptionArmor" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.cacheDeceptionArmor"></a>

```go
CacheDeceptionArmor *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#cache_deception_armor PageRule#cache_deception_armor}.

---

##### `CacheKeyFields`<sup>Optional</sup> <a name="CacheKeyFields" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.cacheKeyFields"></a>

```go
CacheKeyFields PageRuleActionsCacheKeyFields
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFields">PageRuleActionsCacheKeyFields</a>

cache_key_fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#cache_key_fields PageRule#cache_key_fields}

---

##### `CacheLevel`<sup>Optional</sup> <a name="CacheLevel" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.cacheLevel"></a>

```go
CacheLevel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#cache_level PageRule#cache_level}.

---

##### `CacheOnCookie`<sup>Optional</sup> <a name="CacheOnCookie" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.cacheOnCookie"></a>

```go
CacheOnCookie *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#cache_on_cookie PageRule#cache_on_cookie}.

---

##### `CacheTtlByStatus`<sup>Optional</sup> <a name="CacheTtlByStatus" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.cacheTtlByStatus"></a>

```go
CacheTtlByStatus interface{}
```

- *Type:* interface{}

cache_ttl_by_status block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#cache_ttl_by_status PageRule#cache_ttl_by_status}

---

##### `DisableApps`<sup>Optional</sup> <a name="DisableApps" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.disableApps"></a>

```go
DisableApps interface{}
```

- *Type:* interface{}

Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#disable_apps PageRule#disable_apps}

---

##### `DisablePerformance`<sup>Optional</sup> <a name="DisablePerformance" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.disablePerformance"></a>

```go
DisablePerformance interface{}
```

- *Type:* interface{}

Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#disable_performance PageRule#disable_performance}

---

##### `DisableRailgun`<sup>Optional</sup> <a name="DisableRailgun" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.disableRailgun"></a>

```go
DisableRailgun interface{}
```

- *Type:* interface{}

Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#disable_railgun PageRule#disable_railgun}

---

##### `DisableSecurity`<sup>Optional</sup> <a name="DisableSecurity" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.disableSecurity"></a>

```go
DisableSecurity interface{}
```

- *Type:* interface{}

Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#disable_security PageRule#disable_security}

---

##### `DisableZaraz`<sup>Optional</sup> <a name="DisableZaraz" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.disableZaraz"></a>

```go
DisableZaraz interface{}
```

- *Type:* interface{}

Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#disable_zaraz PageRule#disable_zaraz}

---

##### `EdgeCacheTtl`<sup>Optional</sup> <a name="EdgeCacheTtl" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.edgeCacheTtl"></a>

```go
EdgeCacheTtl *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#edge_cache_ttl PageRule#edge_cache_ttl}.

---

##### `EmailObfuscation`<sup>Optional</sup> <a name="EmailObfuscation" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.emailObfuscation"></a>

```go
EmailObfuscation *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#email_obfuscation PageRule#email_obfuscation}.

---

##### `ExplicitCacheControl`<sup>Optional</sup> <a name="ExplicitCacheControl" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.explicitCacheControl"></a>

```go
ExplicitCacheControl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#explicit_cache_control PageRule#explicit_cache_control}.

---

##### `ForwardingUrl`<sup>Optional</sup> <a name="ForwardingUrl" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.forwardingUrl"></a>

```go
ForwardingUrl PageRuleActionsForwardingUrl
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrl">PageRuleActionsForwardingUrl</a>

forwarding_url block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#forwarding_url PageRule#forwarding_url}

---

##### `HostHeaderOverride`<sup>Optional</sup> <a name="HostHeaderOverride" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.hostHeaderOverride"></a>

```go
HostHeaderOverride *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#host_header_override PageRule#host_header_override}.

---

##### `IpGeolocation`<sup>Optional</sup> <a name="IpGeolocation" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.ipGeolocation"></a>

```go
IpGeolocation *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#ip_geolocation PageRule#ip_geolocation}.

---

##### `Minify`<sup>Optional</sup> <a name="Minify" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.minify"></a>

```go
Minify interface{}
```

- *Type:* interface{}

minify block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#minify PageRule#minify}

---

##### `Mirage`<sup>Optional</sup> <a name="Mirage" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.mirage"></a>

```go
Mirage *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#mirage PageRule#mirage}.

---

##### `OpportunisticEncryption`<sup>Optional</sup> <a name="OpportunisticEncryption" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.opportunisticEncryption"></a>

```go
OpportunisticEncryption *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#opportunistic_encryption PageRule#opportunistic_encryption}.

---

##### `OriginErrorPagePassThru`<sup>Optional</sup> <a name="OriginErrorPagePassThru" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.originErrorPagePassThru"></a>

```go
OriginErrorPagePassThru *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#origin_error_page_pass_thru PageRule#origin_error_page_pass_thru}.

---

##### `Polish`<sup>Optional</sup> <a name="Polish" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.polish"></a>

```go
Polish *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#polish PageRule#polish}.

---

##### `ResolveOverride`<sup>Optional</sup> <a name="ResolveOverride" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.resolveOverride"></a>

```go
ResolveOverride *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#resolve_override PageRule#resolve_override}.

---

##### `RespectStrongEtag`<sup>Optional</sup> <a name="RespectStrongEtag" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.respectStrongEtag"></a>

```go
RespectStrongEtag *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#respect_strong_etag PageRule#respect_strong_etag}.

---

##### `ResponseBuffering`<sup>Optional</sup> <a name="ResponseBuffering" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.responseBuffering"></a>

```go
ResponseBuffering *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#response_buffering PageRule#response_buffering}.

---

##### `RocketLoader`<sup>Optional</sup> <a name="RocketLoader" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.rocketLoader"></a>

```go
RocketLoader *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#rocket_loader PageRule#rocket_loader}.

---

##### `SecurityLevel`<sup>Optional</sup> <a name="SecurityLevel" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.securityLevel"></a>

```go
SecurityLevel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#security_level PageRule#security_level}.

---

##### `ServerSideExclude`<sup>Optional</sup> <a name="ServerSideExclude" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.serverSideExclude"></a>

```go
ServerSideExclude *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#server_side_exclude PageRule#server_side_exclude}.

---

##### `SortQueryStringForCache`<sup>Optional</sup> <a name="SortQueryStringForCache" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.sortQueryStringForCache"></a>

```go
SortQueryStringForCache *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#sort_query_string_for_cache PageRule#sort_query_string_for_cache}.

---

##### `Ssl`<sup>Optional</sup> <a name="Ssl" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.ssl"></a>

```go
Ssl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#ssl PageRule#ssl}.

---

##### `TrueClientIpHeader`<sup>Optional</sup> <a name="TrueClientIpHeader" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.trueClientIpHeader"></a>

```go
TrueClientIpHeader *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#true_client_ip_header PageRule#true_client_ip_header}.

---

##### `Waf`<sup>Optional</sup> <a name="Waf" id="@cdktf/provider-cloudflare.pageRule.PageRuleActions.property.waf"></a>

```go
Waf *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#waf PageRule#waf}.

---

### PageRuleActionsCacheKeyFields <a name="PageRuleActionsCacheKeyFields" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFields.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/pagerule"

&pagerule.PageRuleActionsCacheKeyFields {
	Host: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11.pageRule.PageRuleActionsCacheKeyFieldsHost,
	QueryString: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11.pageRule.PageRuleActionsCacheKeyFieldsQueryString,
	User: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11.pageRule.PageRuleActionsCacheKeyFieldsUser,
	Cookie: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11.pageRule.PageRuleActionsCacheKeyFieldsCookie,
	Header: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11.pageRule.PageRuleActionsCacheKeyFieldsHeader,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFields.property.host">Host</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHost">PageRuleActionsCacheKeyFieldsHost</a></code> | host block. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFields.property.queryString">QueryString</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryString">PageRuleActionsCacheKeyFieldsQueryString</a></code> | query_string block. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFields.property.user">User</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUser">PageRuleActionsCacheKeyFieldsUser</a></code> | user block. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFields.property.cookie">Cookie</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookie">PageRuleActionsCacheKeyFieldsCookie</a></code> | cookie block. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFields.property.header">Header</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeader">PageRuleActionsCacheKeyFieldsHeader</a></code> | header block. |

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFields.property.host"></a>

```go
Host PageRuleActionsCacheKeyFieldsHost
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHost">PageRuleActionsCacheKeyFieldsHost</a>

host block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#host PageRule#host}

---

##### `QueryString`<sup>Required</sup> <a name="QueryString" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFields.property.queryString"></a>

```go
QueryString PageRuleActionsCacheKeyFieldsQueryString
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryString">PageRuleActionsCacheKeyFieldsQueryString</a>

query_string block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#query_string PageRule#query_string}

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFields.property.user"></a>

```go
User PageRuleActionsCacheKeyFieldsUser
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUser">PageRuleActionsCacheKeyFieldsUser</a>

user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#user PageRule#user}

---

##### `Cookie`<sup>Optional</sup> <a name="Cookie" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFields.property.cookie"></a>

```go
Cookie PageRuleActionsCacheKeyFieldsCookie
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookie">PageRuleActionsCacheKeyFieldsCookie</a>

cookie block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#cookie PageRule#cookie}

---

##### `Header`<sup>Optional</sup> <a name="Header" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFields.property.header"></a>

```go
Header PageRuleActionsCacheKeyFieldsHeader
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeader">PageRuleActionsCacheKeyFieldsHeader</a>

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#header PageRule#header}

---

### PageRuleActionsCacheKeyFieldsCookie <a name="PageRuleActionsCacheKeyFieldsCookie" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookie"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookie.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/pagerule"

&pagerule.PageRuleActionsCacheKeyFieldsCookie {
	CheckPresence: *[]*string,
	Include: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookie.property.checkPresence">CheckPresence</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#check_presence PageRule#check_presence}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookie.property.include">Include</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#include PageRule#include}. |

---

##### `CheckPresence`<sup>Optional</sup> <a name="CheckPresence" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookie.property.checkPresence"></a>

```go
CheckPresence *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#check_presence PageRule#check_presence}.

---

##### `Include`<sup>Optional</sup> <a name="Include" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookie.property.include"></a>

```go
Include *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#include PageRule#include}.

---

### PageRuleActionsCacheKeyFieldsHeader <a name="PageRuleActionsCacheKeyFieldsHeader" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeader.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/pagerule"

&pagerule.PageRuleActionsCacheKeyFieldsHeader {
	CheckPresence: *[]*string,
	Exclude: *[]*string,
	Include: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeader.property.checkPresence">CheckPresence</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#check_presence PageRule#check_presence}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeader.property.exclude">Exclude</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#exclude PageRule#exclude}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeader.property.include">Include</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#include PageRule#include}. |

---

##### `CheckPresence`<sup>Optional</sup> <a name="CheckPresence" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeader.property.checkPresence"></a>

```go
CheckPresence *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#check_presence PageRule#check_presence}.

---

##### `Exclude`<sup>Optional</sup> <a name="Exclude" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeader.property.exclude"></a>

```go
Exclude *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#exclude PageRule#exclude}.

---

##### `Include`<sup>Optional</sup> <a name="Include" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeader.property.include"></a>

```go
Include *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#include PageRule#include}.

---

### PageRuleActionsCacheKeyFieldsHost <a name="PageRuleActionsCacheKeyFieldsHost" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHost"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHost.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/pagerule"

&pagerule.PageRuleActionsCacheKeyFieldsHost {
	Resolved: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHost.property.resolved">Resolved</a></code> | <code>interface{}</code> | Defaults to `false`. |

---

##### `Resolved`<sup>Optional</sup> <a name="Resolved" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHost.property.resolved"></a>

```go
Resolved interface{}
```

- *Type:* interface{}

Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#resolved PageRule#resolved}

---

### PageRuleActionsCacheKeyFieldsQueryString <a name="PageRuleActionsCacheKeyFieldsQueryString" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryString"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryString.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/pagerule"

&pagerule.PageRuleActionsCacheKeyFieldsQueryString {
	Exclude: *[]*string,
	Ignore: interface{},
	Include: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryString.property.exclude">Exclude</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#exclude PageRule#exclude}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryString.property.ignore">Ignore</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#ignore PageRule#ignore}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryString.property.include">Include</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#include PageRule#include}. |

---

##### `Exclude`<sup>Optional</sup> <a name="Exclude" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryString.property.exclude"></a>

```go
Exclude *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#exclude PageRule#exclude}.

---

##### `Ignore`<sup>Optional</sup> <a name="Ignore" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryString.property.ignore"></a>

```go
Ignore interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#ignore PageRule#ignore}.

---

##### `Include`<sup>Optional</sup> <a name="Include" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryString.property.include"></a>

```go
Include *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#include PageRule#include}.

---

### PageRuleActionsCacheKeyFieldsUser <a name="PageRuleActionsCacheKeyFieldsUser" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUser.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/pagerule"

&pagerule.PageRuleActionsCacheKeyFieldsUser {
	DeviceType: interface{},
	Geo: interface{},
	Lang: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUser.property.deviceType">DeviceType</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#device_type PageRule#device_type}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUser.property.geo">Geo</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#geo PageRule#geo}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUser.property.lang">Lang</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#lang PageRule#lang}. |

---

##### `DeviceType`<sup>Optional</sup> <a name="DeviceType" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUser.property.deviceType"></a>

```go
DeviceType interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#device_type PageRule#device_type}.

---

##### `Geo`<sup>Optional</sup> <a name="Geo" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUser.property.geo"></a>

```go
Geo interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#geo PageRule#geo}.

---

##### `Lang`<sup>Optional</sup> <a name="Lang" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUser.property.lang"></a>

```go
Lang interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#lang PageRule#lang}.

---

### PageRuleActionsCacheTtlByStatus <a name="PageRuleActionsCacheTtlByStatus" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatus.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/pagerule"

&pagerule.PageRuleActionsCacheTtlByStatus {
	Codes: *string,
	Ttl: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatus.property.codes">Codes</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#codes PageRule#codes}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatus.property.ttl">Ttl</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#ttl PageRule#ttl}. |

---

##### `Codes`<sup>Required</sup> <a name="Codes" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatus.property.codes"></a>

```go
Codes *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#codes PageRule#codes}.

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatus.property.ttl"></a>

```go
Ttl *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#ttl PageRule#ttl}.

---

### PageRuleActionsForwardingUrl <a name="PageRuleActionsForwardingUrl" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrl.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/pagerule"

&pagerule.PageRuleActionsForwardingUrl {
	StatusCode: *f64,
	Url: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrl.property.statusCode">StatusCode</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#status_code PageRule#status_code}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrl.property.url">Url</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#url PageRule#url}. |

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrl.property.statusCode"></a>

```go
StatusCode *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#status_code PageRule#status_code}.

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrl.property.url"></a>

```go
Url *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#url PageRule#url}.

---

### PageRuleActionsMinify <a name="PageRuleActionsMinify" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinify"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinify.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/pagerule"

&pagerule.PageRuleActionsMinify {
	Css: *string,
	Html: *string,
	Js: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinify.property.css">Css</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#css PageRule#css}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinify.property.html">Html</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#html PageRule#html}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinify.property.js">Js</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#js PageRule#js}. |

---

##### `Css`<sup>Required</sup> <a name="Css" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinify.property.css"></a>

```go
Css *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#css PageRule#css}.

---

##### `Html`<sup>Required</sup> <a name="Html" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinify.property.html"></a>

```go
Html *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#html PageRule#html}.

---

##### `Js`<sup>Required</sup> <a name="Js" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinify.property.js"></a>

```go
Js *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#js PageRule#js}.

---

### PageRuleConfig <a name="PageRuleConfig" id="@cdktf/provider-cloudflare.pageRule.PageRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.pageRule.PageRuleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/pagerule"

&pagerule.PageRuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Actions: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11.pageRule.PageRuleActions,
	Target: *string,
	ZoneId: *string,
	Id: *string,
	Priority: *f64,
	Status: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleConfig.property.actions">Actions</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions">PageRuleActions</a></code> | actions block. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleConfig.property.target">Target</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#target PageRule#target}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleConfig.property.zoneId">ZoneId</a></code> | <code>*string</code> | The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#id PageRule#id}. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleConfig.property.priority">Priority</a></code> | <code>*f64</code> | Defaults to `1`. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleConfig.property.status">Status</a></code> | <code>*string</code> | Defaults to `active`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.pageRule.PageRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.pageRule.PageRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.pageRule.PageRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.pageRule.PageRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.pageRule.PageRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.pageRule.PageRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.pageRule.PageRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktf/provider-cloudflare.pageRule.PageRuleConfig.property.actions"></a>

```go
Actions PageRuleActions
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions">PageRuleActions</a>

actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#actions PageRule#actions}

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-cloudflare.pageRule.PageRuleConfig.property.target"></a>

```go
Target *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#target PageRule#target}.

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.pageRule.PageRuleConfig.property.zoneId"></a>

```go
ZoneId *string
```

- *Type:* *string

The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#zone_id PageRule#zone_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.pageRule.PageRuleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#id PageRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-cloudflare.pageRule.PageRuleConfig.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

Defaults to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#priority PageRule#priority}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-cloudflare.pageRule.PageRuleConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

Defaults to `active`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/page_rule#status PageRule#status}

---

## Classes <a name="Classes" id="Classes"></a>

### PageRuleActionsCacheKeyFieldsCookieOutputReference <a name="PageRuleActionsCacheKeyFieldsCookieOutputReference" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/pagerule"

pagerule.NewPageRuleActionsCacheKeyFieldsCookieOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PageRuleActionsCacheKeyFieldsCookieOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.resetCheckPresence">ResetCheckPresence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.resetInclude">ResetInclude</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCheckPresence` <a name="ResetCheckPresence" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.resetCheckPresence"></a>

```go
func ResetCheckPresence()
```

##### `ResetInclude` <a name="ResetInclude" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.resetInclude"></a>

```go
func ResetInclude()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.property.checkPresenceInput">CheckPresenceInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.property.includeInput">IncludeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.property.checkPresence">CheckPresence</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.property.include">Include</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookie">PageRuleActionsCacheKeyFieldsCookie</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CheckPresenceInput`<sup>Optional</sup> <a name="CheckPresenceInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.property.checkPresenceInput"></a>

```go
func CheckPresenceInput() *[]*string
```

- *Type:* *[]*string

---

##### `IncludeInput`<sup>Optional</sup> <a name="IncludeInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.property.includeInput"></a>

```go
func IncludeInput() *[]*string
```

- *Type:* *[]*string

---

##### `CheckPresence`<sup>Required</sup> <a name="CheckPresence" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.property.checkPresence"></a>

```go
func CheckPresence() *[]*string
```

- *Type:* *[]*string

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.property.include"></a>

```go
func Include() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference.property.internalValue"></a>

```go
func InternalValue() PageRuleActionsCacheKeyFieldsCookie
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookie">PageRuleActionsCacheKeyFieldsCookie</a>

---


### PageRuleActionsCacheKeyFieldsHeaderOutputReference <a name="PageRuleActionsCacheKeyFieldsHeaderOutputReference" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/pagerule"

pagerule.NewPageRuleActionsCacheKeyFieldsHeaderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PageRuleActionsCacheKeyFieldsHeaderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.resetCheckPresence">ResetCheckPresence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.resetExclude">ResetExclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.resetInclude">ResetInclude</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCheckPresence` <a name="ResetCheckPresence" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.resetCheckPresence"></a>

```go
func ResetCheckPresence()
```

##### `ResetExclude` <a name="ResetExclude" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.resetExclude"></a>

```go
func ResetExclude()
```

##### `ResetInclude` <a name="ResetInclude" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.resetInclude"></a>

```go
func ResetInclude()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.property.checkPresenceInput">CheckPresenceInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.property.excludeInput">ExcludeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.property.includeInput">IncludeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.property.checkPresence">CheckPresence</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.property.exclude">Exclude</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.property.include">Include</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeader">PageRuleActionsCacheKeyFieldsHeader</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CheckPresenceInput`<sup>Optional</sup> <a name="CheckPresenceInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.property.checkPresenceInput"></a>

```go
func CheckPresenceInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExcludeInput`<sup>Optional</sup> <a name="ExcludeInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.property.excludeInput"></a>

```go
func ExcludeInput() *[]*string
```

- *Type:* *[]*string

---

##### `IncludeInput`<sup>Optional</sup> <a name="IncludeInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.property.includeInput"></a>

```go
func IncludeInput() *[]*string
```

- *Type:* *[]*string

---

##### `CheckPresence`<sup>Required</sup> <a name="CheckPresence" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.property.checkPresence"></a>

```go
func CheckPresence() *[]*string
```

- *Type:* *[]*string

---

##### `Exclude`<sup>Required</sup> <a name="Exclude" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.property.exclude"></a>

```go
func Exclude() *[]*string
```

- *Type:* *[]*string

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.property.include"></a>

```go
func Include() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference.property.internalValue"></a>

```go
func InternalValue() PageRuleActionsCacheKeyFieldsHeader
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeader">PageRuleActionsCacheKeyFieldsHeader</a>

---


### PageRuleActionsCacheKeyFieldsHostOutputReference <a name="PageRuleActionsCacheKeyFieldsHostOutputReference" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/pagerule"

pagerule.NewPageRuleActionsCacheKeyFieldsHostOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PageRuleActionsCacheKeyFieldsHostOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.resetResolved">ResetResolved</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResolved` <a name="ResetResolved" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.resetResolved"></a>

```go
func ResetResolved()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.property.resolvedInput">ResolvedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.property.resolved">Resolved</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHost">PageRuleActionsCacheKeyFieldsHost</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResolvedInput`<sup>Optional</sup> <a name="ResolvedInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.property.resolvedInput"></a>

```go
func ResolvedInput() interface{}
```

- *Type:* interface{}

---

##### `Resolved`<sup>Required</sup> <a name="Resolved" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.property.resolved"></a>

```go
func Resolved() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference.property.internalValue"></a>

```go
func InternalValue() PageRuleActionsCacheKeyFieldsHost
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHost">PageRuleActionsCacheKeyFieldsHost</a>

---


### PageRuleActionsCacheKeyFieldsOutputReference <a name="PageRuleActionsCacheKeyFieldsOutputReference" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/pagerule"

pagerule.NewPageRuleActionsCacheKeyFieldsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PageRuleActionsCacheKeyFieldsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.putCookie">PutCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.putHeader">PutHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.putHost">PutHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.putQueryString">PutQueryString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.putUser">PutUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.resetCookie">ResetCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.resetHeader">ResetHeader</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCookie` <a name="PutCookie" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.putCookie"></a>

```go
func PutCookie(value PageRuleActionsCacheKeyFieldsCookie)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.putCookie.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookie">PageRuleActionsCacheKeyFieldsCookie</a>

---

##### `PutHeader` <a name="PutHeader" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.putHeader"></a>

```go
func PutHeader(value PageRuleActionsCacheKeyFieldsHeader)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.putHeader.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeader">PageRuleActionsCacheKeyFieldsHeader</a>

---

##### `PutHost` <a name="PutHost" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.putHost"></a>

```go
func PutHost(value PageRuleActionsCacheKeyFieldsHost)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.putHost.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHost">PageRuleActionsCacheKeyFieldsHost</a>

---

##### `PutQueryString` <a name="PutQueryString" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.putQueryString"></a>

```go
func PutQueryString(value PageRuleActionsCacheKeyFieldsQueryString)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.putQueryString.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryString">PageRuleActionsCacheKeyFieldsQueryString</a>

---

##### `PutUser` <a name="PutUser" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.putUser"></a>

```go
func PutUser(value PageRuleActionsCacheKeyFieldsUser)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.putUser.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUser">PageRuleActionsCacheKeyFieldsUser</a>

---

##### `ResetCookie` <a name="ResetCookie" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.resetCookie"></a>

```go
func ResetCookie()
```

##### `ResetHeader` <a name="ResetHeader" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.resetHeader"></a>

```go
func ResetHeader()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.property.cookie">Cookie</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference">PageRuleActionsCacheKeyFieldsCookieOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.property.header">Header</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference">PageRuleActionsCacheKeyFieldsHeaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.property.host">Host</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference">PageRuleActionsCacheKeyFieldsHostOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.property.queryString">QueryString</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference">PageRuleActionsCacheKeyFieldsQueryStringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.property.user">User</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference">PageRuleActionsCacheKeyFieldsUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.property.cookieInput">CookieInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookie">PageRuleActionsCacheKeyFieldsCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.property.headerInput">HeaderInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeader">PageRuleActionsCacheKeyFieldsHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.property.hostInput">HostInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHost">PageRuleActionsCacheKeyFieldsHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.property.queryStringInput">QueryStringInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryString">PageRuleActionsCacheKeyFieldsQueryString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.property.userInput">UserInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUser">PageRuleActionsCacheKeyFieldsUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFields">PageRuleActionsCacheKeyFields</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Cookie`<sup>Required</sup> <a name="Cookie" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.property.cookie"></a>

```go
func Cookie() PageRuleActionsCacheKeyFieldsCookieOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookieOutputReference">PageRuleActionsCacheKeyFieldsCookieOutputReference</a>

---

##### `Header`<sup>Required</sup> <a name="Header" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.property.header"></a>

```go
func Header() PageRuleActionsCacheKeyFieldsHeaderOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeaderOutputReference">PageRuleActionsCacheKeyFieldsHeaderOutputReference</a>

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.property.host"></a>

```go
func Host() PageRuleActionsCacheKeyFieldsHostOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHostOutputReference">PageRuleActionsCacheKeyFieldsHostOutputReference</a>

---

##### `QueryString`<sup>Required</sup> <a name="QueryString" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.property.queryString"></a>

```go
func QueryString() PageRuleActionsCacheKeyFieldsQueryStringOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference">PageRuleActionsCacheKeyFieldsQueryStringOutputReference</a>

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.property.user"></a>

```go
func User() PageRuleActionsCacheKeyFieldsUserOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference">PageRuleActionsCacheKeyFieldsUserOutputReference</a>

---

##### `CookieInput`<sup>Optional</sup> <a name="CookieInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.property.cookieInput"></a>

```go
func CookieInput() PageRuleActionsCacheKeyFieldsCookie
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsCookie">PageRuleActionsCacheKeyFieldsCookie</a>

---

##### `HeaderInput`<sup>Optional</sup> <a name="HeaderInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.property.headerInput"></a>

```go
func HeaderInput() PageRuleActionsCacheKeyFieldsHeader
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHeader">PageRuleActionsCacheKeyFieldsHeader</a>

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.property.hostInput"></a>

```go
func HostInput() PageRuleActionsCacheKeyFieldsHost
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsHost">PageRuleActionsCacheKeyFieldsHost</a>

---

##### `QueryStringInput`<sup>Optional</sup> <a name="QueryStringInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.property.queryStringInput"></a>

```go
func QueryStringInput() PageRuleActionsCacheKeyFieldsQueryString
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryString">PageRuleActionsCacheKeyFieldsQueryString</a>

---

##### `UserInput`<sup>Optional</sup> <a name="UserInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.property.userInput"></a>

```go
func UserInput() PageRuleActionsCacheKeyFieldsUser
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUser">PageRuleActionsCacheKeyFieldsUser</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference.property.internalValue"></a>

```go
func InternalValue() PageRuleActionsCacheKeyFields
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFields">PageRuleActionsCacheKeyFields</a>

---


### PageRuleActionsCacheKeyFieldsQueryStringOutputReference <a name="PageRuleActionsCacheKeyFieldsQueryStringOutputReference" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/pagerule"

pagerule.NewPageRuleActionsCacheKeyFieldsQueryStringOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PageRuleActionsCacheKeyFieldsQueryStringOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.resetExclude">ResetExclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.resetIgnore">ResetIgnore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.resetInclude">ResetInclude</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExclude` <a name="ResetExclude" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.resetExclude"></a>

```go
func ResetExclude()
```

##### `ResetIgnore` <a name="ResetIgnore" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.resetIgnore"></a>

```go
func ResetIgnore()
```

##### `ResetInclude` <a name="ResetInclude" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.resetInclude"></a>

```go
func ResetInclude()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.property.excludeInput">ExcludeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.property.ignoreInput">IgnoreInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.property.includeInput">IncludeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.property.exclude">Exclude</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.property.ignore">Ignore</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.property.include">Include</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryString">PageRuleActionsCacheKeyFieldsQueryString</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExcludeInput`<sup>Optional</sup> <a name="ExcludeInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.property.excludeInput"></a>

```go
func ExcludeInput() *[]*string
```

- *Type:* *[]*string

---

##### `IgnoreInput`<sup>Optional</sup> <a name="IgnoreInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.property.ignoreInput"></a>

```go
func IgnoreInput() interface{}
```

- *Type:* interface{}

---

##### `IncludeInput`<sup>Optional</sup> <a name="IncludeInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.property.includeInput"></a>

```go
func IncludeInput() *[]*string
```

- *Type:* *[]*string

---

##### `Exclude`<sup>Required</sup> <a name="Exclude" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.property.exclude"></a>

```go
func Exclude() *[]*string
```

- *Type:* *[]*string

---

##### `Ignore`<sup>Required</sup> <a name="Ignore" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.property.ignore"></a>

```go
func Ignore() interface{}
```

- *Type:* interface{}

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.property.include"></a>

```go
func Include() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryStringOutputReference.property.internalValue"></a>

```go
func InternalValue() PageRuleActionsCacheKeyFieldsQueryString
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsQueryString">PageRuleActionsCacheKeyFieldsQueryString</a>

---


### PageRuleActionsCacheKeyFieldsUserOutputReference <a name="PageRuleActionsCacheKeyFieldsUserOutputReference" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/pagerule"

pagerule.NewPageRuleActionsCacheKeyFieldsUserOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PageRuleActionsCacheKeyFieldsUserOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.resetDeviceType">ResetDeviceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.resetGeo">ResetGeo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.resetLang">ResetLang</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeviceType` <a name="ResetDeviceType" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.resetDeviceType"></a>

```go
func ResetDeviceType()
```

##### `ResetGeo` <a name="ResetGeo" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.resetGeo"></a>

```go
func ResetGeo()
```

##### `ResetLang` <a name="ResetLang" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.resetLang"></a>

```go
func ResetLang()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.property.deviceTypeInput">DeviceTypeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.property.geoInput">GeoInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.property.langInput">LangInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.property.deviceType">DeviceType</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.property.geo">Geo</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.property.lang">Lang</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUser">PageRuleActionsCacheKeyFieldsUser</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeviceTypeInput`<sup>Optional</sup> <a name="DeviceTypeInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.property.deviceTypeInput"></a>

```go
func DeviceTypeInput() interface{}
```

- *Type:* interface{}

---

##### `GeoInput`<sup>Optional</sup> <a name="GeoInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.property.geoInput"></a>

```go
func GeoInput() interface{}
```

- *Type:* interface{}

---

##### `LangInput`<sup>Optional</sup> <a name="LangInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.property.langInput"></a>

```go
func LangInput() interface{}
```

- *Type:* interface{}

---

##### `DeviceType`<sup>Required</sup> <a name="DeviceType" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.property.deviceType"></a>

```go
func DeviceType() interface{}
```

- *Type:* interface{}

---

##### `Geo`<sup>Required</sup> <a name="Geo" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.property.geo"></a>

```go
func Geo() interface{}
```

- *Type:* interface{}

---

##### `Lang`<sup>Required</sup> <a name="Lang" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.property.lang"></a>

```go
func Lang() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUserOutputReference.property.internalValue"></a>

```go
func InternalValue() PageRuleActionsCacheKeyFieldsUser
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsUser">PageRuleActionsCacheKeyFieldsUser</a>

---


### PageRuleActionsCacheTtlByStatusList <a name="PageRuleActionsCacheTtlByStatusList" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/pagerule"

pagerule.NewPageRuleActionsCacheTtlByStatusList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) PageRuleActionsCacheTtlByStatusList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusList.get"></a>

```go
func Get(index *f64) PageRuleActionsCacheTtlByStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PageRuleActionsCacheTtlByStatusOutputReference <a name="PageRuleActionsCacheTtlByStatusOutputReference" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/pagerule"

pagerule.NewPageRuleActionsCacheTtlByStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) PageRuleActionsCacheTtlByStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.property.codesInput">CodesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.property.ttlInput">TtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.property.codes">Codes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.property.ttl">Ttl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CodesInput`<sup>Optional</sup> <a name="CodesInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.property.codesInput"></a>

```go
func CodesInput() *string
```

- *Type:* *string

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.property.ttlInput"></a>

```go
func TtlInput() *f64
```

- *Type:* *f64

---

##### `Codes`<sup>Required</sup> <a name="Codes" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.property.codes"></a>

```go
func Codes() *string
```

- *Type:* *string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.property.ttl"></a>

```go
func Ttl() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PageRuleActionsForwardingUrlOutputReference <a name="PageRuleActionsForwardingUrlOutputReference" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/pagerule"

pagerule.NewPageRuleActionsForwardingUrlOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PageRuleActionsForwardingUrlOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.property.statusCodeInput">StatusCodeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.property.statusCode">StatusCode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrl">PageRuleActionsForwardingUrl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StatusCodeInput`<sup>Optional</sup> <a name="StatusCodeInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.property.statusCodeInput"></a>

```go
func StatusCodeInput() *f64
```

- *Type:* *f64

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.property.statusCode"></a>

```go
func StatusCode() *f64
```

- *Type:* *f64

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference.property.internalValue"></a>

```go
func InternalValue() PageRuleActionsForwardingUrl
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrl">PageRuleActionsForwardingUrl</a>

---


### PageRuleActionsMinifyList <a name="PageRuleActionsMinifyList" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/pagerule"

pagerule.NewPageRuleActionsMinifyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) PageRuleActionsMinifyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyList.get"></a>

```go
func Get(index *f64) PageRuleActionsMinifyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PageRuleActionsMinifyOutputReference <a name="PageRuleActionsMinifyOutputReference" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/pagerule"

pagerule.NewPageRuleActionsMinifyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) PageRuleActionsMinifyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.property.cssInput">CssInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.property.htmlInput">HtmlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.property.jsInput">JsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.property.css">Css</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.property.html">Html</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.property.js">Js</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CssInput`<sup>Optional</sup> <a name="CssInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.property.cssInput"></a>

```go
func CssInput() *string
```

- *Type:* *string

---

##### `HtmlInput`<sup>Optional</sup> <a name="HtmlInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.property.htmlInput"></a>

```go
func HtmlInput() *string
```

- *Type:* *string

---

##### `JsInput`<sup>Optional</sup> <a name="JsInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.property.jsInput"></a>

```go
func JsInput() *string
```

- *Type:* *string

---

##### `Css`<sup>Required</sup> <a name="Css" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.property.css"></a>

```go
func Css() *string
```

- *Type:* *string

---

##### `Html`<sup>Required</sup> <a name="Html" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.property.html"></a>

```go
func Html() *string
```

- *Type:* *string

---

##### `Js`<sup>Required</sup> <a name="Js" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.property.js"></a>

```go
func Js() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PageRuleActionsOutputReference <a name="PageRuleActionsOutputReference" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/pagerule"

pagerule.NewPageRuleActionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PageRuleActionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.putCacheKeyFields">PutCacheKeyFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.putCacheTtlByStatus">PutCacheTtlByStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.putForwardingUrl">PutForwardingUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.putMinify">PutMinify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetAlwaysUseHttps">ResetAlwaysUseHttps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetAutomaticHttpsRewrites">ResetAutomaticHttpsRewrites</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetBrowserCacheTtl">ResetBrowserCacheTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetBrowserCheck">ResetBrowserCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetBypassCacheOnCookie">ResetBypassCacheOnCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetCacheByDeviceType">ResetCacheByDeviceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetCacheDeceptionArmor">ResetCacheDeceptionArmor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetCacheKeyFields">ResetCacheKeyFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetCacheLevel">ResetCacheLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetCacheOnCookie">ResetCacheOnCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetCacheTtlByStatus">ResetCacheTtlByStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetDisableApps">ResetDisableApps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetDisablePerformance">ResetDisablePerformance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetDisableRailgun">ResetDisableRailgun</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetDisableSecurity">ResetDisableSecurity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetDisableZaraz">ResetDisableZaraz</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetEdgeCacheTtl">ResetEdgeCacheTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetEmailObfuscation">ResetEmailObfuscation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetExplicitCacheControl">ResetExplicitCacheControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetForwardingUrl">ResetForwardingUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetHostHeaderOverride">ResetHostHeaderOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetIpGeolocation">ResetIpGeolocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetMinify">ResetMinify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetMirage">ResetMirage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetOpportunisticEncryption">ResetOpportunisticEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetOriginErrorPagePassThru">ResetOriginErrorPagePassThru</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetPolish">ResetPolish</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetResolveOverride">ResetResolveOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetRespectStrongEtag">ResetRespectStrongEtag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetResponseBuffering">ResetResponseBuffering</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetRocketLoader">ResetRocketLoader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetSecurityLevel">ResetSecurityLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetServerSideExclude">ResetServerSideExclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetSortQueryStringForCache">ResetSortQueryStringForCache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetSsl">ResetSsl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetTrueClientIpHeader">ResetTrueClientIpHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetWaf">ResetWaf</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCacheKeyFields` <a name="PutCacheKeyFields" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.putCacheKeyFields"></a>

```go
func PutCacheKeyFields(value PageRuleActionsCacheKeyFields)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.putCacheKeyFields.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFields">PageRuleActionsCacheKeyFields</a>

---

##### `PutCacheTtlByStatus` <a name="PutCacheTtlByStatus" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.putCacheTtlByStatus"></a>

```go
func PutCacheTtlByStatus(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.putCacheTtlByStatus.parameter.value"></a>

- *Type:* interface{}

---

##### `PutForwardingUrl` <a name="PutForwardingUrl" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.putForwardingUrl"></a>

```go
func PutForwardingUrl(value PageRuleActionsForwardingUrl)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.putForwardingUrl.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrl">PageRuleActionsForwardingUrl</a>

---

##### `PutMinify` <a name="PutMinify" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.putMinify"></a>

```go
func PutMinify(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.putMinify.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAlwaysUseHttps` <a name="ResetAlwaysUseHttps" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetAlwaysUseHttps"></a>

```go
func ResetAlwaysUseHttps()
```

##### `ResetAutomaticHttpsRewrites` <a name="ResetAutomaticHttpsRewrites" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetAutomaticHttpsRewrites"></a>

```go
func ResetAutomaticHttpsRewrites()
```

##### `ResetBrowserCacheTtl` <a name="ResetBrowserCacheTtl" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetBrowserCacheTtl"></a>

```go
func ResetBrowserCacheTtl()
```

##### `ResetBrowserCheck` <a name="ResetBrowserCheck" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetBrowserCheck"></a>

```go
func ResetBrowserCheck()
```

##### `ResetBypassCacheOnCookie` <a name="ResetBypassCacheOnCookie" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetBypassCacheOnCookie"></a>

```go
func ResetBypassCacheOnCookie()
```

##### `ResetCacheByDeviceType` <a name="ResetCacheByDeviceType" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetCacheByDeviceType"></a>

```go
func ResetCacheByDeviceType()
```

##### `ResetCacheDeceptionArmor` <a name="ResetCacheDeceptionArmor" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetCacheDeceptionArmor"></a>

```go
func ResetCacheDeceptionArmor()
```

##### `ResetCacheKeyFields` <a name="ResetCacheKeyFields" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetCacheKeyFields"></a>

```go
func ResetCacheKeyFields()
```

##### `ResetCacheLevel` <a name="ResetCacheLevel" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetCacheLevel"></a>

```go
func ResetCacheLevel()
```

##### `ResetCacheOnCookie` <a name="ResetCacheOnCookie" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetCacheOnCookie"></a>

```go
func ResetCacheOnCookie()
```

##### `ResetCacheTtlByStatus` <a name="ResetCacheTtlByStatus" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetCacheTtlByStatus"></a>

```go
func ResetCacheTtlByStatus()
```

##### `ResetDisableApps` <a name="ResetDisableApps" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetDisableApps"></a>

```go
func ResetDisableApps()
```

##### `ResetDisablePerformance` <a name="ResetDisablePerformance" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetDisablePerformance"></a>

```go
func ResetDisablePerformance()
```

##### `ResetDisableRailgun` <a name="ResetDisableRailgun" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetDisableRailgun"></a>

```go
func ResetDisableRailgun()
```

##### `ResetDisableSecurity` <a name="ResetDisableSecurity" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetDisableSecurity"></a>

```go
func ResetDisableSecurity()
```

##### `ResetDisableZaraz` <a name="ResetDisableZaraz" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetDisableZaraz"></a>

```go
func ResetDisableZaraz()
```

##### `ResetEdgeCacheTtl` <a name="ResetEdgeCacheTtl" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetEdgeCacheTtl"></a>

```go
func ResetEdgeCacheTtl()
```

##### `ResetEmailObfuscation` <a name="ResetEmailObfuscation" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetEmailObfuscation"></a>

```go
func ResetEmailObfuscation()
```

##### `ResetExplicitCacheControl` <a name="ResetExplicitCacheControl" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetExplicitCacheControl"></a>

```go
func ResetExplicitCacheControl()
```

##### `ResetForwardingUrl` <a name="ResetForwardingUrl" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetForwardingUrl"></a>

```go
func ResetForwardingUrl()
```

##### `ResetHostHeaderOverride` <a name="ResetHostHeaderOverride" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetHostHeaderOverride"></a>

```go
func ResetHostHeaderOverride()
```

##### `ResetIpGeolocation` <a name="ResetIpGeolocation" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetIpGeolocation"></a>

```go
func ResetIpGeolocation()
```

##### `ResetMinify` <a name="ResetMinify" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetMinify"></a>

```go
func ResetMinify()
```

##### `ResetMirage` <a name="ResetMirage" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetMirage"></a>

```go
func ResetMirage()
```

##### `ResetOpportunisticEncryption` <a name="ResetOpportunisticEncryption" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetOpportunisticEncryption"></a>

```go
func ResetOpportunisticEncryption()
```

##### `ResetOriginErrorPagePassThru` <a name="ResetOriginErrorPagePassThru" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetOriginErrorPagePassThru"></a>

```go
func ResetOriginErrorPagePassThru()
```

##### `ResetPolish` <a name="ResetPolish" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetPolish"></a>

```go
func ResetPolish()
```

##### `ResetResolveOverride` <a name="ResetResolveOverride" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetResolveOverride"></a>

```go
func ResetResolveOverride()
```

##### `ResetRespectStrongEtag` <a name="ResetRespectStrongEtag" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetRespectStrongEtag"></a>

```go
func ResetRespectStrongEtag()
```

##### `ResetResponseBuffering` <a name="ResetResponseBuffering" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetResponseBuffering"></a>

```go
func ResetResponseBuffering()
```

##### `ResetRocketLoader` <a name="ResetRocketLoader" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetRocketLoader"></a>

```go
func ResetRocketLoader()
```

##### `ResetSecurityLevel` <a name="ResetSecurityLevel" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetSecurityLevel"></a>

```go
func ResetSecurityLevel()
```

##### `ResetServerSideExclude` <a name="ResetServerSideExclude" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetServerSideExclude"></a>

```go
func ResetServerSideExclude()
```

##### `ResetSortQueryStringForCache` <a name="ResetSortQueryStringForCache" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetSortQueryStringForCache"></a>

```go
func ResetSortQueryStringForCache()
```

##### `ResetSsl` <a name="ResetSsl" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetSsl"></a>

```go
func ResetSsl()
```

##### `ResetTrueClientIpHeader` <a name="ResetTrueClientIpHeader" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetTrueClientIpHeader"></a>

```go
func ResetTrueClientIpHeader()
```

##### `ResetWaf` <a name="ResetWaf" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.resetWaf"></a>

```go
func ResetWaf()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.cacheKeyFields">CacheKeyFields</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference">PageRuleActionsCacheKeyFieldsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.cacheTtlByStatus">CacheTtlByStatus</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusList">PageRuleActionsCacheTtlByStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.forwardingUrl">ForwardingUrl</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference">PageRuleActionsForwardingUrlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.minify">Minify</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyList">PageRuleActionsMinifyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.alwaysUseHttpsInput">AlwaysUseHttpsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.automaticHttpsRewritesInput">AutomaticHttpsRewritesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.browserCacheTtlInput">BrowserCacheTtlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.browserCheckInput">BrowserCheckInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.bypassCacheOnCookieInput">BypassCacheOnCookieInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.cacheByDeviceTypeInput">CacheByDeviceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.cacheDeceptionArmorInput">CacheDeceptionArmorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.cacheKeyFieldsInput">CacheKeyFieldsInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFields">PageRuleActionsCacheKeyFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.cacheLevelInput">CacheLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.cacheOnCookieInput">CacheOnCookieInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.cacheTtlByStatusInput">CacheTtlByStatusInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.disableAppsInput">DisableAppsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.disablePerformanceInput">DisablePerformanceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.disableRailgunInput">DisableRailgunInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.disableSecurityInput">DisableSecurityInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.disableZarazInput">DisableZarazInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.edgeCacheTtlInput">EdgeCacheTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.emailObfuscationInput">EmailObfuscationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.explicitCacheControlInput">ExplicitCacheControlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.forwardingUrlInput">ForwardingUrlInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrl">PageRuleActionsForwardingUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.hostHeaderOverrideInput">HostHeaderOverrideInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.ipGeolocationInput">IpGeolocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.minifyInput">MinifyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.mirageInput">MirageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.opportunisticEncryptionInput">OpportunisticEncryptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.originErrorPagePassThruInput">OriginErrorPagePassThruInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.polishInput">PolishInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.resolveOverrideInput">ResolveOverrideInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.respectStrongEtagInput">RespectStrongEtagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.responseBufferingInput">ResponseBufferingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.rocketLoaderInput">RocketLoaderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.securityLevelInput">SecurityLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.serverSideExcludeInput">ServerSideExcludeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.sortQueryStringForCacheInput">SortQueryStringForCacheInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.sslInput">SslInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.trueClientIpHeaderInput">TrueClientIpHeaderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.wafInput">WafInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.alwaysUseHttps">AlwaysUseHttps</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.automaticHttpsRewrites">AutomaticHttpsRewrites</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.browserCacheTtl">BrowserCacheTtl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.browserCheck">BrowserCheck</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.bypassCacheOnCookie">BypassCacheOnCookie</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.cacheByDeviceType">CacheByDeviceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.cacheDeceptionArmor">CacheDeceptionArmor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.cacheLevel">CacheLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.cacheOnCookie">CacheOnCookie</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.disableApps">DisableApps</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.disablePerformance">DisablePerformance</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.disableRailgun">DisableRailgun</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.disableSecurity">DisableSecurity</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.disableZaraz">DisableZaraz</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.edgeCacheTtl">EdgeCacheTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.emailObfuscation">EmailObfuscation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.explicitCacheControl">ExplicitCacheControl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.hostHeaderOverride">HostHeaderOverride</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.ipGeolocation">IpGeolocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.mirage">Mirage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.opportunisticEncryption">OpportunisticEncryption</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.originErrorPagePassThru">OriginErrorPagePassThru</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.polish">Polish</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.resolveOverride">ResolveOverride</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.respectStrongEtag">RespectStrongEtag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.responseBuffering">ResponseBuffering</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.rocketLoader">RocketLoader</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.securityLevel">SecurityLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.serverSideExclude">ServerSideExclude</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.sortQueryStringForCache">SortQueryStringForCache</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.ssl">Ssl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.trueClientIpHeader">TrueClientIpHeader</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.waf">Waf</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions">PageRuleActions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CacheKeyFields`<sup>Required</sup> <a name="CacheKeyFields" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.cacheKeyFields"></a>

```go
func CacheKeyFields() PageRuleActionsCacheKeyFieldsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFieldsOutputReference">PageRuleActionsCacheKeyFieldsOutputReference</a>

---

##### `CacheTtlByStatus`<sup>Required</sup> <a name="CacheTtlByStatus" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.cacheTtlByStatus"></a>

```go
func CacheTtlByStatus() PageRuleActionsCacheTtlByStatusList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheTtlByStatusList">PageRuleActionsCacheTtlByStatusList</a>

---

##### `ForwardingUrl`<sup>Required</sup> <a name="ForwardingUrl" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.forwardingUrl"></a>

```go
func ForwardingUrl() PageRuleActionsForwardingUrlOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrlOutputReference">PageRuleActionsForwardingUrlOutputReference</a>

---

##### `Minify`<sup>Required</sup> <a name="Minify" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.minify"></a>

```go
func Minify() PageRuleActionsMinifyList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsMinifyList">PageRuleActionsMinifyList</a>

---

##### `AlwaysUseHttpsInput`<sup>Optional</sup> <a name="AlwaysUseHttpsInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.alwaysUseHttpsInput"></a>

```go
func AlwaysUseHttpsInput() interface{}
```

- *Type:* interface{}

---

##### `AutomaticHttpsRewritesInput`<sup>Optional</sup> <a name="AutomaticHttpsRewritesInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.automaticHttpsRewritesInput"></a>

```go
func AutomaticHttpsRewritesInput() *string
```

- *Type:* *string

---

##### `BrowserCacheTtlInput`<sup>Optional</sup> <a name="BrowserCacheTtlInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.browserCacheTtlInput"></a>

```go
func BrowserCacheTtlInput() *string
```

- *Type:* *string

---

##### `BrowserCheckInput`<sup>Optional</sup> <a name="BrowserCheckInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.browserCheckInput"></a>

```go
func BrowserCheckInput() *string
```

- *Type:* *string

---

##### `BypassCacheOnCookieInput`<sup>Optional</sup> <a name="BypassCacheOnCookieInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.bypassCacheOnCookieInput"></a>

```go
func BypassCacheOnCookieInput() *string
```

- *Type:* *string

---

##### `CacheByDeviceTypeInput`<sup>Optional</sup> <a name="CacheByDeviceTypeInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.cacheByDeviceTypeInput"></a>

```go
func CacheByDeviceTypeInput() *string
```

- *Type:* *string

---

##### `CacheDeceptionArmorInput`<sup>Optional</sup> <a name="CacheDeceptionArmorInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.cacheDeceptionArmorInput"></a>

```go
func CacheDeceptionArmorInput() *string
```

- *Type:* *string

---

##### `CacheKeyFieldsInput`<sup>Optional</sup> <a name="CacheKeyFieldsInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.cacheKeyFieldsInput"></a>

```go
func CacheKeyFieldsInput() PageRuleActionsCacheKeyFields
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsCacheKeyFields">PageRuleActionsCacheKeyFields</a>

---

##### `CacheLevelInput`<sup>Optional</sup> <a name="CacheLevelInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.cacheLevelInput"></a>

```go
func CacheLevelInput() *string
```

- *Type:* *string

---

##### `CacheOnCookieInput`<sup>Optional</sup> <a name="CacheOnCookieInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.cacheOnCookieInput"></a>

```go
func CacheOnCookieInput() *string
```

- *Type:* *string

---

##### `CacheTtlByStatusInput`<sup>Optional</sup> <a name="CacheTtlByStatusInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.cacheTtlByStatusInput"></a>

```go
func CacheTtlByStatusInput() interface{}
```

- *Type:* interface{}

---

##### `DisableAppsInput`<sup>Optional</sup> <a name="DisableAppsInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.disableAppsInput"></a>

```go
func DisableAppsInput() interface{}
```

- *Type:* interface{}

---

##### `DisablePerformanceInput`<sup>Optional</sup> <a name="DisablePerformanceInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.disablePerformanceInput"></a>

```go
func DisablePerformanceInput() interface{}
```

- *Type:* interface{}

---

##### `DisableRailgunInput`<sup>Optional</sup> <a name="DisableRailgunInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.disableRailgunInput"></a>

```go
func DisableRailgunInput() interface{}
```

- *Type:* interface{}

---

##### `DisableSecurityInput`<sup>Optional</sup> <a name="DisableSecurityInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.disableSecurityInput"></a>

```go
func DisableSecurityInput() interface{}
```

- *Type:* interface{}

---

##### `DisableZarazInput`<sup>Optional</sup> <a name="DisableZarazInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.disableZarazInput"></a>

```go
func DisableZarazInput() interface{}
```

- *Type:* interface{}

---

##### `EdgeCacheTtlInput`<sup>Optional</sup> <a name="EdgeCacheTtlInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.edgeCacheTtlInput"></a>

```go
func EdgeCacheTtlInput() *f64
```

- *Type:* *f64

---

##### `EmailObfuscationInput`<sup>Optional</sup> <a name="EmailObfuscationInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.emailObfuscationInput"></a>

```go
func EmailObfuscationInput() *string
```

- *Type:* *string

---

##### `ExplicitCacheControlInput`<sup>Optional</sup> <a name="ExplicitCacheControlInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.explicitCacheControlInput"></a>

```go
func ExplicitCacheControlInput() *string
```

- *Type:* *string

---

##### `ForwardingUrlInput`<sup>Optional</sup> <a name="ForwardingUrlInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.forwardingUrlInput"></a>

```go
func ForwardingUrlInput() PageRuleActionsForwardingUrl
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActionsForwardingUrl">PageRuleActionsForwardingUrl</a>

---

##### `HostHeaderOverrideInput`<sup>Optional</sup> <a name="HostHeaderOverrideInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.hostHeaderOverrideInput"></a>

```go
func HostHeaderOverrideInput() *string
```

- *Type:* *string

---

##### `IpGeolocationInput`<sup>Optional</sup> <a name="IpGeolocationInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.ipGeolocationInput"></a>

```go
func IpGeolocationInput() *string
```

- *Type:* *string

---

##### `MinifyInput`<sup>Optional</sup> <a name="MinifyInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.minifyInput"></a>

```go
func MinifyInput() interface{}
```

- *Type:* interface{}

---

##### `MirageInput`<sup>Optional</sup> <a name="MirageInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.mirageInput"></a>

```go
func MirageInput() *string
```

- *Type:* *string

---

##### `OpportunisticEncryptionInput`<sup>Optional</sup> <a name="OpportunisticEncryptionInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.opportunisticEncryptionInput"></a>

```go
func OpportunisticEncryptionInput() *string
```

- *Type:* *string

---

##### `OriginErrorPagePassThruInput`<sup>Optional</sup> <a name="OriginErrorPagePassThruInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.originErrorPagePassThruInput"></a>

```go
func OriginErrorPagePassThruInput() *string
```

- *Type:* *string

---

##### `PolishInput`<sup>Optional</sup> <a name="PolishInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.polishInput"></a>

```go
func PolishInput() *string
```

- *Type:* *string

---

##### `ResolveOverrideInput`<sup>Optional</sup> <a name="ResolveOverrideInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.resolveOverrideInput"></a>

```go
func ResolveOverrideInput() *string
```

- *Type:* *string

---

##### `RespectStrongEtagInput`<sup>Optional</sup> <a name="RespectStrongEtagInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.respectStrongEtagInput"></a>

```go
func RespectStrongEtagInput() *string
```

- *Type:* *string

---

##### `ResponseBufferingInput`<sup>Optional</sup> <a name="ResponseBufferingInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.responseBufferingInput"></a>

```go
func ResponseBufferingInput() *string
```

- *Type:* *string

---

##### `RocketLoaderInput`<sup>Optional</sup> <a name="RocketLoaderInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.rocketLoaderInput"></a>

```go
func RocketLoaderInput() *string
```

- *Type:* *string

---

##### `SecurityLevelInput`<sup>Optional</sup> <a name="SecurityLevelInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.securityLevelInput"></a>

```go
func SecurityLevelInput() *string
```

- *Type:* *string

---

##### `ServerSideExcludeInput`<sup>Optional</sup> <a name="ServerSideExcludeInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.serverSideExcludeInput"></a>

```go
func ServerSideExcludeInput() *string
```

- *Type:* *string

---

##### `SortQueryStringForCacheInput`<sup>Optional</sup> <a name="SortQueryStringForCacheInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.sortQueryStringForCacheInput"></a>

```go
func SortQueryStringForCacheInput() *string
```

- *Type:* *string

---

##### `SslInput`<sup>Optional</sup> <a name="SslInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.sslInput"></a>

```go
func SslInput() *string
```

- *Type:* *string

---

##### `TrueClientIpHeaderInput`<sup>Optional</sup> <a name="TrueClientIpHeaderInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.trueClientIpHeaderInput"></a>

```go
func TrueClientIpHeaderInput() *string
```

- *Type:* *string

---

##### `WafInput`<sup>Optional</sup> <a name="WafInput" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.wafInput"></a>

```go
func WafInput() *string
```

- *Type:* *string

---

##### `AlwaysUseHttps`<sup>Required</sup> <a name="AlwaysUseHttps" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.alwaysUseHttps"></a>

```go
func AlwaysUseHttps() interface{}
```

- *Type:* interface{}

---

##### `AutomaticHttpsRewrites`<sup>Required</sup> <a name="AutomaticHttpsRewrites" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.automaticHttpsRewrites"></a>

```go
func AutomaticHttpsRewrites() *string
```

- *Type:* *string

---

##### `BrowserCacheTtl`<sup>Required</sup> <a name="BrowserCacheTtl" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.browserCacheTtl"></a>

```go
func BrowserCacheTtl() *string
```

- *Type:* *string

---

##### `BrowserCheck`<sup>Required</sup> <a name="BrowserCheck" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.browserCheck"></a>

```go
func BrowserCheck() *string
```

- *Type:* *string

---

##### `BypassCacheOnCookie`<sup>Required</sup> <a name="BypassCacheOnCookie" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.bypassCacheOnCookie"></a>

```go
func BypassCacheOnCookie() *string
```

- *Type:* *string

---

##### `CacheByDeviceType`<sup>Required</sup> <a name="CacheByDeviceType" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.cacheByDeviceType"></a>

```go
func CacheByDeviceType() *string
```

- *Type:* *string

---

##### `CacheDeceptionArmor`<sup>Required</sup> <a name="CacheDeceptionArmor" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.cacheDeceptionArmor"></a>

```go
func CacheDeceptionArmor() *string
```

- *Type:* *string

---

##### `CacheLevel`<sup>Required</sup> <a name="CacheLevel" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.cacheLevel"></a>

```go
func CacheLevel() *string
```

- *Type:* *string

---

##### `CacheOnCookie`<sup>Required</sup> <a name="CacheOnCookie" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.cacheOnCookie"></a>

```go
func CacheOnCookie() *string
```

- *Type:* *string

---

##### `DisableApps`<sup>Required</sup> <a name="DisableApps" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.disableApps"></a>

```go
func DisableApps() interface{}
```

- *Type:* interface{}

---

##### `DisablePerformance`<sup>Required</sup> <a name="DisablePerformance" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.disablePerformance"></a>

```go
func DisablePerformance() interface{}
```

- *Type:* interface{}

---

##### `DisableRailgun`<sup>Required</sup> <a name="DisableRailgun" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.disableRailgun"></a>

```go
func DisableRailgun() interface{}
```

- *Type:* interface{}

---

##### `DisableSecurity`<sup>Required</sup> <a name="DisableSecurity" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.disableSecurity"></a>

```go
func DisableSecurity() interface{}
```

- *Type:* interface{}

---

##### `DisableZaraz`<sup>Required</sup> <a name="DisableZaraz" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.disableZaraz"></a>

```go
func DisableZaraz() interface{}
```

- *Type:* interface{}

---

##### `EdgeCacheTtl`<sup>Required</sup> <a name="EdgeCacheTtl" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.edgeCacheTtl"></a>

```go
func EdgeCacheTtl() *f64
```

- *Type:* *f64

---

##### `EmailObfuscation`<sup>Required</sup> <a name="EmailObfuscation" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.emailObfuscation"></a>

```go
func EmailObfuscation() *string
```

- *Type:* *string

---

##### `ExplicitCacheControl`<sup>Required</sup> <a name="ExplicitCacheControl" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.explicitCacheControl"></a>

```go
func ExplicitCacheControl() *string
```

- *Type:* *string

---

##### `HostHeaderOverride`<sup>Required</sup> <a name="HostHeaderOverride" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.hostHeaderOverride"></a>

```go
func HostHeaderOverride() *string
```

- *Type:* *string

---

##### `IpGeolocation`<sup>Required</sup> <a name="IpGeolocation" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.ipGeolocation"></a>

```go
func IpGeolocation() *string
```

- *Type:* *string

---

##### `Mirage`<sup>Required</sup> <a name="Mirage" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.mirage"></a>

```go
func Mirage() *string
```

- *Type:* *string

---

##### `OpportunisticEncryption`<sup>Required</sup> <a name="OpportunisticEncryption" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.opportunisticEncryption"></a>

```go
func OpportunisticEncryption() *string
```

- *Type:* *string

---

##### `OriginErrorPagePassThru`<sup>Required</sup> <a name="OriginErrorPagePassThru" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.originErrorPagePassThru"></a>

```go
func OriginErrorPagePassThru() *string
```

- *Type:* *string

---

##### `Polish`<sup>Required</sup> <a name="Polish" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.polish"></a>

```go
func Polish() *string
```

- *Type:* *string

---

##### `ResolveOverride`<sup>Required</sup> <a name="ResolveOverride" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.resolveOverride"></a>

```go
func ResolveOverride() *string
```

- *Type:* *string

---

##### `RespectStrongEtag`<sup>Required</sup> <a name="RespectStrongEtag" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.respectStrongEtag"></a>

```go
func RespectStrongEtag() *string
```

- *Type:* *string

---

##### `ResponseBuffering`<sup>Required</sup> <a name="ResponseBuffering" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.responseBuffering"></a>

```go
func ResponseBuffering() *string
```

- *Type:* *string

---

##### `RocketLoader`<sup>Required</sup> <a name="RocketLoader" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.rocketLoader"></a>

```go
func RocketLoader() *string
```

- *Type:* *string

---

##### `SecurityLevel`<sup>Required</sup> <a name="SecurityLevel" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.securityLevel"></a>

```go
func SecurityLevel() *string
```

- *Type:* *string

---

##### `ServerSideExclude`<sup>Required</sup> <a name="ServerSideExclude" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.serverSideExclude"></a>

```go
func ServerSideExclude() *string
```

- *Type:* *string

---

##### `SortQueryStringForCache`<sup>Required</sup> <a name="SortQueryStringForCache" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.sortQueryStringForCache"></a>

```go
func SortQueryStringForCache() *string
```

- *Type:* *string

---

##### `Ssl`<sup>Required</sup> <a name="Ssl" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.ssl"></a>

```go
func Ssl() *string
```

- *Type:* *string

---

##### `TrueClientIpHeader`<sup>Required</sup> <a name="TrueClientIpHeader" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.trueClientIpHeader"></a>

```go
func TrueClientIpHeader() *string
```

- *Type:* *string

---

##### `Waf`<sup>Required</sup> <a name="Waf" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.waf"></a>

```go
func Waf() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.pageRule.PageRuleActionsOutputReference.property.internalValue"></a>

```go
func InternalValue() PageRuleActions
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pageRule.PageRuleActions">PageRuleActions</a>

---



