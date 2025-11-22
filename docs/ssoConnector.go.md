# `ssoConnector` Submodule <a name="`ssoConnector` Submodule" id="@cdktf/provider-cloudflare.ssoConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsoConnector <a name="SsoConnector" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/sso_connector cloudflare_sso_connector}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/ssoconnector"

ssoconnector.NewSsoConnector(scope Construct, id *string, config SsoConnectorConfig) SsoConnector
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnectorConfig">SsoConnectorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnectorConfig">SsoConnectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.resetBeginVerification">ResetBeginVerification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.resetUseFedrampLanguage">ResetUseFedrampLanguage</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetBeginVerification` <a name="ResetBeginVerification" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.resetBeginVerification"></a>

```go
func ResetBeginVerification()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetUseFedrampLanguage` <a name="ResetUseFedrampLanguage" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.resetUseFedrampLanguage"></a>

```go
func ResetUseFedrampLanguage()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SsoConnector resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/ssoconnector"

ssoconnector.SsoConnector_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/ssoconnector"

ssoconnector.SsoConnector_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/ssoconnector"

ssoconnector.SsoConnector_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/ssoconnector"

ssoconnector.SsoConnector_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SsoConnector resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SsoConnector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SsoConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/sso_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SsoConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.updatedOn">UpdatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.verification">Verification</a></code> | <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference">SsoConnectorVerificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.beginVerificationInput">BeginVerificationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.emailDomainInput">EmailDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.useFedrampLanguageInput">UseFedrampLanguageInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.beginVerification">BeginVerification</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.emailDomain">EmailDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.useFedrampLanguage">UseFedrampLanguage</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `UpdatedOn`<sup>Required</sup> <a name="UpdatedOn" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.updatedOn"></a>

```go
func UpdatedOn() *string
```

- *Type:* *string

---

##### `Verification`<sup>Required</sup> <a name="Verification" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.verification"></a>

```go
func Verification() SsoConnectorVerificationOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference">SsoConnectorVerificationOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `BeginVerificationInput`<sup>Optional</sup> <a name="BeginVerificationInput" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.beginVerificationInput"></a>

```go
func BeginVerificationInput() interface{}
```

- *Type:* interface{}

---

##### `EmailDomainInput`<sup>Optional</sup> <a name="EmailDomainInput" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.emailDomainInput"></a>

```go
func EmailDomainInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `UseFedrampLanguageInput`<sup>Optional</sup> <a name="UseFedrampLanguageInput" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.useFedrampLanguageInput"></a>

```go
func UseFedrampLanguageInput() interface{}
```

- *Type:* interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `BeginVerification`<sup>Required</sup> <a name="BeginVerification" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.beginVerification"></a>

```go
func BeginVerification() interface{}
```

- *Type:* interface{}

---

##### `EmailDomain`<sup>Required</sup> <a name="EmailDomain" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.emailDomain"></a>

```go
func EmailDomain() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `UseFedrampLanguage`<sup>Required</sup> <a name="UseFedrampLanguage" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.useFedrampLanguage"></a>

```go
func UseFedrampLanguage() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SsoConnectorConfig <a name="SsoConnectorConfig" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/ssoconnector"

&ssoconnector.SsoConnectorConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	EmailDomain: *string,
	BeginVerification: interface{},
	Enabled: interface{},
	UseFedrampLanguage: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnectorConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnectorConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnectorConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnectorConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnectorConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnectorConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnectorConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnectorConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Account identifier tag. |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnectorConfig.property.emailDomain">EmailDomain</a></code> | <code>*string</code> | Email domain of the new SSO connector. |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnectorConfig.property.beginVerification">BeginVerification</a></code> | <code>interface{}</code> | Begin the verification process after creation. |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnectorConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | SSO Connector enabled state. |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnectorConfig.property.useFedrampLanguage">UseFedrampLanguage</a></code> | <code>interface{}</code> | Controls the display of FedRAMP language to the user during SSO login. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Account identifier tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/sso_connector#account_id SsoConnector#account_id}

---

##### `EmailDomain`<sup>Required</sup> <a name="EmailDomain" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorConfig.property.emailDomain"></a>

```go
EmailDomain *string
```

- *Type:* *string

Email domain of the new SSO connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/sso_connector#email_domain SsoConnector#email_domain}

---

##### `BeginVerification`<sup>Optional</sup> <a name="BeginVerification" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorConfig.property.beginVerification"></a>

```go
BeginVerification interface{}
```

- *Type:* interface{}

Begin the verification process after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/sso_connector#begin_verification SsoConnector#begin_verification}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

SSO Connector enabled state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/sso_connector#enabled SsoConnector#enabled}

---

##### `UseFedrampLanguage`<sup>Optional</sup> <a name="UseFedrampLanguage" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorConfig.property.useFedrampLanguage"></a>

```go
UseFedrampLanguage interface{}
```

- *Type:* interface{}

Controls the display of FedRAMP language to the user during SSO login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/sso_connector#use_fedramp_language SsoConnector#use_fedramp_language}

---

### SsoConnectorVerification <a name="SsoConnectorVerification" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerification.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/ssoconnector"

&ssoconnector.SsoConnectorVerification {

}
```


## Classes <a name="Classes" id="Classes"></a>

### SsoConnectorVerificationOutputReference <a name="SsoConnectorVerificationOutputReference" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/ssoconnector"

ssoconnector.NewSsoConnectorVerificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SsoConnectorVerificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.property.code">Code</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerification">SsoConnectorVerification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.property.code"></a>

```go
func Code() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.property.internalValue"></a>

```go
func InternalValue() SsoConnectorVerification
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerification">SsoConnectorVerification</a>

---



