# `magicTransitSiteWan` Submodule <a name="`magicTransitSiteWan` Submodule" id="@cdktf/provider-cloudflare.magicTransitSiteWan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MagicTransitSiteWan <a name="MagicTransitSiteWan" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_transit_site_wan cloudflare_magic_transit_site_wan}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/magictransitsitewan"

magictransitsitewan.NewMagicTransitSiteWan(scope Construct, id *string, config MagicTransitSiteWanConfig) MagicTransitSiteWan
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig">MagicTransitSiteWanConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig">MagicTransitSiteWanConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.putStaticAddressing">PutStaticAddressing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.resetStaticAddressing">ResetStaticAddressing</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutStaticAddressing` <a name="PutStaticAddressing" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.putStaticAddressing"></a>

```go
func PutStaticAddressing(value MagicTransitSiteWanStaticAddressing)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.putStaticAddressing.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressing">MagicTransitSiteWanStaticAddressing</a>

---

##### `ResetName` <a name="ResetName" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.resetName"></a>

```go
func ResetName()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.resetPriority"></a>

```go
func ResetPriority()
```

##### `ResetStaticAddressing` <a name="ResetStaticAddressing" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.resetStaticAddressing"></a>

```go
func ResetStaticAddressing()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MagicTransitSiteWan resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/magictransitsitewan"

magictransitsitewan.MagicTransitSiteWan_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/magictransitsitewan"

magictransitsitewan.MagicTransitSiteWan_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/magictransitsitewan"

magictransitsitewan.MagicTransitSiteWan_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/magictransitsitewan"

magictransitsitewan.MagicTransitSiteWan_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a MagicTransitSiteWan resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MagicTransitSiteWan to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MagicTransitSiteWan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_transit_site_wan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the MagicTransitSiteWan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.healthCheckRate">HealthCheckRate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.staticAddressing">StaticAddressing</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference">MagicTransitSiteWanStaticAddressingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.physportInput">PhysportInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.siteIdInput">SiteIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.staticAddressingInput">StaticAddressingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.vlanTagInput">VlanTagInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.physport">Physport</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.siteId">SiteId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.vlanTag">VlanTag</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `HealthCheckRate`<sup>Required</sup> <a name="HealthCheckRate" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.healthCheckRate"></a>

```go
func HealthCheckRate() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `StaticAddressing`<sup>Required</sup> <a name="StaticAddressing" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.staticAddressing"></a>

```go
func StaticAddressing() MagicTransitSiteWanStaticAddressingOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference">MagicTransitSiteWanStaticAddressingOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PhysportInput`<sup>Optional</sup> <a name="PhysportInput" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.physportInput"></a>

```go
func PhysportInput() *f64
```

- *Type:* *f64

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `SiteIdInput`<sup>Optional</sup> <a name="SiteIdInput" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.siteIdInput"></a>

```go
func SiteIdInput() *string
```

- *Type:* *string

---

##### `StaticAddressingInput`<sup>Optional</sup> <a name="StaticAddressingInput" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.staticAddressingInput"></a>

```go
func StaticAddressingInput() interface{}
```

- *Type:* interface{}

---

##### `VlanTagInput`<sup>Optional</sup> <a name="VlanTagInput" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.vlanTagInput"></a>

```go
func VlanTagInput() *f64
```

- *Type:* *f64

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Physport`<sup>Required</sup> <a name="Physport" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.physport"></a>

```go
func Physport() *f64
```

- *Type:* *f64

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `SiteId`<sup>Required</sup> <a name="SiteId" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.siteId"></a>

```go
func SiteId() *string
```

- *Type:* *string

---

##### `VlanTag`<sup>Required</sup> <a name="VlanTag" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.vlanTag"></a>

```go
func VlanTag() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MagicTransitSiteWanConfig <a name="MagicTransitSiteWanConfig" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/magictransitsitewan"

&magictransitsitewan.MagicTransitSiteWanConfig {
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
	VlanTag: *f64,
	Name: *string,
	Priority: *f64,
	StaticAddressing: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressing,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.physport">Physport</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_transit_site_wan#physport MagicTransitSiteWan#physport}. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.siteId">SiteId</a></code> | <code>*string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.vlanTag">VlanTag</a></code> | <code>*f64</code> | VLAN port number. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_transit_site_wan#name MagicTransitSiteWan#name}. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.priority">Priority</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_transit_site_wan#priority MagicTransitSiteWan#priority}. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.staticAddressing">StaticAddressing</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressing">MagicTransitSiteWanStaticAddressing</a></code> | (optional) if omitted, use DHCP. Submit secondary_address when site is in high availability mode. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_transit_site_wan#account_id MagicTransitSiteWan#account_id}

---

##### `Physport`<sup>Required</sup> <a name="Physport" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.physport"></a>

```go
Physport *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_transit_site_wan#physport MagicTransitSiteWan#physport}.

---

##### `SiteId`<sup>Required</sup> <a name="SiteId" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.siteId"></a>

```go
SiteId *string
```

- *Type:* *string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_transit_site_wan#site_id MagicTransitSiteWan#site_id}

---

##### `VlanTag`<sup>Required</sup> <a name="VlanTag" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.vlanTag"></a>

```go
VlanTag *f64
```

- *Type:* *f64

VLAN port number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_transit_site_wan#vlan_tag MagicTransitSiteWan#vlan_tag}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_transit_site_wan#name MagicTransitSiteWan#name}.

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_transit_site_wan#priority MagicTransitSiteWan#priority}.

---

##### `StaticAddressing`<sup>Optional</sup> <a name="StaticAddressing" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.staticAddressing"></a>

```go
StaticAddressing MagicTransitSiteWanStaticAddressing
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressing">MagicTransitSiteWanStaticAddressing</a>

(optional) if omitted, use DHCP. Submit secondary_address when site is in high availability mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_transit_site_wan#static_addressing MagicTransitSiteWan#static_addressing}

---

### MagicTransitSiteWanStaticAddressing <a name="MagicTransitSiteWanStaticAddressing" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressing"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressing.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/magictransitsitewan"

&magictransitsitewan.MagicTransitSiteWanStaticAddressing {
	Address: *string,
	GatewayAddress: *string,
	SecondaryAddress: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressing.property.address">Address</a></code> | <code>*string</code> | A valid CIDR notation representing an IP range. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressing.property.gatewayAddress">GatewayAddress</a></code> | <code>*string</code> | A valid IPv4 address. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressing.property.secondaryAddress">SecondaryAddress</a></code> | <code>*string</code> | A valid CIDR notation representing an IP range. |

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressing.property.address"></a>

```go
Address *string
```

- *Type:* *string

A valid CIDR notation representing an IP range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_transit_site_wan#address MagicTransitSiteWan#address}

---

##### `GatewayAddress`<sup>Required</sup> <a name="GatewayAddress" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressing.property.gatewayAddress"></a>

```go
GatewayAddress *string
```

- *Type:* *string

A valid IPv4 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_transit_site_wan#gateway_address MagicTransitSiteWan#gateway_address}

---

##### `SecondaryAddress`<sup>Optional</sup> <a name="SecondaryAddress" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressing.property.secondaryAddress"></a>

```go
SecondaryAddress *string
```

- *Type:* *string

A valid CIDR notation representing an IP range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_transit_site_wan#secondary_address MagicTransitSiteWan#secondary_address}

---

## Classes <a name="Classes" id="Classes"></a>

### MagicTransitSiteWanStaticAddressingOutputReference <a name="MagicTransitSiteWanStaticAddressingOutputReference" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/magictransitsitewan"

magictransitsitewan.NewMagicTransitSiteWanStaticAddressingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MagicTransitSiteWanStaticAddressingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.resetSecondaryAddress">ResetSecondaryAddress</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecondaryAddress` <a name="ResetSecondaryAddress" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.resetSecondaryAddress"></a>

```go
func ResetSecondaryAddress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.addressInput">AddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.gatewayAddressInput">GatewayAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.secondaryAddressInput">SecondaryAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.gatewayAddress">GatewayAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.secondaryAddress">SecondaryAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.addressInput"></a>

```go
func AddressInput() *string
```

- *Type:* *string

---

##### `GatewayAddressInput`<sup>Optional</sup> <a name="GatewayAddressInput" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.gatewayAddressInput"></a>

```go
func GatewayAddressInput() *string
```

- *Type:* *string

---

##### `SecondaryAddressInput`<sup>Optional</sup> <a name="SecondaryAddressInput" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.secondaryAddressInput"></a>

```go
func SecondaryAddressInput() *string
```

- *Type:* *string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `GatewayAddress`<sup>Required</sup> <a name="GatewayAddress" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.gatewayAddress"></a>

```go
func GatewayAddress() *string
```

- *Type:* *string

---

##### `SecondaryAddress`<sup>Required</sup> <a name="SecondaryAddress" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.secondaryAddress"></a>

```go
func SecondaryAddress() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



