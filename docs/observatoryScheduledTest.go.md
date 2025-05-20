# `observatoryScheduledTest` Submodule <a name="`observatoryScheduledTest` Submodule" id="@cdktf/provider-cloudflare.observatoryScheduledTest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ObservatoryScheduledTest <a name="ObservatoryScheduledTest" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/observatory_scheduled_test cloudflare_observatory_scheduled_test}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/observatoryscheduledtest"

observatoryscheduledtest.NewObservatoryScheduledTest(scope Construct, id *string, config ObservatoryScheduledTestConfig) ObservatoryScheduledTest
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestConfig">ObservatoryScheduledTestConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestConfig">ObservatoryScheduledTestConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ObservatoryScheduledTest resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/observatoryscheduledtest"

observatoryscheduledtest.ObservatoryScheduledTest_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/observatoryscheduledtest"

observatoryscheduledtest.ObservatoryScheduledTest_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/observatoryscheduledtest"

observatoryscheduledtest.ObservatoryScheduledTest_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/observatoryscheduledtest"

observatoryscheduledtest.ObservatoryScheduledTest_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ObservatoryScheduledTest resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ObservatoryScheduledTest to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ObservatoryScheduledTest that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/observatory_scheduled_test#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ObservatoryScheduledTest to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.frequency">Frequency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference">ObservatoryScheduledTestScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.test">Test</a></code> | <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference">ObservatoryScheduledTestTestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.zoneIdInput">ZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.frequency"></a>

```go
func Frequency() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.schedule"></a>

```go
func Schedule() ObservatoryScheduledTestScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference">ObservatoryScheduledTestScheduleOutputReference</a>

---

##### `Test`<sup>Required</sup> <a name="Test" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.test"></a>

```go
func Test() ObservatoryScheduledTestTestOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference">ObservatoryScheduledTestTestOutputReference</a>

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.zoneIdInput"></a>

```go
func ZoneIdInput() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ObservatoryScheduledTestConfig <a name="ObservatoryScheduledTestConfig" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/observatoryscheduledtest"

&observatoryscheduledtest.ObservatoryScheduledTestConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Url: *string,
	ZoneId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestConfig.property.url">Url</a></code> | <code>*string</code> | A URL. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestConfig.property.zoneId">ZoneId</a></code> | <code>*string</code> | Identifier. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestConfig.property.url"></a>

```go
Url *string
```

- *Type:* *string

A URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/observatory_scheduled_test#url ObservatoryScheduledTest#url}

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestConfig.property.zoneId"></a>

```go
ZoneId *string
```

- *Type:* *string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/observatory_scheduled_test#zone_id ObservatoryScheduledTest#zone_id}

---

### ObservatoryScheduledTestSchedule <a name="ObservatoryScheduledTestSchedule" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestSchedule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/observatoryscheduledtest"

&observatoryscheduledtest.ObservatoryScheduledTestSchedule {

}
```


### ObservatoryScheduledTestTest <a name="ObservatoryScheduledTestTest" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTest.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/observatoryscheduledtest"

&observatoryscheduledtest.ObservatoryScheduledTestTest {

}
```


### ObservatoryScheduledTestTestDesktopReport <a name="ObservatoryScheduledTestTestDesktopReport" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReport"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReport.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/observatoryscheduledtest"

&observatoryscheduledtest.ObservatoryScheduledTestTestDesktopReport {

}
```


### ObservatoryScheduledTestTestDesktopReportError <a name="ObservatoryScheduledTestTestDesktopReportError" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportError"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportError.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/observatoryscheduledtest"

&observatoryscheduledtest.ObservatoryScheduledTestTestDesktopReportError {

}
```


### ObservatoryScheduledTestTestMobileReport <a name="ObservatoryScheduledTestTestMobileReport" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReport"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReport.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/observatoryscheduledtest"

&observatoryscheduledtest.ObservatoryScheduledTestTestMobileReport {

}
```


### ObservatoryScheduledTestTestMobileReportError <a name="ObservatoryScheduledTestTestMobileReportError" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportError"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportError.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/observatoryscheduledtest"

&observatoryscheduledtest.ObservatoryScheduledTestTestMobileReportError {

}
```


### ObservatoryScheduledTestTestRegion <a name="ObservatoryScheduledTestTestRegion" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegion.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/observatoryscheduledtest"

&observatoryscheduledtest.ObservatoryScheduledTestTestRegion {

}
```


## Classes <a name="Classes" id="Classes"></a>

### ObservatoryScheduledTestScheduleOutputReference <a name="ObservatoryScheduledTestScheduleOutputReference" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/observatoryscheduledtest"

observatoryscheduledtest.NewObservatoryScheduledTestScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ObservatoryScheduledTestScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.property.frequency">Frequency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestSchedule">ObservatoryScheduledTestSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.property.frequency"></a>

```go
func Frequency() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() ObservatoryScheduledTestSchedule
```

- *Type:* <a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestSchedule">ObservatoryScheduledTestSchedule</a>

---


### ObservatoryScheduledTestTestDesktopReportErrorOutputReference <a name="ObservatoryScheduledTestTestDesktopReportErrorOutputReference" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/observatoryscheduledtest"

observatoryscheduledtest.NewObservatoryScheduledTestTestDesktopReportErrorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ObservatoryScheduledTestTestDesktopReportErrorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.property.code">Code</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.property.detail">Detail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.property.finalDisplayedUrl">FinalDisplayedUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportError">ObservatoryScheduledTestTestDesktopReportError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.property.code"></a>

```go
func Code() *string
```

- *Type:* *string

---

##### `Detail`<sup>Required</sup> <a name="Detail" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.property.detail"></a>

```go
func Detail() *string
```

- *Type:* *string

---

##### `FinalDisplayedUrl`<sup>Required</sup> <a name="FinalDisplayedUrl" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.property.finalDisplayedUrl"></a>

```go
func FinalDisplayedUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.property.internalValue"></a>

```go
func InternalValue() ObservatoryScheduledTestTestDesktopReportError
```

- *Type:* <a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportError">ObservatoryScheduledTestTestDesktopReportError</a>

---


### ObservatoryScheduledTestTestDesktopReportOutputReference <a name="ObservatoryScheduledTestTestDesktopReportOutputReference" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/observatoryscheduledtest"

observatoryscheduledtest.NewObservatoryScheduledTestTestDesktopReportOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ObservatoryScheduledTestTestDesktopReportOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.cls">Cls</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.deviceType">DeviceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.error">Error</a></code> | <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference">ObservatoryScheduledTestTestDesktopReportErrorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.fcp">Fcp</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.jsonReportUrl">JsonReportUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.lcp">Lcp</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.performanceScore">PerformanceScore</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.si">Si</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.tbt">Tbt</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.ttfb">Ttfb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.tti">Tti</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReport">ObservatoryScheduledTestTestDesktopReport</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Cls`<sup>Required</sup> <a name="Cls" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.cls"></a>

```go
func Cls() *f64
```

- *Type:* *f64

---

##### `DeviceType`<sup>Required</sup> <a name="DeviceType" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.deviceType"></a>

```go
func DeviceType() *string
```

- *Type:* *string

---

##### `Error`<sup>Required</sup> <a name="Error" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.error"></a>

```go
func Error() ObservatoryScheduledTestTestDesktopReportErrorOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference">ObservatoryScheduledTestTestDesktopReportErrorOutputReference</a>

---

##### `Fcp`<sup>Required</sup> <a name="Fcp" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.fcp"></a>

```go
func Fcp() *f64
```

- *Type:* *f64

---

##### `JsonReportUrl`<sup>Required</sup> <a name="JsonReportUrl" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.jsonReportUrl"></a>

```go
func JsonReportUrl() *string
```

- *Type:* *string

---

##### `Lcp`<sup>Required</sup> <a name="Lcp" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.lcp"></a>

```go
func Lcp() *f64
```

- *Type:* *f64

---

##### `PerformanceScore`<sup>Required</sup> <a name="PerformanceScore" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.performanceScore"></a>

```go
func PerformanceScore() *f64
```

- *Type:* *f64

---

##### `Si`<sup>Required</sup> <a name="Si" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.si"></a>

```go
func Si() *f64
```

- *Type:* *f64

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Tbt`<sup>Required</sup> <a name="Tbt" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.tbt"></a>

```go
func Tbt() *f64
```

- *Type:* *f64

---

##### `Ttfb`<sup>Required</sup> <a name="Ttfb" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.ttfb"></a>

```go
func Ttfb() *f64
```

- *Type:* *f64

---

##### `Tti`<sup>Required</sup> <a name="Tti" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.tti"></a>

```go
func Tti() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.internalValue"></a>

```go
func InternalValue() ObservatoryScheduledTestTestDesktopReport
```

- *Type:* <a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReport">ObservatoryScheduledTestTestDesktopReport</a>

---


### ObservatoryScheduledTestTestMobileReportErrorOutputReference <a name="ObservatoryScheduledTestTestMobileReportErrorOutputReference" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/observatoryscheduledtest"

observatoryscheduledtest.NewObservatoryScheduledTestTestMobileReportErrorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ObservatoryScheduledTestTestMobileReportErrorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.property.code">Code</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.property.detail">Detail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.property.finalDisplayedUrl">FinalDisplayedUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportError">ObservatoryScheduledTestTestMobileReportError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.property.code"></a>

```go
func Code() *string
```

- *Type:* *string

---

##### `Detail`<sup>Required</sup> <a name="Detail" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.property.detail"></a>

```go
func Detail() *string
```

- *Type:* *string

---

##### `FinalDisplayedUrl`<sup>Required</sup> <a name="FinalDisplayedUrl" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.property.finalDisplayedUrl"></a>

```go
func FinalDisplayedUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.property.internalValue"></a>

```go
func InternalValue() ObservatoryScheduledTestTestMobileReportError
```

- *Type:* <a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportError">ObservatoryScheduledTestTestMobileReportError</a>

---


### ObservatoryScheduledTestTestMobileReportOutputReference <a name="ObservatoryScheduledTestTestMobileReportOutputReference" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/observatoryscheduledtest"

observatoryscheduledtest.NewObservatoryScheduledTestTestMobileReportOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ObservatoryScheduledTestTestMobileReportOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.cls">Cls</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.deviceType">DeviceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.error">Error</a></code> | <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference">ObservatoryScheduledTestTestMobileReportErrorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.fcp">Fcp</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.jsonReportUrl">JsonReportUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.lcp">Lcp</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.performanceScore">PerformanceScore</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.si">Si</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.tbt">Tbt</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.ttfb">Ttfb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.tti">Tti</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReport">ObservatoryScheduledTestTestMobileReport</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Cls`<sup>Required</sup> <a name="Cls" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.cls"></a>

```go
func Cls() *f64
```

- *Type:* *f64

---

##### `DeviceType`<sup>Required</sup> <a name="DeviceType" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.deviceType"></a>

```go
func DeviceType() *string
```

- *Type:* *string

---

##### `Error`<sup>Required</sup> <a name="Error" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.error"></a>

```go
func Error() ObservatoryScheduledTestTestMobileReportErrorOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference">ObservatoryScheduledTestTestMobileReportErrorOutputReference</a>

---

##### `Fcp`<sup>Required</sup> <a name="Fcp" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.fcp"></a>

```go
func Fcp() *f64
```

- *Type:* *f64

---

##### `JsonReportUrl`<sup>Required</sup> <a name="JsonReportUrl" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.jsonReportUrl"></a>

```go
func JsonReportUrl() *string
```

- *Type:* *string

---

##### `Lcp`<sup>Required</sup> <a name="Lcp" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.lcp"></a>

```go
func Lcp() *f64
```

- *Type:* *f64

---

##### `PerformanceScore`<sup>Required</sup> <a name="PerformanceScore" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.performanceScore"></a>

```go
func PerformanceScore() *f64
```

- *Type:* *f64

---

##### `Si`<sup>Required</sup> <a name="Si" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.si"></a>

```go
func Si() *f64
```

- *Type:* *f64

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Tbt`<sup>Required</sup> <a name="Tbt" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.tbt"></a>

```go
func Tbt() *f64
```

- *Type:* *f64

---

##### `Ttfb`<sup>Required</sup> <a name="Ttfb" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.ttfb"></a>

```go
func Ttfb() *f64
```

- *Type:* *f64

---

##### `Tti`<sup>Required</sup> <a name="Tti" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.tti"></a>

```go
func Tti() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.internalValue"></a>

```go
func InternalValue() ObservatoryScheduledTestTestMobileReport
```

- *Type:* <a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReport">ObservatoryScheduledTestTestMobileReport</a>

---


### ObservatoryScheduledTestTestOutputReference <a name="ObservatoryScheduledTestTestOutputReference" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/observatoryscheduledtest"

observatoryscheduledtest.NewObservatoryScheduledTestTestOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ObservatoryScheduledTestTestOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.property.date">Date</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.property.desktopReport">DesktopReport</a></code> | <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference">ObservatoryScheduledTestTestDesktopReportOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.property.mobileReport">MobileReport</a></code> | <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference">ObservatoryScheduledTestTestMobileReportOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.property.region">Region</a></code> | <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference">ObservatoryScheduledTestTestRegionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.property.scheduleFrequency">ScheduleFrequency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTest">ObservatoryScheduledTestTest</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Date`<sup>Required</sup> <a name="Date" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.property.date"></a>

```go
func Date() *string
```

- *Type:* *string

---

##### `DesktopReport`<sup>Required</sup> <a name="DesktopReport" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.property.desktopReport"></a>

```go
func DesktopReport() ObservatoryScheduledTestTestDesktopReportOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference">ObservatoryScheduledTestTestDesktopReportOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MobileReport`<sup>Required</sup> <a name="MobileReport" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.property.mobileReport"></a>

```go
func MobileReport() ObservatoryScheduledTestTestMobileReportOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference">ObservatoryScheduledTestTestMobileReportOutputReference</a>

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.property.region"></a>

```go
func Region() ObservatoryScheduledTestTestRegionOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference">ObservatoryScheduledTestTestRegionOutputReference</a>

---

##### `ScheduleFrequency`<sup>Required</sup> <a name="ScheduleFrequency" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.property.scheduleFrequency"></a>

```go
func ScheduleFrequency() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.property.internalValue"></a>

```go
func InternalValue() ObservatoryScheduledTestTest
```

- *Type:* <a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTest">ObservatoryScheduledTestTest</a>

---


### ObservatoryScheduledTestTestRegionOutputReference <a name="ObservatoryScheduledTestTestRegionOutputReference" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/observatoryscheduledtest"

observatoryscheduledtest.NewObservatoryScheduledTestTestRegionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ObservatoryScheduledTestTestRegionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.property.label">Label</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegion">ObservatoryScheduledTestTestRegion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.property.label"></a>

```go
func Label() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.property.internalValue"></a>

```go
func InternalValue() ObservatoryScheduledTestTestRegion
```

- *Type:* <a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegion">ObservatoryScheduledTestTestRegion</a>

---



