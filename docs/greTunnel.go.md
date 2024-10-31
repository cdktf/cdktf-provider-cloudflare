# `greTunnel` Submodule <a name="`greTunnel` Submodule" id="@cdktf/provider-cloudflare.greTunnel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GreTunnel <a name="GreTunnel" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/gre_tunnel cloudflare_gre_tunnel}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/gretunnel"

gretunnel.NewGreTunnel(scope Construct, id *string, config GreTunnelConfig) GreTunnel
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnel.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnel.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnelConfig">GreTunnelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnelConfig">GreTunnelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnel.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnel.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnel.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnel.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnel.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnel.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnel.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnel.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnel.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnel.resetHealthCheckEnabled">ResetHealthCheckEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnel.resetHealthCheckTarget">ResetHealthCheckTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnel.resetHealthCheckType">ResetHealthCheckType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnel.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnel.resetMtu">ResetMtu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnel.resetTtl">ResetTtl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.resetAccountId"></a>

```go
func ResetAccountId()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetHealthCheckEnabled` <a name="ResetHealthCheckEnabled" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.resetHealthCheckEnabled"></a>

```go
func ResetHealthCheckEnabled()
```

##### `ResetHealthCheckTarget` <a name="ResetHealthCheckTarget" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.resetHealthCheckTarget"></a>

```go
func ResetHealthCheckTarget()
```

##### `ResetHealthCheckType` <a name="ResetHealthCheckType" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.resetHealthCheckType"></a>

```go
func ResetHealthCheckType()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.resetId"></a>

```go
func ResetId()
```

##### `ResetMtu` <a name="ResetMtu" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.resetMtu"></a>

```go
func ResetMtu()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.resetTtl"></a>

```go
func ResetTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnel.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GreTunnel resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/gretunnel"

gretunnel.GreTunnel_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/gretunnel"

gretunnel.GreTunnel_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/gretunnel"

gretunnel.GreTunnel_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/gretunnel"

gretunnel.GreTunnel_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GreTunnel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GreTunnel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GreTunnel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/gre_tunnel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GreTunnel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnel.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnel.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnel.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnel.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnel.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnel.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnel.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnel.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnel.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnel.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnel.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnel.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnel.property.cloudflareGreEndpointInput">CloudflareGreEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnel.property.customerGreEndpointInput">CustomerGreEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnel.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnel.property.healthCheckEnabledInput">HealthCheckEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnel.property.healthCheckTargetInput">HealthCheckTargetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnel.property.healthCheckTypeInput">HealthCheckTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnel.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnel.property.interfaceAddressInput">InterfaceAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnel.property.mtuInput">MtuInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnel.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnel.property.ttlInput">TtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnel.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnel.property.cloudflareGreEndpoint">CloudflareGreEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnel.property.customerGreEndpoint">CustomerGreEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnel.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnel.property.healthCheckEnabled">HealthCheckEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnel.property.healthCheckTarget">HealthCheckTarget</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnel.property.healthCheckType">HealthCheckType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnel.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnel.property.interfaceAddress">InterfaceAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnel.property.mtu">Mtu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnel.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnel.property.ttl">Ttl</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `CloudflareGreEndpointInput`<sup>Optional</sup> <a name="CloudflareGreEndpointInput" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.property.cloudflareGreEndpointInput"></a>

```go
func CloudflareGreEndpointInput() *string
```

- *Type:* *string

---

##### `CustomerGreEndpointInput`<sup>Optional</sup> <a name="CustomerGreEndpointInput" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.property.customerGreEndpointInput"></a>

```go
func CustomerGreEndpointInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `HealthCheckEnabledInput`<sup>Optional</sup> <a name="HealthCheckEnabledInput" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.property.healthCheckEnabledInput"></a>

```go
func HealthCheckEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `HealthCheckTargetInput`<sup>Optional</sup> <a name="HealthCheckTargetInput" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.property.healthCheckTargetInput"></a>

```go
func HealthCheckTargetInput() *string
```

- *Type:* *string

---

##### `HealthCheckTypeInput`<sup>Optional</sup> <a name="HealthCheckTypeInput" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.property.healthCheckTypeInput"></a>

```go
func HealthCheckTypeInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InterfaceAddressInput`<sup>Optional</sup> <a name="InterfaceAddressInput" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.property.interfaceAddressInput"></a>

```go
func InterfaceAddressInput() *string
```

- *Type:* *string

---

##### `MtuInput`<sup>Optional</sup> <a name="MtuInput" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.property.mtuInput"></a>

```go
func MtuInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.property.ttlInput"></a>

```go
func TtlInput() *f64
```

- *Type:* *f64

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `CloudflareGreEndpoint`<sup>Required</sup> <a name="CloudflareGreEndpoint" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.property.cloudflareGreEndpoint"></a>

```go
func CloudflareGreEndpoint() *string
```

- *Type:* *string

---

##### `CustomerGreEndpoint`<sup>Required</sup> <a name="CustomerGreEndpoint" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.property.customerGreEndpoint"></a>

```go
func CustomerGreEndpoint() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `HealthCheckEnabled`<sup>Required</sup> <a name="HealthCheckEnabled" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.property.healthCheckEnabled"></a>

```go
func HealthCheckEnabled() interface{}
```

- *Type:* interface{}

---

##### `HealthCheckTarget`<sup>Required</sup> <a name="HealthCheckTarget" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.property.healthCheckTarget"></a>

```go
func HealthCheckTarget() *string
```

- *Type:* *string

---

##### `HealthCheckType`<sup>Required</sup> <a name="HealthCheckType" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.property.healthCheckType"></a>

```go
func HealthCheckType() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InterfaceAddress`<sup>Required</sup> <a name="InterfaceAddress" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.property.interfaceAddress"></a>

```go
func InterfaceAddress() *string
```

- *Type:* *string

---

##### `Mtu`<sup>Required</sup> <a name="Mtu" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.property.mtu"></a>

```go
func Mtu() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.property.ttl"></a>

```go
func Ttl() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnel.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.greTunnel.GreTunnel.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GreTunnelConfig <a name="GreTunnelConfig" id="@cdktf/provider-cloudflare.greTunnel.GreTunnelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.greTunnel.GreTunnelConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/gretunnel"

&gretunnel.GreTunnelConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CloudflareGreEndpoint: *string,
	CustomerGreEndpoint: *string,
	InterfaceAddress: *string,
	Name: *string,
	AccountId: *string,
	Description: *string,
	HealthCheckEnabled: interface{},
	HealthCheckTarget: *string,
	HealthCheckType: *string,
	Id: *string,
	Mtu: *f64,
	Ttl: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnelConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnelConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnelConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnelConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnelConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnelConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnelConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnelConfig.property.cloudflareGreEndpoint">CloudflareGreEndpoint</a></code> | <code>*string</code> | The IP address assigned to the Cloudflare side of the GRE tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnelConfig.property.customerGreEndpoint">CustomerGreEndpoint</a></code> | <code>*string</code> | The IP address assigned to the customer side of the GRE tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnelConfig.property.interfaceAddress">InterfaceAddress</a></code> | <code>*string</code> | 31-bit prefix (/31 in CIDR notation) supporting 2 hosts, one for each side of the tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnelConfig.property.name">Name</a></code> | <code>*string</code> | Name of the GRE tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnelConfig.property.accountId">AccountId</a></code> | <code>*string</code> | The account identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnelConfig.property.description">Description</a></code> | <code>*string</code> | Description of the GRE tunnel intent. |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnelConfig.property.healthCheckEnabled">HealthCheckEnabled</a></code> | <code>interface{}</code> | Specifies if ICMP tunnel health checks are enabled. |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnelConfig.property.healthCheckTarget">HealthCheckTarget</a></code> | <code>*string</code> | The IP address of the customer endpoint that will receive tunnel health checks. |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnelConfig.property.healthCheckType">HealthCheckType</a></code> | <code>*string</code> | Specifies the ICMP echo type for the health check. Available values: `request`, `reply`. |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnelConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/gre_tunnel#id GreTunnel#id}. |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnelConfig.property.mtu">Mtu</a></code> | <code>*f64</code> | Maximum Transmission Unit (MTU) in bytes for the GRE tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.greTunnel.GreTunnelConfig.property.ttl">Ttl</a></code> | <code>*f64</code> | Time To Live (TTL) in number of hops of the GRE tunnel. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.greTunnel.GreTunnelConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.greTunnel.GreTunnelConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.greTunnel.GreTunnelConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.greTunnel.GreTunnelConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.greTunnel.GreTunnelConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.greTunnel.GreTunnelConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.greTunnel.GreTunnelConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CloudflareGreEndpoint`<sup>Required</sup> <a name="CloudflareGreEndpoint" id="@cdktf/provider-cloudflare.greTunnel.GreTunnelConfig.property.cloudflareGreEndpoint"></a>

```go
CloudflareGreEndpoint *string
```

- *Type:* *string

The IP address assigned to the Cloudflare side of the GRE tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/gre_tunnel#cloudflare_gre_endpoint GreTunnel#cloudflare_gre_endpoint}

---

##### `CustomerGreEndpoint`<sup>Required</sup> <a name="CustomerGreEndpoint" id="@cdktf/provider-cloudflare.greTunnel.GreTunnelConfig.property.customerGreEndpoint"></a>

```go
CustomerGreEndpoint *string
```

- *Type:* *string

The IP address assigned to the customer side of the GRE tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/gre_tunnel#customer_gre_endpoint GreTunnel#customer_gre_endpoint}

---

##### `InterfaceAddress`<sup>Required</sup> <a name="InterfaceAddress" id="@cdktf/provider-cloudflare.greTunnel.GreTunnelConfig.property.interfaceAddress"></a>

```go
InterfaceAddress *string
```

- *Type:* *string

31-bit prefix (/31 in CIDR notation) supporting 2 hosts, one for each side of the tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/gre_tunnel#interface_address GreTunnel#interface_address}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.greTunnel.GreTunnelConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the GRE tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/gre_tunnel#name GreTunnel#name}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.greTunnel.GreTunnelConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

The account identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/gre_tunnel#account_id GreTunnel#account_id}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-cloudflare.greTunnel.GreTunnelConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of the GRE tunnel intent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/gre_tunnel#description GreTunnel#description}

---

##### `HealthCheckEnabled`<sup>Optional</sup> <a name="HealthCheckEnabled" id="@cdktf/provider-cloudflare.greTunnel.GreTunnelConfig.property.healthCheckEnabled"></a>

```go
HealthCheckEnabled interface{}
```

- *Type:* interface{}

Specifies if ICMP tunnel health checks are enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/gre_tunnel#health_check_enabled GreTunnel#health_check_enabled}

---

##### `HealthCheckTarget`<sup>Optional</sup> <a name="HealthCheckTarget" id="@cdktf/provider-cloudflare.greTunnel.GreTunnelConfig.property.healthCheckTarget"></a>

```go
HealthCheckTarget *string
```

- *Type:* *string

The IP address of the customer endpoint that will receive tunnel health checks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/gre_tunnel#health_check_target GreTunnel#health_check_target}

---

##### `HealthCheckType`<sup>Optional</sup> <a name="HealthCheckType" id="@cdktf/provider-cloudflare.greTunnel.GreTunnelConfig.property.healthCheckType"></a>

```go
HealthCheckType *string
```

- *Type:* *string

Specifies the ICMP echo type for the health check. Available values: `request`, `reply`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/gre_tunnel#health_check_type GreTunnel#health_check_type}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.greTunnel.GreTunnelConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/gre_tunnel#id GreTunnel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Mtu`<sup>Optional</sup> <a name="Mtu" id="@cdktf/provider-cloudflare.greTunnel.GreTunnelConfig.property.mtu"></a>

```go
Mtu *f64
```

- *Type:* *f64

Maximum Transmission Unit (MTU) in bytes for the GRE tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/gre_tunnel#mtu GreTunnel#mtu}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktf/provider-cloudflare.greTunnel.GreTunnelConfig.property.ttl"></a>

```go
Ttl *f64
```

- *Type:* *f64

Time To Live (TTL) in number of hops of the GRE tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/gre_tunnel#ttl GreTunnel#ttl}

---



