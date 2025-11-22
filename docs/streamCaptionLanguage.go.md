# `streamCaptionLanguage` Submodule <a name="`streamCaptionLanguage` Submodule" id="@cdktf/provider-cloudflare.streamCaptionLanguage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StreamCaptionLanguage <a name="StreamCaptionLanguage" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/stream_caption_language cloudflare_stream_caption_language}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/streamcaptionlanguage"

streamcaptionlanguage.NewStreamCaptionLanguage(scope Construct, id *string, config StreamCaptionLanguageConfig) StreamCaptionLanguage
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguageConfig">StreamCaptionLanguageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguageConfig">StreamCaptionLanguageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.resetFile">ResetFile</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetFile` <a name="ResetFile" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.resetFile"></a>

```go
func ResetFile()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a StreamCaptionLanguage resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/streamcaptionlanguage"

streamcaptionlanguage.StreamCaptionLanguage_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/streamcaptionlanguage"

streamcaptionlanguage.StreamCaptionLanguage_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/streamcaptionlanguage"

streamcaptionlanguage.StreamCaptionLanguage_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/streamcaptionlanguage"

streamcaptionlanguage.StreamCaptionLanguage_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a StreamCaptionLanguage resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the StreamCaptionLanguage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing StreamCaptionLanguage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/stream_caption_language#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the StreamCaptionLanguage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.generated">Generated</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.label">Label</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.fileInput">FileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.identifierInput">IdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.languageInput">LanguageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.file">File</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.identifier">Identifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.language">Language</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Generated`<sup>Required</sup> <a name="Generated" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.generated"></a>

```go
func Generated() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.label"></a>

```go
func Label() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `FileInput`<sup>Optional</sup> <a name="FileInput" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.fileInput"></a>

```go
func FileInput() *string
```

- *Type:* *string

---

##### `IdentifierInput`<sup>Optional</sup> <a name="IdentifierInput" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.identifierInput"></a>

```go
func IdentifierInput() *string
```

- *Type:* *string

---

##### `LanguageInput`<sup>Optional</sup> <a name="LanguageInput" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.languageInput"></a>

```go
func LanguageInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `File`<sup>Required</sup> <a name="File" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.file"></a>

```go
func File() *string
```

- *Type:* *string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.identifier"></a>

```go
func Identifier() *string
```

- *Type:* *string

---

##### `Language`<sup>Required</sup> <a name="Language" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.language"></a>

```go
func Language() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### StreamCaptionLanguageConfig <a name="StreamCaptionLanguageConfig" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguageConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/streamcaptionlanguage"

&streamcaptionlanguage.StreamCaptionLanguageConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	Identifier: *string,
	Language: *string,
	File: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguageConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguageConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguageConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguageConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguageConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguageConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguageConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguageConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguageConfig.property.identifier">Identifier</a></code> | <code>*string</code> | A Cloudflare-generated unique identifier for a media item. |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguageConfig.property.language">Language</a></code> | <code>*string</code> | The language tag in BCP 47 format. |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguageConfig.property.file">File</a></code> | <code>*string</code> | The WebVTT file containing the caption or subtitle content. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguageConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguageConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguageConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguageConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguageConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguageConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguageConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguageConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/stream_caption_language#account_id StreamCaptionLanguage#account_id}

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguageConfig.property.identifier"></a>

```go
Identifier *string
```

- *Type:* *string

A Cloudflare-generated unique identifier for a media item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/stream_caption_language#identifier StreamCaptionLanguage#identifier}

---

##### `Language`<sup>Required</sup> <a name="Language" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguageConfig.property.language"></a>

```go
Language *string
```

- *Type:* *string

The language tag in BCP 47 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/stream_caption_language#language StreamCaptionLanguage#language}

---

##### `File`<sup>Optional</sup> <a name="File" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguageConfig.property.file"></a>

```go
File *string
```

- *Type:* *string

The WebVTT file containing the caption or subtitle content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/stream_caption_language#file StreamCaptionLanguage#file}

---



