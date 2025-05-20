# `zeroTrustAccessInfrastructureTarget` Submodule <a name="`zeroTrustAccessInfrastructureTarget` Submodule" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustAccessInfrastructureTarget <a name="ZeroTrustAccessInfrastructureTarget" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zero_trust_access_infrastructure_target cloudflare_zero_trust_access_infrastructure_target}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/zerotrustaccessinfrastructuretarget"

zerotrustaccessinfrastructuretarget.NewZeroTrustAccessInfrastructureTarget(scope Construct, id *string, config ZeroTrustAccessInfrastructureTargetConfig) ZeroTrustAccessInfrastructureTarget
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetConfig">ZeroTrustAccessInfrastructureTargetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetConfig">ZeroTrustAccessInfrastructureTargetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.putIp">PutIp</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIp` <a name="PutIp" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.putIp"></a>

```go
func PutIp(value ZeroTrustAccessInfrastructureTargetIp)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.putIp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIp">ZeroTrustAccessInfrastructureTargetIp</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ZeroTrustAccessInfrastructureTarget resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/zerotrustaccessinfrastructuretarget"

zerotrustaccessinfrastructuretarget.ZeroTrustAccessInfrastructureTarget_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/zerotrustaccessinfrastructuretarget"

zerotrustaccessinfrastructuretarget.ZeroTrustAccessInfrastructureTarget_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/zerotrustaccessinfrastructuretarget"

zerotrustaccessinfrastructuretarget.ZeroTrustAccessInfrastructureTarget_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/zerotrustaccessinfrastructuretarget"

zerotrustaccessinfrastructuretarget.ZeroTrustAccessInfrastructureTarget_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ZeroTrustAccessInfrastructureTarget resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ZeroTrustAccessInfrastructureTarget to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ZeroTrustAccessInfrastructureTarget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zero_trust_access_infrastructure_target#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustAccessInfrastructureTarget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.ip">Ip</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference">ZeroTrustAccessInfrastructureTargetIpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.modifiedAt">ModifiedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.hostnameInput">HostnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.ipInput">IpInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.ip"></a>

```go
func Ip() ZeroTrustAccessInfrastructureTargetIpOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference">ZeroTrustAccessInfrastructureTargetIpOutputReference</a>

---

##### `ModifiedAt`<sup>Required</sup> <a name="ModifiedAt" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.modifiedAt"></a>

```go
func ModifiedAt() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.hostnameInput"></a>

```go
func HostnameInput() *string
```

- *Type:* *string

---

##### `IpInput`<sup>Optional</sup> <a name="IpInput" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.ipInput"></a>

```go
func IpInput() interface{}
```

- *Type:* interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTarget.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustAccessInfrastructureTargetConfig <a name="ZeroTrustAccessInfrastructureTargetConfig" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/zerotrustaccessinfrastructuretarget"

&zerotrustaccessinfrastructuretarget.ZeroTrustAccessInfrastructureTargetConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	Hostname: *string,
	Ip: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIp,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Account identifier. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetConfig.property.hostname">Hostname</a></code> | <code>*string</code> | A non-unique field that refers to a target. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetConfig.property.ip">Ip</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIp">ZeroTrustAccessInfrastructureTargetIp</a></code> | The IPv4/IPv6 address that identifies where to reach a target. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Account identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zero_trust_access_infrastructure_target#account_id ZeroTrustAccessInfrastructureTarget#account_id}

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetConfig.property.hostname"></a>

```go
Hostname *string
```

- *Type:* *string

A non-unique field that refers to a target.

Case insensitive, maximum
length of 255 characters, supports the use of special characters dash
and period, does not support spaces, and must start and end with an
alphanumeric character.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zero_trust_access_infrastructure_target#hostname ZeroTrustAccessInfrastructureTarget#hostname}

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetConfig.property.ip"></a>

```go
Ip ZeroTrustAccessInfrastructureTargetIp
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIp">ZeroTrustAccessInfrastructureTargetIp</a>

The IPv4/IPv6 address that identifies where to reach a target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zero_trust_access_infrastructure_target#ip ZeroTrustAccessInfrastructureTarget#ip}

---

### ZeroTrustAccessInfrastructureTargetIp <a name="ZeroTrustAccessInfrastructureTargetIp" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIp.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/zerotrustaccessinfrastructuretarget"

&zerotrustaccessinfrastructuretarget.ZeroTrustAccessInfrastructureTargetIp {
	Ipv4: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4,
	Ipv6: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIp.property.ipv4">Ipv4</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4">ZeroTrustAccessInfrastructureTargetIpIpv4</a></code> | The target's IPv4 address. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIp.property.ipv6">Ipv6</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6">ZeroTrustAccessInfrastructureTargetIpIpv6</a></code> | The target's IPv6 address. |

---

##### `Ipv4`<sup>Optional</sup> <a name="Ipv4" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIp.property.ipv4"></a>

```go
Ipv4 ZeroTrustAccessInfrastructureTargetIpIpv4
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4">ZeroTrustAccessInfrastructureTargetIpIpv4</a>

The target's IPv4 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zero_trust_access_infrastructure_target#ipv4 ZeroTrustAccessInfrastructureTarget#ipv4}

---

##### `Ipv6`<sup>Optional</sup> <a name="Ipv6" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIp.property.ipv6"></a>

```go
Ipv6 ZeroTrustAccessInfrastructureTargetIpIpv6
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6">ZeroTrustAccessInfrastructureTargetIpIpv6</a>

The target's IPv6 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zero_trust_access_infrastructure_target#ipv6 ZeroTrustAccessInfrastructureTarget#ipv6}

---

### ZeroTrustAccessInfrastructureTargetIpIpv4 <a name="ZeroTrustAccessInfrastructureTargetIpIpv4" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/zerotrustaccessinfrastructuretarget"

&zerotrustaccessinfrastructuretarget.ZeroTrustAccessInfrastructureTargetIpIpv4 {
	IpAddr: *string,
	VirtualNetworkId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4.property.ipAddr">IpAddr</a></code> | <code>*string</code> | IP address of the target. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>*string</code> | (optional) Private virtual network identifier for the target. If omitted, the default virtual network ID will be used. |

---

##### `IpAddr`<sup>Optional</sup> <a name="IpAddr" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4.property.ipAddr"></a>

```go
IpAddr *string
```

- *Type:* *string

IP address of the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zero_trust_access_infrastructure_target#ip_addr ZeroTrustAccessInfrastructureTarget#ip_addr}

---

##### `VirtualNetworkId`<sup>Optional</sup> <a name="VirtualNetworkId" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4.property.virtualNetworkId"></a>

```go
VirtualNetworkId *string
```

- *Type:* *string

(optional) Private virtual network identifier for the target. If omitted, the default virtual network ID will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zero_trust_access_infrastructure_target#virtual_network_id ZeroTrustAccessInfrastructureTarget#virtual_network_id}

---

### ZeroTrustAccessInfrastructureTargetIpIpv6 <a name="ZeroTrustAccessInfrastructureTargetIpIpv6" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/zerotrustaccessinfrastructuretarget"

&zerotrustaccessinfrastructuretarget.ZeroTrustAccessInfrastructureTargetIpIpv6 {
	IpAddr: *string,
	VirtualNetworkId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6.property.ipAddr">IpAddr</a></code> | <code>*string</code> | IP address of the target. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>*string</code> | (optional) Private virtual network identifier for the target. If omitted, the default virtual network ID will be used. |

---

##### `IpAddr`<sup>Optional</sup> <a name="IpAddr" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6.property.ipAddr"></a>

```go
IpAddr *string
```

- *Type:* *string

IP address of the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zero_trust_access_infrastructure_target#ip_addr ZeroTrustAccessInfrastructureTarget#ip_addr}

---

##### `VirtualNetworkId`<sup>Optional</sup> <a name="VirtualNetworkId" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6.property.virtualNetworkId"></a>

```go
VirtualNetworkId *string
```

- *Type:* *string

(optional) Private virtual network identifier for the target. If omitted, the default virtual network ID will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zero_trust_access_infrastructure_target#virtual_network_id ZeroTrustAccessInfrastructureTarget#virtual_network_id}

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference <a name="ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/zerotrustaccessinfrastructuretarget"

zerotrustaccessinfrastructuretarget.NewZeroTrustAccessInfrastructureTargetIpIpv4OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.resetIpAddr">ResetIpAddr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.resetVirtualNetworkId">ResetVirtualNetworkId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIpAddr` <a name="ResetIpAddr" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.resetIpAddr"></a>

```go
func ResetIpAddr()
```

##### `ResetVirtualNetworkId` <a name="ResetVirtualNetworkId" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.resetVirtualNetworkId"></a>

```go
func ResetVirtualNetworkId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.property.ipAddrInput">IpAddrInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.property.virtualNetworkIdInput">VirtualNetworkIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.property.ipAddr">IpAddr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpAddrInput`<sup>Optional</sup> <a name="IpAddrInput" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.property.ipAddrInput"></a>

```go
func IpAddrInput() *string
```

- *Type:* *string

---

##### `VirtualNetworkIdInput`<sup>Optional</sup> <a name="VirtualNetworkIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.property.virtualNetworkIdInput"></a>

```go
func VirtualNetworkIdInput() *string
```

- *Type:* *string

---

##### `IpAddr`<sup>Required</sup> <a name="IpAddr" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.property.ipAddr"></a>

```go
func IpAddr() *string
```

- *Type:* *string

---

##### `VirtualNetworkId`<sup>Required</sup> <a name="VirtualNetworkId" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.property.virtualNetworkId"></a>

```go
func VirtualNetworkId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference <a name="ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/zerotrustaccessinfrastructuretarget"

zerotrustaccessinfrastructuretarget.NewZeroTrustAccessInfrastructureTargetIpIpv6OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.resetIpAddr">ResetIpAddr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.resetVirtualNetworkId">ResetVirtualNetworkId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIpAddr` <a name="ResetIpAddr" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.resetIpAddr"></a>

```go
func ResetIpAddr()
```

##### `ResetVirtualNetworkId` <a name="ResetVirtualNetworkId" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.resetVirtualNetworkId"></a>

```go
func ResetVirtualNetworkId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.property.ipAddrInput">IpAddrInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.property.virtualNetworkIdInput">VirtualNetworkIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.property.ipAddr">IpAddr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpAddrInput`<sup>Optional</sup> <a name="IpAddrInput" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.property.ipAddrInput"></a>

```go
func IpAddrInput() *string
```

- *Type:* *string

---

##### `VirtualNetworkIdInput`<sup>Optional</sup> <a name="VirtualNetworkIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.property.virtualNetworkIdInput"></a>

```go
func VirtualNetworkIdInput() *string
```

- *Type:* *string

---

##### `IpAddr`<sup>Required</sup> <a name="IpAddr" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.property.ipAddr"></a>

```go
func IpAddr() *string
```

- *Type:* *string

---

##### `VirtualNetworkId`<sup>Required</sup> <a name="VirtualNetworkId" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.property.virtualNetworkId"></a>

```go
func VirtualNetworkId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustAccessInfrastructureTargetIpOutputReference <a name="ZeroTrustAccessInfrastructureTargetIpOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/zerotrustaccessinfrastructuretarget"

zerotrustaccessinfrastructuretarget.NewZeroTrustAccessInfrastructureTargetIpOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ZeroTrustAccessInfrastructureTargetIpOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.putIpv4">PutIpv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.putIpv6">PutIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.resetIpv4">ResetIpv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.resetIpv6">ResetIpv6</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIpv4` <a name="PutIpv4" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.putIpv4"></a>

```go
func PutIpv4(value ZeroTrustAccessInfrastructureTargetIpIpv4)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.putIpv4.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4">ZeroTrustAccessInfrastructureTargetIpIpv4</a>

---

##### `PutIpv6` <a name="PutIpv6" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.putIpv6"></a>

```go
func PutIpv6(value ZeroTrustAccessInfrastructureTargetIpIpv6)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.putIpv6.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6">ZeroTrustAccessInfrastructureTargetIpIpv6</a>

---

##### `ResetIpv4` <a name="ResetIpv4" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.resetIpv4"></a>

```go
func ResetIpv4()
```

##### `ResetIpv6` <a name="ResetIpv6" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.resetIpv6"></a>

```go
func ResetIpv6()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.property.ipv4">Ipv4</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference">ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.property.ipv6">Ipv6</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference">ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.property.ipv4Input">Ipv4Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.property.ipv6Input">Ipv6Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Ipv4`<sup>Required</sup> <a name="Ipv4" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.property.ipv4"></a>

```go
func Ipv4() ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference">ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference</a>

---

##### `Ipv6`<sup>Required</sup> <a name="Ipv6" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.property.ipv6"></a>

```go
func Ipv6() ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference">ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference</a>

---

##### `Ipv4Input`<sup>Optional</sup> <a name="Ipv4Input" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.property.ipv4Input"></a>

```go
func Ipv4Input() interface{}
```

- *Type:* interface{}

---

##### `Ipv6Input`<sup>Optional</sup> <a name="Ipv6Input" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.property.ipv6Input"></a>

```go
func Ipv6Input() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessInfrastructureTarget.ZeroTrustAccessInfrastructureTargetIpOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



