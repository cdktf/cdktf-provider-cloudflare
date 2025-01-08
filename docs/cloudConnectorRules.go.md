# `cloudConnectorRules` Submodule <a name="`cloudConnectorRules` Submodule" id="@cdktf/provider-cloudflare.cloudConnectorRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudConnectorRules <a name="CloudConnectorRules" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/cloud_connector_rules cloudflare_cloud_connector_rules}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/cloudconnectorrules"

cloudconnectorrules.NewCloudConnectorRules(scope Construct, id *string, config CloudConnectorRulesConfig) CloudConnectorRules
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesConfig">CloudConnectorRulesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesConfig">CloudConnectorRulesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.putRules">PutRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.resetRules">ResetRules</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRules` <a name="PutRules" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.putRules"></a>

```go
func PutRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.putRules.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetRules` <a name="ResetRules" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.resetRules"></a>

```go
func ResetRules()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CloudConnectorRules resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/cloudconnectorrules"

cloudconnectorrules.CloudConnectorRules_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/cloudconnectorrules"

cloudconnectorrules.CloudConnectorRules_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/cloudconnectorrules"

cloudconnectorrules.CloudConnectorRules_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/cloudconnectorrules"

cloudconnectorrules.CloudConnectorRules_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a CloudConnectorRules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CloudConnectorRules to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CloudConnectorRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/cloud_connector_rules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the CloudConnectorRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.property.rules">Rules</a></code> | <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesList">CloudConnectorRulesRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.property.rulesInput">RulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.property.zoneIdInput">ZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.property.rules"></a>

```go
func Rules() CloudConnectorRulesRulesList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesList">CloudConnectorRulesRulesList</a>

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.property.rulesInput"></a>

```go
func RulesInput() interface{}
```

- *Type:* interface{}

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.property.zoneIdInput"></a>

```go
func ZoneIdInput() *string
```

- *Type:* *string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRules.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudConnectorRulesConfig <a name="CloudConnectorRulesConfig" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/cloudconnectorrules"

&cloudconnectorrules.CloudConnectorRulesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ZoneId: *string,
	Rules: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesConfig.property.zoneId">ZoneId</a></code> | <code>*string</code> | The zone identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesConfig.property.rules">Rules</a></code> | <code>interface{}</code> | rules block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesConfig.property.zoneId"></a>

```go
ZoneId *string
```

- *Type:* *string

The zone identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/cloud_connector_rules#zone_id CloudConnectorRules#zone_id}

---

##### `Rules`<sup>Optional</sup> <a name="Rules" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesConfig.property.rules"></a>

```go
Rules interface{}
```

- *Type:* interface{}

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/cloud_connector_rules#rules CloudConnectorRules#rules}

---

### CloudConnectorRulesRules <a name="CloudConnectorRulesRules" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/cloudconnectorrules"

&cloudconnectorrules.CloudConnectorRulesRules {
	Expression: *string,
	Parameters: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParameters,
	Provider: *string,
	Description: *string,
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRules.property.expression">Expression</a></code> | <code>*string</code> | Criteria for an HTTP request to trigger the cloud connector rule. |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRules.property.parameters">Parameters</a></code> | <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParameters">CloudConnectorRulesRulesParameters</a></code> | parameters block. |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRules.property.provider">Provider</a></code> | <code>*string</code> | Type of provider. Available values: `aws_s3`, `cloudflare_r2`, `azure_storage`, `gcp_storage`. |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRules.property.description">Description</a></code> | <code>*string</code> | Brief summary of the cloud connector rule and its intended use. |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRules.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether the headers rule is active. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRules.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Criteria for an HTTP request to trigger the cloud connector rule.

Uses the Firewall Rules expression language based on Wireshark display filters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/cloud_connector_rules#expression CloudConnectorRules#expression}

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRules.property.parameters"></a>

```go
Parameters CloudConnectorRulesRulesParameters
```

- *Type:* <a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParameters">CloudConnectorRulesRulesParameters</a>

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/cloud_connector_rules#parameters CloudConnectorRules#parameters}

---

##### `Provider`<sup>Required</sup> <a name="Provider" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRules.property.provider"></a>

```go
Provider *string
```

- *Type:* *string

Type of provider. Available values: `aws_s3`, `cloudflare_r2`, `azure_storage`, `gcp_storage`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/cloud_connector_rules#provider CloudConnectorRules#provider}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRules.property.description"></a>

```go
Description *string
```

- *Type:* *string

Brief summary of the cloud connector rule and its intended use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/cloud_connector_rules#description CloudConnectorRules#description}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRules.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether the headers rule is active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/cloud_connector_rules#enabled CloudConnectorRules#enabled}

---

### CloudConnectorRulesRulesParameters <a name="CloudConnectorRulesRulesParameters" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParameters.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/cloudconnectorrules"

&cloudconnectorrules.CloudConnectorRulesRulesParameters {
	Host: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParameters.property.host">Host</a></code> | <code>*string</code> | Host parameter for cloud connector rule. |

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParameters.property.host"></a>

```go
Host *string
```

- *Type:* *string

Host parameter for cloud connector rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/cloud_connector_rules#host CloudConnectorRules#host}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudConnectorRulesRulesList <a name="CloudConnectorRulesRulesList" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/cloudconnectorrules"

cloudconnectorrules.NewCloudConnectorRulesRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudConnectorRulesRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesList.get"></a>

```go
func Get(index *f64) CloudConnectorRulesRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudConnectorRulesRulesOutputReference <a name="CloudConnectorRulesRulesOutputReference" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/cloudconnectorrules"

cloudconnectorrules.NewCloudConnectorRulesRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudConnectorRulesRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.putParameters">PutParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutParameters` <a name="PutParameters" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.putParameters"></a>

```go
func PutParameters(value CloudConnectorRulesRulesParameters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.putParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParameters">CloudConnectorRulesRulesParameters</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.property.parameters">Parameters</a></code> | <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference">CloudConnectorRulesRulesParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.property.parametersInput">ParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.property.providerInput">ProviderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.property.provider">Provider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.property.parameters"></a>

```go
func Parameters() CloudConnectorRulesRulesParametersOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference">CloudConnectorRulesRulesParametersOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.property.parametersInput"></a>

```go
func ParametersInput() interface{}
```

- *Type:* interface{}

---

##### `ProviderInput`<sup>Optional</sup> <a name="ProviderInput" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.property.providerInput"></a>

```go
func ProviderInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Provider`<sup>Required</sup> <a name="Provider" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.property.provider"></a>

```go
func Provider() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudConnectorRulesRulesParametersOutputReference <a name="CloudConnectorRulesRulesParametersOutputReference" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/cloudconnectorrules"

cloudconnectorrules.NewCloudConnectorRulesRulesParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudConnectorRulesRulesParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.property.hostInput">HostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.property.hostInput"></a>

```go
func HostInput() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.cloudConnectorRules.CloudConnectorRulesRulesParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



