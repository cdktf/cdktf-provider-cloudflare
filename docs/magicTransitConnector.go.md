# `magicTransitConnector` Submodule <a name="`magicTransitConnector` Submodule" id="@cdktf/provider-cloudflare.magicTransitConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MagicTransitConnector <a name="MagicTransitConnector" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/magic_transit_connector cloudflare_magic_transit_connector}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/magictransitconnector"

magictransitconnector.NewMagicTransitConnector(scope Construct, id *string, config MagicTransitConnectorConfig) MagicTransitConnector
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorConfig">MagicTransitConnectorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorConfig">MagicTransitConnectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.putDevice">PutDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.resetActivated">ResetActivated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.resetInterruptWindowDurationHours">ResetInterruptWindowDurationHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.resetInterruptWindowHourOfDay">ResetInterruptWindowHourOfDay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.resetNotes">ResetNotes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.resetTimezone">ResetTimezone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDevice` <a name="PutDevice" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.putDevice"></a>

```go
func PutDevice(value MagicTransitConnectorDevice)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.putDevice.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorDevice">MagicTransitConnectorDevice</a>

---

##### `ResetActivated` <a name="ResetActivated" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.resetActivated"></a>

```go
func ResetActivated()
```

##### `ResetInterruptWindowDurationHours` <a name="ResetInterruptWindowDurationHours" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.resetInterruptWindowDurationHours"></a>

```go
func ResetInterruptWindowDurationHours()
```

##### `ResetInterruptWindowHourOfDay` <a name="ResetInterruptWindowHourOfDay" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.resetInterruptWindowHourOfDay"></a>

```go
func ResetInterruptWindowHourOfDay()
```

##### `ResetNotes` <a name="ResetNotes" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.resetNotes"></a>

```go
func ResetNotes()
```

##### `ResetTimezone` <a name="ResetTimezone" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.resetTimezone"></a>

```go
func ResetTimezone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MagicTransitConnector resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/magictransitconnector"

magictransitconnector.MagicTransitConnector_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/magictransitconnector"

magictransitconnector.MagicTransitConnector_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/magictransitconnector"

magictransitconnector.MagicTransitConnector_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/magictransitconnector"

magictransitconnector.MagicTransitConnector_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a MagicTransitConnector resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MagicTransitConnector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MagicTransitConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/magic_transit_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the MagicTransitConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.property.device">Device</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorDeviceOutputReference">MagicTransitConnectorDeviceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.property.activatedInput">ActivatedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.property.deviceInput">DeviceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.property.interruptWindowDurationHoursInput">InterruptWindowDurationHoursInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.property.interruptWindowHourOfDayInput">InterruptWindowHourOfDayInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.property.notesInput">NotesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.property.timezoneInput">TimezoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.property.activated">Activated</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.property.interruptWindowDurationHours">InterruptWindowDurationHours</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.property.interruptWindowHourOfDay">InterruptWindowHourOfDay</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.property.notes">Notes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.property.timezone">Timezone</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Device`<sup>Required</sup> <a name="Device" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.property.device"></a>

```go
func Device() MagicTransitConnectorDeviceOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorDeviceOutputReference">MagicTransitConnectorDeviceOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `ActivatedInput`<sup>Optional</sup> <a name="ActivatedInput" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.property.activatedInput"></a>

```go
func ActivatedInput() interface{}
```

- *Type:* interface{}

---

##### `DeviceInput`<sup>Optional</sup> <a name="DeviceInput" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.property.deviceInput"></a>

```go
func DeviceInput() interface{}
```

- *Type:* interface{}

---

##### `InterruptWindowDurationHoursInput`<sup>Optional</sup> <a name="InterruptWindowDurationHoursInput" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.property.interruptWindowDurationHoursInput"></a>

```go
func InterruptWindowDurationHoursInput() *f64
```

- *Type:* *f64

---

##### `InterruptWindowHourOfDayInput`<sup>Optional</sup> <a name="InterruptWindowHourOfDayInput" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.property.interruptWindowHourOfDayInput"></a>

```go
func InterruptWindowHourOfDayInput() *f64
```

- *Type:* *f64

---

##### `NotesInput`<sup>Optional</sup> <a name="NotesInput" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.property.notesInput"></a>

```go
func NotesInput() *string
```

- *Type:* *string

---

##### `TimezoneInput`<sup>Optional</sup> <a name="TimezoneInput" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.property.timezoneInput"></a>

```go
func TimezoneInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `Activated`<sup>Required</sup> <a name="Activated" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.property.activated"></a>

```go
func Activated() interface{}
```

- *Type:* interface{}

---

##### `InterruptWindowDurationHours`<sup>Required</sup> <a name="InterruptWindowDurationHours" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.property.interruptWindowDurationHours"></a>

```go
func InterruptWindowDurationHours() *f64
```

- *Type:* *f64

---

##### `InterruptWindowHourOfDay`<sup>Required</sup> <a name="InterruptWindowHourOfDay" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.property.interruptWindowHourOfDay"></a>

```go
func InterruptWindowHourOfDay() *f64
```

- *Type:* *f64

---

##### `Notes`<sup>Required</sup> <a name="Notes" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.property.notes"></a>

```go
func Notes() *string
```

- *Type:* *string

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.property.timezone"></a>

```go
func Timezone() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnector.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MagicTransitConnectorConfig <a name="MagicTransitConnectorConfig" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/magictransitconnector"

&magictransitconnector.MagicTransitConnectorConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	Device: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13.magicTransitConnector.MagicTransitConnectorDevice,
	Activated: interface{},
	InterruptWindowDurationHours: *f64,
	InterruptWindowHourOfDay: *f64,
	Notes: *string,
	Timezone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Account identifier. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorConfig.property.device">Device</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorDevice">MagicTransitConnectorDevice</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/magic_transit_connector#device MagicTransitConnector#device}. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorConfig.property.activated">Activated</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/magic_transit_connector#activated MagicTransitConnector#activated}. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorConfig.property.interruptWindowDurationHours">InterruptWindowDurationHours</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/magic_transit_connector#interrupt_window_duration_hours MagicTransitConnector#interrupt_window_duration_hours}. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorConfig.property.interruptWindowHourOfDay">InterruptWindowHourOfDay</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/magic_transit_connector#interrupt_window_hour_of_day MagicTransitConnector#interrupt_window_hour_of_day}. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorConfig.property.notes">Notes</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/magic_transit_connector#notes MagicTransitConnector#notes}. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorConfig.property.timezone">Timezone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/magic_transit_connector#timezone MagicTransitConnector#timezone}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Account identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/magic_transit_connector#account_id MagicTransitConnector#account_id}

---

##### `Device`<sup>Required</sup> <a name="Device" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorConfig.property.device"></a>

```go
Device MagicTransitConnectorDevice
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorDevice">MagicTransitConnectorDevice</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/magic_transit_connector#device MagicTransitConnector#device}.

---

##### `Activated`<sup>Optional</sup> <a name="Activated" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorConfig.property.activated"></a>

```go
Activated interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/magic_transit_connector#activated MagicTransitConnector#activated}.

---

##### `InterruptWindowDurationHours`<sup>Optional</sup> <a name="InterruptWindowDurationHours" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorConfig.property.interruptWindowDurationHours"></a>

```go
InterruptWindowDurationHours *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/magic_transit_connector#interrupt_window_duration_hours MagicTransitConnector#interrupt_window_duration_hours}.

---

##### `InterruptWindowHourOfDay`<sup>Optional</sup> <a name="InterruptWindowHourOfDay" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorConfig.property.interruptWindowHourOfDay"></a>

```go
InterruptWindowHourOfDay *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/magic_transit_connector#interrupt_window_hour_of_day MagicTransitConnector#interrupt_window_hour_of_day}.

---

##### `Notes`<sup>Optional</sup> <a name="Notes" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorConfig.property.notes"></a>

```go
Notes *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/magic_transit_connector#notes MagicTransitConnector#notes}.

---

##### `Timezone`<sup>Optional</sup> <a name="Timezone" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorConfig.property.timezone"></a>

```go
Timezone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/magic_transit_connector#timezone MagicTransitConnector#timezone}.

---

### MagicTransitConnectorDevice <a name="MagicTransitConnectorDevice" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorDevice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorDevice.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/magictransitconnector"

&magictransitconnector.MagicTransitConnectorDevice {
	Id: *string,
	SerialNumber: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorDevice.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/magic_transit_connector#id MagicTransitConnector#id}. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorDevice.property.serialNumber">SerialNumber</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/magic_transit_connector#serial_number MagicTransitConnector#serial_number}. |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorDevice.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/magic_transit_connector#id MagicTransitConnector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SerialNumber`<sup>Optional</sup> <a name="SerialNumber" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorDevice.property.serialNumber"></a>

```go
SerialNumber *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/magic_transit_connector#serial_number MagicTransitConnector#serial_number}.

---

## Classes <a name="Classes" id="Classes"></a>

### MagicTransitConnectorDeviceOutputReference <a name="MagicTransitConnectorDeviceOutputReference" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorDeviceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorDeviceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/magictransitconnector"

magictransitconnector.NewMagicTransitConnectorDeviceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MagicTransitConnectorDeviceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorDeviceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorDeviceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorDeviceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorDeviceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorDeviceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorDeviceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorDeviceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorDeviceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorDeviceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorDeviceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorDeviceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorDeviceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorDeviceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorDeviceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorDeviceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorDeviceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorDeviceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorDeviceOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorDeviceOutputReference.resetSerialNumber">ResetSerialNumber</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorDeviceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorDeviceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorDeviceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorDeviceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorDeviceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorDeviceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorDeviceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorDeviceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorDeviceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorDeviceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorDeviceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorDeviceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorDeviceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorDeviceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorDeviceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorDeviceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorDeviceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorDeviceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorDeviceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorDeviceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorDeviceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorDeviceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorDeviceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorDeviceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorDeviceOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetSerialNumber` <a name="ResetSerialNumber" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorDeviceOutputReference.resetSerialNumber"></a>

```go
func ResetSerialNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorDeviceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorDeviceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorDeviceOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorDeviceOutputReference.property.serialNumberInput">SerialNumberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorDeviceOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorDeviceOutputReference.property.serialNumber">SerialNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorDeviceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorDeviceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorDeviceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorDeviceOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `SerialNumberInput`<sup>Optional</sup> <a name="SerialNumberInput" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorDeviceOutputReference.property.serialNumberInput"></a>

```go
func SerialNumberInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorDeviceOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SerialNumber`<sup>Required</sup> <a name="SerialNumber" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorDeviceOutputReference.property.serialNumber"></a>

```go
func SerialNumber() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.magicTransitConnector.MagicTransitConnectorDeviceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



