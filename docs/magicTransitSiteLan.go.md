# `magicTransitSiteLan` Submodule <a name="`magicTransitSiteLan` Submodule" id="@cdktf/provider-cloudflare.magicTransitSiteLan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MagicTransitSiteLan <a name="MagicTransitSiteLan" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/magic_transit_site_lan cloudflare_magic_transit_site_lan}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/magictransitsitelan"

magictransitsitelan.NewMagicTransitSiteLan(scope Construct, id *string, config MagicTransitSiteLanConfig) MagicTransitSiteLan
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig">MagicTransitSiteLanConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig">MagicTransitSiteLanConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.putNat">PutNat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.putRoutedSubnets">PutRoutedSubnets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.putStaticAddressing">PutStaticAddressing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.resetHaLink">ResetHaLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.resetNat">ResetNat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.resetRoutedSubnets">ResetRoutedSubnets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.resetStaticAddressing">ResetStaticAddressing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.resetVlanTag">ResetVlanTag</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutNat` <a name="PutNat" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.putNat"></a>

```go
func PutNat(value MagicTransitSiteLanNat)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.putNat.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNat">MagicTransitSiteLanNat</a>

---

##### `PutRoutedSubnets` <a name="PutRoutedSubnets" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.putRoutedSubnets"></a>

```go
func PutRoutedSubnets(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.putRoutedSubnets.parameter.value"></a>

- *Type:* interface{}

---

##### `PutStaticAddressing` <a name="PutStaticAddressing" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.putStaticAddressing"></a>

```go
func PutStaticAddressing(value MagicTransitSiteLanStaticAddressing)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.putStaticAddressing.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressing">MagicTransitSiteLanStaticAddressing</a>

---

##### `ResetHaLink` <a name="ResetHaLink" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.resetHaLink"></a>

```go
func ResetHaLink()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.resetName"></a>

```go
func ResetName()
```

##### `ResetNat` <a name="ResetNat" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.resetNat"></a>

```go
func ResetNat()
```

##### `ResetRoutedSubnets` <a name="ResetRoutedSubnets" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.resetRoutedSubnets"></a>

```go
func ResetRoutedSubnets()
```

##### `ResetStaticAddressing` <a name="ResetStaticAddressing" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.resetStaticAddressing"></a>

```go
func ResetStaticAddressing()
```

##### `ResetVlanTag` <a name="ResetVlanTag" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.resetVlanTag"></a>

```go
func ResetVlanTag()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MagicTransitSiteLan resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/magictransitsitelan"

magictransitsitelan.MagicTransitSiteLan_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/magictransitsitelan"

magictransitsitelan.MagicTransitSiteLan_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/magictransitsitelan"

magictransitsitelan.MagicTransitSiteLan_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/magictransitsitelan"

magictransitsitelan.MagicTransitSiteLan_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a MagicTransitSiteLan resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MagicTransitSiteLan to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MagicTransitSiteLan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/magic_transit_site_lan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the MagicTransitSiteLan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.nat">Nat</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference">MagicTransitSiteLanNatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.routedSubnets">RoutedSubnets</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList">MagicTransitSiteLanRoutedSubnetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.staticAddressing">StaticAddressing</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference">MagicTransitSiteLanStaticAddressingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.haLinkInput">HaLinkInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.natInput">NatInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.physportInput">PhysportInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.routedSubnetsInput">RoutedSubnetsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.siteIdInput">SiteIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.staticAddressingInput">StaticAddressingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.vlanTagInput">VlanTagInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.haLink">HaLink</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.physport">Physport</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.siteId">SiteId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.vlanTag">VlanTag</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Nat`<sup>Required</sup> <a name="Nat" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.nat"></a>

```go
func Nat() MagicTransitSiteLanNatOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference">MagicTransitSiteLanNatOutputReference</a>

---

##### `RoutedSubnets`<sup>Required</sup> <a name="RoutedSubnets" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.routedSubnets"></a>

```go
func RoutedSubnets() MagicTransitSiteLanRoutedSubnetsList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList">MagicTransitSiteLanRoutedSubnetsList</a>

---

##### `StaticAddressing`<sup>Required</sup> <a name="StaticAddressing" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.staticAddressing"></a>

```go
func StaticAddressing() MagicTransitSiteLanStaticAddressingOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference">MagicTransitSiteLanStaticAddressingOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `HaLinkInput`<sup>Optional</sup> <a name="HaLinkInput" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.haLinkInput"></a>

```go
func HaLinkInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NatInput`<sup>Optional</sup> <a name="NatInput" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.natInput"></a>

```go
func NatInput() interface{}
```

- *Type:* interface{}

---

##### `PhysportInput`<sup>Optional</sup> <a name="PhysportInput" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.physportInput"></a>

```go
func PhysportInput() *f64
```

- *Type:* *f64

---

##### `RoutedSubnetsInput`<sup>Optional</sup> <a name="RoutedSubnetsInput" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.routedSubnetsInput"></a>

```go
func RoutedSubnetsInput() interface{}
```

- *Type:* interface{}

---

##### `SiteIdInput`<sup>Optional</sup> <a name="SiteIdInput" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.siteIdInput"></a>

```go
func SiteIdInput() *string
```

- *Type:* *string

---

##### `StaticAddressingInput`<sup>Optional</sup> <a name="StaticAddressingInput" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.staticAddressingInput"></a>

```go
func StaticAddressingInput() interface{}
```

- *Type:* interface{}

---

##### `VlanTagInput`<sup>Optional</sup> <a name="VlanTagInput" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.vlanTagInput"></a>

```go
func VlanTagInput() *f64
```

- *Type:* *f64

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `HaLink`<sup>Required</sup> <a name="HaLink" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.haLink"></a>

```go
func HaLink() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Physport`<sup>Required</sup> <a name="Physport" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.physport"></a>

```go
func Physport() *f64
```

- *Type:* *f64

---

##### `SiteId`<sup>Required</sup> <a name="SiteId" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.siteId"></a>

```go
func SiteId() *string
```

- *Type:* *string

---

##### `VlanTag`<sup>Required</sup> <a name="VlanTag" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.vlanTag"></a>

```go
func VlanTag() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MagicTransitSiteLanConfig <a name="MagicTransitSiteLanConfig" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/magictransitsitelan"

&magictransitsitelan.MagicTransitSiteLanConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	Physport: *f64,
	SiteId: *string,
	HaLink: interface{},
	Name: *string,
	Nat: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13.magicTransitSiteLan.MagicTransitSiteLanNat,
	RoutedSubnets: interface{},
	StaticAddressing: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13.magicTransitSiteLan.MagicTransitSiteLanStaticAddressing,
	VlanTag: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.physport">Physport</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/magic_transit_site_lan#physport MagicTransitSiteLan#physport}. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.siteId">SiteId</a></code> | <code>*string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.haLink">HaLink</a></code> | <code>interface{}</code> | mark true to use this LAN for HA probing. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/magic_transit_site_lan#name MagicTransitSiteLan#name}. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.nat">Nat</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNat">MagicTransitSiteLanNat</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/magic_transit_site_lan#nat MagicTransitSiteLan#nat}. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.routedSubnets">RoutedSubnets</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/magic_transit_site_lan#routed_subnets MagicTransitSiteLan#routed_subnets}. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.staticAddressing">StaticAddressing</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressing">MagicTransitSiteLanStaticAddressing</a></code> | If the site is not configured in high availability mode, this configuration is optional (if omitted, use DHCP). |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.vlanTag">VlanTag</a></code> | <code>*f64</code> | VLAN ID. Use zero for untagged. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/magic_transit_site_lan#account_id MagicTransitSiteLan#account_id}

---

##### `Physport`<sup>Required</sup> <a name="Physport" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.physport"></a>

```go
Physport *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/magic_transit_site_lan#physport MagicTransitSiteLan#physport}.

---

##### `SiteId`<sup>Required</sup> <a name="SiteId" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.siteId"></a>

```go
SiteId *string
```

- *Type:* *string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/magic_transit_site_lan#site_id MagicTransitSiteLan#site_id}

---

##### `HaLink`<sup>Optional</sup> <a name="HaLink" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.haLink"></a>

```go
HaLink interface{}
```

- *Type:* interface{}

mark true to use this LAN for HA probing.

only works for site with HA turned on. only one LAN can be set as the ha_link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/magic_transit_site_lan#ha_link MagicTransitSiteLan#ha_link}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/magic_transit_site_lan#name MagicTransitSiteLan#name}.

---

##### `Nat`<sup>Optional</sup> <a name="Nat" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.nat"></a>

```go
Nat MagicTransitSiteLanNat
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNat">MagicTransitSiteLanNat</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/magic_transit_site_lan#nat MagicTransitSiteLan#nat}.

---

##### `RoutedSubnets`<sup>Optional</sup> <a name="RoutedSubnets" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.routedSubnets"></a>

```go
RoutedSubnets interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/magic_transit_site_lan#routed_subnets MagicTransitSiteLan#routed_subnets}.

---

##### `StaticAddressing`<sup>Optional</sup> <a name="StaticAddressing" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.staticAddressing"></a>

```go
StaticAddressing MagicTransitSiteLanStaticAddressing
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressing">MagicTransitSiteLanStaticAddressing</a>

If the site is not configured in high availability mode, this configuration is optional (if omitted, use DHCP).

However, if in high availability mode, static_address is required along with secondary and virtual address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/magic_transit_site_lan#static_addressing MagicTransitSiteLan#static_addressing}

---

##### `VlanTag`<sup>Optional</sup> <a name="VlanTag" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.vlanTag"></a>

```go
VlanTag *f64
```

- *Type:* *f64

VLAN ID. Use zero for untagged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/magic_transit_site_lan#vlan_tag MagicTransitSiteLan#vlan_tag}

---

### MagicTransitSiteLanNat <a name="MagicTransitSiteLanNat" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNat"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNat.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/magictransitsitelan"

&magictransitsitelan.MagicTransitSiteLanNat {
	StaticPrefix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNat.property.staticPrefix">StaticPrefix</a></code> | <code>*string</code> | A valid CIDR notation representing an IP range. |

---

##### `StaticPrefix`<sup>Optional</sup> <a name="StaticPrefix" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNat.property.staticPrefix"></a>

```go
StaticPrefix *string
```

- *Type:* *string

A valid CIDR notation representing an IP range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/magic_transit_site_lan#static_prefix MagicTransitSiteLan#static_prefix}

---

### MagicTransitSiteLanRoutedSubnets <a name="MagicTransitSiteLanRoutedSubnets" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnets.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/magictransitsitelan"

&magictransitsitelan.MagicTransitSiteLanRoutedSubnets {
	NextHop: *string,
	Prefix: *string,
	Nat: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNat,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnets.property.nextHop">NextHop</a></code> | <code>*string</code> | A valid IPv4 address. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnets.property.prefix">Prefix</a></code> | <code>*string</code> | A valid CIDR notation representing an IP range. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnets.property.nat">Nat</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNat">MagicTransitSiteLanRoutedSubnetsNat</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/magic_transit_site_lan#nat MagicTransitSiteLan#nat}. |

---

##### `NextHop`<sup>Required</sup> <a name="NextHop" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnets.property.nextHop"></a>

```go
NextHop *string
```

- *Type:* *string

A valid IPv4 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/magic_transit_site_lan#next_hop MagicTransitSiteLan#next_hop}

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnets.property.prefix"></a>

```go
Prefix *string
```

- *Type:* *string

A valid CIDR notation representing an IP range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/magic_transit_site_lan#prefix MagicTransitSiteLan#prefix}

---

##### `Nat`<sup>Optional</sup> <a name="Nat" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnets.property.nat"></a>

```go
Nat MagicTransitSiteLanRoutedSubnetsNat
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNat">MagicTransitSiteLanRoutedSubnetsNat</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/magic_transit_site_lan#nat MagicTransitSiteLan#nat}.

---

### MagicTransitSiteLanRoutedSubnetsNat <a name="MagicTransitSiteLanRoutedSubnetsNat" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNat"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNat.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/magictransitsitelan"

&magictransitsitelan.MagicTransitSiteLanRoutedSubnetsNat {
	StaticPrefix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNat.property.staticPrefix">StaticPrefix</a></code> | <code>*string</code> | A valid CIDR notation representing an IP range. |

---

##### `StaticPrefix`<sup>Optional</sup> <a name="StaticPrefix" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNat.property.staticPrefix"></a>

```go
StaticPrefix *string
```

- *Type:* *string

A valid CIDR notation representing an IP range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/magic_transit_site_lan#static_prefix MagicTransitSiteLan#static_prefix}

---

### MagicTransitSiteLanStaticAddressing <a name="MagicTransitSiteLanStaticAddressing" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressing"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressing.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/magictransitsitelan"

&magictransitsitelan.MagicTransitSiteLanStaticAddressing {
	Address: *string,
	DhcpRelay: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelay,
	DhcpServer: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServer,
	SecondaryAddress: *string,
	VirtualAddress: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressing.property.address">Address</a></code> | <code>*string</code> | A valid CIDR notation representing an IP range. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressing.property.dhcpRelay">DhcpRelay</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelay">MagicTransitSiteLanStaticAddressingDhcpRelay</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/magic_transit_site_lan#dhcp_relay MagicTransitSiteLan#dhcp_relay}. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressing.property.dhcpServer">DhcpServer</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServer">MagicTransitSiteLanStaticAddressingDhcpServer</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/magic_transit_site_lan#dhcp_server MagicTransitSiteLan#dhcp_server}. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressing.property.secondaryAddress">SecondaryAddress</a></code> | <code>*string</code> | A valid CIDR notation representing an IP range. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressing.property.virtualAddress">VirtualAddress</a></code> | <code>*string</code> | A valid CIDR notation representing an IP range. |

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressing.property.address"></a>

```go
Address *string
```

- *Type:* *string

A valid CIDR notation representing an IP range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/magic_transit_site_lan#address MagicTransitSiteLan#address}

---

##### `DhcpRelay`<sup>Optional</sup> <a name="DhcpRelay" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressing.property.dhcpRelay"></a>

```go
DhcpRelay MagicTransitSiteLanStaticAddressingDhcpRelay
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelay">MagicTransitSiteLanStaticAddressingDhcpRelay</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/magic_transit_site_lan#dhcp_relay MagicTransitSiteLan#dhcp_relay}.

---

##### `DhcpServer`<sup>Optional</sup> <a name="DhcpServer" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressing.property.dhcpServer"></a>

```go
DhcpServer MagicTransitSiteLanStaticAddressingDhcpServer
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServer">MagicTransitSiteLanStaticAddressingDhcpServer</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/magic_transit_site_lan#dhcp_server MagicTransitSiteLan#dhcp_server}.

---

##### `SecondaryAddress`<sup>Optional</sup> <a name="SecondaryAddress" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressing.property.secondaryAddress"></a>

```go
SecondaryAddress *string
```

- *Type:* *string

A valid CIDR notation representing an IP range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/magic_transit_site_lan#secondary_address MagicTransitSiteLan#secondary_address}

---

##### `VirtualAddress`<sup>Optional</sup> <a name="VirtualAddress" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressing.property.virtualAddress"></a>

```go
VirtualAddress *string
```

- *Type:* *string

A valid CIDR notation representing an IP range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/magic_transit_site_lan#virtual_address MagicTransitSiteLan#virtual_address}

---

### MagicTransitSiteLanStaticAddressingDhcpRelay <a name="MagicTransitSiteLanStaticAddressingDhcpRelay" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelay"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelay.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/magictransitsitelan"

&magictransitsitelan.MagicTransitSiteLanStaticAddressingDhcpRelay {
	ServerAddresses: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelay.property.serverAddresses">ServerAddresses</a></code> | <code>*[]*string</code> | List of DHCP server IPs. |

---

##### `ServerAddresses`<sup>Optional</sup> <a name="ServerAddresses" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelay.property.serverAddresses"></a>

```go
ServerAddresses *[]*string
```

- *Type:* *[]*string

List of DHCP server IPs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/magic_transit_site_lan#server_addresses MagicTransitSiteLan#server_addresses}

---

### MagicTransitSiteLanStaticAddressingDhcpServer <a name="MagicTransitSiteLanStaticAddressingDhcpServer" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServer.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/magictransitsitelan"

&magictransitsitelan.MagicTransitSiteLanStaticAddressingDhcpServer {
	DhcpPoolEnd: *string,
	DhcpPoolStart: *string,
	DnsServer: *string,
	DnsServers: *[]*string,
	Reservations: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServer.property.dhcpPoolEnd">DhcpPoolEnd</a></code> | <code>*string</code> | A valid IPv4 address. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServer.property.dhcpPoolStart">DhcpPoolStart</a></code> | <code>*string</code> | A valid IPv4 address. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServer.property.dnsServer">DnsServer</a></code> | <code>*string</code> | A valid IPv4 address. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServer.property.dnsServers">DnsServers</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/magic_transit_site_lan#dns_servers MagicTransitSiteLan#dns_servers}. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServer.property.reservations">Reservations</a></code> | <code>*map[string]*string</code> | Mapping of MAC addresses to IP addresses. |

---

##### `DhcpPoolEnd`<sup>Optional</sup> <a name="DhcpPoolEnd" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServer.property.dhcpPoolEnd"></a>

```go
DhcpPoolEnd *string
```

- *Type:* *string

A valid IPv4 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/magic_transit_site_lan#dhcp_pool_end MagicTransitSiteLan#dhcp_pool_end}

---

##### `DhcpPoolStart`<sup>Optional</sup> <a name="DhcpPoolStart" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServer.property.dhcpPoolStart"></a>

```go
DhcpPoolStart *string
```

- *Type:* *string

A valid IPv4 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/magic_transit_site_lan#dhcp_pool_start MagicTransitSiteLan#dhcp_pool_start}

---

##### `DnsServer`<sup>Optional</sup> <a name="DnsServer" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServer.property.dnsServer"></a>

```go
DnsServer *string
```

- *Type:* *string

A valid IPv4 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/magic_transit_site_lan#dns_server MagicTransitSiteLan#dns_server}

---

##### `DnsServers`<sup>Optional</sup> <a name="DnsServers" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServer.property.dnsServers"></a>

```go
DnsServers *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/magic_transit_site_lan#dns_servers MagicTransitSiteLan#dns_servers}.

---

##### `Reservations`<sup>Optional</sup> <a name="Reservations" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServer.property.reservations"></a>

```go
Reservations *map[string]*string
```

- *Type:* *map[string]*string

Mapping of MAC addresses to IP addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/magic_transit_site_lan#reservations MagicTransitSiteLan#reservations}

---

## Classes <a name="Classes" id="Classes"></a>

### MagicTransitSiteLanNatOutputReference <a name="MagicTransitSiteLanNatOutputReference" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/magictransitsitelan"

magictransitsitelan.NewMagicTransitSiteLanNatOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MagicTransitSiteLanNatOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.resetStaticPrefix">ResetStaticPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStaticPrefix` <a name="ResetStaticPrefix" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.resetStaticPrefix"></a>

```go
func ResetStaticPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.property.staticPrefixInput">StaticPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.property.staticPrefix">StaticPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StaticPrefixInput`<sup>Optional</sup> <a name="StaticPrefixInput" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.property.staticPrefixInput"></a>

```go
func StaticPrefixInput() *string
```

- *Type:* *string

---

##### `StaticPrefix`<sup>Required</sup> <a name="StaticPrefix" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.property.staticPrefix"></a>

```go
func StaticPrefix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MagicTransitSiteLanRoutedSubnetsList <a name="MagicTransitSiteLanRoutedSubnetsList" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/magictransitsitelan"

magictransitsitelan.NewMagicTransitSiteLanRoutedSubnetsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MagicTransitSiteLanRoutedSubnetsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.get"></a>

```go
func Get(index *f64) MagicTransitSiteLanRoutedSubnetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MagicTransitSiteLanRoutedSubnetsNatOutputReference <a name="MagicTransitSiteLanRoutedSubnetsNatOutputReference" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/magictransitsitelan"

magictransitsitelan.NewMagicTransitSiteLanRoutedSubnetsNatOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MagicTransitSiteLanRoutedSubnetsNatOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.resetStaticPrefix">ResetStaticPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStaticPrefix` <a name="ResetStaticPrefix" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.resetStaticPrefix"></a>

```go
func ResetStaticPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.property.staticPrefixInput">StaticPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.property.staticPrefix">StaticPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StaticPrefixInput`<sup>Optional</sup> <a name="StaticPrefixInput" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.property.staticPrefixInput"></a>

```go
func StaticPrefixInput() *string
```

- *Type:* *string

---

##### `StaticPrefix`<sup>Required</sup> <a name="StaticPrefix" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.property.staticPrefix"></a>

```go
func StaticPrefix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MagicTransitSiteLanRoutedSubnetsOutputReference <a name="MagicTransitSiteLanRoutedSubnetsOutputReference" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/magictransitsitelan"

magictransitsitelan.NewMagicTransitSiteLanRoutedSubnetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MagicTransitSiteLanRoutedSubnetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.putNat">PutNat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.resetNat">ResetNat</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNat` <a name="PutNat" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.putNat"></a>

```go
func PutNat(value MagicTransitSiteLanRoutedSubnetsNat)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.putNat.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNat">MagicTransitSiteLanRoutedSubnetsNat</a>

---

##### `ResetNat` <a name="ResetNat" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.resetNat"></a>

```go
func ResetNat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.property.nat">Nat</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference">MagicTransitSiteLanRoutedSubnetsNatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.property.natInput">NatInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.property.nextHopInput">NextHopInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.property.prefixInput">PrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.property.nextHop">NextHop</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Nat`<sup>Required</sup> <a name="Nat" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.property.nat"></a>

```go
func Nat() MagicTransitSiteLanRoutedSubnetsNatOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference">MagicTransitSiteLanRoutedSubnetsNatOutputReference</a>

---

##### `NatInput`<sup>Optional</sup> <a name="NatInput" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.property.natInput"></a>

```go
func NatInput() interface{}
```

- *Type:* interface{}

---

##### `NextHopInput`<sup>Optional</sup> <a name="NextHopInput" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.property.nextHopInput"></a>

```go
func NextHopInput() *string
```

- *Type:* *string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.property.prefixInput"></a>

```go
func PrefixInput() *string
```

- *Type:* *string

---

##### `NextHop`<sup>Required</sup> <a name="NextHop" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.property.nextHop"></a>

```go
func NextHop() *string
```

- *Type:* *string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference <a name="MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/magictransitsitelan"

magictransitsitelan.NewMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.resetServerAddresses">ResetServerAddresses</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetServerAddresses` <a name="ResetServerAddresses" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.resetServerAddresses"></a>

```go
func ResetServerAddresses()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.property.serverAddressesInput">ServerAddressesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.property.serverAddresses">ServerAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ServerAddressesInput`<sup>Optional</sup> <a name="ServerAddressesInput" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.property.serverAddressesInput"></a>

```go
func ServerAddressesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ServerAddresses`<sup>Required</sup> <a name="ServerAddresses" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.property.serverAddresses"></a>

```go
func ServerAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MagicTransitSiteLanStaticAddressingDhcpServerOutputReference <a name="MagicTransitSiteLanStaticAddressingDhcpServerOutputReference" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/magictransitsitelan"

magictransitsitelan.NewMagicTransitSiteLanStaticAddressingDhcpServerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MagicTransitSiteLanStaticAddressingDhcpServerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.resetDhcpPoolEnd">ResetDhcpPoolEnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.resetDhcpPoolStart">ResetDhcpPoolStart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.resetDnsServer">ResetDnsServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.resetDnsServers">ResetDnsServers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.resetReservations">ResetReservations</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDhcpPoolEnd` <a name="ResetDhcpPoolEnd" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.resetDhcpPoolEnd"></a>

```go
func ResetDhcpPoolEnd()
```

##### `ResetDhcpPoolStart` <a name="ResetDhcpPoolStart" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.resetDhcpPoolStart"></a>

```go
func ResetDhcpPoolStart()
```

##### `ResetDnsServer` <a name="ResetDnsServer" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.resetDnsServer"></a>

```go
func ResetDnsServer()
```

##### `ResetDnsServers` <a name="ResetDnsServers" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.resetDnsServers"></a>

```go
func ResetDnsServers()
```

##### `ResetReservations` <a name="ResetReservations" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.resetReservations"></a>

```go
func ResetReservations()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.dhcpPoolEndInput">DhcpPoolEndInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.dhcpPoolStartInput">DhcpPoolStartInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.dnsServerInput">DnsServerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.dnsServersInput">DnsServersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.reservationsInput">ReservationsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.dhcpPoolEnd">DhcpPoolEnd</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.dhcpPoolStart">DhcpPoolStart</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.dnsServer">DnsServer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.dnsServers">DnsServers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.reservations">Reservations</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DhcpPoolEndInput`<sup>Optional</sup> <a name="DhcpPoolEndInput" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.dhcpPoolEndInput"></a>

```go
func DhcpPoolEndInput() *string
```

- *Type:* *string

---

##### `DhcpPoolStartInput`<sup>Optional</sup> <a name="DhcpPoolStartInput" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.dhcpPoolStartInput"></a>

```go
func DhcpPoolStartInput() *string
```

- *Type:* *string

---

##### `DnsServerInput`<sup>Optional</sup> <a name="DnsServerInput" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.dnsServerInput"></a>

```go
func DnsServerInput() *string
```

- *Type:* *string

---

##### `DnsServersInput`<sup>Optional</sup> <a name="DnsServersInput" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.dnsServersInput"></a>

```go
func DnsServersInput() *[]*string
```

- *Type:* *[]*string

---

##### `ReservationsInput`<sup>Optional</sup> <a name="ReservationsInput" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.reservationsInput"></a>

```go
func ReservationsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DhcpPoolEnd`<sup>Required</sup> <a name="DhcpPoolEnd" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.dhcpPoolEnd"></a>

```go
func DhcpPoolEnd() *string
```

- *Type:* *string

---

##### `DhcpPoolStart`<sup>Required</sup> <a name="DhcpPoolStart" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.dhcpPoolStart"></a>

```go
func DhcpPoolStart() *string
```

- *Type:* *string

---

##### `DnsServer`<sup>Required</sup> <a name="DnsServer" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.dnsServer"></a>

```go
func DnsServer() *string
```

- *Type:* *string

---

##### `DnsServers`<sup>Required</sup> <a name="DnsServers" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.dnsServers"></a>

```go
func DnsServers() *[]*string
```

- *Type:* *[]*string

---

##### `Reservations`<sup>Required</sup> <a name="Reservations" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.reservations"></a>

```go
func Reservations() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MagicTransitSiteLanStaticAddressingOutputReference <a name="MagicTransitSiteLanStaticAddressingOutputReference" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/magictransitsitelan"

magictransitsitelan.NewMagicTransitSiteLanStaticAddressingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MagicTransitSiteLanStaticAddressingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.putDhcpRelay">PutDhcpRelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.putDhcpServer">PutDhcpServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.resetDhcpRelay">ResetDhcpRelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.resetDhcpServer">ResetDhcpServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.resetSecondaryAddress">ResetSecondaryAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.resetVirtualAddress">ResetVirtualAddress</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDhcpRelay` <a name="PutDhcpRelay" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.putDhcpRelay"></a>

```go
func PutDhcpRelay(value MagicTransitSiteLanStaticAddressingDhcpRelay)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.putDhcpRelay.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelay">MagicTransitSiteLanStaticAddressingDhcpRelay</a>

---

##### `PutDhcpServer` <a name="PutDhcpServer" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.putDhcpServer"></a>

```go
func PutDhcpServer(value MagicTransitSiteLanStaticAddressingDhcpServer)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.putDhcpServer.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServer">MagicTransitSiteLanStaticAddressingDhcpServer</a>

---

##### `ResetDhcpRelay` <a name="ResetDhcpRelay" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.resetDhcpRelay"></a>

```go
func ResetDhcpRelay()
```

##### `ResetDhcpServer` <a name="ResetDhcpServer" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.resetDhcpServer"></a>

```go
func ResetDhcpServer()
```

##### `ResetSecondaryAddress` <a name="ResetSecondaryAddress" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.resetSecondaryAddress"></a>

```go
func ResetSecondaryAddress()
```

##### `ResetVirtualAddress` <a name="ResetVirtualAddress" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.resetVirtualAddress"></a>

```go
func ResetVirtualAddress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.dhcpRelay">DhcpRelay</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference">MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.dhcpServer">DhcpServer</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference">MagicTransitSiteLanStaticAddressingDhcpServerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.addressInput">AddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.dhcpRelayInput">DhcpRelayInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.dhcpServerInput">DhcpServerInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.secondaryAddressInput">SecondaryAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.virtualAddressInput">VirtualAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.secondaryAddress">SecondaryAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.virtualAddress">VirtualAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DhcpRelay`<sup>Required</sup> <a name="DhcpRelay" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.dhcpRelay"></a>

```go
func DhcpRelay() MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference">MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference</a>

---

##### `DhcpServer`<sup>Required</sup> <a name="DhcpServer" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.dhcpServer"></a>

```go
func DhcpServer() MagicTransitSiteLanStaticAddressingDhcpServerOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference">MagicTransitSiteLanStaticAddressingDhcpServerOutputReference</a>

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.addressInput"></a>

```go
func AddressInput() *string
```

- *Type:* *string

---

##### `DhcpRelayInput`<sup>Optional</sup> <a name="DhcpRelayInput" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.dhcpRelayInput"></a>

```go
func DhcpRelayInput() interface{}
```

- *Type:* interface{}

---

##### `DhcpServerInput`<sup>Optional</sup> <a name="DhcpServerInput" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.dhcpServerInput"></a>

```go
func DhcpServerInput() interface{}
```

- *Type:* interface{}

---

##### `SecondaryAddressInput`<sup>Optional</sup> <a name="SecondaryAddressInput" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.secondaryAddressInput"></a>

```go
func SecondaryAddressInput() *string
```

- *Type:* *string

---

##### `VirtualAddressInput`<sup>Optional</sup> <a name="VirtualAddressInput" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.virtualAddressInput"></a>

```go
func VirtualAddressInput() *string
```

- *Type:* *string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `SecondaryAddress`<sup>Required</sup> <a name="SecondaryAddress" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.secondaryAddress"></a>

```go
func SecondaryAddress() *string
```

- *Type:* *string

---

##### `VirtualAddress`<sup>Required</sup> <a name="VirtualAddress" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.virtualAddress"></a>

```go
func VirtualAddress() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



