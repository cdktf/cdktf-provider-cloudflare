# `streamLiveInput` Submodule <a name="`streamLiveInput` Submodule" id="@cdktf/provider-cloudflare.streamLiveInput"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StreamLiveInput <a name="StreamLiveInput" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/stream_live_input cloudflare_stream_live_input}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/streamliveinput"

streamliveinput.NewStreamLiveInput(scope Construct, id *string, config StreamLiveInputConfig) StreamLiveInput
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputConfig">StreamLiveInputConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputConfig">StreamLiveInputConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.putRecording">PutRecording</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.resetDefaultCreator">ResetDefaultCreator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.resetDeleteRecordingAfterDays">ResetDeleteRecordingAfterDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.resetLiveInputIdentifier">ResetLiveInputIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.resetMeta">ResetMeta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.resetRecording">ResetRecording</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRecording` <a name="PutRecording" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.putRecording"></a>

```go
func PutRecording(value StreamLiveInputRecording)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.putRecording.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecording">StreamLiveInputRecording</a>

---

##### `ResetDefaultCreator` <a name="ResetDefaultCreator" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.resetDefaultCreator"></a>

```go
func ResetDefaultCreator()
```

##### `ResetDeleteRecordingAfterDays` <a name="ResetDeleteRecordingAfterDays" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.resetDeleteRecordingAfterDays"></a>

```go
func ResetDeleteRecordingAfterDays()
```

##### `ResetLiveInputIdentifier` <a name="ResetLiveInputIdentifier" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.resetLiveInputIdentifier"></a>

```go
func ResetLiveInputIdentifier()
```

##### `ResetMeta` <a name="ResetMeta" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.resetMeta"></a>

```go
func ResetMeta()
```

##### `ResetRecording` <a name="ResetRecording" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.resetRecording"></a>

```go
func ResetRecording()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a StreamLiveInput resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/streamliveinput"

streamliveinput.StreamLiveInput_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/streamliveinput"

streamliveinput.StreamLiveInput_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/streamliveinput"

streamliveinput.StreamLiveInput_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/streamliveinput"

streamliveinput.StreamLiveInput_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a StreamLiveInput resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the StreamLiveInput to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing StreamLiveInput that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/stream_live_input#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the StreamLiveInput to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.created">Created</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.modified">Modified</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.recording">Recording</a></code> | <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference">StreamLiveInputRecordingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.rtmps">Rtmps</a></code> | <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference">StreamLiveInputRtmpsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.rtmpsPlayback">RtmpsPlayback</a></code> | <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference">StreamLiveInputRtmpsPlaybackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.srt">Srt</a></code> | <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference">StreamLiveInputSrtOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.srtPlayback">SrtPlayback</a></code> | <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference">StreamLiveInputSrtPlaybackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.webRtc">WebRtc</a></code> | <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference">StreamLiveInputWebRtcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.webRtcPlayback">WebRtcPlayback</a></code> | <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference">StreamLiveInputWebRtcPlaybackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.defaultCreatorInput">DefaultCreatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.deleteRecordingAfterDaysInput">DeleteRecordingAfterDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.liveInputIdentifierInput">LiveInputIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.metaInput">MetaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.recordingInput">RecordingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.defaultCreator">DefaultCreator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.deleteRecordingAfterDays">DeleteRecordingAfterDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.liveInputIdentifier">LiveInputIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.meta">Meta</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Created`<sup>Required</sup> <a name="Created" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.created"></a>

```go
func Created() *string
```

- *Type:* *string

---

##### `Modified`<sup>Required</sup> <a name="Modified" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.modified"></a>

```go
func Modified() *string
```

- *Type:* *string

---

##### `Recording`<sup>Required</sup> <a name="Recording" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.recording"></a>

```go
func Recording() StreamLiveInputRecordingOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference">StreamLiveInputRecordingOutputReference</a>

---

##### `Rtmps`<sup>Required</sup> <a name="Rtmps" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.rtmps"></a>

```go
func Rtmps() StreamLiveInputRtmpsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference">StreamLiveInputRtmpsOutputReference</a>

---

##### `RtmpsPlayback`<sup>Required</sup> <a name="RtmpsPlayback" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.rtmpsPlayback"></a>

```go
func RtmpsPlayback() StreamLiveInputRtmpsPlaybackOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference">StreamLiveInputRtmpsPlaybackOutputReference</a>

---

##### `Srt`<sup>Required</sup> <a name="Srt" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.srt"></a>

```go
func Srt() StreamLiveInputSrtOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference">StreamLiveInputSrtOutputReference</a>

---

##### `SrtPlayback`<sup>Required</sup> <a name="SrtPlayback" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.srtPlayback"></a>

```go
func SrtPlayback() StreamLiveInputSrtPlaybackOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference">StreamLiveInputSrtPlaybackOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `WebRtc`<sup>Required</sup> <a name="WebRtc" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.webRtc"></a>

```go
func WebRtc() StreamLiveInputWebRtcOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference">StreamLiveInputWebRtcOutputReference</a>

---

##### `WebRtcPlayback`<sup>Required</sup> <a name="WebRtcPlayback" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.webRtcPlayback"></a>

```go
func WebRtcPlayback() StreamLiveInputWebRtcPlaybackOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference">StreamLiveInputWebRtcPlaybackOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `DefaultCreatorInput`<sup>Optional</sup> <a name="DefaultCreatorInput" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.defaultCreatorInput"></a>

```go
func DefaultCreatorInput() *string
```

- *Type:* *string

---

##### `DeleteRecordingAfterDaysInput`<sup>Optional</sup> <a name="DeleteRecordingAfterDaysInput" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.deleteRecordingAfterDaysInput"></a>

```go
func DeleteRecordingAfterDaysInput() *f64
```

- *Type:* *f64

---

##### `LiveInputIdentifierInput`<sup>Optional</sup> <a name="LiveInputIdentifierInput" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.liveInputIdentifierInput"></a>

```go
func LiveInputIdentifierInput() *string
```

- *Type:* *string

---

##### `MetaInput`<sup>Optional</sup> <a name="MetaInput" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.metaInput"></a>

```go
func MetaInput() *string
```

- *Type:* *string

---

##### `RecordingInput`<sup>Optional</sup> <a name="RecordingInput" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.recordingInput"></a>

```go
func RecordingInput() interface{}
```

- *Type:* interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `DefaultCreator`<sup>Required</sup> <a name="DefaultCreator" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.defaultCreator"></a>

```go
func DefaultCreator() *string
```

- *Type:* *string

---

##### `DeleteRecordingAfterDays`<sup>Required</sup> <a name="DeleteRecordingAfterDays" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.deleteRecordingAfterDays"></a>

```go
func DeleteRecordingAfterDays() *f64
```

- *Type:* *f64

---

##### `LiveInputIdentifier`<sup>Required</sup> <a name="LiveInputIdentifier" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.liveInputIdentifier"></a>

```go
func LiveInputIdentifier() *string
```

- *Type:* *string

---

##### `Meta`<sup>Required</sup> <a name="Meta" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.meta"></a>

```go
func Meta() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInput.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### StreamLiveInputConfig <a name="StreamLiveInputConfig" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/streamliveinput"

&streamliveinput.StreamLiveInputConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	DefaultCreator: *string,
	DeleteRecordingAfterDays: *f64,
	LiveInputIdentifier: *string,
	Meta: *string,
	Recording: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13.streamLiveInput.StreamLiveInputRecording,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputConfig.property.defaultCreator">DefaultCreator</a></code> | <code>*string</code> | Sets the creator ID asssociated with this live input. |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputConfig.property.deleteRecordingAfterDays">DeleteRecordingAfterDays</a></code> | <code>*f64</code> | Indicates the number of days after which the live inputs recordings will be deleted. |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputConfig.property.liveInputIdentifier">LiveInputIdentifier</a></code> | <code>*string</code> | A unique identifier for a live input. |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputConfig.property.meta">Meta</a></code> | <code>*string</code> | A user modifiable key-value store used to reference other systems of record for managing live inputs. |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputConfig.property.recording">Recording</a></code> | <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecording">StreamLiveInputRecording</a></code> | Records the input to a Cloudflare Stream video. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/stream_live_input#account_id StreamLiveInput#account_id}

---

##### `DefaultCreator`<sup>Optional</sup> <a name="DefaultCreator" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputConfig.property.defaultCreator"></a>

```go
DefaultCreator *string
```

- *Type:* *string

Sets the creator ID asssociated with this live input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/stream_live_input#default_creator StreamLiveInput#default_creator}

---

##### `DeleteRecordingAfterDays`<sup>Optional</sup> <a name="DeleteRecordingAfterDays" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputConfig.property.deleteRecordingAfterDays"></a>

```go
DeleteRecordingAfterDays *f64
```

- *Type:* *f64

Indicates the number of days after which the live inputs recordings will be deleted.

When a stream completes and the recording is ready, the value is used to calculate a scheduled deletion date for that recording. Omit the field to indicate no change, or include with a `null` value to remove an existing scheduled deletion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/stream_live_input#delete_recording_after_days StreamLiveInput#delete_recording_after_days}

---

##### `LiveInputIdentifier`<sup>Optional</sup> <a name="LiveInputIdentifier" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputConfig.property.liveInputIdentifier"></a>

```go
LiveInputIdentifier *string
```

- *Type:* *string

A unique identifier for a live input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/stream_live_input#live_input_identifier StreamLiveInput#live_input_identifier}

---

##### `Meta`<sup>Optional</sup> <a name="Meta" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputConfig.property.meta"></a>

```go
Meta *string
```

- *Type:* *string

A user modifiable key-value store used to reference other systems of record for managing live inputs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/stream_live_input#meta StreamLiveInput#meta}

---

##### `Recording`<sup>Optional</sup> <a name="Recording" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputConfig.property.recording"></a>

```go
Recording StreamLiveInputRecording
```

- *Type:* <a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecording">StreamLiveInputRecording</a>

Records the input to a Cloudflare Stream video.

Behavior depends on the mode. In most cases, the video will initially be viewable as a live video and transition to on-demand after a condition is satisfied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/stream_live_input#recording StreamLiveInput#recording}

---

### StreamLiveInputRecording <a name="StreamLiveInputRecording" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecording"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecording.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/streamliveinput"

&streamliveinput.StreamLiveInputRecording {
	AllowedOrigins: *[]*string,
	HideLiveViewerCount: interface{},
	Mode: *string,
	RequireSignedUrls: interface{},
	TimeoutSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecording.property.allowedOrigins">AllowedOrigins</a></code> | <code>*[]*string</code> | Lists the origins allowed to display videos created with this input. |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecording.property.hideLiveViewerCount">HideLiveViewerCount</a></code> | <code>interface{}</code> | Disables reporting the number of live viewers when this property is set to `true`. |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecording.property.mode">Mode</a></code> | <code>*string</code> | Specifies the recording behavior for the live input. |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecording.property.requireSignedUrls">RequireSignedUrls</a></code> | <code>interface{}</code> | Indicates if a video using the live input has the `requireSignedURLs` property set. |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecording.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>*f64</code> | Determines the amount of time a live input configured in `automatic` mode should wait before a recording transitions from live to on-demand. |

---

##### `AllowedOrigins`<sup>Optional</sup> <a name="AllowedOrigins" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecording.property.allowedOrigins"></a>

```go
AllowedOrigins *[]*string
```

- *Type:* *[]*string

Lists the origins allowed to display videos created with this input.

Enter allowed origin domains in an array and use `*` for wildcard subdomains. An empty array allows videos to be viewed on any origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/stream_live_input#allowed_origins StreamLiveInput#allowed_origins}

---

##### `HideLiveViewerCount`<sup>Optional</sup> <a name="HideLiveViewerCount" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecording.property.hideLiveViewerCount"></a>

```go
HideLiveViewerCount interface{}
```

- *Type:* interface{}

Disables reporting the number of live viewers when this property is set to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/stream_live_input#hide_live_viewer_count StreamLiveInput#hide_live_viewer_count}

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecording.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

Specifies the recording behavior for the live input.

Set this value to `off` to prevent a recording. Set the value to `automatic` to begin a recording and transition to on-demand after Stream Live stops receiving input.
Available values: "off", "automatic".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/stream_live_input#mode StreamLiveInput#mode}

---

##### `RequireSignedUrls`<sup>Optional</sup> <a name="RequireSignedUrls" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecording.property.requireSignedUrls"></a>

```go
RequireSignedUrls interface{}
```

- *Type:* interface{}

Indicates if a video using the live input has the `requireSignedURLs` property set.

Also enforces access controls on any video recording of the livestream with the live input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/stream_live_input#require_signed_urls StreamLiveInput#require_signed_urls}

---

##### `TimeoutSeconds`<sup>Optional</sup> <a name="TimeoutSeconds" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecording.property.timeoutSeconds"></a>

```go
TimeoutSeconds *f64
```

- *Type:* *f64

Determines the amount of time a live input configured in `automatic` mode should wait before a recording transitions from live to on-demand.

`0` is recommended for most use cases and indicates the platform default should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/stream_live_input#timeout_seconds StreamLiveInput#timeout_seconds}

---

### StreamLiveInputRtmps <a name="StreamLiveInputRtmps" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmps.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/streamliveinput"

&streamliveinput.StreamLiveInputRtmps {

}
```


### StreamLiveInputRtmpsPlayback <a name="StreamLiveInputRtmpsPlayback" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlayback"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlayback.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/streamliveinput"

&streamliveinput.StreamLiveInputRtmpsPlayback {

}
```


### StreamLiveInputSrt <a name="StreamLiveInputSrt" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrt"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrt.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/streamliveinput"

&streamliveinput.StreamLiveInputSrt {

}
```


### StreamLiveInputSrtPlayback <a name="StreamLiveInputSrtPlayback" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlayback"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlayback.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/streamliveinput"

&streamliveinput.StreamLiveInputSrtPlayback {

}
```


### StreamLiveInputWebRtc <a name="StreamLiveInputWebRtc" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtc.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/streamliveinput"

&streamliveinput.StreamLiveInputWebRtc {

}
```


### StreamLiveInputWebRtcPlayback <a name="StreamLiveInputWebRtcPlayback" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlayback"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlayback.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/streamliveinput"

&streamliveinput.StreamLiveInputWebRtcPlayback {

}
```


## Classes <a name="Classes" id="Classes"></a>

### StreamLiveInputRecordingOutputReference <a name="StreamLiveInputRecordingOutputReference" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/streamliveinput"

streamliveinput.NewStreamLiveInputRecordingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StreamLiveInputRecordingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.resetAllowedOrigins">ResetAllowedOrigins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.resetHideLiveViewerCount">ResetHideLiveViewerCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.resetRequireSignedUrls">ResetRequireSignedUrls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.resetTimeoutSeconds">ResetTimeoutSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedOrigins` <a name="ResetAllowedOrigins" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.resetAllowedOrigins"></a>

```go
func ResetAllowedOrigins()
```

##### `ResetHideLiveViewerCount` <a name="ResetHideLiveViewerCount" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.resetHideLiveViewerCount"></a>

```go
func ResetHideLiveViewerCount()
```

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.resetMode"></a>

```go
func ResetMode()
```

##### `ResetRequireSignedUrls` <a name="ResetRequireSignedUrls" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.resetRequireSignedUrls"></a>

```go
func ResetRequireSignedUrls()
```

##### `ResetTimeoutSeconds` <a name="ResetTimeoutSeconds" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.resetTimeoutSeconds"></a>

```go
func ResetTimeoutSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.property.allowedOriginsInput">AllowedOriginsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.property.hideLiveViewerCountInput">HideLiveViewerCountInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.property.requireSignedUrlsInput">RequireSignedUrlsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.property.timeoutSecondsInput">TimeoutSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.property.allowedOrigins">AllowedOrigins</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.property.hideLiveViewerCount">HideLiveViewerCount</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.property.requireSignedUrls">RequireSignedUrls</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedOriginsInput`<sup>Optional</sup> <a name="AllowedOriginsInput" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.property.allowedOriginsInput"></a>

```go
func AllowedOriginsInput() *[]*string
```

- *Type:* *[]*string

---

##### `HideLiveViewerCountInput`<sup>Optional</sup> <a name="HideLiveViewerCountInput" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.property.hideLiveViewerCountInput"></a>

```go
func HideLiveViewerCountInput() interface{}
```

- *Type:* interface{}

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `RequireSignedUrlsInput`<sup>Optional</sup> <a name="RequireSignedUrlsInput" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.property.requireSignedUrlsInput"></a>

```go
func RequireSignedUrlsInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutSecondsInput`<sup>Optional</sup> <a name="TimeoutSecondsInput" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.property.timeoutSecondsInput"></a>

```go
func TimeoutSecondsInput() *f64
```

- *Type:* *f64

---

##### `AllowedOrigins`<sup>Required</sup> <a name="AllowedOrigins" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.property.allowedOrigins"></a>

```go
func AllowedOrigins() *[]*string
```

- *Type:* *[]*string

---

##### `HideLiveViewerCount`<sup>Required</sup> <a name="HideLiveViewerCount" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.property.hideLiveViewerCount"></a>

```go
func HideLiveViewerCount() interface{}
```

- *Type:* interface{}

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `RequireSignedUrls`<sup>Required</sup> <a name="RequireSignedUrls" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.property.requireSignedUrls"></a>

```go
func RequireSignedUrls() interface{}
```

- *Type:* interface{}

---

##### `TimeoutSeconds`<sup>Required</sup> <a name="TimeoutSeconds" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.property.timeoutSeconds"></a>

```go
func TimeoutSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRecordingOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StreamLiveInputRtmpsOutputReference <a name="StreamLiveInputRtmpsOutputReference" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/streamliveinput"

streamliveinput.NewStreamLiveInputRtmpsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StreamLiveInputRtmpsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.property.streamKey">StreamKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmps">StreamLiveInputRtmps</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StreamKey`<sup>Required</sup> <a name="StreamKey" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.property.streamKey"></a>

```go
func StreamKey() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsOutputReference.property.internalValue"></a>

```go
func InternalValue() StreamLiveInputRtmps
```

- *Type:* <a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmps">StreamLiveInputRtmps</a>

---


### StreamLiveInputRtmpsPlaybackOutputReference <a name="StreamLiveInputRtmpsPlaybackOutputReference" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/streamliveinput"

streamliveinput.NewStreamLiveInputRtmpsPlaybackOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StreamLiveInputRtmpsPlaybackOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.property.streamKey">StreamKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlayback">StreamLiveInputRtmpsPlayback</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StreamKey`<sup>Required</sup> <a name="StreamKey" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.property.streamKey"></a>

```go
func StreamKey() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlaybackOutputReference.property.internalValue"></a>

```go
func InternalValue() StreamLiveInputRtmpsPlayback
```

- *Type:* <a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputRtmpsPlayback">StreamLiveInputRtmpsPlayback</a>

---


### StreamLiveInputSrtOutputReference <a name="StreamLiveInputSrtOutputReference" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/streamliveinput"

streamliveinput.NewStreamLiveInputSrtOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StreamLiveInputSrtOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.property.passphrase">Passphrase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.property.streamId">StreamId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrt">StreamLiveInputSrt</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Passphrase`<sup>Required</sup> <a name="Passphrase" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.property.passphrase"></a>

```go
func Passphrase() *string
```

- *Type:* *string

---

##### `StreamId`<sup>Required</sup> <a name="StreamId" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.property.streamId"></a>

```go
func StreamId() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtOutputReference.property.internalValue"></a>

```go
func InternalValue() StreamLiveInputSrt
```

- *Type:* <a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrt">StreamLiveInputSrt</a>

---


### StreamLiveInputSrtPlaybackOutputReference <a name="StreamLiveInputSrtPlaybackOutputReference" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/streamliveinput"

streamliveinput.NewStreamLiveInputSrtPlaybackOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StreamLiveInputSrtPlaybackOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.property.passphrase">Passphrase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.property.streamId">StreamId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlayback">StreamLiveInputSrtPlayback</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Passphrase`<sup>Required</sup> <a name="Passphrase" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.property.passphrase"></a>

```go
func Passphrase() *string
```

- *Type:* *string

---

##### `StreamId`<sup>Required</sup> <a name="StreamId" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.property.streamId"></a>

```go
func StreamId() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlaybackOutputReference.property.internalValue"></a>

```go
func InternalValue() StreamLiveInputSrtPlayback
```

- *Type:* <a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputSrtPlayback">StreamLiveInputSrtPlayback</a>

---


### StreamLiveInputWebRtcOutputReference <a name="StreamLiveInputWebRtcOutputReference" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/streamliveinput"

streamliveinput.NewStreamLiveInputWebRtcOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StreamLiveInputWebRtcOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtc">StreamLiveInputWebRtc</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcOutputReference.property.internalValue"></a>

```go
func InternalValue() StreamLiveInputWebRtc
```

- *Type:* <a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtc">StreamLiveInputWebRtc</a>

---


### StreamLiveInputWebRtcPlaybackOutputReference <a name="StreamLiveInputWebRtcPlaybackOutputReference" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/streamliveinput"

streamliveinput.NewStreamLiveInputWebRtcPlaybackOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StreamLiveInputWebRtcPlaybackOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlayback">StreamLiveInputWebRtcPlayback</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlaybackOutputReference.property.internalValue"></a>

```go
func InternalValue() StreamLiveInputWebRtcPlayback
```

- *Type:* <a href="#@cdktf/provider-cloudflare.streamLiveInput.StreamLiveInputWebRtcPlayback">StreamLiveInputWebRtcPlayback</a>

---



