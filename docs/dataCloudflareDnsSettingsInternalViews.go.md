# `dataCloudflareDnsSettingsInternalViews` Submodule <a name="`dataCloudflareDnsSettingsInternalViews` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareDnsSettingsInternalViews <a name="DataCloudflareDnsSettingsInternalViews" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings_internal_views cloudflare_dns_settings_internal_views}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarednssettingsinternalviews"

datacloudflarednssettingsinternalviews.NewDataCloudflareDnsSettingsInternalViews(scope Construct, id *string, config DataCloudflareDnsSettingsInternalViewsConfig) DataCloudflareDnsSettingsInternalViews
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsConfig">DataCloudflareDnsSettingsInternalViewsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsConfig">DataCloudflareDnsSettingsInternalViewsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.putName">PutName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.resetDirection">ResetDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.resetMatch">ResetMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.resetMaxItems">ResetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.resetOrder">ResetOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.resetZoneId">ResetZoneId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.resetZoneName">ResetZoneName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutName` <a name="PutName" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.putName"></a>

```go
func PutName(value DataCloudflareDnsSettingsInternalViewsName)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.putName.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsName">DataCloudflareDnsSettingsInternalViewsName</a>

---

##### `ResetDirection` <a name="ResetDirection" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.resetDirection"></a>

```go
func ResetDirection()
```

##### `ResetMatch` <a name="ResetMatch" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.resetMatch"></a>

```go
func ResetMatch()
```

##### `ResetMaxItems` <a name="ResetMaxItems" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.resetMaxItems"></a>

```go
func ResetMaxItems()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.resetName"></a>

```go
func ResetName()
```

##### `ResetOrder` <a name="ResetOrder" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.resetOrder"></a>

```go
func ResetOrder()
```

##### `ResetZoneId` <a name="ResetZoneId" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.resetZoneId"></a>

```go
func ResetZoneId()
```

##### `ResetZoneName` <a name="ResetZoneName" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.resetZoneName"></a>

```go
func ResetZoneName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareDnsSettingsInternalViews resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarednssettingsinternalviews"

datacloudflarednssettingsinternalviews.DataCloudflareDnsSettingsInternalViews_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarednssettingsinternalviews"

datacloudflarednssettingsinternalviews.DataCloudflareDnsSettingsInternalViews_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarednssettingsinternalviews"

datacloudflarednssettingsinternalviews.DataCloudflareDnsSettingsInternalViews_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarednssettingsinternalviews"

datacloudflarednssettingsinternalviews.DataCloudflareDnsSettingsInternalViews_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataCloudflareDnsSettingsInternalViews resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareDnsSettingsInternalViews to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareDnsSettingsInternalViews that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings_internal_views#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareDnsSettingsInternalViews to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.name">Name</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference">DataCloudflareDnsSettingsInternalViewsNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.result">Result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultList">DataCloudflareDnsSettingsInternalViewsResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.directionInput">DirectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.matchInput">MatchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.maxItemsInput">MaxItemsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.nameInput">NameInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.orderInput">OrderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.zoneIdInput">ZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.zoneNameInput">ZoneNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.direction">Direction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.match">Match</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.maxItems">MaxItems</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.order">Order</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.zoneName">ZoneName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.name"></a>

```go
func Name() DataCloudflareDnsSettingsInternalViewsNameOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference">DataCloudflareDnsSettingsInternalViewsNameOutputReference</a>

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.result"></a>

```go
func Result() DataCloudflareDnsSettingsInternalViewsResultList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultList">DataCloudflareDnsSettingsInternalViewsResultList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.directionInput"></a>

```go
func DirectionInput() *string
```

- *Type:* *string

---

##### `MatchInput`<sup>Optional</sup> <a name="MatchInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.matchInput"></a>

```go
func MatchInput() *string
```

- *Type:* *string

---

##### `MaxItemsInput`<sup>Optional</sup> <a name="MaxItemsInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.maxItemsInput"></a>

```go
func MaxItemsInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.nameInput"></a>

```go
func NameInput() interface{}
```

- *Type:* interface{}

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.orderInput"></a>

```go
func OrderInput() *string
```

- *Type:* *string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.zoneIdInput"></a>

```go
func ZoneIdInput() *string
```

- *Type:* *string

---

##### `ZoneNameInput`<sup>Optional</sup> <a name="ZoneNameInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.zoneNameInput"></a>

```go
func ZoneNameInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.direction"></a>

```go
func Direction() *string
```

- *Type:* *string

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.match"></a>

```go
func Match() *string
```

- *Type:* *string

---

##### `MaxItems`<sup>Required</sup> <a name="MaxItems" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.maxItems"></a>

```go
func MaxItems() *f64
```

- *Type:* *f64

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.order"></a>

```go
func Order() *string
```

- *Type:* *string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

##### `ZoneName`<sup>Required</sup> <a name="ZoneName" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.zoneName"></a>

```go
func ZoneName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViews.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareDnsSettingsInternalViewsConfig <a name="DataCloudflareDnsSettingsInternalViewsConfig" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarednssettingsinternalviews"

&datacloudflarednssettingsinternalviews.DataCloudflareDnsSettingsInternalViewsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	Direction: *string,
	Match: *string,
	MaxItems: *f64,
	Name: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsName,
	Order: *string,
	ZoneId: *string,
	ZoneName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsConfig.property.direction">Direction</a></code> | <code>*string</code> | Direction to order DNS views in. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsConfig.property.match">Match</a></code> | <code>*string</code> | Whether to match all search requirements or at least one (any). |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsConfig.property.maxItems">MaxItems</a></code> | <code>*f64</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsConfig.property.name">Name</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsName">DataCloudflareDnsSettingsInternalViewsName</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings_internal_views#name DataCloudflareDnsSettingsInternalViews#name}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsConfig.property.order">Order</a></code> | <code>*string</code> | Field to order DNS views by. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsConfig.property.zoneId">ZoneId</a></code> | <code>*string</code> | A zone ID that exists in the zones list for the view. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsConfig.property.zoneName">ZoneName</a></code> | <code>*string</code> | A zone name that exists in the zones list for the view. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings_internal_views#account_id DataCloudflareDnsSettingsInternalViews#account_id}

---

##### `Direction`<sup>Optional</sup> <a name="Direction" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsConfig.property.direction"></a>

```go
Direction *string
```

- *Type:* *string

Direction to order DNS views in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings_internal_views#direction DataCloudflareDnsSettingsInternalViews#direction}

---

##### `Match`<sup>Optional</sup> <a name="Match" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsConfig.property.match"></a>

```go
Match *string
```

- *Type:* *string

Whether to match all search requirements or at least one (any).

If set to `all`, acts like a logical AND between filters. If set to `any`, acts like a logical OR instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings_internal_views#match DataCloudflareDnsSettingsInternalViews#match}

---

##### `MaxItems`<sup>Optional</sup> <a name="MaxItems" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsConfig.property.maxItems"></a>

```go
MaxItems *f64
```

- *Type:* *f64

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings_internal_views#max_items DataCloudflareDnsSettingsInternalViews#max_items}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsConfig.property.name"></a>

```go
Name DataCloudflareDnsSettingsInternalViewsName
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsName">DataCloudflareDnsSettingsInternalViewsName</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings_internal_views#name DataCloudflareDnsSettingsInternalViews#name}.

---

##### `Order`<sup>Optional</sup> <a name="Order" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsConfig.property.order"></a>

```go
Order *string
```

- *Type:* *string

Field to order DNS views by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings_internal_views#order DataCloudflareDnsSettingsInternalViews#order}

---

##### `ZoneId`<sup>Optional</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsConfig.property.zoneId"></a>

```go
ZoneId *string
```

- *Type:* *string

A zone ID that exists in the zones list for the view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings_internal_views#zone_id DataCloudflareDnsSettingsInternalViews#zone_id}

---

##### `ZoneName`<sup>Optional</sup> <a name="ZoneName" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsConfig.property.zoneName"></a>

```go
ZoneName *string
```

- *Type:* *string

A zone name that exists in the zones list for the view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings_internal_views#zone_name DataCloudflareDnsSettingsInternalViews#zone_name}

---

### DataCloudflareDnsSettingsInternalViewsName <a name="DataCloudflareDnsSettingsInternalViewsName" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsName"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsName.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarednssettingsinternalviews"

&datacloudflarednssettingsinternalviews.DataCloudflareDnsSettingsInternalViewsName {
	Contains: *string,
	Endswith: *string,
	Exact: *string,
	Startswith: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsName.property.contains">Contains</a></code> | <code>*string</code> | Substring of the DNS view name. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsName.property.endswith">Endswith</a></code> | <code>*string</code> | Suffix of the DNS view name. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsName.property.exact">Exact</a></code> | <code>*string</code> | Exact value of the DNS view name. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsName.property.startswith">Startswith</a></code> | <code>*string</code> | Prefix of the DNS view name. |

---

##### `Contains`<sup>Optional</sup> <a name="Contains" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsName.property.contains"></a>

```go
Contains *string
```

- *Type:* *string

Substring of the DNS view name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings_internal_views#contains DataCloudflareDnsSettingsInternalViews#contains}

---

##### `Endswith`<sup>Optional</sup> <a name="Endswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsName.property.endswith"></a>

```go
Endswith *string
```

- *Type:* *string

Suffix of the DNS view name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings_internal_views#endswith DataCloudflareDnsSettingsInternalViews#endswith}

---

##### `Exact`<sup>Optional</sup> <a name="Exact" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsName.property.exact"></a>

```go
Exact *string
```

- *Type:* *string

Exact value of the DNS view name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings_internal_views#exact DataCloudflareDnsSettingsInternalViews#exact}

---

##### `Startswith`<sup>Optional</sup> <a name="Startswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsName.property.startswith"></a>

```go
Startswith *string
```

- *Type:* *string

Prefix of the DNS view name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings_internal_views#startswith DataCloudflareDnsSettingsInternalViews#startswith}

---

### DataCloudflareDnsSettingsInternalViewsResult <a name="DataCloudflareDnsSettingsInternalViewsResult" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResult.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarednssettingsinternalviews"

&datacloudflarednssettingsinternalviews.DataCloudflareDnsSettingsInternalViewsResult {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareDnsSettingsInternalViewsNameOutputReference <a name="DataCloudflareDnsSettingsInternalViewsNameOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarednssettingsinternalviews"

datacloudflarednssettingsinternalviews.NewDataCloudflareDnsSettingsInternalViewsNameOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareDnsSettingsInternalViewsNameOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.resetContains">ResetContains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.resetEndswith">ResetEndswith</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.resetExact">ResetExact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.resetStartswith">ResetStartswith</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContains` <a name="ResetContains" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.resetContains"></a>

```go
func ResetContains()
```

##### `ResetEndswith` <a name="ResetEndswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.resetEndswith"></a>

```go
func ResetEndswith()
```

##### `ResetExact` <a name="ResetExact" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.resetExact"></a>

```go
func ResetExact()
```

##### `ResetStartswith` <a name="ResetStartswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.resetStartswith"></a>

```go
func ResetStartswith()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.property.containsInput">ContainsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.property.endswithInput">EndswithInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.property.exactInput">ExactInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.property.startswithInput">StartswithInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.property.contains">Contains</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.property.endswith">Endswith</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.property.exact">Exact</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.property.startswith">Startswith</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainsInput`<sup>Optional</sup> <a name="ContainsInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.property.containsInput"></a>

```go
func ContainsInput() *string
```

- *Type:* *string

---

##### `EndswithInput`<sup>Optional</sup> <a name="EndswithInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.property.endswithInput"></a>

```go
func EndswithInput() *string
```

- *Type:* *string

---

##### `ExactInput`<sup>Optional</sup> <a name="ExactInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.property.exactInput"></a>

```go
func ExactInput() *string
```

- *Type:* *string

---

##### `StartswithInput`<sup>Optional</sup> <a name="StartswithInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.property.startswithInput"></a>

```go
func StartswithInput() *string
```

- *Type:* *string

---

##### `Contains`<sup>Required</sup> <a name="Contains" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.property.contains"></a>

```go
func Contains() *string
```

- *Type:* *string

---

##### `Endswith`<sup>Required</sup> <a name="Endswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.property.endswith"></a>

```go
func Endswith() *string
```

- *Type:* *string

---

##### `Exact`<sup>Required</sup> <a name="Exact" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.property.exact"></a>

```go
func Exact() *string
```

- *Type:* *string

---

##### `Startswith`<sup>Required</sup> <a name="Startswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.property.startswith"></a>

```go
func Startswith() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsNameOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataCloudflareDnsSettingsInternalViewsResultList <a name="DataCloudflareDnsSettingsInternalViewsResultList" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarednssettingsinternalviews"

datacloudflarednssettingsinternalviews.NewDataCloudflareDnsSettingsInternalViewsResultList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareDnsSettingsInternalViewsResultList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultList.get"></a>

```go
func Get(index *f64) DataCloudflareDnsSettingsInternalViewsResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareDnsSettingsInternalViewsResultOutputReference <a name="DataCloudflareDnsSettingsInternalViewsResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarednssettingsinternalviews"

datacloudflarednssettingsinternalviews.NewDataCloudflareDnsSettingsInternalViewsResultOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareDnsSettingsInternalViewsResultOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.property.createdTime">CreatedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.property.modifiedTime">ModifiedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.property.zones">Zones</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResult">DataCloudflareDnsSettingsInternalViewsResult</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreatedTime`<sup>Required</sup> <a name="CreatedTime" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.property.createdTime"></a>

```go
func CreatedTime() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ModifiedTime`<sup>Required</sup> <a name="ModifiedTime" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.property.modifiedTime"></a>

```go
func ModifiedTime() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Zones`<sup>Required</sup> <a name="Zones" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.property.zones"></a>

```go
func Zones() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResultOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareDnsSettingsInternalViewsResult
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalViews.DataCloudflareDnsSettingsInternalViewsResult">DataCloudflareDnsSettingsInternalViewsResult</a>

---



