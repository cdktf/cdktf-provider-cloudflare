# `dataCloudflarePageShieldConnectionsList` Submodule <a name="`dataCloudflarePageShieldConnectionsList` Submodule" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflarePageShieldConnectionsList <a name="DataCloudflarePageShieldConnectionsList" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/page_shield_connections_list cloudflare_page_shield_connections_list}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarepageshieldconnectionslist"

datacloudflarepageshieldconnectionslist.NewDataCloudflarePageShieldConnectionsList(scope Construct, id *string, config DataCloudflarePageShieldConnectionsListConfig) DataCloudflarePageShieldConnectionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig">DataCloudflarePageShieldConnectionsListConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig">DataCloudflarePageShieldConnectionsListConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.resetDirection">ResetDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.resetExcludeCdnCgi">ResetExcludeCdnCgi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.resetExcludeUrls">ResetExcludeUrls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.resetExport">ResetExport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.resetHosts">ResetHosts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.resetMaxItems">ResetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.resetOrderBy">ResetOrderBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.resetPage">ResetPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.resetPageUrl">ResetPageUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.resetPerPage">ResetPerPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.resetPrioritizeMalicious">ResetPrioritizeMalicious</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.resetUrls">ResetUrls</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetDirection` <a name="ResetDirection" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.resetDirection"></a>

```go
func ResetDirection()
```

##### `ResetExcludeCdnCgi` <a name="ResetExcludeCdnCgi" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.resetExcludeCdnCgi"></a>

```go
func ResetExcludeCdnCgi()
```

##### `ResetExcludeUrls` <a name="ResetExcludeUrls" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.resetExcludeUrls"></a>

```go
func ResetExcludeUrls()
```

##### `ResetExport` <a name="ResetExport" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.resetExport"></a>

```go
func ResetExport()
```

##### `ResetHosts` <a name="ResetHosts" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.resetHosts"></a>

```go
func ResetHosts()
```

##### `ResetMaxItems` <a name="ResetMaxItems" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.resetMaxItems"></a>

```go
func ResetMaxItems()
```

##### `ResetOrderBy` <a name="ResetOrderBy" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.resetOrderBy"></a>

```go
func ResetOrderBy()
```

##### `ResetPage` <a name="ResetPage" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.resetPage"></a>

```go
func ResetPage()
```

##### `ResetPageUrl` <a name="ResetPageUrl" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.resetPageUrl"></a>

```go
func ResetPageUrl()
```

##### `ResetPerPage` <a name="ResetPerPage" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.resetPerPage"></a>

```go
func ResetPerPage()
```

##### `ResetPrioritizeMalicious` <a name="ResetPrioritizeMalicious" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.resetPrioritizeMalicious"></a>

```go
func ResetPrioritizeMalicious()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetUrls` <a name="ResetUrls" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.resetUrls"></a>

```go
func ResetUrls()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflarePageShieldConnectionsList resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarepageshieldconnectionslist"

datacloudflarepageshieldconnectionslist.DataCloudflarePageShieldConnectionsList_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarepageshieldconnectionslist"

datacloudflarepageshieldconnectionslist.DataCloudflarePageShieldConnectionsList_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarepageshieldconnectionslist"

datacloudflarepageshieldconnectionslist.DataCloudflarePageShieldConnectionsList_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarepageshieldconnectionslist"

datacloudflarepageshieldconnectionslist.DataCloudflarePageShieldConnectionsList_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataCloudflarePageShieldConnectionsList resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflarePageShieldConnectionsList to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflarePageShieldConnectionsList that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/page_shield_connections_list#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflarePageShieldConnectionsList to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.result">Result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultList">DataCloudflarePageShieldConnectionsListResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.directionInput">DirectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.excludeCdnCgiInput">ExcludeCdnCgiInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.excludeUrlsInput">ExcludeUrlsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.exportInput">ExportInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.hostsInput">HostsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.maxItemsInput">MaxItemsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.orderByInput">OrderByInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.pageInput">PageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.pageUrlInput">PageUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.perPageInput">PerPageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.prioritizeMaliciousInput">PrioritizeMaliciousInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.urlsInput">UrlsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.zoneIdInput">ZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.direction">Direction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.excludeCdnCgi">ExcludeCdnCgi</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.excludeUrls">ExcludeUrls</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.export">Export</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.hosts">Hosts</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.maxItems">MaxItems</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.orderBy">OrderBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.page">Page</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.pageUrl">PageUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.perPage">PerPage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.prioritizeMalicious">PrioritizeMalicious</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.urls">Urls</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.result"></a>

```go
func Result() DataCloudflarePageShieldConnectionsListResultList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultList">DataCloudflarePageShieldConnectionsListResultList</a>

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.directionInput"></a>

```go
func DirectionInput() *string
```

- *Type:* *string

---

##### `ExcludeCdnCgiInput`<sup>Optional</sup> <a name="ExcludeCdnCgiInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.excludeCdnCgiInput"></a>

```go
func ExcludeCdnCgiInput() interface{}
```

- *Type:* interface{}

---

##### `ExcludeUrlsInput`<sup>Optional</sup> <a name="ExcludeUrlsInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.excludeUrlsInput"></a>

```go
func ExcludeUrlsInput() *string
```

- *Type:* *string

---

##### `ExportInput`<sup>Optional</sup> <a name="ExportInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.exportInput"></a>

```go
func ExportInput() *string
```

- *Type:* *string

---

##### `HostsInput`<sup>Optional</sup> <a name="HostsInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.hostsInput"></a>

```go
func HostsInput() *string
```

- *Type:* *string

---

##### `MaxItemsInput`<sup>Optional</sup> <a name="MaxItemsInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.maxItemsInput"></a>

```go
func MaxItemsInput() *f64
```

- *Type:* *f64

---

##### `OrderByInput`<sup>Optional</sup> <a name="OrderByInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.orderByInput"></a>

```go
func OrderByInput() *string
```

- *Type:* *string

---

##### `PageInput`<sup>Optional</sup> <a name="PageInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.pageInput"></a>

```go
func PageInput() *string
```

- *Type:* *string

---

##### `PageUrlInput`<sup>Optional</sup> <a name="PageUrlInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.pageUrlInput"></a>

```go
func PageUrlInput() *string
```

- *Type:* *string

---

##### `PerPageInput`<sup>Optional</sup> <a name="PerPageInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.perPageInput"></a>

```go
func PerPageInput() *f64
```

- *Type:* *f64

---

##### `PrioritizeMaliciousInput`<sup>Optional</sup> <a name="PrioritizeMaliciousInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.prioritizeMaliciousInput"></a>

```go
func PrioritizeMaliciousInput() interface{}
```

- *Type:* interface{}

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `UrlsInput`<sup>Optional</sup> <a name="UrlsInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.urlsInput"></a>

```go
func UrlsInput() *string
```

- *Type:* *string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.zoneIdInput"></a>

```go
func ZoneIdInput() *string
```

- *Type:* *string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.direction"></a>

```go
func Direction() *string
```

- *Type:* *string

---

##### `ExcludeCdnCgi`<sup>Required</sup> <a name="ExcludeCdnCgi" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.excludeCdnCgi"></a>

```go
func ExcludeCdnCgi() interface{}
```

- *Type:* interface{}

---

##### `ExcludeUrls`<sup>Required</sup> <a name="ExcludeUrls" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.excludeUrls"></a>

```go
func ExcludeUrls() *string
```

- *Type:* *string

---

##### `Export`<sup>Required</sup> <a name="Export" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.export"></a>

```go
func Export() *string
```

- *Type:* *string

---

##### `Hosts`<sup>Required</sup> <a name="Hosts" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.hosts"></a>

```go
func Hosts() *string
```

- *Type:* *string

---

##### `MaxItems`<sup>Required</sup> <a name="MaxItems" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.maxItems"></a>

```go
func MaxItems() *f64
```

- *Type:* *f64

---

##### `OrderBy`<sup>Required</sup> <a name="OrderBy" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.orderBy"></a>

```go
func OrderBy() *string
```

- *Type:* *string

---

##### `Page`<sup>Required</sup> <a name="Page" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.page"></a>

```go
func Page() *string
```

- *Type:* *string

---

##### `PageUrl`<sup>Required</sup> <a name="PageUrl" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.pageUrl"></a>

```go
func PageUrl() *string
```

- *Type:* *string

---

##### `PerPage`<sup>Required</sup> <a name="PerPage" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.perPage"></a>

```go
func PerPage() *f64
```

- *Type:* *f64

---

##### `PrioritizeMalicious`<sup>Required</sup> <a name="PrioritizeMalicious" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.prioritizeMalicious"></a>

```go
func PrioritizeMalicious() interface{}
```

- *Type:* interface{}

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Urls`<sup>Required</sup> <a name="Urls" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.urls"></a>

```go
func Urls() *string
```

- *Type:* *string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsList.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflarePageShieldConnectionsListConfig <a name="DataCloudflarePageShieldConnectionsListConfig" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarepageshieldconnectionslist"

&datacloudflarepageshieldconnectionslist.DataCloudflarePageShieldConnectionsListConfig {
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
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.zoneId">ZoneId</a></code> | <code>*string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.direction">Direction</a></code> | <code>*string</code> | The direction used to sort returned connections. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.excludeCdnCgi">ExcludeCdnCgi</a></code> | <code>interface{}</code> | When true, excludes connections seen in a `/cdn-cgi` path from the returned connections. The default value is true. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.excludeUrls">ExcludeUrls</a></code> | <code>*string</code> | Excludes connections whose URL contains one of the URL-encoded URLs separated by commas. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.export">Export</a></code> | <code>*string</code> | Export the list of connections as a file. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.hosts">Hosts</a></code> | <code>*string</code> | Includes connections that match one or more URL-encoded hostnames separated by commas. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.maxItems">MaxItems</a></code> | <code>*f64</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.orderBy">OrderBy</a></code> | <code>*string</code> | The field used to sort returned connections. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.page">Page</a></code> | <code>*string</code> | The current page number of the paginated results. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.pageUrl">PageUrl</a></code> | <code>*string</code> | Includes connections that match one or more page URLs (separated by commas) where they were last seen. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.perPage">PerPage</a></code> | <code>*f64</code> | The number of results per page. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.prioritizeMalicious">PrioritizeMalicious</a></code> | <code>interface{}</code> | When true, malicious connections appear first in the returned connections. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.status">Status</a></code> | <code>*string</code> | Filters the returned connections using a comma-separated list of connection statuses. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.urls">Urls</a></code> | <code>*string</code> | Includes connections whose URL contain one or more URL-encoded URLs separated by commas. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.zoneId"></a>

```go
ZoneId *string
```

- *Type:* *string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/page_shield_connections_list#zone_id DataCloudflarePageShieldConnectionsList#zone_id}

---

##### `Direction`<sup>Optional</sup> <a name="Direction" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.direction"></a>

```go
Direction *string
```

- *Type:* *string

The direction used to sort returned connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/page_shield_connections_list#direction DataCloudflarePageShieldConnectionsList#direction}

---

##### `ExcludeCdnCgi`<sup>Optional</sup> <a name="ExcludeCdnCgi" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.excludeCdnCgi"></a>

```go
ExcludeCdnCgi interface{}
```

- *Type:* interface{}

When true, excludes connections seen in a `/cdn-cgi` path from the returned connections. The default value is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/page_shield_connections_list#exclude_cdn_cgi DataCloudflarePageShieldConnectionsList#exclude_cdn_cgi}

---

##### `ExcludeUrls`<sup>Optional</sup> <a name="ExcludeUrls" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.excludeUrls"></a>

```go
ExcludeUrls *string
```

- *Type:* *string

Excludes connections whose URL contains one of the URL-encoded URLs separated by commas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/page_shield_connections_list#exclude_urls DataCloudflarePageShieldConnectionsList#exclude_urls}

---

##### `Export`<sup>Optional</sup> <a name="Export" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.export"></a>

```go
Export *string
```

- *Type:* *string

Export the list of connections as a file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/page_shield_connections_list#export DataCloudflarePageShieldConnectionsList#export}

---

##### `Hosts`<sup>Optional</sup> <a name="Hosts" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.hosts"></a>

```go
Hosts *string
```

- *Type:* *string

Includes connections that match one or more URL-encoded hostnames separated by commas.

Wildcards are supported at the start and end of each hostname to support starts with, ends with
and contains. If no wildcards are used, results will be filtered by exact match

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/page_shield_connections_list#hosts DataCloudflarePageShieldConnectionsList#hosts}

---

##### `MaxItems`<sup>Optional</sup> <a name="MaxItems" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.maxItems"></a>

```go
MaxItems *f64
```

- *Type:* *f64

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/page_shield_connections_list#max_items DataCloudflarePageShieldConnectionsList#max_items}

---

##### `OrderBy`<sup>Optional</sup> <a name="OrderBy" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.orderBy"></a>

```go
OrderBy *string
```

- *Type:* *string

The field used to sort returned connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/page_shield_connections_list#order_by DataCloudflarePageShieldConnectionsList#order_by}

---

##### `Page`<sup>Optional</sup> <a name="Page" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.page"></a>

```go
Page *string
```

- *Type:* *string

The current page number of the paginated results.

We additionally support a special value "all". When "all" is used, the API will return all the connections
with the applied filters in a single page. This feature is best-effort and it may only work for zones with
a low number of connections

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/page_shield_connections_list#page DataCloudflarePageShieldConnectionsList#page}

---

##### `PageUrl`<sup>Optional</sup> <a name="PageUrl" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.pageUrl"></a>

```go
PageUrl *string
```

- *Type:* *string

Includes connections that match one or more page URLs (separated by commas) where they were last seen.

Wildcards are supported at the start and end of each page URL to support starts with, ends with
and contains. If no wildcards are used, results will be filtered by exact match

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/page_shield_connections_list#page_url DataCloudflarePageShieldConnectionsList#page_url}

---

##### `PerPage`<sup>Optional</sup> <a name="PerPage" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.perPage"></a>

```go
PerPage *f64
```

- *Type:* *f64

The number of results per page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/page_shield_connections_list#per_page DataCloudflarePageShieldConnectionsList#per_page}

---

##### `PrioritizeMalicious`<sup>Optional</sup> <a name="PrioritizeMalicious" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.prioritizeMalicious"></a>

```go
PrioritizeMalicious interface{}
```

- *Type:* interface{}

When true, malicious connections appear first in the returned connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/page_shield_connections_list#prioritize_malicious DataCloudflarePageShieldConnectionsList#prioritize_malicious}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

Filters the returned connections using a comma-separated list of connection statuses.

Accepted values: `active`, `infrequent`, and `inactive`. The default value is `active`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/page_shield_connections_list#status DataCloudflarePageShieldConnectionsList#status}

---

##### `Urls`<sup>Optional</sup> <a name="Urls" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListConfig.property.urls"></a>

```go
Urls *string
```

- *Type:* *string

Includes connections whose URL contain one or more URL-encoded URLs separated by commas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/page_shield_connections_list#urls DataCloudflarePageShieldConnectionsList#urls}

---

### DataCloudflarePageShieldConnectionsListResult <a name="DataCloudflarePageShieldConnectionsListResult" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResult.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarepageshieldconnectionslist"

&datacloudflarepageshieldconnectionslist.DataCloudflarePageShieldConnectionsListResult {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflarePageShieldConnectionsListResultList <a name="DataCloudflarePageShieldConnectionsListResultList" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarepageshieldconnectionslist"

datacloudflarepageshieldconnectionslist.NewDataCloudflarePageShieldConnectionsListResultList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflarePageShieldConnectionsListResultList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultList.get"></a>

```go
func Get(index *f64) DataCloudflarePageShieldConnectionsListResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflarePageShieldConnectionsListResultOutputReference <a name="DataCloudflarePageShieldConnectionsListResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarepageshieldconnectionslist"

datacloudflarepageshieldconnectionslist.NewDataCloudflarePageShieldConnectionsListResultOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflarePageShieldConnectionsListResultOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.addedAt">AddedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.domainReportedMalicious">DomainReportedMalicious</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.firstPageUrl">FirstPageUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.firstSeenAt">FirstSeenAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.lastSeenAt">LastSeenAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.maliciousDomainCategories">MaliciousDomainCategories</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.maliciousUrlCategories">MaliciousUrlCategories</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.pageUrls">PageUrls</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.urlContainsCdnCgiPath">UrlContainsCdnCgiPath</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.urlReportedMalicious">UrlReportedMalicious</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResult">DataCloudflarePageShieldConnectionsListResult</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddedAt`<sup>Required</sup> <a name="AddedAt" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.addedAt"></a>

```go
func AddedAt() *string
```

- *Type:* *string

---

##### `DomainReportedMalicious`<sup>Required</sup> <a name="DomainReportedMalicious" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.domainReportedMalicious"></a>

```go
func DomainReportedMalicious() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `FirstPageUrl`<sup>Required</sup> <a name="FirstPageUrl" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.firstPageUrl"></a>

```go
func FirstPageUrl() *string
```

- *Type:* *string

---

##### `FirstSeenAt`<sup>Required</sup> <a name="FirstSeenAt" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.firstSeenAt"></a>

```go
func FirstSeenAt() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastSeenAt`<sup>Required</sup> <a name="LastSeenAt" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.lastSeenAt"></a>

```go
func LastSeenAt() *string
```

- *Type:* *string

---

##### `MaliciousDomainCategories`<sup>Required</sup> <a name="MaliciousDomainCategories" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.maliciousDomainCategories"></a>

```go
func MaliciousDomainCategories() *[]*string
```

- *Type:* *[]*string

---

##### `MaliciousUrlCategories`<sup>Required</sup> <a name="MaliciousUrlCategories" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.maliciousUrlCategories"></a>

```go
func MaliciousUrlCategories() *[]*string
```

- *Type:* *[]*string

---

##### `PageUrls`<sup>Required</sup> <a name="PageUrls" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.pageUrls"></a>

```go
func PageUrls() *[]*string
```

- *Type:* *[]*string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `UrlContainsCdnCgiPath`<sup>Required</sup> <a name="UrlContainsCdnCgiPath" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.urlContainsCdnCgiPath"></a>

```go
func UrlContainsCdnCgiPath() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `UrlReportedMalicious`<sup>Required</sup> <a name="UrlReportedMalicious" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.urlReportedMalicious"></a>

```go
func UrlReportedMalicious() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResultOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflarePageShieldConnectionsListResult
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldConnectionsList.DataCloudflarePageShieldConnectionsListResult">DataCloudflarePageShieldConnectionsListResult</a>

---



