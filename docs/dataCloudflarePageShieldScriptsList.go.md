# `dataCloudflarePageShieldScriptsList` Submodule <a name="`dataCloudflarePageShieldScriptsList` Submodule" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflarePageShieldScriptsList <a name="DataCloudflarePageShieldScriptsList" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/page_shield_scripts_list cloudflare_page_shield_scripts_list}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarepageshieldscriptslist"

datacloudflarepageshieldscriptslist.NewDataCloudflarePageShieldScriptsList(scope Construct, id *string, config DataCloudflarePageShieldScriptsListConfig) DataCloudflarePageShieldScriptsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig">DataCloudflarePageShieldScriptsListConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig">DataCloudflarePageShieldScriptsListConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetDirection">ResetDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetExcludeCdnCgi">ResetExcludeCdnCgi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetExcludeDuplicates">ResetExcludeDuplicates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetExcludeUrls">ResetExcludeUrls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetExport">ResetExport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetHosts">ResetHosts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetMaxItems">ResetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetOrderBy">ResetOrderBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetPage">ResetPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetPageUrl">ResetPageUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetPerPage">ResetPerPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetPrioritizeMalicious">ResetPrioritizeMalicious</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetUrls">ResetUrls</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetDirection` <a name="ResetDirection" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetDirection"></a>

```go
func ResetDirection()
```

##### `ResetExcludeCdnCgi` <a name="ResetExcludeCdnCgi" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetExcludeCdnCgi"></a>

```go
func ResetExcludeCdnCgi()
```

##### `ResetExcludeDuplicates` <a name="ResetExcludeDuplicates" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetExcludeDuplicates"></a>

```go
func ResetExcludeDuplicates()
```

##### `ResetExcludeUrls` <a name="ResetExcludeUrls" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetExcludeUrls"></a>

```go
func ResetExcludeUrls()
```

##### `ResetExport` <a name="ResetExport" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetExport"></a>

```go
func ResetExport()
```

##### `ResetHosts` <a name="ResetHosts" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetHosts"></a>

```go
func ResetHosts()
```

##### `ResetMaxItems` <a name="ResetMaxItems" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetMaxItems"></a>

```go
func ResetMaxItems()
```

##### `ResetOrderBy` <a name="ResetOrderBy" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetOrderBy"></a>

```go
func ResetOrderBy()
```

##### `ResetPage` <a name="ResetPage" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetPage"></a>

```go
func ResetPage()
```

##### `ResetPageUrl` <a name="ResetPageUrl" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetPageUrl"></a>

```go
func ResetPageUrl()
```

##### `ResetPerPage` <a name="ResetPerPage" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetPerPage"></a>

```go
func ResetPerPage()
```

##### `ResetPrioritizeMalicious` <a name="ResetPrioritizeMalicious" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetPrioritizeMalicious"></a>

```go
func ResetPrioritizeMalicious()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetUrls` <a name="ResetUrls" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetUrls"></a>

```go
func ResetUrls()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflarePageShieldScriptsList resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarepageshieldscriptslist"

datacloudflarepageshieldscriptslist.DataCloudflarePageShieldScriptsList_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarepageshieldscriptslist"

datacloudflarepageshieldscriptslist.DataCloudflarePageShieldScriptsList_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarepageshieldscriptslist"

datacloudflarepageshieldscriptslist.DataCloudflarePageShieldScriptsList_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarepageshieldscriptslist"

datacloudflarepageshieldscriptslist.DataCloudflarePageShieldScriptsList_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataCloudflarePageShieldScriptsList resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflarePageShieldScriptsList to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflarePageShieldScriptsList that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/page_shield_scripts_list#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflarePageShieldScriptsList to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.result">Result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultList">DataCloudflarePageShieldScriptsListResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.directionInput">DirectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.excludeCdnCgiInput">ExcludeCdnCgiInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.excludeDuplicatesInput">ExcludeDuplicatesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.excludeUrlsInput">ExcludeUrlsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.exportInput">ExportInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.hostsInput">HostsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.maxItemsInput">MaxItemsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.orderByInput">OrderByInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.pageInput">PageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.pageUrlInput">PageUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.perPageInput">PerPageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.prioritizeMaliciousInput">PrioritizeMaliciousInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.urlsInput">UrlsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.zoneIdInput">ZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.direction">Direction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.excludeCdnCgi">ExcludeCdnCgi</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.excludeDuplicates">ExcludeDuplicates</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.excludeUrls">ExcludeUrls</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.export">Export</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.hosts">Hosts</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.maxItems">MaxItems</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.orderBy">OrderBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.page">Page</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.pageUrl">PageUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.perPage">PerPage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.prioritizeMalicious">PrioritizeMalicious</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.urls">Urls</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.result"></a>

```go
func Result() DataCloudflarePageShieldScriptsListResultList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultList">DataCloudflarePageShieldScriptsListResultList</a>

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.directionInput"></a>

```go
func DirectionInput() *string
```

- *Type:* *string

---

##### `ExcludeCdnCgiInput`<sup>Optional</sup> <a name="ExcludeCdnCgiInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.excludeCdnCgiInput"></a>

```go
func ExcludeCdnCgiInput() interface{}
```

- *Type:* interface{}

---

##### `ExcludeDuplicatesInput`<sup>Optional</sup> <a name="ExcludeDuplicatesInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.excludeDuplicatesInput"></a>

```go
func ExcludeDuplicatesInput() interface{}
```

- *Type:* interface{}

---

##### `ExcludeUrlsInput`<sup>Optional</sup> <a name="ExcludeUrlsInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.excludeUrlsInput"></a>

```go
func ExcludeUrlsInput() *string
```

- *Type:* *string

---

##### `ExportInput`<sup>Optional</sup> <a name="ExportInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.exportInput"></a>

```go
func ExportInput() *string
```

- *Type:* *string

---

##### `HostsInput`<sup>Optional</sup> <a name="HostsInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.hostsInput"></a>

```go
func HostsInput() *string
```

- *Type:* *string

---

##### `MaxItemsInput`<sup>Optional</sup> <a name="MaxItemsInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.maxItemsInput"></a>

```go
func MaxItemsInput() *f64
```

- *Type:* *f64

---

##### `OrderByInput`<sup>Optional</sup> <a name="OrderByInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.orderByInput"></a>

```go
func OrderByInput() *string
```

- *Type:* *string

---

##### `PageInput`<sup>Optional</sup> <a name="PageInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.pageInput"></a>

```go
func PageInput() *string
```

- *Type:* *string

---

##### `PageUrlInput`<sup>Optional</sup> <a name="PageUrlInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.pageUrlInput"></a>

```go
func PageUrlInput() *string
```

- *Type:* *string

---

##### `PerPageInput`<sup>Optional</sup> <a name="PerPageInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.perPageInput"></a>

```go
func PerPageInput() *f64
```

- *Type:* *f64

---

##### `PrioritizeMaliciousInput`<sup>Optional</sup> <a name="PrioritizeMaliciousInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.prioritizeMaliciousInput"></a>

```go
func PrioritizeMaliciousInput() interface{}
```

- *Type:* interface{}

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `UrlsInput`<sup>Optional</sup> <a name="UrlsInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.urlsInput"></a>

```go
func UrlsInput() *string
```

- *Type:* *string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.zoneIdInput"></a>

```go
func ZoneIdInput() *string
```

- *Type:* *string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.direction"></a>

```go
func Direction() *string
```

- *Type:* *string

---

##### `ExcludeCdnCgi`<sup>Required</sup> <a name="ExcludeCdnCgi" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.excludeCdnCgi"></a>

```go
func ExcludeCdnCgi() interface{}
```

- *Type:* interface{}

---

##### `ExcludeDuplicates`<sup>Required</sup> <a name="ExcludeDuplicates" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.excludeDuplicates"></a>

```go
func ExcludeDuplicates() interface{}
```

- *Type:* interface{}

---

##### `ExcludeUrls`<sup>Required</sup> <a name="ExcludeUrls" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.excludeUrls"></a>

```go
func ExcludeUrls() *string
```

- *Type:* *string

---

##### `Export`<sup>Required</sup> <a name="Export" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.export"></a>

```go
func Export() *string
```

- *Type:* *string

---

##### `Hosts`<sup>Required</sup> <a name="Hosts" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.hosts"></a>

```go
func Hosts() *string
```

- *Type:* *string

---

##### `MaxItems`<sup>Required</sup> <a name="MaxItems" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.maxItems"></a>

```go
func MaxItems() *f64
```

- *Type:* *f64

---

##### `OrderBy`<sup>Required</sup> <a name="OrderBy" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.orderBy"></a>

```go
func OrderBy() *string
```

- *Type:* *string

---

##### `Page`<sup>Required</sup> <a name="Page" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.page"></a>

```go
func Page() *string
```

- *Type:* *string

---

##### `PageUrl`<sup>Required</sup> <a name="PageUrl" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.pageUrl"></a>

```go
func PageUrl() *string
```

- *Type:* *string

---

##### `PerPage`<sup>Required</sup> <a name="PerPage" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.perPage"></a>

```go
func PerPage() *f64
```

- *Type:* *f64

---

##### `PrioritizeMalicious`<sup>Required</sup> <a name="PrioritizeMalicious" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.prioritizeMalicious"></a>

```go
func PrioritizeMalicious() interface{}
```

- *Type:* interface{}

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Urls`<sup>Required</sup> <a name="Urls" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.urls"></a>

```go
func Urls() *string
```

- *Type:* *string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflarePageShieldScriptsListConfig <a name="DataCloudflarePageShieldScriptsListConfig" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarepageshieldscriptslist"

&datacloudflarepageshieldscriptslist.DataCloudflarePageShieldScriptsListConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ZoneId: *string,
	Direction: *string,
	ExcludeCdnCgi: interface{},
	ExcludeDuplicates: interface{},
	ExcludeUrls: *string,
	Export: *string,
	Hosts: *string,
	MaxItems: *f64,
	OrderBy: *string,
	Page: *string,
	PageUrl: *string,
	PerPage: *f64,
	PrioritizeMalicious: interface{},
	Status: *string,
	Urls: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.zoneId">ZoneId</a></code> | <code>*string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.direction">Direction</a></code> | <code>*string</code> | The direction used to sort returned scripts. Available values: "asc", "desc". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.excludeCdnCgi">ExcludeCdnCgi</a></code> | <code>interface{}</code> | When true, excludes scripts seen in a `/cdn-cgi` path from the returned scripts. The default value is true. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.excludeDuplicates">ExcludeDuplicates</a></code> | <code>interface{}</code> | When true, excludes duplicate scripts. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.excludeUrls">ExcludeUrls</a></code> | <code>*string</code> | Excludes scripts whose URL contains one of the URL-encoded URLs separated by commas. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.export">Export</a></code> | <code>*string</code> | Export the list of scripts as a file, limited to 50000 entries. Available values: "csv". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.hosts">Hosts</a></code> | <code>*string</code> | Includes scripts that match one or more URL-encoded hostnames separated by commas. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.maxItems">MaxItems</a></code> | <code>*f64</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.orderBy">OrderBy</a></code> | <code>*string</code> | The field used to sort returned scripts. Available values: "first_seen_at", "last_seen_at". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.page">Page</a></code> | <code>*string</code> | The current page number of the paginated results. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.pageUrl">PageUrl</a></code> | <code>*string</code> | Includes scripts that match one or more page URLs (separated by commas) where they were last seen. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.perPage">PerPage</a></code> | <code>*f64</code> | The number of results per page. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.prioritizeMalicious">PrioritizeMalicious</a></code> | <code>interface{}</code> | When true, malicious scripts appear first in the returned scripts. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.status">Status</a></code> | <code>*string</code> | Filters the returned scripts using a comma-separated list of scripts statuses. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.urls">Urls</a></code> | <code>*string</code> | Includes scripts whose URL contain one or more URL-encoded URLs separated by commas. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.zoneId"></a>

```go
ZoneId *string
```

- *Type:* *string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/page_shield_scripts_list#zone_id DataCloudflarePageShieldScriptsList#zone_id}

---

##### `Direction`<sup>Optional</sup> <a name="Direction" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.direction"></a>

```go
Direction *string
```

- *Type:* *string

The direction used to sort returned scripts. Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/page_shield_scripts_list#direction DataCloudflarePageShieldScriptsList#direction}

---

##### `ExcludeCdnCgi`<sup>Optional</sup> <a name="ExcludeCdnCgi" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.excludeCdnCgi"></a>

```go
ExcludeCdnCgi interface{}
```

- *Type:* interface{}

When true, excludes scripts seen in a `/cdn-cgi` path from the returned scripts. The default value is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/page_shield_scripts_list#exclude_cdn_cgi DataCloudflarePageShieldScriptsList#exclude_cdn_cgi}

---

##### `ExcludeDuplicates`<sup>Optional</sup> <a name="ExcludeDuplicates" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.excludeDuplicates"></a>

```go
ExcludeDuplicates interface{}
```

- *Type:* interface{}

When true, excludes duplicate scripts.

We consider a script duplicate of another if their javascript
content matches and they share the same url host and zone hostname. In such case, we return the most
recent script for the URL host and zone hostname combination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/page_shield_scripts_list#exclude_duplicates DataCloudflarePageShieldScriptsList#exclude_duplicates}

---

##### `ExcludeUrls`<sup>Optional</sup> <a name="ExcludeUrls" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.excludeUrls"></a>

```go
ExcludeUrls *string
```

- *Type:* *string

Excludes scripts whose URL contains one of the URL-encoded URLs separated by commas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/page_shield_scripts_list#exclude_urls DataCloudflarePageShieldScriptsList#exclude_urls}

---

##### `Export`<sup>Optional</sup> <a name="Export" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.export"></a>

```go
Export *string
```

- *Type:* *string

Export the list of scripts as a file, limited to 50000 entries. Available values: "csv".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/page_shield_scripts_list#export DataCloudflarePageShieldScriptsList#export}

---

##### `Hosts`<sup>Optional</sup> <a name="Hosts" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.hosts"></a>

```go
Hosts *string
```

- *Type:* *string

Includes scripts that match one or more URL-encoded hostnames separated by commas.

Wildcards are supported at the start and end of each hostname to support starts with, ends with
and contains. If no wildcards are used, results will be filtered by exact match

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/page_shield_scripts_list#hosts DataCloudflarePageShieldScriptsList#hosts}

---

##### `MaxItems`<sup>Optional</sup> <a name="MaxItems" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.maxItems"></a>

```go
MaxItems *f64
```

- *Type:* *f64

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/page_shield_scripts_list#max_items DataCloudflarePageShieldScriptsList#max_items}

---

##### `OrderBy`<sup>Optional</sup> <a name="OrderBy" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.orderBy"></a>

```go
OrderBy *string
```

- *Type:* *string

The field used to sort returned scripts. Available values: "first_seen_at", "last_seen_at".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/page_shield_scripts_list#order_by DataCloudflarePageShieldScriptsList#order_by}

---

##### `Page`<sup>Optional</sup> <a name="Page" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.page"></a>

```go
Page *string
```

- *Type:* *string

The current page number of the paginated results.

We additionally support a special value "all". When "all" is used, the API will return all the scripts
with the applied filters in a single page. This feature is best-effort and it may only work for zones with
a low number of scripts

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/page_shield_scripts_list#page DataCloudflarePageShieldScriptsList#page}

---

##### `PageUrl`<sup>Optional</sup> <a name="PageUrl" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.pageUrl"></a>

```go
PageUrl *string
```

- *Type:* *string

Includes scripts that match one or more page URLs (separated by commas) where they were last seen.

Wildcards are supported at the start and end of each page URL to support starts with, ends with
and contains. If no wildcards are used, results will be filtered by exact match

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/page_shield_scripts_list#page_url DataCloudflarePageShieldScriptsList#page_url}

---

##### `PerPage`<sup>Optional</sup> <a name="PerPage" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.perPage"></a>

```go
PerPage *f64
```

- *Type:* *f64

The number of results per page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/page_shield_scripts_list#per_page DataCloudflarePageShieldScriptsList#per_page}

---

##### `PrioritizeMalicious`<sup>Optional</sup> <a name="PrioritizeMalicious" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.prioritizeMalicious"></a>

```go
PrioritizeMalicious interface{}
```

- *Type:* interface{}

When true, malicious scripts appear first in the returned scripts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/page_shield_scripts_list#prioritize_malicious DataCloudflarePageShieldScriptsList#prioritize_malicious}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

Filters the returned scripts using a comma-separated list of scripts statuses.

Accepted values: `active`, `infrequent`, and `inactive`. The default value is `active`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/page_shield_scripts_list#status DataCloudflarePageShieldScriptsList#status}

---

##### `Urls`<sup>Optional</sup> <a name="Urls" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.urls"></a>

```go
Urls *string
```

- *Type:* *string

Includes scripts whose URL contain one or more URL-encoded URLs separated by commas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/page_shield_scripts_list#urls DataCloudflarePageShieldScriptsList#urls}

---

### DataCloudflarePageShieldScriptsListResult <a name="DataCloudflarePageShieldScriptsListResult" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResult.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarepageshieldscriptslist"

&datacloudflarepageshieldscriptslist.DataCloudflarePageShieldScriptsListResult {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflarePageShieldScriptsListResultList <a name="DataCloudflarePageShieldScriptsListResultList" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarepageshieldscriptslist"

datacloudflarepageshieldscriptslist.NewDataCloudflarePageShieldScriptsListResultList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflarePageShieldScriptsListResultList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultList.get"></a>

```go
func Get(index *f64) DataCloudflarePageShieldScriptsListResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflarePageShieldScriptsListResultOutputReference <a name="DataCloudflarePageShieldScriptsListResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarepageshieldscriptslist"

datacloudflarepageshieldscriptslist.NewDataCloudflarePageShieldScriptsListResultOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflarePageShieldScriptsListResultOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.addedAt">AddedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.cryptominingScore">CryptominingScore</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.dataflowScore">DataflowScore</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.domainReportedMalicious">DomainReportedMalicious</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.fetchedAt">FetchedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.firstPageUrl">FirstPageUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.firstSeenAt">FirstSeenAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.hash">Hash</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.jsIntegrityScore">JsIntegrityScore</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.lastSeenAt">LastSeenAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.magecartScore">MagecartScore</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.maliciousDomainCategories">MaliciousDomainCategories</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.maliciousUrlCategories">MaliciousUrlCategories</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.malwareScore">MalwareScore</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.obfuscationScore">ObfuscationScore</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.pageUrls">PageUrls</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.urlContainsCdnCgiPath">UrlContainsCdnCgiPath</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.urlReportedMalicious">UrlReportedMalicious</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResult">DataCloudflarePageShieldScriptsListResult</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddedAt`<sup>Required</sup> <a name="AddedAt" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.addedAt"></a>

```go
func AddedAt() *string
```

- *Type:* *string

---

##### `CryptominingScore`<sup>Required</sup> <a name="CryptominingScore" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.cryptominingScore"></a>

```go
func CryptominingScore() *f64
```

- *Type:* *f64

---

##### `DataflowScore`<sup>Required</sup> <a name="DataflowScore" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.dataflowScore"></a>

```go
func DataflowScore() *f64
```

- *Type:* *f64

---

##### `DomainReportedMalicious`<sup>Required</sup> <a name="DomainReportedMalicious" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.domainReportedMalicious"></a>

```go
func DomainReportedMalicious() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `FetchedAt`<sup>Required</sup> <a name="FetchedAt" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.fetchedAt"></a>

```go
func FetchedAt() *string
```

- *Type:* *string

---

##### `FirstPageUrl`<sup>Required</sup> <a name="FirstPageUrl" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.firstPageUrl"></a>

```go
func FirstPageUrl() *string
```

- *Type:* *string

---

##### `FirstSeenAt`<sup>Required</sup> <a name="FirstSeenAt" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.firstSeenAt"></a>

```go
func FirstSeenAt() *string
```

- *Type:* *string

---

##### `Hash`<sup>Required</sup> <a name="Hash" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.hash"></a>

```go
func Hash() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `JsIntegrityScore`<sup>Required</sup> <a name="JsIntegrityScore" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.jsIntegrityScore"></a>

```go
func JsIntegrityScore() *f64
```

- *Type:* *f64

---

##### `LastSeenAt`<sup>Required</sup> <a name="LastSeenAt" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.lastSeenAt"></a>

```go
func LastSeenAt() *string
```

- *Type:* *string

---

##### `MagecartScore`<sup>Required</sup> <a name="MagecartScore" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.magecartScore"></a>

```go
func MagecartScore() *f64
```

- *Type:* *f64

---

##### `MaliciousDomainCategories`<sup>Required</sup> <a name="MaliciousDomainCategories" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.maliciousDomainCategories"></a>

```go
func MaliciousDomainCategories() *[]*string
```

- *Type:* *[]*string

---

##### `MaliciousUrlCategories`<sup>Required</sup> <a name="MaliciousUrlCategories" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.maliciousUrlCategories"></a>

```go
func MaliciousUrlCategories() *[]*string
```

- *Type:* *[]*string

---

##### `MalwareScore`<sup>Required</sup> <a name="MalwareScore" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.malwareScore"></a>

```go
func MalwareScore() *f64
```

- *Type:* *f64

---

##### `ObfuscationScore`<sup>Required</sup> <a name="ObfuscationScore" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.obfuscationScore"></a>

```go
func ObfuscationScore() *f64
```

- *Type:* *f64

---

##### `PageUrls`<sup>Required</sup> <a name="PageUrls" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.pageUrls"></a>

```go
func PageUrls() *[]*string
```

- *Type:* *[]*string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `UrlContainsCdnCgiPath`<sup>Required</sup> <a name="UrlContainsCdnCgiPath" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.urlContainsCdnCgiPath"></a>

```go
func UrlContainsCdnCgiPath() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `UrlReportedMalicious`<sup>Required</sup> <a name="UrlReportedMalicious" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.urlReportedMalicious"></a>

```go
func UrlReportedMalicious() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflarePageShieldScriptsListResult
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResult">DataCloudflarePageShieldScriptsListResult</a>

---



