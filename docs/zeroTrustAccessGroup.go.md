# `zeroTrustAccessGroup` Submodule <a name="`zeroTrustAccessGroup` Submodule" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustAccessGroup <a name="ZeroTrustAccessGroup" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group cloudflare_zero_trust_access_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zerotrustaccessgroup"

zerotrustaccessgroup.NewZeroTrustAccessGroup(scope Construct, id *string, config ZeroTrustAccessGroupConfig) ZeroTrustAccessGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig">ZeroTrustAccessGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig">ZeroTrustAccessGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.putExclude">PutExclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.putInclude">PutInclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.putRequire">PutRequire</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.resetExclude">ResetExclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.resetRequire">ResetRequire</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.resetZoneId">ResetZoneId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutExclude` <a name="PutExclude" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.putExclude"></a>

```go
func PutExclude(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.putExclude.parameter.value"></a>

- *Type:* interface{}

---

##### `PutInclude` <a name="PutInclude" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.putInclude"></a>

```go
func PutInclude(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.putInclude.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRequire` <a name="PutRequire" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.putRequire"></a>

```go
func PutRequire(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.putRequire.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.resetAccountId"></a>

```go
func ResetAccountId()
```

##### `ResetExclude` <a name="ResetExclude" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.resetExclude"></a>

```go
func ResetExclude()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.resetId"></a>

```go
func ResetId()
```

##### `ResetRequire` <a name="ResetRequire" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.resetRequire"></a>

```go
func ResetRequire()
```

##### `ResetZoneId` <a name="ResetZoneId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.resetZoneId"></a>

```go
func ResetZoneId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ZeroTrustAccessGroup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zerotrustaccessgroup"

zerotrustaccessgroup.ZeroTrustAccessGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zerotrustaccessgroup"

zerotrustaccessgroup.ZeroTrustAccessGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zerotrustaccessgroup"

zerotrustaccessgroup.ZeroTrustAccessGroup_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zerotrustaccessgroup"

zerotrustaccessgroup.ZeroTrustAccessGroup_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ZeroTrustAccessGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ZeroTrustAccessGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ZeroTrustAccessGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustAccessGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.exclude">Exclude</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList">ZeroTrustAccessGroupExcludeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.include">Include</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList">ZeroTrustAccessGroupIncludeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.require">Require</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList">ZeroTrustAccessGroupRequireList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.excludeInput">ExcludeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.includeInput">IncludeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.requireInput">RequireInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.zoneIdInput">ZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Exclude`<sup>Required</sup> <a name="Exclude" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.exclude"></a>

```go
func Exclude() ZeroTrustAccessGroupExcludeList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList">ZeroTrustAccessGroupExcludeList</a>

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.include"></a>

```go
func Include() ZeroTrustAccessGroupIncludeList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList">ZeroTrustAccessGroupIncludeList</a>

---

##### `Require`<sup>Required</sup> <a name="Require" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.require"></a>

```go
func Require() ZeroTrustAccessGroupRequireList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList">ZeroTrustAccessGroupRequireList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `ExcludeInput`<sup>Optional</sup> <a name="ExcludeInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.excludeInput"></a>

```go
func ExcludeInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IncludeInput`<sup>Optional</sup> <a name="IncludeInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.includeInput"></a>

```go
func IncludeInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RequireInput`<sup>Optional</sup> <a name="RequireInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.requireInput"></a>

```go
func RequireInput() interface{}
```

- *Type:* interface{}

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.zoneIdInput"></a>

```go
func ZoneIdInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustAccessGroupConfig <a name="ZeroTrustAccessGroupConfig" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zerotrustaccessgroup"

&zerotrustaccessgroup.ZeroTrustAccessGroupConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Include: interface{},
	Name: *string,
	AccountId: *string,
	Exclude: interface{},
	Id: *string,
	Require: interface{},
	ZoneId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.include">Include</a></code> | <code>interface{}</code> | include block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#name ZeroTrustAccessGroup#name}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.accountId">AccountId</a></code> | <code>*string</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.exclude">Exclude</a></code> | <code>interface{}</code> | exclude block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#id ZeroTrustAccessGroup#id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.require">Require</a></code> | <code>interface{}</code> | require block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.zoneId">ZoneId</a></code> | <code>*string</code> | The zone identifier to target for the resource. Conflicts with `account_id`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.include"></a>

```go
Include interface{}
```

- *Type:* interface{}

include block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#include ZeroTrustAccessGroup#include}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#name ZeroTrustAccessGroup#name}.

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

The account identifier to target for the resource.

Conflicts with `zone_id`. **Modifying this attribute will force creation of a new resource.**

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#account_id ZeroTrustAccessGroup#account_id}

---

##### `Exclude`<sup>Optional</sup> <a name="Exclude" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.exclude"></a>

```go
Exclude interface{}
```

- *Type:* interface{}

exclude block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#exclude ZeroTrustAccessGroup#exclude}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#id ZeroTrustAccessGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Require`<sup>Optional</sup> <a name="Require" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.require"></a>

```go
Require interface{}
```

- *Type:* interface{}

require block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#require ZeroTrustAccessGroup#require}

---

##### `ZoneId`<sup>Optional</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.zoneId"></a>

```go
ZoneId *string
```

- *Type:* *string

The zone identifier to target for the resource. Conflicts with `account_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#zone_id ZeroTrustAccessGroup#zone_id}

---

### ZeroTrustAccessGroupExclude <a name="ZeroTrustAccessGroupExclude" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zerotrustaccessgroup"

&zerotrustaccessgroup.ZeroTrustAccessGroupExclude {
	AnyValidServiceToken: interface{},
	AuthContext: interface{},
	AuthMethod: *string,
	Azure: interface{},
	Certificate: interface{},
	CommonName: *string,
	CommonNames: *[]*string,
	DevicePosture: *[]*string,
	Email: *[]*string,
	EmailDomain: *[]*string,
	EmailList: *[]*string,
	Everyone: interface{},
	ExternalEvaluation: interface{},
	Geo: *[]*string,
	Github: interface{},
	Group: *[]*string,
	Gsuite: interface{},
	Ip: *[]*string,
	IpList: *[]*string,
	LoginMethod: *[]*string,
	Okta: interface{},
	Saml: interface{},
	ServiceToken: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.anyValidServiceToken">AnyValidServiceToken</a></code> | <code>interface{}</code> | Matches any valid Access service token. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.authContext">AuthContext</a></code> | <code>interface{}</code> | auth_context block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.authMethod">AuthMethod</a></code> | <code>*string</code> | The type of authentication method. Refer to https://datatracker.ietf.org/doc/html/rfc8176#section-2 for possible types. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.azure">Azure</a></code> | <code>interface{}</code> | azure block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.certificate">Certificate</a></code> | <code>interface{}</code> | Matches any valid client certificate. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.commonName">CommonName</a></code> | <code>*string</code> | Matches a valid client certificate common name. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.commonNames">CommonNames</a></code> | <code>*[]*string</code> | Overflow field if you need to have multiple common_name rules in a single policy. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.devicePosture">DevicePosture</a></code> | <code>*[]*string</code> | The ID of a device posture integration. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.email">Email</a></code> | <code>*[]*string</code> | The email of the user. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.emailDomain">EmailDomain</a></code> | <code>*[]*string</code> | The email domain to match. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.emailList">EmailList</a></code> | <code>*[]*string</code> | The ID of a previously created email list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.everyone">Everyone</a></code> | <code>interface{}</code> | Matches everyone. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.externalEvaluation">ExternalEvaluation</a></code> | <code>interface{}</code> | external_evaluation block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.geo">Geo</a></code> | <code>*[]*string</code> | Matches a specific country. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.github">Github</a></code> | <code>interface{}</code> | github block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.group">Group</a></code> | <code>*[]*string</code> | The ID of a previously created Access group. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.gsuite">Gsuite</a></code> | <code>interface{}</code> | gsuite block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.ip">Ip</a></code> | <code>*[]*string</code> | An IPv4 or IPv6 CIDR block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.ipList">IpList</a></code> | <code>*[]*string</code> | The ID of a previously created IP list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.loginMethod">LoginMethod</a></code> | <code>*[]*string</code> | The ID of a configured identity provider. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.okta">Okta</a></code> | <code>interface{}</code> | okta block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.saml">Saml</a></code> | <code>interface{}</code> | saml block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.serviceToken">ServiceToken</a></code> | <code>*[]*string</code> | The ID of an Access service token. |

---

##### `AnyValidServiceToken`<sup>Optional</sup> <a name="AnyValidServiceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.anyValidServiceToken"></a>

```go
AnyValidServiceToken interface{}
```

- *Type:* interface{}

Matches any valid Access service token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#any_valid_service_token ZeroTrustAccessGroup#any_valid_service_token}

---

##### `AuthContext`<sup>Optional</sup> <a name="AuthContext" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.authContext"></a>

```go
AuthContext interface{}
```

- *Type:* interface{}

auth_context block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#auth_context ZeroTrustAccessGroup#auth_context}

---

##### `AuthMethod`<sup>Optional</sup> <a name="AuthMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.authMethod"></a>

```go
AuthMethod *string
```

- *Type:* *string

The type of authentication method. Refer to https://datatracker.ietf.org/doc/html/rfc8176#section-2 for possible types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#auth_method ZeroTrustAccessGroup#auth_method}

---

##### `Azure`<sup>Optional</sup> <a name="Azure" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.azure"></a>

```go
Azure interface{}
```

- *Type:* interface{}

azure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#azure ZeroTrustAccessGroup#azure}

---

##### `Certificate`<sup>Optional</sup> <a name="Certificate" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.certificate"></a>

```go
Certificate interface{}
```

- *Type:* interface{}

Matches any valid client certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#certificate ZeroTrustAccessGroup#certificate}

---

##### `CommonName`<sup>Optional</sup> <a name="CommonName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.commonName"></a>

```go
CommonName *string
```

- *Type:* *string

Matches a valid client certificate common name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#common_name ZeroTrustAccessGroup#common_name}

---

##### `CommonNames`<sup>Optional</sup> <a name="CommonNames" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.commonNames"></a>

```go
CommonNames *[]*string
```

- *Type:* *[]*string

Overflow field if you need to have multiple common_name rules in a single policy.

Use in place of the singular common_name field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#common_names ZeroTrustAccessGroup#common_names}

---

##### `DevicePosture`<sup>Optional</sup> <a name="DevicePosture" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.devicePosture"></a>

```go
DevicePosture *[]*string
```

- *Type:* *[]*string

The ID of a device posture integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#device_posture ZeroTrustAccessGroup#device_posture}

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.email"></a>

```go
Email *[]*string
```

- *Type:* *[]*string

The email of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#email ZeroTrustAccessGroup#email}

---

##### `EmailDomain`<sup>Optional</sup> <a name="EmailDomain" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.emailDomain"></a>

```go
EmailDomain *[]*string
```

- *Type:* *[]*string

The email domain to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#email_domain ZeroTrustAccessGroup#email_domain}

---

##### `EmailList`<sup>Optional</sup> <a name="EmailList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.emailList"></a>

```go
EmailList *[]*string
```

- *Type:* *[]*string

The ID of a previously created email list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#email_list ZeroTrustAccessGroup#email_list}

---

##### `Everyone`<sup>Optional</sup> <a name="Everyone" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.everyone"></a>

```go
Everyone interface{}
```

- *Type:* interface{}

Matches everyone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#everyone ZeroTrustAccessGroup#everyone}

---

##### `ExternalEvaluation`<sup>Optional</sup> <a name="ExternalEvaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.externalEvaluation"></a>

```go
ExternalEvaluation interface{}
```

- *Type:* interface{}

external_evaluation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#external_evaluation ZeroTrustAccessGroup#external_evaluation}

---

##### `Geo`<sup>Optional</sup> <a name="Geo" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.geo"></a>

```go
Geo *[]*string
```

- *Type:* *[]*string

Matches a specific country.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#geo ZeroTrustAccessGroup#geo}

---

##### `Github`<sup>Optional</sup> <a name="Github" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.github"></a>

```go
Github interface{}
```

- *Type:* interface{}

github block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#github ZeroTrustAccessGroup#github}

---

##### `Group`<sup>Optional</sup> <a name="Group" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.group"></a>

```go
Group *[]*string
```

- *Type:* *[]*string

The ID of a previously created Access group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#group ZeroTrustAccessGroup#group}

---

##### `Gsuite`<sup>Optional</sup> <a name="Gsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.gsuite"></a>

```go
Gsuite interface{}
```

- *Type:* interface{}

gsuite block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#gsuite ZeroTrustAccessGroup#gsuite}

---

##### `Ip`<sup>Optional</sup> <a name="Ip" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.ip"></a>

```go
Ip *[]*string
```

- *Type:* *[]*string

An IPv4 or IPv6 CIDR block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#ip ZeroTrustAccessGroup#ip}

---

##### `IpList`<sup>Optional</sup> <a name="IpList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.ipList"></a>

```go
IpList *[]*string
```

- *Type:* *[]*string

The ID of a previously created IP list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#ip_list ZeroTrustAccessGroup#ip_list}

---

##### `LoginMethod`<sup>Optional</sup> <a name="LoginMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.loginMethod"></a>

```go
LoginMethod *[]*string
```

- *Type:* *[]*string

The ID of a configured identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#login_method ZeroTrustAccessGroup#login_method}

---

##### `Okta`<sup>Optional</sup> <a name="Okta" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.okta"></a>

```go
Okta interface{}
```

- *Type:* interface{}

okta block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#okta ZeroTrustAccessGroup#okta}

---

##### `Saml`<sup>Optional</sup> <a name="Saml" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.saml"></a>

```go
Saml interface{}
```

- *Type:* interface{}

saml block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#saml ZeroTrustAccessGroup#saml}

---

##### `ServiceToken`<sup>Optional</sup> <a name="ServiceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.serviceToken"></a>

```go
ServiceToken *[]*string
```

- *Type:* *[]*string

The ID of an Access service token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#service_token ZeroTrustAccessGroup#service_token}

---

### ZeroTrustAccessGroupExcludeAuthContext <a name="ZeroTrustAccessGroupExcludeAuthContext" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContext"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContext.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zerotrustaccessgroup"

&zerotrustaccessgroup.ZeroTrustAccessGroupExcludeAuthContext {
	AcId: *string,
	Id: *string,
	IdentityProviderId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContext.property.acId">AcId</a></code> | <code>*string</code> | The ACID of the Authentication Context. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContext.property.id">Id</a></code> | <code>*string</code> | The ID of the Authentication Context. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContext.property.identityProviderId">IdentityProviderId</a></code> | <code>*string</code> | The ID of the Azure identity provider. |

---

##### `AcId`<sup>Required</sup> <a name="AcId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContext.property.acId"></a>

```go
AcId *string
```

- *Type:* *string

The ACID of the Authentication Context.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#ac_id ZeroTrustAccessGroup#ac_id}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContext.property.id"></a>

```go
Id *string
```

- *Type:* *string

The ID of the Authentication Context.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#id ZeroTrustAccessGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContext.property.identityProviderId"></a>

```go
IdentityProviderId *string
```

- *Type:* *string

The ID of the Azure identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}

---

### ZeroTrustAccessGroupExcludeAzure <a name="ZeroTrustAccessGroupExcludeAzure" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzure.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zerotrustaccessgroup"

&zerotrustaccessgroup.ZeroTrustAccessGroupExcludeAzure {
	Id: *[]*string,
	IdentityProviderId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzure.property.id">Id</a></code> | <code>*[]*string</code> | The ID of the Azure group or user. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzure.property.identityProviderId">IdentityProviderId</a></code> | <code>*string</code> | The ID of the Azure identity provider. |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzure.property.id"></a>

```go
Id *[]*string
```

- *Type:* *[]*string

The ID of the Azure group or user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#id ZeroTrustAccessGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdentityProviderId`<sup>Optional</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzure.property.identityProviderId"></a>

```go
IdentityProviderId *string
```

- *Type:* *string

The ID of the Azure identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}

---

### ZeroTrustAccessGroupExcludeExternalEvaluation <a name="ZeroTrustAccessGroupExcludeExternalEvaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zerotrustaccessgroup"

&zerotrustaccessgroup.ZeroTrustAccessGroupExcludeExternalEvaluation {
	EvaluateUrl: *string,
	KeysUrl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluation.property.evaluateUrl">EvaluateUrl</a></code> | <code>*string</code> | The API endpoint containing your business logic. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluation.property.keysUrl">KeysUrl</a></code> | <code>*string</code> | The API endpoint containing the key that Access uses to verify that the response came from your API. |

---

##### `EvaluateUrl`<sup>Optional</sup> <a name="EvaluateUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluation.property.evaluateUrl"></a>

```go
EvaluateUrl *string
```

- *Type:* *string

The API endpoint containing your business logic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#evaluate_url ZeroTrustAccessGroup#evaluate_url}

---

##### `KeysUrl`<sup>Optional</sup> <a name="KeysUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluation.property.keysUrl"></a>

```go
KeysUrl *string
```

- *Type:* *string

The API endpoint containing the key that Access uses to verify that the response came from your API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#keys_url ZeroTrustAccessGroup#keys_url}

---

### ZeroTrustAccessGroupExcludeGithub <a name="ZeroTrustAccessGroupExcludeGithub" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithub"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithub.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zerotrustaccessgroup"

&zerotrustaccessgroup.ZeroTrustAccessGroupExcludeGithub {
	IdentityProviderId: *string,
	Name: *string,
	Teams: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithub.property.identityProviderId">IdentityProviderId</a></code> | <code>*string</code> | The ID of your Github identity provider. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithub.property.name">Name</a></code> | <code>*string</code> | The name of the organization. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithub.property.teams">Teams</a></code> | <code>*[]*string</code> | The teams that should be matched. |

---

##### `IdentityProviderId`<sup>Optional</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithub.property.identityProviderId"></a>

```go
IdentityProviderId *string
```

- *Type:* *string

The ID of your Github identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithub.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#name ZeroTrustAccessGroup#name}

---

##### `Teams`<sup>Optional</sup> <a name="Teams" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithub.property.teams"></a>

```go
Teams *[]*string
```

- *Type:* *[]*string

The teams that should be matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#teams ZeroTrustAccessGroup#teams}

---

### ZeroTrustAccessGroupExcludeGsuite <a name="ZeroTrustAccessGroupExcludeGsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuite"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuite.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zerotrustaccessgroup"

&zerotrustaccessgroup.ZeroTrustAccessGroupExcludeGsuite {
	Email: *[]*string,
	IdentityProviderId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuite.property.email">Email</a></code> | <code>*[]*string</code> | The email of the Google Workspace group. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuite.property.identityProviderId">IdentityProviderId</a></code> | <code>*string</code> | The ID of your Google Workspace identity provider. |

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuite.property.email"></a>

```go
Email *[]*string
```

- *Type:* *[]*string

The email of the Google Workspace group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#email ZeroTrustAccessGroup#email}

---

##### `IdentityProviderId`<sup>Optional</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuite.property.identityProviderId"></a>

```go
IdentityProviderId *string
```

- *Type:* *string

The ID of your Google Workspace identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}

---

### ZeroTrustAccessGroupExcludeOkta <a name="ZeroTrustAccessGroupExcludeOkta" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOkta"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOkta.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zerotrustaccessgroup"

&zerotrustaccessgroup.ZeroTrustAccessGroupExcludeOkta {
	IdentityProviderId: *string,
	Name: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOkta.property.identityProviderId">IdentityProviderId</a></code> | <code>*string</code> | The ID of your Okta identity provider. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOkta.property.name">Name</a></code> | <code>*[]*string</code> | The name of the Okta Group. |

---

##### `IdentityProviderId`<sup>Optional</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOkta.property.identityProviderId"></a>

```go
IdentityProviderId *string
```

- *Type:* *string

The ID of your Okta identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOkta.property.name"></a>

```go
Name *[]*string
```

- *Type:* *[]*string

The name of the Okta Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#name ZeroTrustAccessGroup#name}

---

### ZeroTrustAccessGroupExcludeSaml <a name="ZeroTrustAccessGroupExcludeSaml" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSaml"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSaml.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zerotrustaccessgroup"

&zerotrustaccessgroup.ZeroTrustAccessGroupExcludeSaml {
	AttributeName: *string,
	AttributeValue: *string,
	IdentityProviderId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSaml.property.attributeName">AttributeName</a></code> | <code>*string</code> | The name of the SAML attribute. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSaml.property.attributeValue">AttributeValue</a></code> | <code>*string</code> | The SAML attribute value to look for. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSaml.property.identityProviderId">IdentityProviderId</a></code> | <code>*string</code> | The ID of your SAML identity provider. |

---

##### `AttributeName`<sup>Optional</sup> <a name="AttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSaml.property.attributeName"></a>

```go
AttributeName *string
```

- *Type:* *string

The name of the SAML attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#attribute_name ZeroTrustAccessGroup#attribute_name}

---

##### `AttributeValue`<sup>Optional</sup> <a name="AttributeValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSaml.property.attributeValue"></a>

```go
AttributeValue *string
```

- *Type:* *string

The SAML attribute value to look for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#attribute_value ZeroTrustAccessGroup#attribute_value}

---

##### `IdentityProviderId`<sup>Optional</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSaml.property.identityProviderId"></a>

```go
IdentityProviderId *string
```

- *Type:* *string

The ID of your SAML identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}

---

### ZeroTrustAccessGroupInclude <a name="ZeroTrustAccessGroupInclude" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zerotrustaccessgroup"

&zerotrustaccessgroup.ZeroTrustAccessGroupInclude {
	AnyValidServiceToken: interface{},
	AuthContext: interface{},
	AuthMethod: *string,
	Azure: interface{},
	Certificate: interface{},
	CommonName: *string,
	CommonNames: *[]*string,
	DevicePosture: *[]*string,
	Email: *[]*string,
	EmailDomain: *[]*string,
	EmailList: *[]*string,
	Everyone: interface{},
	ExternalEvaluation: interface{},
	Geo: *[]*string,
	Github: interface{},
	Group: *[]*string,
	Gsuite: interface{},
	Ip: *[]*string,
	IpList: *[]*string,
	LoginMethod: *[]*string,
	Okta: interface{},
	Saml: interface{},
	ServiceToken: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.anyValidServiceToken">AnyValidServiceToken</a></code> | <code>interface{}</code> | Matches any valid Access service token. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.authContext">AuthContext</a></code> | <code>interface{}</code> | auth_context block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.authMethod">AuthMethod</a></code> | <code>*string</code> | The type of authentication method. Refer to https://datatracker.ietf.org/doc/html/rfc8176#section-2 for possible types. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.azure">Azure</a></code> | <code>interface{}</code> | azure block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.certificate">Certificate</a></code> | <code>interface{}</code> | Matches any valid client certificate. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.commonName">CommonName</a></code> | <code>*string</code> | Matches a valid client certificate common name. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.commonNames">CommonNames</a></code> | <code>*[]*string</code> | Overflow field if you need to have multiple common_name rules in a single policy. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.devicePosture">DevicePosture</a></code> | <code>*[]*string</code> | The ID of a device posture integration. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.email">Email</a></code> | <code>*[]*string</code> | The email of the user. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.emailDomain">EmailDomain</a></code> | <code>*[]*string</code> | The email domain to match. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.emailList">EmailList</a></code> | <code>*[]*string</code> | The ID of a previously created email list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.everyone">Everyone</a></code> | <code>interface{}</code> | Matches everyone. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.externalEvaluation">ExternalEvaluation</a></code> | <code>interface{}</code> | external_evaluation block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.geo">Geo</a></code> | <code>*[]*string</code> | Matches a specific country. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.github">Github</a></code> | <code>interface{}</code> | github block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.group">Group</a></code> | <code>*[]*string</code> | The ID of a previously created Access group. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.gsuite">Gsuite</a></code> | <code>interface{}</code> | gsuite block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.ip">Ip</a></code> | <code>*[]*string</code> | An IPv4 or IPv6 CIDR block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.ipList">IpList</a></code> | <code>*[]*string</code> | The ID of a previously created IP list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.loginMethod">LoginMethod</a></code> | <code>*[]*string</code> | The ID of a configured identity provider. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.okta">Okta</a></code> | <code>interface{}</code> | okta block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.saml">Saml</a></code> | <code>interface{}</code> | saml block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.serviceToken">ServiceToken</a></code> | <code>*[]*string</code> | The ID of an Access service token. |

---

##### `AnyValidServiceToken`<sup>Optional</sup> <a name="AnyValidServiceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.anyValidServiceToken"></a>

```go
AnyValidServiceToken interface{}
```

- *Type:* interface{}

Matches any valid Access service token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#any_valid_service_token ZeroTrustAccessGroup#any_valid_service_token}

---

##### `AuthContext`<sup>Optional</sup> <a name="AuthContext" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.authContext"></a>

```go
AuthContext interface{}
```

- *Type:* interface{}

auth_context block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#auth_context ZeroTrustAccessGroup#auth_context}

---

##### `AuthMethod`<sup>Optional</sup> <a name="AuthMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.authMethod"></a>

```go
AuthMethod *string
```

- *Type:* *string

The type of authentication method. Refer to https://datatracker.ietf.org/doc/html/rfc8176#section-2 for possible types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#auth_method ZeroTrustAccessGroup#auth_method}

---

##### `Azure`<sup>Optional</sup> <a name="Azure" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.azure"></a>

```go
Azure interface{}
```

- *Type:* interface{}

azure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#azure ZeroTrustAccessGroup#azure}

---

##### `Certificate`<sup>Optional</sup> <a name="Certificate" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.certificate"></a>

```go
Certificate interface{}
```

- *Type:* interface{}

Matches any valid client certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#certificate ZeroTrustAccessGroup#certificate}

---

##### `CommonName`<sup>Optional</sup> <a name="CommonName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.commonName"></a>

```go
CommonName *string
```

- *Type:* *string

Matches a valid client certificate common name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#common_name ZeroTrustAccessGroup#common_name}

---

##### `CommonNames`<sup>Optional</sup> <a name="CommonNames" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.commonNames"></a>

```go
CommonNames *[]*string
```

- *Type:* *[]*string

Overflow field if you need to have multiple common_name rules in a single policy.

Use in place of the singular common_name field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#common_names ZeroTrustAccessGroup#common_names}

---

##### `DevicePosture`<sup>Optional</sup> <a name="DevicePosture" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.devicePosture"></a>

```go
DevicePosture *[]*string
```

- *Type:* *[]*string

The ID of a device posture integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#device_posture ZeroTrustAccessGroup#device_posture}

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.email"></a>

```go
Email *[]*string
```

- *Type:* *[]*string

The email of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#email ZeroTrustAccessGroup#email}

---

##### `EmailDomain`<sup>Optional</sup> <a name="EmailDomain" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.emailDomain"></a>

```go
EmailDomain *[]*string
```

- *Type:* *[]*string

The email domain to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#email_domain ZeroTrustAccessGroup#email_domain}

---

##### `EmailList`<sup>Optional</sup> <a name="EmailList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.emailList"></a>

```go
EmailList *[]*string
```

- *Type:* *[]*string

The ID of a previously created email list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#email_list ZeroTrustAccessGroup#email_list}

---

##### `Everyone`<sup>Optional</sup> <a name="Everyone" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.everyone"></a>

```go
Everyone interface{}
```

- *Type:* interface{}

Matches everyone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#everyone ZeroTrustAccessGroup#everyone}

---

##### `ExternalEvaluation`<sup>Optional</sup> <a name="ExternalEvaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.externalEvaluation"></a>

```go
ExternalEvaluation interface{}
```

- *Type:* interface{}

external_evaluation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#external_evaluation ZeroTrustAccessGroup#external_evaluation}

---

##### `Geo`<sup>Optional</sup> <a name="Geo" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.geo"></a>

```go
Geo *[]*string
```

- *Type:* *[]*string

Matches a specific country.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#geo ZeroTrustAccessGroup#geo}

---

##### `Github`<sup>Optional</sup> <a name="Github" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.github"></a>

```go
Github interface{}
```

- *Type:* interface{}

github block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#github ZeroTrustAccessGroup#github}

---

##### `Group`<sup>Optional</sup> <a name="Group" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.group"></a>

```go
Group *[]*string
```

- *Type:* *[]*string

The ID of a previously created Access group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#group ZeroTrustAccessGroup#group}

---

##### `Gsuite`<sup>Optional</sup> <a name="Gsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.gsuite"></a>

```go
Gsuite interface{}
```

- *Type:* interface{}

gsuite block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#gsuite ZeroTrustAccessGroup#gsuite}

---

##### `Ip`<sup>Optional</sup> <a name="Ip" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.ip"></a>

```go
Ip *[]*string
```

- *Type:* *[]*string

An IPv4 or IPv6 CIDR block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#ip ZeroTrustAccessGroup#ip}

---

##### `IpList`<sup>Optional</sup> <a name="IpList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.ipList"></a>

```go
IpList *[]*string
```

- *Type:* *[]*string

The ID of a previously created IP list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#ip_list ZeroTrustAccessGroup#ip_list}

---

##### `LoginMethod`<sup>Optional</sup> <a name="LoginMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.loginMethod"></a>

```go
LoginMethod *[]*string
```

- *Type:* *[]*string

The ID of a configured identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#login_method ZeroTrustAccessGroup#login_method}

---

##### `Okta`<sup>Optional</sup> <a name="Okta" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.okta"></a>

```go
Okta interface{}
```

- *Type:* interface{}

okta block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#okta ZeroTrustAccessGroup#okta}

---

##### `Saml`<sup>Optional</sup> <a name="Saml" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.saml"></a>

```go
Saml interface{}
```

- *Type:* interface{}

saml block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#saml ZeroTrustAccessGroup#saml}

---

##### `ServiceToken`<sup>Optional</sup> <a name="ServiceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.serviceToken"></a>

```go
ServiceToken *[]*string
```

- *Type:* *[]*string

The ID of an Access service token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#service_token ZeroTrustAccessGroup#service_token}

---

### ZeroTrustAccessGroupIncludeAuthContext <a name="ZeroTrustAccessGroupIncludeAuthContext" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContext"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContext.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zerotrustaccessgroup"

&zerotrustaccessgroup.ZeroTrustAccessGroupIncludeAuthContext {
	AcId: *string,
	Id: *string,
	IdentityProviderId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContext.property.acId">AcId</a></code> | <code>*string</code> | The ACID of the Authentication Context. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContext.property.id">Id</a></code> | <code>*string</code> | The ID of the Authentication Context. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContext.property.identityProviderId">IdentityProviderId</a></code> | <code>*string</code> | The ID of the Azure identity provider. |

---

##### `AcId`<sup>Required</sup> <a name="AcId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContext.property.acId"></a>

```go
AcId *string
```

- *Type:* *string

The ACID of the Authentication Context.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#ac_id ZeroTrustAccessGroup#ac_id}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContext.property.id"></a>

```go
Id *string
```

- *Type:* *string

The ID of the Authentication Context.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#id ZeroTrustAccessGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContext.property.identityProviderId"></a>

```go
IdentityProviderId *string
```

- *Type:* *string

The ID of the Azure identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}

---

### ZeroTrustAccessGroupIncludeAzure <a name="ZeroTrustAccessGroupIncludeAzure" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzure.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zerotrustaccessgroup"

&zerotrustaccessgroup.ZeroTrustAccessGroupIncludeAzure {
	Id: *[]*string,
	IdentityProviderId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzure.property.id">Id</a></code> | <code>*[]*string</code> | The ID of the Azure group or user. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzure.property.identityProviderId">IdentityProviderId</a></code> | <code>*string</code> | The ID of the Azure identity provider. |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzure.property.id"></a>

```go
Id *[]*string
```

- *Type:* *[]*string

The ID of the Azure group or user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#id ZeroTrustAccessGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdentityProviderId`<sup>Optional</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzure.property.identityProviderId"></a>

```go
IdentityProviderId *string
```

- *Type:* *string

The ID of the Azure identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}

---

### ZeroTrustAccessGroupIncludeExternalEvaluation <a name="ZeroTrustAccessGroupIncludeExternalEvaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zerotrustaccessgroup"

&zerotrustaccessgroup.ZeroTrustAccessGroupIncludeExternalEvaluation {
	EvaluateUrl: *string,
	KeysUrl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluation.property.evaluateUrl">EvaluateUrl</a></code> | <code>*string</code> | The API endpoint containing your business logic. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluation.property.keysUrl">KeysUrl</a></code> | <code>*string</code> | The API endpoint containing the key that Access uses to verify that the response came from your API. |

---

##### `EvaluateUrl`<sup>Optional</sup> <a name="EvaluateUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluation.property.evaluateUrl"></a>

```go
EvaluateUrl *string
```

- *Type:* *string

The API endpoint containing your business logic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#evaluate_url ZeroTrustAccessGroup#evaluate_url}

---

##### `KeysUrl`<sup>Optional</sup> <a name="KeysUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluation.property.keysUrl"></a>

```go
KeysUrl *string
```

- *Type:* *string

The API endpoint containing the key that Access uses to verify that the response came from your API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#keys_url ZeroTrustAccessGroup#keys_url}

---

### ZeroTrustAccessGroupIncludeGithub <a name="ZeroTrustAccessGroupIncludeGithub" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithub"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithub.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zerotrustaccessgroup"

&zerotrustaccessgroup.ZeroTrustAccessGroupIncludeGithub {
	IdentityProviderId: *string,
	Name: *string,
	Teams: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithub.property.identityProviderId">IdentityProviderId</a></code> | <code>*string</code> | The ID of your Github identity provider. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithub.property.name">Name</a></code> | <code>*string</code> | The name of the organization. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithub.property.teams">Teams</a></code> | <code>*[]*string</code> | The teams that should be matched. |

---

##### `IdentityProviderId`<sup>Optional</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithub.property.identityProviderId"></a>

```go
IdentityProviderId *string
```

- *Type:* *string

The ID of your Github identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithub.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#name ZeroTrustAccessGroup#name}

---

##### `Teams`<sup>Optional</sup> <a name="Teams" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithub.property.teams"></a>

```go
Teams *[]*string
```

- *Type:* *[]*string

The teams that should be matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#teams ZeroTrustAccessGroup#teams}

---

### ZeroTrustAccessGroupIncludeGsuite <a name="ZeroTrustAccessGroupIncludeGsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuite"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuite.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zerotrustaccessgroup"

&zerotrustaccessgroup.ZeroTrustAccessGroupIncludeGsuite {
	Email: *[]*string,
	IdentityProviderId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuite.property.email">Email</a></code> | <code>*[]*string</code> | The email of the Google Workspace group. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuite.property.identityProviderId">IdentityProviderId</a></code> | <code>*string</code> | The ID of your Google Workspace identity provider. |

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuite.property.email"></a>

```go
Email *[]*string
```

- *Type:* *[]*string

The email of the Google Workspace group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#email ZeroTrustAccessGroup#email}

---

##### `IdentityProviderId`<sup>Optional</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuite.property.identityProviderId"></a>

```go
IdentityProviderId *string
```

- *Type:* *string

The ID of your Google Workspace identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}

---

### ZeroTrustAccessGroupIncludeOkta <a name="ZeroTrustAccessGroupIncludeOkta" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOkta"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOkta.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zerotrustaccessgroup"

&zerotrustaccessgroup.ZeroTrustAccessGroupIncludeOkta {
	IdentityProviderId: *string,
	Name: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOkta.property.identityProviderId">IdentityProviderId</a></code> | <code>*string</code> | The ID of your Okta identity provider. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOkta.property.name">Name</a></code> | <code>*[]*string</code> | The name of the Okta Group. |

---

##### `IdentityProviderId`<sup>Optional</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOkta.property.identityProviderId"></a>

```go
IdentityProviderId *string
```

- *Type:* *string

The ID of your Okta identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOkta.property.name"></a>

```go
Name *[]*string
```

- *Type:* *[]*string

The name of the Okta Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#name ZeroTrustAccessGroup#name}

---

### ZeroTrustAccessGroupIncludeSaml <a name="ZeroTrustAccessGroupIncludeSaml" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSaml"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSaml.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zerotrustaccessgroup"

&zerotrustaccessgroup.ZeroTrustAccessGroupIncludeSaml {
	AttributeName: *string,
	AttributeValue: *string,
	IdentityProviderId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSaml.property.attributeName">AttributeName</a></code> | <code>*string</code> | The name of the SAML attribute. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSaml.property.attributeValue">AttributeValue</a></code> | <code>*string</code> | The SAML attribute value to look for. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSaml.property.identityProviderId">IdentityProviderId</a></code> | <code>*string</code> | The ID of your SAML identity provider. |

---

##### `AttributeName`<sup>Optional</sup> <a name="AttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSaml.property.attributeName"></a>

```go
AttributeName *string
```

- *Type:* *string

The name of the SAML attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#attribute_name ZeroTrustAccessGroup#attribute_name}

---

##### `AttributeValue`<sup>Optional</sup> <a name="AttributeValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSaml.property.attributeValue"></a>

```go
AttributeValue *string
```

- *Type:* *string

The SAML attribute value to look for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#attribute_value ZeroTrustAccessGroup#attribute_value}

---

##### `IdentityProviderId`<sup>Optional</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSaml.property.identityProviderId"></a>

```go
IdentityProviderId *string
```

- *Type:* *string

The ID of your SAML identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}

---

### ZeroTrustAccessGroupRequire <a name="ZeroTrustAccessGroupRequire" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zerotrustaccessgroup"

&zerotrustaccessgroup.ZeroTrustAccessGroupRequire {
	AnyValidServiceToken: interface{},
	AuthContext: interface{},
	AuthMethod: *string,
	Azure: interface{},
	Certificate: interface{},
	CommonName: *string,
	CommonNames: *[]*string,
	DevicePosture: *[]*string,
	Email: *[]*string,
	EmailDomain: *[]*string,
	EmailList: *[]*string,
	Everyone: interface{},
	ExternalEvaluation: interface{},
	Geo: *[]*string,
	Github: interface{},
	Group: *[]*string,
	Gsuite: interface{},
	Ip: *[]*string,
	IpList: *[]*string,
	LoginMethod: *[]*string,
	Okta: interface{},
	Saml: interface{},
	ServiceToken: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.anyValidServiceToken">AnyValidServiceToken</a></code> | <code>interface{}</code> | Matches any valid Access service token. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.authContext">AuthContext</a></code> | <code>interface{}</code> | auth_context block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.authMethod">AuthMethod</a></code> | <code>*string</code> | The type of authentication method. Refer to https://datatracker.ietf.org/doc/html/rfc8176#section-2 for possible types. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.azure">Azure</a></code> | <code>interface{}</code> | azure block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.certificate">Certificate</a></code> | <code>interface{}</code> | Matches any valid client certificate. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.commonName">CommonName</a></code> | <code>*string</code> | Matches a valid client certificate common name. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.commonNames">CommonNames</a></code> | <code>*[]*string</code> | Overflow field if you need to have multiple common_name rules in a single policy. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.devicePosture">DevicePosture</a></code> | <code>*[]*string</code> | The ID of a device posture integration. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.email">Email</a></code> | <code>*[]*string</code> | The email of the user. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.emailDomain">EmailDomain</a></code> | <code>*[]*string</code> | The email domain to match. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.emailList">EmailList</a></code> | <code>*[]*string</code> | The ID of a previously created email list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.everyone">Everyone</a></code> | <code>interface{}</code> | Matches everyone. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.externalEvaluation">ExternalEvaluation</a></code> | <code>interface{}</code> | external_evaluation block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.geo">Geo</a></code> | <code>*[]*string</code> | Matches a specific country. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.github">Github</a></code> | <code>interface{}</code> | github block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.group">Group</a></code> | <code>*[]*string</code> | The ID of a previously created Access group. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.gsuite">Gsuite</a></code> | <code>interface{}</code> | gsuite block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.ip">Ip</a></code> | <code>*[]*string</code> | An IPv4 or IPv6 CIDR block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.ipList">IpList</a></code> | <code>*[]*string</code> | The ID of a previously created IP list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.loginMethod">LoginMethod</a></code> | <code>*[]*string</code> | The ID of a configured identity provider. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.okta">Okta</a></code> | <code>interface{}</code> | okta block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.saml">Saml</a></code> | <code>interface{}</code> | saml block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.serviceToken">ServiceToken</a></code> | <code>*[]*string</code> | The ID of an Access service token. |

---

##### `AnyValidServiceToken`<sup>Optional</sup> <a name="AnyValidServiceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.anyValidServiceToken"></a>

```go
AnyValidServiceToken interface{}
```

- *Type:* interface{}

Matches any valid Access service token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#any_valid_service_token ZeroTrustAccessGroup#any_valid_service_token}

---

##### `AuthContext`<sup>Optional</sup> <a name="AuthContext" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.authContext"></a>

```go
AuthContext interface{}
```

- *Type:* interface{}

auth_context block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#auth_context ZeroTrustAccessGroup#auth_context}

---

##### `AuthMethod`<sup>Optional</sup> <a name="AuthMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.authMethod"></a>

```go
AuthMethod *string
```

- *Type:* *string

The type of authentication method. Refer to https://datatracker.ietf.org/doc/html/rfc8176#section-2 for possible types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#auth_method ZeroTrustAccessGroup#auth_method}

---

##### `Azure`<sup>Optional</sup> <a name="Azure" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.azure"></a>

```go
Azure interface{}
```

- *Type:* interface{}

azure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#azure ZeroTrustAccessGroup#azure}

---

##### `Certificate`<sup>Optional</sup> <a name="Certificate" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.certificate"></a>

```go
Certificate interface{}
```

- *Type:* interface{}

Matches any valid client certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#certificate ZeroTrustAccessGroup#certificate}

---

##### `CommonName`<sup>Optional</sup> <a name="CommonName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.commonName"></a>

```go
CommonName *string
```

- *Type:* *string

Matches a valid client certificate common name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#common_name ZeroTrustAccessGroup#common_name}

---

##### `CommonNames`<sup>Optional</sup> <a name="CommonNames" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.commonNames"></a>

```go
CommonNames *[]*string
```

- *Type:* *[]*string

Overflow field if you need to have multiple common_name rules in a single policy.

Use in place of the singular common_name field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#common_names ZeroTrustAccessGroup#common_names}

---

##### `DevicePosture`<sup>Optional</sup> <a name="DevicePosture" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.devicePosture"></a>

```go
DevicePosture *[]*string
```

- *Type:* *[]*string

The ID of a device posture integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#device_posture ZeroTrustAccessGroup#device_posture}

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.email"></a>

```go
Email *[]*string
```

- *Type:* *[]*string

The email of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#email ZeroTrustAccessGroup#email}

---

##### `EmailDomain`<sup>Optional</sup> <a name="EmailDomain" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.emailDomain"></a>

```go
EmailDomain *[]*string
```

- *Type:* *[]*string

The email domain to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#email_domain ZeroTrustAccessGroup#email_domain}

---

##### `EmailList`<sup>Optional</sup> <a name="EmailList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.emailList"></a>

```go
EmailList *[]*string
```

- *Type:* *[]*string

The ID of a previously created email list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#email_list ZeroTrustAccessGroup#email_list}

---

##### `Everyone`<sup>Optional</sup> <a name="Everyone" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.everyone"></a>

```go
Everyone interface{}
```

- *Type:* interface{}

Matches everyone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#everyone ZeroTrustAccessGroup#everyone}

---

##### `ExternalEvaluation`<sup>Optional</sup> <a name="ExternalEvaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.externalEvaluation"></a>

```go
ExternalEvaluation interface{}
```

- *Type:* interface{}

external_evaluation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#external_evaluation ZeroTrustAccessGroup#external_evaluation}

---

##### `Geo`<sup>Optional</sup> <a name="Geo" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.geo"></a>

```go
Geo *[]*string
```

- *Type:* *[]*string

Matches a specific country.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#geo ZeroTrustAccessGroup#geo}

---

##### `Github`<sup>Optional</sup> <a name="Github" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.github"></a>

```go
Github interface{}
```

- *Type:* interface{}

github block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#github ZeroTrustAccessGroup#github}

---

##### `Group`<sup>Optional</sup> <a name="Group" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.group"></a>

```go
Group *[]*string
```

- *Type:* *[]*string

The ID of a previously created Access group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#group ZeroTrustAccessGroup#group}

---

##### `Gsuite`<sup>Optional</sup> <a name="Gsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.gsuite"></a>

```go
Gsuite interface{}
```

- *Type:* interface{}

gsuite block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#gsuite ZeroTrustAccessGroup#gsuite}

---

##### `Ip`<sup>Optional</sup> <a name="Ip" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.ip"></a>

```go
Ip *[]*string
```

- *Type:* *[]*string

An IPv4 or IPv6 CIDR block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#ip ZeroTrustAccessGroup#ip}

---

##### `IpList`<sup>Optional</sup> <a name="IpList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.ipList"></a>

```go
IpList *[]*string
```

- *Type:* *[]*string

The ID of a previously created IP list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#ip_list ZeroTrustAccessGroup#ip_list}

---

##### `LoginMethod`<sup>Optional</sup> <a name="LoginMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.loginMethod"></a>

```go
LoginMethod *[]*string
```

- *Type:* *[]*string

The ID of a configured identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#login_method ZeroTrustAccessGroup#login_method}

---

##### `Okta`<sup>Optional</sup> <a name="Okta" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.okta"></a>

```go
Okta interface{}
```

- *Type:* interface{}

okta block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#okta ZeroTrustAccessGroup#okta}

---

##### `Saml`<sup>Optional</sup> <a name="Saml" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.saml"></a>

```go
Saml interface{}
```

- *Type:* interface{}

saml block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#saml ZeroTrustAccessGroup#saml}

---

##### `ServiceToken`<sup>Optional</sup> <a name="ServiceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.serviceToken"></a>

```go
ServiceToken *[]*string
```

- *Type:* *[]*string

The ID of an Access service token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#service_token ZeroTrustAccessGroup#service_token}

---

### ZeroTrustAccessGroupRequireAuthContext <a name="ZeroTrustAccessGroupRequireAuthContext" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContext"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContext.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zerotrustaccessgroup"

&zerotrustaccessgroup.ZeroTrustAccessGroupRequireAuthContext {
	AcId: *string,
	Id: *string,
	IdentityProviderId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContext.property.acId">AcId</a></code> | <code>*string</code> | The ACID of the Authentication Context. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContext.property.id">Id</a></code> | <code>*string</code> | The ID of the Authentication Context. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContext.property.identityProviderId">IdentityProviderId</a></code> | <code>*string</code> | The ID of the Azure identity provider. |

---

##### `AcId`<sup>Required</sup> <a name="AcId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContext.property.acId"></a>

```go
AcId *string
```

- *Type:* *string

The ACID of the Authentication Context.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#ac_id ZeroTrustAccessGroup#ac_id}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContext.property.id"></a>

```go
Id *string
```

- *Type:* *string

The ID of the Authentication Context.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#id ZeroTrustAccessGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContext.property.identityProviderId"></a>

```go
IdentityProviderId *string
```

- *Type:* *string

The ID of the Azure identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}

---

### ZeroTrustAccessGroupRequireAzure <a name="ZeroTrustAccessGroupRequireAzure" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzure.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zerotrustaccessgroup"

&zerotrustaccessgroup.ZeroTrustAccessGroupRequireAzure {
	Id: *[]*string,
	IdentityProviderId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzure.property.id">Id</a></code> | <code>*[]*string</code> | The ID of the Azure group or user. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzure.property.identityProviderId">IdentityProviderId</a></code> | <code>*string</code> | The ID of the Azure identity provider. |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzure.property.id"></a>

```go
Id *[]*string
```

- *Type:* *[]*string

The ID of the Azure group or user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#id ZeroTrustAccessGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdentityProviderId`<sup>Optional</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzure.property.identityProviderId"></a>

```go
IdentityProviderId *string
```

- *Type:* *string

The ID of the Azure identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}

---

### ZeroTrustAccessGroupRequireExternalEvaluation <a name="ZeroTrustAccessGroupRequireExternalEvaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zerotrustaccessgroup"

&zerotrustaccessgroup.ZeroTrustAccessGroupRequireExternalEvaluation {
	EvaluateUrl: *string,
	KeysUrl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluation.property.evaluateUrl">EvaluateUrl</a></code> | <code>*string</code> | The API endpoint containing your business logic. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluation.property.keysUrl">KeysUrl</a></code> | <code>*string</code> | The API endpoint containing the key that Access uses to verify that the response came from your API. |

---

##### `EvaluateUrl`<sup>Optional</sup> <a name="EvaluateUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluation.property.evaluateUrl"></a>

```go
EvaluateUrl *string
```

- *Type:* *string

The API endpoint containing your business logic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#evaluate_url ZeroTrustAccessGroup#evaluate_url}

---

##### `KeysUrl`<sup>Optional</sup> <a name="KeysUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluation.property.keysUrl"></a>

```go
KeysUrl *string
```

- *Type:* *string

The API endpoint containing the key that Access uses to verify that the response came from your API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#keys_url ZeroTrustAccessGroup#keys_url}

---

### ZeroTrustAccessGroupRequireGithub <a name="ZeroTrustAccessGroupRequireGithub" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithub"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithub.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zerotrustaccessgroup"

&zerotrustaccessgroup.ZeroTrustAccessGroupRequireGithub {
	IdentityProviderId: *string,
	Name: *string,
	Teams: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithub.property.identityProviderId">IdentityProviderId</a></code> | <code>*string</code> | The ID of your Github identity provider. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithub.property.name">Name</a></code> | <code>*string</code> | The name of the organization. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithub.property.teams">Teams</a></code> | <code>*[]*string</code> | The teams that should be matched. |

---

##### `IdentityProviderId`<sup>Optional</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithub.property.identityProviderId"></a>

```go
IdentityProviderId *string
```

- *Type:* *string

The ID of your Github identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithub.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#name ZeroTrustAccessGroup#name}

---

##### `Teams`<sup>Optional</sup> <a name="Teams" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithub.property.teams"></a>

```go
Teams *[]*string
```

- *Type:* *[]*string

The teams that should be matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#teams ZeroTrustAccessGroup#teams}

---

### ZeroTrustAccessGroupRequireGsuite <a name="ZeroTrustAccessGroupRequireGsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuite"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuite.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zerotrustaccessgroup"

&zerotrustaccessgroup.ZeroTrustAccessGroupRequireGsuite {
	Email: *[]*string,
	IdentityProviderId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuite.property.email">Email</a></code> | <code>*[]*string</code> | The email of the Google Workspace group. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuite.property.identityProviderId">IdentityProviderId</a></code> | <code>*string</code> | The ID of your Google Workspace identity provider. |

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuite.property.email"></a>

```go
Email *[]*string
```

- *Type:* *[]*string

The email of the Google Workspace group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#email ZeroTrustAccessGroup#email}

---

##### `IdentityProviderId`<sup>Optional</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuite.property.identityProviderId"></a>

```go
IdentityProviderId *string
```

- *Type:* *string

The ID of your Google Workspace identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}

---

### ZeroTrustAccessGroupRequireOkta <a name="ZeroTrustAccessGroupRequireOkta" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOkta"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOkta.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zerotrustaccessgroup"

&zerotrustaccessgroup.ZeroTrustAccessGroupRequireOkta {
	IdentityProviderId: *string,
	Name: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOkta.property.identityProviderId">IdentityProviderId</a></code> | <code>*string</code> | The ID of your Okta identity provider. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOkta.property.name">Name</a></code> | <code>*[]*string</code> | The name of the Okta Group. |

---

##### `IdentityProviderId`<sup>Optional</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOkta.property.identityProviderId"></a>

```go
IdentityProviderId *string
```

- *Type:* *string

The ID of your Okta identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOkta.property.name"></a>

```go
Name *[]*string
```

- *Type:* *[]*string

The name of the Okta Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#name ZeroTrustAccessGroup#name}

---

### ZeroTrustAccessGroupRequireSaml <a name="ZeroTrustAccessGroupRequireSaml" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSaml"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSaml.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zerotrustaccessgroup"

&zerotrustaccessgroup.ZeroTrustAccessGroupRequireSaml {
	AttributeName: *string,
	AttributeValue: *string,
	IdentityProviderId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSaml.property.attributeName">AttributeName</a></code> | <code>*string</code> | The name of the SAML attribute. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSaml.property.attributeValue">AttributeValue</a></code> | <code>*string</code> | The SAML attribute value to look for. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSaml.property.identityProviderId">IdentityProviderId</a></code> | <code>*string</code> | The ID of your SAML identity provider. |

---

##### `AttributeName`<sup>Optional</sup> <a name="AttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSaml.property.attributeName"></a>

```go
AttributeName *string
```

- *Type:* *string

The name of the SAML attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#attribute_name ZeroTrustAccessGroup#attribute_name}

---

##### `AttributeValue`<sup>Optional</sup> <a name="AttributeValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSaml.property.attributeValue"></a>

```go
AttributeValue *string
```

- *Type:* *string

The SAML attribute value to look for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#attribute_value ZeroTrustAccessGroup#attribute_value}

---

##### `IdentityProviderId`<sup>Optional</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSaml.property.identityProviderId"></a>

```go
IdentityProviderId *string
```

- *Type:* *string

The ID of your SAML identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustAccessGroupExcludeAuthContextList <a name="ZeroTrustAccessGroupExcludeAuthContextList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zerotrustaccessgroup"

zerotrustaccessgroup.NewZeroTrustAccessGroupExcludeAuthContextList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ZeroTrustAccessGroupExcludeAuthContextList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.get"></a>

```go
func Get(index *f64) ZeroTrustAccessGroupExcludeAuthContextOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustAccessGroupExcludeAuthContextOutputReference <a name="ZeroTrustAccessGroupExcludeAuthContextOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zerotrustaccessgroup"

zerotrustaccessgroup.NewZeroTrustAccessGroupExcludeAuthContextOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ZeroTrustAccessGroupExcludeAuthContextOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.property.acIdInput">AcIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.property.identityProviderIdInput">IdentityProviderIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.property.acId">AcId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.property.identityProviderId">IdentityProviderId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AcIdInput`<sup>Optional</sup> <a name="AcIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.property.acIdInput"></a>

```go
func AcIdInput() *string
```

- *Type:* *string

---

##### `IdentityProviderIdInput`<sup>Optional</sup> <a name="IdentityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.property.identityProviderIdInput"></a>

```go
func IdentityProviderIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `AcId`<sup>Required</sup> <a name="AcId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.property.acId"></a>

```go
func AcId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.property.identityProviderId"></a>

```go
func IdentityProviderId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustAccessGroupExcludeAzureList <a name="ZeroTrustAccessGroupExcludeAzureList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zerotrustaccessgroup"

zerotrustaccessgroup.NewZeroTrustAccessGroupExcludeAzureList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ZeroTrustAccessGroupExcludeAzureList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.get"></a>

```go
func Get(index *f64) ZeroTrustAccessGroupExcludeAzureOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustAccessGroupExcludeAzureOutputReference <a name="ZeroTrustAccessGroupExcludeAzureOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zerotrustaccessgroup"

zerotrustaccessgroup.NewZeroTrustAccessGroupExcludeAzureOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ZeroTrustAccessGroupExcludeAzureOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.resetIdentityProviderId">ResetIdentityProviderId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetIdentityProviderId` <a name="ResetIdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.resetIdentityProviderId"></a>

```go
func ResetIdentityProviderId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.property.identityProviderIdInput">IdentityProviderIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.property.idInput">IdInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.property.id">Id</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.property.identityProviderId">IdentityProviderId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdentityProviderIdInput`<sup>Optional</sup> <a name="IdentityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.property.identityProviderIdInput"></a>

```go
func IdentityProviderIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.property.idInput"></a>

```go
func IdInput() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.property.id"></a>

```go
func Id() *[]*string
```

- *Type:* *[]*string

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.property.identityProviderId"></a>

```go
func IdentityProviderId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustAccessGroupExcludeExternalEvaluationList <a name="ZeroTrustAccessGroupExcludeExternalEvaluationList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zerotrustaccessgroup"

zerotrustaccessgroup.NewZeroTrustAccessGroupExcludeExternalEvaluationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ZeroTrustAccessGroupExcludeExternalEvaluationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.get"></a>

```go
func Get(index *f64) ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference <a name="ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zerotrustaccessgroup"

zerotrustaccessgroup.NewZeroTrustAccessGroupExcludeExternalEvaluationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.resetEvaluateUrl">ResetEvaluateUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.resetKeysUrl">ResetKeysUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEvaluateUrl` <a name="ResetEvaluateUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.resetEvaluateUrl"></a>

```go
func ResetEvaluateUrl()
```

##### `ResetKeysUrl` <a name="ResetKeysUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.resetKeysUrl"></a>

```go
func ResetKeysUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.property.evaluateUrlInput">EvaluateUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.property.keysUrlInput">KeysUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.property.evaluateUrl">EvaluateUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.property.keysUrl">KeysUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EvaluateUrlInput`<sup>Optional</sup> <a name="EvaluateUrlInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.property.evaluateUrlInput"></a>

```go
func EvaluateUrlInput() *string
```

- *Type:* *string

---

##### `KeysUrlInput`<sup>Optional</sup> <a name="KeysUrlInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.property.keysUrlInput"></a>

```go
func KeysUrlInput() *string
```

- *Type:* *string

---

##### `EvaluateUrl`<sup>Required</sup> <a name="EvaluateUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.property.evaluateUrl"></a>

```go
func EvaluateUrl() *string
```

- *Type:* *string

---

##### `KeysUrl`<sup>Required</sup> <a name="KeysUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.property.keysUrl"></a>

```go
func KeysUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustAccessGroupExcludeGithubList <a name="ZeroTrustAccessGroupExcludeGithubList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zerotrustaccessgroup"

zerotrustaccessgroup.NewZeroTrustAccessGroupExcludeGithubList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ZeroTrustAccessGroupExcludeGithubList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.get"></a>

```go
func Get(index *f64) ZeroTrustAccessGroupExcludeGithubOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustAccessGroupExcludeGithubOutputReference <a name="ZeroTrustAccessGroupExcludeGithubOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zerotrustaccessgroup"

zerotrustaccessgroup.NewZeroTrustAccessGroupExcludeGithubOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ZeroTrustAccessGroupExcludeGithubOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.resetIdentityProviderId">ResetIdentityProviderId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.resetTeams">ResetTeams</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityProviderId` <a name="ResetIdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.resetIdentityProviderId"></a>

```go
func ResetIdentityProviderId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetTeams` <a name="ResetTeams" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.resetTeams"></a>

```go
func ResetTeams()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.property.identityProviderIdInput">IdentityProviderIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.property.teamsInput">TeamsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.property.identityProviderId">IdentityProviderId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.property.teams">Teams</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdentityProviderIdInput`<sup>Optional</sup> <a name="IdentityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.property.identityProviderIdInput"></a>

```go
func IdentityProviderIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TeamsInput`<sup>Optional</sup> <a name="TeamsInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.property.teamsInput"></a>

```go
func TeamsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.property.identityProviderId"></a>

```go
func IdentityProviderId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Teams`<sup>Required</sup> <a name="Teams" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.property.teams"></a>

```go
func Teams() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustAccessGroupExcludeGsuiteList <a name="ZeroTrustAccessGroupExcludeGsuiteList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zerotrustaccessgroup"

zerotrustaccessgroup.NewZeroTrustAccessGroupExcludeGsuiteList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ZeroTrustAccessGroupExcludeGsuiteList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.get"></a>

```go
func Get(index *f64) ZeroTrustAccessGroupExcludeGsuiteOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustAccessGroupExcludeGsuiteOutputReference <a name="ZeroTrustAccessGroupExcludeGsuiteOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zerotrustaccessgroup"

zerotrustaccessgroup.NewZeroTrustAccessGroupExcludeGsuiteOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ZeroTrustAccessGroupExcludeGsuiteOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.resetIdentityProviderId">ResetIdentityProviderId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEmail` <a name="ResetEmail" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.resetEmail"></a>

```go
func ResetEmail()
```

##### `ResetIdentityProviderId` <a name="ResetIdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.resetIdentityProviderId"></a>

```go
func ResetIdentityProviderId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.property.emailInput">EmailInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.property.identityProviderIdInput">IdentityProviderIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.property.email">Email</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.property.identityProviderId">IdentityProviderId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.property.emailInput"></a>

```go
func EmailInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdentityProviderIdInput`<sup>Optional</sup> <a name="IdentityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.property.identityProviderIdInput"></a>

```go
func IdentityProviderIdInput() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.property.email"></a>

```go
func Email() *[]*string
```

- *Type:* *[]*string

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.property.identityProviderId"></a>

```go
func IdentityProviderId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustAccessGroupExcludeList <a name="ZeroTrustAccessGroupExcludeList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zerotrustaccessgroup"

zerotrustaccessgroup.NewZeroTrustAccessGroupExcludeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ZeroTrustAccessGroupExcludeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.get"></a>

```go
func Get(index *f64) ZeroTrustAccessGroupExcludeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustAccessGroupExcludeOktaList <a name="ZeroTrustAccessGroupExcludeOktaList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zerotrustaccessgroup"

zerotrustaccessgroup.NewZeroTrustAccessGroupExcludeOktaList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ZeroTrustAccessGroupExcludeOktaList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.get"></a>

```go
func Get(index *f64) ZeroTrustAccessGroupExcludeOktaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustAccessGroupExcludeOktaOutputReference <a name="ZeroTrustAccessGroupExcludeOktaOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zerotrustaccessgroup"

zerotrustaccessgroup.NewZeroTrustAccessGroupExcludeOktaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ZeroTrustAccessGroupExcludeOktaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.resetIdentityProviderId">ResetIdentityProviderId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityProviderId` <a name="ResetIdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.resetIdentityProviderId"></a>

```go
func ResetIdentityProviderId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.property.identityProviderIdInput">IdentityProviderIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.property.nameInput">NameInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.property.identityProviderId">IdentityProviderId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.property.name">Name</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdentityProviderIdInput`<sup>Optional</sup> <a name="IdentityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.property.identityProviderIdInput"></a>

```go
func IdentityProviderIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.property.nameInput"></a>

```go
func NameInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.property.identityProviderId"></a>

```go
func IdentityProviderId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.property.name"></a>

```go
func Name() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustAccessGroupExcludeOutputReference <a name="ZeroTrustAccessGroupExcludeOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zerotrustaccessgroup"

zerotrustaccessgroup.NewZeroTrustAccessGroupExcludeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ZeroTrustAccessGroupExcludeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.putAuthContext">PutAuthContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.putAzure">PutAzure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.putExternalEvaluation">PutExternalEvaluation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.putGithub">PutGithub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.putGsuite">PutGsuite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.putOkta">PutOkta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.putSaml">PutSaml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetAnyValidServiceToken">ResetAnyValidServiceToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetAuthContext">ResetAuthContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetAuthMethod">ResetAuthMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetAzure">ResetAzure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetCertificate">ResetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetCommonName">ResetCommonName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetCommonNames">ResetCommonNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetDevicePosture">ResetDevicePosture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetEmailDomain">ResetEmailDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetEmailList">ResetEmailList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetEveryone">ResetEveryone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetExternalEvaluation">ResetExternalEvaluation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetGeo">ResetGeo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetGithub">ResetGithub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetGroup">ResetGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetGsuite">ResetGsuite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetIp">ResetIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetIpList">ResetIpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetLoginMethod">ResetLoginMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetOkta">ResetOkta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetSaml">ResetSaml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetServiceToken">ResetServiceToken</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthContext` <a name="PutAuthContext" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.putAuthContext"></a>

```go
func PutAuthContext(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.putAuthContext.parameter.value"></a>

- *Type:* interface{}

---

##### `PutAzure` <a name="PutAzure" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.putAzure"></a>

```go
func PutAzure(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.putAzure.parameter.value"></a>

- *Type:* interface{}

---

##### `PutExternalEvaluation` <a name="PutExternalEvaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.putExternalEvaluation"></a>

```go
func PutExternalEvaluation(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.putExternalEvaluation.parameter.value"></a>

- *Type:* interface{}

---

##### `PutGithub` <a name="PutGithub" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.putGithub"></a>

```go
func PutGithub(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.putGithub.parameter.value"></a>

- *Type:* interface{}

---

##### `PutGsuite` <a name="PutGsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.putGsuite"></a>

```go
func PutGsuite(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.putGsuite.parameter.value"></a>

- *Type:* interface{}

---

##### `PutOkta` <a name="PutOkta" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.putOkta"></a>

```go
func PutOkta(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.putOkta.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSaml` <a name="PutSaml" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.putSaml"></a>

```go
func PutSaml(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.putSaml.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAnyValidServiceToken` <a name="ResetAnyValidServiceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetAnyValidServiceToken"></a>

```go
func ResetAnyValidServiceToken()
```

##### `ResetAuthContext` <a name="ResetAuthContext" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetAuthContext"></a>

```go
func ResetAuthContext()
```

##### `ResetAuthMethod` <a name="ResetAuthMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetAuthMethod"></a>

```go
func ResetAuthMethod()
```

##### `ResetAzure` <a name="ResetAzure" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetAzure"></a>

```go
func ResetAzure()
```

##### `ResetCertificate` <a name="ResetCertificate" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetCertificate"></a>

```go
func ResetCertificate()
```

##### `ResetCommonName` <a name="ResetCommonName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetCommonName"></a>

```go
func ResetCommonName()
```

##### `ResetCommonNames` <a name="ResetCommonNames" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetCommonNames"></a>

```go
func ResetCommonNames()
```

##### `ResetDevicePosture` <a name="ResetDevicePosture" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetDevicePosture"></a>

```go
func ResetDevicePosture()
```

##### `ResetEmail` <a name="ResetEmail" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetEmail"></a>

```go
func ResetEmail()
```

##### `ResetEmailDomain` <a name="ResetEmailDomain" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetEmailDomain"></a>

```go
func ResetEmailDomain()
```

##### `ResetEmailList` <a name="ResetEmailList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetEmailList"></a>

```go
func ResetEmailList()
```

##### `ResetEveryone` <a name="ResetEveryone" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetEveryone"></a>

```go
func ResetEveryone()
```

##### `ResetExternalEvaluation` <a name="ResetExternalEvaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetExternalEvaluation"></a>

```go
func ResetExternalEvaluation()
```

##### `ResetGeo` <a name="ResetGeo" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetGeo"></a>

```go
func ResetGeo()
```

##### `ResetGithub` <a name="ResetGithub" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetGithub"></a>

```go
func ResetGithub()
```

##### `ResetGroup` <a name="ResetGroup" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetGroup"></a>

```go
func ResetGroup()
```

##### `ResetGsuite` <a name="ResetGsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetGsuite"></a>

```go
func ResetGsuite()
```

##### `ResetIp` <a name="ResetIp" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetIp"></a>

```go
func ResetIp()
```

##### `ResetIpList` <a name="ResetIpList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetIpList"></a>

```go
func ResetIpList()
```

##### `ResetLoginMethod` <a name="ResetLoginMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetLoginMethod"></a>

```go
func ResetLoginMethod()
```

##### `ResetOkta` <a name="ResetOkta" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetOkta"></a>

```go
func ResetOkta()
```

##### `ResetSaml` <a name="ResetSaml" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetSaml"></a>

```go
func ResetSaml()
```

##### `ResetServiceToken` <a name="ResetServiceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetServiceToken"></a>

```go
func ResetServiceToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.authContext">AuthContext</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList">ZeroTrustAccessGroupExcludeAuthContextList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.azure">Azure</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList">ZeroTrustAccessGroupExcludeAzureList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.externalEvaluation">ExternalEvaluation</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList">ZeroTrustAccessGroupExcludeExternalEvaluationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.github">Github</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList">ZeroTrustAccessGroupExcludeGithubList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.gsuite">Gsuite</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList">ZeroTrustAccessGroupExcludeGsuiteList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.okta">Okta</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList">ZeroTrustAccessGroupExcludeOktaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.saml">Saml</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList">ZeroTrustAccessGroupExcludeSamlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.anyValidServiceTokenInput">AnyValidServiceTokenInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.authContextInput">AuthContextInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.authMethodInput">AuthMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.azureInput">AzureInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.certificateInput">CertificateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.commonNameInput">CommonNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.commonNamesInput">CommonNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.devicePostureInput">DevicePostureInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.emailDomainInput">EmailDomainInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.emailInput">EmailInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.emailListInput">EmailListInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.everyoneInput">EveryoneInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.externalEvaluationInput">ExternalEvaluationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.geoInput">GeoInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.githubInput">GithubInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.groupInput">GroupInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.gsuiteInput">GsuiteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.ipInput">IpInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.ipListInput">IpListInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.loginMethodInput">LoginMethodInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.oktaInput">OktaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.samlInput">SamlInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.serviceTokenInput">ServiceTokenInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.anyValidServiceToken">AnyValidServiceToken</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.authMethod">AuthMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.certificate">Certificate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.commonName">CommonName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.commonNames">CommonNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.devicePosture">DevicePosture</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.email">Email</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.emailDomain">EmailDomain</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.emailList">EmailList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.everyone">Everyone</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.geo">Geo</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.group">Group</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.ip">Ip</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.ipList">IpList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.loginMethod">LoginMethod</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.serviceToken">ServiceToken</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthContext`<sup>Required</sup> <a name="AuthContext" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.authContext"></a>

```go
func AuthContext() ZeroTrustAccessGroupExcludeAuthContextList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList">ZeroTrustAccessGroupExcludeAuthContextList</a>

---

##### `Azure`<sup>Required</sup> <a name="Azure" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.azure"></a>

```go
func Azure() ZeroTrustAccessGroupExcludeAzureList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList">ZeroTrustAccessGroupExcludeAzureList</a>

---

##### `ExternalEvaluation`<sup>Required</sup> <a name="ExternalEvaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.externalEvaluation"></a>

```go
func ExternalEvaluation() ZeroTrustAccessGroupExcludeExternalEvaluationList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList">ZeroTrustAccessGroupExcludeExternalEvaluationList</a>

---

##### `Github`<sup>Required</sup> <a name="Github" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.github"></a>

```go
func Github() ZeroTrustAccessGroupExcludeGithubList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList">ZeroTrustAccessGroupExcludeGithubList</a>

---

##### `Gsuite`<sup>Required</sup> <a name="Gsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.gsuite"></a>

```go
func Gsuite() ZeroTrustAccessGroupExcludeGsuiteList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList">ZeroTrustAccessGroupExcludeGsuiteList</a>

---

##### `Okta`<sup>Required</sup> <a name="Okta" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.okta"></a>

```go
func Okta() ZeroTrustAccessGroupExcludeOktaList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList">ZeroTrustAccessGroupExcludeOktaList</a>

---

##### `Saml`<sup>Required</sup> <a name="Saml" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.saml"></a>

```go
func Saml() ZeroTrustAccessGroupExcludeSamlList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList">ZeroTrustAccessGroupExcludeSamlList</a>

---

##### `AnyValidServiceTokenInput`<sup>Optional</sup> <a name="AnyValidServiceTokenInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.anyValidServiceTokenInput"></a>

```go
func AnyValidServiceTokenInput() interface{}
```

- *Type:* interface{}

---

##### `AuthContextInput`<sup>Optional</sup> <a name="AuthContextInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.authContextInput"></a>

```go
func AuthContextInput() interface{}
```

- *Type:* interface{}

---

##### `AuthMethodInput`<sup>Optional</sup> <a name="AuthMethodInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.authMethodInput"></a>

```go
func AuthMethodInput() *string
```

- *Type:* *string

---

##### `AzureInput`<sup>Optional</sup> <a name="AzureInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.azureInput"></a>

```go
func AzureInput() interface{}
```

- *Type:* interface{}

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.certificateInput"></a>

```go
func CertificateInput() interface{}
```

- *Type:* interface{}

---

##### `CommonNameInput`<sup>Optional</sup> <a name="CommonNameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.commonNameInput"></a>

```go
func CommonNameInput() *string
```

- *Type:* *string

---

##### `CommonNamesInput`<sup>Optional</sup> <a name="CommonNamesInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.commonNamesInput"></a>

```go
func CommonNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DevicePostureInput`<sup>Optional</sup> <a name="DevicePostureInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.devicePostureInput"></a>

```go
func DevicePostureInput() *[]*string
```

- *Type:* *[]*string

---

##### `EmailDomainInput`<sup>Optional</sup> <a name="EmailDomainInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.emailDomainInput"></a>

```go
func EmailDomainInput() *[]*string
```

- *Type:* *[]*string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.emailInput"></a>

```go
func EmailInput() *[]*string
```

- *Type:* *[]*string

---

##### `EmailListInput`<sup>Optional</sup> <a name="EmailListInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.emailListInput"></a>

```go
func EmailListInput() *[]*string
```

- *Type:* *[]*string

---

##### `EveryoneInput`<sup>Optional</sup> <a name="EveryoneInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.everyoneInput"></a>

```go
func EveryoneInput() interface{}
```

- *Type:* interface{}

---

##### `ExternalEvaluationInput`<sup>Optional</sup> <a name="ExternalEvaluationInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.externalEvaluationInput"></a>

```go
func ExternalEvaluationInput() interface{}
```

- *Type:* interface{}

---

##### `GeoInput`<sup>Optional</sup> <a name="GeoInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.geoInput"></a>

```go
func GeoInput() *[]*string
```

- *Type:* *[]*string

---

##### `GithubInput`<sup>Optional</sup> <a name="GithubInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.githubInput"></a>

```go
func GithubInput() interface{}
```

- *Type:* interface{}

---

##### `GroupInput`<sup>Optional</sup> <a name="GroupInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.groupInput"></a>

```go
func GroupInput() *[]*string
```

- *Type:* *[]*string

---

##### `GsuiteInput`<sup>Optional</sup> <a name="GsuiteInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.gsuiteInput"></a>

```go
func GsuiteInput() interface{}
```

- *Type:* interface{}

---

##### `IpInput`<sup>Optional</sup> <a name="IpInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.ipInput"></a>

```go
func IpInput() *[]*string
```

- *Type:* *[]*string

---

##### `IpListInput`<sup>Optional</sup> <a name="IpListInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.ipListInput"></a>

```go
func IpListInput() *[]*string
```

- *Type:* *[]*string

---

##### `LoginMethodInput`<sup>Optional</sup> <a name="LoginMethodInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.loginMethodInput"></a>

```go
func LoginMethodInput() *[]*string
```

- *Type:* *[]*string

---

##### `OktaInput`<sup>Optional</sup> <a name="OktaInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.oktaInput"></a>

```go
func OktaInput() interface{}
```

- *Type:* interface{}

---

##### `SamlInput`<sup>Optional</sup> <a name="SamlInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.samlInput"></a>

```go
func SamlInput() interface{}
```

- *Type:* interface{}

---

##### `ServiceTokenInput`<sup>Optional</sup> <a name="ServiceTokenInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.serviceTokenInput"></a>

```go
func ServiceTokenInput() *[]*string
```

- *Type:* *[]*string

---

##### `AnyValidServiceToken`<sup>Required</sup> <a name="AnyValidServiceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.anyValidServiceToken"></a>

```go
func AnyValidServiceToken() interface{}
```

- *Type:* interface{}

---

##### `AuthMethod`<sup>Required</sup> <a name="AuthMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.authMethod"></a>

```go
func AuthMethod() *string
```

- *Type:* *string

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.certificate"></a>

```go
func Certificate() interface{}
```

- *Type:* interface{}

---

##### `CommonName`<sup>Required</sup> <a name="CommonName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.commonName"></a>

```go
func CommonName() *string
```

- *Type:* *string

---

##### `CommonNames`<sup>Required</sup> <a name="CommonNames" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.commonNames"></a>

```go
func CommonNames() *[]*string
```

- *Type:* *[]*string

---

##### `DevicePosture`<sup>Required</sup> <a name="DevicePosture" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.devicePosture"></a>

```go
func DevicePosture() *[]*string
```

- *Type:* *[]*string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.email"></a>

```go
func Email() *[]*string
```

- *Type:* *[]*string

---

##### `EmailDomain`<sup>Required</sup> <a name="EmailDomain" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.emailDomain"></a>

```go
func EmailDomain() *[]*string
```

- *Type:* *[]*string

---

##### `EmailList`<sup>Required</sup> <a name="EmailList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.emailList"></a>

```go
func EmailList() *[]*string
```

- *Type:* *[]*string

---

##### `Everyone`<sup>Required</sup> <a name="Everyone" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.everyone"></a>

```go
func Everyone() interface{}
```

- *Type:* interface{}

---

##### `Geo`<sup>Required</sup> <a name="Geo" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.geo"></a>

```go
func Geo() *[]*string
```

- *Type:* *[]*string

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.group"></a>

```go
func Group() *[]*string
```

- *Type:* *[]*string

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.ip"></a>

```go
func Ip() *[]*string
```

- *Type:* *[]*string

---

##### `IpList`<sup>Required</sup> <a name="IpList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.ipList"></a>

```go
func IpList() *[]*string
```

- *Type:* *[]*string

---

##### `LoginMethod`<sup>Required</sup> <a name="LoginMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.loginMethod"></a>

```go
func LoginMethod() *[]*string
```

- *Type:* *[]*string

---

##### `ServiceToken`<sup>Required</sup> <a name="ServiceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.serviceToken"></a>

```go
func ServiceToken() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustAccessGroupExcludeSamlList <a name="ZeroTrustAccessGroupExcludeSamlList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zerotrustaccessgroup"

zerotrustaccessgroup.NewZeroTrustAccessGroupExcludeSamlList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ZeroTrustAccessGroupExcludeSamlList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.get"></a>

```go
func Get(index *f64) ZeroTrustAccessGroupExcludeSamlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustAccessGroupExcludeSamlOutputReference <a name="ZeroTrustAccessGroupExcludeSamlOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zerotrustaccessgroup"

zerotrustaccessgroup.NewZeroTrustAccessGroupExcludeSamlOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ZeroTrustAccessGroupExcludeSamlOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.resetAttributeName">ResetAttributeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.resetAttributeValue">ResetAttributeValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.resetIdentityProviderId">ResetIdentityProviderId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAttributeName` <a name="ResetAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.resetAttributeName"></a>

```go
func ResetAttributeName()
```

##### `ResetAttributeValue` <a name="ResetAttributeValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.resetAttributeValue"></a>

```go
func ResetAttributeValue()
```

##### `ResetIdentityProviderId` <a name="ResetIdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.resetIdentityProviderId"></a>

```go
func ResetIdentityProviderId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.property.attributeNameInput">AttributeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.property.attributeValueInput">AttributeValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.property.identityProviderIdInput">IdentityProviderIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.property.attributeName">AttributeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.property.attributeValue">AttributeValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.property.identityProviderId">IdentityProviderId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttributeNameInput`<sup>Optional</sup> <a name="AttributeNameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.property.attributeNameInput"></a>

```go
func AttributeNameInput() *string
```

- *Type:* *string

---

##### `AttributeValueInput`<sup>Optional</sup> <a name="AttributeValueInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.property.attributeValueInput"></a>

```go
func AttributeValueInput() *string
```

- *Type:* *string

---

##### `IdentityProviderIdInput`<sup>Optional</sup> <a name="IdentityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.property.identityProviderIdInput"></a>

```go
func IdentityProviderIdInput() *string
```

- *Type:* *string

---

##### `AttributeName`<sup>Required</sup> <a name="AttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.property.attributeName"></a>

```go
func AttributeName() *string
```

- *Type:* *string

---

##### `AttributeValue`<sup>Required</sup> <a name="AttributeValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.property.attributeValue"></a>

```go
func AttributeValue() *string
```

- *Type:* *string

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.property.identityProviderId"></a>

```go
func IdentityProviderId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustAccessGroupIncludeAuthContextList <a name="ZeroTrustAccessGroupIncludeAuthContextList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zerotrustaccessgroup"

zerotrustaccessgroup.NewZeroTrustAccessGroupIncludeAuthContextList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ZeroTrustAccessGroupIncludeAuthContextList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.get"></a>

```go
func Get(index *f64) ZeroTrustAccessGroupIncludeAuthContextOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustAccessGroupIncludeAuthContextOutputReference <a name="ZeroTrustAccessGroupIncludeAuthContextOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zerotrustaccessgroup"

zerotrustaccessgroup.NewZeroTrustAccessGroupIncludeAuthContextOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ZeroTrustAccessGroupIncludeAuthContextOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.property.acIdInput">AcIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.property.identityProviderIdInput">IdentityProviderIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.property.acId">AcId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.property.identityProviderId">IdentityProviderId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AcIdInput`<sup>Optional</sup> <a name="AcIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.property.acIdInput"></a>

```go
func AcIdInput() *string
```

- *Type:* *string

---

##### `IdentityProviderIdInput`<sup>Optional</sup> <a name="IdentityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.property.identityProviderIdInput"></a>

```go
func IdentityProviderIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `AcId`<sup>Required</sup> <a name="AcId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.property.acId"></a>

```go
func AcId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.property.identityProviderId"></a>

```go
func IdentityProviderId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustAccessGroupIncludeAzureList <a name="ZeroTrustAccessGroupIncludeAzureList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zerotrustaccessgroup"

zerotrustaccessgroup.NewZeroTrustAccessGroupIncludeAzureList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ZeroTrustAccessGroupIncludeAzureList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.get"></a>

```go
func Get(index *f64) ZeroTrustAccessGroupIncludeAzureOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustAccessGroupIncludeAzureOutputReference <a name="ZeroTrustAccessGroupIncludeAzureOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zerotrustaccessgroup"

zerotrustaccessgroup.NewZeroTrustAccessGroupIncludeAzureOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ZeroTrustAccessGroupIncludeAzureOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.resetIdentityProviderId">ResetIdentityProviderId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetIdentityProviderId` <a name="ResetIdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.resetIdentityProviderId"></a>

```go
func ResetIdentityProviderId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.property.identityProviderIdInput">IdentityProviderIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.property.idInput">IdInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.property.id">Id</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.property.identityProviderId">IdentityProviderId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdentityProviderIdInput`<sup>Optional</sup> <a name="IdentityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.property.identityProviderIdInput"></a>

```go
func IdentityProviderIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.property.idInput"></a>

```go
func IdInput() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.property.id"></a>

```go
func Id() *[]*string
```

- *Type:* *[]*string

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.property.identityProviderId"></a>

```go
func IdentityProviderId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustAccessGroupIncludeExternalEvaluationList <a name="ZeroTrustAccessGroupIncludeExternalEvaluationList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zerotrustaccessgroup"

zerotrustaccessgroup.NewZeroTrustAccessGroupIncludeExternalEvaluationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ZeroTrustAccessGroupIncludeExternalEvaluationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.get"></a>

```go
func Get(index *f64) ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference <a name="ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zerotrustaccessgroup"

zerotrustaccessgroup.NewZeroTrustAccessGroupIncludeExternalEvaluationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.resetEvaluateUrl">ResetEvaluateUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.resetKeysUrl">ResetKeysUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEvaluateUrl` <a name="ResetEvaluateUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.resetEvaluateUrl"></a>

```go
func ResetEvaluateUrl()
```

##### `ResetKeysUrl` <a name="ResetKeysUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.resetKeysUrl"></a>

```go
func ResetKeysUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.property.evaluateUrlInput">EvaluateUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.property.keysUrlInput">KeysUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.property.evaluateUrl">EvaluateUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.property.keysUrl">KeysUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EvaluateUrlInput`<sup>Optional</sup> <a name="EvaluateUrlInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.property.evaluateUrlInput"></a>

```go
func EvaluateUrlInput() *string
```

- *Type:* *string

---

##### `KeysUrlInput`<sup>Optional</sup> <a name="KeysUrlInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.property.keysUrlInput"></a>

```go
func KeysUrlInput() *string
```

- *Type:* *string

---

##### `EvaluateUrl`<sup>Required</sup> <a name="EvaluateUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.property.evaluateUrl"></a>

```go
func EvaluateUrl() *string
```

- *Type:* *string

---

##### `KeysUrl`<sup>Required</sup> <a name="KeysUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.property.keysUrl"></a>

```go
func KeysUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustAccessGroupIncludeGithubList <a name="ZeroTrustAccessGroupIncludeGithubList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zerotrustaccessgroup"

zerotrustaccessgroup.NewZeroTrustAccessGroupIncludeGithubList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ZeroTrustAccessGroupIncludeGithubList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.get"></a>

```go
func Get(index *f64) ZeroTrustAccessGroupIncludeGithubOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustAccessGroupIncludeGithubOutputReference <a name="ZeroTrustAccessGroupIncludeGithubOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zerotrustaccessgroup"

zerotrustaccessgroup.NewZeroTrustAccessGroupIncludeGithubOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ZeroTrustAccessGroupIncludeGithubOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.resetIdentityProviderId">ResetIdentityProviderId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.resetTeams">ResetTeams</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityProviderId` <a name="ResetIdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.resetIdentityProviderId"></a>

```go
func ResetIdentityProviderId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetTeams` <a name="ResetTeams" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.resetTeams"></a>

```go
func ResetTeams()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.property.identityProviderIdInput">IdentityProviderIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.property.teamsInput">TeamsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.property.identityProviderId">IdentityProviderId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.property.teams">Teams</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdentityProviderIdInput`<sup>Optional</sup> <a name="IdentityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.property.identityProviderIdInput"></a>

```go
func IdentityProviderIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TeamsInput`<sup>Optional</sup> <a name="TeamsInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.property.teamsInput"></a>

```go
func TeamsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.property.identityProviderId"></a>

```go
func IdentityProviderId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Teams`<sup>Required</sup> <a name="Teams" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.property.teams"></a>

```go
func Teams() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustAccessGroupIncludeGsuiteList <a name="ZeroTrustAccessGroupIncludeGsuiteList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zerotrustaccessgroup"

zerotrustaccessgroup.NewZeroTrustAccessGroupIncludeGsuiteList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ZeroTrustAccessGroupIncludeGsuiteList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.get"></a>

```go
func Get(index *f64) ZeroTrustAccessGroupIncludeGsuiteOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustAccessGroupIncludeGsuiteOutputReference <a name="ZeroTrustAccessGroupIncludeGsuiteOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zerotrustaccessgroup"

zerotrustaccessgroup.NewZeroTrustAccessGroupIncludeGsuiteOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ZeroTrustAccessGroupIncludeGsuiteOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.resetIdentityProviderId">ResetIdentityProviderId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEmail` <a name="ResetEmail" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.resetEmail"></a>

```go
func ResetEmail()
```

##### `ResetIdentityProviderId` <a name="ResetIdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.resetIdentityProviderId"></a>

```go
func ResetIdentityProviderId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.property.emailInput">EmailInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.property.identityProviderIdInput">IdentityProviderIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.property.email">Email</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.property.identityProviderId">IdentityProviderId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.property.emailInput"></a>

```go
func EmailInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdentityProviderIdInput`<sup>Optional</sup> <a name="IdentityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.property.identityProviderIdInput"></a>

```go
func IdentityProviderIdInput() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.property.email"></a>

```go
func Email() *[]*string
```

- *Type:* *[]*string

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.property.identityProviderId"></a>

```go
func IdentityProviderId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustAccessGroupIncludeList <a name="ZeroTrustAccessGroupIncludeList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zerotrustaccessgroup"

zerotrustaccessgroup.NewZeroTrustAccessGroupIncludeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ZeroTrustAccessGroupIncludeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.get"></a>

```go
func Get(index *f64) ZeroTrustAccessGroupIncludeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustAccessGroupIncludeOktaList <a name="ZeroTrustAccessGroupIncludeOktaList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zerotrustaccessgroup"

zerotrustaccessgroup.NewZeroTrustAccessGroupIncludeOktaList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ZeroTrustAccessGroupIncludeOktaList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.get"></a>

```go
func Get(index *f64) ZeroTrustAccessGroupIncludeOktaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustAccessGroupIncludeOktaOutputReference <a name="ZeroTrustAccessGroupIncludeOktaOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zerotrustaccessgroup"

zerotrustaccessgroup.NewZeroTrustAccessGroupIncludeOktaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ZeroTrustAccessGroupIncludeOktaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.resetIdentityProviderId">ResetIdentityProviderId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityProviderId` <a name="ResetIdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.resetIdentityProviderId"></a>

```go
func ResetIdentityProviderId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.property.identityProviderIdInput">IdentityProviderIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.property.nameInput">NameInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.property.identityProviderId">IdentityProviderId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.property.name">Name</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdentityProviderIdInput`<sup>Optional</sup> <a name="IdentityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.property.identityProviderIdInput"></a>

```go
func IdentityProviderIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.property.nameInput"></a>

```go
func NameInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.property.identityProviderId"></a>

```go
func IdentityProviderId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.property.name"></a>

```go
func Name() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustAccessGroupIncludeOutputReference <a name="ZeroTrustAccessGroupIncludeOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zerotrustaccessgroup"

zerotrustaccessgroup.NewZeroTrustAccessGroupIncludeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ZeroTrustAccessGroupIncludeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.putAuthContext">PutAuthContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.putAzure">PutAzure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.putExternalEvaluation">PutExternalEvaluation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.putGithub">PutGithub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.putGsuite">PutGsuite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.putOkta">PutOkta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.putSaml">PutSaml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetAnyValidServiceToken">ResetAnyValidServiceToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetAuthContext">ResetAuthContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetAuthMethod">ResetAuthMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetAzure">ResetAzure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetCertificate">ResetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetCommonName">ResetCommonName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetCommonNames">ResetCommonNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetDevicePosture">ResetDevicePosture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetEmailDomain">ResetEmailDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetEmailList">ResetEmailList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetEveryone">ResetEveryone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetExternalEvaluation">ResetExternalEvaluation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetGeo">ResetGeo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetGithub">ResetGithub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetGroup">ResetGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetGsuite">ResetGsuite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetIp">ResetIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetIpList">ResetIpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetLoginMethod">ResetLoginMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetOkta">ResetOkta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetSaml">ResetSaml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetServiceToken">ResetServiceToken</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthContext` <a name="PutAuthContext" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.putAuthContext"></a>

```go
func PutAuthContext(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.putAuthContext.parameter.value"></a>

- *Type:* interface{}

---

##### `PutAzure` <a name="PutAzure" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.putAzure"></a>

```go
func PutAzure(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.putAzure.parameter.value"></a>

- *Type:* interface{}

---

##### `PutExternalEvaluation` <a name="PutExternalEvaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.putExternalEvaluation"></a>

```go
func PutExternalEvaluation(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.putExternalEvaluation.parameter.value"></a>

- *Type:* interface{}

---

##### `PutGithub` <a name="PutGithub" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.putGithub"></a>

```go
func PutGithub(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.putGithub.parameter.value"></a>

- *Type:* interface{}

---

##### `PutGsuite` <a name="PutGsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.putGsuite"></a>

```go
func PutGsuite(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.putGsuite.parameter.value"></a>

- *Type:* interface{}

---

##### `PutOkta` <a name="PutOkta" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.putOkta"></a>

```go
func PutOkta(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.putOkta.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSaml` <a name="PutSaml" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.putSaml"></a>

```go
func PutSaml(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.putSaml.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAnyValidServiceToken` <a name="ResetAnyValidServiceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetAnyValidServiceToken"></a>

```go
func ResetAnyValidServiceToken()
```

##### `ResetAuthContext` <a name="ResetAuthContext" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetAuthContext"></a>

```go
func ResetAuthContext()
```

##### `ResetAuthMethod` <a name="ResetAuthMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetAuthMethod"></a>

```go
func ResetAuthMethod()
```

##### `ResetAzure` <a name="ResetAzure" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetAzure"></a>

```go
func ResetAzure()
```

##### `ResetCertificate` <a name="ResetCertificate" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetCertificate"></a>

```go
func ResetCertificate()
```

##### `ResetCommonName` <a name="ResetCommonName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetCommonName"></a>

```go
func ResetCommonName()
```

##### `ResetCommonNames` <a name="ResetCommonNames" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetCommonNames"></a>

```go
func ResetCommonNames()
```

##### `ResetDevicePosture` <a name="ResetDevicePosture" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetDevicePosture"></a>

```go
func ResetDevicePosture()
```

##### `ResetEmail` <a name="ResetEmail" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetEmail"></a>

```go
func ResetEmail()
```

##### `ResetEmailDomain` <a name="ResetEmailDomain" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetEmailDomain"></a>

```go
func ResetEmailDomain()
```

##### `ResetEmailList` <a name="ResetEmailList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetEmailList"></a>

```go
func ResetEmailList()
```

##### `ResetEveryone` <a name="ResetEveryone" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetEveryone"></a>

```go
func ResetEveryone()
```

##### `ResetExternalEvaluation` <a name="ResetExternalEvaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetExternalEvaluation"></a>

```go
func ResetExternalEvaluation()
```

##### `ResetGeo` <a name="ResetGeo" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetGeo"></a>

```go
func ResetGeo()
```

##### `ResetGithub` <a name="ResetGithub" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetGithub"></a>

```go
func ResetGithub()
```

##### `ResetGroup` <a name="ResetGroup" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetGroup"></a>

```go
func ResetGroup()
```

##### `ResetGsuite` <a name="ResetGsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetGsuite"></a>

```go
func ResetGsuite()
```

##### `ResetIp` <a name="ResetIp" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetIp"></a>

```go
func ResetIp()
```

##### `ResetIpList` <a name="ResetIpList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetIpList"></a>

```go
func ResetIpList()
```

##### `ResetLoginMethod` <a name="ResetLoginMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetLoginMethod"></a>

```go
func ResetLoginMethod()
```

##### `ResetOkta` <a name="ResetOkta" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetOkta"></a>

```go
func ResetOkta()
```

##### `ResetSaml` <a name="ResetSaml" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetSaml"></a>

```go
func ResetSaml()
```

##### `ResetServiceToken` <a name="ResetServiceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetServiceToken"></a>

```go
func ResetServiceToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.authContext">AuthContext</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList">ZeroTrustAccessGroupIncludeAuthContextList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.azure">Azure</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList">ZeroTrustAccessGroupIncludeAzureList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.externalEvaluation">ExternalEvaluation</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList">ZeroTrustAccessGroupIncludeExternalEvaluationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.github">Github</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList">ZeroTrustAccessGroupIncludeGithubList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.gsuite">Gsuite</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList">ZeroTrustAccessGroupIncludeGsuiteList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.okta">Okta</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList">ZeroTrustAccessGroupIncludeOktaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.saml">Saml</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList">ZeroTrustAccessGroupIncludeSamlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.anyValidServiceTokenInput">AnyValidServiceTokenInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.authContextInput">AuthContextInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.authMethodInput">AuthMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.azureInput">AzureInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.certificateInput">CertificateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.commonNameInput">CommonNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.commonNamesInput">CommonNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.devicePostureInput">DevicePostureInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.emailDomainInput">EmailDomainInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.emailInput">EmailInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.emailListInput">EmailListInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.everyoneInput">EveryoneInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.externalEvaluationInput">ExternalEvaluationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.geoInput">GeoInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.githubInput">GithubInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.groupInput">GroupInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.gsuiteInput">GsuiteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.ipInput">IpInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.ipListInput">IpListInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.loginMethodInput">LoginMethodInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.oktaInput">OktaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.samlInput">SamlInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.serviceTokenInput">ServiceTokenInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.anyValidServiceToken">AnyValidServiceToken</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.authMethod">AuthMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.certificate">Certificate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.commonName">CommonName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.commonNames">CommonNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.devicePosture">DevicePosture</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.email">Email</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.emailDomain">EmailDomain</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.emailList">EmailList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.everyone">Everyone</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.geo">Geo</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.group">Group</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.ip">Ip</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.ipList">IpList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.loginMethod">LoginMethod</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.serviceToken">ServiceToken</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthContext`<sup>Required</sup> <a name="AuthContext" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.authContext"></a>

```go
func AuthContext() ZeroTrustAccessGroupIncludeAuthContextList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList">ZeroTrustAccessGroupIncludeAuthContextList</a>

---

##### `Azure`<sup>Required</sup> <a name="Azure" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.azure"></a>

```go
func Azure() ZeroTrustAccessGroupIncludeAzureList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList">ZeroTrustAccessGroupIncludeAzureList</a>

---

##### `ExternalEvaluation`<sup>Required</sup> <a name="ExternalEvaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.externalEvaluation"></a>

```go
func ExternalEvaluation() ZeroTrustAccessGroupIncludeExternalEvaluationList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList">ZeroTrustAccessGroupIncludeExternalEvaluationList</a>

---

##### `Github`<sup>Required</sup> <a name="Github" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.github"></a>

```go
func Github() ZeroTrustAccessGroupIncludeGithubList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList">ZeroTrustAccessGroupIncludeGithubList</a>

---

##### `Gsuite`<sup>Required</sup> <a name="Gsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.gsuite"></a>

```go
func Gsuite() ZeroTrustAccessGroupIncludeGsuiteList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList">ZeroTrustAccessGroupIncludeGsuiteList</a>

---

##### `Okta`<sup>Required</sup> <a name="Okta" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.okta"></a>

```go
func Okta() ZeroTrustAccessGroupIncludeOktaList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList">ZeroTrustAccessGroupIncludeOktaList</a>

---

##### `Saml`<sup>Required</sup> <a name="Saml" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.saml"></a>

```go
func Saml() ZeroTrustAccessGroupIncludeSamlList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList">ZeroTrustAccessGroupIncludeSamlList</a>

---

##### `AnyValidServiceTokenInput`<sup>Optional</sup> <a name="AnyValidServiceTokenInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.anyValidServiceTokenInput"></a>

```go
func AnyValidServiceTokenInput() interface{}
```

- *Type:* interface{}

---

##### `AuthContextInput`<sup>Optional</sup> <a name="AuthContextInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.authContextInput"></a>

```go
func AuthContextInput() interface{}
```

- *Type:* interface{}

---

##### `AuthMethodInput`<sup>Optional</sup> <a name="AuthMethodInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.authMethodInput"></a>

```go
func AuthMethodInput() *string
```

- *Type:* *string

---

##### `AzureInput`<sup>Optional</sup> <a name="AzureInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.azureInput"></a>

```go
func AzureInput() interface{}
```

- *Type:* interface{}

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.certificateInput"></a>

```go
func CertificateInput() interface{}
```

- *Type:* interface{}

---

##### `CommonNameInput`<sup>Optional</sup> <a name="CommonNameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.commonNameInput"></a>

```go
func CommonNameInput() *string
```

- *Type:* *string

---

##### `CommonNamesInput`<sup>Optional</sup> <a name="CommonNamesInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.commonNamesInput"></a>

```go
func CommonNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DevicePostureInput`<sup>Optional</sup> <a name="DevicePostureInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.devicePostureInput"></a>

```go
func DevicePostureInput() *[]*string
```

- *Type:* *[]*string

---

##### `EmailDomainInput`<sup>Optional</sup> <a name="EmailDomainInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.emailDomainInput"></a>

```go
func EmailDomainInput() *[]*string
```

- *Type:* *[]*string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.emailInput"></a>

```go
func EmailInput() *[]*string
```

- *Type:* *[]*string

---

##### `EmailListInput`<sup>Optional</sup> <a name="EmailListInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.emailListInput"></a>

```go
func EmailListInput() *[]*string
```

- *Type:* *[]*string

---

##### `EveryoneInput`<sup>Optional</sup> <a name="EveryoneInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.everyoneInput"></a>

```go
func EveryoneInput() interface{}
```

- *Type:* interface{}

---

##### `ExternalEvaluationInput`<sup>Optional</sup> <a name="ExternalEvaluationInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.externalEvaluationInput"></a>

```go
func ExternalEvaluationInput() interface{}
```

- *Type:* interface{}

---

##### `GeoInput`<sup>Optional</sup> <a name="GeoInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.geoInput"></a>

```go
func GeoInput() *[]*string
```

- *Type:* *[]*string

---

##### `GithubInput`<sup>Optional</sup> <a name="GithubInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.githubInput"></a>

```go
func GithubInput() interface{}
```

- *Type:* interface{}

---

##### `GroupInput`<sup>Optional</sup> <a name="GroupInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.groupInput"></a>

```go
func GroupInput() *[]*string
```

- *Type:* *[]*string

---

##### `GsuiteInput`<sup>Optional</sup> <a name="GsuiteInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.gsuiteInput"></a>

```go
func GsuiteInput() interface{}
```

- *Type:* interface{}

---

##### `IpInput`<sup>Optional</sup> <a name="IpInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.ipInput"></a>

```go
func IpInput() *[]*string
```

- *Type:* *[]*string

---

##### `IpListInput`<sup>Optional</sup> <a name="IpListInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.ipListInput"></a>

```go
func IpListInput() *[]*string
```

- *Type:* *[]*string

---

##### `LoginMethodInput`<sup>Optional</sup> <a name="LoginMethodInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.loginMethodInput"></a>

```go
func LoginMethodInput() *[]*string
```

- *Type:* *[]*string

---

##### `OktaInput`<sup>Optional</sup> <a name="OktaInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.oktaInput"></a>

```go
func OktaInput() interface{}
```

- *Type:* interface{}

---

##### `SamlInput`<sup>Optional</sup> <a name="SamlInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.samlInput"></a>

```go
func SamlInput() interface{}
```

- *Type:* interface{}

---

##### `ServiceTokenInput`<sup>Optional</sup> <a name="ServiceTokenInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.serviceTokenInput"></a>

```go
func ServiceTokenInput() *[]*string
```

- *Type:* *[]*string

---

##### `AnyValidServiceToken`<sup>Required</sup> <a name="AnyValidServiceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.anyValidServiceToken"></a>

```go
func AnyValidServiceToken() interface{}
```

- *Type:* interface{}

---

##### `AuthMethod`<sup>Required</sup> <a name="AuthMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.authMethod"></a>

```go
func AuthMethod() *string
```

- *Type:* *string

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.certificate"></a>

```go
func Certificate() interface{}
```

- *Type:* interface{}

---

##### `CommonName`<sup>Required</sup> <a name="CommonName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.commonName"></a>

```go
func CommonName() *string
```

- *Type:* *string

---

##### `CommonNames`<sup>Required</sup> <a name="CommonNames" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.commonNames"></a>

```go
func CommonNames() *[]*string
```

- *Type:* *[]*string

---

##### `DevicePosture`<sup>Required</sup> <a name="DevicePosture" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.devicePosture"></a>

```go
func DevicePosture() *[]*string
```

- *Type:* *[]*string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.email"></a>

```go
func Email() *[]*string
```

- *Type:* *[]*string

---

##### `EmailDomain`<sup>Required</sup> <a name="EmailDomain" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.emailDomain"></a>

```go
func EmailDomain() *[]*string
```

- *Type:* *[]*string

---

##### `EmailList`<sup>Required</sup> <a name="EmailList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.emailList"></a>

```go
func EmailList() *[]*string
```

- *Type:* *[]*string

---

##### `Everyone`<sup>Required</sup> <a name="Everyone" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.everyone"></a>

```go
func Everyone() interface{}
```

- *Type:* interface{}

---

##### `Geo`<sup>Required</sup> <a name="Geo" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.geo"></a>

```go
func Geo() *[]*string
```

- *Type:* *[]*string

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.group"></a>

```go
func Group() *[]*string
```

- *Type:* *[]*string

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.ip"></a>

```go
func Ip() *[]*string
```

- *Type:* *[]*string

---

##### `IpList`<sup>Required</sup> <a name="IpList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.ipList"></a>

```go
func IpList() *[]*string
```

- *Type:* *[]*string

---

##### `LoginMethod`<sup>Required</sup> <a name="LoginMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.loginMethod"></a>

```go
func LoginMethod() *[]*string
```

- *Type:* *[]*string

---

##### `ServiceToken`<sup>Required</sup> <a name="ServiceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.serviceToken"></a>

```go
func ServiceToken() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustAccessGroupIncludeSamlList <a name="ZeroTrustAccessGroupIncludeSamlList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zerotrustaccessgroup"

zerotrustaccessgroup.NewZeroTrustAccessGroupIncludeSamlList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ZeroTrustAccessGroupIncludeSamlList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.get"></a>

```go
func Get(index *f64) ZeroTrustAccessGroupIncludeSamlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustAccessGroupIncludeSamlOutputReference <a name="ZeroTrustAccessGroupIncludeSamlOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zerotrustaccessgroup"

zerotrustaccessgroup.NewZeroTrustAccessGroupIncludeSamlOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ZeroTrustAccessGroupIncludeSamlOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.resetAttributeName">ResetAttributeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.resetAttributeValue">ResetAttributeValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.resetIdentityProviderId">ResetIdentityProviderId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAttributeName` <a name="ResetAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.resetAttributeName"></a>

```go
func ResetAttributeName()
```

##### `ResetAttributeValue` <a name="ResetAttributeValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.resetAttributeValue"></a>

```go
func ResetAttributeValue()
```

##### `ResetIdentityProviderId` <a name="ResetIdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.resetIdentityProviderId"></a>

```go
func ResetIdentityProviderId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.property.attributeNameInput">AttributeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.property.attributeValueInput">AttributeValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.property.identityProviderIdInput">IdentityProviderIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.property.attributeName">AttributeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.property.attributeValue">AttributeValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.property.identityProviderId">IdentityProviderId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttributeNameInput`<sup>Optional</sup> <a name="AttributeNameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.property.attributeNameInput"></a>

```go
func AttributeNameInput() *string
```

- *Type:* *string

---

##### `AttributeValueInput`<sup>Optional</sup> <a name="AttributeValueInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.property.attributeValueInput"></a>

```go
func AttributeValueInput() *string
```

- *Type:* *string

---

##### `IdentityProviderIdInput`<sup>Optional</sup> <a name="IdentityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.property.identityProviderIdInput"></a>

```go
func IdentityProviderIdInput() *string
```

- *Type:* *string

---

##### `AttributeName`<sup>Required</sup> <a name="AttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.property.attributeName"></a>

```go
func AttributeName() *string
```

- *Type:* *string

---

##### `AttributeValue`<sup>Required</sup> <a name="AttributeValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.property.attributeValue"></a>

```go
func AttributeValue() *string
```

- *Type:* *string

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.property.identityProviderId"></a>

```go
func IdentityProviderId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustAccessGroupRequireAuthContextList <a name="ZeroTrustAccessGroupRequireAuthContextList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zerotrustaccessgroup"

zerotrustaccessgroup.NewZeroTrustAccessGroupRequireAuthContextList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ZeroTrustAccessGroupRequireAuthContextList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.get"></a>

```go
func Get(index *f64) ZeroTrustAccessGroupRequireAuthContextOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustAccessGroupRequireAuthContextOutputReference <a name="ZeroTrustAccessGroupRequireAuthContextOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zerotrustaccessgroup"

zerotrustaccessgroup.NewZeroTrustAccessGroupRequireAuthContextOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ZeroTrustAccessGroupRequireAuthContextOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.property.acIdInput">AcIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.property.identityProviderIdInput">IdentityProviderIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.property.acId">AcId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.property.identityProviderId">IdentityProviderId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AcIdInput`<sup>Optional</sup> <a name="AcIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.property.acIdInput"></a>

```go
func AcIdInput() *string
```

- *Type:* *string

---

##### `IdentityProviderIdInput`<sup>Optional</sup> <a name="IdentityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.property.identityProviderIdInput"></a>

```go
func IdentityProviderIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `AcId`<sup>Required</sup> <a name="AcId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.property.acId"></a>

```go
func AcId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.property.identityProviderId"></a>

```go
func IdentityProviderId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustAccessGroupRequireAzureList <a name="ZeroTrustAccessGroupRequireAzureList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zerotrustaccessgroup"

zerotrustaccessgroup.NewZeroTrustAccessGroupRequireAzureList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ZeroTrustAccessGroupRequireAzureList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.get"></a>

```go
func Get(index *f64) ZeroTrustAccessGroupRequireAzureOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustAccessGroupRequireAzureOutputReference <a name="ZeroTrustAccessGroupRequireAzureOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zerotrustaccessgroup"

zerotrustaccessgroup.NewZeroTrustAccessGroupRequireAzureOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ZeroTrustAccessGroupRequireAzureOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.resetIdentityProviderId">ResetIdentityProviderId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetIdentityProviderId` <a name="ResetIdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.resetIdentityProviderId"></a>

```go
func ResetIdentityProviderId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.property.identityProviderIdInput">IdentityProviderIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.property.idInput">IdInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.property.id">Id</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.property.identityProviderId">IdentityProviderId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdentityProviderIdInput`<sup>Optional</sup> <a name="IdentityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.property.identityProviderIdInput"></a>

```go
func IdentityProviderIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.property.idInput"></a>

```go
func IdInput() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.property.id"></a>

```go
func Id() *[]*string
```

- *Type:* *[]*string

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.property.identityProviderId"></a>

```go
func IdentityProviderId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustAccessGroupRequireExternalEvaluationList <a name="ZeroTrustAccessGroupRequireExternalEvaluationList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zerotrustaccessgroup"

zerotrustaccessgroup.NewZeroTrustAccessGroupRequireExternalEvaluationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ZeroTrustAccessGroupRequireExternalEvaluationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.get"></a>

```go
func Get(index *f64) ZeroTrustAccessGroupRequireExternalEvaluationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustAccessGroupRequireExternalEvaluationOutputReference <a name="ZeroTrustAccessGroupRequireExternalEvaluationOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zerotrustaccessgroup"

zerotrustaccessgroup.NewZeroTrustAccessGroupRequireExternalEvaluationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ZeroTrustAccessGroupRequireExternalEvaluationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.resetEvaluateUrl">ResetEvaluateUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.resetKeysUrl">ResetKeysUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEvaluateUrl` <a name="ResetEvaluateUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.resetEvaluateUrl"></a>

```go
func ResetEvaluateUrl()
```

##### `ResetKeysUrl` <a name="ResetKeysUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.resetKeysUrl"></a>

```go
func ResetKeysUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.property.evaluateUrlInput">EvaluateUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.property.keysUrlInput">KeysUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.property.evaluateUrl">EvaluateUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.property.keysUrl">KeysUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EvaluateUrlInput`<sup>Optional</sup> <a name="EvaluateUrlInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.property.evaluateUrlInput"></a>

```go
func EvaluateUrlInput() *string
```

- *Type:* *string

---

##### `KeysUrlInput`<sup>Optional</sup> <a name="KeysUrlInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.property.keysUrlInput"></a>

```go
func KeysUrlInput() *string
```

- *Type:* *string

---

##### `EvaluateUrl`<sup>Required</sup> <a name="EvaluateUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.property.evaluateUrl"></a>

```go
func EvaluateUrl() *string
```

- *Type:* *string

---

##### `KeysUrl`<sup>Required</sup> <a name="KeysUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.property.keysUrl"></a>

```go
func KeysUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustAccessGroupRequireGithubList <a name="ZeroTrustAccessGroupRequireGithubList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zerotrustaccessgroup"

zerotrustaccessgroup.NewZeroTrustAccessGroupRequireGithubList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ZeroTrustAccessGroupRequireGithubList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.get"></a>

```go
func Get(index *f64) ZeroTrustAccessGroupRequireGithubOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustAccessGroupRequireGithubOutputReference <a name="ZeroTrustAccessGroupRequireGithubOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zerotrustaccessgroup"

zerotrustaccessgroup.NewZeroTrustAccessGroupRequireGithubOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ZeroTrustAccessGroupRequireGithubOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.resetIdentityProviderId">ResetIdentityProviderId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.resetTeams">ResetTeams</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityProviderId` <a name="ResetIdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.resetIdentityProviderId"></a>

```go
func ResetIdentityProviderId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetTeams` <a name="ResetTeams" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.resetTeams"></a>

```go
func ResetTeams()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.property.identityProviderIdInput">IdentityProviderIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.property.teamsInput">TeamsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.property.identityProviderId">IdentityProviderId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.property.teams">Teams</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdentityProviderIdInput`<sup>Optional</sup> <a name="IdentityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.property.identityProviderIdInput"></a>

```go
func IdentityProviderIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TeamsInput`<sup>Optional</sup> <a name="TeamsInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.property.teamsInput"></a>

```go
func TeamsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.property.identityProviderId"></a>

```go
func IdentityProviderId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Teams`<sup>Required</sup> <a name="Teams" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.property.teams"></a>

```go
func Teams() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustAccessGroupRequireGsuiteList <a name="ZeroTrustAccessGroupRequireGsuiteList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zerotrustaccessgroup"

zerotrustaccessgroup.NewZeroTrustAccessGroupRequireGsuiteList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ZeroTrustAccessGroupRequireGsuiteList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.get"></a>

```go
func Get(index *f64) ZeroTrustAccessGroupRequireGsuiteOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustAccessGroupRequireGsuiteOutputReference <a name="ZeroTrustAccessGroupRequireGsuiteOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zerotrustaccessgroup"

zerotrustaccessgroup.NewZeroTrustAccessGroupRequireGsuiteOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ZeroTrustAccessGroupRequireGsuiteOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.resetIdentityProviderId">ResetIdentityProviderId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEmail` <a name="ResetEmail" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.resetEmail"></a>

```go
func ResetEmail()
```

##### `ResetIdentityProviderId` <a name="ResetIdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.resetIdentityProviderId"></a>

```go
func ResetIdentityProviderId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.property.emailInput">EmailInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.property.identityProviderIdInput">IdentityProviderIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.property.email">Email</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.property.identityProviderId">IdentityProviderId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.property.emailInput"></a>

```go
func EmailInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdentityProviderIdInput`<sup>Optional</sup> <a name="IdentityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.property.identityProviderIdInput"></a>

```go
func IdentityProviderIdInput() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.property.email"></a>

```go
func Email() *[]*string
```

- *Type:* *[]*string

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.property.identityProviderId"></a>

```go
func IdentityProviderId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustAccessGroupRequireList <a name="ZeroTrustAccessGroupRequireList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zerotrustaccessgroup"

zerotrustaccessgroup.NewZeroTrustAccessGroupRequireList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ZeroTrustAccessGroupRequireList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.get"></a>

```go
func Get(index *f64) ZeroTrustAccessGroupRequireOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustAccessGroupRequireOktaList <a name="ZeroTrustAccessGroupRequireOktaList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zerotrustaccessgroup"

zerotrustaccessgroup.NewZeroTrustAccessGroupRequireOktaList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ZeroTrustAccessGroupRequireOktaList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.get"></a>

```go
func Get(index *f64) ZeroTrustAccessGroupRequireOktaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustAccessGroupRequireOktaOutputReference <a name="ZeroTrustAccessGroupRequireOktaOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zerotrustaccessgroup"

zerotrustaccessgroup.NewZeroTrustAccessGroupRequireOktaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ZeroTrustAccessGroupRequireOktaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.resetIdentityProviderId">ResetIdentityProviderId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityProviderId` <a name="ResetIdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.resetIdentityProviderId"></a>

```go
func ResetIdentityProviderId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.property.identityProviderIdInput">IdentityProviderIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.property.nameInput">NameInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.property.identityProviderId">IdentityProviderId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.property.name">Name</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdentityProviderIdInput`<sup>Optional</sup> <a name="IdentityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.property.identityProviderIdInput"></a>

```go
func IdentityProviderIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.property.nameInput"></a>

```go
func NameInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.property.identityProviderId"></a>

```go
func IdentityProviderId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.property.name"></a>

```go
func Name() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustAccessGroupRequireOutputReference <a name="ZeroTrustAccessGroupRequireOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zerotrustaccessgroup"

zerotrustaccessgroup.NewZeroTrustAccessGroupRequireOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ZeroTrustAccessGroupRequireOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.putAuthContext">PutAuthContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.putAzure">PutAzure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.putExternalEvaluation">PutExternalEvaluation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.putGithub">PutGithub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.putGsuite">PutGsuite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.putOkta">PutOkta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.putSaml">PutSaml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetAnyValidServiceToken">ResetAnyValidServiceToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetAuthContext">ResetAuthContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetAuthMethod">ResetAuthMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetAzure">ResetAzure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetCertificate">ResetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetCommonName">ResetCommonName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetCommonNames">ResetCommonNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetDevicePosture">ResetDevicePosture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetEmailDomain">ResetEmailDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetEmailList">ResetEmailList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetEveryone">ResetEveryone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetExternalEvaluation">ResetExternalEvaluation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetGeo">ResetGeo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetGithub">ResetGithub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetGroup">ResetGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetGsuite">ResetGsuite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetIp">ResetIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetIpList">ResetIpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetLoginMethod">ResetLoginMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetOkta">ResetOkta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetSaml">ResetSaml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetServiceToken">ResetServiceToken</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthContext` <a name="PutAuthContext" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.putAuthContext"></a>

```go
func PutAuthContext(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.putAuthContext.parameter.value"></a>

- *Type:* interface{}

---

##### `PutAzure` <a name="PutAzure" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.putAzure"></a>

```go
func PutAzure(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.putAzure.parameter.value"></a>

- *Type:* interface{}

---

##### `PutExternalEvaluation` <a name="PutExternalEvaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.putExternalEvaluation"></a>

```go
func PutExternalEvaluation(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.putExternalEvaluation.parameter.value"></a>

- *Type:* interface{}

---

##### `PutGithub` <a name="PutGithub" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.putGithub"></a>

```go
func PutGithub(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.putGithub.parameter.value"></a>

- *Type:* interface{}

---

##### `PutGsuite` <a name="PutGsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.putGsuite"></a>

```go
func PutGsuite(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.putGsuite.parameter.value"></a>

- *Type:* interface{}

---

##### `PutOkta` <a name="PutOkta" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.putOkta"></a>

```go
func PutOkta(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.putOkta.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSaml` <a name="PutSaml" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.putSaml"></a>

```go
func PutSaml(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.putSaml.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAnyValidServiceToken` <a name="ResetAnyValidServiceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetAnyValidServiceToken"></a>

```go
func ResetAnyValidServiceToken()
```

##### `ResetAuthContext` <a name="ResetAuthContext" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetAuthContext"></a>

```go
func ResetAuthContext()
```

##### `ResetAuthMethod` <a name="ResetAuthMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetAuthMethod"></a>

```go
func ResetAuthMethod()
```

##### `ResetAzure` <a name="ResetAzure" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetAzure"></a>

```go
func ResetAzure()
```

##### `ResetCertificate` <a name="ResetCertificate" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetCertificate"></a>

```go
func ResetCertificate()
```

##### `ResetCommonName` <a name="ResetCommonName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetCommonName"></a>

```go
func ResetCommonName()
```

##### `ResetCommonNames` <a name="ResetCommonNames" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetCommonNames"></a>

```go
func ResetCommonNames()
```

##### `ResetDevicePosture` <a name="ResetDevicePosture" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetDevicePosture"></a>

```go
func ResetDevicePosture()
```

##### `ResetEmail` <a name="ResetEmail" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetEmail"></a>

```go
func ResetEmail()
```

##### `ResetEmailDomain` <a name="ResetEmailDomain" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetEmailDomain"></a>

```go
func ResetEmailDomain()
```

##### `ResetEmailList` <a name="ResetEmailList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetEmailList"></a>

```go
func ResetEmailList()
```

##### `ResetEveryone` <a name="ResetEveryone" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetEveryone"></a>

```go
func ResetEveryone()
```

##### `ResetExternalEvaluation` <a name="ResetExternalEvaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetExternalEvaluation"></a>

```go
func ResetExternalEvaluation()
```

##### `ResetGeo` <a name="ResetGeo" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetGeo"></a>

```go
func ResetGeo()
```

##### `ResetGithub` <a name="ResetGithub" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetGithub"></a>

```go
func ResetGithub()
```

##### `ResetGroup` <a name="ResetGroup" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetGroup"></a>

```go
func ResetGroup()
```

##### `ResetGsuite` <a name="ResetGsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetGsuite"></a>

```go
func ResetGsuite()
```

##### `ResetIp` <a name="ResetIp" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetIp"></a>

```go
func ResetIp()
```

##### `ResetIpList` <a name="ResetIpList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetIpList"></a>

```go
func ResetIpList()
```

##### `ResetLoginMethod` <a name="ResetLoginMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetLoginMethod"></a>

```go
func ResetLoginMethod()
```

##### `ResetOkta` <a name="ResetOkta" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetOkta"></a>

```go
func ResetOkta()
```

##### `ResetSaml` <a name="ResetSaml" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetSaml"></a>

```go
func ResetSaml()
```

##### `ResetServiceToken` <a name="ResetServiceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetServiceToken"></a>

```go
func ResetServiceToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.authContext">AuthContext</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList">ZeroTrustAccessGroupRequireAuthContextList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.azure">Azure</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList">ZeroTrustAccessGroupRequireAzureList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.externalEvaluation">ExternalEvaluation</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList">ZeroTrustAccessGroupRequireExternalEvaluationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.github">Github</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList">ZeroTrustAccessGroupRequireGithubList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.gsuite">Gsuite</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList">ZeroTrustAccessGroupRequireGsuiteList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.okta">Okta</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList">ZeroTrustAccessGroupRequireOktaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.saml">Saml</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList">ZeroTrustAccessGroupRequireSamlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.anyValidServiceTokenInput">AnyValidServiceTokenInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.authContextInput">AuthContextInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.authMethodInput">AuthMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.azureInput">AzureInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.certificateInput">CertificateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.commonNameInput">CommonNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.commonNamesInput">CommonNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.devicePostureInput">DevicePostureInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.emailDomainInput">EmailDomainInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.emailInput">EmailInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.emailListInput">EmailListInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.everyoneInput">EveryoneInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.externalEvaluationInput">ExternalEvaluationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.geoInput">GeoInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.githubInput">GithubInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.groupInput">GroupInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.gsuiteInput">GsuiteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.ipInput">IpInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.ipListInput">IpListInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.loginMethodInput">LoginMethodInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.oktaInput">OktaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.samlInput">SamlInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.serviceTokenInput">ServiceTokenInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.anyValidServiceToken">AnyValidServiceToken</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.authMethod">AuthMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.certificate">Certificate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.commonName">CommonName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.commonNames">CommonNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.devicePosture">DevicePosture</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.email">Email</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.emailDomain">EmailDomain</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.emailList">EmailList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.everyone">Everyone</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.geo">Geo</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.group">Group</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.ip">Ip</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.ipList">IpList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.loginMethod">LoginMethod</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.serviceToken">ServiceToken</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthContext`<sup>Required</sup> <a name="AuthContext" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.authContext"></a>

```go
func AuthContext() ZeroTrustAccessGroupRequireAuthContextList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList">ZeroTrustAccessGroupRequireAuthContextList</a>

---

##### `Azure`<sup>Required</sup> <a name="Azure" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.azure"></a>

```go
func Azure() ZeroTrustAccessGroupRequireAzureList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList">ZeroTrustAccessGroupRequireAzureList</a>

---

##### `ExternalEvaluation`<sup>Required</sup> <a name="ExternalEvaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.externalEvaluation"></a>

```go
func ExternalEvaluation() ZeroTrustAccessGroupRequireExternalEvaluationList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList">ZeroTrustAccessGroupRequireExternalEvaluationList</a>

---

##### `Github`<sup>Required</sup> <a name="Github" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.github"></a>

```go
func Github() ZeroTrustAccessGroupRequireGithubList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList">ZeroTrustAccessGroupRequireGithubList</a>

---

##### `Gsuite`<sup>Required</sup> <a name="Gsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.gsuite"></a>

```go
func Gsuite() ZeroTrustAccessGroupRequireGsuiteList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList">ZeroTrustAccessGroupRequireGsuiteList</a>

---

##### `Okta`<sup>Required</sup> <a name="Okta" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.okta"></a>

```go
func Okta() ZeroTrustAccessGroupRequireOktaList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList">ZeroTrustAccessGroupRequireOktaList</a>

---

##### `Saml`<sup>Required</sup> <a name="Saml" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.saml"></a>

```go
func Saml() ZeroTrustAccessGroupRequireSamlList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList">ZeroTrustAccessGroupRequireSamlList</a>

---

##### `AnyValidServiceTokenInput`<sup>Optional</sup> <a name="AnyValidServiceTokenInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.anyValidServiceTokenInput"></a>

```go
func AnyValidServiceTokenInput() interface{}
```

- *Type:* interface{}

---

##### `AuthContextInput`<sup>Optional</sup> <a name="AuthContextInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.authContextInput"></a>

```go
func AuthContextInput() interface{}
```

- *Type:* interface{}

---

##### `AuthMethodInput`<sup>Optional</sup> <a name="AuthMethodInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.authMethodInput"></a>

```go
func AuthMethodInput() *string
```

- *Type:* *string

---

##### `AzureInput`<sup>Optional</sup> <a name="AzureInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.azureInput"></a>

```go
func AzureInput() interface{}
```

- *Type:* interface{}

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.certificateInput"></a>

```go
func CertificateInput() interface{}
```

- *Type:* interface{}

---

##### `CommonNameInput`<sup>Optional</sup> <a name="CommonNameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.commonNameInput"></a>

```go
func CommonNameInput() *string
```

- *Type:* *string

---

##### `CommonNamesInput`<sup>Optional</sup> <a name="CommonNamesInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.commonNamesInput"></a>

```go
func CommonNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DevicePostureInput`<sup>Optional</sup> <a name="DevicePostureInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.devicePostureInput"></a>

```go
func DevicePostureInput() *[]*string
```

- *Type:* *[]*string

---

##### `EmailDomainInput`<sup>Optional</sup> <a name="EmailDomainInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.emailDomainInput"></a>

```go
func EmailDomainInput() *[]*string
```

- *Type:* *[]*string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.emailInput"></a>

```go
func EmailInput() *[]*string
```

- *Type:* *[]*string

---

##### `EmailListInput`<sup>Optional</sup> <a name="EmailListInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.emailListInput"></a>

```go
func EmailListInput() *[]*string
```

- *Type:* *[]*string

---

##### `EveryoneInput`<sup>Optional</sup> <a name="EveryoneInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.everyoneInput"></a>

```go
func EveryoneInput() interface{}
```

- *Type:* interface{}

---

##### `ExternalEvaluationInput`<sup>Optional</sup> <a name="ExternalEvaluationInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.externalEvaluationInput"></a>

```go
func ExternalEvaluationInput() interface{}
```

- *Type:* interface{}

---

##### `GeoInput`<sup>Optional</sup> <a name="GeoInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.geoInput"></a>

```go
func GeoInput() *[]*string
```

- *Type:* *[]*string

---

##### `GithubInput`<sup>Optional</sup> <a name="GithubInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.githubInput"></a>

```go
func GithubInput() interface{}
```

- *Type:* interface{}

---

##### `GroupInput`<sup>Optional</sup> <a name="GroupInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.groupInput"></a>

```go
func GroupInput() *[]*string
```

- *Type:* *[]*string

---

##### `GsuiteInput`<sup>Optional</sup> <a name="GsuiteInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.gsuiteInput"></a>

```go
func GsuiteInput() interface{}
```

- *Type:* interface{}

---

##### `IpInput`<sup>Optional</sup> <a name="IpInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.ipInput"></a>

```go
func IpInput() *[]*string
```

- *Type:* *[]*string

---

##### `IpListInput`<sup>Optional</sup> <a name="IpListInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.ipListInput"></a>

```go
func IpListInput() *[]*string
```

- *Type:* *[]*string

---

##### `LoginMethodInput`<sup>Optional</sup> <a name="LoginMethodInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.loginMethodInput"></a>

```go
func LoginMethodInput() *[]*string
```

- *Type:* *[]*string

---

##### `OktaInput`<sup>Optional</sup> <a name="OktaInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.oktaInput"></a>

```go
func OktaInput() interface{}
```

- *Type:* interface{}

---

##### `SamlInput`<sup>Optional</sup> <a name="SamlInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.samlInput"></a>

```go
func SamlInput() interface{}
```

- *Type:* interface{}

---

##### `ServiceTokenInput`<sup>Optional</sup> <a name="ServiceTokenInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.serviceTokenInput"></a>

```go
func ServiceTokenInput() *[]*string
```

- *Type:* *[]*string

---

##### `AnyValidServiceToken`<sup>Required</sup> <a name="AnyValidServiceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.anyValidServiceToken"></a>

```go
func AnyValidServiceToken() interface{}
```

- *Type:* interface{}

---

##### `AuthMethod`<sup>Required</sup> <a name="AuthMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.authMethod"></a>

```go
func AuthMethod() *string
```

- *Type:* *string

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.certificate"></a>

```go
func Certificate() interface{}
```

- *Type:* interface{}

---

##### `CommonName`<sup>Required</sup> <a name="CommonName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.commonName"></a>

```go
func CommonName() *string
```

- *Type:* *string

---

##### `CommonNames`<sup>Required</sup> <a name="CommonNames" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.commonNames"></a>

```go
func CommonNames() *[]*string
```

- *Type:* *[]*string

---

##### `DevicePosture`<sup>Required</sup> <a name="DevicePosture" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.devicePosture"></a>

```go
func DevicePosture() *[]*string
```

- *Type:* *[]*string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.email"></a>

```go
func Email() *[]*string
```

- *Type:* *[]*string

---

##### `EmailDomain`<sup>Required</sup> <a name="EmailDomain" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.emailDomain"></a>

```go
func EmailDomain() *[]*string
```

- *Type:* *[]*string

---

##### `EmailList`<sup>Required</sup> <a name="EmailList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.emailList"></a>

```go
func EmailList() *[]*string
```

- *Type:* *[]*string

---

##### `Everyone`<sup>Required</sup> <a name="Everyone" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.everyone"></a>

```go
func Everyone() interface{}
```

- *Type:* interface{}

---

##### `Geo`<sup>Required</sup> <a name="Geo" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.geo"></a>

```go
func Geo() *[]*string
```

- *Type:* *[]*string

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.group"></a>

```go
func Group() *[]*string
```

- *Type:* *[]*string

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.ip"></a>

```go
func Ip() *[]*string
```

- *Type:* *[]*string

---

##### `IpList`<sup>Required</sup> <a name="IpList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.ipList"></a>

```go
func IpList() *[]*string
```

- *Type:* *[]*string

---

##### `LoginMethod`<sup>Required</sup> <a name="LoginMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.loginMethod"></a>

```go
func LoginMethod() *[]*string
```

- *Type:* *[]*string

---

##### `ServiceToken`<sup>Required</sup> <a name="ServiceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.serviceToken"></a>

```go
func ServiceToken() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustAccessGroupRequireSamlList <a name="ZeroTrustAccessGroupRequireSamlList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zerotrustaccessgroup"

zerotrustaccessgroup.NewZeroTrustAccessGroupRequireSamlList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ZeroTrustAccessGroupRequireSamlList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.get"></a>

```go
func Get(index *f64) ZeroTrustAccessGroupRequireSamlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustAccessGroupRequireSamlOutputReference <a name="ZeroTrustAccessGroupRequireSamlOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zerotrustaccessgroup"

zerotrustaccessgroup.NewZeroTrustAccessGroupRequireSamlOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ZeroTrustAccessGroupRequireSamlOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.resetAttributeName">ResetAttributeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.resetAttributeValue">ResetAttributeValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.resetIdentityProviderId">ResetIdentityProviderId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAttributeName` <a name="ResetAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.resetAttributeName"></a>

```go
func ResetAttributeName()
```

##### `ResetAttributeValue` <a name="ResetAttributeValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.resetAttributeValue"></a>

```go
func ResetAttributeValue()
```

##### `ResetIdentityProviderId` <a name="ResetIdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.resetIdentityProviderId"></a>

```go
func ResetIdentityProviderId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.property.attributeNameInput">AttributeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.property.attributeValueInput">AttributeValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.property.identityProviderIdInput">IdentityProviderIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.property.attributeName">AttributeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.property.attributeValue">AttributeValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.property.identityProviderId">IdentityProviderId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttributeNameInput`<sup>Optional</sup> <a name="AttributeNameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.property.attributeNameInput"></a>

```go
func AttributeNameInput() *string
```

- *Type:* *string

---

##### `AttributeValueInput`<sup>Optional</sup> <a name="AttributeValueInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.property.attributeValueInput"></a>

```go
func AttributeValueInput() *string
```

- *Type:* *string

---

##### `IdentityProviderIdInput`<sup>Optional</sup> <a name="IdentityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.property.identityProviderIdInput"></a>

```go
func IdentityProviderIdInput() *string
```

- *Type:* *string

---

##### `AttributeName`<sup>Required</sup> <a name="AttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.property.attributeName"></a>

```go
func AttributeName() *string
```

- *Type:* *string

---

##### `AttributeValue`<sup>Required</sup> <a name="AttributeValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.property.attributeValue"></a>

```go
func AttributeValue() *string
```

- *Type:* *string

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.property.identityProviderId"></a>

```go
func IdentityProviderId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



