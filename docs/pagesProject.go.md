# `pagesProject` Submodule <a name="`pagesProject` Submodule" id="@cdktf/provider-cloudflare.pagesProject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PagesProject <a name="PagesProject" id="@cdktf/provider-cloudflare.pagesProject.PagesProject"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.32.0/docs/resources/pages_project cloudflare_pages_project}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/pagesproject"

pagesproject.NewPagesProject(scope Construct, id *string, config PagesProjectConfig) PagesProject
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig">PagesProjectConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig">PagesProjectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.putBuildConfig">PutBuildConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.putDeploymentConfigs">PutDeploymentConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.resetBuildConfig">ResetBuildConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.resetDeploymentConfigs">ResetDeploymentConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.resetSource">ResetSource</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBuildConfig` <a name="PutBuildConfig" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.putBuildConfig"></a>

```go
func PutBuildConfig(value PagesProjectBuildConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.putBuildConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig">PagesProjectBuildConfig</a>

---

##### `PutDeploymentConfigs` <a name="PutDeploymentConfigs" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.putDeploymentConfigs"></a>

```go
func PutDeploymentConfigs(value PagesProjectDeploymentConfigs)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.putDeploymentConfigs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigs">PagesProjectDeploymentConfigs</a>

---

##### `PutSource` <a name="PutSource" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.putSource"></a>

```go
func PutSource(value PagesProjectSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSource">PagesProjectSource</a>

---

##### `ResetBuildConfig` <a name="ResetBuildConfig" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.resetBuildConfig"></a>

```go
func ResetBuildConfig()
```

##### `ResetDeploymentConfigs` <a name="ResetDeploymentConfigs" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.resetDeploymentConfigs"></a>

```go
func ResetDeploymentConfigs()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.resetId"></a>

```go
func ResetId()
```

##### `ResetSource` <a name="ResetSource" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.resetSource"></a>

```go
func ResetSource()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a PagesProject resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/pagesproject"

pagesproject.PagesProject_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/pagesproject"

pagesproject.PagesProject_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/pagesproject"

pagesproject.PagesProject_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/pagesproject"

pagesproject.PagesProject_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a PagesProject resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the PagesProject to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing PagesProject that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.32.0/docs/resources/pages_project#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the PagesProject to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.buildConfig">BuildConfig</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference">PagesProjectBuildConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.deploymentConfigs">DeploymentConfigs</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference">PagesProjectDeploymentConfigsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.domains">Domains</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.source">Source</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference">PagesProjectSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.subdomain">Subdomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.buildConfigInput">BuildConfigInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig">PagesProjectBuildConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.deploymentConfigsInput">DeploymentConfigsInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigs">PagesProjectDeploymentConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.productionBranchInput">ProductionBranchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.sourceInput">SourceInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSource">PagesProjectSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.productionBranch">ProductionBranch</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BuildConfig`<sup>Required</sup> <a name="BuildConfig" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.buildConfig"></a>

```go
func BuildConfig() PagesProjectBuildConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference">PagesProjectBuildConfigOutputReference</a>

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `DeploymentConfigs`<sup>Required</sup> <a name="DeploymentConfigs" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.deploymentConfigs"></a>

```go
func DeploymentConfigs() PagesProjectDeploymentConfigsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference">PagesProjectDeploymentConfigsOutputReference</a>

---

##### `Domains`<sup>Required</sup> <a name="Domains" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.domains"></a>

```go
func Domains() *[]*string
```

- *Type:* *[]*string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.source"></a>

```go
func Source() PagesProjectSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference">PagesProjectSourceOutputReference</a>

---

##### `Subdomain`<sup>Required</sup> <a name="Subdomain" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.subdomain"></a>

```go
func Subdomain() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `BuildConfigInput`<sup>Optional</sup> <a name="BuildConfigInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.buildConfigInput"></a>

```go
func BuildConfigInput() PagesProjectBuildConfig
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig">PagesProjectBuildConfig</a>

---

##### `DeploymentConfigsInput`<sup>Optional</sup> <a name="DeploymentConfigsInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.deploymentConfigsInput"></a>

```go
func DeploymentConfigsInput() PagesProjectDeploymentConfigs
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigs">PagesProjectDeploymentConfigs</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProductionBranchInput`<sup>Optional</sup> <a name="ProductionBranchInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.productionBranchInput"></a>

```go
func ProductionBranchInput() *string
```

- *Type:* *string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.sourceInput"></a>

```go
func SourceInput() PagesProjectSource
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSource">PagesProjectSource</a>

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProductionBranch`<sup>Required</sup> <a name="ProductionBranch" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.productionBranch"></a>

```go
func ProductionBranch() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PagesProjectBuildConfig <a name="PagesProjectBuildConfig" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/pagesproject"

&pagesproject.PagesProjectBuildConfig {
	BuildCaching: interface{},
	BuildCommand: *string,
	DestinationDir: *string,
	RootDir: *string,
	WebAnalyticsTag: *string,
	WebAnalyticsToken: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig.property.buildCaching">BuildCaching</a></code> | <code>interface{}</code> | Enable build caching for the project. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig.property.buildCommand">BuildCommand</a></code> | <code>*string</code> | Command used to build project. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig.property.destinationDir">DestinationDir</a></code> | <code>*string</code> | Output directory of the build. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig.property.rootDir">RootDir</a></code> | <code>*string</code> | Your project's root directory, where Cloudflare runs the build command. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig.property.webAnalyticsTag">WebAnalyticsTag</a></code> | <code>*string</code> | The classifying tag for analytics. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig.property.webAnalyticsToken">WebAnalyticsToken</a></code> | <code>*string</code> | The auth token for analytics. |

---

##### `BuildCaching`<sup>Optional</sup> <a name="BuildCaching" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig.property.buildCaching"></a>

```go
BuildCaching interface{}
```

- *Type:* interface{}

Enable build caching for the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.32.0/docs/resources/pages_project#build_caching PagesProject#build_caching}

---

##### `BuildCommand`<sup>Optional</sup> <a name="BuildCommand" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig.property.buildCommand"></a>

```go
BuildCommand *string
```

- *Type:* *string

Command used to build project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.32.0/docs/resources/pages_project#build_command PagesProject#build_command}

---

##### `DestinationDir`<sup>Optional</sup> <a name="DestinationDir" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig.property.destinationDir"></a>

```go
DestinationDir *string
```

- *Type:* *string

Output directory of the build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.32.0/docs/resources/pages_project#destination_dir PagesProject#destination_dir}

---

##### `RootDir`<sup>Optional</sup> <a name="RootDir" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig.property.rootDir"></a>

```go
RootDir *string
```

- *Type:* *string

Your project's root directory, where Cloudflare runs the build command.

If your site is not in a subdirectory, leave this path value empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.32.0/docs/resources/pages_project#root_dir PagesProject#root_dir}

---

##### `WebAnalyticsTag`<sup>Optional</sup> <a name="WebAnalyticsTag" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig.property.webAnalyticsTag"></a>

```go
WebAnalyticsTag *string
```

- *Type:* *string

The classifying tag for analytics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.32.0/docs/resources/pages_project#web_analytics_tag PagesProject#web_analytics_tag}

---

##### `WebAnalyticsToken`<sup>Optional</sup> <a name="WebAnalyticsToken" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig.property.webAnalyticsToken"></a>

```go
WebAnalyticsToken *string
```

- *Type:* *string

The auth token for analytics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.32.0/docs/resources/pages_project#web_analytics_token PagesProject#web_analytics_token}

---

### PagesProjectConfig <a name="PagesProjectConfig" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/pagesproject"

&pagesproject.PagesProjectConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	Name: *string,
	ProductionBranch: *string,
	BuildConfig: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.pagesProject.PagesProjectBuildConfig,
	DeploymentConfigs: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.pagesProject.PagesProjectDeploymentConfigs,
	Id: *string,
	Source: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.pagesProject.PagesProjectSource,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.accountId">AccountId</a></code> | <code>*string</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.name">Name</a></code> | <code>*string</code> | Name of the project. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.productionBranch">ProductionBranch</a></code> | <code>*string</code> | The name of the branch that is used for the production environment. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.buildConfig">BuildConfig</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig">PagesProjectBuildConfig</a></code> | build_config block. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.deploymentConfigs">DeploymentConfigs</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigs">PagesProjectDeploymentConfigs</a></code> | deployment_configs block. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.32.0/docs/resources/pages_project#id PagesProject#id}. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.source">Source</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSource">PagesProjectSource</a></code> | source block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.32.0/docs/resources/pages_project#account_id PagesProject#account_id}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.32.0/docs/resources/pages_project#name PagesProject#name}

---

##### `ProductionBranch`<sup>Required</sup> <a name="ProductionBranch" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.productionBranch"></a>

```go
ProductionBranch *string
```

- *Type:* *string

The name of the branch that is used for the production environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.32.0/docs/resources/pages_project#production_branch PagesProject#production_branch}

---

##### `BuildConfig`<sup>Optional</sup> <a name="BuildConfig" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.buildConfig"></a>

```go
BuildConfig PagesProjectBuildConfig
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig">PagesProjectBuildConfig</a>

build_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.32.0/docs/resources/pages_project#build_config PagesProject#build_config}

---

##### `DeploymentConfigs`<sup>Optional</sup> <a name="DeploymentConfigs" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.deploymentConfigs"></a>

```go
DeploymentConfigs PagesProjectDeploymentConfigs
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigs">PagesProjectDeploymentConfigs</a>

deployment_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.32.0/docs/resources/pages_project#deployment_configs PagesProject#deployment_configs}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.32.0/docs/resources/pages_project#id PagesProject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.source"></a>

```go
Source PagesProjectSource
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSource">PagesProjectSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.32.0/docs/resources/pages_project#source PagesProject#source}

---

### PagesProjectDeploymentConfigs <a name="PagesProjectDeploymentConfigs" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/pagesproject"

&pagesproject.PagesProjectDeploymentConfigs {
	Preview: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview,
	Production: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigs.property.preview">Preview</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview">PagesProjectDeploymentConfigsPreview</a></code> | preview block. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigs.property.production">Production</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction">PagesProjectDeploymentConfigsProduction</a></code> | production block. |

---

##### `Preview`<sup>Optional</sup> <a name="Preview" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigs.property.preview"></a>

```go
Preview PagesProjectDeploymentConfigsPreview
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview">PagesProjectDeploymentConfigsPreview</a>

preview block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.32.0/docs/resources/pages_project#preview PagesProject#preview}

---

##### `Production`<sup>Optional</sup> <a name="Production" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigs.property.production"></a>

```go
Production PagesProjectDeploymentConfigsProduction
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction">PagesProjectDeploymentConfigsProduction</a>

production block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.32.0/docs/resources/pages_project#production PagesProject#production}

---

### PagesProjectDeploymentConfigsPreview <a name="PagesProjectDeploymentConfigsPreview" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/pagesproject"

&pagesproject.PagesProjectDeploymentConfigsPreview {
	AlwaysUseLatestCompatibilityDate: interface{},
	CompatibilityDate: *string,
	CompatibilityFlags: *[]*string,
	D1Databases: *map[string]*string,
	DurableObjectNamespaces: *map[string]*string,
	EnvironmentVariables: *map[string]*string,
	FailOpen: interface{},
	KvNamespaces: *map[string]*string,
	Placement: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacement,
	R2Buckets: *map[string]*string,
	Secrets: *map[string]*string,
	ServiceBinding: interface{},
	UsageModel: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.alwaysUseLatestCompatibilityDate">AlwaysUseLatestCompatibilityDate</a></code> | <code>interface{}</code> | Use latest compatibility date for Pages Functions. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.compatibilityDate">CompatibilityDate</a></code> | <code>*string</code> | Compatibility date used for Pages Functions. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.compatibilityFlags">CompatibilityFlags</a></code> | <code>*[]*string</code> | Compatibility flags used for Pages Functions. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.d1Databases">D1Databases</a></code> | <code>*map[string]*string</code> | D1 Databases used for Pages Functions. Defaults to `map[]`. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.durableObjectNamespaces">DurableObjectNamespaces</a></code> | <code>*map[string]*string</code> | Durable Object namespaces used for Pages Functions. Defaults to `map[]`. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.environmentVariables">EnvironmentVariables</a></code> | <code>*map[string]*string</code> | Environment variables for Pages Functions. Defaults to `map[]`. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.failOpen">FailOpen</a></code> | <code>interface{}</code> | Fail open used for Pages Functions. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.kvNamespaces">KvNamespaces</a></code> | <code>*map[string]*string</code> | KV namespaces used for Pages Functions. Defaults to `map[]`. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.placement">Placement</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacement">PagesProjectDeploymentConfigsPreviewPlacement</a></code> | placement block. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.r2Buckets">R2Buckets</a></code> | <code>*map[string]*string</code> | R2 Buckets used for Pages Functions. Defaults to `map[]`. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.secrets">Secrets</a></code> | <code>*map[string]*string</code> | Encrypted environment variables for Pages Functions. Defaults to `map[]`. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.serviceBinding">ServiceBinding</a></code> | <code>interface{}</code> | service_binding block. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.usageModel">UsageModel</a></code> | <code>*string</code> | Usage model used for Pages Functions. Available values: `unbound`, `bundled`, `standard`. Defaults to `bundled`. |

---

##### `AlwaysUseLatestCompatibilityDate`<sup>Optional</sup> <a name="AlwaysUseLatestCompatibilityDate" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.alwaysUseLatestCompatibilityDate"></a>

```go
AlwaysUseLatestCompatibilityDate interface{}
```

- *Type:* interface{}

Use latest compatibility date for Pages Functions. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.32.0/docs/resources/pages_project#always_use_latest_compatibility_date PagesProject#always_use_latest_compatibility_date}

---

##### `CompatibilityDate`<sup>Optional</sup> <a name="CompatibilityDate" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.compatibilityDate"></a>

```go
CompatibilityDate *string
```

- *Type:* *string

Compatibility date used for Pages Functions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.32.0/docs/resources/pages_project#compatibility_date PagesProject#compatibility_date}

---

##### `CompatibilityFlags`<sup>Optional</sup> <a name="CompatibilityFlags" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.compatibilityFlags"></a>

```go
CompatibilityFlags *[]*string
```

- *Type:* *[]*string

Compatibility flags used for Pages Functions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.32.0/docs/resources/pages_project#compatibility_flags PagesProject#compatibility_flags}

---

##### `D1Databases`<sup>Optional</sup> <a name="D1Databases" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.d1Databases"></a>

```go
D1Databases *map[string]*string
```

- *Type:* *map[string]*string

D1 Databases used for Pages Functions. Defaults to `map[]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.32.0/docs/resources/pages_project#d1_databases PagesProject#d1_databases}

---

##### `DurableObjectNamespaces`<sup>Optional</sup> <a name="DurableObjectNamespaces" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.durableObjectNamespaces"></a>

```go
DurableObjectNamespaces *map[string]*string
```

- *Type:* *map[string]*string

Durable Object namespaces used for Pages Functions. Defaults to `map[]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.32.0/docs/resources/pages_project#durable_object_namespaces PagesProject#durable_object_namespaces}

---

##### `EnvironmentVariables`<sup>Optional</sup> <a name="EnvironmentVariables" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.environmentVariables"></a>

```go
EnvironmentVariables *map[string]*string
```

- *Type:* *map[string]*string

Environment variables for Pages Functions. Defaults to `map[]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.32.0/docs/resources/pages_project#environment_variables PagesProject#environment_variables}

---

##### `FailOpen`<sup>Optional</sup> <a name="FailOpen" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.failOpen"></a>

```go
FailOpen interface{}
```

- *Type:* interface{}

Fail open used for Pages Functions. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.32.0/docs/resources/pages_project#fail_open PagesProject#fail_open}

---

##### `KvNamespaces`<sup>Optional</sup> <a name="KvNamespaces" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.kvNamespaces"></a>

```go
KvNamespaces *map[string]*string
```

- *Type:* *map[string]*string

KV namespaces used for Pages Functions. Defaults to `map[]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.32.0/docs/resources/pages_project#kv_namespaces PagesProject#kv_namespaces}

---

##### `Placement`<sup>Optional</sup> <a name="Placement" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.placement"></a>

```go
Placement PagesProjectDeploymentConfigsPreviewPlacement
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacement">PagesProjectDeploymentConfigsPreviewPlacement</a>

placement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.32.0/docs/resources/pages_project#placement PagesProject#placement}

---

##### `R2Buckets`<sup>Optional</sup> <a name="R2Buckets" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.r2Buckets"></a>

```go
R2Buckets *map[string]*string
```

- *Type:* *map[string]*string

R2 Buckets used for Pages Functions. Defaults to `map[]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.32.0/docs/resources/pages_project#r2_buckets PagesProject#r2_buckets}

---

##### `Secrets`<sup>Optional</sup> <a name="Secrets" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.secrets"></a>

```go
Secrets *map[string]*string
```

- *Type:* *map[string]*string

Encrypted environment variables for Pages Functions. Defaults to `map[]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.32.0/docs/resources/pages_project#secrets PagesProject#secrets}

---

##### `ServiceBinding`<sup>Optional</sup> <a name="ServiceBinding" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.serviceBinding"></a>

```go
ServiceBinding interface{}
```

- *Type:* interface{}

service_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.32.0/docs/resources/pages_project#service_binding PagesProject#service_binding}

---

##### `UsageModel`<sup>Optional</sup> <a name="UsageModel" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.usageModel"></a>

```go
UsageModel *string
```

- *Type:* *string

Usage model used for Pages Functions. Available values: `unbound`, `bundled`, `standard`. Defaults to `bundled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.32.0/docs/resources/pages_project#usage_model PagesProject#usage_model}

---

### PagesProjectDeploymentConfigsPreviewPlacement <a name="PagesProjectDeploymentConfigsPreviewPlacement" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacement.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/pagesproject"

&pagesproject.PagesProjectDeploymentConfigsPreviewPlacement {
	Mode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacement.property.mode">Mode</a></code> | <code>*string</code> | Placement Mode for the Pages Function. |

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacement.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

Placement Mode for the Pages Function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.32.0/docs/resources/pages_project#mode PagesProject#mode}

---

### PagesProjectDeploymentConfigsPreviewServiceBinding <a name="PagesProjectDeploymentConfigsPreviewServiceBinding" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBinding"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBinding.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/pagesproject"

&pagesproject.PagesProjectDeploymentConfigsPreviewServiceBinding {
	Name: *string,
	Service: *string,
	Environment: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBinding.property.name">Name</a></code> | <code>*string</code> | The global variable for the binding in your Worker code. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBinding.property.service">Service</a></code> | <code>*string</code> | The name of the Worker to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBinding.property.environment">Environment</a></code> | <code>*string</code> | The name of the Worker environment to bind to. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBinding.property.name"></a>

```go
Name *string
```

- *Type:* *string

The global variable for the binding in your Worker code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.32.0/docs/resources/pages_project#name PagesProject#name}

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBinding.property.service"></a>

```go
Service *string
```

- *Type:* *string

The name of the Worker to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.32.0/docs/resources/pages_project#service PagesProject#service}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBinding.property.environment"></a>

```go
Environment *string
```

- *Type:* *string

The name of the Worker environment to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.32.0/docs/resources/pages_project#environment PagesProject#environment}

---

### PagesProjectDeploymentConfigsProduction <a name="PagesProjectDeploymentConfigsProduction" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/pagesproject"

&pagesproject.PagesProjectDeploymentConfigsProduction {
	AlwaysUseLatestCompatibilityDate: interface{},
	CompatibilityDate: *string,
	CompatibilityFlags: *[]*string,
	D1Databases: *map[string]*string,
	DurableObjectNamespaces: *map[string]*string,
	EnvironmentVariables: *map[string]*string,
	FailOpen: interface{},
	KvNamespaces: *map[string]*string,
	Placement: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacement,
	R2Buckets: *map[string]*string,
	Secrets: *map[string]*string,
	ServiceBinding: interface{},
	UsageModel: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.alwaysUseLatestCompatibilityDate">AlwaysUseLatestCompatibilityDate</a></code> | <code>interface{}</code> | Use latest compatibility date for Pages Functions. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.compatibilityDate">CompatibilityDate</a></code> | <code>*string</code> | Compatibility date used for Pages Functions. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.compatibilityFlags">CompatibilityFlags</a></code> | <code>*[]*string</code> | Compatibility flags used for Pages Functions. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.d1Databases">D1Databases</a></code> | <code>*map[string]*string</code> | D1 Databases used for Pages Functions. Defaults to `map[]`. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.durableObjectNamespaces">DurableObjectNamespaces</a></code> | <code>*map[string]*string</code> | Durable Object namespaces used for Pages Functions. Defaults to `map[]`. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.environmentVariables">EnvironmentVariables</a></code> | <code>*map[string]*string</code> | Environment variables for Pages Functions. Defaults to `map[]`. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.failOpen">FailOpen</a></code> | <code>interface{}</code> | Fail open used for Pages Functions. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.kvNamespaces">KvNamespaces</a></code> | <code>*map[string]*string</code> | KV namespaces used for Pages Functions. Defaults to `map[]`. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.placement">Placement</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacement">PagesProjectDeploymentConfigsProductionPlacement</a></code> | placement block. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.r2Buckets">R2Buckets</a></code> | <code>*map[string]*string</code> | R2 Buckets used for Pages Functions. Defaults to `map[]`. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.secrets">Secrets</a></code> | <code>*map[string]*string</code> | Encrypted environment variables for Pages Functions. Defaults to `map[]`. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.serviceBinding">ServiceBinding</a></code> | <code>interface{}</code> | service_binding block. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.usageModel">UsageModel</a></code> | <code>*string</code> | Usage model used for Pages Functions. Available values: `unbound`, `bundled`, `standard`. Defaults to `bundled`. |

---

##### `AlwaysUseLatestCompatibilityDate`<sup>Optional</sup> <a name="AlwaysUseLatestCompatibilityDate" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.alwaysUseLatestCompatibilityDate"></a>

```go
AlwaysUseLatestCompatibilityDate interface{}
```

- *Type:* interface{}

Use latest compatibility date for Pages Functions. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.32.0/docs/resources/pages_project#always_use_latest_compatibility_date PagesProject#always_use_latest_compatibility_date}

---

##### `CompatibilityDate`<sup>Optional</sup> <a name="CompatibilityDate" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.compatibilityDate"></a>

```go
CompatibilityDate *string
```

- *Type:* *string

Compatibility date used for Pages Functions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.32.0/docs/resources/pages_project#compatibility_date PagesProject#compatibility_date}

---

##### `CompatibilityFlags`<sup>Optional</sup> <a name="CompatibilityFlags" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.compatibilityFlags"></a>

```go
CompatibilityFlags *[]*string
```

- *Type:* *[]*string

Compatibility flags used for Pages Functions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.32.0/docs/resources/pages_project#compatibility_flags PagesProject#compatibility_flags}

---

##### `D1Databases`<sup>Optional</sup> <a name="D1Databases" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.d1Databases"></a>

```go
D1Databases *map[string]*string
```

- *Type:* *map[string]*string

D1 Databases used for Pages Functions. Defaults to `map[]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.32.0/docs/resources/pages_project#d1_databases PagesProject#d1_databases}

---

##### `DurableObjectNamespaces`<sup>Optional</sup> <a name="DurableObjectNamespaces" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.durableObjectNamespaces"></a>

```go
DurableObjectNamespaces *map[string]*string
```

- *Type:* *map[string]*string

Durable Object namespaces used for Pages Functions. Defaults to `map[]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.32.0/docs/resources/pages_project#durable_object_namespaces PagesProject#durable_object_namespaces}

---

##### `EnvironmentVariables`<sup>Optional</sup> <a name="EnvironmentVariables" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.environmentVariables"></a>

```go
EnvironmentVariables *map[string]*string
```

- *Type:* *map[string]*string

Environment variables for Pages Functions. Defaults to `map[]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.32.0/docs/resources/pages_project#environment_variables PagesProject#environment_variables}

---

##### `FailOpen`<sup>Optional</sup> <a name="FailOpen" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.failOpen"></a>

```go
FailOpen interface{}
```

- *Type:* interface{}

Fail open used for Pages Functions. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.32.0/docs/resources/pages_project#fail_open PagesProject#fail_open}

---

##### `KvNamespaces`<sup>Optional</sup> <a name="KvNamespaces" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.kvNamespaces"></a>

```go
KvNamespaces *map[string]*string
```

- *Type:* *map[string]*string

KV namespaces used for Pages Functions. Defaults to `map[]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.32.0/docs/resources/pages_project#kv_namespaces PagesProject#kv_namespaces}

---

##### `Placement`<sup>Optional</sup> <a name="Placement" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.placement"></a>

```go
Placement PagesProjectDeploymentConfigsProductionPlacement
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacement">PagesProjectDeploymentConfigsProductionPlacement</a>

placement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.32.0/docs/resources/pages_project#placement PagesProject#placement}

---

##### `R2Buckets`<sup>Optional</sup> <a name="R2Buckets" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.r2Buckets"></a>

```go
R2Buckets *map[string]*string
```

- *Type:* *map[string]*string

R2 Buckets used for Pages Functions. Defaults to `map[]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.32.0/docs/resources/pages_project#r2_buckets PagesProject#r2_buckets}

---

##### `Secrets`<sup>Optional</sup> <a name="Secrets" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.secrets"></a>

```go
Secrets *map[string]*string
```

- *Type:* *map[string]*string

Encrypted environment variables for Pages Functions. Defaults to `map[]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.32.0/docs/resources/pages_project#secrets PagesProject#secrets}

---

##### `ServiceBinding`<sup>Optional</sup> <a name="ServiceBinding" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.serviceBinding"></a>

```go
ServiceBinding interface{}
```

- *Type:* interface{}

service_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.32.0/docs/resources/pages_project#service_binding PagesProject#service_binding}

---

##### `UsageModel`<sup>Optional</sup> <a name="UsageModel" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.usageModel"></a>

```go
UsageModel *string
```

- *Type:* *string

Usage model used for Pages Functions. Available values: `unbound`, `bundled`, `standard`. Defaults to `bundled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.32.0/docs/resources/pages_project#usage_model PagesProject#usage_model}

---

### PagesProjectDeploymentConfigsProductionPlacement <a name="PagesProjectDeploymentConfigsProductionPlacement" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacement.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/pagesproject"

&pagesproject.PagesProjectDeploymentConfigsProductionPlacement {
	Mode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacement.property.mode">Mode</a></code> | <code>*string</code> | Placement Mode for the Pages Function. |

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacement.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

Placement Mode for the Pages Function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.32.0/docs/resources/pages_project#mode PagesProject#mode}

---

### PagesProjectDeploymentConfigsProductionServiceBinding <a name="PagesProjectDeploymentConfigsProductionServiceBinding" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBinding"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBinding.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/pagesproject"

&pagesproject.PagesProjectDeploymentConfigsProductionServiceBinding {
	Name: *string,
	Service: *string,
	Environment: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBinding.property.name">Name</a></code> | <code>*string</code> | The global variable for the binding in your Worker code. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBinding.property.service">Service</a></code> | <code>*string</code> | The name of the Worker to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBinding.property.environment">Environment</a></code> | <code>*string</code> | The name of the Worker environment to bind to. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBinding.property.name"></a>

```go
Name *string
```

- *Type:* *string

The global variable for the binding in your Worker code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.32.0/docs/resources/pages_project#name PagesProject#name}

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBinding.property.service"></a>

```go
Service *string
```

- *Type:* *string

The name of the Worker to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.32.0/docs/resources/pages_project#service PagesProject#service}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBinding.property.environment"></a>

```go
Environment *string
```

- *Type:* *string

The name of the Worker environment to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.32.0/docs/resources/pages_project#environment PagesProject#environment}

---

### PagesProjectSource <a name="PagesProjectSource" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/pagesproject"

&pagesproject.PagesProjectSource {
	Config: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.pagesProject.PagesProjectSourceConfig,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSource.property.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig">PagesProjectSourceConfig</a></code> | config block. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSource.property.type">Type</a></code> | <code>*string</code> | Project host type. |

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSource.property.config"></a>

```go
Config PagesProjectSourceConfig
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig">PagesProjectSourceConfig</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.32.0/docs/resources/pages_project#config PagesProject#config}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSource.property.type"></a>

```go
Type *string
```

- *Type:* *string

Project host type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.32.0/docs/resources/pages_project#type PagesProject#type}

---

### PagesProjectSourceConfig <a name="PagesProjectSourceConfig" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/pagesproject"

&pagesproject.PagesProjectSourceConfig {
	ProductionBranch: *string,
	DeploymentsEnabled: interface{},
	Owner: *string,
	PrCommentsEnabled: interface{},
	PreviewBranchExcludes: *[]*string,
	PreviewBranchIncludes: *[]*string,
	PreviewDeploymentSetting: *string,
	ProductionDeploymentEnabled: interface{},
	RepoName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.productionBranch">ProductionBranch</a></code> | <code>*string</code> | Project production branch name. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.deploymentsEnabled">DeploymentsEnabled</a></code> | <code>interface{}</code> | Toggle deployments on this repo. Defaults to `true`. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.owner">Owner</a></code> | <code>*string</code> | Project owner username. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.prCommentsEnabled">PrCommentsEnabled</a></code> | <code>interface{}</code> | Enable Pages to comment on Pull Requests. Defaults to `true`. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.previewBranchExcludes">PreviewBranchExcludes</a></code> | <code>*[]*string</code> | Branches will be excluded from automatic deployment. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.previewBranchIncludes">PreviewBranchIncludes</a></code> | <code>*[]*string</code> | Branches will be included for automatic deployment. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.previewDeploymentSetting">PreviewDeploymentSetting</a></code> | <code>*string</code> | Preview Deployment Setting. Available values: `custom`, `all`, `none`. Defaults to `all`. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.productionDeploymentEnabled">ProductionDeploymentEnabled</a></code> | <code>interface{}</code> | Enable production deployments. Defaults to `true`. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.repoName">RepoName</a></code> | <code>*string</code> | Project repository name. **Modifying this attribute will force creation of a new resource.**. |

---

##### `ProductionBranch`<sup>Required</sup> <a name="ProductionBranch" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.productionBranch"></a>

```go
ProductionBranch *string
```

- *Type:* *string

Project production branch name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.32.0/docs/resources/pages_project#production_branch PagesProject#production_branch}

---

##### `DeploymentsEnabled`<sup>Optional</sup> <a name="DeploymentsEnabled" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.deploymentsEnabled"></a>

```go
DeploymentsEnabled interface{}
```

- *Type:* interface{}

Toggle deployments on this repo. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.32.0/docs/resources/pages_project#deployments_enabled PagesProject#deployments_enabled}

---

##### `Owner`<sup>Optional</sup> <a name="Owner" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.owner"></a>

```go
Owner *string
```

- *Type:* *string

Project owner username. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.32.0/docs/resources/pages_project#owner PagesProject#owner}

---

##### `PrCommentsEnabled`<sup>Optional</sup> <a name="PrCommentsEnabled" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.prCommentsEnabled"></a>

```go
PrCommentsEnabled interface{}
```

- *Type:* interface{}

Enable Pages to comment on Pull Requests. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.32.0/docs/resources/pages_project#pr_comments_enabled PagesProject#pr_comments_enabled}

---

##### `PreviewBranchExcludes`<sup>Optional</sup> <a name="PreviewBranchExcludes" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.previewBranchExcludes"></a>

```go
PreviewBranchExcludes *[]*string
```

- *Type:* *[]*string

Branches will be excluded from automatic deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.32.0/docs/resources/pages_project#preview_branch_excludes PagesProject#preview_branch_excludes}

---

##### `PreviewBranchIncludes`<sup>Optional</sup> <a name="PreviewBranchIncludes" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.previewBranchIncludes"></a>

```go
PreviewBranchIncludes *[]*string
```

- *Type:* *[]*string

Branches will be included for automatic deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.32.0/docs/resources/pages_project#preview_branch_includes PagesProject#preview_branch_includes}

---

##### `PreviewDeploymentSetting`<sup>Optional</sup> <a name="PreviewDeploymentSetting" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.previewDeploymentSetting"></a>

```go
PreviewDeploymentSetting *string
```

- *Type:* *string

Preview Deployment Setting. Available values: `custom`, `all`, `none`. Defaults to `all`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.32.0/docs/resources/pages_project#preview_deployment_setting PagesProject#preview_deployment_setting}

---

##### `ProductionDeploymentEnabled`<sup>Optional</sup> <a name="ProductionDeploymentEnabled" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.productionDeploymentEnabled"></a>

```go
ProductionDeploymentEnabled interface{}
```

- *Type:* interface{}

Enable production deployments. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.32.0/docs/resources/pages_project#production_deployment_enabled PagesProject#production_deployment_enabled}

---

##### `RepoName`<sup>Optional</sup> <a name="RepoName" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.repoName"></a>

```go
RepoName *string
```

- *Type:* *string

Project repository name. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.32.0/docs/resources/pages_project#repo_name PagesProject#repo_name}

---

## Classes <a name="Classes" id="Classes"></a>

### PagesProjectBuildConfigOutputReference <a name="PagesProjectBuildConfigOutputReference" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/pagesproject"

pagesproject.NewPagesProjectBuildConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PagesProjectBuildConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.resetBuildCaching">ResetBuildCaching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.resetBuildCommand">ResetBuildCommand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.resetDestinationDir">ResetDestinationDir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.resetRootDir">ResetRootDir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.resetWebAnalyticsTag">ResetWebAnalyticsTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.resetWebAnalyticsToken">ResetWebAnalyticsToken</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBuildCaching` <a name="ResetBuildCaching" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.resetBuildCaching"></a>

```go
func ResetBuildCaching()
```

##### `ResetBuildCommand` <a name="ResetBuildCommand" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.resetBuildCommand"></a>

```go
func ResetBuildCommand()
```

##### `ResetDestinationDir` <a name="ResetDestinationDir" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.resetDestinationDir"></a>

```go
func ResetDestinationDir()
```

##### `ResetRootDir` <a name="ResetRootDir" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.resetRootDir"></a>

```go
func ResetRootDir()
```

##### `ResetWebAnalyticsTag` <a name="ResetWebAnalyticsTag" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.resetWebAnalyticsTag"></a>

```go
func ResetWebAnalyticsTag()
```

##### `ResetWebAnalyticsToken` <a name="ResetWebAnalyticsToken" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.resetWebAnalyticsToken"></a>

```go
func ResetWebAnalyticsToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.buildCachingInput">BuildCachingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.buildCommandInput">BuildCommandInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.destinationDirInput">DestinationDirInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.rootDirInput">RootDirInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.webAnalyticsTagInput">WebAnalyticsTagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.webAnalyticsTokenInput">WebAnalyticsTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.buildCaching">BuildCaching</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.buildCommand">BuildCommand</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.destinationDir">DestinationDir</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.rootDir">RootDir</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.webAnalyticsTag">WebAnalyticsTag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.webAnalyticsToken">WebAnalyticsToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig">PagesProjectBuildConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BuildCachingInput`<sup>Optional</sup> <a name="BuildCachingInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.buildCachingInput"></a>

```go
func BuildCachingInput() interface{}
```

- *Type:* interface{}

---

##### `BuildCommandInput`<sup>Optional</sup> <a name="BuildCommandInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.buildCommandInput"></a>

```go
func BuildCommandInput() *string
```

- *Type:* *string

---

##### `DestinationDirInput`<sup>Optional</sup> <a name="DestinationDirInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.destinationDirInput"></a>

```go
func DestinationDirInput() *string
```

- *Type:* *string

---

##### `RootDirInput`<sup>Optional</sup> <a name="RootDirInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.rootDirInput"></a>

```go
func RootDirInput() *string
```

- *Type:* *string

---

##### `WebAnalyticsTagInput`<sup>Optional</sup> <a name="WebAnalyticsTagInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.webAnalyticsTagInput"></a>

```go
func WebAnalyticsTagInput() *string
```

- *Type:* *string

---

##### `WebAnalyticsTokenInput`<sup>Optional</sup> <a name="WebAnalyticsTokenInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.webAnalyticsTokenInput"></a>

```go
func WebAnalyticsTokenInput() *string
```

- *Type:* *string

---

##### `BuildCaching`<sup>Required</sup> <a name="BuildCaching" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.buildCaching"></a>

```go
func BuildCaching() interface{}
```

- *Type:* interface{}

---

##### `BuildCommand`<sup>Required</sup> <a name="BuildCommand" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.buildCommand"></a>

```go
func BuildCommand() *string
```

- *Type:* *string

---

##### `DestinationDir`<sup>Required</sup> <a name="DestinationDir" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.destinationDir"></a>

```go
func DestinationDir() *string
```

- *Type:* *string

---

##### `RootDir`<sup>Required</sup> <a name="RootDir" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.rootDir"></a>

```go
func RootDir() *string
```

- *Type:* *string

---

##### `WebAnalyticsTag`<sup>Required</sup> <a name="WebAnalyticsTag" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.webAnalyticsTag"></a>

```go
func WebAnalyticsTag() *string
```

- *Type:* *string

---

##### `WebAnalyticsToken`<sup>Required</sup> <a name="WebAnalyticsToken" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.webAnalyticsToken"></a>

```go
func WebAnalyticsToken() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() PagesProjectBuildConfig
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig">PagesProjectBuildConfig</a>

---


### PagesProjectDeploymentConfigsOutputReference <a name="PagesProjectDeploymentConfigsOutputReference" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/pagesproject"

pagesproject.NewPagesProjectDeploymentConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PagesProjectDeploymentConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.putPreview">PutPreview</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.putProduction">PutProduction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.resetPreview">ResetPreview</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.resetProduction">ResetProduction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPreview` <a name="PutPreview" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.putPreview"></a>

```go
func PutPreview(value PagesProjectDeploymentConfigsPreview)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.putPreview.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview">PagesProjectDeploymentConfigsPreview</a>

---

##### `PutProduction` <a name="PutProduction" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.putProduction"></a>

```go
func PutProduction(value PagesProjectDeploymentConfigsProduction)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.putProduction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction">PagesProjectDeploymentConfigsProduction</a>

---

##### `ResetPreview` <a name="ResetPreview" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.resetPreview"></a>

```go
func ResetPreview()
```

##### `ResetProduction` <a name="ResetProduction" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.resetProduction"></a>

```go
func ResetProduction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.property.preview">Preview</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference">PagesProjectDeploymentConfigsPreviewOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.property.production">Production</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference">PagesProjectDeploymentConfigsProductionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.property.previewInput">PreviewInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview">PagesProjectDeploymentConfigsPreview</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.property.productionInput">ProductionInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction">PagesProjectDeploymentConfigsProduction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigs">PagesProjectDeploymentConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Preview`<sup>Required</sup> <a name="Preview" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.property.preview"></a>

```go
func Preview() PagesProjectDeploymentConfigsPreviewOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference">PagesProjectDeploymentConfigsPreviewOutputReference</a>

---

##### `Production`<sup>Required</sup> <a name="Production" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.property.production"></a>

```go
func Production() PagesProjectDeploymentConfigsProductionOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference">PagesProjectDeploymentConfigsProductionOutputReference</a>

---

##### `PreviewInput`<sup>Optional</sup> <a name="PreviewInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.property.previewInput"></a>

```go
func PreviewInput() PagesProjectDeploymentConfigsPreview
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview">PagesProjectDeploymentConfigsPreview</a>

---

##### `ProductionInput`<sup>Optional</sup> <a name="ProductionInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.property.productionInput"></a>

```go
func ProductionInput() PagesProjectDeploymentConfigsProduction
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction">PagesProjectDeploymentConfigsProduction</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() PagesProjectDeploymentConfigs
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigs">PagesProjectDeploymentConfigs</a>

---


### PagesProjectDeploymentConfigsPreviewOutputReference <a name="PagesProjectDeploymentConfigsPreviewOutputReference" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/pagesproject"

pagesproject.NewPagesProjectDeploymentConfigsPreviewOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PagesProjectDeploymentConfigsPreviewOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.putPlacement">PutPlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.putServiceBinding">PutServiceBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetAlwaysUseLatestCompatibilityDate">ResetAlwaysUseLatestCompatibilityDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetCompatibilityDate">ResetCompatibilityDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetCompatibilityFlags">ResetCompatibilityFlags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetD1Databases">ResetD1Databases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetDurableObjectNamespaces">ResetDurableObjectNamespaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetEnvironmentVariables">ResetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetFailOpen">ResetFailOpen</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetKvNamespaces">ResetKvNamespaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetPlacement">ResetPlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetR2Buckets">ResetR2Buckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetSecrets">ResetSecrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetServiceBinding">ResetServiceBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetUsageModel">ResetUsageModel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPlacement` <a name="PutPlacement" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.putPlacement"></a>

```go
func PutPlacement(value PagesProjectDeploymentConfigsPreviewPlacement)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.putPlacement.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacement">PagesProjectDeploymentConfigsPreviewPlacement</a>

---

##### `PutServiceBinding` <a name="PutServiceBinding" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.putServiceBinding"></a>

```go
func PutServiceBinding(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.putServiceBinding.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAlwaysUseLatestCompatibilityDate` <a name="ResetAlwaysUseLatestCompatibilityDate" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetAlwaysUseLatestCompatibilityDate"></a>

```go
func ResetAlwaysUseLatestCompatibilityDate()
```

##### `ResetCompatibilityDate` <a name="ResetCompatibilityDate" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetCompatibilityDate"></a>

```go
func ResetCompatibilityDate()
```

##### `ResetCompatibilityFlags` <a name="ResetCompatibilityFlags" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetCompatibilityFlags"></a>

```go
func ResetCompatibilityFlags()
```

##### `ResetD1Databases` <a name="ResetD1Databases" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetD1Databases"></a>

```go
func ResetD1Databases()
```

##### `ResetDurableObjectNamespaces` <a name="ResetDurableObjectNamespaces" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetDurableObjectNamespaces"></a>

```go
func ResetDurableObjectNamespaces()
```

##### `ResetEnvironmentVariables` <a name="ResetEnvironmentVariables" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetEnvironmentVariables"></a>

```go
func ResetEnvironmentVariables()
```

##### `ResetFailOpen` <a name="ResetFailOpen" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetFailOpen"></a>

```go
func ResetFailOpen()
```

##### `ResetKvNamespaces` <a name="ResetKvNamespaces" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetKvNamespaces"></a>

```go
func ResetKvNamespaces()
```

##### `ResetPlacement` <a name="ResetPlacement" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetPlacement"></a>

```go
func ResetPlacement()
```

##### `ResetR2Buckets` <a name="ResetR2Buckets" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetR2Buckets"></a>

```go
func ResetR2Buckets()
```

##### `ResetSecrets` <a name="ResetSecrets" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetSecrets"></a>

```go
func ResetSecrets()
```

##### `ResetServiceBinding` <a name="ResetServiceBinding" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetServiceBinding"></a>

```go
func ResetServiceBinding()
```

##### `ResetUsageModel` <a name="ResetUsageModel" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetUsageModel"></a>

```go
func ResetUsageModel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.placement">Placement</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference">PagesProjectDeploymentConfigsPreviewPlacementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.serviceBinding">ServiceBinding</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList">PagesProjectDeploymentConfigsPreviewServiceBindingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.alwaysUseLatestCompatibilityDateInput">AlwaysUseLatestCompatibilityDateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.compatibilityDateInput">CompatibilityDateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.compatibilityFlagsInput">CompatibilityFlagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.d1DatabasesInput">D1DatabasesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.durableObjectNamespacesInput">DurableObjectNamespacesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.environmentVariablesInput">EnvironmentVariablesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.failOpenInput">FailOpenInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.kvNamespacesInput">KvNamespacesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.placementInput">PlacementInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacement">PagesProjectDeploymentConfigsPreviewPlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.r2BucketsInput">R2BucketsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.secretsInput">SecretsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.serviceBindingInput">ServiceBindingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.usageModelInput">UsageModelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.alwaysUseLatestCompatibilityDate">AlwaysUseLatestCompatibilityDate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.compatibilityDate">CompatibilityDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.compatibilityFlags">CompatibilityFlags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.d1Databases">D1Databases</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.durableObjectNamespaces">DurableObjectNamespaces</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.environmentVariables">EnvironmentVariables</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.failOpen">FailOpen</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.kvNamespaces">KvNamespaces</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.r2Buckets">R2Buckets</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.secrets">Secrets</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.usageModel">UsageModel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview">PagesProjectDeploymentConfigsPreview</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Placement`<sup>Required</sup> <a name="Placement" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.placement"></a>

```go
func Placement() PagesProjectDeploymentConfigsPreviewPlacementOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference">PagesProjectDeploymentConfigsPreviewPlacementOutputReference</a>

---

##### `ServiceBinding`<sup>Required</sup> <a name="ServiceBinding" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.serviceBinding"></a>

```go
func ServiceBinding() PagesProjectDeploymentConfigsPreviewServiceBindingList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList">PagesProjectDeploymentConfigsPreviewServiceBindingList</a>

---

##### `AlwaysUseLatestCompatibilityDateInput`<sup>Optional</sup> <a name="AlwaysUseLatestCompatibilityDateInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.alwaysUseLatestCompatibilityDateInput"></a>

```go
func AlwaysUseLatestCompatibilityDateInput() interface{}
```

- *Type:* interface{}

---

##### `CompatibilityDateInput`<sup>Optional</sup> <a name="CompatibilityDateInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.compatibilityDateInput"></a>

```go
func CompatibilityDateInput() *string
```

- *Type:* *string

---

##### `CompatibilityFlagsInput`<sup>Optional</sup> <a name="CompatibilityFlagsInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.compatibilityFlagsInput"></a>

```go
func CompatibilityFlagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `D1DatabasesInput`<sup>Optional</sup> <a name="D1DatabasesInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.d1DatabasesInput"></a>

```go
func D1DatabasesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DurableObjectNamespacesInput`<sup>Optional</sup> <a name="DurableObjectNamespacesInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.durableObjectNamespacesInput"></a>

```go
func DurableObjectNamespacesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `EnvironmentVariablesInput`<sup>Optional</sup> <a name="EnvironmentVariablesInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.environmentVariablesInput"></a>

```go
func EnvironmentVariablesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `FailOpenInput`<sup>Optional</sup> <a name="FailOpenInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.failOpenInput"></a>

```go
func FailOpenInput() interface{}
```

- *Type:* interface{}

---

##### `KvNamespacesInput`<sup>Optional</sup> <a name="KvNamespacesInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.kvNamespacesInput"></a>

```go
func KvNamespacesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `PlacementInput`<sup>Optional</sup> <a name="PlacementInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.placementInput"></a>

```go
func PlacementInput() PagesProjectDeploymentConfigsPreviewPlacement
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacement">PagesProjectDeploymentConfigsPreviewPlacement</a>

---

##### `R2BucketsInput`<sup>Optional</sup> <a name="R2BucketsInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.r2BucketsInput"></a>

```go
func R2BucketsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SecretsInput`<sup>Optional</sup> <a name="SecretsInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.secretsInput"></a>

```go
func SecretsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ServiceBindingInput`<sup>Optional</sup> <a name="ServiceBindingInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.serviceBindingInput"></a>

```go
func ServiceBindingInput() interface{}
```

- *Type:* interface{}

---

##### `UsageModelInput`<sup>Optional</sup> <a name="UsageModelInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.usageModelInput"></a>

```go
func UsageModelInput() *string
```

- *Type:* *string

---

##### `AlwaysUseLatestCompatibilityDate`<sup>Required</sup> <a name="AlwaysUseLatestCompatibilityDate" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.alwaysUseLatestCompatibilityDate"></a>

```go
func AlwaysUseLatestCompatibilityDate() interface{}
```

- *Type:* interface{}

---

##### `CompatibilityDate`<sup>Required</sup> <a name="CompatibilityDate" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.compatibilityDate"></a>

```go
func CompatibilityDate() *string
```

- *Type:* *string

---

##### `CompatibilityFlags`<sup>Required</sup> <a name="CompatibilityFlags" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.compatibilityFlags"></a>

```go
func CompatibilityFlags() *[]*string
```

- *Type:* *[]*string

---

##### `D1Databases`<sup>Required</sup> <a name="D1Databases" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.d1Databases"></a>

```go
func D1Databases() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DurableObjectNamespaces`<sup>Required</sup> <a name="DurableObjectNamespaces" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.durableObjectNamespaces"></a>

```go
func DurableObjectNamespaces() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `EnvironmentVariables`<sup>Required</sup> <a name="EnvironmentVariables" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.environmentVariables"></a>

```go
func EnvironmentVariables() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `FailOpen`<sup>Required</sup> <a name="FailOpen" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.failOpen"></a>

```go
func FailOpen() interface{}
```

- *Type:* interface{}

---

##### `KvNamespaces`<sup>Required</sup> <a name="KvNamespaces" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.kvNamespaces"></a>

```go
func KvNamespaces() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `R2Buckets`<sup>Required</sup> <a name="R2Buckets" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.r2Buckets"></a>

```go
func R2Buckets() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Secrets`<sup>Required</sup> <a name="Secrets" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.secrets"></a>

```go
func Secrets() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `UsageModel`<sup>Required</sup> <a name="UsageModel" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.usageModel"></a>

```go
func UsageModel() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.internalValue"></a>

```go
func InternalValue() PagesProjectDeploymentConfigsPreview
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview">PagesProjectDeploymentConfigsPreview</a>

---


### PagesProjectDeploymentConfigsPreviewPlacementOutputReference <a name="PagesProjectDeploymentConfigsPreviewPlacementOutputReference" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/pagesproject"

pagesproject.NewPagesProjectDeploymentConfigsPreviewPlacementOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PagesProjectDeploymentConfigsPreviewPlacementOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.resetMode">ResetMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.resetMode"></a>

```go
func ResetMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacement">PagesProjectDeploymentConfigsPreviewPlacement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.property.internalValue"></a>

```go
func InternalValue() PagesProjectDeploymentConfigsPreviewPlacement
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacement">PagesProjectDeploymentConfigsPreviewPlacement</a>

---


### PagesProjectDeploymentConfigsPreviewServiceBindingList <a name="PagesProjectDeploymentConfigsPreviewServiceBindingList" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/pagesproject"

pagesproject.NewPagesProjectDeploymentConfigsPreviewServiceBindingList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) PagesProjectDeploymentConfigsPreviewServiceBindingList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.get"></a>

```go
func Get(index *f64) PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference <a name="PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/pagesproject"

pagesproject.NewPagesProjectDeploymentConfigsPreviewServiceBindingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.resetEnvironment">ResetEnvironment</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.resetEnvironment"></a>

```go
func ResetEnvironment()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.environmentInput">EnvironmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.environment">Environment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.environmentInput"></a>

```go
func EnvironmentInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.environment"></a>

```go
func Environment() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PagesProjectDeploymentConfigsProductionOutputReference <a name="PagesProjectDeploymentConfigsProductionOutputReference" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/pagesproject"

pagesproject.NewPagesProjectDeploymentConfigsProductionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PagesProjectDeploymentConfigsProductionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.putPlacement">PutPlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.putServiceBinding">PutServiceBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetAlwaysUseLatestCompatibilityDate">ResetAlwaysUseLatestCompatibilityDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetCompatibilityDate">ResetCompatibilityDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetCompatibilityFlags">ResetCompatibilityFlags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetD1Databases">ResetD1Databases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetDurableObjectNamespaces">ResetDurableObjectNamespaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetEnvironmentVariables">ResetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetFailOpen">ResetFailOpen</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetKvNamespaces">ResetKvNamespaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetPlacement">ResetPlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetR2Buckets">ResetR2Buckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetSecrets">ResetSecrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetServiceBinding">ResetServiceBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetUsageModel">ResetUsageModel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPlacement` <a name="PutPlacement" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.putPlacement"></a>

```go
func PutPlacement(value PagesProjectDeploymentConfigsProductionPlacement)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.putPlacement.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacement">PagesProjectDeploymentConfigsProductionPlacement</a>

---

##### `PutServiceBinding` <a name="PutServiceBinding" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.putServiceBinding"></a>

```go
func PutServiceBinding(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.putServiceBinding.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAlwaysUseLatestCompatibilityDate` <a name="ResetAlwaysUseLatestCompatibilityDate" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetAlwaysUseLatestCompatibilityDate"></a>

```go
func ResetAlwaysUseLatestCompatibilityDate()
```

##### `ResetCompatibilityDate` <a name="ResetCompatibilityDate" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetCompatibilityDate"></a>

```go
func ResetCompatibilityDate()
```

##### `ResetCompatibilityFlags` <a name="ResetCompatibilityFlags" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetCompatibilityFlags"></a>

```go
func ResetCompatibilityFlags()
```

##### `ResetD1Databases` <a name="ResetD1Databases" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetD1Databases"></a>

```go
func ResetD1Databases()
```

##### `ResetDurableObjectNamespaces` <a name="ResetDurableObjectNamespaces" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetDurableObjectNamespaces"></a>

```go
func ResetDurableObjectNamespaces()
```

##### `ResetEnvironmentVariables` <a name="ResetEnvironmentVariables" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetEnvironmentVariables"></a>

```go
func ResetEnvironmentVariables()
```

##### `ResetFailOpen` <a name="ResetFailOpen" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetFailOpen"></a>

```go
func ResetFailOpen()
```

##### `ResetKvNamespaces` <a name="ResetKvNamespaces" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetKvNamespaces"></a>

```go
func ResetKvNamespaces()
```

##### `ResetPlacement` <a name="ResetPlacement" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetPlacement"></a>

```go
func ResetPlacement()
```

##### `ResetR2Buckets` <a name="ResetR2Buckets" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetR2Buckets"></a>

```go
func ResetR2Buckets()
```

##### `ResetSecrets` <a name="ResetSecrets" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetSecrets"></a>

```go
func ResetSecrets()
```

##### `ResetServiceBinding` <a name="ResetServiceBinding" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetServiceBinding"></a>

```go
func ResetServiceBinding()
```

##### `ResetUsageModel` <a name="ResetUsageModel" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetUsageModel"></a>

```go
func ResetUsageModel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.placement">Placement</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference">PagesProjectDeploymentConfigsProductionPlacementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.serviceBinding">ServiceBinding</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList">PagesProjectDeploymentConfigsProductionServiceBindingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.alwaysUseLatestCompatibilityDateInput">AlwaysUseLatestCompatibilityDateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.compatibilityDateInput">CompatibilityDateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.compatibilityFlagsInput">CompatibilityFlagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.d1DatabasesInput">D1DatabasesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.durableObjectNamespacesInput">DurableObjectNamespacesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.environmentVariablesInput">EnvironmentVariablesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.failOpenInput">FailOpenInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.kvNamespacesInput">KvNamespacesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.placementInput">PlacementInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacement">PagesProjectDeploymentConfigsProductionPlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.r2BucketsInput">R2BucketsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.secretsInput">SecretsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.serviceBindingInput">ServiceBindingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.usageModelInput">UsageModelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.alwaysUseLatestCompatibilityDate">AlwaysUseLatestCompatibilityDate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.compatibilityDate">CompatibilityDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.compatibilityFlags">CompatibilityFlags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.d1Databases">D1Databases</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.durableObjectNamespaces">DurableObjectNamespaces</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.environmentVariables">EnvironmentVariables</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.failOpen">FailOpen</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.kvNamespaces">KvNamespaces</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.r2Buckets">R2Buckets</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.secrets">Secrets</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.usageModel">UsageModel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction">PagesProjectDeploymentConfigsProduction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Placement`<sup>Required</sup> <a name="Placement" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.placement"></a>

```go
func Placement() PagesProjectDeploymentConfigsProductionPlacementOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference">PagesProjectDeploymentConfigsProductionPlacementOutputReference</a>

---

##### `ServiceBinding`<sup>Required</sup> <a name="ServiceBinding" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.serviceBinding"></a>

```go
func ServiceBinding() PagesProjectDeploymentConfigsProductionServiceBindingList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList">PagesProjectDeploymentConfigsProductionServiceBindingList</a>

---

##### `AlwaysUseLatestCompatibilityDateInput`<sup>Optional</sup> <a name="AlwaysUseLatestCompatibilityDateInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.alwaysUseLatestCompatibilityDateInput"></a>

```go
func AlwaysUseLatestCompatibilityDateInput() interface{}
```

- *Type:* interface{}

---

##### `CompatibilityDateInput`<sup>Optional</sup> <a name="CompatibilityDateInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.compatibilityDateInput"></a>

```go
func CompatibilityDateInput() *string
```

- *Type:* *string

---

##### `CompatibilityFlagsInput`<sup>Optional</sup> <a name="CompatibilityFlagsInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.compatibilityFlagsInput"></a>

```go
func CompatibilityFlagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `D1DatabasesInput`<sup>Optional</sup> <a name="D1DatabasesInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.d1DatabasesInput"></a>

```go
func D1DatabasesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DurableObjectNamespacesInput`<sup>Optional</sup> <a name="DurableObjectNamespacesInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.durableObjectNamespacesInput"></a>

```go
func DurableObjectNamespacesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `EnvironmentVariablesInput`<sup>Optional</sup> <a name="EnvironmentVariablesInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.environmentVariablesInput"></a>

```go
func EnvironmentVariablesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `FailOpenInput`<sup>Optional</sup> <a name="FailOpenInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.failOpenInput"></a>

```go
func FailOpenInput() interface{}
```

- *Type:* interface{}

---

##### `KvNamespacesInput`<sup>Optional</sup> <a name="KvNamespacesInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.kvNamespacesInput"></a>

```go
func KvNamespacesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `PlacementInput`<sup>Optional</sup> <a name="PlacementInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.placementInput"></a>

```go
func PlacementInput() PagesProjectDeploymentConfigsProductionPlacement
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacement">PagesProjectDeploymentConfigsProductionPlacement</a>

---

##### `R2BucketsInput`<sup>Optional</sup> <a name="R2BucketsInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.r2BucketsInput"></a>

```go
func R2BucketsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SecretsInput`<sup>Optional</sup> <a name="SecretsInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.secretsInput"></a>

```go
func SecretsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ServiceBindingInput`<sup>Optional</sup> <a name="ServiceBindingInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.serviceBindingInput"></a>

```go
func ServiceBindingInput() interface{}
```

- *Type:* interface{}

---

##### `UsageModelInput`<sup>Optional</sup> <a name="UsageModelInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.usageModelInput"></a>

```go
func UsageModelInput() *string
```

- *Type:* *string

---

##### `AlwaysUseLatestCompatibilityDate`<sup>Required</sup> <a name="AlwaysUseLatestCompatibilityDate" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.alwaysUseLatestCompatibilityDate"></a>

```go
func AlwaysUseLatestCompatibilityDate() interface{}
```

- *Type:* interface{}

---

##### `CompatibilityDate`<sup>Required</sup> <a name="CompatibilityDate" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.compatibilityDate"></a>

```go
func CompatibilityDate() *string
```

- *Type:* *string

---

##### `CompatibilityFlags`<sup>Required</sup> <a name="CompatibilityFlags" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.compatibilityFlags"></a>

```go
func CompatibilityFlags() *[]*string
```

- *Type:* *[]*string

---

##### `D1Databases`<sup>Required</sup> <a name="D1Databases" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.d1Databases"></a>

```go
func D1Databases() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DurableObjectNamespaces`<sup>Required</sup> <a name="DurableObjectNamespaces" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.durableObjectNamespaces"></a>

```go
func DurableObjectNamespaces() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `EnvironmentVariables`<sup>Required</sup> <a name="EnvironmentVariables" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.environmentVariables"></a>

```go
func EnvironmentVariables() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `FailOpen`<sup>Required</sup> <a name="FailOpen" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.failOpen"></a>

```go
func FailOpen() interface{}
```

- *Type:* interface{}

---

##### `KvNamespaces`<sup>Required</sup> <a name="KvNamespaces" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.kvNamespaces"></a>

```go
func KvNamespaces() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `R2Buckets`<sup>Required</sup> <a name="R2Buckets" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.r2Buckets"></a>

```go
func R2Buckets() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Secrets`<sup>Required</sup> <a name="Secrets" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.secrets"></a>

```go
func Secrets() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `UsageModel`<sup>Required</sup> <a name="UsageModel" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.usageModel"></a>

```go
func UsageModel() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.internalValue"></a>

```go
func InternalValue() PagesProjectDeploymentConfigsProduction
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction">PagesProjectDeploymentConfigsProduction</a>

---


### PagesProjectDeploymentConfigsProductionPlacementOutputReference <a name="PagesProjectDeploymentConfigsProductionPlacementOutputReference" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/pagesproject"

pagesproject.NewPagesProjectDeploymentConfigsProductionPlacementOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PagesProjectDeploymentConfigsProductionPlacementOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.resetMode">ResetMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.resetMode"></a>

```go
func ResetMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacement">PagesProjectDeploymentConfigsProductionPlacement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.property.internalValue"></a>

```go
func InternalValue() PagesProjectDeploymentConfigsProductionPlacement
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacement">PagesProjectDeploymentConfigsProductionPlacement</a>

---


### PagesProjectDeploymentConfigsProductionServiceBindingList <a name="PagesProjectDeploymentConfigsProductionServiceBindingList" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/pagesproject"

pagesproject.NewPagesProjectDeploymentConfigsProductionServiceBindingList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) PagesProjectDeploymentConfigsProductionServiceBindingList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.get"></a>

```go
func Get(index *f64) PagesProjectDeploymentConfigsProductionServiceBindingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PagesProjectDeploymentConfigsProductionServiceBindingOutputReference <a name="PagesProjectDeploymentConfigsProductionServiceBindingOutputReference" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/pagesproject"

pagesproject.NewPagesProjectDeploymentConfigsProductionServiceBindingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) PagesProjectDeploymentConfigsProductionServiceBindingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.resetEnvironment">ResetEnvironment</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.resetEnvironment"></a>

```go
func ResetEnvironment()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.environmentInput">EnvironmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.environment">Environment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.environmentInput"></a>

```go
func EnvironmentInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.environment"></a>

```go
func Environment() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PagesProjectSourceConfigOutputReference <a name="PagesProjectSourceConfigOutputReference" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/pagesproject"

pagesproject.NewPagesProjectSourceConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PagesProjectSourceConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resetDeploymentsEnabled">ResetDeploymentsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resetOwner">ResetOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resetPrCommentsEnabled">ResetPrCommentsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resetPreviewBranchExcludes">ResetPreviewBranchExcludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resetPreviewBranchIncludes">ResetPreviewBranchIncludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resetPreviewDeploymentSetting">ResetPreviewDeploymentSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resetProductionDeploymentEnabled">ResetProductionDeploymentEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resetRepoName">ResetRepoName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeploymentsEnabled` <a name="ResetDeploymentsEnabled" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resetDeploymentsEnabled"></a>

```go
func ResetDeploymentsEnabled()
```

##### `ResetOwner` <a name="ResetOwner" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resetOwner"></a>

```go
func ResetOwner()
```

##### `ResetPrCommentsEnabled` <a name="ResetPrCommentsEnabled" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resetPrCommentsEnabled"></a>

```go
func ResetPrCommentsEnabled()
```

##### `ResetPreviewBranchExcludes` <a name="ResetPreviewBranchExcludes" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resetPreviewBranchExcludes"></a>

```go
func ResetPreviewBranchExcludes()
```

##### `ResetPreviewBranchIncludes` <a name="ResetPreviewBranchIncludes" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resetPreviewBranchIncludes"></a>

```go
func ResetPreviewBranchIncludes()
```

##### `ResetPreviewDeploymentSetting` <a name="ResetPreviewDeploymentSetting" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resetPreviewDeploymentSetting"></a>

```go
func ResetPreviewDeploymentSetting()
```

##### `ResetProductionDeploymentEnabled` <a name="ResetProductionDeploymentEnabled" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resetProductionDeploymentEnabled"></a>

```go
func ResetProductionDeploymentEnabled()
```

##### `ResetRepoName` <a name="ResetRepoName" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resetRepoName"></a>

```go
func ResetRepoName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.deploymentsEnabledInput">DeploymentsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.ownerInput">OwnerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.prCommentsEnabledInput">PrCommentsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.previewBranchExcludesInput">PreviewBranchExcludesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.previewBranchIncludesInput">PreviewBranchIncludesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.previewDeploymentSettingInput">PreviewDeploymentSettingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.productionBranchInput">ProductionBranchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.productionDeploymentEnabledInput">ProductionDeploymentEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.repoNameInput">RepoNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.deploymentsEnabled">DeploymentsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.prCommentsEnabled">PrCommentsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.previewBranchExcludes">PreviewBranchExcludes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.previewBranchIncludes">PreviewBranchIncludes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.previewDeploymentSetting">PreviewDeploymentSetting</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.productionBranch">ProductionBranch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.productionDeploymentEnabled">ProductionDeploymentEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.repoName">RepoName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig">PagesProjectSourceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeploymentsEnabledInput`<sup>Optional</sup> <a name="DeploymentsEnabledInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.deploymentsEnabledInput"></a>

```go
func DeploymentsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `OwnerInput`<sup>Optional</sup> <a name="OwnerInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.ownerInput"></a>

```go
func OwnerInput() *string
```

- *Type:* *string

---

##### `PrCommentsEnabledInput`<sup>Optional</sup> <a name="PrCommentsEnabledInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.prCommentsEnabledInput"></a>

```go
func PrCommentsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `PreviewBranchExcludesInput`<sup>Optional</sup> <a name="PreviewBranchExcludesInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.previewBranchExcludesInput"></a>

```go
func PreviewBranchExcludesInput() *[]*string
```

- *Type:* *[]*string

---

##### `PreviewBranchIncludesInput`<sup>Optional</sup> <a name="PreviewBranchIncludesInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.previewBranchIncludesInput"></a>

```go
func PreviewBranchIncludesInput() *[]*string
```

- *Type:* *[]*string

---

##### `PreviewDeploymentSettingInput`<sup>Optional</sup> <a name="PreviewDeploymentSettingInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.previewDeploymentSettingInput"></a>

```go
func PreviewDeploymentSettingInput() *string
```

- *Type:* *string

---

##### `ProductionBranchInput`<sup>Optional</sup> <a name="ProductionBranchInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.productionBranchInput"></a>

```go
func ProductionBranchInput() *string
```

- *Type:* *string

---

##### `ProductionDeploymentEnabledInput`<sup>Optional</sup> <a name="ProductionDeploymentEnabledInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.productionDeploymentEnabledInput"></a>

```go
func ProductionDeploymentEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `RepoNameInput`<sup>Optional</sup> <a name="RepoNameInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.repoNameInput"></a>

```go
func RepoNameInput() *string
```

- *Type:* *string

---

##### `DeploymentsEnabled`<sup>Required</sup> <a name="DeploymentsEnabled" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.deploymentsEnabled"></a>

```go
func DeploymentsEnabled() interface{}
```

- *Type:* interface{}

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `PrCommentsEnabled`<sup>Required</sup> <a name="PrCommentsEnabled" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.prCommentsEnabled"></a>

```go
func PrCommentsEnabled() interface{}
```

- *Type:* interface{}

---

##### `PreviewBranchExcludes`<sup>Required</sup> <a name="PreviewBranchExcludes" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.previewBranchExcludes"></a>

```go
func PreviewBranchExcludes() *[]*string
```

- *Type:* *[]*string

---

##### `PreviewBranchIncludes`<sup>Required</sup> <a name="PreviewBranchIncludes" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.previewBranchIncludes"></a>

```go
func PreviewBranchIncludes() *[]*string
```

- *Type:* *[]*string

---

##### `PreviewDeploymentSetting`<sup>Required</sup> <a name="PreviewDeploymentSetting" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.previewDeploymentSetting"></a>

```go
func PreviewDeploymentSetting() *string
```

- *Type:* *string

---

##### `ProductionBranch`<sup>Required</sup> <a name="ProductionBranch" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.productionBranch"></a>

```go
func ProductionBranch() *string
```

- *Type:* *string

---

##### `ProductionDeploymentEnabled`<sup>Required</sup> <a name="ProductionDeploymentEnabled" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.productionDeploymentEnabled"></a>

```go
func ProductionDeploymentEnabled() interface{}
```

- *Type:* interface{}

---

##### `RepoName`<sup>Required</sup> <a name="RepoName" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.repoName"></a>

```go
func RepoName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() PagesProjectSourceConfig
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig">PagesProjectSourceConfig</a>

---


### PagesProjectSourceOutputReference <a name="PagesProjectSourceOutputReference" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/pagesproject"

pagesproject.NewPagesProjectSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PagesProjectSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.resetConfig">ResetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConfig` <a name="PutConfig" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.putConfig"></a>

```go
func PutConfig(value PagesProjectSourceConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig">PagesProjectSourceConfig</a>

---

##### `ResetConfig` <a name="ResetConfig" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.resetConfig"></a>

```go
func ResetConfig()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.property.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference">PagesProjectSourceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.property.configInput">ConfigInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig">PagesProjectSourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSource">PagesProjectSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.property.config"></a>

```go
func Config() PagesProjectSourceConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference">PagesProjectSourceConfigOutputReference</a>

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.property.configInput"></a>

```go
func ConfigInput() PagesProjectSourceConfig
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig">PagesProjectSourceConfig</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() PagesProjectSource
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSource">PagesProjectSource</a>

---



