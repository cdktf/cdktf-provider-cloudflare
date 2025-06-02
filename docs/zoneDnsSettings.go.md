# `zoneDnsSettings` Submodule <a name="`zoneDnsSettings` Submodule" id="@cdktf/provider-cloudflare.zoneDnsSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZoneDnsSettings <a name="ZoneDnsSettings" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zone_dns_settings cloudflare_zone_dns_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zonednssettings"

zonednssettings.NewZoneDnsSettings(scope Construct, id *string, config ZoneDnsSettingsConfig) ZoneDnsSettings
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig">ZoneDnsSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig">ZoneDnsSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.putInternalDns">PutInternalDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.putNameservers">PutNameservers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.putSoa">PutSoa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.resetFlattenAllCnames">ResetFlattenAllCnames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.resetFoundationDns">ResetFoundationDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.resetInternalDns">ResetInternalDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.resetMultiProvider">ResetMultiProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.resetNameservers">ResetNameservers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.resetNsTtl">ResetNsTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.resetSecondaryOverrides">ResetSecondaryOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.resetSoa">ResetSoa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.resetZoneMode">ResetZoneMode</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutInternalDns` <a name="PutInternalDns" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.putInternalDns"></a>

```go
func PutInternalDns(value ZoneDnsSettingsInternalDns)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.putInternalDns.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDns">ZoneDnsSettingsInternalDns</a>

---

##### `PutNameservers` <a name="PutNameservers" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.putNameservers"></a>

```go
func PutNameservers(value ZoneDnsSettingsNameservers)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.putNameservers.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameservers">ZoneDnsSettingsNameservers</a>

---

##### `PutSoa` <a name="PutSoa" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.putSoa"></a>

```go
func PutSoa(value ZoneDnsSettingsSoa)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.putSoa.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoa">ZoneDnsSettingsSoa</a>

---

##### `ResetFlattenAllCnames` <a name="ResetFlattenAllCnames" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.resetFlattenAllCnames"></a>

```go
func ResetFlattenAllCnames()
```

##### `ResetFoundationDns` <a name="ResetFoundationDns" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.resetFoundationDns"></a>

```go
func ResetFoundationDns()
```

##### `ResetInternalDns` <a name="ResetInternalDns" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.resetInternalDns"></a>

```go
func ResetInternalDns()
```

##### `ResetMultiProvider` <a name="ResetMultiProvider" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.resetMultiProvider"></a>

```go
func ResetMultiProvider()
```

##### `ResetNameservers` <a name="ResetNameservers" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.resetNameservers"></a>

```go
func ResetNameservers()
```

##### `ResetNsTtl` <a name="ResetNsTtl" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.resetNsTtl"></a>

```go
func ResetNsTtl()
```

##### `ResetSecondaryOverrides` <a name="ResetSecondaryOverrides" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.resetSecondaryOverrides"></a>

```go
func ResetSecondaryOverrides()
```

##### `ResetSoa` <a name="ResetSoa" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.resetSoa"></a>

```go
func ResetSoa()
```

##### `ResetZoneMode` <a name="ResetZoneMode" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.resetZoneMode"></a>

```go
func ResetZoneMode()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ZoneDnsSettings resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zonednssettings"

zonednssettings.ZoneDnsSettings_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zonednssettings"

zonednssettings.ZoneDnsSettings_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zonednssettings"

zonednssettings.ZoneDnsSettings_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zonednssettings"

zonednssettings.ZoneDnsSettings_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ZoneDnsSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ZoneDnsSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ZoneDnsSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zone_dns_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ZoneDnsSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.internalDns">InternalDns</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference">ZoneDnsSettingsInternalDnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.nameservers">Nameservers</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference">ZoneDnsSettingsNameserversOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.soa">Soa</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference">ZoneDnsSettingsSoaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.flattenAllCnamesInput">FlattenAllCnamesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.foundationDnsInput">FoundationDnsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.internalDnsInput">InternalDnsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.multiProviderInput">MultiProviderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.nameserversInput">NameserversInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.nsTtlInput">NsTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.secondaryOverridesInput">SecondaryOverridesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.soaInput">SoaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.zoneIdInput">ZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.zoneModeInput">ZoneModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.flattenAllCnames">FlattenAllCnames</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.foundationDns">FoundationDns</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.multiProvider">MultiProvider</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.nsTtl">NsTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.secondaryOverrides">SecondaryOverrides</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.zoneMode">ZoneMode</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `InternalDns`<sup>Required</sup> <a name="InternalDns" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.internalDns"></a>

```go
func InternalDns() ZoneDnsSettingsInternalDnsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference">ZoneDnsSettingsInternalDnsOutputReference</a>

---

##### `Nameservers`<sup>Required</sup> <a name="Nameservers" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.nameservers"></a>

```go
func Nameservers() ZoneDnsSettingsNameserversOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference">ZoneDnsSettingsNameserversOutputReference</a>

---

##### `Soa`<sup>Required</sup> <a name="Soa" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.soa"></a>

```go
func Soa() ZoneDnsSettingsSoaOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference">ZoneDnsSettingsSoaOutputReference</a>

---

##### `FlattenAllCnamesInput`<sup>Optional</sup> <a name="FlattenAllCnamesInput" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.flattenAllCnamesInput"></a>

```go
func FlattenAllCnamesInput() interface{}
```

- *Type:* interface{}

---

##### `FoundationDnsInput`<sup>Optional</sup> <a name="FoundationDnsInput" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.foundationDnsInput"></a>

```go
func FoundationDnsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalDnsInput`<sup>Optional</sup> <a name="InternalDnsInput" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.internalDnsInput"></a>

```go
func InternalDnsInput() interface{}
```

- *Type:* interface{}

---

##### `MultiProviderInput`<sup>Optional</sup> <a name="MultiProviderInput" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.multiProviderInput"></a>

```go
func MultiProviderInput() interface{}
```

- *Type:* interface{}

---

##### `NameserversInput`<sup>Optional</sup> <a name="NameserversInput" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.nameserversInput"></a>

```go
func NameserversInput() interface{}
```

- *Type:* interface{}

---

##### `NsTtlInput`<sup>Optional</sup> <a name="NsTtlInput" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.nsTtlInput"></a>

```go
func NsTtlInput() *f64
```

- *Type:* *f64

---

##### `SecondaryOverridesInput`<sup>Optional</sup> <a name="SecondaryOverridesInput" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.secondaryOverridesInput"></a>

```go
func SecondaryOverridesInput() interface{}
```

- *Type:* interface{}

---

##### `SoaInput`<sup>Optional</sup> <a name="SoaInput" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.soaInput"></a>

```go
func SoaInput() interface{}
```

- *Type:* interface{}

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.zoneIdInput"></a>

```go
func ZoneIdInput() *string
```

- *Type:* *string

---

##### `ZoneModeInput`<sup>Optional</sup> <a name="ZoneModeInput" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.zoneModeInput"></a>

```go
func ZoneModeInput() *string
```

- *Type:* *string

---

##### `FlattenAllCnames`<sup>Required</sup> <a name="FlattenAllCnames" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.flattenAllCnames"></a>

```go
func FlattenAllCnames() interface{}
```

- *Type:* interface{}

---

##### `FoundationDns`<sup>Required</sup> <a name="FoundationDns" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.foundationDns"></a>

```go
func FoundationDns() interface{}
```

- *Type:* interface{}

---

##### `MultiProvider`<sup>Required</sup> <a name="MultiProvider" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.multiProvider"></a>

```go
func MultiProvider() interface{}
```

- *Type:* interface{}

---

##### `NsTtl`<sup>Required</sup> <a name="NsTtl" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.nsTtl"></a>

```go
func NsTtl() *f64
```

- *Type:* *f64

---

##### `SecondaryOverrides`<sup>Required</sup> <a name="SecondaryOverrides" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.secondaryOverrides"></a>

```go
func SecondaryOverrides() interface{}
```

- *Type:* interface{}

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

##### `ZoneMode`<sup>Required</sup> <a name="ZoneMode" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.zoneMode"></a>

```go
func ZoneMode() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ZoneDnsSettingsConfig <a name="ZoneDnsSettingsConfig" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zonednssettings"

&zonednssettings.ZoneDnsSettingsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ZoneId: *string,
	FlattenAllCnames: interface{},
	FoundationDns: interface{},
	InternalDns: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13.zoneDnsSettings.ZoneDnsSettingsInternalDns,
	MultiProvider: interface{},
	Nameservers: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13.zoneDnsSettings.ZoneDnsSettingsNameservers,
	NsTtl: *f64,
	SecondaryOverrides: interface{},
	Soa: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13.zoneDnsSettings.ZoneDnsSettingsSoa,
	ZoneMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.zoneId">ZoneId</a></code> | <code>*string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.flattenAllCnames">FlattenAllCnames</a></code> | <code>interface{}</code> | Whether to flatten all CNAME records in the zone. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.foundationDns">FoundationDns</a></code> | <code>interface{}</code> | Whether to enable Foundation DNS Advanced Nameservers on the zone. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.internalDns">InternalDns</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDns">ZoneDnsSettingsInternalDns</a></code> | Settings for this internal zone. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.multiProvider">MultiProvider</a></code> | <code>interface{}</code> | Whether to enable multi-provider DNS, which causes Cloudflare to activate the zone even when non-Cloudflare NS records exist, and to respect NS records at the zone apex during outbound zone transfers. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.nameservers">Nameservers</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameservers">ZoneDnsSettingsNameservers</a></code> | Settings determining the nameservers through which the zone should be available. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.nsTtl">NsTtl</a></code> | <code>*f64</code> | The time to live (TTL) of the zone's nameserver (NS) records. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.secondaryOverrides">SecondaryOverrides</a></code> | <code>interface{}</code> | Allows a Secondary DNS zone to use (proxied) override records and CNAME flattening at the zone apex. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.soa">Soa</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoa">ZoneDnsSettingsSoa</a></code> | Components of the zone's SOA record. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.zoneMode">ZoneMode</a></code> | <code>*string</code> | Whether the zone mode is a regular or CDN/DNS only zone. Available values: "standard", "cdn_only", "dns_only". |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.zoneId"></a>

```go
ZoneId *string
```

- *Type:* *string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zone_dns_settings#zone_id ZoneDnsSettings#zone_id}

---

##### `FlattenAllCnames`<sup>Optional</sup> <a name="FlattenAllCnames" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.flattenAllCnames"></a>

```go
FlattenAllCnames interface{}
```

- *Type:* interface{}

Whether to flatten all CNAME records in the zone.

Note that, due to DNS limitations, a CNAME record at the zone apex will always be flattened.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zone_dns_settings#flatten_all_cnames ZoneDnsSettings#flatten_all_cnames}

---

##### `FoundationDns`<sup>Optional</sup> <a name="FoundationDns" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.foundationDns"></a>

```go
FoundationDns interface{}
```

- *Type:* interface{}

Whether to enable Foundation DNS Advanced Nameservers on the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zone_dns_settings#foundation_dns ZoneDnsSettings#foundation_dns}

---

##### `InternalDns`<sup>Optional</sup> <a name="InternalDns" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.internalDns"></a>

```go
InternalDns ZoneDnsSettingsInternalDns
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDns">ZoneDnsSettingsInternalDns</a>

Settings for this internal zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zone_dns_settings#internal_dns ZoneDnsSettings#internal_dns}

---

##### `MultiProvider`<sup>Optional</sup> <a name="MultiProvider" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.multiProvider"></a>

```go
MultiProvider interface{}
```

- *Type:* interface{}

Whether to enable multi-provider DNS, which causes Cloudflare to activate the zone even when non-Cloudflare NS records exist, and to respect NS records at the zone apex during outbound zone transfers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zone_dns_settings#multi_provider ZoneDnsSettings#multi_provider}

---

##### `Nameservers`<sup>Optional</sup> <a name="Nameservers" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.nameservers"></a>

```go
Nameservers ZoneDnsSettingsNameservers
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameservers">ZoneDnsSettingsNameservers</a>

Settings determining the nameservers through which the zone should be available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zone_dns_settings#nameservers ZoneDnsSettings#nameservers}

---

##### `NsTtl`<sup>Optional</sup> <a name="NsTtl" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.nsTtl"></a>

```go
NsTtl *f64
```

- *Type:* *f64

The time to live (TTL) of the zone's nameserver (NS) records.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zone_dns_settings#ns_ttl ZoneDnsSettings#ns_ttl}

---

##### `SecondaryOverrides`<sup>Optional</sup> <a name="SecondaryOverrides" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.secondaryOverrides"></a>

```go
SecondaryOverrides interface{}
```

- *Type:* interface{}

Allows a Secondary DNS zone to use (proxied) override records and CNAME flattening at the zone apex.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zone_dns_settings#secondary_overrides ZoneDnsSettings#secondary_overrides}

---

##### `Soa`<sup>Optional</sup> <a name="Soa" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.soa"></a>

```go
Soa ZoneDnsSettingsSoa
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoa">ZoneDnsSettingsSoa</a>

Components of the zone's SOA record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zone_dns_settings#soa ZoneDnsSettings#soa}

---

##### `ZoneMode`<sup>Optional</sup> <a name="ZoneMode" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.zoneMode"></a>

```go
ZoneMode *string
```

- *Type:* *string

Whether the zone mode is a regular or CDN/DNS only zone. Available values: "standard", "cdn_only", "dns_only".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zone_dns_settings#zone_mode ZoneDnsSettings#zone_mode}

---

### ZoneDnsSettingsInternalDns <a name="ZoneDnsSettingsInternalDns" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDns.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zonednssettings"

&zonednssettings.ZoneDnsSettingsInternalDns {
	ReferenceZoneId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDns.property.referenceZoneId">ReferenceZoneId</a></code> | <code>*string</code> | The ID of the zone to fallback to. |

---

##### `ReferenceZoneId`<sup>Optional</sup> <a name="ReferenceZoneId" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDns.property.referenceZoneId"></a>

```go
ReferenceZoneId *string
```

- *Type:* *string

The ID of the zone to fallback to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zone_dns_settings#reference_zone_id ZoneDnsSettings#reference_zone_id}

---

### ZoneDnsSettingsNameservers <a name="ZoneDnsSettingsNameservers" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameservers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameservers.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zonednssettings"

&zonednssettings.ZoneDnsSettingsNameservers {
	Type: *string,
	NsSet: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameservers.property.type">Type</a></code> | <code>*string</code> | Nameserver type Available values: "cloudflare.standard", "custom.account", "custom.tenant", "custom.zone". |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameservers.property.nsSet">NsSet</a></code> | <code>*f64</code> | Configured nameserver set to be used for this zone. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameservers.property.type"></a>

```go
Type *string
```

- *Type:* *string

Nameserver type Available values: "cloudflare.standard", "custom.account", "custom.tenant", "custom.zone".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zone_dns_settings#type ZoneDnsSettings#type}

---

##### `NsSet`<sup>Optional</sup> <a name="NsSet" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameservers.property.nsSet"></a>

```go
NsSet *f64
```

- *Type:* *f64

Configured nameserver set to be used for this zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zone_dns_settings#ns_set ZoneDnsSettings#ns_set}

---

### ZoneDnsSettingsSoa <a name="ZoneDnsSettingsSoa" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoa"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoa.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zonednssettings"

&zonednssettings.ZoneDnsSettingsSoa {
	Expire: *f64,
	MinTtl: *f64,
	Mname: *string,
	Refresh: *f64,
	Retry: *f64,
	Rname: *string,
	Ttl: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoa.property.expire">Expire</a></code> | <code>*f64</code> | Time in seconds of being unable to query the primary server after which secondary servers should stop serving the zone. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoa.property.minTtl">MinTtl</a></code> | <code>*f64</code> | The time to live (TTL) for negative caching of records within the zone. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoa.property.mname">Mname</a></code> | <code>*string</code> | The primary nameserver, which may be used for outbound zone transfers. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoa.property.refresh">Refresh</a></code> | <code>*f64</code> | Time in seconds after which secondary servers should re-check the SOA record to see if the zone has been updated. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoa.property.retry">Retry</a></code> | <code>*f64</code> | Time in seconds after which secondary servers should retry queries after the primary server was unresponsive. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoa.property.rname">Rname</a></code> | <code>*string</code> | The email address of the zone administrator, with the first label representing the local part of the email address. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoa.property.ttl">Ttl</a></code> | <code>*f64</code> | The time to live (TTL) of the SOA record itself. |

---

##### `Expire`<sup>Required</sup> <a name="Expire" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoa.property.expire"></a>

```go
Expire *f64
```

- *Type:* *f64

Time in seconds of being unable to query the primary server after which secondary servers should stop serving the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zone_dns_settings#expire ZoneDnsSettings#expire}

---

##### `MinTtl`<sup>Required</sup> <a name="MinTtl" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoa.property.minTtl"></a>

```go
MinTtl *f64
```

- *Type:* *f64

The time to live (TTL) for negative caching of records within the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zone_dns_settings#min_ttl ZoneDnsSettings#min_ttl}

---

##### `Mname`<sup>Required</sup> <a name="Mname" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoa.property.mname"></a>

```go
Mname *string
```

- *Type:* *string

The primary nameserver, which may be used for outbound zone transfers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zone_dns_settings#mname ZoneDnsSettings#mname}

---

##### `Refresh`<sup>Required</sup> <a name="Refresh" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoa.property.refresh"></a>

```go
Refresh *f64
```

- *Type:* *f64

Time in seconds after which secondary servers should re-check the SOA record to see if the zone has been updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zone_dns_settings#refresh ZoneDnsSettings#refresh}

---

##### `Retry`<sup>Required</sup> <a name="Retry" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoa.property.retry"></a>

```go
Retry *f64
```

- *Type:* *f64

Time in seconds after which secondary servers should retry queries after the primary server was unresponsive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zone_dns_settings#retry ZoneDnsSettings#retry}

---

##### `Rname`<sup>Required</sup> <a name="Rname" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoa.property.rname"></a>

```go
Rname *string
```

- *Type:* *string

The email address of the zone administrator, with the first label representing the local part of the email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zone_dns_settings#rname ZoneDnsSettings#rname}

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoa.property.ttl"></a>

```go
Ttl *f64
```

- *Type:* *f64

The time to live (TTL) of the SOA record itself.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zone_dns_settings#ttl ZoneDnsSettings#ttl}

---

## Classes <a name="Classes" id="Classes"></a>

### ZoneDnsSettingsInternalDnsOutputReference <a name="ZoneDnsSettingsInternalDnsOutputReference" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zonednssettings"

zonednssettings.NewZoneDnsSettingsInternalDnsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ZoneDnsSettingsInternalDnsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.resetReferenceZoneId">ResetReferenceZoneId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetReferenceZoneId` <a name="ResetReferenceZoneId" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.resetReferenceZoneId"></a>

```go
func ResetReferenceZoneId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.property.referenceZoneIdInput">ReferenceZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.property.referenceZoneId">ReferenceZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReferenceZoneIdInput`<sup>Optional</sup> <a name="ReferenceZoneIdInput" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.property.referenceZoneIdInput"></a>

```go
func ReferenceZoneIdInput() *string
```

- *Type:* *string

---

##### `ReferenceZoneId`<sup>Required</sup> <a name="ReferenceZoneId" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.property.referenceZoneId"></a>

```go
func ReferenceZoneId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZoneDnsSettingsNameserversOutputReference <a name="ZoneDnsSettingsNameserversOutputReference" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zonednssettings"

zonednssettings.NewZoneDnsSettingsNameserversOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ZoneDnsSettingsNameserversOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.resetNsSet">ResetNsSet</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNsSet` <a name="ResetNsSet" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.resetNsSet"></a>

```go
func ResetNsSet()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.property.nsSetInput">NsSetInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.property.nsSet">NsSet</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NsSetInput`<sup>Optional</sup> <a name="NsSetInput" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.property.nsSetInput"></a>

```go
func NsSetInput() *f64
```

- *Type:* *f64

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `NsSet`<sup>Required</sup> <a name="NsSet" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.property.nsSet"></a>

```go
func NsSet() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZoneDnsSettingsSoaOutputReference <a name="ZoneDnsSettingsSoaOutputReference" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zonednssettings"

zonednssettings.NewZoneDnsSettingsSoaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ZoneDnsSettingsSoaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.expireInput">ExpireInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.minTtlInput">MinTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.mnameInput">MnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.refreshInput">RefreshInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.retryInput">RetryInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.rnameInput">RnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.ttlInput">TtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.expire">Expire</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.minTtl">MinTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.mname">Mname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.refresh">Refresh</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.retry">Retry</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.rname">Rname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.ttl">Ttl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExpireInput`<sup>Optional</sup> <a name="ExpireInput" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.expireInput"></a>

```go
func ExpireInput() *f64
```

- *Type:* *f64

---

##### `MinTtlInput`<sup>Optional</sup> <a name="MinTtlInput" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.minTtlInput"></a>

```go
func MinTtlInput() *f64
```

- *Type:* *f64

---

##### `MnameInput`<sup>Optional</sup> <a name="MnameInput" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.mnameInput"></a>

```go
func MnameInput() *string
```

- *Type:* *string

---

##### `RefreshInput`<sup>Optional</sup> <a name="RefreshInput" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.refreshInput"></a>

```go
func RefreshInput() *f64
```

- *Type:* *f64

---

##### `RetryInput`<sup>Optional</sup> <a name="RetryInput" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.retryInput"></a>

```go
func RetryInput() *f64
```

- *Type:* *f64

---

##### `RnameInput`<sup>Optional</sup> <a name="RnameInput" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.rnameInput"></a>

```go
func RnameInput() *string
```

- *Type:* *string

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.ttlInput"></a>

```go
func TtlInput() *f64
```

- *Type:* *f64

---

##### `Expire`<sup>Required</sup> <a name="Expire" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.expire"></a>

```go
func Expire() *f64
```

- *Type:* *f64

---

##### `MinTtl`<sup>Required</sup> <a name="MinTtl" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.minTtl"></a>

```go
func MinTtl() *f64
```

- *Type:* *f64

---

##### `Mname`<sup>Required</sup> <a name="Mname" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.mname"></a>

```go
func Mname() *string
```

- *Type:* *string

---

##### `Refresh`<sup>Required</sup> <a name="Refresh" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.refresh"></a>

```go
func Refresh() *f64
```

- *Type:* *f64

---

##### `Retry`<sup>Required</sup> <a name="Retry" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.retry"></a>

```go
func Retry() *f64
```

- *Type:* *f64

---

##### `Rname`<sup>Required</sup> <a name="Rname" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.rname"></a>

```go
func Rname() *string
```

- *Type:* *string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.ttl"></a>

```go
func Ttl() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



