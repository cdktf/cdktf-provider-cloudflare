# `workerVersion` Submodule <a name="`workerVersion` Submodule" id="@cdktf/provider-cloudflare.workerVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkerVersion <a name="WorkerVersion" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version cloudflare_worker_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/workerversion"

workerversion.NewWorkerVersion(scope Construct, id *string, config WorkerVersionConfig) WorkerVersion
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig">WorkerVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig">WorkerVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putAnnotations">PutAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putAssets">PutAssets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putBindings">PutBindings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putLimits">PutLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putMigrations">PutMigrations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putModules">PutModules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putPlacement">PutPlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetAssets">ResetAssets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetBindings">ResetBindings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetCompatibilityDate">ResetCompatibilityDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetCompatibilityFlags">ResetCompatibilityFlags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetLimits">ResetLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetMainModule">ResetMainModule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetMigrations">ResetMigrations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetModules">ResetModules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetPlacement">ResetPlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetUsageModel">ResetUsageModel</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAnnotations` <a name="PutAnnotations" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putAnnotations"></a>

```go
func PutAnnotations(value WorkerVersionAnnotations)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putAnnotations.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotations">WorkerVersionAnnotations</a>

---

##### `PutAssets` <a name="PutAssets" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putAssets"></a>

```go
func PutAssets(value WorkerVersionAssets)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putAssets.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssets">WorkerVersionAssets</a>

---

##### `PutBindings` <a name="PutBindings" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putBindings"></a>

```go
func PutBindings(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putBindings.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLimits` <a name="PutLimits" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putLimits"></a>

```go
func PutLimits(value WorkerVersionLimits)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putLimits.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimits">WorkerVersionLimits</a>

---

##### `PutMigrations` <a name="PutMigrations" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putMigrations"></a>

```go
func PutMigrations(value WorkerVersionMigrations)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putMigrations.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations">WorkerVersionMigrations</a>

---

##### `PutModules` <a name="PutModules" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putModules"></a>

```go
func PutModules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putModules.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPlacement` <a name="PutPlacement" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putPlacement"></a>

```go
func PutPlacement(value WorkerVersionPlacement)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putPlacement.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacement">WorkerVersionPlacement</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetAssets` <a name="ResetAssets" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetAssets"></a>

```go
func ResetAssets()
```

##### `ResetBindings` <a name="ResetBindings" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetBindings"></a>

```go
func ResetBindings()
```

##### `ResetCompatibilityDate` <a name="ResetCompatibilityDate" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetCompatibilityDate"></a>

```go
func ResetCompatibilityDate()
```

##### `ResetCompatibilityFlags` <a name="ResetCompatibilityFlags" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetCompatibilityFlags"></a>

```go
func ResetCompatibilityFlags()
```

##### `ResetLimits` <a name="ResetLimits" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetLimits"></a>

```go
func ResetLimits()
```

##### `ResetMainModule` <a name="ResetMainModule" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetMainModule"></a>

```go
func ResetMainModule()
```

##### `ResetMigrations` <a name="ResetMigrations" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetMigrations"></a>

```go
func ResetMigrations()
```

##### `ResetModules` <a name="ResetModules" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetModules"></a>

```go
func ResetModules()
```

##### `ResetPlacement` <a name="ResetPlacement" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetPlacement"></a>

```go
func ResetPlacement()
```

##### `ResetUsageModel` <a name="ResetUsageModel" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetUsageModel"></a>

```go
func ResetUsageModel()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a WorkerVersion resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/workerversion"

workerversion.WorkerVersion_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/workerversion"

workerversion.WorkerVersion_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/workerversion"

workerversion.WorkerVersion_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/workerversion"

workerversion.WorkerVersion_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a WorkerVersion resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the WorkerVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing WorkerVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the WorkerVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.annotations">Annotations</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference">WorkerVersionAnnotationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.assets">Assets</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference">WorkerVersionAssetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.bindings">Bindings</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList">WorkerVersionBindingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.limits">Limits</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference">WorkerVersionLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.migrations">Migrations</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference">WorkerVersionMigrationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.modules">Modules</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList">WorkerVersionModulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.number">Number</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.placement">Placement</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference">WorkerVersionPlacementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.annotationsInput">AnnotationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.assetsInput">AssetsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.bindingsInput">BindingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.compatibilityDateInput">CompatibilityDateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.compatibilityFlagsInput">CompatibilityFlagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.limitsInput">LimitsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.mainModuleInput">MainModuleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.migrationsInput">MigrationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.modulesInput">ModulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.placementInput">PlacementInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.usageModelInput">UsageModelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.workerIdInput">WorkerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.compatibilityDate">CompatibilityDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.compatibilityFlags">CompatibilityFlags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.mainModule">MainModule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.usageModel">UsageModel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.workerId">WorkerId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.annotations"></a>

```go
func Annotations() WorkerVersionAnnotationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference">WorkerVersionAnnotationsOutputReference</a>

---

##### `Assets`<sup>Required</sup> <a name="Assets" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.assets"></a>

```go
func Assets() WorkerVersionAssetsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference">WorkerVersionAssetsOutputReference</a>

---

##### `Bindings`<sup>Required</sup> <a name="Bindings" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.bindings"></a>

```go
func Bindings() WorkerVersionBindingsList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList">WorkerVersionBindingsList</a>

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Limits`<sup>Required</sup> <a name="Limits" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.limits"></a>

```go
func Limits() WorkerVersionLimitsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference">WorkerVersionLimitsOutputReference</a>

---

##### `Migrations`<sup>Required</sup> <a name="Migrations" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.migrations"></a>

```go
func Migrations() WorkerVersionMigrationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference">WorkerVersionMigrationsOutputReference</a>

---

##### `Modules`<sup>Required</sup> <a name="Modules" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.modules"></a>

```go
func Modules() WorkerVersionModulesList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList">WorkerVersionModulesList</a>

---

##### `Number`<sup>Required</sup> <a name="Number" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.number"></a>

```go
func Number() *f64
```

- *Type:* *f64

---

##### `Placement`<sup>Required</sup> <a name="Placement" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.placement"></a>

```go
func Placement() WorkerVersionPlacementOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference">WorkerVersionPlacementOutputReference</a>

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.annotationsInput"></a>

```go
func AnnotationsInput() interface{}
```

- *Type:* interface{}

---

##### `AssetsInput`<sup>Optional</sup> <a name="AssetsInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.assetsInput"></a>

```go
func AssetsInput() interface{}
```

- *Type:* interface{}

---

##### `BindingsInput`<sup>Optional</sup> <a name="BindingsInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.bindingsInput"></a>

```go
func BindingsInput() interface{}
```

- *Type:* interface{}

---

##### `CompatibilityDateInput`<sup>Optional</sup> <a name="CompatibilityDateInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.compatibilityDateInput"></a>

```go
func CompatibilityDateInput() *string
```

- *Type:* *string

---

##### `CompatibilityFlagsInput`<sup>Optional</sup> <a name="CompatibilityFlagsInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.compatibilityFlagsInput"></a>

```go
func CompatibilityFlagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `LimitsInput`<sup>Optional</sup> <a name="LimitsInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.limitsInput"></a>

```go
func LimitsInput() interface{}
```

- *Type:* interface{}

---

##### `MainModuleInput`<sup>Optional</sup> <a name="MainModuleInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.mainModuleInput"></a>

```go
func MainModuleInput() *string
```

- *Type:* *string

---

##### `MigrationsInput`<sup>Optional</sup> <a name="MigrationsInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.migrationsInput"></a>

```go
func MigrationsInput() interface{}
```

- *Type:* interface{}

---

##### `ModulesInput`<sup>Optional</sup> <a name="ModulesInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.modulesInput"></a>

```go
func ModulesInput() interface{}
```

- *Type:* interface{}

---

##### `PlacementInput`<sup>Optional</sup> <a name="PlacementInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.placementInput"></a>

```go
func PlacementInput() interface{}
```

- *Type:* interface{}

---

##### `UsageModelInput`<sup>Optional</sup> <a name="UsageModelInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.usageModelInput"></a>

```go
func UsageModelInput() *string
```

- *Type:* *string

---

##### `WorkerIdInput`<sup>Optional</sup> <a name="WorkerIdInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.workerIdInput"></a>

```go
func WorkerIdInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `CompatibilityDate`<sup>Required</sup> <a name="CompatibilityDate" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.compatibilityDate"></a>

```go
func CompatibilityDate() *string
```

- *Type:* *string

---

##### `CompatibilityFlags`<sup>Required</sup> <a name="CompatibilityFlags" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.compatibilityFlags"></a>

```go
func CompatibilityFlags() *[]*string
```

- *Type:* *[]*string

---

##### `MainModule`<sup>Required</sup> <a name="MainModule" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.mainModule"></a>

```go
func MainModule() *string
```

- *Type:* *string

---

##### `UsageModel`<sup>Required</sup> <a name="UsageModel" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.usageModel"></a>

```go
func UsageModel() *string
```

- *Type:* *string

---

##### `WorkerId`<sup>Required</sup> <a name="WorkerId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.workerId"></a>

```go
func WorkerId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkerVersionAnnotations <a name="WorkerVersionAnnotations" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/workerversion"

&workerversion.WorkerVersionAnnotations {
	WorkersMessage: *string,
	WorkersTag: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotations.property.workersMessage">WorkersMessage</a></code> | <code>*string</code> | Human-readable message about the version. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotations.property.workersTag">WorkersTag</a></code> | <code>*string</code> | User-provided identifier for the version. |

---

##### `WorkersMessage`<sup>Optional</sup> <a name="WorkersMessage" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotations.property.workersMessage"></a>

```go
WorkersMessage *string
```

- *Type:* *string

Human-readable message about the version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#workers_message WorkerVersion#workers_message}

---

##### `WorkersTag`<sup>Optional</sup> <a name="WorkersTag" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotations.property.workersTag"></a>

```go
WorkersTag *string
```

- *Type:* *string

User-provided identifier for the version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#workers_tag WorkerVersion#workers_tag}

---

### WorkerVersionAssets <a name="WorkerVersionAssets" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssets.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/workerversion"

&workerversion.WorkerVersionAssets {
	Config: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13.workerVersion.WorkerVersionAssetsConfig,
	Jwt: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssets.property.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfig">WorkerVersionAssetsConfig</a></code> | Configuration for assets within a Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssets.property.jwt">Jwt</a></code> | <code>*string</code> | Token provided upon successful upload of all files from a registered manifest. |

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssets.property.config"></a>

```go
Config WorkerVersionAssetsConfig
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfig">WorkerVersionAssetsConfig</a>

Configuration for assets within a Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#config WorkerVersion#config}

---

##### `Jwt`<sup>Optional</sup> <a name="Jwt" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssets.property.jwt"></a>

```go
Jwt *string
```

- *Type:* *string

Token provided upon successful upload of all files from a registered manifest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#jwt WorkerVersion#jwt}

---

### WorkerVersionAssetsConfig <a name="WorkerVersionAssetsConfig" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/workerversion"

&workerversion.WorkerVersionAssetsConfig {
	HtmlHandling: *string,
	NotFoundHandling: *string,
	RunWorkerFirst: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfig.property.htmlHandling">HtmlHandling</a></code> | <code>*string</code> | Determines the redirects and rewrites of requests for HTML content. Available values: "auto-trailing-slash", "force-trailing-slash", "drop-trailing-slash", "none". |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfig.property.notFoundHandling">NotFoundHandling</a></code> | <code>*string</code> | Determines the response when a request does not match a static asset, and there is no Worker script. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfig.property.runWorkerFirst">RunWorkerFirst</a></code> | <code>*[]*string</code> | Contains a list path rules to control routing to either the Worker or assets. |

---

##### `HtmlHandling`<sup>Optional</sup> <a name="HtmlHandling" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfig.property.htmlHandling"></a>

```go
HtmlHandling *string
```

- *Type:* *string

Determines the redirects and rewrites of requests for HTML content. Available values: "auto-trailing-slash", "force-trailing-slash", "drop-trailing-slash", "none".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#html_handling WorkerVersion#html_handling}

---

##### `NotFoundHandling`<sup>Optional</sup> <a name="NotFoundHandling" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfig.property.notFoundHandling"></a>

```go
NotFoundHandling *string
```

- *Type:* *string

Determines the response when a request does not match a static asset, and there is no Worker script.

Available values: "none", "404-page", "single-page-application".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#not_found_handling WorkerVersion#not_found_handling}

---

##### `RunWorkerFirst`<sup>Optional</sup> <a name="RunWorkerFirst" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfig.property.runWorkerFirst"></a>

```go
RunWorkerFirst *[]*string
```

- *Type:* *[]*string

Contains a list path rules to control routing to either the Worker or assets.

Glob (*) and negative (!) rules are supported. Rules must start with either '/' or '!/'. At least one non-negative rule must be provided, and negative rules have higher precedence than non-negative rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#run_worker_first WorkerVersion#run_worker_first}

---

### WorkerVersionBindings <a name="WorkerVersionBindings" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/workerversion"

&workerversion.WorkerVersionBindings {
	Name: *string,
	Type: *string,
	Algorithm: *string,
	BucketName: *string,
	CertificateId: *string,
	ClassName: *string,
	Dataset: *string,
	Environment: *string,
	Format: *string,
	Id: *string,
	IndexName: *string,
	Json: *string,
	KeyBase64: *string,
	KeyJwk: *string,
	Namespace: *string,
	NamespaceId: *string,
	Outbound: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13.workerVersion.WorkerVersionBindingsOutbound,
	Pipeline: *string,
	QueueName: *string,
	ScriptName: *string,
	SecretName: *string,
	Service: *string,
	StoreId: *string,
	Text: *string,
	Usages: *[]*string,
	WorkflowName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.name">Name</a></code> | <code>*string</code> | A JavaScript variable name for the binding. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.type">Type</a></code> | <code>*string</code> | The kind of resource that the binding provides. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.algorithm">Algorithm</a></code> | <code>*string</code> | Algorithm-specific key parameters. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#algorithm). |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.bucketName">BucketName</a></code> | <code>*string</code> | R2 bucket to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.certificateId">CertificateId</a></code> | <code>*string</code> | Identifier of the certificate to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.className">ClassName</a></code> | <code>*string</code> | The exported class name of the Durable Object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.dataset">Dataset</a></code> | <code>*string</code> | The name of the dataset to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.environment">Environment</a></code> | <code>*string</code> | The environment of the script_name to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.format">Format</a></code> | <code>*string</code> | Data format of the key. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#format). Available values: "raw", "pkcs8", "spki", "jwk". |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.id">Id</a></code> | <code>*string</code> | Identifier of the D1 database to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.indexName">IndexName</a></code> | <code>*string</code> | Name of the Vectorize index to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.json">Json</a></code> | <code>*string</code> | JSON data to use. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.keyBase64">KeyBase64</a></code> | <code>*string</code> | Base64-encoded key data. Required if `format` is "raw", "pkcs8", or "spki". |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.keyJwk">KeyJwk</a></code> | <code>*string</code> | Key data in [JSON Web Key](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#json_web_key) format. Required if `format` is "jwk". |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.namespace">Namespace</a></code> | <code>*string</code> | Namespace to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.namespaceId">NamespaceId</a></code> | <code>*string</code> | Namespace identifier tag. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.outbound">Outbound</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutbound">WorkerVersionBindingsOutbound</a></code> | Outbound worker. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.pipeline">Pipeline</a></code> | <code>*string</code> | Name of the Pipeline to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.queueName">QueueName</a></code> | <code>*string</code> | Name of the Queue to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.scriptName">ScriptName</a></code> | <code>*string</code> | The script where the Durable Object is defined, if it is external to this Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.secretName">SecretName</a></code> | <code>*string</code> | Name of the secret in the store. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.service">Service</a></code> | <code>*string</code> | Name of Worker to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.storeId">StoreId</a></code> | <code>*string</code> | ID of the store containing the secret. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.text">Text</a></code> | <code>*string</code> | The text value to use. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.usages">Usages</a></code> | <code>*[]*string</code> | Allowed operations with the key. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#keyUsages). |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.workflowName">WorkflowName</a></code> | <code>*string</code> | Name of the Workflow to bind to. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.name"></a>

```go
Name *string
```

- *Type:* *string

A JavaScript variable name for the binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#name WorkerVersion#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.type"></a>

```go
Type *string
```

- *Type:* *string

The kind of resource that the binding provides.

Available values: "ai", "analytics_engine", "assets", "browser", "d1", "dispatch_namespace", "durable_object_namespace", "hyperdrive", "json", "kv_namespace", "mtls_certificate", "plain_text", "pipelines", "queue", "r2_bucket", "secret_text", "service", "tail_consumer", "vectorize", "version_metadata", "secrets_store_secret", "secret_key", "workflow".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#type WorkerVersion#type}

---

##### `Algorithm`<sup>Optional</sup> <a name="Algorithm" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.algorithm"></a>

```go
Algorithm *string
```

- *Type:* *string

Algorithm-specific key parameters. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#algorithm).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#algorithm WorkerVersion#algorithm}

---

##### `BucketName`<sup>Optional</sup> <a name="BucketName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.bucketName"></a>

```go
BucketName *string
```

- *Type:* *string

R2 bucket to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#bucket_name WorkerVersion#bucket_name}

---

##### `CertificateId`<sup>Optional</sup> <a name="CertificateId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.certificateId"></a>

```go
CertificateId *string
```

- *Type:* *string

Identifier of the certificate to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#certificate_id WorkerVersion#certificate_id}

---

##### `ClassName`<sup>Optional</sup> <a name="ClassName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.className"></a>

```go
ClassName *string
```

- *Type:* *string

The exported class name of the Durable Object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#class_name WorkerVersion#class_name}

---

##### `Dataset`<sup>Optional</sup> <a name="Dataset" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.dataset"></a>

```go
Dataset *string
```

- *Type:* *string

The name of the dataset to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#dataset WorkerVersion#dataset}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.environment"></a>

```go
Environment *string
```

- *Type:* *string

The environment of the script_name to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#environment WorkerVersion#environment}

---

##### `Format`<sup>Optional</sup> <a name="Format" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.format"></a>

```go
Format *string
```

- *Type:* *string

Data format of the key. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#format). Available values: "raw", "pkcs8", "spki", "jwk".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#format WorkerVersion#format}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.id"></a>

```go
Id *string
```

- *Type:* *string

Identifier of the D1 database to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#id WorkerVersion#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IndexName`<sup>Optional</sup> <a name="IndexName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.indexName"></a>

```go
IndexName *string
```

- *Type:* *string

Name of the Vectorize index to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#index_name WorkerVersion#index_name}

---

##### `Json`<sup>Optional</sup> <a name="Json" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.json"></a>

```go
Json *string
```

- *Type:* *string

JSON data to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#json WorkerVersion#json}

---

##### `KeyBase64`<sup>Optional</sup> <a name="KeyBase64" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.keyBase64"></a>

```go
KeyBase64 *string
```

- *Type:* *string

Base64-encoded key data. Required if `format` is "raw", "pkcs8", or "spki".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#key_base64 WorkerVersion#key_base64}

---

##### `KeyJwk`<sup>Optional</sup> <a name="KeyJwk" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.keyJwk"></a>

```go
KeyJwk *string
```

- *Type:* *string

Key data in [JSON Web Key](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#json_web_key) format. Required if `format` is "jwk".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#key_jwk WorkerVersion#key_jwk}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Namespace to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#namespace WorkerVersion#namespace}

---

##### `NamespaceId`<sup>Optional</sup> <a name="NamespaceId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.namespaceId"></a>

```go
NamespaceId *string
```

- *Type:* *string

Namespace identifier tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#namespace_id WorkerVersion#namespace_id}

---

##### `Outbound`<sup>Optional</sup> <a name="Outbound" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.outbound"></a>

```go
Outbound WorkerVersionBindingsOutbound
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutbound">WorkerVersionBindingsOutbound</a>

Outbound worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#outbound WorkerVersion#outbound}

---

##### `Pipeline`<sup>Optional</sup> <a name="Pipeline" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.pipeline"></a>

```go
Pipeline *string
```

- *Type:* *string

Name of the Pipeline to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#pipeline WorkerVersion#pipeline}

---

##### `QueueName`<sup>Optional</sup> <a name="QueueName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.queueName"></a>

```go
QueueName *string
```

- *Type:* *string

Name of the Queue to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#queue_name WorkerVersion#queue_name}

---

##### `ScriptName`<sup>Optional</sup> <a name="ScriptName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.scriptName"></a>

```go
ScriptName *string
```

- *Type:* *string

The script where the Durable Object is defined, if it is external to this Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#script_name WorkerVersion#script_name}

---

##### `SecretName`<sup>Optional</sup> <a name="SecretName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.secretName"></a>

```go
SecretName *string
```

- *Type:* *string

Name of the secret in the store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#secret_name WorkerVersion#secret_name}

---

##### `Service`<sup>Optional</sup> <a name="Service" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.service"></a>

```go
Service *string
```

- *Type:* *string

Name of Worker to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#service WorkerVersion#service}

---

##### `StoreId`<sup>Optional</sup> <a name="StoreId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.storeId"></a>

```go
StoreId *string
```

- *Type:* *string

ID of the store containing the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#store_id WorkerVersion#store_id}

---

##### `Text`<sup>Optional</sup> <a name="Text" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.text"></a>

```go
Text *string
```

- *Type:* *string

The text value to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#text WorkerVersion#text}

---

##### `Usages`<sup>Optional</sup> <a name="Usages" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.usages"></a>

```go
Usages *[]*string
```

- *Type:* *[]*string

Allowed operations with the key. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#keyUsages).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#usages WorkerVersion#usages}

---

##### `WorkflowName`<sup>Optional</sup> <a name="WorkflowName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.workflowName"></a>

```go
WorkflowName *string
```

- *Type:* *string

Name of the Workflow to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#workflow_name WorkerVersion#workflow_name}

---

### WorkerVersionBindingsOutbound <a name="WorkerVersionBindingsOutbound" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutbound"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutbound.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/workerversion"

&workerversion.WorkerVersionBindingsOutbound {
	Params: *[]*string,
	Worker: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13.workerVersion.WorkerVersionBindingsOutboundWorker,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutbound.property.params">Params</a></code> | <code>*[]*string</code> | Pass information from the Dispatch Worker to the Outbound Worker through the parameters. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutbound.property.worker">Worker</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorker">WorkerVersionBindingsOutboundWorker</a></code> | Outbound worker. |

---

##### `Params`<sup>Optional</sup> <a name="Params" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutbound.property.params"></a>

```go
Params *[]*string
```

- *Type:* *[]*string

Pass information from the Dispatch Worker to the Outbound Worker through the parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#params WorkerVersion#params}

---

##### `Worker`<sup>Optional</sup> <a name="Worker" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutbound.property.worker"></a>

```go
Worker WorkerVersionBindingsOutboundWorker
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorker">WorkerVersionBindingsOutboundWorker</a>

Outbound worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#worker WorkerVersion#worker}

---

### WorkerVersionBindingsOutboundWorker <a name="WorkerVersionBindingsOutboundWorker" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorker"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorker.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/workerversion"

&workerversion.WorkerVersionBindingsOutboundWorker {
	Environment: *string,
	Service: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorker.property.environment">Environment</a></code> | <code>*string</code> | Environment of the outbound worker. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorker.property.service">Service</a></code> | <code>*string</code> | Name of the outbound worker. |

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorker.property.environment"></a>

```go
Environment *string
```

- *Type:* *string

Environment of the outbound worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#environment WorkerVersion#environment}

---

##### `Service`<sup>Optional</sup> <a name="Service" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorker.property.service"></a>

```go
Service *string
```

- *Type:* *string

Name of the outbound worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#service WorkerVersion#service}

---

### WorkerVersionConfig <a name="WorkerVersionConfig" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/workerversion"

&workerversion.WorkerVersionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	WorkerId: *string,
	Annotations: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13.workerVersion.WorkerVersionAnnotations,
	Assets: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13.workerVersion.WorkerVersionAssets,
	Bindings: interface{},
	CompatibilityDate: *string,
	CompatibilityFlags: *[]*string,
	Limits: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13.workerVersion.WorkerVersionLimits,
	MainModule: *string,
	Migrations: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13.workerVersion.WorkerVersionMigrations,
	Modules: interface{},
	Placement: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13.workerVersion.WorkerVersionPlacement,
	UsageModel: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.workerId">WorkerId</a></code> | <code>*string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.annotations">Annotations</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotations">WorkerVersionAnnotations</a></code> | Metadata about the version. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.assets">Assets</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssets">WorkerVersionAssets</a></code> | Configuration for assets within a Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.bindings">Bindings</a></code> | <code>interface{}</code> | List of bindings attached to a Worker. You can find more about bindings on our docs: https://developers.cloudflare.com/workers/configuration/multipart-upload-metadata/#bindings. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.compatibilityDate">CompatibilityDate</a></code> | <code>*string</code> | Date indicating targeted support in the Workers runtime. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.compatibilityFlags">CompatibilityFlags</a></code> | <code>*[]*string</code> | Flags that enable or disable certain features in the Workers runtime. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.limits">Limits</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimits">WorkerVersionLimits</a></code> | Resource limits enforced at runtime. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.mainModule">MainModule</a></code> | <code>*string</code> | The name of the main module in the `modules` array (e.g. the name of the module that exports a `fetch` handler). |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.migrations">Migrations</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations">WorkerVersionMigrations</a></code> | Migrations for Durable Objects associated with the version. Migrations are applied when the version is deployed. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.modules">Modules</a></code> | <code>interface{}</code> | Code, sourcemaps, and other content used at runtime. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.placement">Placement</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacement">WorkerVersionPlacement</a></code> | Placement settings for the version. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.usageModel">UsageModel</a></code> | <code>*string</code> | Usage model for the version. Available values: "standard", "bundled", "unbound". |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#account_id WorkerVersion#account_id}

---

##### `WorkerId`<sup>Required</sup> <a name="WorkerId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.workerId"></a>

```go
WorkerId *string
```

- *Type:* *string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#worker_id WorkerVersion#worker_id}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.annotations"></a>

```go
Annotations WorkerVersionAnnotations
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotations">WorkerVersionAnnotations</a>

Metadata about the version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#annotations WorkerVersion#annotations}

---

##### `Assets`<sup>Optional</sup> <a name="Assets" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.assets"></a>

```go
Assets WorkerVersionAssets
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssets">WorkerVersionAssets</a>

Configuration for assets within a Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#assets WorkerVersion#assets}

---

##### `Bindings`<sup>Optional</sup> <a name="Bindings" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.bindings"></a>

```go
Bindings interface{}
```

- *Type:* interface{}

List of bindings attached to a Worker. You can find more about bindings on our docs: https://developers.cloudflare.com/workers/configuration/multipart-upload-metadata/#bindings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#bindings WorkerVersion#bindings}

---

##### `CompatibilityDate`<sup>Optional</sup> <a name="CompatibilityDate" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.compatibilityDate"></a>

```go
CompatibilityDate *string
```

- *Type:* *string

Date indicating targeted support in the Workers runtime.

Backwards incompatible fixes to the runtime following this date will not affect this Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#compatibility_date WorkerVersion#compatibility_date}

---

##### `CompatibilityFlags`<sup>Optional</sup> <a name="CompatibilityFlags" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.compatibilityFlags"></a>

```go
CompatibilityFlags *[]*string
```

- *Type:* *[]*string

Flags that enable or disable certain features in the Workers runtime.

Used to enable upcoming features or opt in or out of specific changes not included in a `compatibility_date`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#compatibility_flags WorkerVersion#compatibility_flags}

---

##### `Limits`<sup>Optional</sup> <a name="Limits" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.limits"></a>

```go
Limits WorkerVersionLimits
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimits">WorkerVersionLimits</a>

Resource limits enforced at runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#limits WorkerVersion#limits}

---

##### `MainModule`<sup>Optional</sup> <a name="MainModule" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.mainModule"></a>

```go
MainModule *string
```

- *Type:* *string

The name of the main module in the `modules` array (e.g. the name of the module that exports a `fetch` handler).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#main_module WorkerVersion#main_module}

---

##### `Migrations`<sup>Optional</sup> <a name="Migrations" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.migrations"></a>

```go
Migrations WorkerVersionMigrations
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations">WorkerVersionMigrations</a>

Migrations for Durable Objects associated with the version. Migrations are applied when the version is deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#migrations WorkerVersion#migrations}

---

##### `Modules`<sup>Optional</sup> <a name="Modules" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.modules"></a>

```go
Modules interface{}
```

- *Type:* interface{}

Code, sourcemaps, and other content used at runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#modules WorkerVersion#modules}

---

##### `Placement`<sup>Optional</sup> <a name="Placement" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.placement"></a>

```go
Placement WorkerVersionPlacement
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacement">WorkerVersionPlacement</a>

Placement settings for the version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#placement WorkerVersion#placement}

---

##### `UsageModel`<sup>Optional</sup> <a name="UsageModel" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.usageModel"></a>

```go
UsageModel *string
```

- *Type:* *string

Usage model for the version. Available values: "standard", "bundled", "unbound".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#usage_model WorkerVersion#usage_model}

---

### WorkerVersionLimits <a name="WorkerVersionLimits" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimits.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/workerversion"

&workerversion.WorkerVersionLimits {
	CpuMs: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimits.property.cpuMs">CpuMs</a></code> | <code>*f64</code> | CPU time limit in milliseconds. |

---

##### `CpuMs`<sup>Required</sup> <a name="CpuMs" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimits.property.cpuMs"></a>

```go
CpuMs *f64
```

- *Type:* *f64

CPU time limit in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#cpu_ms WorkerVersion#cpu_ms}

---

### WorkerVersionMigrations <a name="WorkerVersionMigrations" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/workerversion"

&workerversion.WorkerVersionMigrations {
	DeletedClasses: *[]*string,
	NewClasses: *[]*string,
	NewSqliteClasses: *[]*string,
	NewTag: *string,
	OldTag: *string,
	RenamedClasses: interface{},
	Steps: interface{},
	TransferredClasses: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations.property.deletedClasses">DeletedClasses</a></code> | <code>*[]*string</code> | A list of classes to delete Durable Object namespaces from. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations.property.newClasses">NewClasses</a></code> | <code>*[]*string</code> | A list of classes to create Durable Object namespaces from. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations.property.newSqliteClasses">NewSqliteClasses</a></code> | <code>*[]*string</code> | A list of classes to create Durable Object namespaces with SQLite from. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations.property.newTag">NewTag</a></code> | <code>*string</code> | Tag to set as the latest migration tag. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations.property.oldTag">OldTag</a></code> | <code>*string</code> | Tag used to verify against the latest migration tag for this Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations.property.renamedClasses">RenamedClasses</a></code> | <code>interface{}</code> | A list of classes with Durable Object namespaces that were renamed. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations.property.steps">Steps</a></code> | <code>interface{}</code> | Migrations to apply in order. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations.property.transferredClasses">TransferredClasses</a></code> | <code>interface{}</code> | A list of transfers for Durable Object namespaces from a different Worker and class to a class defined in this Worker. |

---

##### `DeletedClasses`<sup>Optional</sup> <a name="DeletedClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations.property.deletedClasses"></a>

```go
DeletedClasses *[]*string
```

- *Type:* *[]*string

A list of classes to delete Durable Object namespaces from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#deleted_classes WorkerVersion#deleted_classes}

---

##### `NewClasses`<sup>Optional</sup> <a name="NewClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations.property.newClasses"></a>

```go
NewClasses *[]*string
```

- *Type:* *[]*string

A list of classes to create Durable Object namespaces from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#new_classes WorkerVersion#new_classes}

---

##### `NewSqliteClasses`<sup>Optional</sup> <a name="NewSqliteClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations.property.newSqliteClasses"></a>

```go
NewSqliteClasses *[]*string
```

- *Type:* *[]*string

A list of classes to create Durable Object namespaces with SQLite from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#new_sqlite_classes WorkerVersion#new_sqlite_classes}

---

##### `NewTag`<sup>Optional</sup> <a name="NewTag" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations.property.newTag"></a>

```go
NewTag *string
```

- *Type:* *string

Tag to set as the latest migration tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#new_tag WorkerVersion#new_tag}

---

##### `OldTag`<sup>Optional</sup> <a name="OldTag" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations.property.oldTag"></a>

```go
OldTag *string
```

- *Type:* *string

Tag used to verify against the latest migration tag for this Worker.

If they don't match, the upload is rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#old_tag WorkerVersion#old_tag}

---

##### `RenamedClasses`<sup>Optional</sup> <a name="RenamedClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations.property.renamedClasses"></a>

```go
RenamedClasses interface{}
```

- *Type:* interface{}

A list of classes with Durable Object namespaces that were renamed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#renamed_classes WorkerVersion#renamed_classes}

---

##### `Steps`<sup>Optional</sup> <a name="Steps" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations.property.steps"></a>

```go
Steps interface{}
```

- *Type:* interface{}

Migrations to apply in order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#steps WorkerVersion#steps}

---

##### `TransferredClasses`<sup>Optional</sup> <a name="TransferredClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations.property.transferredClasses"></a>

```go
TransferredClasses interface{}
```

- *Type:* interface{}

A list of transfers for Durable Object namespaces from a different Worker and class to a class defined in this Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#transferred_classes WorkerVersion#transferred_classes}

---

### WorkerVersionMigrationsRenamedClasses <a name="WorkerVersionMigrationsRenamedClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClasses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClasses.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/workerversion"

&workerversion.WorkerVersionMigrationsRenamedClasses {
	From: *string,
	To: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClasses.property.from">From</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#from WorkerVersion#from}. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClasses.property.to">To</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#to WorkerVersion#to}. |

---

##### `From`<sup>Optional</sup> <a name="From" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClasses.property.from"></a>

```go
From *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#from WorkerVersion#from}.

---

##### `To`<sup>Optional</sup> <a name="To" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClasses.property.to"></a>

```go
To *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#to WorkerVersion#to}.

---

### WorkerVersionMigrationsSteps <a name="WorkerVersionMigrationsSteps" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/workerversion"

&workerversion.WorkerVersionMigrationsSteps {
	DeletedClasses: *[]*string,
	NewClasses: *[]*string,
	NewSqliteClasses: *[]*string,
	RenamedClasses: interface{},
	TransferredClasses: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps.property.deletedClasses">DeletedClasses</a></code> | <code>*[]*string</code> | A list of classes to delete Durable Object namespaces from. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps.property.newClasses">NewClasses</a></code> | <code>*[]*string</code> | A list of classes to create Durable Object namespaces from. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps.property.newSqliteClasses">NewSqliteClasses</a></code> | <code>*[]*string</code> | A list of classes to create Durable Object namespaces with SQLite from. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps.property.renamedClasses">RenamedClasses</a></code> | <code>interface{}</code> | A list of classes with Durable Object namespaces that were renamed. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps.property.transferredClasses">TransferredClasses</a></code> | <code>interface{}</code> | A list of transfers for Durable Object namespaces from a different Worker and class to a class defined in this Worker. |

---

##### `DeletedClasses`<sup>Optional</sup> <a name="DeletedClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps.property.deletedClasses"></a>

```go
DeletedClasses *[]*string
```

- *Type:* *[]*string

A list of classes to delete Durable Object namespaces from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#deleted_classes WorkerVersion#deleted_classes}

---

##### `NewClasses`<sup>Optional</sup> <a name="NewClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps.property.newClasses"></a>

```go
NewClasses *[]*string
```

- *Type:* *[]*string

A list of classes to create Durable Object namespaces from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#new_classes WorkerVersion#new_classes}

---

##### `NewSqliteClasses`<sup>Optional</sup> <a name="NewSqliteClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps.property.newSqliteClasses"></a>

```go
NewSqliteClasses *[]*string
```

- *Type:* *[]*string

A list of classes to create Durable Object namespaces with SQLite from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#new_sqlite_classes WorkerVersion#new_sqlite_classes}

---

##### `RenamedClasses`<sup>Optional</sup> <a name="RenamedClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps.property.renamedClasses"></a>

```go
RenamedClasses interface{}
```

- *Type:* interface{}

A list of classes with Durable Object namespaces that were renamed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#renamed_classes WorkerVersion#renamed_classes}

---

##### `TransferredClasses`<sup>Optional</sup> <a name="TransferredClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps.property.transferredClasses"></a>

```go
TransferredClasses interface{}
```

- *Type:* interface{}

A list of transfers for Durable Object namespaces from a different Worker and class to a class defined in this Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#transferred_classes WorkerVersion#transferred_classes}

---

### WorkerVersionMigrationsStepsRenamedClasses <a name="WorkerVersionMigrationsStepsRenamedClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClasses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClasses.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/workerversion"

&workerversion.WorkerVersionMigrationsStepsRenamedClasses {
	From: *string,
	To: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClasses.property.from">From</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#from WorkerVersion#from}. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClasses.property.to">To</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#to WorkerVersion#to}. |

---

##### `From`<sup>Optional</sup> <a name="From" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClasses.property.from"></a>

```go
From *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#from WorkerVersion#from}.

---

##### `To`<sup>Optional</sup> <a name="To" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClasses.property.to"></a>

```go
To *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#to WorkerVersion#to}.

---

### WorkerVersionMigrationsStepsTransferredClasses <a name="WorkerVersionMigrationsStepsTransferredClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClasses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClasses.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/workerversion"

&workerversion.WorkerVersionMigrationsStepsTransferredClasses {
	From: *string,
	FromScript: *string,
	To: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClasses.property.from">From</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#from WorkerVersion#from}. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClasses.property.fromScript">FromScript</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#from_script WorkerVersion#from_script}. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClasses.property.to">To</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#to WorkerVersion#to}. |

---

##### `From`<sup>Optional</sup> <a name="From" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClasses.property.from"></a>

```go
From *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#from WorkerVersion#from}.

---

##### `FromScript`<sup>Optional</sup> <a name="FromScript" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClasses.property.fromScript"></a>

```go
FromScript *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#from_script WorkerVersion#from_script}.

---

##### `To`<sup>Optional</sup> <a name="To" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClasses.property.to"></a>

```go
To *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#to WorkerVersion#to}.

---

### WorkerVersionMigrationsTransferredClasses <a name="WorkerVersionMigrationsTransferredClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClasses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClasses.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/workerversion"

&workerversion.WorkerVersionMigrationsTransferredClasses {
	From: *string,
	FromScript: *string,
	To: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClasses.property.from">From</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#from WorkerVersion#from}. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClasses.property.fromScript">FromScript</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#from_script WorkerVersion#from_script}. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClasses.property.to">To</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#to WorkerVersion#to}. |

---

##### `From`<sup>Optional</sup> <a name="From" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClasses.property.from"></a>

```go
From *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#from WorkerVersion#from}.

---

##### `FromScript`<sup>Optional</sup> <a name="FromScript" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClasses.property.fromScript"></a>

```go
FromScript *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#from_script WorkerVersion#from_script}.

---

##### `To`<sup>Optional</sup> <a name="To" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClasses.property.to"></a>

```go
To *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#to WorkerVersion#to}.

---

### WorkerVersionModules <a name="WorkerVersionModules" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/workerversion"

&workerversion.WorkerVersionModules {
	ContentFile: *string,
	ContentType: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModules.property.contentFile">ContentFile</a></code> | <code>*string</code> | The file path of the module content. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModules.property.contentType">ContentType</a></code> | <code>*string</code> | The content type of the module. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModules.property.name">Name</a></code> | <code>*string</code> | The name of the module. |

---

##### `ContentFile`<sup>Required</sup> <a name="ContentFile" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModules.property.contentFile"></a>

```go
ContentFile *string
```

- *Type:* *string

The file path of the module content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#content_file WorkerVersion#content_file}

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModules.property.contentType"></a>

```go
ContentType *string
```

- *Type:* *string

The content type of the module.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#content_type WorkerVersion#content_type}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModules.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the module.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#name WorkerVersion#name}

---

### WorkerVersionPlacement <a name="WorkerVersionPlacement" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacement.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/workerversion"

&workerversion.WorkerVersionPlacement {
	Mode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacement.property.mode">Mode</a></code> | <code>*string</code> | Placement mode for the version. Available values: "smart". |

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacement.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

Placement mode for the version. Available values: "smart".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#mode WorkerVersion#mode}

---

## Classes <a name="Classes" id="Classes"></a>

### WorkerVersionAnnotationsOutputReference <a name="WorkerVersionAnnotationsOutputReference" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/workerversion"

workerversion.NewWorkerVersionAnnotationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkerVersionAnnotationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.resetWorkersMessage">ResetWorkersMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.resetWorkersTag">ResetWorkersTag</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkersMessage` <a name="ResetWorkersMessage" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.resetWorkersMessage"></a>

```go
func ResetWorkersMessage()
```

##### `ResetWorkersTag` <a name="ResetWorkersTag" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.resetWorkersTag"></a>

```go
func ResetWorkersTag()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.property.workersTriggeredBy">WorkersTriggeredBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.property.workersMessageInput">WorkersMessageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.property.workersTagInput">WorkersTagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.property.workersMessage">WorkersMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.property.workersTag">WorkersTag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkersTriggeredBy`<sup>Required</sup> <a name="WorkersTriggeredBy" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.property.workersTriggeredBy"></a>

```go
func WorkersTriggeredBy() *string
```

- *Type:* *string

---

##### `WorkersMessageInput`<sup>Optional</sup> <a name="WorkersMessageInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.property.workersMessageInput"></a>

```go
func WorkersMessageInput() *string
```

- *Type:* *string

---

##### `WorkersTagInput`<sup>Optional</sup> <a name="WorkersTagInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.property.workersTagInput"></a>

```go
func WorkersTagInput() *string
```

- *Type:* *string

---

##### `WorkersMessage`<sup>Required</sup> <a name="WorkersMessage" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.property.workersMessage"></a>

```go
func WorkersMessage() *string
```

- *Type:* *string

---

##### `WorkersTag`<sup>Required</sup> <a name="WorkersTag" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.property.workersTag"></a>

```go
func WorkersTag() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkerVersionAssetsConfigOutputReference <a name="WorkerVersionAssetsConfigOutputReference" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/workerversion"

workerversion.NewWorkerVersionAssetsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkerVersionAssetsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.resetHtmlHandling">ResetHtmlHandling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.resetNotFoundHandling">ResetNotFoundHandling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.resetRunWorkerFirst">ResetRunWorkerFirst</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHtmlHandling` <a name="ResetHtmlHandling" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.resetHtmlHandling"></a>

```go
func ResetHtmlHandling()
```

##### `ResetNotFoundHandling` <a name="ResetNotFoundHandling" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.resetNotFoundHandling"></a>

```go
func ResetNotFoundHandling()
```

##### `ResetRunWorkerFirst` <a name="ResetRunWorkerFirst" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.resetRunWorkerFirst"></a>

```go
func ResetRunWorkerFirst()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.htmlHandlingInput">HtmlHandlingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.notFoundHandlingInput">NotFoundHandlingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.runWorkerFirstInput">RunWorkerFirstInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.htmlHandling">HtmlHandling</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.notFoundHandling">NotFoundHandling</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.runWorkerFirst">RunWorkerFirst</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HtmlHandlingInput`<sup>Optional</sup> <a name="HtmlHandlingInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.htmlHandlingInput"></a>

```go
func HtmlHandlingInput() *string
```

- *Type:* *string

---

##### `NotFoundHandlingInput`<sup>Optional</sup> <a name="NotFoundHandlingInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.notFoundHandlingInput"></a>

```go
func NotFoundHandlingInput() *string
```

- *Type:* *string

---

##### `RunWorkerFirstInput`<sup>Optional</sup> <a name="RunWorkerFirstInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.runWorkerFirstInput"></a>

```go
func RunWorkerFirstInput() *[]*string
```

- *Type:* *[]*string

---

##### `HtmlHandling`<sup>Required</sup> <a name="HtmlHandling" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.htmlHandling"></a>

```go
func HtmlHandling() *string
```

- *Type:* *string

---

##### `NotFoundHandling`<sup>Required</sup> <a name="NotFoundHandling" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.notFoundHandling"></a>

```go
func NotFoundHandling() *string
```

- *Type:* *string

---

##### `RunWorkerFirst`<sup>Required</sup> <a name="RunWorkerFirst" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.runWorkerFirst"></a>

```go
func RunWorkerFirst() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkerVersionAssetsOutputReference <a name="WorkerVersionAssetsOutputReference" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/workerversion"

workerversion.NewWorkerVersionAssetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkerVersionAssetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.resetConfig">ResetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.resetJwt">ResetJwt</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConfig` <a name="PutConfig" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.putConfig"></a>

```go
func PutConfig(value WorkerVersionAssetsConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfig">WorkerVersionAssetsConfig</a>

---

##### `ResetConfig` <a name="ResetConfig" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.resetConfig"></a>

```go
func ResetConfig()
```

##### `ResetJwt` <a name="ResetJwt" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.resetJwt"></a>

```go
func ResetJwt()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.property.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference">WorkerVersionAssetsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.property.configInput">ConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.property.jwtInput">JwtInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.property.jwt">Jwt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.property.config"></a>

```go
func Config() WorkerVersionAssetsConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference">WorkerVersionAssetsConfigOutputReference</a>

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.property.configInput"></a>

```go
func ConfigInput() interface{}
```

- *Type:* interface{}

---

##### `JwtInput`<sup>Optional</sup> <a name="JwtInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.property.jwtInput"></a>

```go
func JwtInput() *string
```

- *Type:* *string

---

##### `Jwt`<sup>Required</sup> <a name="Jwt" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.property.jwt"></a>

```go
func Jwt() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkerVersionBindingsList <a name="WorkerVersionBindingsList" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/workerversion"

workerversion.NewWorkerVersionBindingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WorkerVersionBindingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.get"></a>

```go
func Get(index *f64) WorkerVersionBindingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkerVersionBindingsOutboundOutputReference <a name="WorkerVersionBindingsOutboundOutputReference" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/workerversion"

workerversion.NewWorkerVersionBindingsOutboundOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkerVersionBindingsOutboundOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.putWorker">PutWorker</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.resetParams">ResetParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.resetWorker">ResetWorker</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutWorker` <a name="PutWorker" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.putWorker"></a>

```go
func PutWorker(value WorkerVersionBindingsOutboundWorker)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.putWorker.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorker">WorkerVersionBindingsOutboundWorker</a>

---

##### `ResetParams` <a name="ResetParams" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.resetParams"></a>

```go
func ResetParams()
```

##### `ResetWorker` <a name="ResetWorker" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.resetWorker"></a>

```go
func ResetWorker()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.property.worker">Worker</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference">WorkerVersionBindingsOutboundWorkerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.property.paramsInput">ParamsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.property.workerInput">WorkerInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.property.params">Params</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Worker`<sup>Required</sup> <a name="Worker" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.property.worker"></a>

```go
func Worker() WorkerVersionBindingsOutboundWorkerOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference">WorkerVersionBindingsOutboundWorkerOutputReference</a>

---

##### `ParamsInput`<sup>Optional</sup> <a name="ParamsInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.property.paramsInput"></a>

```go
func ParamsInput() *[]*string
```

- *Type:* *[]*string

---

##### `WorkerInput`<sup>Optional</sup> <a name="WorkerInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.property.workerInput"></a>

```go
func WorkerInput() interface{}
```

- *Type:* interface{}

---

##### `Params`<sup>Required</sup> <a name="Params" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.property.params"></a>

```go
func Params() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkerVersionBindingsOutboundWorkerOutputReference <a name="WorkerVersionBindingsOutboundWorkerOutputReference" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/workerversion"

workerversion.NewWorkerVersionBindingsOutboundWorkerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkerVersionBindingsOutboundWorkerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.resetService">ResetService</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.resetEnvironment"></a>

```go
func ResetEnvironment()
```

##### `ResetService` <a name="ResetService" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.resetService"></a>

```go
func ResetService()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.property.environmentInput">EnvironmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.property.environment">Environment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.property.environmentInput"></a>

```go
func EnvironmentInput() *string
```

- *Type:* *string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.property.environment"></a>

```go
func Environment() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkerVersionBindingsOutputReference <a name="WorkerVersionBindingsOutputReference" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/workerversion"

workerversion.NewWorkerVersionBindingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WorkerVersionBindingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.putOutbound">PutOutbound</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetAlgorithm">ResetAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetBucketName">ResetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetCertificateId">ResetCertificateId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetClassName">ResetClassName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetDataset">ResetDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetFormat">ResetFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetIndexName">ResetIndexName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetJson">ResetJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetKeyBase64">ResetKeyBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetKeyJwk">ResetKeyJwk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetNamespaceId">ResetNamespaceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetOutbound">ResetOutbound</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetPipeline">ResetPipeline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetQueueName">ResetQueueName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetScriptName">ResetScriptName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetSecretName">ResetSecretName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetService">ResetService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetStoreId">ResetStoreId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetText">ResetText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetUsages">ResetUsages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetWorkflowName">ResetWorkflowName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOutbound` <a name="PutOutbound" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.putOutbound"></a>

```go
func PutOutbound(value WorkerVersionBindingsOutbound)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.putOutbound.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutbound">WorkerVersionBindingsOutbound</a>

---

##### `ResetAlgorithm` <a name="ResetAlgorithm" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetAlgorithm"></a>

```go
func ResetAlgorithm()
```

##### `ResetBucketName` <a name="ResetBucketName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetBucketName"></a>

```go
func ResetBucketName()
```

##### `ResetCertificateId` <a name="ResetCertificateId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetCertificateId"></a>

```go
func ResetCertificateId()
```

##### `ResetClassName` <a name="ResetClassName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetClassName"></a>

```go
func ResetClassName()
```

##### `ResetDataset` <a name="ResetDataset" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetDataset"></a>

```go
func ResetDataset()
```

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetEnvironment"></a>

```go
func ResetEnvironment()
```

##### `ResetFormat` <a name="ResetFormat" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetFormat"></a>

```go
func ResetFormat()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetIndexName` <a name="ResetIndexName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetIndexName"></a>

```go
func ResetIndexName()
```

##### `ResetJson` <a name="ResetJson" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetJson"></a>

```go
func ResetJson()
```

##### `ResetKeyBase64` <a name="ResetKeyBase64" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetKeyBase64"></a>

```go
func ResetKeyBase64()
```

##### `ResetKeyJwk` <a name="ResetKeyJwk" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetKeyJwk"></a>

```go
func ResetKeyJwk()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetNamespaceId` <a name="ResetNamespaceId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetNamespaceId"></a>

```go
func ResetNamespaceId()
```

##### `ResetOutbound` <a name="ResetOutbound" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetOutbound"></a>

```go
func ResetOutbound()
```

##### `ResetPipeline` <a name="ResetPipeline" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetPipeline"></a>

```go
func ResetPipeline()
```

##### `ResetQueueName` <a name="ResetQueueName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetQueueName"></a>

```go
func ResetQueueName()
```

##### `ResetScriptName` <a name="ResetScriptName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetScriptName"></a>

```go
func ResetScriptName()
```

##### `ResetSecretName` <a name="ResetSecretName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetSecretName"></a>

```go
func ResetSecretName()
```

##### `ResetService` <a name="ResetService" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetService"></a>

```go
func ResetService()
```

##### `ResetStoreId` <a name="ResetStoreId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetStoreId"></a>

```go
func ResetStoreId()
```

##### `ResetText` <a name="ResetText" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetText"></a>

```go
func ResetText()
```

##### `ResetUsages` <a name="ResetUsages" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetUsages"></a>

```go
func ResetUsages()
```

##### `ResetWorkflowName` <a name="ResetWorkflowName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetWorkflowName"></a>

```go
func ResetWorkflowName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.outbound">Outbound</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference">WorkerVersionBindingsOutboundOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.algorithmInput">AlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.certificateIdInput">CertificateIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.classNameInput">ClassNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.datasetInput">DatasetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.environmentInput">EnvironmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.formatInput">FormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.indexNameInput">IndexNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.jsonInput">JsonInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.keyBase64Input">KeyBase64Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.keyJwkInput">KeyJwkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.namespaceIdInput">NamespaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.outboundInput">OutboundInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.pipelineInput">PipelineInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.queueNameInput">QueueNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.scriptNameInput">ScriptNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.secretNameInput">SecretNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.storeIdInput">StoreIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.textInput">TextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.usagesInput">UsagesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.workflowNameInput">WorkflowNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.algorithm">Algorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.certificateId">CertificateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.className">ClassName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.dataset">Dataset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.environment">Environment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.format">Format</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.indexName">IndexName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.json">Json</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.keyBase64">KeyBase64</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.keyJwk">KeyJwk</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.namespaceId">NamespaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.pipeline">Pipeline</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.queueName">QueueName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.scriptName">ScriptName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.secretName">SecretName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.storeId">StoreId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.text">Text</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.usages">Usages</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.workflowName">WorkflowName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Outbound`<sup>Required</sup> <a name="Outbound" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.outbound"></a>

```go
func Outbound() WorkerVersionBindingsOutboundOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference">WorkerVersionBindingsOutboundOutputReference</a>

---

##### `AlgorithmInput`<sup>Optional</sup> <a name="AlgorithmInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.algorithmInput"></a>

```go
func AlgorithmInput() *string
```

- *Type:* *string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.bucketNameInput"></a>

```go
func BucketNameInput() *string
```

- *Type:* *string

---

##### `CertificateIdInput`<sup>Optional</sup> <a name="CertificateIdInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.certificateIdInput"></a>

```go
func CertificateIdInput() *string
```

- *Type:* *string

---

##### `ClassNameInput`<sup>Optional</sup> <a name="ClassNameInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.classNameInput"></a>

```go
func ClassNameInput() *string
```

- *Type:* *string

---

##### `DatasetInput`<sup>Optional</sup> <a name="DatasetInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.datasetInput"></a>

```go
func DatasetInput() *string
```

- *Type:* *string

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.environmentInput"></a>

```go
func EnvironmentInput() *string
```

- *Type:* *string

---

##### `FormatInput`<sup>Optional</sup> <a name="FormatInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.formatInput"></a>

```go
func FormatInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IndexNameInput`<sup>Optional</sup> <a name="IndexNameInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.indexNameInput"></a>

```go
func IndexNameInput() *string
```

- *Type:* *string

---

##### `JsonInput`<sup>Optional</sup> <a name="JsonInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.jsonInput"></a>

```go
func JsonInput() *string
```

- *Type:* *string

---

##### `KeyBase64Input`<sup>Optional</sup> <a name="KeyBase64Input" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.keyBase64Input"></a>

```go
func KeyBase64Input() *string
```

- *Type:* *string

---

##### `KeyJwkInput`<sup>Optional</sup> <a name="KeyJwkInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.keyJwkInput"></a>

```go
func KeyJwkInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceIdInput`<sup>Optional</sup> <a name="NamespaceIdInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.namespaceIdInput"></a>

```go
func NamespaceIdInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `OutboundInput`<sup>Optional</sup> <a name="OutboundInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.outboundInput"></a>

```go
func OutboundInput() interface{}
```

- *Type:* interface{}

---

##### `PipelineInput`<sup>Optional</sup> <a name="PipelineInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.pipelineInput"></a>

```go
func PipelineInput() *string
```

- *Type:* *string

---

##### `QueueNameInput`<sup>Optional</sup> <a name="QueueNameInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.queueNameInput"></a>

```go
func QueueNameInput() *string
```

- *Type:* *string

---

##### `ScriptNameInput`<sup>Optional</sup> <a name="ScriptNameInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.scriptNameInput"></a>

```go
func ScriptNameInput() *string
```

- *Type:* *string

---

##### `SecretNameInput`<sup>Optional</sup> <a name="SecretNameInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.secretNameInput"></a>

```go
func SecretNameInput() *string
```

- *Type:* *string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `StoreIdInput`<sup>Optional</sup> <a name="StoreIdInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.storeIdInput"></a>

```go
func StoreIdInput() *string
```

- *Type:* *string

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.textInput"></a>

```go
func TextInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `UsagesInput`<sup>Optional</sup> <a name="UsagesInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.usagesInput"></a>

```go
func UsagesInput() *[]*string
```

- *Type:* *[]*string

---

##### `WorkflowNameInput`<sup>Optional</sup> <a name="WorkflowNameInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.workflowNameInput"></a>

```go
func WorkflowNameInput() *string
```

- *Type:* *string

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.algorithm"></a>

```go
func Algorithm() *string
```

- *Type:* *string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `CertificateId`<sup>Required</sup> <a name="CertificateId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.certificateId"></a>

```go
func CertificateId() *string
```

- *Type:* *string

---

##### `ClassName`<sup>Required</sup> <a name="ClassName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.className"></a>

```go
func ClassName() *string
```

- *Type:* *string

---

##### `Dataset`<sup>Required</sup> <a name="Dataset" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.dataset"></a>

```go
func Dataset() *string
```

- *Type:* *string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.environment"></a>

```go
func Environment() *string
```

- *Type:* *string

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.format"></a>

```go
func Format() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IndexName`<sup>Required</sup> <a name="IndexName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.indexName"></a>

```go
func IndexName() *string
```

- *Type:* *string

---

##### `Json`<sup>Required</sup> <a name="Json" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.json"></a>

```go
func Json() *string
```

- *Type:* *string

---

##### `KeyBase64`<sup>Required</sup> <a name="KeyBase64" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.keyBase64"></a>

```go
func KeyBase64() *string
```

- *Type:* *string

---

##### `KeyJwk`<sup>Required</sup> <a name="KeyJwk" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.keyJwk"></a>

```go
func KeyJwk() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `NamespaceId`<sup>Required</sup> <a name="NamespaceId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.namespaceId"></a>

```go
func NamespaceId() *string
```

- *Type:* *string

---

##### `Pipeline`<sup>Required</sup> <a name="Pipeline" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.pipeline"></a>

```go
func Pipeline() *string
```

- *Type:* *string

---

##### `QueueName`<sup>Required</sup> <a name="QueueName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.queueName"></a>

```go
func QueueName() *string
```

- *Type:* *string

---

##### `ScriptName`<sup>Required</sup> <a name="ScriptName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.scriptName"></a>

```go
func ScriptName() *string
```

- *Type:* *string

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.secretName"></a>

```go
func SecretName() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `StoreId`<sup>Required</sup> <a name="StoreId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.storeId"></a>

```go
func StoreId() *string
```

- *Type:* *string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.text"></a>

```go
func Text() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Usages`<sup>Required</sup> <a name="Usages" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.usages"></a>

```go
func Usages() *[]*string
```

- *Type:* *[]*string

---

##### `WorkflowName`<sup>Required</sup> <a name="WorkflowName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.workflowName"></a>

```go
func WorkflowName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkerVersionLimitsOutputReference <a name="WorkerVersionLimitsOutputReference" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/workerversion"

workerversion.NewWorkerVersionLimitsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkerVersionLimitsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.property.cpuMsInput">CpuMsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.property.cpuMs">CpuMs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CpuMsInput`<sup>Optional</sup> <a name="CpuMsInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.property.cpuMsInput"></a>

```go
func CpuMsInput() *f64
```

- *Type:* *f64

---

##### `CpuMs`<sup>Required</sup> <a name="CpuMs" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.property.cpuMs"></a>

```go
func CpuMs() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkerVersionMigrationsOutputReference <a name="WorkerVersionMigrationsOutputReference" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/workerversion"

workerversion.NewWorkerVersionMigrationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkerVersionMigrationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.putRenamedClasses">PutRenamedClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.putSteps">PutSteps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.putTransferredClasses">PutTransferredClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resetDeletedClasses">ResetDeletedClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resetNewClasses">ResetNewClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resetNewSqliteClasses">ResetNewSqliteClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resetNewTag">ResetNewTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resetOldTag">ResetOldTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resetRenamedClasses">ResetRenamedClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resetSteps">ResetSteps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resetTransferredClasses">ResetTransferredClasses</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRenamedClasses` <a name="PutRenamedClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.putRenamedClasses"></a>

```go
func PutRenamedClasses(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.putRenamedClasses.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSteps` <a name="PutSteps" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.putSteps"></a>

```go
func PutSteps(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.putSteps.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTransferredClasses` <a name="PutTransferredClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.putTransferredClasses"></a>

```go
func PutTransferredClasses(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.putTransferredClasses.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDeletedClasses` <a name="ResetDeletedClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resetDeletedClasses"></a>

```go
func ResetDeletedClasses()
```

##### `ResetNewClasses` <a name="ResetNewClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resetNewClasses"></a>

```go
func ResetNewClasses()
```

##### `ResetNewSqliteClasses` <a name="ResetNewSqliteClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resetNewSqliteClasses"></a>

```go
func ResetNewSqliteClasses()
```

##### `ResetNewTag` <a name="ResetNewTag" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resetNewTag"></a>

```go
func ResetNewTag()
```

##### `ResetOldTag` <a name="ResetOldTag" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resetOldTag"></a>

```go
func ResetOldTag()
```

##### `ResetRenamedClasses` <a name="ResetRenamedClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resetRenamedClasses"></a>

```go
func ResetRenamedClasses()
```

##### `ResetSteps` <a name="ResetSteps" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resetSteps"></a>

```go
func ResetSteps()
```

##### `ResetTransferredClasses` <a name="ResetTransferredClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resetTransferredClasses"></a>

```go
func ResetTransferredClasses()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.renamedClasses">RenamedClasses</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList">WorkerVersionMigrationsRenamedClassesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.steps">Steps</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList">WorkerVersionMigrationsStepsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.transferredClasses">TransferredClasses</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList">WorkerVersionMigrationsTransferredClassesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.deletedClassesInput">DeletedClassesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.newClassesInput">NewClassesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.newSqliteClassesInput">NewSqliteClassesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.newTagInput">NewTagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.oldTagInput">OldTagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.renamedClassesInput">RenamedClassesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.stepsInput">StepsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.transferredClassesInput">TransferredClassesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.deletedClasses">DeletedClasses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.newClasses">NewClasses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.newSqliteClasses">NewSqliteClasses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.newTag">NewTag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.oldTag">OldTag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RenamedClasses`<sup>Required</sup> <a name="RenamedClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.renamedClasses"></a>

```go
func RenamedClasses() WorkerVersionMigrationsRenamedClassesList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList">WorkerVersionMigrationsRenamedClassesList</a>

---

##### `Steps`<sup>Required</sup> <a name="Steps" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.steps"></a>

```go
func Steps() WorkerVersionMigrationsStepsList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList">WorkerVersionMigrationsStepsList</a>

---

##### `TransferredClasses`<sup>Required</sup> <a name="TransferredClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.transferredClasses"></a>

```go
func TransferredClasses() WorkerVersionMigrationsTransferredClassesList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList">WorkerVersionMigrationsTransferredClassesList</a>

---

##### `DeletedClassesInput`<sup>Optional</sup> <a name="DeletedClassesInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.deletedClassesInput"></a>

```go
func DeletedClassesInput() *[]*string
```

- *Type:* *[]*string

---

##### `NewClassesInput`<sup>Optional</sup> <a name="NewClassesInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.newClassesInput"></a>

```go
func NewClassesInput() *[]*string
```

- *Type:* *[]*string

---

##### `NewSqliteClassesInput`<sup>Optional</sup> <a name="NewSqliteClassesInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.newSqliteClassesInput"></a>

```go
func NewSqliteClassesInput() *[]*string
```

- *Type:* *[]*string

---

##### `NewTagInput`<sup>Optional</sup> <a name="NewTagInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.newTagInput"></a>

```go
func NewTagInput() *string
```

- *Type:* *string

---

##### `OldTagInput`<sup>Optional</sup> <a name="OldTagInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.oldTagInput"></a>

```go
func OldTagInput() *string
```

- *Type:* *string

---

##### `RenamedClassesInput`<sup>Optional</sup> <a name="RenamedClassesInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.renamedClassesInput"></a>

```go
func RenamedClassesInput() interface{}
```

- *Type:* interface{}

---

##### `StepsInput`<sup>Optional</sup> <a name="StepsInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.stepsInput"></a>

```go
func StepsInput() interface{}
```

- *Type:* interface{}

---

##### `TransferredClassesInput`<sup>Optional</sup> <a name="TransferredClassesInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.transferredClassesInput"></a>

```go
func TransferredClassesInput() interface{}
```

- *Type:* interface{}

---

##### `DeletedClasses`<sup>Required</sup> <a name="DeletedClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.deletedClasses"></a>

```go
func DeletedClasses() *[]*string
```

- *Type:* *[]*string

---

##### `NewClasses`<sup>Required</sup> <a name="NewClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.newClasses"></a>

```go
func NewClasses() *[]*string
```

- *Type:* *[]*string

---

##### `NewSqliteClasses`<sup>Required</sup> <a name="NewSqliteClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.newSqliteClasses"></a>

```go
func NewSqliteClasses() *[]*string
```

- *Type:* *[]*string

---

##### `NewTag`<sup>Required</sup> <a name="NewTag" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.newTag"></a>

```go
func NewTag() *string
```

- *Type:* *string

---

##### `OldTag`<sup>Required</sup> <a name="OldTag" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.oldTag"></a>

```go
func OldTag() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkerVersionMigrationsRenamedClassesList <a name="WorkerVersionMigrationsRenamedClassesList" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/workerversion"

workerversion.NewWorkerVersionMigrationsRenamedClassesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WorkerVersionMigrationsRenamedClassesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.get"></a>

```go
func Get(index *f64) WorkerVersionMigrationsRenamedClassesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkerVersionMigrationsRenamedClassesOutputReference <a name="WorkerVersionMigrationsRenamedClassesOutputReference" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/workerversion"

workerversion.NewWorkerVersionMigrationsRenamedClassesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WorkerVersionMigrationsRenamedClassesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.resetFrom">ResetFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.resetTo">ResetTo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFrom` <a name="ResetFrom" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.resetFrom"></a>

```go
func ResetFrom()
```

##### `ResetTo` <a name="ResetTo" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.resetTo"></a>

```go
func ResetTo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.property.fromInput">FromInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.property.toInput">ToInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.property.from">From</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.property.to">To</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FromInput`<sup>Optional</sup> <a name="FromInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.property.fromInput"></a>

```go
func FromInput() *string
```

- *Type:* *string

---

##### `ToInput`<sup>Optional</sup> <a name="ToInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.property.toInput"></a>

```go
func ToInput() *string
```

- *Type:* *string

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.property.from"></a>

```go
func From() *string
```

- *Type:* *string

---

##### `To`<sup>Required</sup> <a name="To" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.property.to"></a>

```go
func To() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkerVersionMigrationsStepsList <a name="WorkerVersionMigrationsStepsList" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/workerversion"

workerversion.NewWorkerVersionMigrationsStepsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WorkerVersionMigrationsStepsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.get"></a>

```go
func Get(index *f64) WorkerVersionMigrationsStepsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkerVersionMigrationsStepsOutputReference <a name="WorkerVersionMigrationsStepsOutputReference" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/workerversion"

workerversion.NewWorkerVersionMigrationsStepsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WorkerVersionMigrationsStepsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.putRenamedClasses">PutRenamedClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.putTransferredClasses">PutTransferredClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.resetDeletedClasses">ResetDeletedClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.resetNewClasses">ResetNewClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.resetNewSqliteClasses">ResetNewSqliteClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.resetRenamedClasses">ResetRenamedClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.resetTransferredClasses">ResetTransferredClasses</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRenamedClasses` <a name="PutRenamedClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.putRenamedClasses"></a>

```go
func PutRenamedClasses(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.putRenamedClasses.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTransferredClasses` <a name="PutTransferredClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.putTransferredClasses"></a>

```go
func PutTransferredClasses(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.putTransferredClasses.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDeletedClasses` <a name="ResetDeletedClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.resetDeletedClasses"></a>

```go
func ResetDeletedClasses()
```

##### `ResetNewClasses` <a name="ResetNewClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.resetNewClasses"></a>

```go
func ResetNewClasses()
```

##### `ResetNewSqliteClasses` <a name="ResetNewSqliteClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.resetNewSqliteClasses"></a>

```go
func ResetNewSqliteClasses()
```

##### `ResetRenamedClasses` <a name="ResetRenamedClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.resetRenamedClasses"></a>

```go
func ResetRenamedClasses()
```

##### `ResetTransferredClasses` <a name="ResetTransferredClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.resetTransferredClasses"></a>

```go
func ResetTransferredClasses()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.renamedClasses">RenamedClasses</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList">WorkerVersionMigrationsStepsRenamedClassesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.transferredClasses">TransferredClasses</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList">WorkerVersionMigrationsStepsTransferredClassesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.deletedClassesInput">DeletedClassesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.newClassesInput">NewClassesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.newSqliteClassesInput">NewSqliteClassesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.renamedClassesInput">RenamedClassesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.transferredClassesInput">TransferredClassesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.deletedClasses">DeletedClasses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.newClasses">NewClasses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.newSqliteClasses">NewSqliteClasses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RenamedClasses`<sup>Required</sup> <a name="RenamedClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.renamedClasses"></a>

```go
func RenamedClasses() WorkerVersionMigrationsStepsRenamedClassesList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList">WorkerVersionMigrationsStepsRenamedClassesList</a>

---

##### `TransferredClasses`<sup>Required</sup> <a name="TransferredClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.transferredClasses"></a>

```go
func TransferredClasses() WorkerVersionMigrationsStepsTransferredClassesList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList">WorkerVersionMigrationsStepsTransferredClassesList</a>

---

##### `DeletedClassesInput`<sup>Optional</sup> <a name="DeletedClassesInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.deletedClassesInput"></a>

```go
func DeletedClassesInput() *[]*string
```

- *Type:* *[]*string

---

##### `NewClassesInput`<sup>Optional</sup> <a name="NewClassesInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.newClassesInput"></a>

```go
func NewClassesInput() *[]*string
```

- *Type:* *[]*string

---

##### `NewSqliteClassesInput`<sup>Optional</sup> <a name="NewSqliteClassesInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.newSqliteClassesInput"></a>

```go
func NewSqliteClassesInput() *[]*string
```

- *Type:* *[]*string

---

##### `RenamedClassesInput`<sup>Optional</sup> <a name="RenamedClassesInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.renamedClassesInput"></a>

```go
func RenamedClassesInput() interface{}
```

- *Type:* interface{}

---

##### `TransferredClassesInput`<sup>Optional</sup> <a name="TransferredClassesInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.transferredClassesInput"></a>

```go
func TransferredClassesInput() interface{}
```

- *Type:* interface{}

---

##### `DeletedClasses`<sup>Required</sup> <a name="DeletedClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.deletedClasses"></a>

```go
func DeletedClasses() *[]*string
```

- *Type:* *[]*string

---

##### `NewClasses`<sup>Required</sup> <a name="NewClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.newClasses"></a>

```go
func NewClasses() *[]*string
```

- *Type:* *[]*string

---

##### `NewSqliteClasses`<sup>Required</sup> <a name="NewSqliteClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.newSqliteClasses"></a>

```go
func NewSqliteClasses() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkerVersionMigrationsStepsRenamedClassesList <a name="WorkerVersionMigrationsStepsRenamedClassesList" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/workerversion"

workerversion.NewWorkerVersionMigrationsStepsRenamedClassesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WorkerVersionMigrationsStepsRenamedClassesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.get"></a>

```go
func Get(index *f64) WorkerVersionMigrationsStepsRenamedClassesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkerVersionMigrationsStepsRenamedClassesOutputReference <a name="WorkerVersionMigrationsStepsRenamedClassesOutputReference" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/workerversion"

workerversion.NewWorkerVersionMigrationsStepsRenamedClassesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WorkerVersionMigrationsStepsRenamedClassesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.resetFrom">ResetFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.resetTo">ResetTo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFrom` <a name="ResetFrom" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.resetFrom"></a>

```go
func ResetFrom()
```

##### `ResetTo` <a name="ResetTo" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.resetTo"></a>

```go
func ResetTo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.property.fromInput">FromInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.property.toInput">ToInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.property.from">From</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.property.to">To</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FromInput`<sup>Optional</sup> <a name="FromInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.property.fromInput"></a>

```go
func FromInput() *string
```

- *Type:* *string

---

##### `ToInput`<sup>Optional</sup> <a name="ToInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.property.toInput"></a>

```go
func ToInput() *string
```

- *Type:* *string

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.property.from"></a>

```go
func From() *string
```

- *Type:* *string

---

##### `To`<sup>Required</sup> <a name="To" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.property.to"></a>

```go
func To() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkerVersionMigrationsStepsTransferredClassesList <a name="WorkerVersionMigrationsStepsTransferredClassesList" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/workerversion"

workerversion.NewWorkerVersionMigrationsStepsTransferredClassesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WorkerVersionMigrationsStepsTransferredClassesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.get"></a>

```go
func Get(index *f64) WorkerVersionMigrationsStepsTransferredClassesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkerVersionMigrationsStepsTransferredClassesOutputReference <a name="WorkerVersionMigrationsStepsTransferredClassesOutputReference" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/workerversion"

workerversion.NewWorkerVersionMigrationsStepsTransferredClassesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WorkerVersionMigrationsStepsTransferredClassesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.resetFrom">ResetFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.resetFromScript">ResetFromScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.resetTo">ResetTo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFrom` <a name="ResetFrom" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.resetFrom"></a>

```go
func ResetFrom()
```

##### `ResetFromScript` <a name="ResetFromScript" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.resetFromScript"></a>

```go
func ResetFromScript()
```

##### `ResetTo` <a name="ResetTo" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.resetTo"></a>

```go
func ResetTo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.fromInput">FromInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.fromScriptInput">FromScriptInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.toInput">ToInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.from">From</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.fromScript">FromScript</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.to">To</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FromInput`<sup>Optional</sup> <a name="FromInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.fromInput"></a>

```go
func FromInput() *string
```

- *Type:* *string

---

##### `FromScriptInput`<sup>Optional</sup> <a name="FromScriptInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.fromScriptInput"></a>

```go
func FromScriptInput() *string
```

- *Type:* *string

---

##### `ToInput`<sup>Optional</sup> <a name="ToInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.toInput"></a>

```go
func ToInput() *string
```

- *Type:* *string

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.from"></a>

```go
func From() *string
```

- *Type:* *string

---

##### `FromScript`<sup>Required</sup> <a name="FromScript" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.fromScript"></a>

```go
func FromScript() *string
```

- *Type:* *string

---

##### `To`<sup>Required</sup> <a name="To" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.to"></a>

```go
func To() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkerVersionMigrationsTransferredClassesList <a name="WorkerVersionMigrationsTransferredClassesList" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/workerversion"

workerversion.NewWorkerVersionMigrationsTransferredClassesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WorkerVersionMigrationsTransferredClassesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.get"></a>

```go
func Get(index *f64) WorkerVersionMigrationsTransferredClassesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkerVersionMigrationsTransferredClassesOutputReference <a name="WorkerVersionMigrationsTransferredClassesOutputReference" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/workerversion"

workerversion.NewWorkerVersionMigrationsTransferredClassesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WorkerVersionMigrationsTransferredClassesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.resetFrom">ResetFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.resetFromScript">ResetFromScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.resetTo">ResetTo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFrom` <a name="ResetFrom" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.resetFrom"></a>

```go
func ResetFrom()
```

##### `ResetFromScript` <a name="ResetFromScript" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.resetFromScript"></a>

```go
func ResetFromScript()
```

##### `ResetTo` <a name="ResetTo" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.resetTo"></a>

```go
func ResetTo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.fromInput">FromInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.fromScriptInput">FromScriptInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.toInput">ToInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.from">From</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.fromScript">FromScript</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.to">To</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FromInput`<sup>Optional</sup> <a name="FromInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.fromInput"></a>

```go
func FromInput() *string
```

- *Type:* *string

---

##### `FromScriptInput`<sup>Optional</sup> <a name="FromScriptInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.fromScriptInput"></a>

```go
func FromScriptInput() *string
```

- *Type:* *string

---

##### `ToInput`<sup>Optional</sup> <a name="ToInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.toInput"></a>

```go
func ToInput() *string
```

- *Type:* *string

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.from"></a>

```go
func From() *string
```

- *Type:* *string

---

##### `FromScript`<sup>Required</sup> <a name="FromScript" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.fromScript"></a>

```go
func FromScript() *string
```

- *Type:* *string

---

##### `To`<sup>Required</sup> <a name="To" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.to"></a>

```go
func To() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkerVersionModulesList <a name="WorkerVersionModulesList" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/workerversion"

workerversion.NewWorkerVersionModulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WorkerVersionModulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.get"></a>

```go
func Get(index *f64) WorkerVersionModulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkerVersionModulesOutputReference <a name="WorkerVersionModulesOutputReference" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/workerversion"

workerversion.NewWorkerVersionModulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WorkerVersionModulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.contentSha256">ContentSha256</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.contentFileInput">ContentFileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.contentTypeInput">ContentTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.contentFile">ContentFile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.contentType">ContentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentSha256`<sup>Required</sup> <a name="ContentSha256" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.contentSha256"></a>

```go
func ContentSha256() *string
```

- *Type:* *string

---

##### `ContentFileInput`<sup>Optional</sup> <a name="ContentFileInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.contentFileInput"></a>

```go
func ContentFileInput() *string
```

- *Type:* *string

---

##### `ContentTypeInput`<sup>Optional</sup> <a name="ContentTypeInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.contentTypeInput"></a>

```go
func ContentTypeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ContentFile`<sup>Required</sup> <a name="ContentFile" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.contentFile"></a>

```go
func ContentFile() *string
```

- *Type:* *string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.contentType"></a>

```go
func ContentType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkerVersionPlacementOutputReference <a name="WorkerVersionPlacementOutputReference" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/workerversion"

workerversion.NewWorkerVersionPlacementOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkerVersionPlacementOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.resetMode">ResetMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.resetMode"></a>

```go
func ResetMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



