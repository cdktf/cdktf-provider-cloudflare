# `healthcheck` Submodule <a name="`healthcheck` Submodule" id="@cdktf/provider-cloudflare.healthcheck"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Healthcheck <a name="Healthcheck" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/healthcheck cloudflare_healthcheck}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/healthcheck"

healthcheck.NewHealthcheck(scope Construct, id *string, config HealthcheckConfig) Healthcheck
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig">HealthcheckConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig">HealthcheckConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.putHttpConfig">PutHttpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.putTcpConfig">PutTcpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetCheckRegions">ResetCheckRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetConsecutiveFails">ResetConsecutiveFails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetConsecutiveSuccesses">ResetConsecutiveSuccesses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetHttpConfig">ResetHttpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetInterval">ResetInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetRetries">ResetRetries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetSuspended">ResetSuspended</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetTcpConfig">ResetTcpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetTimeout">ResetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutHttpConfig` <a name="PutHttpConfig" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.putHttpConfig"></a>

```go
func PutHttpConfig(value HealthcheckHttpConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.putHttpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfig">HealthcheckHttpConfig</a>

---

##### `PutTcpConfig` <a name="PutTcpConfig" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.putTcpConfig"></a>

```go
func PutTcpConfig(value HealthcheckTcpConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.putTcpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfig">HealthcheckTcpConfig</a>

---

##### `ResetCheckRegions` <a name="ResetCheckRegions" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetCheckRegions"></a>

```go
func ResetCheckRegions()
```

##### `ResetConsecutiveFails` <a name="ResetConsecutiveFails" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetConsecutiveFails"></a>

```go
func ResetConsecutiveFails()
```

##### `ResetConsecutiveSuccesses` <a name="ResetConsecutiveSuccesses" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetConsecutiveSuccesses"></a>

```go
func ResetConsecutiveSuccesses()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetHttpConfig` <a name="ResetHttpConfig" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetHttpConfig"></a>

```go
func ResetHttpConfig()
```

##### `ResetInterval` <a name="ResetInterval" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetInterval"></a>

```go
func ResetInterval()
```

##### `ResetRetries` <a name="ResetRetries" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetRetries"></a>

```go
func ResetRetries()
```

##### `ResetSuspended` <a name="ResetSuspended" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetSuspended"></a>

```go
func ResetSuspended()
```

##### `ResetTcpConfig` <a name="ResetTcpConfig" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetTcpConfig"></a>

```go
func ResetTcpConfig()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetTimeout"></a>

```go
func ResetTimeout()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetType"></a>

```go
func ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Healthcheck resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/healthcheck"

healthcheck.Healthcheck_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/healthcheck"

healthcheck.Healthcheck_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/healthcheck"

healthcheck.Healthcheck_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/healthcheck"

healthcheck.Healthcheck_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a Healthcheck resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Healthcheck to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Healthcheck that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/healthcheck#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the Healthcheck to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.failureReason">FailureReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.httpConfig">HttpConfig</a></code> | <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference">HealthcheckHttpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.modifiedOn">ModifiedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.tcpConfig">TcpConfig</a></code> | <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference">HealthcheckTcpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.addressInput">AddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.checkRegionsInput">CheckRegionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.consecutiveFailsInput">ConsecutiveFailsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.consecutiveSuccessesInput">ConsecutiveSuccessesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.httpConfigInput">HttpConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.intervalInput">IntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.retriesInput">RetriesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.suspendedInput">SuspendedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.tcpConfigInput">TcpConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.timeoutInput">TimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.zoneIdInput">ZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.checkRegions">CheckRegions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.consecutiveFails">ConsecutiveFails</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.consecutiveSuccesses">ConsecutiveSuccesses</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.interval">Interval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.retries">Retries</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.suspended">Suspended</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.timeout">Timeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `FailureReason`<sup>Required</sup> <a name="FailureReason" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.failureReason"></a>

```go
func FailureReason() *string
```

- *Type:* *string

---

##### `HttpConfig`<sup>Required</sup> <a name="HttpConfig" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.httpConfig"></a>

```go
func HttpConfig() HealthcheckHttpConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference">HealthcheckHttpConfigOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ModifiedOn`<sup>Required</sup> <a name="ModifiedOn" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.modifiedOn"></a>

```go
func ModifiedOn() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `TcpConfig`<sup>Required</sup> <a name="TcpConfig" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.tcpConfig"></a>

```go
func TcpConfig() HealthcheckTcpConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference">HealthcheckTcpConfigOutputReference</a>

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.addressInput"></a>

```go
func AddressInput() *string
```

- *Type:* *string

---

##### `CheckRegionsInput`<sup>Optional</sup> <a name="CheckRegionsInput" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.checkRegionsInput"></a>

```go
func CheckRegionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ConsecutiveFailsInput`<sup>Optional</sup> <a name="ConsecutiveFailsInput" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.consecutiveFailsInput"></a>

```go
func ConsecutiveFailsInput() *f64
```

- *Type:* *f64

---

##### `ConsecutiveSuccessesInput`<sup>Optional</sup> <a name="ConsecutiveSuccessesInput" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.consecutiveSuccessesInput"></a>

```go
func ConsecutiveSuccessesInput() *f64
```

- *Type:* *f64

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `HttpConfigInput`<sup>Optional</sup> <a name="HttpConfigInput" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.httpConfigInput"></a>

```go
func HttpConfigInput() interface{}
```

- *Type:* interface{}

---

##### `IntervalInput`<sup>Optional</sup> <a name="IntervalInput" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.intervalInput"></a>

```go
func IntervalInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RetriesInput`<sup>Optional</sup> <a name="RetriesInput" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.retriesInput"></a>

```go
func RetriesInput() *f64
```

- *Type:* *f64

---

##### `SuspendedInput`<sup>Optional</sup> <a name="SuspendedInput" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.suspendedInput"></a>

```go
func SuspendedInput() interface{}
```

- *Type:* interface{}

---

##### `TcpConfigInput`<sup>Optional</sup> <a name="TcpConfigInput" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.tcpConfigInput"></a>

```go
func TcpConfigInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.timeoutInput"></a>

```go
func TimeoutInput() *f64
```

- *Type:* *f64

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.zoneIdInput"></a>

```go
func ZoneIdInput() *string
```

- *Type:* *string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `CheckRegions`<sup>Required</sup> <a name="CheckRegions" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.checkRegions"></a>

```go
func CheckRegions() *[]*string
```

- *Type:* *[]*string

---

##### `ConsecutiveFails`<sup>Required</sup> <a name="ConsecutiveFails" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.consecutiveFails"></a>

```go
func ConsecutiveFails() *f64
```

- *Type:* *f64

---

##### `ConsecutiveSuccesses`<sup>Required</sup> <a name="ConsecutiveSuccesses" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.consecutiveSuccesses"></a>

```go
func ConsecutiveSuccesses() *f64
```

- *Type:* *f64

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.interval"></a>

```go
func Interval() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Retries`<sup>Required</sup> <a name="Retries" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.retries"></a>

```go
func Retries() *f64
```

- *Type:* *f64

---

##### `Suspended`<sup>Required</sup> <a name="Suspended" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.suspended"></a>

```go
func Suspended() interface{}
```

- *Type:* interface{}

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.timeout"></a>

```go
func Timeout() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### HealthcheckConfig <a name="HealthcheckConfig" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/healthcheck"

&healthcheck.HealthcheckConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Address: *string,
	Name: *string,
	ZoneId: *string,
	CheckRegions: *[]*string,
	ConsecutiveFails: *f64,
	ConsecutiveSuccesses: *f64,
	Description: *string,
	HttpConfig: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13.healthcheck.HealthcheckHttpConfig,
	Interval: *f64,
	Retries: *f64,
	Suspended: interface{},
	TcpConfig: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13.healthcheck.HealthcheckTcpConfig,
	Timeout: *f64,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.address">Address</a></code> | <code>*string</code> | The hostname or IP address of the origin server to run health checks on. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.name">Name</a></code> | <code>*string</code> | A short name to identify the health check. Only alphanumeric characters, hyphens and underscores are allowed. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.zoneId">ZoneId</a></code> | <code>*string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.checkRegions">CheckRegions</a></code> | <code>*[]*string</code> | A list of regions from which to run health checks. Null means Cloudflare will pick a default region. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.consecutiveFails">ConsecutiveFails</a></code> | <code>*f64</code> | The number of consecutive fails required from a health check before changing the health to unhealthy. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.consecutiveSuccesses">ConsecutiveSuccesses</a></code> | <code>*f64</code> | The number of consecutive successes required from a health check before changing the health to healthy. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.description">Description</a></code> | <code>*string</code> | A human-readable description of the health check. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.httpConfig">HttpConfig</a></code> | <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfig">HealthcheckHttpConfig</a></code> | Parameters specific to an HTTP or HTTPS health check. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.interval">Interval</a></code> | <code>*f64</code> | The interval between each health check. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.retries">Retries</a></code> | <code>*f64</code> | The number of retries to attempt in case of a timeout before marking the origin as unhealthy. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.suspended">Suspended</a></code> | <code>interface{}</code> | If suspended, no health checks are sent to the origin. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.tcpConfig">TcpConfig</a></code> | <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfig">HealthcheckTcpConfig</a></code> | Parameters specific to TCP health check. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.timeout">Timeout</a></code> | <code>*f64</code> | The timeout (in seconds) before marking the health check as failed. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.type">Type</a></code> | <code>*string</code> | The protocol to use for the health check. Currently supported protocols are 'HTTP', 'HTTPS' and 'TCP'. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.address"></a>

```go
Address *string
```

- *Type:* *string

The hostname or IP address of the origin server to run health checks on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/healthcheck#address Healthcheck#address}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

A short name to identify the health check. Only alphanumeric characters, hyphens and underscores are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/healthcheck#name Healthcheck#name}

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.zoneId"></a>

```go
ZoneId *string
```

- *Type:* *string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/healthcheck#zone_id Healthcheck#zone_id}

---

##### `CheckRegions`<sup>Optional</sup> <a name="CheckRegions" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.checkRegions"></a>

```go
CheckRegions *[]*string
```

- *Type:* *[]*string

A list of regions from which to run health checks. Null means Cloudflare will pick a default region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/healthcheck#check_regions Healthcheck#check_regions}

---

##### `ConsecutiveFails`<sup>Optional</sup> <a name="ConsecutiveFails" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.consecutiveFails"></a>

```go
ConsecutiveFails *f64
```

- *Type:* *f64

The number of consecutive fails required from a health check before changing the health to unhealthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/healthcheck#consecutive_fails Healthcheck#consecutive_fails}

---

##### `ConsecutiveSuccesses`<sup>Optional</sup> <a name="ConsecutiveSuccesses" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.consecutiveSuccesses"></a>

```go
ConsecutiveSuccesses *f64
```

- *Type:* *f64

The number of consecutive successes required from a health check before changing the health to healthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/healthcheck#consecutive_successes Healthcheck#consecutive_successes}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A human-readable description of the health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/healthcheck#description Healthcheck#description}

---

##### `HttpConfig`<sup>Optional</sup> <a name="HttpConfig" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.httpConfig"></a>

```go
HttpConfig HealthcheckHttpConfig
```

- *Type:* <a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfig">HealthcheckHttpConfig</a>

Parameters specific to an HTTP or HTTPS health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/healthcheck#http_config Healthcheck#http_config}

---

##### `Interval`<sup>Optional</sup> <a name="Interval" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.interval"></a>

```go
Interval *f64
```

- *Type:* *f64

The interval between each health check.

Shorter intervals may give quicker notifications if the origin status changes, but will increase load on the origin as we check from multiple locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/healthcheck#interval Healthcheck#interval}

---

##### `Retries`<sup>Optional</sup> <a name="Retries" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.retries"></a>

```go
Retries *f64
```

- *Type:* *f64

The number of retries to attempt in case of a timeout before marking the origin as unhealthy.

Retries are attempted immediately.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/healthcheck#retries Healthcheck#retries}

---

##### `Suspended`<sup>Optional</sup> <a name="Suspended" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.suspended"></a>

```go
Suspended interface{}
```

- *Type:* interface{}

If suspended, no health checks are sent to the origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/healthcheck#suspended Healthcheck#suspended}

---

##### `TcpConfig`<sup>Optional</sup> <a name="TcpConfig" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.tcpConfig"></a>

```go
TcpConfig HealthcheckTcpConfig
```

- *Type:* <a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfig">HealthcheckTcpConfig</a>

Parameters specific to TCP health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/healthcheck#tcp_config Healthcheck#tcp_config}

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.timeout"></a>

```go
Timeout *f64
```

- *Type:* *f64

The timeout (in seconds) before marking the health check as failed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/healthcheck#timeout Healthcheck#timeout}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

The protocol to use for the health check. Currently supported protocols are 'HTTP', 'HTTPS' and 'TCP'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/healthcheck#type Healthcheck#type}

---

### HealthcheckHttpConfig <a name="HealthcheckHttpConfig" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/healthcheck"

&healthcheck.HealthcheckHttpConfig {
	AllowInsecure: interface{},
	ExpectedBody: *string,
	ExpectedCodes: *[]*string,
	FollowRedirects: interface{},
	Header: interface{},
	Method: *string,
	Path: *string,
	Port: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfig.property.allowInsecure">AllowInsecure</a></code> | <code>interface{}</code> | Do not validate the certificate when the health check uses HTTPS. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfig.property.expectedBody">ExpectedBody</a></code> | <code>*string</code> | A case-insensitive sub-string to look for in the response body. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfig.property.expectedCodes">ExpectedCodes</a></code> | <code>*[]*string</code> | The expected HTTP response codes (e.g. "200") or code ranges (e.g. "2xx" for all codes starting with 2) of the health check. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfig.property.followRedirects">FollowRedirects</a></code> | <code>interface{}</code> | Follow redirects if the origin returns a 3xx status code. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfig.property.header">Header</a></code> | <code>interface{}</code> | The HTTP request headers to send in the health check. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfig.property.method">Method</a></code> | <code>*string</code> | The HTTP method to use for the health check. Available values: "GET", "HEAD". |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfig.property.path">Path</a></code> | <code>*string</code> | The endpoint path to health check against. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfig.property.port">Port</a></code> | <code>*f64</code> | Port number to connect to for the health check. |

---

##### `AllowInsecure`<sup>Optional</sup> <a name="AllowInsecure" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfig.property.allowInsecure"></a>

```go
AllowInsecure interface{}
```

- *Type:* interface{}

Do not validate the certificate when the health check uses HTTPS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/healthcheck#allow_insecure Healthcheck#allow_insecure}

---

##### `ExpectedBody`<sup>Optional</sup> <a name="ExpectedBody" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfig.property.expectedBody"></a>

```go
ExpectedBody *string
```

- *Type:* *string

A case-insensitive sub-string to look for in the response body.

If this string is not found, the origin will be marked as unhealthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/healthcheck#expected_body Healthcheck#expected_body}

---

##### `ExpectedCodes`<sup>Optional</sup> <a name="ExpectedCodes" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfig.property.expectedCodes"></a>

```go
ExpectedCodes *[]*string
```

- *Type:* *[]*string

The expected HTTP response codes (e.g. "200") or code ranges (e.g. "2xx" for all codes starting with 2) of the health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/healthcheck#expected_codes Healthcheck#expected_codes}

---

##### `FollowRedirects`<sup>Optional</sup> <a name="FollowRedirects" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfig.property.followRedirects"></a>

```go
FollowRedirects interface{}
```

- *Type:* interface{}

Follow redirects if the origin returns a 3xx status code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/healthcheck#follow_redirects Healthcheck#follow_redirects}

---

##### `Header`<sup>Optional</sup> <a name="Header" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfig.property.header"></a>

```go
Header interface{}
```

- *Type:* interface{}

The HTTP request headers to send in the health check.

It is recommended you set a Host header by default. The User-Agent header cannot be overridden.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/healthcheck#header Healthcheck#header}

---

##### `Method`<sup>Optional</sup> <a name="Method" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfig.property.method"></a>

```go
Method *string
```

- *Type:* *string

The HTTP method to use for the health check. Available values: "GET", "HEAD".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/healthcheck#method Healthcheck#method}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfig.property.path"></a>

```go
Path *string
```

- *Type:* *string

The endpoint path to health check against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/healthcheck#path Healthcheck#path}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfig.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Port number to connect to for the health check.

Defaults to 80 if type is HTTP or 443 if type is HTTPS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/healthcheck#port Healthcheck#port}

---

### HealthcheckTcpConfig <a name="HealthcheckTcpConfig" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/healthcheck"

&healthcheck.HealthcheckTcpConfig {
	Method: *string,
	Port: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfig.property.method">Method</a></code> | <code>*string</code> | The TCP connection method to use for the health check. Available values: "connection_established". |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfig.property.port">Port</a></code> | <code>*f64</code> | Port number to connect to for the health check. Defaults to 80. |

---

##### `Method`<sup>Optional</sup> <a name="Method" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfig.property.method"></a>

```go
Method *string
```

- *Type:* *string

The TCP connection method to use for the health check. Available values: "connection_established".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/healthcheck#method Healthcheck#method}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfig.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Port number to connect to for the health check. Defaults to 80.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/healthcheck#port Healthcheck#port}

---

## Classes <a name="Classes" id="Classes"></a>

### HealthcheckHttpConfigOutputReference <a name="HealthcheckHttpConfigOutputReference" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/healthcheck"

healthcheck.NewHealthcheckHttpConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HealthcheckHttpConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.resetAllowInsecure">ResetAllowInsecure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.resetExpectedBody">ResetExpectedBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.resetExpectedCodes">ResetExpectedCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.resetFollowRedirects">ResetFollowRedirects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.resetHeader">ResetHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.resetMethod">ResetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.resetPort">ResetPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowInsecure` <a name="ResetAllowInsecure" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.resetAllowInsecure"></a>

```go
func ResetAllowInsecure()
```

##### `ResetExpectedBody` <a name="ResetExpectedBody" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.resetExpectedBody"></a>

```go
func ResetExpectedBody()
```

##### `ResetExpectedCodes` <a name="ResetExpectedCodes" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.resetExpectedCodes"></a>

```go
func ResetExpectedCodes()
```

##### `ResetFollowRedirects` <a name="ResetFollowRedirects" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.resetFollowRedirects"></a>

```go
func ResetFollowRedirects()
```

##### `ResetHeader` <a name="ResetHeader" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.resetHeader"></a>

```go
func ResetHeader()
```

##### `ResetMethod` <a name="ResetMethod" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.resetMethod"></a>

```go
func ResetMethod()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.resetPath"></a>

```go
func ResetPath()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.resetPort"></a>

```go
func ResetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.allowInsecureInput">AllowInsecureInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.expectedBodyInput">ExpectedBodyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.expectedCodesInput">ExpectedCodesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.followRedirectsInput">FollowRedirectsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.headerInput">HeaderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.methodInput">MethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.allowInsecure">AllowInsecure</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.expectedBody">ExpectedBody</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.expectedCodes">ExpectedCodes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.followRedirects">FollowRedirects</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.header">Header</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.method">Method</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowInsecureInput`<sup>Optional</sup> <a name="AllowInsecureInput" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.allowInsecureInput"></a>

```go
func AllowInsecureInput() interface{}
```

- *Type:* interface{}

---

##### `ExpectedBodyInput`<sup>Optional</sup> <a name="ExpectedBodyInput" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.expectedBodyInput"></a>

```go
func ExpectedBodyInput() *string
```

- *Type:* *string

---

##### `ExpectedCodesInput`<sup>Optional</sup> <a name="ExpectedCodesInput" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.expectedCodesInput"></a>

```go
func ExpectedCodesInput() *[]*string
```

- *Type:* *[]*string

---

##### `FollowRedirectsInput`<sup>Optional</sup> <a name="FollowRedirectsInput" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.followRedirectsInput"></a>

```go
func FollowRedirectsInput() interface{}
```

- *Type:* interface{}

---

##### `HeaderInput`<sup>Optional</sup> <a name="HeaderInput" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.headerInput"></a>

```go
func HeaderInput() interface{}
```

- *Type:* interface{}

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.methodInput"></a>

```go
func MethodInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `AllowInsecure`<sup>Required</sup> <a name="AllowInsecure" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.allowInsecure"></a>

```go
func AllowInsecure() interface{}
```

- *Type:* interface{}

---

##### `ExpectedBody`<sup>Required</sup> <a name="ExpectedBody" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.expectedBody"></a>

```go
func ExpectedBody() *string
```

- *Type:* *string

---

##### `ExpectedCodes`<sup>Required</sup> <a name="ExpectedCodes" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.expectedCodes"></a>

```go
func ExpectedCodes() *[]*string
```

- *Type:* *[]*string

---

##### `FollowRedirects`<sup>Required</sup> <a name="FollowRedirects" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.followRedirects"></a>

```go
func FollowRedirects() interface{}
```

- *Type:* interface{}

---

##### `Header`<sup>Required</sup> <a name="Header" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.header"></a>

```go
func Header() interface{}
```

- *Type:* interface{}

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.method"></a>

```go
func Method() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### HealthcheckTcpConfigOutputReference <a name="HealthcheckTcpConfigOutputReference" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/healthcheck"

healthcheck.NewHealthcheckTcpConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HealthcheckTcpConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.resetMethod">ResetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.resetPort">ResetPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMethod` <a name="ResetMethod" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.resetMethod"></a>

```go
func ResetMethod()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.resetPort"></a>

```go
func ResetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.property.methodInput">MethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.property.method">Method</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.property.methodInput"></a>

```go
func MethodInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.property.method"></a>

```go
func Method() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



