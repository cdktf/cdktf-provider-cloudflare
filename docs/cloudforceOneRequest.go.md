# `cloudforceOneRequest` Submodule <a name="`cloudforceOneRequest` Submodule" id="@cdktf/provider-cloudflare.cloudforceOneRequest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudforceOneRequest <a name="CloudforceOneRequest" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/cloudforce_one_request cloudflare_cloudforce_one_request}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/cloudforceonerequest"

cloudforceonerequest.NewCloudforceOneRequest(scope Construct, id *string, config CloudforceOneRequestConfig) CloudforceOneRequest
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig">CloudforceOneRequestConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig">CloudforceOneRequestConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.resetContent">ResetContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.resetRequestType">ResetRequestType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.resetSummary">ResetSummary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.resetTlp">ResetTlp</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetContent` <a name="ResetContent" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.resetContent"></a>

```go
func ResetContent()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.resetPriority"></a>

```go
func ResetPriority()
```

##### `ResetRequestType` <a name="ResetRequestType" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.resetRequestType"></a>

```go
func ResetRequestType()
```

##### `ResetSummary` <a name="ResetSummary" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.resetSummary"></a>

```go
func ResetSummary()
```

##### `ResetTlp` <a name="ResetTlp" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.resetTlp"></a>

```go
func ResetTlp()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CloudforceOneRequest resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/cloudforceonerequest"

cloudforceonerequest.CloudforceOneRequest_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/cloudforceonerequest"

cloudforceonerequest.CloudforceOneRequest_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/cloudforceonerequest"

cloudforceonerequest.CloudforceOneRequest_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/cloudforceonerequest"

cloudforceonerequest.CloudforceOneRequest_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a CloudforceOneRequest resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CloudforceOneRequest to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CloudforceOneRequest that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/cloudforce_one_request#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the CloudforceOneRequest to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.completed">Completed</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.created">Created</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.messageTokens">MessageTokens</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.readableId">ReadableId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.request">Request</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.tokens">Tokens</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.updated">Updated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.accountIdentifierInput">AccountIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.contentInput">ContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.priorityInput">PriorityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.requestTypeInput">RequestTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.summaryInput">SummaryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.tlpInput">TlpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.accountIdentifier">AccountIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.priority">Priority</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.requestType">RequestType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.summary">Summary</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.tlp">Tlp</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Completed`<sup>Required</sup> <a name="Completed" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.completed"></a>

```go
func Completed() *string
```

- *Type:* *string

---

##### `Created`<sup>Required</sup> <a name="Created" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.created"></a>

```go
func Created() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MessageTokens`<sup>Required</sup> <a name="MessageTokens" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.messageTokens"></a>

```go
func MessageTokens() *f64
```

- *Type:* *f64

---

##### `ReadableId`<sup>Required</sup> <a name="ReadableId" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.readableId"></a>

```go
func ReadableId() *string
```

- *Type:* *string

---

##### `Request`<sup>Required</sup> <a name="Request" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.request"></a>

```go
func Request() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tokens`<sup>Required</sup> <a name="Tokens" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.tokens"></a>

```go
func Tokens() *f64
```

- *Type:* *f64

---

##### `Updated`<sup>Required</sup> <a name="Updated" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.updated"></a>

```go
func Updated() *string
```

- *Type:* *string

---

##### `AccountIdentifierInput`<sup>Optional</sup> <a name="AccountIdentifierInput" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.accountIdentifierInput"></a>

```go
func AccountIdentifierInput() *string
```

- *Type:* *string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.contentInput"></a>

```go
func ContentInput() *string
```

- *Type:* *string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.priorityInput"></a>

```go
func PriorityInput() *string
```

- *Type:* *string

---

##### `RequestTypeInput`<sup>Optional</sup> <a name="RequestTypeInput" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.requestTypeInput"></a>

```go
func RequestTypeInput() *string
```

- *Type:* *string

---

##### `SummaryInput`<sup>Optional</sup> <a name="SummaryInput" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.summaryInput"></a>

```go
func SummaryInput() *string
```

- *Type:* *string

---

##### `TlpInput`<sup>Optional</sup> <a name="TlpInput" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.tlpInput"></a>

```go
func TlpInput() *string
```

- *Type:* *string

---

##### `AccountIdentifier`<sup>Required</sup> <a name="AccountIdentifier" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.accountIdentifier"></a>

```go
func AccountIdentifier() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.priority"></a>

```go
func Priority() *string
```

- *Type:* *string

---

##### `RequestType`<sup>Required</sup> <a name="RequestType" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.requestType"></a>

```go
func RequestType() *string
```

- *Type:* *string

---

##### `Summary`<sup>Required</sup> <a name="Summary" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.summary"></a>

```go
func Summary() *string
```

- *Type:* *string

---

##### `Tlp`<sup>Required</sup> <a name="Tlp" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.tlp"></a>

```go
func Tlp() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudforceOneRequestConfig <a name="CloudforceOneRequestConfig" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/cloudforceonerequest"

&cloudforceonerequest.CloudforceOneRequestConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountIdentifier: *string,
	Content: *string,
	Priority: *string,
	RequestType: *string,
	Summary: *string,
	Tlp: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.accountIdentifier">AccountIdentifier</a></code> | <code>*string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.content">Content</a></code> | <code>*string</code> | Request content. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.priority">Priority</a></code> | <code>*string</code> | Priority for analyzing the request. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.requestType">RequestType</a></code> | <code>*string</code> | Requested information from request. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.summary">Summary</a></code> | <code>*string</code> | Brief description of the request. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.tlp">Tlp</a></code> | <code>*string</code> | The CISA defined Traffic Light Protocol (TLP) Available values: "clear", "amber", "amber-strict", "green", "red". |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountIdentifier`<sup>Required</sup> <a name="AccountIdentifier" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.accountIdentifier"></a>

```go
AccountIdentifier *string
```

- *Type:* *string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/cloudforce_one_request#account_identifier CloudforceOneRequest#account_identifier}

---

##### `Content`<sup>Optional</sup> <a name="Content" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.content"></a>

```go
Content *string
```

- *Type:* *string

Request content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/cloudforce_one_request#content CloudforceOneRequest#content}

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.priority"></a>

```go
Priority *string
```

- *Type:* *string

Priority for analyzing the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/cloudforce_one_request#priority CloudforceOneRequest#priority}

---

##### `RequestType`<sup>Optional</sup> <a name="RequestType" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.requestType"></a>

```go
RequestType *string
```

- *Type:* *string

Requested information from request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/cloudforce_one_request#request_type CloudforceOneRequest#request_type}

---

##### `Summary`<sup>Optional</sup> <a name="Summary" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.summary"></a>

```go
Summary *string
```

- *Type:* *string

Brief description of the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/cloudforce_one_request#summary CloudforceOneRequest#summary}

---

##### `Tlp`<sup>Optional</sup> <a name="Tlp" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.tlp"></a>

```go
Tlp *string
```

- *Type:* *string

The CISA defined Traffic Light Protocol (TLP) Available values: "clear", "amber", "amber-strict", "green", "red".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/cloudforce_one_request#tlp CloudforceOneRequest#tlp}

---



