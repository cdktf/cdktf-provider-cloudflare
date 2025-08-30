# `dataCloudflareAccountDnsSettingsInternalViews` Submodule <a name="`dataCloudflareAccountDnsSettingsInternalViews` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareAccountDnsSettingsInternalViews <a name="DataCloudflareAccountDnsSettingsInternalViews" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/account_dns_settings_internal_views cloudflare_account_dns_settings_internal_views}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareaccountdnssettingsinternalviews"

datacloudflareaccountdnssettingsinternalviews.NewDataCloudflareAccountDnsSettingsInternalViews(scope Construct, id *string, config DataCloudflareAccountDnsSettingsInternalViewsConfig) DataCloudflareAccountDnsSettingsInternalViews
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig">DataCloudflareAccountDnsSettingsInternalViewsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig">DataCloudflareAccountDnsSettingsInternalViewsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.putName">PutName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.resetDirection">ResetDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.resetMatch">ResetMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.resetMaxItems">ResetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.resetOrder">ResetOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.resetZoneId">ResetZoneId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.resetZoneName">ResetZoneName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutName` <a name="PutName" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.putName"></a>

```go
func PutName(value DataCloudflareAccountDnsSettingsInternalViewsName)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.putName.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsName">DataCloudflareAccountDnsSettingsInternalViewsName</a>

---

##### `ResetDirection` <a name="ResetDirection" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.resetDirection"></a>

```go
func ResetDirection()
```

##### `ResetMatch` <a name="ResetMatch" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.resetMatch"></a>

```go
func ResetMatch()
```

##### `ResetMaxItems` <a name="ResetMaxItems" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.resetMaxItems"></a>

```go
func ResetMaxItems()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.resetName"></a>

```go
func ResetName()
```

##### `ResetOrder` <a name="ResetOrder" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.resetOrder"></a>

```go
func ResetOrder()
```

##### `ResetZoneId` <a name="ResetZoneId" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.resetZoneId"></a>

```go
func ResetZoneId()
```

##### `ResetZoneName` <a name="ResetZoneName" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.resetZoneName"></a>

```go
func ResetZoneName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareAccountDnsSettingsInternalViews resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareaccountdnssettingsinternalviews"

datacloudflareaccountdnssettingsinternalviews.DataCloudflareAccountDnsSettingsInternalViews_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareaccountdnssettingsinternalviews"

datacloudflareaccountdnssettingsinternalviews.DataCloudflareAccountDnsSettingsInternalViews_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareaccountdnssettingsinternalviews"

datacloudflareaccountdnssettingsinternalviews.DataCloudflareAccountDnsSettingsInternalViews_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareaccountdnssettingsinternalviews"

datacloudflareaccountdnssettingsinternalviews.DataCloudflareAccountDnsSettingsInternalViews_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataCloudflareAccountDnsSettingsInternalViews resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareAccountDnsSettingsInternalViews to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareAccountDnsSettingsInternalViews that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/account_dns_settings_internal_views#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareAccountDnsSettingsInternalViews to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.name">Name</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference">DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.result">Result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultList">DataCloudflareAccountDnsSettingsInternalViewsResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.directionInput">DirectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.matchInput">MatchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.maxItemsInput">MaxItemsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.nameInput">NameInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.orderInput">OrderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.zoneIdInput">ZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.zoneNameInput">ZoneNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.direction">Direction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.match">Match</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.maxItems">MaxItems</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.order">Order</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.zoneName">ZoneName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.name"></a>

```go
func Name() DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference">DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference</a>

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.result"></a>

```go
func Result() DataCloudflareAccountDnsSettingsInternalViewsResultList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultList">DataCloudflareAccountDnsSettingsInternalViewsResultList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.directionInput"></a>

```go
func DirectionInput() *string
```

- *Type:* *string

---

##### `MatchInput`<sup>Optional</sup> <a name="MatchInput" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.matchInput"></a>

```go
func MatchInput() *string
```

- *Type:* *string

---

##### `MaxItemsInput`<sup>Optional</sup> <a name="MaxItemsInput" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.maxItemsInput"></a>

```go
func MaxItemsInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.nameInput"></a>

```go
func NameInput() interface{}
```

- *Type:* interface{}

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.orderInput"></a>

```go
func OrderInput() *string
```

- *Type:* *string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.zoneIdInput"></a>

```go
func ZoneIdInput() *string
```

- *Type:* *string

---

##### `ZoneNameInput`<sup>Optional</sup> <a name="ZoneNameInput" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.zoneNameInput"></a>

```go
func ZoneNameInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.direction"></a>

```go
func Direction() *string
```

- *Type:* *string

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.match"></a>

```go
func Match() *string
```

- *Type:* *string

---

##### `MaxItems`<sup>Required</sup> <a name="MaxItems" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.maxItems"></a>

```go
func MaxItems() *f64
```

- *Type:* *f64

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.order"></a>

```go
func Order() *string
```

- *Type:* *string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

##### `ZoneName`<sup>Required</sup> <a name="ZoneName" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.zoneName"></a>

```go
func ZoneName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViews.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareAccountDnsSettingsInternalViewsConfig <a name="DataCloudflareAccountDnsSettingsInternalViewsConfig" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareaccountdnssettingsinternalviews"

&datacloudflareaccountdnssettingsinternalviews.DataCloudflareAccountDnsSettingsInternalViewsConfig {
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
	Name: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsName,
	Order: *string,
	ZoneId: *string,
	ZoneName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.direction">Direction</a></code> | <code>*string</code> | Direction to order DNS views in. Available values: "asc", "desc". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.match">Match</a></code> | <code>*string</code> | Whether to match all search requirements or at least one (any). |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.maxItems">MaxItems</a></code> | <code>*f64</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.name">Name</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsName">DataCloudflareAccountDnsSettingsInternalViewsName</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/account_dns_settings_internal_views#name DataCloudflareAccountDnsSettingsInternalViews#name}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.order">Order</a></code> | <code>*string</code> | Field to order DNS views by. Available values: "name", "created_on", "modified_on". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.zoneId">ZoneId</a></code> | <code>*string</code> | A zone ID that exists in the zones list for the view. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.zoneName">ZoneName</a></code> | <code>*string</code> | A zone name that exists in the zones list for the view. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/account_dns_settings_internal_views#account_id DataCloudflareAccountDnsSettingsInternalViews#account_id}

---

##### `Direction`<sup>Optional</sup> <a name="Direction" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.direction"></a>

```go
Direction *string
```

- *Type:* *string

Direction to order DNS views in. Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/account_dns_settings_internal_views#direction DataCloudflareAccountDnsSettingsInternalViews#direction}

---

##### `Match`<sup>Optional</sup> <a name="Match" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.match"></a>

```go
Match *string
```

- *Type:* *string

Whether to match all search requirements or at least one (any).

If set to `all`, acts like a logical AND between filters. If set to `any`, acts like a logical OR instead.
Available values: "any", "all".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/account_dns_settings_internal_views#match DataCloudflareAccountDnsSettingsInternalViews#match}

---

##### `MaxItems`<sup>Optional</sup> <a name="MaxItems" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.maxItems"></a>

```go
MaxItems *f64
```

- *Type:* *f64

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/account_dns_settings_internal_views#max_items DataCloudflareAccountDnsSettingsInternalViews#max_items}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.name"></a>

```go
Name DataCloudflareAccountDnsSettingsInternalViewsName
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsName">DataCloudflareAccountDnsSettingsInternalViewsName</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/account_dns_settings_internal_views#name DataCloudflareAccountDnsSettingsInternalViews#name}.

---

##### `Order`<sup>Optional</sup> <a name="Order" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.order"></a>

```go
Order *string
```

- *Type:* *string

Field to order DNS views by. Available values: "name", "created_on", "modified_on".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/account_dns_settings_internal_views#order DataCloudflareAccountDnsSettingsInternalViews#order}

---

##### `ZoneId`<sup>Optional</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.zoneId"></a>

```go
ZoneId *string
```

- *Type:* *string

A zone ID that exists in the zones list for the view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/account_dns_settings_internal_views#zone_id DataCloudflareAccountDnsSettingsInternalViews#zone_id}

---

##### `ZoneName`<sup>Optional</sup> <a name="ZoneName" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsConfig.property.zoneName"></a>

```go
ZoneName *string
```

- *Type:* *string

A zone name that exists in the zones list for the view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/account_dns_settings_internal_views#zone_name DataCloudflareAccountDnsSettingsInternalViews#zone_name}

---

### DataCloudflareAccountDnsSettingsInternalViewsName <a name="DataCloudflareAccountDnsSettingsInternalViewsName" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsName"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsName.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareaccountdnssettingsinternalviews"

&datacloudflareaccountdnssettingsinternalviews.DataCloudflareAccountDnsSettingsInternalViewsName {
	Contains: *string,
	Endswith: *string,
	Exact: *string,
	Startswith: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsName.property.contains">Contains</a></code> | <code>*string</code> | Substring of the DNS view name. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsName.property.endswith">Endswith</a></code> | <code>*string</code> | Suffix of the DNS view name. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsName.property.exact">Exact</a></code> | <code>*string</code> | Exact value of the DNS view name. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsName.property.startswith">Startswith</a></code> | <code>*string</code> | Prefix of the DNS view name. |

---

##### `Contains`<sup>Optional</sup> <a name="Contains" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsName.property.contains"></a>

```go
Contains *string
```

- *Type:* *string

Substring of the DNS view name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/account_dns_settings_internal_views#contains DataCloudflareAccountDnsSettingsInternalViews#contains}

---

##### `Endswith`<sup>Optional</sup> <a name="Endswith" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsName.property.endswith"></a>

```go
Endswith *string
```

- *Type:* *string

Suffix of the DNS view name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/account_dns_settings_internal_views#endswith DataCloudflareAccountDnsSettingsInternalViews#endswith}

---

##### `Exact`<sup>Optional</sup> <a name="Exact" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsName.property.exact"></a>

```go
Exact *string
```

- *Type:* *string

Exact value of the DNS view name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/account_dns_settings_internal_views#exact DataCloudflareAccountDnsSettingsInternalViews#exact}

---

##### `Startswith`<sup>Optional</sup> <a name="Startswith" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsName.property.startswith"></a>

```go
Startswith *string
```

- *Type:* *string

Prefix of the DNS view name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/account_dns_settings_internal_views#startswith DataCloudflareAccountDnsSettingsInternalViews#startswith}

---

### DataCloudflareAccountDnsSettingsInternalViewsResult <a name="DataCloudflareAccountDnsSettingsInternalViewsResult" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResult.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareaccountdnssettingsinternalviews"

&datacloudflareaccountdnssettingsinternalviews.DataCloudflareAccountDnsSettingsInternalViewsResult {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference <a name="DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareaccountdnssettingsinternalviews"

datacloudflareaccountdnssettingsinternalviews.NewDataCloudflareAccountDnsSettingsInternalViewsNameOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.resetContains">ResetContains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.resetEndswith">ResetEndswith</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.resetExact">ResetExact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.resetStartswith">ResetStartswith</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContains` <a name="ResetContains" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.resetContains"></a>

```go
func ResetContains()
```

##### `ResetEndswith` <a name="ResetEndswith" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.resetEndswith"></a>

```go
func ResetEndswith()
```

##### `ResetExact` <a name="ResetExact" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.resetExact"></a>

```go
func ResetExact()
```

##### `ResetStartswith` <a name="ResetStartswith" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.resetStartswith"></a>

```go
func ResetStartswith()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.property.containsInput">ContainsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.property.endswithInput">EndswithInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.property.exactInput">ExactInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.property.startswithInput">StartswithInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.property.contains">Contains</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.property.endswith">Endswith</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.property.exact">Exact</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.property.startswith">Startswith</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainsInput`<sup>Optional</sup> <a name="ContainsInput" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.property.containsInput"></a>

```go
func ContainsInput() *string
```

- *Type:* *string

---

##### `EndswithInput`<sup>Optional</sup> <a name="EndswithInput" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.property.endswithInput"></a>

```go
func EndswithInput() *string
```

- *Type:* *string

---

##### `ExactInput`<sup>Optional</sup> <a name="ExactInput" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.property.exactInput"></a>

```go
func ExactInput() *string
```

- *Type:* *string

---

##### `StartswithInput`<sup>Optional</sup> <a name="StartswithInput" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.property.startswithInput"></a>

```go
func StartswithInput() *string
```

- *Type:* *string

---

##### `Contains`<sup>Required</sup> <a name="Contains" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.property.contains"></a>

```go
func Contains() *string
```

- *Type:* *string

---

##### `Endswith`<sup>Required</sup> <a name="Endswith" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.property.endswith"></a>

```go
func Endswith() *string
```

- *Type:* *string

---

##### `Exact`<sup>Required</sup> <a name="Exact" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.property.exact"></a>

```go
func Exact() *string
```

- *Type:* *string

---

##### `Startswith`<sup>Required</sup> <a name="Startswith" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.property.startswith"></a>

```go
func Startswith() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsNameOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataCloudflareAccountDnsSettingsInternalViewsResultList <a name="DataCloudflareAccountDnsSettingsInternalViewsResultList" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareaccountdnssettingsinternalviews"

datacloudflareaccountdnssettingsinternalviews.NewDataCloudflareAccountDnsSettingsInternalViewsResultList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareAccountDnsSettingsInternalViewsResultList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultList.get"></a>

```go
func Get(index *f64) DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference <a name="DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareaccountdnssettingsinternalviews"

datacloudflareaccountdnssettingsinternalviews.NewDataCloudflareAccountDnsSettingsInternalViewsResultOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.property.createdTime">CreatedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.property.modifiedTime">ModifiedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.property.zones">Zones</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResult">DataCloudflareAccountDnsSettingsInternalViewsResult</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreatedTime`<sup>Required</sup> <a name="CreatedTime" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.property.createdTime"></a>

```go
func CreatedTime() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ModifiedTime`<sup>Required</sup> <a name="ModifiedTime" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.property.modifiedTime"></a>

```go
func ModifiedTime() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Zones`<sup>Required</sup> <a name="Zones" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.property.zones"></a>

```go
func Zones() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResultOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareAccountDnsSettingsInternalViewsResult
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalViews.DataCloudflareAccountDnsSettingsInternalViewsResult">DataCloudflareAccountDnsSettingsInternalViewsResult</a>

---



