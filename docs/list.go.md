# `list` Submodule <a name="`list` Submodule" id="@cdktf/provider-cloudflare.list"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### List <a name="List" id="@cdktf/provider-cloudflare.list.List"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/list cloudflare_list}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.list.List.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/list"

list.NewList(scope Construct, id *string, config ListConfig) List
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.list.List.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.list.List.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.list.List.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.list.ListConfig">ListConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.list.List.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.list.List.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.list.List.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.list.ListConfig">ListConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.list.List.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.list.List.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.list.List.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.list.List.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.list.List.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.list.List.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.list.List.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.list.List.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.list.List.putItems">PutItems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.resetItems">ResetItems</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.list.List.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.list.List.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.list.List.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.list.List.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.list.List.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.list.List.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.list.List.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.list.List.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.list.List.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.list.List.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.list.List.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.list.List.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.list.List.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.list.List.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.list.List.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.list.List.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.list.List.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.list.List.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.list.List.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.list.List.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.list.List.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.list.List.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.list.List.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.list.List.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.list.List.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.list.List.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.list.List.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.list.List.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.list.List.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.list.List.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.list.List.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.list.List.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.list.List.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.list.List.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.list.List.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.list.List.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.list.List.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.list.List.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.list.List.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.list.List.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.list.List.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.list.List.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.list.List.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutItems` <a name="PutItems" id="@cdktf/provider-cloudflare.list.List.putItems"></a>

```go
func PutItems(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.list.List.putItems.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-cloudflare.list.List.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetItems` <a name="ResetItems" id="@cdktf/provider-cloudflare.list.List.resetItems"></a>

```go
func ResetItems()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.list.List.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.list.List.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a List resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.list.List.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/list"

list.List_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.list.List.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.list.List.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/list"

list.List_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.list.List.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.list.List.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/list"

list.List_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.list.List.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.list.List.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/list"

list.List_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a List resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.list.List.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.list.List.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the List to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.list.List.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing List that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/list#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.list.List.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the List to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.list.List.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.list.List.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.property.items">Items</a></code> | <code><a href="#@cdktf/provider-cloudflare.list.ListItemsList">ListItemsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.property.modifiedOn">ModifiedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.property.numItems">NumItems</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.property.numReferencingFilters">NumReferencingFilters</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.property.itemsInput">ItemsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.property.kindInput">KindInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.property.kind">Kind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.List.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.list.List.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.list.List.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.list.List.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.list.List.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.list.List.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.list.List.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.list.List.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.list.List.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.list.List.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.list.List.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.list.List.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.list.List.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.list.List.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.list.List.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-cloudflare.list.List.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.list.List.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="@cdktf/provider-cloudflare.list.List.property.items"></a>

```go
func Items() ListItemsList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.list.ListItemsList">ListItemsList</a>

---

##### `ModifiedOn`<sup>Required</sup> <a name="ModifiedOn" id="@cdktf/provider-cloudflare.list.List.property.modifiedOn"></a>

```go
func ModifiedOn() *string
```

- *Type:* *string

---

##### `NumItems`<sup>Required</sup> <a name="NumItems" id="@cdktf/provider-cloudflare.list.List.property.numItems"></a>

```go
func NumItems() *f64
```

- *Type:* *f64

---

##### `NumReferencingFilters`<sup>Required</sup> <a name="NumReferencingFilters" id="@cdktf/provider-cloudflare.list.List.property.numReferencingFilters"></a>

```go
func NumReferencingFilters() *f64
```

- *Type:* *f64

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.list.List.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-cloudflare.list.List.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ItemsInput`<sup>Optional</sup> <a name="ItemsInput" id="@cdktf/provider-cloudflare.list.List.property.itemsInput"></a>

```go
func ItemsInput() interface{}
```

- *Type:* interface{}

---

##### `KindInput`<sup>Optional</sup> <a name="KindInput" id="@cdktf/provider-cloudflare.list.List.property.kindInput"></a>

```go
func KindInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.list.List.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.list.List.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.list.List.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-cloudflare.list.List.property.kind"></a>

```go
func Kind() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.list.List.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.list.List.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.list.List.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ListConfig <a name="ListConfig" id="@cdktf/provider-cloudflare.list.ListConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.list.ListConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/list"

&list.ListConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	Kind: *string,
	Name: *string,
	Description: *string,
	Items: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.list.ListConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListConfig.property.accountId">AccountId</a></code> | <code>*string</code> | The Account ID for this resource. |
| <code><a href="#@cdktf/provider-cloudflare.list.ListConfig.property.kind">Kind</a></code> | <code>*string</code> | The type of the list. |
| <code><a href="#@cdktf/provider-cloudflare.list.ListConfig.property.name">Name</a></code> | <code>*string</code> | An informative name for the list. Use this name in filter and rule expressions. |
| <code><a href="#@cdktf/provider-cloudflare.list.ListConfig.property.description">Description</a></code> | <code>*string</code> | An informative summary of the list. |
| <code><a href="#@cdktf/provider-cloudflare.list.ListConfig.property.items">Items</a></code> | <code>interface{}</code> | The items in the list. If set, this overwrites all items in the list. Do not use with `cloudflare_list_item`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.list.ListConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.list.ListConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.list.ListConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.list.ListConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.list.ListConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.list.ListConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.list.ListConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.list.ListConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

The Account ID for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/list#account_id List#account_id}

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-cloudflare.list.ListConfig.property.kind"></a>

```go
Kind *string
```

- *Type:* *string

The type of the list.

Each type supports specific list items (IP addresses, ASNs, hostnames or redirects).
Available values: "ip", "redirect", "hostname", "asn".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/list#kind List#kind}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.list.ListConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

An informative name for the list. Use this name in filter and rule expressions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/list#name List#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-cloudflare.list.ListConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An informative summary of the list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/list#description List#description}

---

##### `Items`<sup>Optional</sup> <a name="Items" id="@cdktf/provider-cloudflare.list.ListConfig.property.items"></a>

```go
Items interface{}
```

- *Type:* interface{}

The items in the list. If set, this overwrites all items in the list. Do not use with `cloudflare_list_item`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/list#items List#items}

---

### ListItems <a name="ListItems" id="@cdktf/provider-cloudflare.list.ListItems"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.list.ListItems.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/list"

&list.ListItems {
	Asn: *f64,
	Comment: *string,
	Hostname: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13.list.ListItemsHostname,
	Ip: *string,
	Redirect: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13.list.ListItemsRedirect,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItems.property.asn">Asn</a></code> | <code>*f64</code> | A non-negative 32 bit integer. |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItems.property.comment">Comment</a></code> | <code>*string</code> | An informative summary of the list item. |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItems.property.hostname">Hostname</a></code> | <code><a href="#@cdktf/provider-cloudflare.list.ListItemsHostname">ListItemsHostname</a></code> | Valid characters for hostnames are ASCII(7) letters from a to z, the digits from 0 to 9, wildcards (*), and the hyphen (-). |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItems.property.ip">Ip</a></code> | <code>*string</code> | An IPv4 address, an IPv4 CIDR, an IPv6 address, or an IPv6 CIDR. |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItems.property.redirect">Redirect</a></code> | <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirect">ListItemsRedirect</a></code> | The definition of the redirect. |

---

##### `Asn`<sup>Optional</sup> <a name="Asn" id="@cdktf/provider-cloudflare.list.ListItems.property.asn"></a>

```go
Asn *f64
```

- *Type:* *f64

A non-negative 32 bit integer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/list#asn List#asn}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-cloudflare.list.ListItems.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

An informative summary of the list item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/list#comment List#comment}

---

##### `Hostname`<sup>Optional</sup> <a name="Hostname" id="@cdktf/provider-cloudflare.list.ListItems.property.hostname"></a>

```go
Hostname ListItemsHostname
```

- *Type:* <a href="#@cdktf/provider-cloudflare.list.ListItemsHostname">ListItemsHostname</a>

Valid characters for hostnames are ASCII(7) letters from a to z, the digits from 0 to 9, wildcards (*), and the hyphen (-).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/list#hostname List#hostname}

---

##### `Ip`<sup>Optional</sup> <a name="Ip" id="@cdktf/provider-cloudflare.list.ListItems.property.ip"></a>

```go
Ip *string
```

- *Type:* *string

An IPv4 address, an IPv4 CIDR, an IPv6 address, or an IPv6 CIDR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/list#ip List#ip}

---

##### `Redirect`<sup>Optional</sup> <a name="Redirect" id="@cdktf/provider-cloudflare.list.ListItems.property.redirect"></a>

```go
Redirect ListItemsRedirect
```

- *Type:* <a href="#@cdktf/provider-cloudflare.list.ListItemsRedirect">ListItemsRedirect</a>

The definition of the redirect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/list#redirect List#redirect}

---

### ListItemsHostname <a name="ListItemsHostname" id="@cdktf/provider-cloudflare.list.ListItemsHostname"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.list.ListItemsHostname.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/list"

&list.ListItemsHostname {
	UrlHostname: *string,
	ExcludeExactHostname: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsHostname.property.urlHostname">UrlHostname</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/list#url_hostname List#url_hostname}. |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsHostname.property.excludeExactHostname">ExcludeExactHostname</a></code> | <code>interface{}</code> | Only applies to wildcard hostnames (e.g., *.example.com). When true (default), only subdomains are blocked. When false, both the root domain and subdomains are blocked. |

---

##### `UrlHostname`<sup>Required</sup> <a name="UrlHostname" id="@cdktf/provider-cloudflare.list.ListItemsHostname.property.urlHostname"></a>

```go
UrlHostname *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/list#url_hostname List#url_hostname}.

---

##### `ExcludeExactHostname`<sup>Optional</sup> <a name="ExcludeExactHostname" id="@cdktf/provider-cloudflare.list.ListItemsHostname.property.excludeExactHostname"></a>

```go
ExcludeExactHostname interface{}
```

- *Type:* interface{}

Only applies to wildcard hostnames (e.g., *.example.com). When true (default), only subdomains are blocked. When false, both the root domain and subdomains are blocked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/list#exclude_exact_hostname List#exclude_exact_hostname}

---

### ListItemsRedirect <a name="ListItemsRedirect" id="@cdktf/provider-cloudflare.list.ListItemsRedirect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.list.ListItemsRedirect.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/list"

&list.ListItemsRedirect {
	SourceUrl: *string,
	TargetUrl: *string,
	IncludeSubdomains: interface{},
	PreservePathSuffix: interface{},
	PreserveQueryString: interface{},
	StatusCode: *f64,
	SubpathMatching: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirect.property.sourceUrl">SourceUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/list#source_url List#source_url}. |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirect.property.targetUrl">TargetUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/list#target_url List#target_url}. |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirect.property.includeSubdomains">IncludeSubdomains</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/list#include_subdomains List#include_subdomains}. |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirect.property.preservePathSuffix">PreservePathSuffix</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/list#preserve_path_suffix List#preserve_path_suffix}. |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirect.property.preserveQueryString">PreserveQueryString</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/list#preserve_query_string List#preserve_query_string}. |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirect.property.statusCode">StatusCode</a></code> | <code>*f64</code> | Available values: 301, 302, 307, 308. |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirect.property.subpathMatching">SubpathMatching</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/list#subpath_matching List#subpath_matching}. |

---

##### `SourceUrl`<sup>Required</sup> <a name="SourceUrl" id="@cdktf/provider-cloudflare.list.ListItemsRedirect.property.sourceUrl"></a>

```go
SourceUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/list#source_url List#source_url}.

---

##### `TargetUrl`<sup>Required</sup> <a name="TargetUrl" id="@cdktf/provider-cloudflare.list.ListItemsRedirect.property.targetUrl"></a>

```go
TargetUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/list#target_url List#target_url}.

---

##### `IncludeSubdomains`<sup>Optional</sup> <a name="IncludeSubdomains" id="@cdktf/provider-cloudflare.list.ListItemsRedirect.property.includeSubdomains"></a>

```go
IncludeSubdomains interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/list#include_subdomains List#include_subdomains}.

---

##### `PreservePathSuffix`<sup>Optional</sup> <a name="PreservePathSuffix" id="@cdktf/provider-cloudflare.list.ListItemsRedirect.property.preservePathSuffix"></a>

```go
PreservePathSuffix interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/list#preserve_path_suffix List#preserve_path_suffix}.

---

##### `PreserveQueryString`<sup>Optional</sup> <a name="PreserveQueryString" id="@cdktf/provider-cloudflare.list.ListItemsRedirect.property.preserveQueryString"></a>

```go
PreserveQueryString interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/list#preserve_query_string List#preserve_query_string}.

---

##### `StatusCode`<sup>Optional</sup> <a name="StatusCode" id="@cdktf/provider-cloudflare.list.ListItemsRedirect.property.statusCode"></a>

```go
StatusCode *f64
```

- *Type:* *f64

Available values: 301, 302, 307, 308.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/list#status_code List#status_code}

---

##### `SubpathMatching`<sup>Optional</sup> <a name="SubpathMatching" id="@cdktf/provider-cloudflare.list.ListItemsRedirect.property.subpathMatching"></a>

```go
SubpathMatching interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/list#subpath_matching List#subpath_matching}.

---

## Classes <a name="Classes" id="Classes"></a>

### ListItemsHostnameOutputReference <a name="ListItemsHostnameOutputReference" id="@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/list"

list.NewListItemsHostnameOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ListItemsHostnameOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.resetExcludeExactHostname">ResetExcludeExactHostname</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExcludeExactHostname` <a name="ResetExcludeExactHostname" id="@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.resetExcludeExactHostname"></a>

```go
func ResetExcludeExactHostname()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.property.excludeExactHostnameInput">ExcludeExactHostnameInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.property.urlHostnameInput">UrlHostnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.property.excludeExactHostname">ExcludeExactHostname</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.property.urlHostname">UrlHostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExcludeExactHostnameInput`<sup>Optional</sup> <a name="ExcludeExactHostnameInput" id="@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.property.excludeExactHostnameInput"></a>

```go
func ExcludeExactHostnameInput() interface{}
```

- *Type:* interface{}

---

##### `UrlHostnameInput`<sup>Optional</sup> <a name="UrlHostnameInput" id="@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.property.urlHostnameInput"></a>

```go
func UrlHostnameInput() *string
```

- *Type:* *string

---

##### `ExcludeExactHostname`<sup>Required</sup> <a name="ExcludeExactHostname" id="@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.property.excludeExactHostname"></a>

```go
func ExcludeExactHostname() interface{}
```

- *Type:* interface{}

---

##### `UrlHostname`<sup>Required</sup> <a name="UrlHostname" id="@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.property.urlHostname"></a>

```go
func UrlHostname() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ListItemsList <a name="ListItemsList" id="@cdktf/provider-cloudflare.list.ListItemsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.list.ListItemsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/list"

list.NewListItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ListItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.list.ListItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.list.ListItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.list.ListItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.list.ListItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.list.ListItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.list.ListItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.list.ListItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.list.ListItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.list.ListItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.list.ListItemsList.get"></a>

```go
func Get(index *f64) ListItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.list.ListItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.list.ListItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.list.ListItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.list.ListItemsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ListItemsOutputReference <a name="ListItemsOutputReference" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/list"

list.NewListItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ListItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsOutputReference.putHostname">PutHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsOutputReference.putRedirect">PutRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsOutputReference.resetAsn">ResetAsn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsOutputReference.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsOutputReference.resetHostname">ResetHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsOutputReference.resetIp">ResetIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsOutputReference.resetRedirect">ResetRedirect</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHostname` <a name="PutHostname" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.putHostname"></a>

```go
func PutHostname(value ListItemsHostname)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.putHostname.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.list.ListItemsHostname">ListItemsHostname</a>

---

##### `PutRedirect` <a name="PutRedirect" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.putRedirect"></a>

```go
func PutRedirect(value ListItemsRedirect)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.putRedirect.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.list.ListItemsRedirect">ListItemsRedirect</a>

---

##### `ResetAsn` <a name="ResetAsn" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.resetAsn"></a>

```go
func ResetAsn()
```

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.resetComment"></a>

```go
func ResetComment()
```

##### `ResetHostname` <a name="ResetHostname" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.resetHostname"></a>

```go
func ResetHostname()
```

##### `ResetIp` <a name="ResetIp" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.resetIp"></a>

```go
func ResetIp()
```

##### `ResetRedirect` <a name="ResetRedirect" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.resetRedirect"></a>

```go
func ResetRedirect()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsOutputReference.property.hostname">Hostname</a></code> | <code><a href="#@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference">ListItemsHostnameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsOutputReference.property.redirect">Redirect</a></code> | <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference">ListItemsRedirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsOutputReference.property.asnInput">AsnInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsOutputReference.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsOutputReference.property.hostnameInput">HostnameInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsOutputReference.property.ipInput">IpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsOutputReference.property.redirectInput">RedirectInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsOutputReference.property.asn">Asn</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsOutputReference.property.ip">Ip</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.property.hostname"></a>

```go
func Hostname() ListItemsHostnameOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.list.ListItemsHostnameOutputReference">ListItemsHostnameOutputReference</a>

---

##### `Redirect`<sup>Required</sup> <a name="Redirect" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.property.redirect"></a>

```go
func Redirect() ListItemsRedirectOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference">ListItemsRedirectOutputReference</a>

---

##### `AsnInput`<sup>Optional</sup> <a name="AsnInput" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.property.asnInput"></a>

```go
func AsnInput() *f64
```

- *Type:* *f64

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.property.hostnameInput"></a>

```go
func HostnameInput() interface{}
```

- *Type:* interface{}

---

##### `IpInput`<sup>Optional</sup> <a name="IpInput" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.property.ipInput"></a>

```go
func IpInput() *string
```

- *Type:* *string

---

##### `RedirectInput`<sup>Optional</sup> <a name="RedirectInput" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.property.redirectInput"></a>

```go
func RedirectInput() interface{}
```

- *Type:* interface{}

---

##### `Asn`<sup>Required</sup> <a name="Asn" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.property.asn"></a>

```go
func Asn() *f64
```

- *Type:* *f64

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.property.ip"></a>

```go
func Ip() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.list.ListItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ListItemsRedirectOutputReference <a name="ListItemsRedirectOutputReference" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/list"

list.NewListItemsRedirectOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ListItemsRedirectOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.resetIncludeSubdomains">ResetIncludeSubdomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.resetPreservePathSuffix">ResetPreservePathSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.resetPreserveQueryString">ResetPreserveQueryString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.resetStatusCode">ResetStatusCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.resetSubpathMatching">ResetSubpathMatching</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIncludeSubdomains` <a name="ResetIncludeSubdomains" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.resetIncludeSubdomains"></a>

```go
func ResetIncludeSubdomains()
```

##### `ResetPreservePathSuffix` <a name="ResetPreservePathSuffix" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.resetPreservePathSuffix"></a>

```go
func ResetPreservePathSuffix()
```

##### `ResetPreserveQueryString` <a name="ResetPreserveQueryString" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.resetPreserveQueryString"></a>

```go
func ResetPreserveQueryString()
```

##### `ResetStatusCode` <a name="ResetStatusCode" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.resetStatusCode"></a>

```go
func ResetStatusCode()
```

##### `ResetSubpathMatching` <a name="ResetSubpathMatching" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.resetSubpathMatching"></a>

```go
func ResetSubpathMatching()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.property.includeSubdomainsInput">IncludeSubdomainsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.property.preservePathSuffixInput">PreservePathSuffixInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.property.preserveQueryStringInput">PreserveQueryStringInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.property.sourceUrlInput">SourceUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.property.statusCodeInput">StatusCodeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.property.subpathMatchingInput">SubpathMatchingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.property.targetUrlInput">TargetUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.property.includeSubdomains">IncludeSubdomains</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.property.preservePathSuffix">PreservePathSuffix</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.property.preserveQueryString">PreserveQueryString</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.property.sourceUrl">SourceUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.property.statusCode">StatusCode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.property.subpathMatching">SubpathMatching</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.property.targetUrl">TargetUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IncludeSubdomainsInput`<sup>Optional</sup> <a name="IncludeSubdomainsInput" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.property.includeSubdomainsInput"></a>

```go
func IncludeSubdomainsInput() interface{}
```

- *Type:* interface{}

---

##### `PreservePathSuffixInput`<sup>Optional</sup> <a name="PreservePathSuffixInput" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.property.preservePathSuffixInput"></a>

```go
func PreservePathSuffixInput() interface{}
```

- *Type:* interface{}

---

##### `PreserveQueryStringInput`<sup>Optional</sup> <a name="PreserveQueryStringInput" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.property.preserveQueryStringInput"></a>

```go
func PreserveQueryStringInput() interface{}
```

- *Type:* interface{}

---

##### `SourceUrlInput`<sup>Optional</sup> <a name="SourceUrlInput" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.property.sourceUrlInput"></a>

```go
func SourceUrlInput() *string
```

- *Type:* *string

---

##### `StatusCodeInput`<sup>Optional</sup> <a name="StatusCodeInput" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.property.statusCodeInput"></a>

```go
func StatusCodeInput() *f64
```

- *Type:* *f64

---

##### `SubpathMatchingInput`<sup>Optional</sup> <a name="SubpathMatchingInput" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.property.subpathMatchingInput"></a>

```go
func SubpathMatchingInput() interface{}
```

- *Type:* interface{}

---

##### `TargetUrlInput`<sup>Optional</sup> <a name="TargetUrlInput" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.property.targetUrlInput"></a>

```go
func TargetUrlInput() *string
```

- *Type:* *string

---

##### `IncludeSubdomains`<sup>Required</sup> <a name="IncludeSubdomains" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.property.includeSubdomains"></a>

```go
func IncludeSubdomains() interface{}
```

- *Type:* interface{}

---

##### `PreservePathSuffix`<sup>Required</sup> <a name="PreservePathSuffix" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.property.preservePathSuffix"></a>

```go
func PreservePathSuffix() interface{}
```

- *Type:* interface{}

---

##### `PreserveQueryString`<sup>Required</sup> <a name="PreserveQueryString" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.property.preserveQueryString"></a>

```go
func PreserveQueryString() interface{}
```

- *Type:* interface{}

---

##### `SourceUrl`<sup>Required</sup> <a name="SourceUrl" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.property.sourceUrl"></a>

```go
func SourceUrl() *string
```

- *Type:* *string

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.property.statusCode"></a>

```go
func StatusCode() *f64
```

- *Type:* *f64

---

##### `SubpathMatching`<sup>Required</sup> <a name="SubpathMatching" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.property.subpathMatching"></a>

```go
func SubpathMatching() interface{}
```

- *Type:* interface{}

---

##### `TargetUrl`<sup>Required</sup> <a name="TargetUrl" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.property.targetUrl"></a>

```go
func TargetUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.list.ListItemsRedirectOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



