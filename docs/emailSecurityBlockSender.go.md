# `emailSecurityBlockSender` Submodule <a name="`emailSecurityBlockSender` Submodule" id="@cdktf/provider-cloudflare.emailSecurityBlockSender"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EmailSecurityBlockSender <a name="EmailSecurityBlockSender" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/email_security_block_sender cloudflare_email_security_block_sender}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/emailsecurityblocksender"

emailsecurityblocksender.NewEmailSecurityBlockSender(scope Construct, id *string, config EmailSecurityBlockSenderConfig) EmailSecurityBlockSender
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSenderConfig">EmailSecurityBlockSenderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSenderConfig">EmailSecurityBlockSenderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.resetComments">ResetComments</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetComments` <a name="ResetComments" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.resetComments"></a>

```go
func ResetComments()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a EmailSecurityBlockSender resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/emailsecurityblocksender"

emailsecurityblocksender.EmailSecurityBlockSender_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/emailsecurityblocksender"

emailsecurityblocksender.EmailSecurityBlockSender_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/emailsecurityblocksender"

emailsecurityblocksender.EmailSecurityBlockSender_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/emailsecurityblocksender"

emailsecurityblocksender.EmailSecurityBlockSender_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a EmailSecurityBlockSender resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the EmailSecurityBlockSender to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing EmailSecurityBlockSender that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/email_security_block_sender#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the EmailSecurityBlockSender to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.id">Id</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.lastModified">LastModified</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.commentsInput">CommentsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.isRegexInput">IsRegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.patternInput">PatternInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.patternTypeInput">PatternTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.comments">Comments</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.isRegex">IsRegex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.pattern">Pattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.patternType">PatternType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.id"></a>

```go
func Id() *f64
```

- *Type:* *f64

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.lastModified"></a>

```go
func LastModified() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `CommentsInput`<sup>Optional</sup> <a name="CommentsInput" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.commentsInput"></a>

```go
func CommentsInput() *string
```

- *Type:* *string

---

##### `IsRegexInput`<sup>Optional</sup> <a name="IsRegexInput" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.isRegexInput"></a>

```go
func IsRegexInput() interface{}
```

- *Type:* interface{}

---

##### `PatternInput`<sup>Optional</sup> <a name="PatternInput" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.patternInput"></a>

```go
func PatternInput() *string
```

- *Type:* *string

---

##### `PatternTypeInput`<sup>Optional</sup> <a name="PatternTypeInput" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.patternTypeInput"></a>

```go
func PatternTypeInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `Comments`<sup>Required</sup> <a name="Comments" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.comments"></a>

```go
func Comments() *string
```

- *Type:* *string

---

##### `IsRegex`<sup>Required</sup> <a name="IsRegex" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.isRegex"></a>

```go
func IsRegex() interface{}
```

- *Type:* interface{}

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.pattern"></a>

```go
func Pattern() *string
```

- *Type:* *string

---

##### `PatternType`<sup>Required</sup> <a name="PatternType" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.patternType"></a>

```go
func PatternType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSender.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EmailSecurityBlockSenderConfig <a name="EmailSecurityBlockSenderConfig" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSenderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSenderConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/emailsecurityblocksender"

&emailsecurityblocksender.EmailSecurityBlockSenderConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	IsRegex: interface{},
	Pattern: *string,
	PatternType: *string,
	Comments: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSenderConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSenderConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSenderConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSenderConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSenderConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSenderConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSenderConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSenderConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Account Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSenderConfig.property.isRegex">IsRegex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/email_security_block_sender#is_regex EmailSecurityBlockSender#is_regex}. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSenderConfig.property.pattern">Pattern</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/email_security_block_sender#pattern EmailSecurityBlockSender#pattern}. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSenderConfig.property.patternType">PatternType</a></code> | <code>*string</code> | Available values: "EMAIL", "DOMAIN", "IP", "UNKNOWN". |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSenderConfig.property.comments">Comments</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/email_security_block_sender#comments EmailSecurityBlockSender#comments}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSenderConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSenderConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSenderConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSenderConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSenderConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSenderConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSenderConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSenderConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Account Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/email_security_block_sender#account_id EmailSecurityBlockSender#account_id}

---

##### `IsRegex`<sup>Required</sup> <a name="IsRegex" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSenderConfig.property.isRegex"></a>

```go
IsRegex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/email_security_block_sender#is_regex EmailSecurityBlockSender#is_regex}.

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSenderConfig.property.pattern"></a>

```go
Pattern *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/email_security_block_sender#pattern EmailSecurityBlockSender#pattern}.

---

##### `PatternType`<sup>Required</sup> <a name="PatternType" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSenderConfig.property.patternType"></a>

```go
PatternType *string
```

- *Type:* *string

Available values: "EMAIL", "DOMAIN", "IP", "UNKNOWN".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/email_security_block_sender#pattern_type EmailSecurityBlockSender#pattern_type}

---

##### `Comments`<sup>Optional</sup> <a name="Comments" id="@cdktf/provider-cloudflare.emailSecurityBlockSender.EmailSecurityBlockSenderConfig.property.comments"></a>

```go
Comments *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/email_security_block_sender#comments EmailSecurityBlockSender#comments}.

---



