# `logpushJob` Submodule <a name="`logpushJob` Submodule" id="@cdktf/provider-cloudflare.logpushJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogpushJob <a name="LogpushJob" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/logpush_job cloudflare_logpush_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/logpushjob"

logpushjob.NewLogpushJob(scope Construct, id *string, config LogpushJobConfig) LogpushJob
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig">LogpushJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig">LogpushJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.putOutputOptions">PutOutputOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetFrequency">ResetFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetKind">ResetKind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetLogpullOptions">ResetLogpullOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetMaxUploadBytes">ResetMaxUploadBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetMaxUploadIntervalSeconds">ResetMaxUploadIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetMaxUploadRecords">ResetMaxUploadRecords</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetOutputOptions">ResetOutputOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetOwnershipChallenge">ResetOwnershipChallenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetZoneId">ResetZoneId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutOutputOptions` <a name="PutOutputOptions" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.putOutputOptions"></a>

```go
func PutOutputOptions(value LogpushJobOutputOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.putOutputOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions">LogpushJobOutputOptions</a>

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetAccountId"></a>

```go
func ResetAccountId()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetFrequency` <a name="ResetFrequency" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetFrequency"></a>

```go
func ResetFrequency()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetId"></a>

```go
func ResetId()
```

##### `ResetKind` <a name="ResetKind" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetKind"></a>

```go
func ResetKind()
```

##### `ResetLogpullOptions` <a name="ResetLogpullOptions" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetLogpullOptions"></a>

```go
func ResetLogpullOptions()
```

##### `ResetMaxUploadBytes` <a name="ResetMaxUploadBytes" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetMaxUploadBytes"></a>

```go
func ResetMaxUploadBytes()
```

##### `ResetMaxUploadIntervalSeconds` <a name="ResetMaxUploadIntervalSeconds" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetMaxUploadIntervalSeconds"></a>

```go
func ResetMaxUploadIntervalSeconds()
```

##### `ResetMaxUploadRecords` <a name="ResetMaxUploadRecords" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetMaxUploadRecords"></a>

```go
func ResetMaxUploadRecords()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetName"></a>

```go
func ResetName()
```

##### `ResetOutputOptions` <a name="ResetOutputOptions" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetOutputOptions"></a>

```go
func ResetOutputOptions()
```

##### `ResetOwnershipChallenge` <a name="ResetOwnershipChallenge" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetOwnershipChallenge"></a>

```go
func ResetOwnershipChallenge()
```

##### `ResetZoneId` <a name="ResetZoneId" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetZoneId"></a>

```go
func ResetZoneId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LogpushJob resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/logpushjob"

logpushjob.LogpushJob_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/logpushjob"

logpushjob.LogpushJob_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/logpushjob"

logpushjob.LogpushJob_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/logpushjob"

logpushjob.LogpushJob_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a LogpushJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the LogpushJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing LogpushJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/logpush_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the LogpushJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.outputOptions">OutputOptions</a></code> | <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference">LogpushJobOutputOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.datasetInput">DatasetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.destinationConfInput">DestinationConfInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.filterInput">FilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.frequencyInput">FrequencyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.kindInput">KindInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.logpullOptionsInput">LogpullOptionsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.maxUploadBytesInput">MaxUploadBytesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.maxUploadIntervalSecondsInput">MaxUploadIntervalSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.maxUploadRecordsInput">MaxUploadRecordsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.outputOptionsInput">OutputOptionsInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions">LogpushJobOutputOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.ownershipChallengeInput">OwnershipChallengeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.zoneIdInput">ZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.dataset">Dataset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.destinationConf">DestinationConf</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.filter">Filter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.frequency">Frequency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.kind">Kind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.logpullOptions">LogpullOptions</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.maxUploadBytes">MaxUploadBytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.maxUploadIntervalSeconds">MaxUploadIntervalSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.maxUploadRecords">MaxUploadRecords</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.ownershipChallenge">OwnershipChallenge</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `OutputOptions`<sup>Required</sup> <a name="OutputOptions" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.outputOptions"></a>

```go
func OutputOptions() LogpushJobOutputOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference">LogpushJobOutputOptionsOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `DatasetInput`<sup>Optional</sup> <a name="DatasetInput" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.datasetInput"></a>

```go
func DatasetInput() *string
```

- *Type:* *string

---

##### `DestinationConfInput`<sup>Optional</sup> <a name="DestinationConfInput" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.destinationConfInput"></a>

```go
func DestinationConfInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.filterInput"></a>

```go
func FilterInput() *string
```

- *Type:* *string

---

##### `FrequencyInput`<sup>Optional</sup> <a name="FrequencyInput" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.frequencyInput"></a>

```go
func FrequencyInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KindInput`<sup>Optional</sup> <a name="KindInput" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.kindInput"></a>

```go
func KindInput() *string
```

- *Type:* *string

---

##### `LogpullOptionsInput`<sup>Optional</sup> <a name="LogpullOptionsInput" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.logpullOptionsInput"></a>

```go
func LogpullOptionsInput() *string
```

- *Type:* *string

---

##### `MaxUploadBytesInput`<sup>Optional</sup> <a name="MaxUploadBytesInput" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.maxUploadBytesInput"></a>

```go
func MaxUploadBytesInput() *f64
```

- *Type:* *f64

---

##### `MaxUploadIntervalSecondsInput`<sup>Optional</sup> <a name="MaxUploadIntervalSecondsInput" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.maxUploadIntervalSecondsInput"></a>

```go
func MaxUploadIntervalSecondsInput() *f64
```

- *Type:* *f64

---

##### `MaxUploadRecordsInput`<sup>Optional</sup> <a name="MaxUploadRecordsInput" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.maxUploadRecordsInput"></a>

```go
func MaxUploadRecordsInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OutputOptionsInput`<sup>Optional</sup> <a name="OutputOptionsInput" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.outputOptionsInput"></a>

```go
func OutputOptionsInput() LogpushJobOutputOptions
```

- *Type:* <a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions">LogpushJobOutputOptions</a>

---

##### `OwnershipChallengeInput`<sup>Optional</sup> <a name="OwnershipChallengeInput" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.ownershipChallengeInput"></a>

```go
func OwnershipChallengeInput() *string
```

- *Type:* *string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.zoneIdInput"></a>

```go
func ZoneIdInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `Dataset`<sup>Required</sup> <a name="Dataset" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.dataset"></a>

```go
func Dataset() *string
```

- *Type:* *string

---

##### `DestinationConf`<sup>Required</sup> <a name="DestinationConf" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.destinationConf"></a>

```go
func DestinationConf() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.filter"></a>

```go
func Filter() *string
```

- *Type:* *string

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.frequency"></a>

```go
func Frequency() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.kind"></a>

```go
func Kind() *string
```

- *Type:* *string

---

##### `LogpullOptions`<sup>Required</sup> <a name="LogpullOptions" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.logpullOptions"></a>

```go
func LogpullOptions() *string
```

- *Type:* *string

---

##### `MaxUploadBytes`<sup>Required</sup> <a name="MaxUploadBytes" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.maxUploadBytes"></a>

```go
func MaxUploadBytes() *f64
```

- *Type:* *f64

---

##### `MaxUploadIntervalSeconds`<sup>Required</sup> <a name="MaxUploadIntervalSeconds" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.maxUploadIntervalSeconds"></a>

```go
func MaxUploadIntervalSeconds() *f64
```

- *Type:* *f64

---

##### `MaxUploadRecords`<sup>Required</sup> <a name="MaxUploadRecords" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.maxUploadRecords"></a>

```go
func MaxUploadRecords() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OwnershipChallenge`<sup>Required</sup> <a name="OwnershipChallenge" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.ownershipChallenge"></a>

```go
func OwnershipChallenge() *string
```

- *Type:* *string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LogpushJobConfig <a name="LogpushJobConfig" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/logpushjob"

&logpushjob.LogpushJobConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Dataset: *string,
	DestinationConf: *string,
	AccountId: *string,
	Enabled: interface{},
	Filter: *string,
	Frequency: *string,
	Id: *string,
	Kind: *string,
	LogpullOptions: *string,
	MaxUploadBytes: *f64,
	MaxUploadIntervalSeconds: *f64,
	MaxUploadRecords: *f64,
	Name: *string,
	OutputOptions: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11.logpushJob.LogpushJobOutputOptions,
	OwnershipChallenge: *string,
	ZoneId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.dataset">Dataset</a></code> | <code>*string</code> | The kind of the dataset to use with the logpush job. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.destinationConf">DestinationConf</a></code> | <code>*string</code> | Uniquely identifies a resource (such as an s3 bucket) where data will be pushed. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.accountId">AccountId</a></code> | <code>*string</code> | The account identifier to target for the resource. Must provide only one of `account_id`, `zone_id`. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether to enable the job. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.filter">Filter</a></code> | <code>*string</code> | Use filters to select the events to include and/or remove from your logs. For more information, refer to [Filters](https://developers.cloudflare.com/logs/reference/logpush-api-configuration/filters/). |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.frequency">Frequency</a></code> | <code>*string</code> | A higher frequency will result in logs being pushed on faster with smaller files. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/logpush_job#id LogpushJob#id}. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.kind">Kind</a></code> | <code>*string</code> | The kind of logpush job to create. Available values: `edge`, `instant-logs`, `""`. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.logpullOptions">LogpullOptions</a></code> | <code>*string</code> | Configuration string for the Logshare API. It specifies things like requested fields and timestamp formats. See [Logpush options documentation](https://developers.cloudflare.com/logs/logpush/logpush-configuration-api/understanding-logpush-api/#options). |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.maxUploadBytes">MaxUploadBytes</a></code> | <code>*f64</code> | The maximum uncompressed file size of a batch of logs. Value must be between 5MB and 1GB. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.maxUploadIntervalSeconds">MaxUploadIntervalSeconds</a></code> | <code>*f64</code> | The maximum interval in seconds for log batches. Value must be between 30 and 300. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.maxUploadRecords">MaxUploadRecords</a></code> | <code>*f64</code> | The maximum number of log lines per batch. Value must be between 1000 and 1,000,000. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.name">Name</a></code> | <code>*string</code> | The name of the logpush job to create. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.outputOptions">OutputOptions</a></code> | <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions">LogpushJobOutputOptions</a></code> | output_options block. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.ownershipChallenge">OwnershipChallenge</a></code> | <code>*string</code> | Ownership challenge token to prove destination ownership, required when destination is Amazon S3, Google Cloud Storage, Microsoft Azure or Sumo Logic. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.zoneId">ZoneId</a></code> | <code>*string</code> | The zone identifier to target for the resource. Must provide only one of `account_id`, `zone_id`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Dataset`<sup>Required</sup> <a name="Dataset" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.dataset"></a>

```go
Dataset *string
```

- *Type:* *string

The kind of the dataset to use with the logpush job.

Available values: `access_requests`, `casb_findings`, `firewall_events`, `http_requests`, `spectrum_events`, `nel_reports`, `audit_logs`, `gateway_dns`, `gateway_http`, `gateway_network`, `dns_logs`, `network_analytics_logs`, `workers_trace_events`, `device_posture_results`, `zero_trust_network_sessions`, `magic_ids_detections`, `page_shield_events`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/logpush_job#dataset LogpushJob#dataset}

---

##### `DestinationConf`<sup>Required</sup> <a name="DestinationConf" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.destinationConf"></a>

```go
DestinationConf *string
```

- *Type:* *string

Uniquely identifies a resource (such as an s3 bucket) where data will be pushed.

Additional configuration parameters supported by the destination may be included. See [Logpush destination documentation](https://developers.cloudflare.com/logs/reference/logpush-api-configuration#destination).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/logpush_job#destination_conf LogpushJob#destination_conf}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

The account identifier to target for the resource. Must provide only one of `account_id`, `zone_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/logpush_job#account_id LogpushJob#account_id}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether to enable the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/logpush_job#enabled LogpushJob#enabled}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.filter"></a>

```go
Filter *string
```

- *Type:* *string

Use filters to select the events to include and/or remove from your logs. For more information, refer to [Filters](https://developers.cloudflare.com/logs/reference/logpush-api-configuration/filters/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/logpush_job#filter LogpushJob#filter}

---

##### `Frequency`<sup>Optional</sup> <a name="Frequency" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.frequency"></a>

```go
Frequency *string
```

- *Type:* *string

A higher frequency will result in logs being pushed on faster with smaller files.

`low` frequency will push logs less often with larger files. Available values: `high`, `low`. Defaults to `high`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/logpush_job#frequency LogpushJob#frequency}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/logpush_job#id LogpushJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Kind`<sup>Optional</sup> <a name="Kind" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.kind"></a>

```go
Kind *string
```

- *Type:* *string

The kind of logpush job to create. Available values: `edge`, `instant-logs`, `""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/logpush_job#kind LogpushJob#kind}

---

##### `LogpullOptions`<sup>Optional</sup> <a name="LogpullOptions" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.logpullOptions"></a>

```go
LogpullOptions *string
```

- *Type:* *string

Configuration string for the Logshare API. It specifies things like requested fields and timestamp formats. See [Logpush options documentation](https://developers.cloudflare.com/logs/logpush/logpush-configuration-api/understanding-logpush-api/#options).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/logpush_job#logpull_options LogpushJob#logpull_options}

---

##### `MaxUploadBytes`<sup>Optional</sup> <a name="MaxUploadBytes" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.maxUploadBytes"></a>

```go
MaxUploadBytes *f64
```

- *Type:* *f64

The maximum uncompressed file size of a batch of logs. Value must be between 5MB and 1GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/logpush_job#max_upload_bytes LogpushJob#max_upload_bytes}

---

##### `MaxUploadIntervalSeconds`<sup>Optional</sup> <a name="MaxUploadIntervalSeconds" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.maxUploadIntervalSeconds"></a>

```go
MaxUploadIntervalSeconds *f64
```

- *Type:* *f64

The maximum interval in seconds for log batches. Value must be between 30 and 300.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/logpush_job#max_upload_interval_seconds LogpushJob#max_upload_interval_seconds}

---

##### `MaxUploadRecords`<sup>Optional</sup> <a name="MaxUploadRecords" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.maxUploadRecords"></a>

```go
MaxUploadRecords *f64
```

- *Type:* *f64

The maximum number of log lines per batch. Value must be between 1000 and 1,000,000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/logpush_job#max_upload_records LogpushJob#max_upload_records}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the logpush job to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/logpush_job#name LogpushJob#name}

---

##### `OutputOptions`<sup>Optional</sup> <a name="OutputOptions" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.outputOptions"></a>

```go
OutputOptions LogpushJobOutputOptions
```

- *Type:* <a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions">LogpushJobOutputOptions</a>

output_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/logpush_job#output_options LogpushJob#output_options}

---

##### `OwnershipChallenge`<sup>Optional</sup> <a name="OwnershipChallenge" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.ownershipChallenge"></a>

```go
OwnershipChallenge *string
```

- *Type:* *string

Ownership challenge token to prove destination ownership, required when destination is Amazon S3, Google Cloud Storage, Microsoft Azure or Sumo Logic.

See [Developer documentation](https://developers.cloudflare.com/logs/logpush/logpush-configuration-api/understanding-logpush-api/#usage).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/logpush_job#ownership_challenge LogpushJob#ownership_challenge}

---

##### `ZoneId`<sup>Optional</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.zoneId"></a>

```go
ZoneId *string
```

- *Type:* *string

The zone identifier to target for the resource. Must provide only one of `account_id`, `zone_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/logpush_job#zone_id LogpushJob#zone_id}

---

### LogpushJobOutputOptions <a name="LogpushJobOutputOptions" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/logpushjob"

&logpushjob.LogpushJobOutputOptions {
	BatchPrefix: *string,
	BatchSuffix: *string,
	Cve20214428: interface{},
	FieldDelimiter: *string,
	FieldNames: *[]*string,
	OutputType: *string,
	RecordDelimiter: *string,
	RecordPrefix: *string,
	RecordSuffix: *string,
	RecordTemplate: *string,
	SampleRate: *f64,
	TimestampFormat: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions.property.batchPrefix">BatchPrefix</a></code> | <code>*string</code> | String to be prepended before each batch. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions.property.batchSuffix">BatchSuffix</a></code> | <code>*string</code> | String to be appended after each batch. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions.property.cve20214428">Cve20214428</a></code> | <code>interface{}</code> | Mitigation for CVE-2021-44228. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions.property.fieldDelimiter">FieldDelimiter</a></code> | <code>*string</code> | String to join fields. This field be ignored when record_template is set. Defaults to `,`. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions.property.fieldNames">FieldNames</a></code> | <code>*[]*string</code> | List of field names to be included in the Logpush output. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions.property.outputType">OutputType</a></code> | <code>*string</code> | Specifies the output type. Available values: `ndjson`, `csv`. Defaults to `ndjson`. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions.property.recordDelimiter">RecordDelimiter</a></code> | <code>*string</code> | String to be inserted in-between the records as separator. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions.property.recordPrefix">RecordPrefix</a></code> | <code>*string</code> | String to be prepended before each record. Defaults to `{`. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions.property.recordSuffix">RecordSuffix</a></code> | <code>*string</code> | String to be appended after each record. Defaults to `}`. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions.property.recordTemplate">RecordTemplate</a></code> | <code>*string</code> | String to use as template for each record instead of the default comma-separated list. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions.property.sampleRate">SampleRate</a></code> | <code>*f64</code> | Specifies the sampling rate. Defaults to `1`. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions.property.timestampFormat">TimestampFormat</a></code> | <code>*string</code> | Specifies the format for timestamps. Available values: `unixnano`, `unix`, `rfc3339`. Defaults to `unixnano`. |

---

##### `BatchPrefix`<sup>Optional</sup> <a name="BatchPrefix" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions.property.batchPrefix"></a>

```go
BatchPrefix *string
```

- *Type:* *string

String to be prepended before each batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/logpush_job#batch_prefix LogpushJob#batch_prefix}

---

##### `BatchSuffix`<sup>Optional</sup> <a name="BatchSuffix" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions.property.batchSuffix"></a>

```go
BatchSuffix *string
```

- *Type:* *string

String to be appended after each batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/logpush_job#batch_suffix LogpushJob#batch_suffix}

---

##### `Cve20214428`<sup>Optional</sup> <a name="Cve20214428" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions.property.cve20214428"></a>

```go
Cve20214428 interface{}
```

- *Type:* interface{}

Mitigation for CVE-2021-44228.

If set to true, will cause all occurrences of ${ in the generated files to be replaced with x{. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/logpush_job#cve20214428 LogpushJob#cve20214428}

---

##### `FieldDelimiter`<sup>Optional</sup> <a name="FieldDelimiter" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions.property.fieldDelimiter"></a>

```go
FieldDelimiter *string
```

- *Type:* *string

String to join fields. This field be ignored when record_template is set. Defaults to `,`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/logpush_job#field_delimiter LogpushJob#field_delimiter}

---

##### `FieldNames`<sup>Optional</sup> <a name="FieldNames" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions.property.fieldNames"></a>

```go
FieldNames *[]*string
```

- *Type:* *[]*string

List of field names to be included in the Logpush output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/logpush_job#field_names LogpushJob#field_names}

---

##### `OutputType`<sup>Optional</sup> <a name="OutputType" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions.property.outputType"></a>

```go
OutputType *string
```

- *Type:* *string

Specifies the output type. Available values: `ndjson`, `csv`. Defaults to `ndjson`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/logpush_job#output_type LogpushJob#output_type}

---

##### `RecordDelimiter`<sup>Optional</sup> <a name="RecordDelimiter" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions.property.recordDelimiter"></a>

```go
RecordDelimiter *string
```

- *Type:* *string

String to be inserted in-between the records as separator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/logpush_job#record_delimiter LogpushJob#record_delimiter}

---

##### `RecordPrefix`<sup>Optional</sup> <a name="RecordPrefix" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions.property.recordPrefix"></a>

```go
RecordPrefix *string
```

- *Type:* *string

String to be prepended before each record. Defaults to `{`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/logpush_job#record_prefix LogpushJob#record_prefix}

---

##### `RecordSuffix`<sup>Optional</sup> <a name="RecordSuffix" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions.property.recordSuffix"></a>

```go
RecordSuffix *string
```

- *Type:* *string

String to be appended after each record. Defaults to `}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/logpush_job#record_suffix LogpushJob#record_suffix}

---

##### `RecordTemplate`<sup>Optional</sup> <a name="RecordTemplate" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions.property.recordTemplate"></a>

```go
RecordTemplate *string
```

- *Type:* *string

String to use as template for each record instead of the default comma-separated list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/logpush_job#record_template LogpushJob#record_template}

---

##### `SampleRate`<sup>Optional</sup> <a name="SampleRate" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions.property.sampleRate"></a>

```go
SampleRate *f64
```

- *Type:* *f64

Specifies the sampling rate. Defaults to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/logpush_job#sample_rate LogpushJob#sample_rate}

---

##### `TimestampFormat`<sup>Optional</sup> <a name="TimestampFormat" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions.property.timestampFormat"></a>

```go
TimestampFormat *string
```

- *Type:* *string

Specifies the format for timestamps. Available values: `unixnano`, `unix`, `rfc3339`. Defaults to `unixnano`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/logpush_job#timestamp_format LogpushJob#timestamp_format}

---

## Classes <a name="Classes" id="Classes"></a>

### LogpushJobOutputOptionsOutputReference <a name="LogpushJobOutputOptionsOutputReference" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/logpushjob"

logpushjob.NewLogpushJobOutputOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LogpushJobOutputOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.resetBatchPrefix">ResetBatchPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.resetBatchSuffix">ResetBatchSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.resetCve20214428">ResetCve20214428</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.resetFieldDelimiter">ResetFieldDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.resetFieldNames">ResetFieldNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.resetOutputType">ResetOutputType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.resetRecordDelimiter">ResetRecordDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.resetRecordPrefix">ResetRecordPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.resetRecordSuffix">ResetRecordSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.resetRecordTemplate">ResetRecordTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.resetSampleRate">ResetSampleRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.resetTimestampFormat">ResetTimestampFormat</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBatchPrefix` <a name="ResetBatchPrefix" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.resetBatchPrefix"></a>

```go
func ResetBatchPrefix()
```

##### `ResetBatchSuffix` <a name="ResetBatchSuffix" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.resetBatchSuffix"></a>

```go
func ResetBatchSuffix()
```

##### `ResetCve20214428` <a name="ResetCve20214428" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.resetCve20214428"></a>

```go
func ResetCve20214428()
```

##### `ResetFieldDelimiter` <a name="ResetFieldDelimiter" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.resetFieldDelimiter"></a>

```go
func ResetFieldDelimiter()
```

##### `ResetFieldNames` <a name="ResetFieldNames" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.resetFieldNames"></a>

```go
func ResetFieldNames()
```

##### `ResetOutputType` <a name="ResetOutputType" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.resetOutputType"></a>

```go
func ResetOutputType()
```

##### `ResetRecordDelimiter` <a name="ResetRecordDelimiter" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.resetRecordDelimiter"></a>

```go
func ResetRecordDelimiter()
```

##### `ResetRecordPrefix` <a name="ResetRecordPrefix" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.resetRecordPrefix"></a>

```go
func ResetRecordPrefix()
```

##### `ResetRecordSuffix` <a name="ResetRecordSuffix" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.resetRecordSuffix"></a>

```go
func ResetRecordSuffix()
```

##### `ResetRecordTemplate` <a name="ResetRecordTemplate" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.resetRecordTemplate"></a>

```go
func ResetRecordTemplate()
```

##### `ResetSampleRate` <a name="ResetSampleRate" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.resetSampleRate"></a>

```go
func ResetSampleRate()
```

##### `ResetTimestampFormat` <a name="ResetTimestampFormat" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.resetTimestampFormat"></a>

```go
func ResetTimestampFormat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.batchPrefixInput">BatchPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.batchSuffixInput">BatchSuffixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.cve20214428Input">Cve20214428Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.fieldDelimiterInput">FieldDelimiterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.fieldNamesInput">FieldNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.outputTypeInput">OutputTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.recordDelimiterInput">RecordDelimiterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.recordPrefixInput">RecordPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.recordSuffixInput">RecordSuffixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.recordTemplateInput">RecordTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.sampleRateInput">SampleRateInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.timestampFormatInput">TimestampFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.batchPrefix">BatchPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.batchSuffix">BatchSuffix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.cve20214428">Cve20214428</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.fieldDelimiter">FieldDelimiter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.fieldNames">FieldNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.outputType">OutputType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.recordDelimiter">RecordDelimiter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.recordPrefix">RecordPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.recordSuffix">RecordSuffix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.recordTemplate">RecordTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.sampleRate">SampleRate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.timestampFormat">TimestampFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions">LogpushJobOutputOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BatchPrefixInput`<sup>Optional</sup> <a name="BatchPrefixInput" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.batchPrefixInput"></a>

```go
func BatchPrefixInput() *string
```

- *Type:* *string

---

##### `BatchSuffixInput`<sup>Optional</sup> <a name="BatchSuffixInput" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.batchSuffixInput"></a>

```go
func BatchSuffixInput() *string
```

- *Type:* *string

---

##### `Cve20214428Input`<sup>Optional</sup> <a name="Cve20214428Input" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.cve20214428Input"></a>

```go
func Cve20214428Input() interface{}
```

- *Type:* interface{}

---

##### `FieldDelimiterInput`<sup>Optional</sup> <a name="FieldDelimiterInput" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.fieldDelimiterInput"></a>

```go
func FieldDelimiterInput() *string
```

- *Type:* *string

---

##### `FieldNamesInput`<sup>Optional</sup> <a name="FieldNamesInput" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.fieldNamesInput"></a>

```go
func FieldNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `OutputTypeInput`<sup>Optional</sup> <a name="OutputTypeInput" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.outputTypeInput"></a>

```go
func OutputTypeInput() *string
```

- *Type:* *string

---

##### `RecordDelimiterInput`<sup>Optional</sup> <a name="RecordDelimiterInput" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.recordDelimiterInput"></a>

```go
func RecordDelimiterInput() *string
```

- *Type:* *string

---

##### `RecordPrefixInput`<sup>Optional</sup> <a name="RecordPrefixInput" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.recordPrefixInput"></a>

```go
func RecordPrefixInput() *string
```

- *Type:* *string

---

##### `RecordSuffixInput`<sup>Optional</sup> <a name="RecordSuffixInput" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.recordSuffixInput"></a>

```go
func RecordSuffixInput() *string
```

- *Type:* *string

---

##### `RecordTemplateInput`<sup>Optional</sup> <a name="RecordTemplateInput" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.recordTemplateInput"></a>

```go
func RecordTemplateInput() *string
```

- *Type:* *string

---

##### `SampleRateInput`<sup>Optional</sup> <a name="SampleRateInput" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.sampleRateInput"></a>

```go
func SampleRateInput() *f64
```

- *Type:* *f64

---

##### `TimestampFormatInput`<sup>Optional</sup> <a name="TimestampFormatInput" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.timestampFormatInput"></a>

```go
func TimestampFormatInput() *string
```

- *Type:* *string

---

##### `BatchPrefix`<sup>Required</sup> <a name="BatchPrefix" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.batchPrefix"></a>

```go
func BatchPrefix() *string
```

- *Type:* *string

---

##### `BatchSuffix`<sup>Required</sup> <a name="BatchSuffix" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.batchSuffix"></a>

```go
func BatchSuffix() *string
```

- *Type:* *string

---

##### `Cve20214428`<sup>Required</sup> <a name="Cve20214428" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.cve20214428"></a>

```go
func Cve20214428() interface{}
```

- *Type:* interface{}

---

##### `FieldDelimiter`<sup>Required</sup> <a name="FieldDelimiter" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.fieldDelimiter"></a>

```go
func FieldDelimiter() *string
```

- *Type:* *string

---

##### `FieldNames`<sup>Required</sup> <a name="FieldNames" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.fieldNames"></a>

```go
func FieldNames() *[]*string
```

- *Type:* *[]*string

---

##### `OutputType`<sup>Required</sup> <a name="OutputType" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.outputType"></a>

```go
func OutputType() *string
```

- *Type:* *string

---

##### `RecordDelimiter`<sup>Required</sup> <a name="RecordDelimiter" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.recordDelimiter"></a>

```go
func RecordDelimiter() *string
```

- *Type:* *string

---

##### `RecordPrefix`<sup>Required</sup> <a name="RecordPrefix" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.recordPrefix"></a>

```go
func RecordPrefix() *string
```

- *Type:* *string

---

##### `RecordSuffix`<sup>Required</sup> <a name="RecordSuffix" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.recordSuffix"></a>

```go
func RecordSuffix() *string
```

- *Type:* *string

---

##### `RecordTemplate`<sup>Required</sup> <a name="RecordTemplate" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.recordTemplate"></a>

```go
func RecordTemplate() *string
```

- *Type:* *string

---

##### `SampleRate`<sup>Required</sup> <a name="SampleRate" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.sampleRate"></a>

```go
func SampleRate() *f64
```

- *Type:* *f64

---

##### `TimestampFormat`<sup>Required</sup> <a name="TimestampFormat" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.timestampFormat"></a>

```go
func TimestampFormat() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() LogpushJobOutputOptions
```

- *Type:* <a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobOutputOptions">LogpushJobOutputOptions</a>

---



