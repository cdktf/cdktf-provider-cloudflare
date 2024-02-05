# `zoneSettingsOverride` Submodule <a name="`zoneSettingsOverride` Submodule" id="@cdktf/provider-cloudflare.zoneSettingsOverride"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZoneSettingsOverride <a name="ZoneSettingsOverride" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override cloudflare_zone_settings_override}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zonesettingsoverride"

zonesettingsoverride.NewZoneSettingsOverride(scope Construct, id *string, config ZoneSettingsOverrideConfig) ZoneSettingsOverride
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideConfig">ZoneSettingsOverrideConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideConfig">ZoneSettingsOverrideConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.putSettings">PutSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.resetSettings">ResetSettings</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSettings` <a name="PutSettings" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.putSettings"></a>

```go
func PutSettings(value ZoneSettingsOverrideSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings">ZoneSettingsOverrideSettings</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.resetId"></a>

```go
func ResetId()
```

##### `ResetSettings` <a name="ResetSettings" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.resetSettings"></a>

```go
func ResetSettings()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ZoneSettingsOverride resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zonesettingsoverride"

zonesettingsoverride.ZoneSettingsOverride_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zonesettingsoverride"

zonesettingsoverride.ZoneSettingsOverride_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zonesettingsoverride"

zonesettingsoverride.ZoneSettingsOverride_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zonesettingsoverride"

zonesettingsoverride.ZoneSettingsOverride_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ZoneSettingsOverride resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ZoneSettingsOverride to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ZoneSettingsOverride that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ZoneSettingsOverride to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.initialSettings">InitialSettings</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsList">ZoneSettingsOverrideInitialSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.initialSettingsReadAt">InitialSettingsReadAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.readonlySettings">ReadonlySettings</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.settings">Settings</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference">ZoneSettingsOverrideSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.zoneStatus">ZoneStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.zoneType">ZoneType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.settingsInput">SettingsInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings">ZoneSettingsOverrideSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.zoneIdInput">ZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `InitialSettings`<sup>Required</sup> <a name="InitialSettings" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.initialSettings"></a>

```go
func InitialSettings() ZoneSettingsOverrideInitialSettingsList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsList">ZoneSettingsOverrideInitialSettingsList</a>

---

##### `InitialSettingsReadAt`<sup>Required</sup> <a name="InitialSettingsReadAt" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.initialSettingsReadAt"></a>

```go
func InitialSettingsReadAt() *string
```

- *Type:* *string

---

##### `ReadonlySettings`<sup>Required</sup> <a name="ReadonlySettings" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.readonlySettings"></a>

```go
func ReadonlySettings() *[]*string
```

- *Type:* *[]*string

---

##### `Settings`<sup>Required</sup> <a name="Settings" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.settings"></a>

```go
func Settings() ZoneSettingsOverrideSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference">ZoneSettingsOverrideSettingsOutputReference</a>

---

##### `ZoneStatus`<sup>Required</sup> <a name="ZoneStatus" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.zoneStatus"></a>

```go
func ZoneStatus() *string
```

- *Type:* *string

---

##### `ZoneType`<sup>Required</sup> <a name="ZoneType" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.zoneType"></a>

```go
func ZoneType() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `SettingsInput`<sup>Optional</sup> <a name="SettingsInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.settingsInput"></a>

```go
func SettingsInput() ZoneSettingsOverrideSettings
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings">ZoneSettingsOverrideSettings</a>

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.zoneIdInput"></a>

```go
func ZoneIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ZoneSettingsOverrideConfig <a name="ZoneSettingsOverrideConfig" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zonesettingsoverride"

&zonesettingsoverride.ZoneSettingsOverrideConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ZoneId: *string,
	Id: *string,
	Settings: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11.zoneSettingsOverride.ZoneSettingsOverrideSettings,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideConfig.property.zoneId">ZoneId</a></code> | <code>*string</code> | The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#id ZoneSettingsOverride#id}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideConfig.property.settings">Settings</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings">ZoneSettingsOverrideSettings</a></code> | settings block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideConfig.property.zoneId"></a>

```go
ZoneId *string
```

- *Type:* *string

The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#zone_id ZoneSettingsOverride#zone_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#id ZoneSettingsOverride#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Settings`<sup>Optional</sup> <a name="Settings" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideConfig.property.settings"></a>

```go
Settings ZoneSettingsOverrideSettings
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings">ZoneSettingsOverrideSettings</a>

settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#settings ZoneSettingsOverride#settings}

---

### ZoneSettingsOverrideInitialSettings <a name="ZoneSettingsOverrideInitialSettings" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zonesettingsoverride"

&zonesettingsoverride.ZoneSettingsOverrideInitialSettings {

}
```


### ZoneSettingsOverrideInitialSettingsMinify <a name="ZoneSettingsOverrideInitialSettingsMinify" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinify"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinify.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zonesettingsoverride"

&zonesettingsoverride.ZoneSettingsOverrideInitialSettingsMinify {

}
```


### ZoneSettingsOverrideInitialSettingsMobileRedirect <a name="ZoneSettingsOverrideInitialSettingsMobileRedirect" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirect.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zonesettingsoverride"

&zonesettingsoverride.ZoneSettingsOverrideInitialSettingsMobileRedirect {

}
```


### ZoneSettingsOverrideInitialSettingsSecurityHeader <a name="ZoneSettingsOverrideInitialSettingsSecurityHeader" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeader.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zonesettingsoverride"

&zonesettingsoverride.ZoneSettingsOverrideInitialSettingsSecurityHeader {

}
```


### ZoneSettingsOverrideSettings <a name="ZoneSettingsOverrideSettings" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zonesettingsoverride"

&zonesettingsoverride.ZoneSettingsOverrideSettings {
	AlwaysOnline: *string,
	AlwaysUseHttps: *string,
	AutomaticHttpsRewrites: *string,
	BinaryAst: *string,
	Brotli: *string,
	BrowserCacheTtl: *f64,
	BrowserCheck: *string,
	CacheLevel: *string,
	ChallengeTtl: *f64,
	Ciphers: *[]*string,
	CnameFlattening: *string,
	DevelopmentMode: *string,
	EarlyHints: *string,
	EmailObfuscation: *string,
	FilterLogsToCloudflare: *string,
	Fonts: *string,
	H2Prioritization: *string,
	HotlinkProtection: *string,
	Http2: *string,
	Http3: *string,
	ImageResizing: *string,
	IpGeolocation: *string,
	Ipv6: *string,
	LogToCloudflare: *string,
	MaxUpload: *f64,
	Minify: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinify,
	MinTlsVersion: *string,
	Mirage: *string,
	MobileRedirect: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirect,
	OpportunisticEncryption: *string,
	OpportunisticOnion: *string,
	OrangeToOrange: *string,
	OriginErrorPagePassThru: *string,
	OriginMaxHttpVersion: *string,
	Polish: *string,
	PrefetchPreload: *string,
	PrivacyPass: *string,
	ProxyReadTimeout: *string,
	PseudoIpv4: *string,
	ResponseBuffering: *string,
	RocketLoader: *string,
	SecurityHeader: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeader,
	SecurityLevel: *string,
	ServerSideExclude: *string,
	SortQueryStringForCache: *string,
	Ssl: *string,
	Tls12Only: *string,
	Tls13: *string,
	TlsClientAuth: *string,
	TrueClientIpHeader: *string,
	UniversalSsl: *string,
	VisitorIp: *string,
	Waf: *string,
	Webp: *string,
	Websockets: *string,
	ZeroRtt: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.alwaysOnline">AlwaysOnline</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#always_online ZoneSettingsOverride#always_online}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.alwaysUseHttps">AlwaysUseHttps</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#always_use_https ZoneSettingsOverride#always_use_https}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.automaticHttpsRewrites">AutomaticHttpsRewrites</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#automatic_https_rewrites ZoneSettingsOverride#automatic_https_rewrites}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.binaryAst">BinaryAst</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#binary_ast ZoneSettingsOverride#binary_ast}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.brotli">Brotli</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#brotli ZoneSettingsOverride#brotli}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.browserCacheTtl">BrowserCacheTtl</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#browser_cache_ttl ZoneSettingsOverride#browser_cache_ttl}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.browserCheck">BrowserCheck</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#browser_check ZoneSettingsOverride#browser_check}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.cacheLevel">CacheLevel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#cache_level ZoneSettingsOverride#cache_level}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.challengeTtl">ChallengeTtl</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#challenge_ttl ZoneSettingsOverride#challenge_ttl}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.ciphers">Ciphers</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#ciphers ZoneSettingsOverride#ciphers}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.cnameFlattening">CnameFlattening</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#cname_flattening ZoneSettingsOverride#cname_flattening}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.developmentMode">DevelopmentMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#development_mode ZoneSettingsOverride#development_mode}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.earlyHints">EarlyHints</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#early_hints ZoneSettingsOverride#early_hints}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.emailObfuscation">EmailObfuscation</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#email_obfuscation ZoneSettingsOverride#email_obfuscation}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.filterLogsToCloudflare">FilterLogsToCloudflare</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#filter_logs_to_cloudflare ZoneSettingsOverride#filter_logs_to_cloudflare}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.fonts">Fonts</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#fonts ZoneSettingsOverride#fonts}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.h2Prioritization">H2Prioritization</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#h2_prioritization ZoneSettingsOverride#h2_prioritization}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.hotlinkProtection">HotlinkProtection</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#hotlink_protection ZoneSettingsOverride#hotlink_protection}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.http2">Http2</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#http2 ZoneSettingsOverride#http2}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.http3">Http3</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#http3 ZoneSettingsOverride#http3}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.imageResizing">ImageResizing</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#image_resizing ZoneSettingsOverride#image_resizing}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.ipGeolocation">IpGeolocation</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#ip_geolocation ZoneSettingsOverride#ip_geolocation}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.ipv6">Ipv6</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#ipv6 ZoneSettingsOverride#ipv6}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.logToCloudflare">LogToCloudflare</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#log_to_cloudflare ZoneSettingsOverride#log_to_cloudflare}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.maxUpload">MaxUpload</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#max_upload ZoneSettingsOverride#max_upload}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.minify">Minify</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinify">ZoneSettingsOverrideSettingsMinify</a></code> | minify block. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.minTlsVersion">MinTlsVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#min_tls_version ZoneSettingsOverride#min_tls_version}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.mirage">Mirage</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#mirage ZoneSettingsOverride#mirage}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.mobileRedirect">MobileRedirect</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirect">ZoneSettingsOverrideSettingsMobileRedirect</a></code> | mobile_redirect block. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.opportunisticEncryption">OpportunisticEncryption</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#opportunistic_encryption ZoneSettingsOverride#opportunistic_encryption}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.opportunisticOnion">OpportunisticOnion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#opportunistic_onion ZoneSettingsOverride#opportunistic_onion}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.orangeToOrange">OrangeToOrange</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#orange_to_orange ZoneSettingsOverride#orange_to_orange}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.originErrorPagePassThru">OriginErrorPagePassThru</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#origin_error_page_pass_thru ZoneSettingsOverride#origin_error_page_pass_thru}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.originMaxHttpVersion">OriginMaxHttpVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#origin_max_http_version ZoneSettingsOverride#origin_max_http_version}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.polish">Polish</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#polish ZoneSettingsOverride#polish}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.prefetchPreload">PrefetchPreload</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#prefetch_preload ZoneSettingsOverride#prefetch_preload}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.privacyPass">PrivacyPass</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#privacy_pass ZoneSettingsOverride#privacy_pass}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.proxyReadTimeout">ProxyReadTimeout</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#proxy_read_timeout ZoneSettingsOverride#proxy_read_timeout}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.pseudoIpv4">PseudoIpv4</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#pseudo_ipv4 ZoneSettingsOverride#pseudo_ipv4}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.responseBuffering">ResponseBuffering</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#response_buffering ZoneSettingsOverride#response_buffering}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.rocketLoader">RocketLoader</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#rocket_loader ZoneSettingsOverride#rocket_loader}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.securityHeader">SecurityHeader</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeader">ZoneSettingsOverrideSettingsSecurityHeader</a></code> | security_header block. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.securityLevel">SecurityLevel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#security_level ZoneSettingsOverride#security_level}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.serverSideExclude">ServerSideExclude</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#server_side_exclude ZoneSettingsOverride#server_side_exclude}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.sortQueryStringForCache">SortQueryStringForCache</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#sort_query_string_for_cache ZoneSettingsOverride#sort_query_string_for_cache}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.ssl">Ssl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#ssl ZoneSettingsOverride#ssl}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.tls12Only">Tls12Only</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#tls_1_2_only ZoneSettingsOverride#tls_1_2_only}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.tls13">Tls13</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#tls_1_3 ZoneSettingsOverride#tls_1_3}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.tlsClientAuth">TlsClientAuth</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#tls_client_auth ZoneSettingsOverride#tls_client_auth}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.trueClientIpHeader">TrueClientIpHeader</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#true_client_ip_header ZoneSettingsOverride#true_client_ip_header}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.universalSsl">UniversalSsl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#universal_ssl ZoneSettingsOverride#universal_ssl}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.visitorIp">VisitorIp</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#visitor_ip ZoneSettingsOverride#visitor_ip}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.waf">Waf</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#waf ZoneSettingsOverride#waf}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.webp">Webp</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#webp ZoneSettingsOverride#webp}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.websockets">Websockets</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#websockets ZoneSettingsOverride#websockets}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.zeroRtt">ZeroRtt</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#zero_rtt ZoneSettingsOverride#zero_rtt}. |

---

##### `AlwaysOnline`<sup>Optional</sup> <a name="AlwaysOnline" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.alwaysOnline"></a>

```go
AlwaysOnline *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#always_online ZoneSettingsOverride#always_online}.

---

##### `AlwaysUseHttps`<sup>Optional</sup> <a name="AlwaysUseHttps" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.alwaysUseHttps"></a>

```go
AlwaysUseHttps *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#always_use_https ZoneSettingsOverride#always_use_https}.

---

##### `AutomaticHttpsRewrites`<sup>Optional</sup> <a name="AutomaticHttpsRewrites" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.automaticHttpsRewrites"></a>

```go
AutomaticHttpsRewrites *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#automatic_https_rewrites ZoneSettingsOverride#automatic_https_rewrites}.

---

##### `BinaryAst`<sup>Optional</sup> <a name="BinaryAst" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.binaryAst"></a>

```go
BinaryAst *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#binary_ast ZoneSettingsOverride#binary_ast}.

---

##### `Brotli`<sup>Optional</sup> <a name="Brotli" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.brotli"></a>

```go
Brotli *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#brotli ZoneSettingsOverride#brotli}.

---

##### `BrowserCacheTtl`<sup>Optional</sup> <a name="BrowserCacheTtl" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.browserCacheTtl"></a>

```go
BrowserCacheTtl *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#browser_cache_ttl ZoneSettingsOverride#browser_cache_ttl}.

---

##### `BrowserCheck`<sup>Optional</sup> <a name="BrowserCheck" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.browserCheck"></a>

```go
BrowserCheck *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#browser_check ZoneSettingsOverride#browser_check}.

---

##### `CacheLevel`<sup>Optional</sup> <a name="CacheLevel" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.cacheLevel"></a>

```go
CacheLevel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#cache_level ZoneSettingsOverride#cache_level}.

---

##### `ChallengeTtl`<sup>Optional</sup> <a name="ChallengeTtl" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.challengeTtl"></a>

```go
ChallengeTtl *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#challenge_ttl ZoneSettingsOverride#challenge_ttl}.

---

##### `Ciphers`<sup>Optional</sup> <a name="Ciphers" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.ciphers"></a>

```go
Ciphers *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#ciphers ZoneSettingsOverride#ciphers}.

---

##### `CnameFlattening`<sup>Optional</sup> <a name="CnameFlattening" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.cnameFlattening"></a>

```go
CnameFlattening *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#cname_flattening ZoneSettingsOverride#cname_flattening}.

---

##### `DevelopmentMode`<sup>Optional</sup> <a name="DevelopmentMode" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.developmentMode"></a>

```go
DevelopmentMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#development_mode ZoneSettingsOverride#development_mode}.

---

##### `EarlyHints`<sup>Optional</sup> <a name="EarlyHints" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.earlyHints"></a>

```go
EarlyHints *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#early_hints ZoneSettingsOverride#early_hints}.

---

##### `EmailObfuscation`<sup>Optional</sup> <a name="EmailObfuscation" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.emailObfuscation"></a>

```go
EmailObfuscation *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#email_obfuscation ZoneSettingsOverride#email_obfuscation}.

---

##### `FilterLogsToCloudflare`<sup>Optional</sup> <a name="FilterLogsToCloudflare" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.filterLogsToCloudflare"></a>

```go
FilterLogsToCloudflare *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#filter_logs_to_cloudflare ZoneSettingsOverride#filter_logs_to_cloudflare}.

---

##### `Fonts`<sup>Optional</sup> <a name="Fonts" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.fonts"></a>

```go
Fonts *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#fonts ZoneSettingsOverride#fonts}.

---

##### `H2Prioritization`<sup>Optional</sup> <a name="H2Prioritization" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.h2Prioritization"></a>

```go
H2Prioritization *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#h2_prioritization ZoneSettingsOverride#h2_prioritization}.

---

##### `HotlinkProtection`<sup>Optional</sup> <a name="HotlinkProtection" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.hotlinkProtection"></a>

```go
HotlinkProtection *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#hotlink_protection ZoneSettingsOverride#hotlink_protection}.

---

##### `Http2`<sup>Optional</sup> <a name="Http2" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.http2"></a>

```go
Http2 *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#http2 ZoneSettingsOverride#http2}.

---

##### `Http3`<sup>Optional</sup> <a name="Http3" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.http3"></a>

```go
Http3 *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#http3 ZoneSettingsOverride#http3}.

---

##### `ImageResizing`<sup>Optional</sup> <a name="ImageResizing" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.imageResizing"></a>

```go
ImageResizing *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#image_resizing ZoneSettingsOverride#image_resizing}.

---

##### `IpGeolocation`<sup>Optional</sup> <a name="IpGeolocation" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.ipGeolocation"></a>

```go
IpGeolocation *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#ip_geolocation ZoneSettingsOverride#ip_geolocation}.

---

##### `Ipv6`<sup>Optional</sup> <a name="Ipv6" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.ipv6"></a>

```go
Ipv6 *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#ipv6 ZoneSettingsOverride#ipv6}.

---

##### `LogToCloudflare`<sup>Optional</sup> <a name="LogToCloudflare" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.logToCloudflare"></a>

```go
LogToCloudflare *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#log_to_cloudflare ZoneSettingsOverride#log_to_cloudflare}.

---

##### `MaxUpload`<sup>Optional</sup> <a name="MaxUpload" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.maxUpload"></a>

```go
MaxUpload *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#max_upload ZoneSettingsOverride#max_upload}.

---

##### `Minify`<sup>Optional</sup> <a name="Minify" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.minify"></a>

```go
Minify ZoneSettingsOverrideSettingsMinify
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinify">ZoneSettingsOverrideSettingsMinify</a>

minify block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#minify ZoneSettingsOverride#minify}

---

##### `MinTlsVersion`<sup>Optional</sup> <a name="MinTlsVersion" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.minTlsVersion"></a>

```go
MinTlsVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#min_tls_version ZoneSettingsOverride#min_tls_version}.

---

##### `Mirage`<sup>Optional</sup> <a name="Mirage" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.mirage"></a>

```go
Mirage *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#mirage ZoneSettingsOverride#mirage}.

---

##### `MobileRedirect`<sup>Optional</sup> <a name="MobileRedirect" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.mobileRedirect"></a>

```go
MobileRedirect ZoneSettingsOverrideSettingsMobileRedirect
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirect">ZoneSettingsOverrideSettingsMobileRedirect</a>

mobile_redirect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#mobile_redirect ZoneSettingsOverride#mobile_redirect}

---

##### `OpportunisticEncryption`<sup>Optional</sup> <a name="OpportunisticEncryption" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.opportunisticEncryption"></a>

```go
OpportunisticEncryption *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#opportunistic_encryption ZoneSettingsOverride#opportunistic_encryption}.

---

##### `OpportunisticOnion`<sup>Optional</sup> <a name="OpportunisticOnion" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.opportunisticOnion"></a>

```go
OpportunisticOnion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#opportunistic_onion ZoneSettingsOverride#opportunistic_onion}.

---

##### `OrangeToOrange`<sup>Optional</sup> <a name="OrangeToOrange" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.orangeToOrange"></a>

```go
OrangeToOrange *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#orange_to_orange ZoneSettingsOverride#orange_to_orange}.

---

##### `OriginErrorPagePassThru`<sup>Optional</sup> <a name="OriginErrorPagePassThru" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.originErrorPagePassThru"></a>

```go
OriginErrorPagePassThru *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#origin_error_page_pass_thru ZoneSettingsOverride#origin_error_page_pass_thru}.

---

##### `OriginMaxHttpVersion`<sup>Optional</sup> <a name="OriginMaxHttpVersion" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.originMaxHttpVersion"></a>

```go
OriginMaxHttpVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#origin_max_http_version ZoneSettingsOverride#origin_max_http_version}.

---

##### `Polish`<sup>Optional</sup> <a name="Polish" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.polish"></a>

```go
Polish *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#polish ZoneSettingsOverride#polish}.

---

##### `PrefetchPreload`<sup>Optional</sup> <a name="PrefetchPreload" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.prefetchPreload"></a>

```go
PrefetchPreload *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#prefetch_preload ZoneSettingsOverride#prefetch_preload}.

---

##### `PrivacyPass`<sup>Optional</sup> <a name="PrivacyPass" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.privacyPass"></a>

```go
PrivacyPass *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#privacy_pass ZoneSettingsOverride#privacy_pass}.

---

##### `ProxyReadTimeout`<sup>Optional</sup> <a name="ProxyReadTimeout" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.proxyReadTimeout"></a>

```go
ProxyReadTimeout *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#proxy_read_timeout ZoneSettingsOverride#proxy_read_timeout}.

---

##### `PseudoIpv4`<sup>Optional</sup> <a name="PseudoIpv4" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.pseudoIpv4"></a>

```go
PseudoIpv4 *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#pseudo_ipv4 ZoneSettingsOverride#pseudo_ipv4}.

---

##### `ResponseBuffering`<sup>Optional</sup> <a name="ResponseBuffering" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.responseBuffering"></a>

```go
ResponseBuffering *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#response_buffering ZoneSettingsOverride#response_buffering}.

---

##### `RocketLoader`<sup>Optional</sup> <a name="RocketLoader" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.rocketLoader"></a>

```go
RocketLoader *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#rocket_loader ZoneSettingsOverride#rocket_loader}.

---

##### `SecurityHeader`<sup>Optional</sup> <a name="SecurityHeader" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.securityHeader"></a>

```go
SecurityHeader ZoneSettingsOverrideSettingsSecurityHeader
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeader">ZoneSettingsOverrideSettingsSecurityHeader</a>

security_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#security_header ZoneSettingsOverride#security_header}

---

##### `SecurityLevel`<sup>Optional</sup> <a name="SecurityLevel" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.securityLevel"></a>

```go
SecurityLevel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#security_level ZoneSettingsOverride#security_level}.

---

##### `ServerSideExclude`<sup>Optional</sup> <a name="ServerSideExclude" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.serverSideExclude"></a>

```go
ServerSideExclude *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#server_side_exclude ZoneSettingsOverride#server_side_exclude}.

---

##### `SortQueryStringForCache`<sup>Optional</sup> <a name="SortQueryStringForCache" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.sortQueryStringForCache"></a>

```go
SortQueryStringForCache *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#sort_query_string_for_cache ZoneSettingsOverride#sort_query_string_for_cache}.

---

##### `Ssl`<sup>Optional</sup> <a name="Ssl" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.ssl"></a>

```go
Ssl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#ssl ZoneSettingsOverride#ssl}.

---

##### `Tls12Only`<sup>Optional</sup> <a name="Tls12Only" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.tls12Only"></a>

```go
Tls12Only *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#tls_1_2_only ZoneSettingsOverride#tls_1_2_only}.

---

##### `Tls13`<sup>Optional</sup> <a name="Tls13" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.tls13"></a>

```go
Tls13 *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#tls_1_3 ZoneSettingsOverride#tls_1_3}.

---

##### `TlsClientAuth`<sup>Optional</sup> <a name="TlsClientAuth" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.tlsClientAuth"></a>

```go
TlsClientAuth *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#tls_client_auth ZoneSettingsOverride#tls_client_auth}.

---

##### `TrueClientIpHeader`<sup>Optional</sup> <a name="TrueClientIpHeader" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.trueClientIpHeader"></a>

```go
TrueClientIpHeader *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#true_client_ip_header ZoneSettingsOverride#true_client_ip_header}.

---

##### `UniversalSsl`<sup>Optional</sup> <a name="UniversalSsl" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.universalSsl"></a>

```go
UniversalSsl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#universal_ssl ZoneSettingsOverride#universal_ssl}.

---

##### `VisitorIp`<sup>Optional</sup> <a name="VisitorIp" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.visitorIp"></a>

```go
VisitorIp *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#visitor_ip ZoneSettingsOverride#visitor_ip}.

---

##### `Waf`<sup>Optional</sup> <a name="Waf" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.waf"></a>

```go
Waf *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#waf ZoneSettingsOverride#waf}.

---

##### `Webp`<sup>Optional</sup> <a name="Webp" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.webp"></a>

```go
Webp *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#webp ZoneSettingsOverride#webp}.

---

##### `Websockets`<sup>Optional</sup> <a name="Websockets" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.websockets"></a>

```go
Websockets *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#websockets ZoneSettingsOverride#websockets}.

---

##### `ZeroRtt`<sup>Optional</sup> <a name="ZeroRtt" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.zeroRtt"></a>

```go
ZeroRtt *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#zero_rtt ZoneSettingsOverride#zero_rtt}.

---

### ZoneSettingsOverrideSettingsMinify <a name="ZoneSettingsOverrideSettingsMinify" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinify"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinify.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zonesettingsoverride"

&zonesettingsoverride.ZoneSettingsOverrideSettingsMinify {
	Css: *string,
	Html: *string,
	Js: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinify.property.css">Css</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#css ZoneSettingsOverride#css}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinify.property.html">Html</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#html ZoneSettingsOverride#html}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinify.property.js">Js</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#js ZoneSettingsOverride#js}. |

---

##### `Css`<sup>Required</sup> <a name="Css" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinify.property.css"></a>

```go
Css *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#css ZoneSettingsOverride#css}.

---

##### `Html`<sup>Required</sup> <a name="Html" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinify.property.html"></a>

```go
Html *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#html ZoneSettingsOverride#html}.

---

##### `Js`<sup>Required</sup> <a name="Js" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinify.property.js"></a>

```go
Js *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#js ZoneSettingsOverride#js}.

---

### ZoneSettingsOverrideSettingsMobileRedirect <a name="ZoneSettingsOverrideSettingsMobileRedirect" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirect.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zonesettingsoverride"

&zonesettingsoverride.ZoneSettingsOverrideSettingsMobileRedirect {
	MobileSubdomain: *string,
	Status: *string,
	StripUri: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirect.property.mobileSubdomain">MobileSubdomain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#mobile_subdomain ZoneSettingsOverride#mobile_subdomain}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirect.property.status">Status</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#status ZoneSettingsOverride#status}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirect.property.stripUri">StripUri</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#strip_uri ZoneSettingsOverride#strip_uri}. |

---

##### `MobileSubdomain`<sup>Required</sup> <a name="MobileSubdomain" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirect.property.mobileSubdomain"></a>

```go
MobileSubdomain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#mobile_subdomain ZoneSettingsOverride#mobile_subdomain}.

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirect.property.status"></a>

```go
Status *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#status ZoneSettingsOverride#status}.

---

##### `StripUri`<sup>Required</sup> <a name="StripUri" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirect.property.stripUri"></a>

```go
StripUri interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#strip_uri ZoneSettingsOverride#strip_uri}.

---

### ZoneSettingsOverrideSettingsSecurityHeader <a name="ZoneSettingsOverrideSettingsSecurityHeader" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeader.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zonesettingsoverride"

&zonesettingsoverride.ZoneSettingsOverrideSettingsSecurityHeader {
	Enabled: interface{},
	IncludeSubdomains: interface{},
	MaxAge: *f64,
	Nosniff: interface{},
	Preload: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeader.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#enabled ZoneSettingsOverride#enabled}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeader.property.includeSubdomains">IncludeSubdomains</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#include_subdomains ZoneSettingsOverride#include_subdomains}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeader.property.maxAge">MaxAge</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#max_age ZoneSettingsOverride#max_age}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeader.property.nosniff">Nosniff</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#nosniff ZoneSettingsOverride#nosniff}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeader.property.preload">Preload</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#preload ZoneSettingsOverride#preload}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeader.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#enabled ZoneSettingsOverride#enabled}.

---

##### `IncludeSubdomains`<sup>Optional</sup> <a name="IncludeSubdomains" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeader.property.includeSubdomains"></a>

```go
IncludeSubdomains interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#include_subdomains ZoneSettingsOverride#include_subdomains}.

---

##### `MaxAge`<sup>Optional</sup> <a name="MaxAge" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeader.property.maxAge"></a>

```go
MaxAge *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#max_age ZoneSettingsOverride#max_age}.

---

##### `Nosniff`<sup>Optional</sup> <a name="Nosniff" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeader.property.nosniff"></a>

```go
Nosniff interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#nosniff ZoneSettingsOverride#nosniff}.

---

##### `Preload`<sup>Optional</sup> <a name="Preload" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeader.property.preload"></a>

```go
Preload interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/zone_settings_override#preload ZoneSettingsOverride#preload}.

---

## Classes <a name="Classes" id="Classes"></a>

### ZoneSettingsOverrideInitialSettingsList <a name="ZoneSettingsOverrideInitialSettingsList" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zonesettingsoverride"

zonesettingsoverride.NewZoneSettingsOverrideInitialSettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ZoneSettingsOverrideInitialSettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsList.get"></a>

```go
func Get(index *f64) ZoneSettingsOverrideInitialSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ZoneSettingsOverrideInitialSettingsMinifyList <a name="ZoneSettingsOverrideInitialSettingsMinifyList" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zonesettingsoverride"

zonesettingsoverride.NewZoneSettingsOverrideInitialSettingsMinifyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ZoneSettingsOverrideInitialSettingsMinifyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyList.get"></a>

```go
func Get(index *f64) ZoneSettingsOverrideInitialSettingsMinifyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ZoneSettingsOverrideInitialSettingsMinifyOutputReference <a name="ZoneSettingsOverrideInitialSettingsMinifyOutputReference" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zonesettingsoverride"

zonesettingsoverride.NewZoneSettingsOverrideInitialSettingsMinifyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ZoneSettingsOverrideInitialSettingsMinifyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.property.css">Css</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.property.html">Html</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.property.js">Js</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinify">ZoneSettingsOverrideInitialSettingsMinify</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Css`<sup>Required</sup> <a name="Css" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.property.css"></a>

```go
func Css() *string
```

- *Type:* *string

---

##### `Html`<sup>Required</sup> <a name="Html" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.property.html"></a>

```go
func Html() *string
```

- *Type:* *string

---

##### `Js`<sup>Required</sup> <a name="Js" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.property.js"></a>

```go
func Js() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.property.internalValue"></a>

```go
func InternalValue() ZoneSettingsOverrideInitialSettingsMinify
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinify">ZoneSettingsOverrideInitialSettingsMinify</a>

---


### ZoneSettingsOverrideInitialSettingsMobileRedirectList <a name="ZoneSettingsOverrideInitialSettingsMobileRedirectList" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zonesettingsoverride"

zonesettingsoverride.NewZoneSettingsOverrideInitialSettingsMobileRedirectList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ZoneSettingsOverrideInitialSettingsMobileRedirectList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectList.get"></a>

```go
func Get(index *f64) ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference <a name="ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zonesettingsoverride"

zonesettingsoverride.NewZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.property.mobileSubdomain">MobileSubdomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.property.stripUri">StripUri</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirect">ZoneSettingsOverrideInitialSettingsMobileRedirect</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MobileSubdomain`<sup>Required</sup> <a name="MobileSubdomain" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.property.mobileSubdomain"></a>

```go
func MobileSubdomain() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StripUri`<sup>Required</sup> <a name="StripUri" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.property.stripUri"></a>

```go
func StripUri() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.property.internalValue"></a>

```go
func InternalValue() ZoneSettingsOverrideInitialSettingsMobileRedirect
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirect">ZoneSettingsOverrideInitialSettingsMobileRedirect</a>

---


### ZoneSettingsOverrideInitialSettingsOutputReference <a name="ZoneSettingsOverrideInitialSettingsOutputReference" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zonesettingsoverride"

zonesettingsoverride.NewZoneSettingsOverrideInitialSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ZoneSettingsOverrideInitialSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.alwaysOnline">AlwaysOnline</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.alwaysUseHttps">AlwaysUseHttps</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.automaticHttpsRewrites">AutomaticHttpsRewrites</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.binaryAst">BinaryAst</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.brotli">Brotli</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.browserCacheTtl">BrowserCacheTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.browserCheck">BrowserCheck</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.cacheLevel">CacheLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.challengeTtl">ChallengeTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.ciphers">Ciphers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.cnameFlattening">CnameFlattening</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.developmentMode">DevelopmentMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.earlyHints">EarlyHints</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.emailObfuscation">EmailObfuscation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.filterLogsToCloudflare">FilterLogsToCloudflare</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.fonts">Fonts</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.h2Prioritization">H2Prioritization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.hotlinkProtection">HotlinkProtection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.http2">Http2</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.http3">Http3</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.imageResizing">ImageResizing</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.ipGeolocation">IpGeolocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.ipv6">Ipv6</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.logToCloudflare">LogToCloudflare</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.maxUpload">MaxUpload</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.minify">Minify</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyList">ZoneSettingsOverrideInitialSettingsMinifyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.minTlsVersion">MinTlsVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.mirage">Mirage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.mobileRedirect">MobileRedirect</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectList">ZoneSettingsOverrideInitialSettingsMobileRedirectList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.opportunisticEncryption">OpportunisticEncryption</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.opportunisticOnion">OpportunisticOnion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.orangeToOrange">OrangeToOrange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.originErrorPagePassThru">OriginErrorPagePassThru</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.originMaxHttpVersion">OriginMaxHttpVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.polish">Polish</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.prefetchPreload">PrefetchPreload</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.privacyPass">PrivacyPass</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.proxyReadTimeout">ProxyReadTimeout</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.pseudoIpv4">PseudoIpv4</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.responseBuffering">ResponseBuffering</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.rocketLoader">RocketLoader</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.securityHeader">SecurityHeader</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderList">ZoneSettingsOverrideInitialSettingsSecurityHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.securityLevel">SecurityLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.serverSideExclude">ServerSideExclude</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.sortQueryStringForCache">SortQueryStringForCache</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.ssl">Ssl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.tls12Only">Tls12Only</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.tls13">Tls13</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.tlsClientAuth">TlsClientAuth</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.trueClientIpHeader">TrueClientIpHeader</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.universalSsl">UniversalSsl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.visitorIp">VisitorIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.waf">Waf</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.webp">Webp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.websockets">Websockets</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.zeroRtt">ZeroRtt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettings">ZoneSettingsOverrideInitialSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AlwaysOnline`<sup>Required</sup> <a name="AlwaysOnline" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.alwaysOnline"></a>

```go
func AlwaysOnline() *string
```

- *Type:* *string

---

##### `AlwaysUseHttps`<sup>Required</sup> <a name="AlwaysUseHttps" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.alwaysUseHttps"></a>

```go
func AlwaysUseHttps() *string
```

- *Type:* *string

---

##### `AutomaticHttpsRewrites`<sup>Required</sup> <a name="AutomaticHttpsRewrites" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.automaticHttpsRewrites"></a>

```go
func AutomaticHttpsRewrites() *string
```

- *Type:* *string

---

##### `BinaryAst`<sup>Required</sup> <a name="BinaryAst" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.binaryAst"></a>

```go
func BinaryAst() *string
```

- *Type:* *string

---

##### `Brotli`<sup>Required</sup> <a name="Brotli" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.brotli"></a>

```go
func Brotli() *string
```

- *Type:* *string

---

##### `BrowserCacheTtl`<sup>Required</sup> <a name="BrowserCacheTtl" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.browserCacheTtl"></a>

```go
func BrowserCacheTtl() *f64
```

- *Type:* *f64

---

##### `BrowserCheck`<sup>Required</sup> <a name="BrowserCheck" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.browserCheck"></a>

```go
func BrowserCheck() *string
```

- *Type:* *string

---

##### `CacheLevel`<sup>Required</sup> <a name="CacheLevel" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.cacheLevel"></a>

```go
func CacheLevel() *string
```

- *Type:* *string

---

##### `ChallengeTtl`<sup>Required</sup> <a name="ChallengeTtl" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.challengeTtl"></a>

```go
func ChallengeTtl() *f64
```

- *Type:* *f64

---

##### `Ciphers`<sup>Required</sup> <a name="Ciphers" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.ciphers"></a>

```go
func Ciphers() *[]*string
```

- *Type:* *[]*string

---

##### `CnameFlattening`<sup>Required</sup> <a name="CnameFlattening" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.cnameFlattening"></a>

```go
func CnameFlattening() *string
```

- *Type:* *string

---

##### `DevelopmentMode`<sup>Required</sup> <a name="DevelopmentMode" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.developmentMode"></a>

```go
func DevelopmentMode() *string
```

- *Type:* *string

---

##### `EarlyHints`<sup>Required</sup> <a name="EarlyHints" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.earlyHints"></a>

```go
func EarlyHints() *string
```

- *Type:* *string

---

##### `EmailObfuscation`<sup>Required</sup> <a name="EmailObfuscation" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.emailObfuscation"></a>

```go
func EmailObfuscation() *string
```

- *Type:* *string

---

##### `FilterLogsToCloudflare`<sup>Required</sup> <a name="FilterLogsToCloudflare" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.filterLogsToCloudflare"></a>

```go
func FilterLogsToCloudflare() *string
```

- *Type:* *string

---

##### `Fonts`<sup>Required</sup> <a name="Fonts" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.fonts"></a>

```go
func Fonts() *string
```

- *Type:* *string

---

##### `H2Prioritization`<sup>Required</sup> <a name="H2Prioritization" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.h2Prioritization"></a>

```go
func H2Prioritization() *string
```

- *Type:* *string

---

##### `HotlinkProtection`<sup>Required</sup> <a name="HotlinkProtection" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.hotlinkProtection"></a>

```go
func HotlinkProtection() *string
```

- *Type:* *string

---

##### `Http2`<sup>Required</sup> <a name="Http2" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.http2"></a>

```go
func Http2() *string
```

- *Type:* *string

---

##### `Http3`<sup>Required</sup> <a name="Http3" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.http3"></a>

```go
func Http3() *string
```

- *Type:* *string

---

##### `ImageResizing`<sup>Required</sup> <a name="ImageResizing" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.imageResizing"></a>

```go
func ImageResizing() *string
```

- *Type:* *string

---

##### `IpGeolocation`<sup>Required</sup> <a name="IpGeolocation" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.ipGeolocation"></a>

```go
func IpGeolocation() *string
```

- *Type:* *string

---

##### `Ipv6`<sup>Required</sup> <a name="Ipv6" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.ipv6"></a>

```go
func Ipv6() *string
```

- *Type:* *string

---

##### `LogToCloudflare`<sup>Required</sup> <a name="LogToCloudflare" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.logToCloudflare"></a>

```go
func LogToCloudflare() *string
```

- *Type:* *string

---

##### `MaxUpload`<sup>Required</sup> <a name="MaxUpload" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.maxUpload"></a>

```go
func MaxUpload() *f64
```

- *Type:* *f64

---

##### `Minify`<sup>Required</sup> <a name="Minify" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.minify"></a>

```go
func Minify() ZoneSettingsOverrideInitialSettingsMinifyList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyList">ZoneSettingsOverrideInitialSettingsMinifyList</a>

---

##### `MinTlsVersion`<sup>Required</sup> <a name="MinTlsVersion" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.minTlsVersion"></a>

```go
func MinTlsVersion() *string
```

- *Type:* *string

---

##### `Mirage`<sup>Required</sup> <a name="Mirage" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.mirage"></a>

```go
func Mirage() *string
```

- *Type:* *string

---

##### `MobileRedirect`<sup>Required</sup> <a name="MobileRedirect" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.mobileRedirect"></a>

```go
func MobileRedirect() ZoneSettingsOverrideInitialSettingsMobileRedirectList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectList">ZoneSettingsOverrideInitialSettingsMobileRedirectList</a>

---

##### `OpportunisticEncryption`<sup>Required</sup> <a name="OpportunisticEncryption" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.opportunisticEncryption"></a>

```go
func OpportunisticEncryption() *string
```

- *Type:* *string

---

##### `OpportunisticOnion`<sup>Required</sup> <a name="OpportunisticOnion" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.opportunisticOnion"></a>

```go
func OpportunisticOnion() *string
```

- *Type:* *string

---

##### `OrangeToOrange`<sup>Required</sup> <a name="OrangeToOrange" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.orangeToOrange"></a>

```go
func OrangeToOrange() *string
```

- *Type:* *string

---

##### `OriginErrorPagePassThru`<sup>Required</sup> <a name="OriginErrorPagePassThru" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.originErrorPagePassThru"></a>

```go
func OriginErrorPagePassThru() *string
```

- *Type:* *string

---

##### `OriginMaxHttpVersion`<sup>Required</sup> <a name="OriginMaxHttpVersion" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.originMaxHttpVersion"></a>

```go
func OriginMaxHttpVersion() *string
```

- *Type:* *string

---

##### `Polish`<sup>Required</sup> <a name="Polish" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.polish"></a>

```go
func Polish() *string
```

- *Type:* *string

---

##### `PrefetchPreload`<sup>Required</sup> <a name="PrefetchPreload" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.prefetchPreload"></a>

```go
func PrefetchPreload() *string
```

- *Type:* *string

---

##### `PrivacyPass`<sup>Required</sup> <a name="PrivacyPass" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.privacyPass"></a>

```go
func PrivacyPass() *string
```

- *Type:* *string

---

##### `ProxyReadTimeout`<sup>Required</sup> <a name="ProxyReadTimeout" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.proxyReadTimeout"></a>

```go
func ProxyReadTimeout() *string
```

- *Type:* *string

---

##### `PseudoIpv4`<sup>Required</sup> <a name="PseudoIpv4" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.pseudoIpv4"></a>

```go
func PseudoIpv4() *string
```

- *Type:* *string

---

##### `ResponseBuffering`<sup>Required</sup> <a name="ResponseBuffering" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.responseBuffering"></a>

```go
func ResponseBuffering() *string
```

- *Type:* *string

---

##### `RocketLoader`<sup>Required</sup> <a name="RocketLoader" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.rocketLoader"></a>

```go
func RocketLoader() *string
```

- *Type:* *string

---

##### `SecurityHeader`<sup>Required</sup> <a name="SecurityHeader" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.securityHeader"></a>

```go
func SecurityHeader() ZoneSettingsOverrideInitialSettingsSecurityHeaderList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderList">ZoneSettingsOverrideInitialSettingsSecurityHeaderList</a>

---

##### `SecurityLevel`<sup>Required</sup> <a name="SecurityLevel" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.securityLevel"></a>

```go
func SecurityLevel() *string
```

- *Type:* *string

---

##### `ServerSideExclude`<sup>Required</sup> <a name="ServerSideExclude" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.serverSideExclude"></a>

```go
func ServerSideExclude() *string
```

- *Type:* *string

---

##### `SortQueryStringForCache`<sup>Required</sup> <a name="SortQueryStringForCache" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.sortQueryStringForCache"></a>

```go
func SortQueryStringForCache() *string
```

- *Type:* *string

---

##### `Ssl`<sup>Required</sup> <a name="Ssl" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.ssl"></a>

```go
func Ssl() *string
```

- *Type:* *string

---

##### `Tls12Only`<sup>Required</sup> <a name="Tls12Only" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.tls12Only"></a>

```go
func Tls12Only() *string
```

- *Type:* *string

---

##### `Tls13`<sup>Required</sup> <a name="Tls13" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.tls13"></a>

```go
func Tls13() *string
```

- *Type:* *string

---

##### `TlsClientAuth`<sup>Required</sup> <a name="TlsClientAuth" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.tlsClientAuth"></a>

```go
func TlsClientAuth() *string
```

- *Type:* *string

---

##### `TrueClientIpHeader`<sup>Required</sup> <a name="TrueClientIpHeader" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.trueClientIpHeader"></a>

```go
func TrueClientIpHeader() *string
```

- *Type:* *string

---

##### `UniversalSsl`<sup>Required</sup> <a name="UniversalSsl" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.universalSsl"></a>

```go
func UniversalSsl() *string
```

- *Type:* *string

---

##### `VisitorIp`<sup>Required</sup> <a name="VisitorIp" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.visitorIp"></a>

```go
func VisitorIp() *string
```

- *Type:* *string

---

##### `Waf`<sup>Required</sup> <a name="Waf" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.waf"></a>

```go
func Waf() *string
```

- *Type:* *string

---

##### `Webp`<sup>Required</sup> <a name="Webp" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.webp"></a>

```go
func Webp() *string
```

- *Type:* *string

---

##### `Websockets`<sup>Required</sup> <a name="Websockets" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.websockets"></a>

```go
func Websockets() *string
```

- *Type:* *string

---

##### `ZeroRtt`<sup>Required</sup> <a name="ZeroRtt" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.zeroRtt"></a>

```go
func ZeroRtt() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() ZoneSettingsOverrideInitialSettings
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettings">ZoneSettingsOverrideInitialSettings</a>

---


### ZoneSettingsOverrideInitialSettingsSecurityHeaderList <a name="ZoneSettingsOverrideInitialSettingsSecurityHeaderList" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zonesettingsoverride"

zonesettingsoverride.NewZoneSettingsOverrideInitialSettingsSecurityHeaderList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ZoneSettingsOverrideInitialSettingsSecurityHeaderList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderList.get"></a>

```go
func Get(index *f64) ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference <a name="ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zonesettingsoverride"

zonesettingsoverride.NewZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.property.includeSubdomains">IncludeSubdomains</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.property.maxAge">MaxAge</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.property.nosniff">Nosniff</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.property.preload">Preload</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeader">ZoneSettingsOverrideInitialSettingsSecurityHeader</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IncludeSubdomains`<sup>Required</sup> <a name="IncludeSubdomains" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.property.includeSubdomains"></a>

```go
func IncludeSubdomains() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `MaxAge`<sup>Required</sup> <a name="MaxAge" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.property.maxAge"></a>

```go
func MaxAge() *f64
```

- *Type:* *f64

---

##### `Nosniff`<sup>Required</sup> <a name="Nosniff" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.property.nosniff"></a>

```go
func Nosniff() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Preload`<sup>Required</sup> <a name="Preload" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.property.preload"></a>

```go
func Preload() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.property.internalValue"></a>

```go
func InternalValue() ZoneSettingsOverrideInitialSettingsSecurityHeader
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeader">ZoneSettingsOverrideInitialSettingsSecurityHeader</a>

---


### ZoneSettingsOverrideSettingsMinifyOutputReference <a name="ZoneSettingsOverrideSettingsMinifyOutputReference" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zonesettingsoverride"

zonesettingsoverride.NewZoneSettingsOverrideSettingsMinifyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ZoneSettingsOverrideSettingsMinifyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.property.cssInput">CssInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.property.htmlInput">HtmlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.property.jsInput">JsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.property.css">Css</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.property.html">Html</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.property.js">Js</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinify">ZoneSettingsOverrideSettingsMinify</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CssInput`<sup>Optional</sup> <a name="CssInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.property.cssInput"></a>

```go
func CssInput() *string
```

- *Type:* *string

---

##### `HtmlInput`<sup>Optional</sup> <a name="HtmlInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.property.htmlInput"></a>

```go
func HtmlInput() *string
```

- *Type:* *string

---

##### `JsInput`<sup>Optional</sup> <a name="JsInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.property.jsInput"></a>

```go
func JsInput() *string
```

- *Type:* *string

---

##### `Css`<sup>Required</sup> <a name="Css" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.property.css"></a>

```go
func Css() *string
```

- *Type:* *string

---

##### `Html`<sup>Required</sup> <a name="Html" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.property.html"></a>

```go
func Html() *string
```

- *Type:* *string

---

##### `Js`<sup>Required</sup> <a name="Js" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.property.js"></a>

```go
func Js() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.property.internalValue"></a>

```go
func InternalValue() ZoneSettingsOverrideSettingsMinify
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinify">ZoneSettingsOverrideSettingsMinify</a>

---


### ZoneSettingsOverrideSettingsMobileRedirectOutputReference <a name="ZoneSettingsOverrideSettingsMobileRedirectOutputReference" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zonesettingsoverride"

zonesettingsoverride.NewZoneSettingsOverrideSettingsMobileRedirectOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ZoneSettingsOverrideSettingsMobileRedirectOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.property.mobileSubdomainInput">MobileSubdomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.property.stripUriInput">StripUriInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.property.mobileSubdomain">MobileSubdomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.property.stripUri">StripUri</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirect">ZoneSettingsOverrideSettingsMobileRedirect</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MobileSubdomainInput`<sup>Optional</sup> <a name="MobileSubdomainInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.property.mobileSubdomainInput"></a>

```go
func MobileSubdomainInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `StripUriInput`<sup>Optional</sup> <a name="StripUriInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.property.stripUriInput"></a>

```go
func StripUriInput() interface{}
```

- *Type:* interface{}

---

##### `MobileSubdomain`<sup>Required</sup> <a name="MobileSubdomain" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.property.mobileSubdomain"></a>

```go
func MobileSubdomain() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StripUri`<sup>Required</sup> <a name="StripUri" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.property.stripUri"></a>

```go
func StripUri() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.property.internalValue"></a>

```go
func InternalValue() ZoneSettingsOverrideSettingsMobileRedirect
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirect">ZoneSettingsOverrideSettingsMobileRedirect</a>

---


### ZoneSettingsOverrideSettingsOutputReference <a name="ZoneSettingsOverrideSettingsOutputReference" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zonesettingsoverride"

zonesettingsoverride.NewZoneSettingsOverrideSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ZoneSettingsOverrideSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.putMinify">PutMinify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.putMobileRedirect">PutMobileRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.putSecurityHeader">PutSecurityHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetAlwaysOnline">ResetAlwaysOnline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetAlwaysUseHttps">ResetAlwaysUseHttps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetAutomaticHttpsRewrites">ResetAutomaticHttpsRewrites</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetBinaryAst">ResetBinaryAst</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetBrotli">ResetBrotli</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetBrowserCacheTtl">ResetBrowserCacheTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetBrowserCheck">ResetBrowserCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetCacheLevel">ResetCacheLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetChallengeTtl">ResetChallengeTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetCiphers">ResetCiphers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetCnameFlattening">ResetCnameFlattening</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetDevelopmentMode">ResetDevelopmentMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetEarlyHints">ResetEarlyHints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetEmailObfuscation">ResetEmailObfuscation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetFilterLogsToCloudflare">ResetFilterLogsToCloudflare</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetFonts">ResetFonts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetH2Prioritization">ResetH2Prioritization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetHotlinkProtection">ResetHotlinkProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetHttp2">ResetHttp2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetHttp3">ResetHttp3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetImageResizing">ResetImageResizing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetIpGeolocation">ResetIpGeolocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetIpv6">ResetIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetLogToCloudflare">ResetLogToCloudflare</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetMaxUpload">ResetMaxUpload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetMinify">ResetMinify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetMinTlsVersion">ResetMinTlsVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetMirage">ResetMirage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetMobileRedirect">ResetMobileRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetOpportunisticEncryption">ResetOpportunisticEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetOpportunisticOnion">ResetOpportunisticOnion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetOrangeToOrange">ResetOrangeToOrange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetOriginErrorPagePassThru">ResetOriginErrorPagePassThru</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetOriginMaxHttpVersion">ResetOriginMaxHttpVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetPolish">ResetPolish</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetPrefetchPreload">ResetPrefetchPreload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetPrivacyPass">ResetPrivacyPass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetProxyReadTimeout">ResetProxyReadTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetPseudoIpv4">ResetPseudoIpv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetResponseBuffering">ResetResponseBuffering</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetRocketLoader">ResetRocketLoader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetSecurityHeader">ResetSecurityHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetSecurityLevel">ResetSecurityLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetServerSideExclude">ResetServerSideExclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetSortQueryStringForCache">ResetSortQueryStringForCache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetSsl">ResetSsl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetTls12Only">ResetTls12Only</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetTls13">ResetTls13</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetTlsClientAuth">ResetTlsClientAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetTrueClientIpHeader">ResetTrueClientIpHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetUniversalSsl">ResetUniversalSsl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetVisitorIp">ResetVisitorIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetWaf">ResetWaf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetWebp">ResetWebp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetWebsockets">ResetWebsockets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetZeroRtt">ResetZeroRtt</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMinify` <a name="PutMinify" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.putMinify"></a>

```go
func PutMinify(value ZoneSettingsOverrideSettingsMinify)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.putMinify.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinify">ZoneSettingsOverrideSettingsMinify</a>

---

##### `PutMobileRedirect` <a name="PutMobileRedirect" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.putMobileRedirect"></a>

```go
func PutMobileRedirect(value ZoneSettingsOverrideSettingsMobileRedirect)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.putMobileRedirect.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirect">ZoneSettingsOverrideSettingsMobileRedirect</a>

---

##### `PutSecurityHeader` <a name="PutSecurityHeader" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.putSecurityHeader"></a>

```go
func PutSecurityHeader(value ZoneSettingsOverrideSettingsSecurityHeader)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.putSecurityHeader.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeader">ZoneSettingsOverrideSettingsSecurityHeader</a>

---

##### `ResetAlwaysOnline` <a name="ResetAlwaysOnline" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetAlwaysOnline"></a>

```go
func ResetAlwaysOnline()
```

##### `ResetAlwaysUseHttps` <a name="ResetAlwaysUseHttps" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetAlwaysUseHttps"></a>

```go
func ResetAlwaysUseHttps()
```

##### `ResetAutomaticHttpsRewrites` <a name="ResetAutomaticHttpsRewrites" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetAutomaticHttpsRewrites"></a>

```go
func ResetAutomaticHttpsRewrites()
```

##### `ResetBinaryAst` <a name="ResetBinaryAst" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetBinaryAst"></a>

```go
func ResetBinaryAst()
```

##### `ResetBrotli` <a name="ResetBrotli" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetBrotli"></a>

```go
func ResetBrotli()
```

##### `ResetBrowserCacheTtl` <a name="ResetBrowserCacheTtl" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetBrowserCacheTtl"></a>

```go
func ResetBrowserCacheTtl()
```

##### `ResetBrowserCheck` <a name="ResetBrowserCheck" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetBrowserCheck"></a>

```go
func ResetBrowserCheck()
```

##### `ResetCacheLevel` <a name="ResetCacheLevel" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetCacheLevel"></a>

```go
func ResetCacheLevel()
```

##### `ResetChallengeTtl` <a name="ResetChallengeTtl" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetChallengeTtl"></a>

```go
func ResetChallengeTtl()
```

##### `ResetCiphers` <a name="ResetCiphers" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetCiphers"></a>

```go
func ResetCiphers()
```

##### `ResetCnameFlattening` <a name="ResetCnameFlattening" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetCnameFlattening"></a>

```go
func ResetCnameFlattening()
```

##### `ResetDevelopmentMode` <a name="ResetDevelopmentMode" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetDevelopmentMode"></a>

```go
func ResetDevelopmentMode()
```

##### `ResetEarlyHints` <a name="ResetEarlyHints" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetEarlyHints"></a>

```go
func ResetEarlyHints()
```

##### `ResetEmailObfuscation` <a name="ResetEmailObfuscation" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetEmailObfuscation"></a>

```go
func ResetEmailObfuscation()
```

##### `ResetFilterLogsToCloudflare` <a name="ResetFilterLogsToCloudflare" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetFilterLogsToCloudflare"></a>

```go
func ResetFilterLogsToCloudflare()
```

##### `ResetFonts` <a name="ResetFonts" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetFonts"></a>

```go
func ResetFonts()
```

##### `ResetH2Prioritization` <a name="ResetH2Prioritization" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetH2Prioritization"></a>

```go
func ResetH2Prioritization()
```

##### `ResetHotlinkProtection` <a name="ResetHotlinkProtection" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetHotlinkProtection"></a>

```go
func ResetHotlinkProtection()
```

##### `ResetHttp2` <a name="ResetHttp2" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetHttp2"></a>

```go
func ResetHttp2()
```

##### `ResetHttp3` <a name="ResetHttp3" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetHttp3"></a>

```go
func ResetHttp3()
```

##### `ResetImageResizing` <a name="ResetImageResizing" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetImageResizing"></a>

```go
func ResetImageResizing()
```

##### `ResetIpGeolocation` <a name="ResetIpGeolocation" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetIpGeolocation"></a>

```go
func ResetIpGeolocation()
```

##### `ResetIpv6` <a name="ResetIpv6" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetIpv6"></a>

```go
func ResetIpv6()
```

##### `ResetLogToCloudflare` <a name="ResetLogToCloudflare" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetLogToCloudflare"></a>

```go
func ResetLogToCloudflare()
```

##### `ResetMaxUpload` <a name="ResetMaxUpload" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetMaxUpload"></a>

```go
func ResetMaxUpload()
```

##### `ResetMinify` <a name="ResetMinify" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetMinify"></a>

```go
func ResetMinify()
```

##### `ResetMinTlsVersion` <a name="ResetMinTlsVersion" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetMinTlsVersion"></a>

```go
func ResetMinTlsVersion()
```

##### `ResetMirage` <a name="ResetMirage" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetMirage"></a>

```go
func ResetMirage()
```

##### `ResetMobileRedirect` <a name="ResetMobileRedirect" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetMobileRedirect"></a>

```go
func ResetMobileRedirect()
```

##### `ResetOpportunisticEncryption` <a name="ResetOpportunisticEncryption" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetOpportunisticEncryption"></a>

```go
func ResetOpportunisticEncryption()
```

##### `ResetOpportunisticOnion` <a name="ResetOpportunisticOnion" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetOpportunisticOnion"></a>

```go
func ResetOpportunisticOnion()
```

##### `ResetOrangeToOrange` <a name="ResetOrangeToOrange" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetOrangeToOrange"></a>

```go
func ResetOrangeToOrange()
```

##### `ResetOriginErrorPagePassThru` <a name="ResetOriginErrorPagePassThru" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetOriginErrorPagePassThru"></a>

```go
func ResetOriginErrorPagePassThru()
```

##### `ResetOriginMaxHttpVersion` <a name="ResetOriginMaxHttpVersion" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetOriginMaxHttpVersion"></a>

```go
func ResetOriginMaxHttpVersion()
```

##### `ResetPolish` <a name="ResetPolish" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetPolish"></a>

```go
func ResetPolish()
```

##### `ResetPrefetchPreload` <a name="ResetPrefetchPreload" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetPrefetchPreload"></a>

```go
func ResetPrefetchPreload()
```

##### `ResetPrivacyPass` <a name="ResetPrivacyPass" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetPrivacyPass"></a>

```go
func ResetPrivacyPass()
```

##### `ResetProxyReadTimeout` <a name="ResetProxyReadTimeout" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetProxyReadTimeout"></a>

```go
func ResetProxyReadTimeout()
```

##### `ResetPseudoIpv4` <a name="ResetPseudoIpv4" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetPseudoIpv4"></a>

```go
func ResetPseudoIpv4()
```

##### `ResetResponseBuffering` <a name="ResetResponseBuffering" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetResponseBuffering"></a>

```go
func ResetResponseBuffering()
```

##### `ResetRocketLoader` <a name="ResetRocketLoader" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetRocketLoader"></a>

```go
func ResetRocketLoader()
```

##### `ResetSecurityHeader` <a name="ResetSecurityHeader" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetSecurityHeader"></a>

```go
func ResetSecurityHeader()
```

##### `ResetSecurityLevel` <a name="ResetSecurityLevel" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetSecurityLevel"></a>

```go
func ResetSecurityLevel()
```

##### `ResetServerSideExclude` <a name="ResetServerSideExclude" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetServerSideExclude"></a>

```go
func ResetServerSideExclude()
```

##### `ResetSortQueryStringForCache` <a name="ResetSortQueryStringForCache" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetSortQueryStringForCache"></a>

```go
func ResetSortQueryStringForCache()
```

##### `ResetSsl` <a name="ResetSsl" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetSsl"></a>

```go
func ResetSsl()
```

##### `ResetTls12Only` <a name="ResetTls12Only" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetTls12Only"></a>

```go
func ResetTls12Only()
```

##### `ResetTls13` <a name="ResetTls13" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetTls13"></a>

```go
func ResetTls13()
```

##### `ResetTlsClientAuth` <a name="ResetTlsClientAuth" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetTlsClientAuth"></a>

```go
func ResetTlsClientAuth()
```

##### `ResetTrueClientIpHeader` <a name="ResetTrueClientIpHeader" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetTrueClientIpHeader"></a>

```go
func ResetTrueClientIpHeader()
```

##### `ResetUniversalSsl` <a name="ResetUniversalSsl" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetUniversalSsl"></a>

```go
func ResetUniversalSsl()
```

##### `ResetVisitorIp` <a name="ResetVisitorIp" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetVisitorIp"></a>

```go
func ResetVisitorIp()
```

##### `ResetWaf` <a name="ResetWaf" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetWaf"></a>

```go
func ResetWaf()
```

##### `ResetWebp` <a name="ResetWebp" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetWebp"></a>

```go
func ResetWebp()
```

##### `ResetWebsockets` <a name="ResetWebsockets" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetWebsockets"></a>

```go
func ResetWebsockets()
```

##### `ResetZeroRtt` <a name="ResetZeroRtt" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetZeroRtt"></a>

```go
func ResetZeroRtt()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.minify">Minify</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference">ZoneSettingsOverrideSettingsMinifyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.mobileRedirect">MobileRedirect</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference">ZoneSettingsOverrideSettingsMobileRedirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.securityHeader">SecurityHeader</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference">ZoneSettingsOverrideSettingsSecurityHeaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.alwaysOnlineInput">AlwaysOnlineInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.alwaysUseHttpsInput">AlwaysUseHttpsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.automaticHttpsRewritesInput">AutomaticHttpsRewritesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.binaryAstInput">BinaryAstInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.brotliInput">BrotliInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.browserCacheTtlInput">BrowserCacheTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.browserCheckInput">BrowserCheckInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.cacheLevelInput">CacheLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.challengeTtlInput">ChallengeTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.ciphersInput">CiphersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.cnameFlatteningInput">CnameFlatteningInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.developmentModeInput">DevelopmentModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.earlyHintsInput">EarlyHintsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.emailObfuscationInput">EmailObfuscationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.filterLogsToCloudflareInput">FilterLogsToCloudflareInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.fontsInput">FontsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.h2PrioritizationInput">H2PrioritizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.hotlinkProtectionInput">HotlinkProtectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.http2Input">Http2Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.http3Input">Http3Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.imageResizingInput">ImageResizingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.ipGeolocationInput">IpGeolocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.ipv6Input">Ipv6Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.logToCloudflareInput">LogToCloudflareInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.maxUploadInput">MaxUploadInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.minifyInput">MinifyInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinify">ZoneSettingsOverrideSettingsMinify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.minTlsVersionInput">MinTlsVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.mirageInput">MirageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.mobileRedirectInput">MobileRedirectInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirect">ZoneSettingsOverrideSettingsMobileRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.opportunisticEncryptionInput">OpportunisticEncryptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.opportunisticOnionInput">OpportunisticOnionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.orangeToOrangeInput">OrangeToOrangeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.originErrorPagePassThruInput">OriginErrorPagePassThruInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.originMaxHttpVersionInput">OriginMaxHttpVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.polishInput">PolishInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.prefetchPreloadInput">PrefetchPreloadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.privacyPassInput">PrivacyPassInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.proxyReadTimeoutInput">ProxyReadTimeoutInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.pseudoIpv4Input">PseudoIpv4Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.responseBufferingInput">ResponseBufferingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.rocketLoaderInput">RocketLoaderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.securityHeaderInput">SecurityHeaderInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeader">ZoneSettingsOverrideSettingsSecurityHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.securityLevelInput">SecurityLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.serverSideExcludeInput">ServerSideExcludeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.sortQueryStringForCacheInput">SortQueryStringForCacheInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.sslInput">SslInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.tls12OnlyInput">Tls12OnlyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.tls13Input">Tls13Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.tlsClientAuthInput">TlsClientAuthInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.trueClientIpHeaderInput">TrueClientIpHeaderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.universalSslInput">UniversalSslInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.visitorIpInput">VisitorIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.wafInput">WafInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.webpInput">WebpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.websocketsInput">WebsocketsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.zeroRttInput">ZeroRttInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.alwaysOnline">AlwaysOnline</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.alwaysUseHttps">AlwaysUseHttps</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.automaticHttpsRewrites">AutomaticHttpsRewrites</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.binaryAst">BinaryAst</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.brotli">Brotli</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.browserCacheTtl">BrowserCacheTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.browserCheck">BrowserCheck</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.cacheLevel">CacheLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.challengeTtl">ChallengeTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.ciphers">Ciphers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.cnameFlattening">CnameFlattening</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.developmentMode">DevelopmentMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.earlyHints">EarlyHints</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.emailObfuscation">EmailObfuscation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.filterLogsToCloudflare">FilterLogsToCloudflare</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.fonts">Fonts</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.h2Prioritization">H2Prioritization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.hotlinkProtection">HotlinkProtection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.http2">Http2</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.http3">Http3</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.imageResizing">ImageResizing</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.ipGeolocation">IpGeolocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.ipv6">Ipv6</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.logToCloudflare">LogToCloudflare</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.maxUpload">MaxUpload</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.minTlsVersion">MinTlsVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.mirage">Mirage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.opportunisticEncryption">OpportunisticEncryption</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.opportunisticOnion">OpportunisticOnion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.orangeToOrange">OrangeToOrange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.originErrorPagePassThru">OriginErrorPagePassThru</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.originMaxHttpVersion">OriginMaxHttpVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.polish">Polish</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.prefetchPreload">PrefetchPreload</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.privacyPass">PrivacyPass</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.proxyReadTimeout">ProxyReadTimeout</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.pseudoIpv4">PseudoIpv4</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.responseBuffering">ResponseBuffering</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.rocketLoader">RocketLoader</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.securityLevel">SecurityLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.serverSideExclude">ServerSideExclude</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.sortQueryStringForCache">SortQueryStringForCache</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.ssl">Ssl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.tls12Only">Tls12Only</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.tls13">Tls13</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.tlsClientAuth">TlsClientAuth</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.trueClientIpHeader">TrueClientIpHeader</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.universalSsl">UniversalSsl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.visitorIp">VisitorIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.waf">Waf</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.webp">Webp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.websockets">Websockets</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.zeroRtt">ZeroRtt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings">ZoneSettingsOverrideSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Minify`<sup>Required</sup> <a name="Minify" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.minify"></a>

```go
func Minify() ZoneSettingsOverrideSettingsMinifyOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference">ZoneSettingsOverrideSettingsMinifyOutputReference</a>

---

##### `MobileRedirect`<sup>Required</sup> <a name="MobileRedirect" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.mobileRedirect"></a>

```go
func MobileRedirect() ZoneSettingsOverrideSettingsMobileRedirectOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference">ZoneSettingsOverrideSettingsMobileRedirectOutputReference</a>

---

##### `SecurityHeader`<sup>Required</sup> <a name="SecurityHeader" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.securityHeader"></a>

```go
func SecurityHeader() ZoneSettingsOverrideSettingsSecurityHeaderOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference">ZoneSettingsOverrideSettingsSecurityHeaderOutputReference</a>

---

##### `AlwaysOnlineInput`<sup>Optional</sup> <a name="AlwaysOnlineInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.alwaysOnlineInput"></a>

```go
func AlwaysOnlineInput() *string
```

- *Type:* *string

---

##### `AlwaysUseHttpsInput`<sup>Optional</sup> <a name="AlwaysUseHttpsInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.alwaysUseHttpsInput"></a>

```go
func AlwaysUseHttpsInput() *string
```

- *Type:* *string

---

##### `AutomaticHttpsRewritesInput`<sup>Optional</sup> <a name="AutomaticHttpsRewritesInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.automaticHttpsRewritesInput"></a>

```go
func AutomaticHttpsRewritesInput() *string
```

- *Type:* *string

---

##### `BinaryAstInput`<sup>Optional</sup> <a name="BinaryAstInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.binaryAstInput"></a>

```go
func BinaryAstInput() *string
```

- *Type:* *string

---

##### `BrotliInput`<sup>Optional</sup> <a name="BrotliInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.brotliInput"></a>

```go
func BrotliInput() *string
```

- *Type:* *string

---

##### `BrowserCacheTtlInput`<sup>Optional</sup> <a name="BrowserCacheTtlInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.browserCacheTtlInput"></a>

```go
func BrowserCacheTtlInput() *f64
```

- *Type:* *f64

---

##### `BrowserCheckInput`<sup>Optional</sup> <a name="BrowserCheckInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.browserCheckInput"></a>

```go
func BrowserCheckInput() *string
```

- *Type:* *string

---

##### `CacheLevelInput`<sup>Optional</sup> <a name="CacheLevelInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.cacheLevelInput"></a>

```go
func CacheLevelInput() *string
```

- *Type:* *string

---

##### `ChallengeTtlInput`<sup>Optional</sup> <a name="ChallengeTtlInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.challengeTtlInput"></a>

```go
func ChallengeTtlInput() *f64
```

- *Type:* *f64

---

##### `CiphersInput`<sup>Optional</sup> <a name="CiphersInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.ciphersInput"></a>

```go
func CiphersInput() *[]*string
```

- *Type:* *[]*string

---

##### `CnameFlatteningInput`<sup>Optional</sup> <a name="CnameFlatteningInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.cnameFlatteningInput"></a>

```go
func CnameFlatteningInput() *string
```

- *Type:* *string

---

##### `DevelopmentModeInput`<sup>Optional</sup> <a name="DevelopmentModeInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.developmentModeInput"></a>

```go
func DevelopmentModeInput() *string
```

- *Type:* *string

---

##### `EarlyHintsInput`<sup>Optional</sup> <a name="EarlyHintsInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.earlyHintsInput"></a>

```go
func EarlyHintsInput() *string
```

- *Type:* *string

---

##### `EmailObfuscationInput`<sup>Optional</sup> <a name="EmailObfuscationInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.emailObfuscationInput"></a>

```go
func EmailObfuscationInput() *string
```

- *Type:* *string

---

##### `FilterLogsToCloudflareInput`<sup>Optional</sup> <a name="FilterLogsToCloudflareInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.filterLogsToCloudflareInput"></a>

```go
func FilterLogsToCloudflareInput() *string
```

- *Type:* *string

---

##### `FontsInput`<sup>Optional</sup> <a name="FontsInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.fontsInput"></a>

```go
func FontsInput() *string
```

- *Type:* *string

---

##### `H2PrioritizationInput`<sup>Optional</sup> <a name="H2PrioritizationInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.h2PrioritizationInput"></a>

```go
func H2PrioritizationInput() *string
```

- *Type:* *string

---

##### `HotlinkProtectionInput`<sup>Optional</sup> <a name="HotlinkProtectionInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.hotlinkProtectionInput"></a>

```go
func HotlinkProtectionInput() *string
```

- *Type:* *string

---

##### `Http2Input`<sup>Optional</sup> <a name="Http2Input" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.http2Input"></a>

```go
func Http2Input() *string
```

- *Type:* *string

---

##### `Http3Input`<sup>Optional</sup> <a name="Http3Input" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.http3Input"></a>

```go
func Http3Input() *string
```

- *Type:* *string

---

##### `ImageResizingInput`<sup>Optional</sup> <a name="ImageResizingInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.imageResizingInput"></a>

```go
func ImageResizingInput() *string
```

- *Type:* *string

---

##### `IpGeolocationInput`<sup>Optional</sup> <a name="IpGeolocationInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.ipGeolocationInput"></a>

```go
func IpGeolocationInput() *string
```

- *Type:* *string

---

##### `Ipv6Input`<sup>Optional</sup> <a name="Ipv6Input" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.ipv6Input"></a>

```go
func Ipv6Input() *string
```

- *Type:* *string

---

##### `LogToCloudflareInput`<sup>Optional</sup> <a name="LogToCloudflareInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.logToCloudflareInput"></a>

```go
func LogToCloudflareInput() *string
```

- *Type:* *string

---

##### `MaxUploadInput`<sup>Optional</sup> <a name="MaxUploadInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.maxUploadInput"></a>

```go
func MaxUploadInput() *f64
```

- *Type:* *f64

---

##### `MinifyInput`<sup>Optional</sup> <a name="MinifyInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.minifyInput"></a>

```go
func MinifyInput() ZoneSettingsOverrideSettingsMinify
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinify">ZoneSettingsOverrideSettingsMinify</a>

---

##### `MinTlsVersionInput`<sup>Optional</sup> <a name="MinTlsVersionInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.minTlsVersionInput"></a>

```go
func MinTlsVersionInput() *string
```

- *Type:* *string

---

##### `MirageInput`<sup>Optional</sup> <a name="MirageInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.mirageInput"></a>

```go
func MirageInput() *string
```

- *Type:* *string

---

##### `MobileRedirectInput`<sup>Optional</sup> <a name="MobileRedirectInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.mobileRedirectInput"></a>

```go
func MobileRedirectInput() ZoneSettingsOverrideSettingsMobileRedirect
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirect">ZoneSettingsOverrideSettingsMobileRedirect</a>

---

##### `OpportunisticEncryptionInput`<sup>Optional</sup> <a name="OpportunisticEncryptionInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.opportunisticEncryptionInput"></a>

```go
func OpportunisticEncryptionInput() *string
```

- *Type:* *string

---

##### `OpportunisticOnionInput`<sup>Optional</sup> <a name="OpportunisticOnionInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.opportunisticOnionInput"></a>

```go
func OpportunisticOnionInput() *string
```

- *Type:* *string

---

##### `OrangeToOrangeInput`<sup>Optional</sup> <a name="OrangeToOrangeInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.orangeToOrangeInput"></a>

```go
func OrangeToOrangeInput() *string
```

- *Type:* *string

---

##### `OriginErrorPagePassThruInput`<sup>Optional</sup> <a name="OriginErrorPagePassThruInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.originErrorPagePassThruInput"></a>

```go
func OriginErrorPagePassThruInput() *string
```

- *Type:* *string

---

##### `OriginMaxHttpVersionInput`<sup>Optional</sup> <a name="OriginMaxHttpVersionInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.originMaxHttpVersionInput"></a>

```go
func OriginMaxHttpVersionInput() *string
```

- *Type:* *string

---

##### `PolishInput`<sup>Optional</sup> <a name="PolishInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.polishInput"></a>

```go
func PolishInput() *string
```

- *Type:* *string

---

##### `PrefetchPreloadInput`<sup>Optional</sup> <a name="PrefetchPreloadInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.prefetchPreloadInput"></a>

```go
func PrefetchPreloadInput() *string
```

- *Type:* *string

---

##### `PrivacyPassInput`<sup>Optional</sup> <a name="PrivacyPassInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.privacyPassInput"></a>

```go
func PrivacyPassInput() *string
```

- *Type:* *string

---

##### `ProxyReadTimeoutInput`<sup>Optional</sup> <a name="ProxyReadTimeoutInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.proxyReadTimeoutInput"></a>

```go
func ProxyReadTimeoutInput() *string
```

- *Type:* *string

---

##### `PseudoIpv4Input`<sup>Optional</sup> <a name="PseudoIpv4Input" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.pseudoIpv4Input"></a>

```go
func PseudoIpv4Input() *string
```

- *Type:* *string

---

##### `ResponseBufferingInput`<sup>Optional</sup> <a name="ResponseBufferingInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.responseBufferingInput"></a>

```go
func ResponseBufferingInput() *string
```

- *Type:* *string

---

##### `RocketLoaderInput`<sup>Optional</sup> <a name="RocketLoaderInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.rocketLoaderInput"></a>

```go
func RocketLoaderInput() *string
```

- *Type:* *string

---

##### `SecurityHeaderInput`<sup>Optional</sup> <a name="SecurityHeaderInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.securityHeaderInput"></a>

```go
func SecurityHeaderInput() ZoneSettingsOverrideSettingsSecurityHeader
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeader">ZoneSettingsOverrideSettingsSecurityHeader</a>

---

##### `SecurityLevelInput`<sup>Optional</sup> <a name="SecurityLevelInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.securityLevelInput"></a>

```go
func SecurityLevelInput() *string
```

- *Type:* *string

---

##### `ServerSideExcludeInput`<sup>Optional</sup> <a name="ServerSideExcludeInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.serverSideExcludeInput"></a>

```go
func ServerSideExcludeInput() *string
```

- *Type:* *string

---

##### `SortQueryStringForCacheInput`<sup>Optional</sup> <a name="SortQueryStringForCacheInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.sortQueryStringForCacheInput"></a>

```go
func SortQueryStringForCacheInput() *string
```

- *Type:* *string

---

##### `SslInput`<sup>Optional</sup> <a name="SslInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.sslInput"></a>

```go
func SslInput() *string
```

- *Type:* *string

---

##### `Tls12OnlyInput`<sup>Optional</sup> <a name="Tls12OnlyInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.tls12OnlyInput"></a>

```go
func Tls12OnlyInput() *string
```

- *Type:* *string

---

##### `Tls13Input`<sup>Optional</sup> <a name="Tls13Input" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.tls13Input"></a>

```go
func Tls13Input() *string
```

- *Type:* *string

---

##### `TlsClientAuthInput`<sup>Optional</sup> <a name="TlsClientAuthInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.tlsClientAuthInput"></a>

```go
func TlsClientAuthInput() *string
```

- *Type:* *string

---

##### `TrueClientIpHeaderInput`<sup>Optional</sup> <a name="TrueClientIpHeaderInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.trueClientIpHeaderInput"></a>

```go
func TrueClientIpHeaderInput() *string
```

- *Type:* *string

---

##### `UniversalSslInput`<sup>Optional</sup> <a name="UniversalSslInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.universalSslInput"></a>

```go
func UniversalSslInput() *string
```

- *Type:* *string

---

##### `VisitorIpInput`<sup>Optional</sup> <a name="VisitorIpInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.visitorIpInput"></a>

```go
func VisitorIpInput() *string
```

- *Type:* *string

---

##### `WafInput`<sup>Optional</sup> <a name="WafInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.wafInput"></a>

```go
func WafInput() *string
```

- *Type:* *string

---

##### `WebpInput`<sup>Optional</sup> <a name="WebpInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.webpInput"></a>

```go
func WebpInput() *string
```

- *Type:* *string

---

##### `WebsocketsInput`<sup>Optional</sup> <a name="WebsocketsInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.websocketsInput"></a>

```go
func WebsocketsInput() *string
```

- *Type:* *string

---

##### `ZeroRttInput`<sup>Optional</sup> <a name="ZeroRttInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.zeroRttInput"></a>

```go
func ZeroRttInput() *string
```

- *Type:* *string

---

##### `AlwaysOnline`<sup>Required</sup> <a name="AlwaysOnline" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.alwaysOnline"></a>

```go
func AlwaysOnline() *string
```

- *Type:* *string

---

##### `AlwaysUseHttps`<sup>Required</sup> <a name="AlwaysUseHttps" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.alwaysUseHttps"></a>

```go
func AlwaysUseHttps() *string
```

- *Type:* *string

---

##### `AutomaticHttpsRewrites`<sup>Required</sup> <a name="AutomaticHttpsRewrites" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.automaticHttpsRewrites"></a>

```go
func AutomaticHttpsRewrites() *string
```

- *Type:* *string

---

##### `BinaryAst`<sup>Required</sup> <a name="BinaryAst" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.binaryAst"></a>

```go
func BinaryAst() *string
```

- *Type:* *string

---

##### `Brotli`<sup>Required</sup> <a name="Brotli" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.brotli"></a>

```go
func Brotli() *string
```

- *Type:* *string

---

##### `BrowserCacheTtl`<sup>Required</sup> <a name="BrowserCacheTtl" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.browserCacheTtl"></a>

```go
func BrowserCacheTtl() *f64
```

- *Type:* *f64

---

##### `BrowserCheck`<sup>Required</sup> <a name="BrowserCheck" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.browserCheck"></a>

```go
func BrowserCheck() *string
```

- *Type:* *string

---

##### `CacheLevel`<sup>Required</sup> <a name="CacheLevel" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.cacheLevel"></a>

```go
func CacheLevel() *string
```

- *Type:* *string

---

##### `ChallengeTtl`<sup>Required</sup> <a name="ChallengeTtl" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.challengeTtl"></a>

```go
func ChallengeTtl() *f64
```

- *Type:* *f64

---

##### `Ciphers`<sup>Required</sup> <a name="Ciphers" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.ciphers"></a>

```go
func Ciphers() *[]*string
```

- *Type:* *[]*string

---

##### `CnameFlattening`<sup>Required</sup> <a name="CnameFlattening" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.cnameFlattening"></a>

```go
func CnameFlattening() *string
```

- *Type:* *string

---

##### `DevelopmentMode`<sup>Required</sup> <a name="DevelopmentMode" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.developmentMode"></a>

```go
func DevelopmentMode() *string
```

- *Type:* *string

---

##### `EarlyHints`<sup>Required</sup> <a name="EarlyHints" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.earlyHints"></a>

```go
func EarlyHints() *string
```

- *Type:* *string

---

##### `EmailObfuscation`<sup>Required</sup> <a name="EmailObfuscation" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.emailObfuscation"></a>

```go
func EmailObfuscation() *string
```

- *Type:* *string

---

##### `FilterLogsToCloudflare`<sup>Required</sup> <a name="FilterLogsToCloudflare" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.filterLogsToCloudflare"></a>

```go
func FilterLogsToCloudflare() *string
```

- *Type:* *string

---

##### `Fonts`<sup>Required</sup> <a name="Fonts" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.fonts"></a>

```go
func Fonts() *string
```

- *Type:* *string

---

##### `H2Prioritization`<sup>Required</sup> <a name="H2Prioritization" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.h2Prioritization"></a>

```go
func H2Prioritization() *string
```

- *Type:* *string

---

##### `HotlinkProtection`<sup>Required</sup> <a name="HotlinkProtection" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.hotlinkProtection"></a>

```go
func HotlinkProtection() *string
```

- *Type:* *string

---

##### `Http2`<sup>Required</sup> <a name="Http2" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.http2"></a>

```go
func Http2() *string
```

- *Type:* *string

---

##### `Http3`<sup>Required</sup> <a name="Http3" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.http3"></a>

```go
func Http3() *string
```

- *Type:* *string

---

##### `ImageResizing`<sup>Required</sup> <a name="ImageResizing" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.imageResizing"></a>

```go
func ImageResizing() *string
```

- *Type:* *string

---

##### `IpGeolocation`<sup>Required</sup> <a name="IpGeolocation" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.ipGeolocation"></a>

```go
func IpGeolocation() *string
```

- *Type:* *string

---

##### `Ipv6`<sup>Required</sup> <a name="Ipv6" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.ipv6"></a>

```go
func Ipv6() *string
```

- *Type:* *string

---

##### `LogToCloudflare`<sup>Required</sup> <a name="LogToCloudflare" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.logToCloudflare"></a>

```go
func LogToCloudflare() *string
```

- *Type:* *string

---

##### `MaxUpload`<sup>Required</sup> <a name="MaxUpload" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.maxUpload"></a>

```go
func MaxUpload() *f64
```

- *Type:* *f64

---

##### `MinTlsVersion`<sup>Required</sup> <a name="MinTlsVersion" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.minTlsVersion"></a>

```go
func MinTlsVersion() *string
```

- *Type:* *string

---

##### `Mirage`<sup>Required</sup> <a name="Mirage" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.mirage"></a>

```go
func Mirage() *string
```

- *Type:* *string

---

##### `OpportunisticEncryption`<sup>Required</sup> <a name="OpportunisticEncryption" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.opportunisticEncryption"></a>

```go
func OpportunisticEncryption() *string
```

- *Type:* *string

---

##### `OpportunisticOnion`<sup>Required</sup> <a name="OpportunisticOnion" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.opportunisticOnion"></a>

```go
func OpportunisticOnion() *string
```

- *Type:* *string

---

##### `OrangeToOrange`<sup>Required</sup> <a name="OrangeToOrange" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.orangeToOrange"></a>

```go
func OrangeToOrange() *string
```

- *Type:* *string

---

##### `OriginErrorPagePassThru`<sup>Required</sup> <a name="OriginErrorPagePassThru" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.originErrorPagePassThru"></a>

```go
func OriginErrorPagePassThru() *string
```

- *Type:* *string

---

##### `OriginMaxHttpVersion`<sup>Required</sup> <a name="OriginMaxHttpVersion" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.originMaxHttpVersion"></a>

```go
func OriginMaxHttpVersion() *string
```

- *Type:* *string

---

##### `Polish`<sup>Required</sup> <a name="Polish" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.polish"></a>

```go
func Polish() *string
```

- *Type:* *string

---

##### `PrefetchPreload`<sup>Required</sup> <a name="PrefetchPreload" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.prefetchPreload"></a>

```go
func PrefetchPreload() *string
```

- *Type:* *string

---

##### `PrivacyPass`<sup>Required</sup> <a name="PrivacyPass" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.privacyPass"></a>

```go
func PrivacyPass() *string
```

- *Type:* *string

---

##### `ProxyReadTimeout`<sup>Required</sup> <a name="ProxyReadTimeout" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.proxyReadTimeout"></a>

```go
func ProxyReadTimeout() *string
```

- *Type:* *string

---

##### `PseudoIpv4`<sup>Required</sup> <a name="PseudoIpv4" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.pseudoIpv4"></a>

```go
func PseudoIpv4() *string
```

- *Type:* *string

---

##### `ResponseBuffering`<sup>Required</sup> <a name="ResponseBuffering" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.responseBuffering"></a>

```go
func ResponseBuffering() *string
```

- *Type:* *string

---

##### `RocketLoader`<sup>Required</sup> <a name="RocketLoader" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.rocketLoader"></a>

```go
func RocketLoader() *string
```

- *Type:* *string

---

##### `SecurityLevel`<sup>Required</sup> <a name="SecurityLevel" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.securityLevel"></a>

```go
func SecurityLevel() *string
```

- *Type:* *string

---

##### `ServerSideExclude`<sup>Required</sup> <a name="ServerSideExclude" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.serverSideExclude"></a>

```go
func ServerSideExclude() *string
```

- *Type:* *string

---

##### `SortQueryStringForCache`<sup>Required</sup> <a name="SortQueryStringForCache" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.sortQueryStringForCache"></a>

```go
func SortQueryStringForCache() *string
```

- *Type:* *string

---

##### `Ssl`<sup>Required</sup> <a name="Ssl" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.ssl"></a>

```go
func Ssl() *string
```

- *Type:* *string

---

##### `Tls12Only`<sup>Required</sup> <a name="Tls12Only" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.tls12Only"></a>

```go
func Tls12Only() *string
```

- *Type:* *string

---

##### `Tls13`<sup>Required</sup> <a name="Tls13" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.tls13"></a>

```go
func Tls13() *string
```

- *Type:* *string

---

##### `TlsClientAuth`<sup>Required</sup> <a name="TlsClientAuth" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.tlsClientAuth"></a>

```go
func TlsClientAuth() *string
```

- *Type:* *string

---

##### `TrueClientIpHeader`<sup>Required</sup> <a name="TrueClientIpHeader" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.trueClientIpHeader"></a>

```go
func TrueClientIpHeader() *string
```

- *Type:* *string

---

##### `UniversalSsl`<sup>Required</sup> <a name="UniversalSsl" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.universalSsl"></a>

```go
func UniversalSsl() *string
```

- *Type:* *string

---

##### `VisitorIp`<sup>Required</sup> <a name="VisitorIp" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.visitorIp"></a>

```go
func VisitorIp() *string
```

- *Type:* *string

---

##### `Waf`<sup>Required</sup> <a name="Waf" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.waf"></a>

```go
func Waf() *string
```

- *Type:* *string

---

##### `Webp`<sup>Required</sup> <a name="Webp" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.webp"></a>

```go
func Webp() *string
```

- *Type:* *string

---

##### `Websockets`<sup>Required</sup> <a name="Websockets" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.websockets"></a>

```go
func Websockets() *string
```

- *Type:* *string

---

##### `ZeroRtt`<sup>Required</sup> <a name="ZeroRtt" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.zeroRtt"></a>

```go
func ZeroRtt() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() ZoneSettingsOverrideSettings
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings">ZoneSettingsOverrideSettings</a>

---


### ZoneSettingsOverrideSettingsSecurityHeaderOutputReference <a name="ZoneSettingsOverrideSettingsSecurityHeaderOutputReference" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v11/zonesettingsoverride"

zonesettingsoverride.NewZoneSettingsOverrideSettingsSecurityHeaderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ZoneSettingsOverrideSettingsSecurityHeaderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.resetIncludeSubdomains">ResetIncludeSubdomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.resetMaxAge">ResetMaxAge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.resetNosniff">ResetNosniff</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.resetPreload">ResetPreload</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetIncludeSubdomains` <a name="ResetIncludeSubdomains" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.resetIncludeSubdomains"></a>

```go
func ResetIncludeSubdomains()
```

##### `ResetMaxAge` <a name="ResetMaxAge" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.resetMaxAge"></a>

```go
func ResetMaxAge()
```

##### `ResetNosniff` <a name="ResetNosniff" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.resetNosniff"></a>

```go
func ResetNosniff()
```

##### `ResetPreload` <a name="ResetPreload" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.resetPreload"></a>

```go
func ResetPreload()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.property.includeSubdomainsInput">IncludeSubdomainsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.property.maxAgeInput">MaxAgeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.property.nosniffInput">NosniffInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.property.preloadInput">PreloadInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.property.includeSubdomains">IncludeSubdomains</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.property.maxAge">MaxAge</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.property.nosniff">Nosniff</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.property.preload">Preload</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeader">ZoneSettingsOverrideSettingsSecurityHeader</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IncludeSubdomainsInput`<sup>Optional</sup> <a name="IncludeSubdomainsInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.property.includeSubdomainsInput"></a>

```go
func IncludeSubdomainsInput() interface{}
```

- *Type:* interface{}

---

##### `MaxAgeInput`<sup>Optional</sup> <a name="MaxAgeInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.property.maxAgeInput"></a>

```go
func MaxAgeInput() *f64
```

- *Type:* *f64

---

##### `NosniffInput`<sup>Optional</sup> <a name="NosniffInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.property.nosniffInput"></a>

```go
func NosniffInput() interface{}
```

- *Type:* interface{}

---

##### `PreloadInput`<sup>Optional</sup> <a name="PreloadInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.property.preloadInput"></a>

```go
func PreloadInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `IncludeSubdomains`<sup>Required</sup> <a name="IncludeSubdomains" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.property.includeSubdomains"></a>

```go
func IncludeSubdomains() interface{}
```

- *Type:* interface{}

---

##### `MaxAge`<sup>Required</sup> <a name="MaxAge" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.property.maxAge"></a>

```go
func MaxAge() *f64
```

- *Type:* *f64

---

##### `Nosniff`<sup>Required</sup> <a name="Nosniff" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.property.nosniff"></a>

```go
func Nosniff() interface{}
```

- *Type:* interface{}

---

##### `Preload`<sup>Required</sup> <a name="Preload" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.property.preload"></a>

```go
func Preload() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.property.internalValue"></a>

```go
func InternalValue() ZoneSettingsOverrideSettingsSecurityHeader
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeader">ZoneSettingsOverrideSettingsSecurityHeader</a>

---



