# `apiShieldOperation` Submodule <a name="`apiShieldOperation` Submodule" id="@cdktf/provider-cloudflare.apiShieldOperation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiShieldOperation <a name="ApiShieldOperation" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/api_shield_operation cloudflare_api_shield_operation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/apishieldoperation"

apishieldoperation.NewApiShieldOperation(scope Construct, id *string, config ApiShieldOperationConfig) ApiShieldOperation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationConfig">ApiShieldOperationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationConfig">ApiShieldOperationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ApiShieldOperation resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/apishieldoperation"

apishieldoperation.ApiShieldOperation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/apishieldoperation"

apishieldoperation.ApiShieldOperation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/apishieldoperation"

apishieldoperation.ApiShieldOperation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/apishieldoperation"

apishieldoperation.ApiShieldOperation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ApiShieldOperation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ApiShieldOperation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ApiShieldOperation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/api_shield_operation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ApiShieldOperation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.property.features">Features</a></code> | <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesOutputReference">ApiShieldOperationFeaturesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.property.lastUpdated">LastUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.property.operationId">OperationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.property.endpointInput">EndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.property.hostInput">HostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.property.methodInput">MethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.property.zoneIdInput">ZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.property.method">Method</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Features`<sup>Required</sup> <a name="Features" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.property.features"></a>

```go
func Features() ApiShieldOperationFeaturesOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesOutputReference">ApiShieldOperationFeaturesOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastUpdated`<sup>Required</sup> <a name="LastUpdated" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.property.lastUpdated"></a>

```go
func LastUpdated() *string
```

- *Type:* *string

---

##### `OperationId`<sup>Required</sup> <a name="OperationId" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.property.operationId"></a>

```go
func OperationId() *string
```

- *Type:* *string

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.property.endpointInput"></a>

```go
func EndpointInput() *string
```

- *Type:* *string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.property.hostInput"></a>

```go
func HostInput() *string
```

- *Type:* *string

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.property.methodInput"></a>

```go
func MethodInput() *string
```

- *Type:* *string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.property.zoneIdInput"></a>

```go
func ZoneIdInput() *string
```

- *Type:* *string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.property.method"></a>

```go
func Method() *string
```

- *Type:* *string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiShieldOperationConfig <a name="ApiShieldOperationConfig" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/apishieldoperation"

&apishieldoperation.ApiShieldOperationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Endpoint: *string,
	Host: *string,
	Method: *string,
	ZoneId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationConfig.property.endpoint">Endpoint</a></code> | <code>*string</code> | The endpoint which can contain path parameter templates in curly braces, each will be replaced from left to right with {varN}, starting with {var1}, during insertion. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationConfig.property.host">Host</a></code> | <code>*string</code> | RFC3986-compliant host. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationConfig.property.method">Method</a></code> | <code>*string</code> | The HTTP method used to access the endpoint. Available values: "GET", "POST", "HEAD", "OPTIONS", "PUT", "DELETE", "CONNECT", "PATCH", "TRACE". |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationConfig.property.zoneId">ZoneId</a></code> | <code>*string</code> | Identifier. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationConfig.property.endpoint"></a>

```go
Endpoint *string
```

- *Type:* *string

The endpoint which can contain path parameter templates in curly braces, each will be replaced from left to right with {varN}, starting with {var1}, during insertion.

This will further be Cloudflare-normalized upon insertion. See: https://developers.cloudflare.com/rules/normalization/how-it-works/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/api_shield_operation#endpoint ApiShieldOperation#endpoint}

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationConfig.property.host"></a>

```go
Host *string
```

- *Type:* *string

RFC3986-compliant host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/api_shield_operation#host ApiShieldOperation#host}

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationConfig.property.method"></a>

```go
Method *string
```

- *Type:* *string

The HTTP method used to access the endpoint. Available values: "GET", "POST", "HEAD", "OPTIONS", "PUT", "DELETE", "CONNECT", "PATCH", "TRACE".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/api_shield_operation#method ApiShieldOperation#method}

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationConfig.property.zoneId"></a>

```go
ZoneId *string
```

- *Type:* *string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/api_shield_operation#zone_id ApiShieldOperation#zone_id}

---

### ApiShieldOperationFeatures <a name="ApiShieldOperationFeatures" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeatures.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/apishieldoperation"

&apishieldoperation.ApiShieldOperationFeatures {

}
```


### ApiShieldOperationFeaturesApiRouting <a name="ApiShieldOperationFeaturesApiRouting" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesApiRouting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesApiRouting.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/apishieldoperation"

&apishieldoperation.ApiShieldOperationFeaturesApiRouting {

}
```


### ApiShieldOperationFeaturesConfidenceIntervals <a name="ApiShieldOperationFeaturesConfidenceIntervals" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervals"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervals.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/apishieldoperation"

&apishieldoperation.ApiShieldOperationFeaturesConfidenceIntervals {

}
```


### ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThreshold <a name="ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThreshold" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThreshold.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/apishieldoperation"

&apishieldoperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThreshold {

}
```


### ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervals <a name="ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervals" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervals"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervals.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/apishieldoperation"

&apishieldoperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervals {

}
```


### ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90 <a name="ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/apishieldoperation"

&apishieldoperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90 {

}
```


### ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95 <a name="ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/apishieldoperation"

&apishieldoperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95 {

}
```


### ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99 <a name="ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/apishieldoperation"

&apishieldoperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99 {

}
```


### ApiShieldOperationFeaturesParameterSchemas <a name="ApiShieldOperationFeaturesParameterSchemas" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemas"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemas.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/apishieldoperation"

&apishieldoperation.ApiShieldOperationFeaturesParameterSchemas {

}
```


### ApiShieldOperationFeaturesParameterSchemasParameterSchemas <a name="ApiShieldOperationFeaturesParameterSchemasParameterSchemas" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasParameterSchemas"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasParameterSchemas.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/apishieldoperation"

&apishieldoperation.ApiShieldOperationFeaturesParameterSchemasParameterSchemas {

}
```


### ApiShieldOperationFeaturesSchemaInfo <a name="ApiShieldOperationFeaturesSchemaInfo" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/apishieldoperation"

&apishieldoperation.ApiShieldOperationFeaturesSchemaInfo {

}
```


### ApiShieldOperationFeaturesSchemaInfoActiveSchema <a name="ApiShieldOperationFeaturesSchemaInfoActiveSchema" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoActiveSchema"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoActiveSchema.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/apishieldoperation"

&apishieldoperation.ApiShieldOperationFeaturesSchemaInfoActiveSchema {

}
```


### ApiShieldOperationFeaturesThresholds <a name="ApiShieldOperationFeaturesThresholds" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesThresholds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesThresholds.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/apishieldoperation"

&apishieldoperation.ApiShieldOperationFeaturesThresholds {

}
```


## Classes <a name="Classes" id="Classes"></a>

### ApiShieldOperationFeaturesApiRoutingOutputReference <a name="ApiShieldOperationFeaturesApiRoutingOutputReference" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesApiRoutingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesApiRoutingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/apishieldoperation"

apishieldoperation.NewApiShieldOperationFeaturesApiRoutingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApiShieldOperationFeaturesApiRoutingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesApiRoutingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesApiRoutingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesApiRoutingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesApiRoutingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesApiRoutingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesApiRoutingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesApiRoutingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesApiRoutingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesApiRoutingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesApiRoutingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesApiRoutingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesApiRoutingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesApiRoutingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesApiRoutingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesApiRoutingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesApiRoutingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesApiRoutingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesApiRoutingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesApiRoutingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesApiRoutingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesApiRoutingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesApiRoutingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesApiRoutingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesApiRoutingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesApiRoutingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesApiRoutingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesApiRoutingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesApiRoutingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesApiRoutingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesApiRoutingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesApiRoutingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesApiRoutingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesApiRoutingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesApiRoutingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesApiRoutingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesApiRoutingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesApiRoutingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesApiRoutingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesApiRoutingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesApiRoutingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesApiRoutingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesApiRoutingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesApiRoutingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesApiRoutingOutputReference.property.lastUpdated">LastUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesApiRoutingOutputReference.property.route">Route</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesApiRoutingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesApiRouting">ApiShieldOperationFeaturesApiRouting</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesApiRoutingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesApiRoutingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LastUpdated`<sup>Required</sup> <a name="LastUpdated" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesApiRoutingOutputReference.property.lastUpdated"></a>

```go
func LastUpdated() *string
```

- *Type:* *string

---

##### `Route`<sup>Required</sup> <a name="Route" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesApiRoutingOutputReference.property.route"></a>

```go
func Route() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesApiRoutingOutputReference.property.internalValue"></a>

```go
func InternalValue() ApiShieldOperationFeaturesApiRouting
```

- *Type:* <a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesApiRouting">ApiShieldOperationFeaturesApiRouting</a>

---


### ApiShieldOperationFeaturesConfidenceIntervalsOutputReference <a name="ApiShieldOperationFeaturesConfidenceIntervalsOutputReference" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/apishieldoperation"

apishieldoperation.NewApiShieldOperationFeaturesConfidenceIntervalsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApiShieldOperationFeaturesConfidenceIntervalsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsOutputReference.property.lastUpdated">LastUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsOutputReference.property.suggestedThreshold">SuggestedThreshold</a></code> | <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference">ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervals">ApiShieldOperationFeaturesConfidenceIntervals</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LastUpdated`<sup>Required</sup> <a name="LastUpdated" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsOutputReference.property.lastUpdated"></a>

```go
func LastUpdated() *string
```

- *Type:* *string

---

##### `SuggestedThreshold`<sup>Required</sup> <a name="SuggestedThreshold" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsOutputReference.property.suggestedThreshold"></a>

```go
func SuggestedThreshold() ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference">ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsOutputReference.property.internalValue"></a>

```go
func InternalValue() ApiShieldOperationFeaturesConfidenceIntervals
```

- *Type:* <a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervals">ApiShieldOperationFeaturesConfidenceIntervals</a>

---


### ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference <a name="ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/apishieldoperation"

apishieldoperation.NewApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.property.p90">P90</a></code> | <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference">ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.property.p95">P95</a></code> | <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference">ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.property.p99">P99</a></code> | <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference">ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervals">ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervals</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `P90`<sup>Required</sup> <a name="P90" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.property.p90"></a>

```go
func P90() ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference">ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference</a>

---

##### `P95`<sup>Required</sup> <a name="P95" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.property.p95"></a>

```go
func P95() ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference">ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference</a>

---

##### `P99`<sup>Required</sup> <a name="P99" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.property.p99"></a>

```go
func P99() ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference">ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.property.internalValue"></a>

```go
func InternalValue() ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervals
```

- *Type:* <a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervals">ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervals</a>

---


### ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference <a name="ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/apishieldoperation"

apishieldoperation.NewApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.property.lower">Lower</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.property.upper">Upper</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90">ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Lower`<sup>Required</sup> <a name="Lower" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.property.lower"></a>

```go
func Lower() *f64
```

- *Type:* *f64

---

##### `Upper`<sup>Required</sup> <a name="Upper" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.property.upper"></a>

```go
func Upper() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.property.internalValue"></a>

```go
func InternalValue() ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90
```

- *Type:* <a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90">ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90</a>

---


### ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference <a name="ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/apishieldoperation"

apishieldoperation.NewApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.property.lower">Lower</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.property.upper">Upper</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95">ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Lower`<sup>Required</sup> <a name="Lower" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.property.lower"></a>

```go
func Lower() *f64
```

- *Type:* *f64

---

##### `Upper`<sup>Required</sup> <a name="Upper" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.property.upper"></a>

```go
func Upper() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.property.internalValue"></a>

```go
func InternalValue() ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95
```

- *Type:* <a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95">ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95</a>

---


### ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference <a name="ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/apishieldoperation"

apishieldoperation.NewApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.property.lower">Lower</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.property.upper">Upper</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99">ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Lower`<sup>Required</sup> <a name="Lower" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.property.lower"></a>

```go
func Lower() *f64
```

- *Type:* *f64

---

##### `Upper`<sup>Required</sup> <a name="Upper" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.property.upper"></a>

```go
func Upper() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.property.internalValue"></a>

```go
func InternalValue() ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99
```

- *Type:* <a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99">ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99</a>

---


### ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference <a name="ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/apishieldoperation"

apishieldoperation.NewApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.property.confidenceIntervals">ConfidenceIntervals</a></code> | <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference">ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.property.mean">Mean</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThreshold">ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThreshold</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConfidenceIntervals`<sup>Required</sup> <a name="ConfidenceIntervals" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.property.confidenceIntervals"></a>

```go
func ConfidenceIntervals() ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference">ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference</a>

---

##### `Mean`<sup>Required</sup> <a name="Mean" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.property.mean"></a>

```go
func Mean() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.property.internalValue"></a>

```go
func InternalValue() ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThreshold
```

- *Type:* <a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThreshold">ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThreshold</a>

---


### ApiShieldOperationFeaturesOutputReference <a name="ApiShieldOperationFeaturesOutputReference" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/apishieldoperation"

apishieldoperation.NewApiShieldOperationFeaturesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApiShieldOperationFeaturesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesOutputReference.property.apiRouting">ApiRouting</a></code> | <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesApiRoutingOutputReference">ApiShieldOperationFeaturesApiRoutingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesOutputReference.property.confidenceIntervals">ConfidenceIntervals</a></code> | <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsOutputReference">ApiShieldOperationFeaturesConfidenceIntervalsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesOutputReference.property.parameterSchemas">ParameterSchemas</a></code> | <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasOutputReference">ApiShieldOperationFeaturesParameterSchemasOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesOutputReference.property.schemaInfo">SchemaInfo</a></code> | <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoOutputReference">ApiShieldOperationFeaturesSchemaInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesOutputReference.property.thresholds">Thresholds</a></code> | <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesThresholdsOutputReference">ApiShieldOperationFeaturesThresholdsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeatures">ApiShieldOperationFeatures</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiRouting`<sup>Required</sup> <a name="ApiRouting" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesOutputReference.property.apiRouting"></a>

```go
func ApiRouting() ApiShieldOperationFeaturesApiRoutingOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesApiRoutingOutputReference">ApiShieldOperationFeaturesApiRoutingOutputReference</a>

---

##### `ConfidenceIntervals`<sup>Required</sup> <a name="ConfidenceIntervals" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesOutputReference.property.confidenceIntervals"></a>

```go
func ConfidenceIntervals() ApiShieldOperationFeaturesConfidenceIntervalsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesConfidenceIntervalsOutputReference">ApiShieldOperationFeaturesConfidenceIntervalsOutputReference</a>

---

##### `ParameterSchemas`<sup>Required</sup> <a name="ParameterSchemas" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesOutputReference.property.parameterSchemas"></a>

```go
func ParameterSchemas() ApiShieldOperationFeaturesParameterSchemasOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasOutputReference">ApiShieldOperationFeaturesParameterSchemasOutputReference</a>

---

##### `SchemaInfo`<sup>Required</sup> <a name="SchemaInfo" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesOutputReference.property.schemaInfo"></a>

```go
func SchemaInfo() ApiShieldOperationFeaturesSchemaInfoOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoOutputReference">ApiShieldOperationFeaturesSchemaInfoOutputReference</a>

---

##### `Thresholds`<sup>Required</sup> <a name="Thresholds" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesOutputReference.property.thresholds"></a>

```go
func Thresholds() ApiShieldOperationFeaturesThresholdsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesThresholdsOutputReference">ApiShieldOperationFeaturesThresholdsOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesOutputReference.property.internalValue"></a>

```go
func InternalValue() ApiShieldOperationFeatures
```

- *Type:* <a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeatures">ApiShieldOperationFeatures</a>

---


### ApiShieldOperationFeaturesParameterSchemasOutputReference <a name="ApiShieldOperationFeaturesParameterSchemasOutputReference" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/apishieldoperation"

apishieldoperation.NewApiShieldOperationFeaturesParameterSchemasOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApiShieldOperationFeaturesParameterSchemasOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasOutputReference.property.lastUpdated">LastUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasOutputReference.property.parameterSchemas">ParameterSchemas</a></code> | <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference">ApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemas">ApiShieldOperationFeaturesParameterSchemas</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LastUpdated`<sup>Required</sup> <a name="LastUpdated" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasOutputReference.property.lastUpdated"></a>

```go
func LastUpdated() *string
```

- *Type:* *string

---

##### `ParameterSchemas`<sup>Required</sup> <a name="ParameterSchemas" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasOutputReference.property.parameterSchemas"></a>

```go
func ParameterSchemas() ApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference">ApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasOutputReference.property.internalValue"></a>

```go
func InternalValue() ApiShieldOperationFeaturesParameterSchemas
```

- *Type:* <a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemas">ApiShieldOperationFeaturesParameterSchemas</a>

---


### ApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference <a name="ApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/apishieldoperation"

apishieldoperation.NewApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.property.parameters">Parameters</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.property.responses">Responses</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasParameterSchemas">ApiShieldOperationFeaturesParameterSchemasParameterSchemas</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.property.parameters"></a>

```go
func Parameters() *[]*string
```

- *Type:* *[]*string

---

##### `Responses`<sup>Required</sup> <a name="Responses" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.property.responses"></a>

```go
func Responses() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.property.internalValue"></a>

```go
func InternalValue() ApiShieldOperationFeaturesParameterSchemasParameterSchemas
```

- *Type:* <a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesParameterSchemasParameterSchemas">ApiShieldOperationFeaturesParameterSchemasParameterSchemas</a>

---


### ApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference <a name="ApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/apishieldoperation"

apishieldoperation.NewApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.property.isLearned">IsLearned</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoActiveSchema">ApiShieldOperationFeaturesSchemaInfoActiveSchema</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsLearned`<sup>Required</sup> <a name="IsLearned" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.property.isLearned"></a>

```go
func IsLearned() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.property.internalValue"></a>

```go
func InternalValue() ApiShieldOperationFeaturesSchemaInfoActiveSchema
```

- *Type:* <a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoActiveSchema">ApiShieldOperationFeaturesSchemaInfoActiveSchema</a>

---


### ApiShieldOperationFeaturesSchemaInfoOutputReference <a name="ApiShieldOperationFeaturesSchemaInfoOutputReference" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/apishieldoperation"

apishieldoperation.NewApiShieldOperationFeaturesSchemaInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApiShieldOperationFeaturesSchemaInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoOutputReference.property.activeSchema">ActiveSchema</a></code> | <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference">ApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoOutputReference.property.learnedAvailable">LearnedAvailable</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoOutputReference.property.mitigationAction">MitigationAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfo">ApiShieldOperationFeaturesSchemaInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActiveSchema`<sup>Required</sup> <a name="ActiveSchema" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoOutputReference.property.activeSchema"></a>

```go
func ActiveSchema() ApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference">ApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference</a>

---

##### `LearnedAvailable`<sup>Required</sup> <a name="LearnedAvailable" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoOutputReference.property.learnedAvailable"></a>

```go
func LearnedAvailable() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `MitigationAction`<sup>Required</sup> <a name="MitigationAction" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoOutputReference.property.mitigationAction"></a>

```go
func MitigationAction() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() ApiShieldOperationFeaturesSchemaInfo
```

- *Type:* <a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesSchemaInfo">ApiShieldOperationFeaturesSchemaInfo</a>

---


### ApiShieldOperationFeaturesThresholdsOutputReference <a name="ApiShieldOperationFeaturesThresholdsOutputReference" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesThresholdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesThresholdsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/apishieldoperation"

apishieldoperation.NewApiShieldOperationFeaturesThresholdsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApiShieldOperationFeaturesThresholdsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesThresholdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesThresholdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesThresholdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesThresholdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesThresholdsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesThresholdsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesThresholdsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesThresholdsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesThresholdsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesThresholdsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesThresholdsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesThresholdsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesThresholdsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesThresholdsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesThresholdsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesThresholdsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesThresholdsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesThresholdsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesThresholdsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesThresholdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesThresholdsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesThresholdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesThresholdsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesThresholdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesThresholdsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesThresholdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesThresholdsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesThresholdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesThresholdsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesThresholdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesThresholdsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesThresholdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesThresholdsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesThresholdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesThresholdsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesThresholdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesThresholdsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesThresholdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesThresholdsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesThresholdsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesThresholdsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesThresholdsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesThresholdsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesThresholdsOutputReference.property.authIdTokens">AuthIdTokens</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesThresholdsOutputReference.property.dataPoints">DataPoints</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesThresholdsOutputReference.property.lastUpdated">LastUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesThresholdsOutputReference.property.p50">P50</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesThresholdsOutputReference.property.p90">P90</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesThresholdsOutputReference.property.p99">P99</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesThresholdsOutputReference.property.periodSeconds">PeriodSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesThresholdsOutputReference.property.requests">Requests</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesThresholdsOutputReference.property.suggestedThreshold">SuggestedThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesThresholdsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesThresholds">ApiShieldOperationFeaturesThresholds</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesThresholdsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesThresholdsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthIdTokens`<sup>Required</sup> <a name="AuthIdTokens" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesThresholdsOutputReference.property.authIdTokens"></a>

```go
func AuthIdTokens() *f64
```

- *Type:* *f64

---

##### `DataPoints`<sup>Required</sup> <a name="DataPoints" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesThresholdsOutputReference.property.dataPoints"></a>

```go
func DataPoints() *f64
```

- *Type:* *f64

---

##### `LastUpdated`<sup>Required</sup> <a name="LastUpdated" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesThresholdsOutputReference.property.lastUpdated"></a>

```go
func LastUpdated() *string
```

- *Type:* *string

---

##### `P50`<sup>Required</sup> <a name="P50" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesThresholdsOutputReference.property.p50"></a>

```go
func P50() *f64
```

- *Type:* *f64

---

##### `P90`<sup>Required</sup> <a name="P90" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesThresholdsOutputReference.property.p90"></a>

```go
func P90() *f64
```

- *Type:* *f64

---

##### `P99`<sup>Required</sup> <a name="P99" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesThresholdsOutputReference.property.p99"></a>

```go
func P99() *f64
```

- *Type:* *f64

---

##### `PeriodSeconds`<sup>Required</sup> <a name="PeriodSeconds" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesThresholdsOutputReference.property.periodSeconds"></a>

```go
func PeriodSeconds() *f64
```

- *Type:* *f64

---

##### `Requests`<sup>Required</sup> <a name="Requests" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesThresholdsOutputReference.property.requests"></a>

```go
func Requests() *f64
```

- *Type:* *f64

---

##### `SuggestedThreshold`<sup>Required</sup> <a name="SuggestedThreshold" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesThresholdsOutputReference.property.suggestedThreshold"></a>

```go
func SuggestedThreshold() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesThresholdsOutputReference.property.internalValue"></a>

```go
func InternalValue() ApiShieldOperationFeaturesThresholds
```

- *Type:* <a href="#@cdktf/provider-cloudflare.apiShieldOperation.ApiShieldOperationFeaturesThresholds">ApiShieldOperationFeaturesThresholds</a>

---



