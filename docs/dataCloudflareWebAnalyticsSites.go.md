# `dataCloudflareWebAnalyticsSites` Submodule <a name="`dataCloudflareWebAnalyticsSites` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareWebAnalyticsSites <a name="DataCloudflareWebAnalyticsSites" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/web_analytics_sites cloudflare_web_analytics_sites}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarewebanalyticssites"

datacloudflarewebanalyticssites.NewDataCloudflareWebAnalyticsSites(scope Construct, id *string, config DataCloudflareWebAnalyticsSitesConfig) DataCloudflareWebAnalyticsSites
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesConfig">DataCloudflareWebAnalyticsSitesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesConfig">DataCloudflareWebAnalyticsSitesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.resetMaxItems">ResetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.resetOrderBy">ResetOrderBy</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetMaxItems` <a name="ResetMaxItems" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.resetMaxItems"></a>

```go
func ResetMaxItems()
```

##### `ResetOrderBy` <a name="ResetOrderBy" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.resetOrderBy"></a>

```go
func ResetOrderBy()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareWebAnalyticsSites resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarewebanalyticssites"

datacloudflarewebanalyticssites.DataCloudflareWebAnalyticsSites_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarewebanalyticssites"

datacloudflarewebanalyticssites.DataCloudflareWebAnalyticsSites_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarewebanalyticssites"

datacloudflarewebanalyticssites.DataCloudflareWebAnalyticsSites_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarewebanalyticssites"

datacloudflarewebanalyticssites.DataCloudflareWebAnalyticsSites_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataCloudflareWebAnalyticsSites resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareWebAnalyticsSites to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareWebAnalyticsSites that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/web_analytics_sites#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareWebAnalyticsSites to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.property.result">Result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultList">DataCloudflareWebAnalyticsSitesResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.property.maxItemsInput">MaxItemsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.property.orderByInput">OrderByInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.property.maxItems">MaxItems</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.property.orderBy">OrderBy</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.property.result"></a>

```go
func Result() DataCloudflareWebAnalyticsSitesResultList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultList">DataCloudflareWebAnalyticsSitesResultList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `MaxItemsInput`<sup>Optional</sup> <a name="MaxItemsInput" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.property.maxItemsInput"></a>

```go
func MaxItemsInput() *f64
```

- *Type:* *f64

---

##### `OrderByInput`<sup>Optional</sup> <a name="OrderByInput" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.property.orderByInput"></a>

```go
func OrderByInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `MaxItems`<sup>Required</sup> <a name="MaxItems" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.property.maxItems"></a>

```go
func MaxItems() *f64
```

- *Type:* *f64

---

##### `OrderBy`<sup>Required</sup> <a name="OrderBy" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.property.orderBy"></a>

```go
func OrderBy() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSites.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareWebAnalyticsSitesConfig <a name="DataCloudflareWebAnalyticsSitesConfig" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarewebanalyticssites"

&datacloudflarewebanalyticssites.DataCloudflareWebAnalyticsSitesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	MaxItems: *f64,
	OrderBy: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesConfig.property.maxItems">MaxItems</a></code> | <code>*f64</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesConfig.property.orderBy">OrderBy</a></code> | <code>*string</code> | The property used to sort the list of results. Available values: "host", "created". |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/web_analytics_sites#account_id DataCloudflareWebAnalyticsSites#account_id}

---

##### `MaxItems`<sup>Optional</sup> <a name="MaxItems" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesConfig.property.maxItems"></a>

```go
MaxItems *f64
```

- *Type:* *f64

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/web_analytics_sites#max_items DataCloudflareWebAnalyticsSites#max_items}

---

##### `OrderBy`<sup>Optional</sup> <a name="OrderBy" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesConfig.property.orderBy"></a>

```go
OrderBy *string
```

- *Type:* *string

The property used to sort the list of results. Available values: "host", "created".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/web_analytics_sites#order_by DataCloudflareWebAnalyticsSites#order_by}

---

### DataCloudflareWebAnalyticsSitesResult <a name="DataCloudflareWebAnalyticsSitesResult" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResult.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarewebanalyticssites"

&datacloudflarewebanalyticssites.DataCloudflareWebAnalyticsSitesResult {

}
```


### DataCloudflareWebAnalyticsSitesResultRules <a name="DataCloudflareWebAnalyticsSitesResultRules" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarewebanalyticssites"

&datacloudflarewebanalyticssites.DataCloudflareWebAnalyticsSitesResultRules {

}
```


### DataCloudflareWebAnalyticsSitesResultRuleset <a name="DataCloudflareWebAnalyticsSitesResultRuleset" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRuleset"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRuleset.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarewebanalyticssites"

&datacloudflarewebanalyticssites.DataCloudflareWebAnalyticsSitesResultRuleset {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareWebAnalyticsSitesResultList <a name="DataCloudflareWebAnalyticsSitesResultList" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarewebanalyticssites"

datacloudflarewebanalyticssites.NewDataCloudflareWebAnalyticsSitesResultList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareWebAnalyticsSitesResultList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultList.get"></a>

```go
func Get(index *f64) DataCloudflareWebAnalyticsSitesResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareWebAnalyticsSitesResultOutputReference <a name="DataCloudflareWebAnalyticsSitesResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarewebanalyticssites"

datacloudflarewebanalyticssites.NewDataCloudflareWebAnalyticsSitesResultOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareWebAnalyticsSitesResultOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.property.autoInstall">AutoInstall</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.property.created">Created</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.property.rules">Rules</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesList">DataCloudflareWebAnalyticsSitesResultRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.property.ruleset">Ruleset</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference">DataCloudflareWebAnalyticsSitesResultRulesetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.property.siteTag">SiteTag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.property.siteToken">SiteToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.property.snippet">Snippet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResult">DataCloudflareWebAnalyticsSitesResult</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoInstall`<sup>Required</sup> <a name="AutoInstall" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.property.autoInstall"></a>

```go
func AutoInstall() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Created`<sup>Required</sup> <a name="Created" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.property.created"></a>

```go
func Created() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.property.rules"></a>

```go
func Rules() DataCloudflareWebAnalyticsSitesResultRulesList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesList">DataCloudflareWebAnalyticsSitesResultRulesList</a>

---

##### `Ruleset`<sup>Required</sup> <a name="Ruleset" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.property.ruleset"></a>

```go
func Ruleset() DataCloudflareWebAnalyticsSitesResultRulesetOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference">DataCloudflareWebAnalyticsSitesResultRulesetOutputReference</a>

---

##### `SiteTag`<sup>Required</sup> <a name="SiteTag" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.property.siteTag"></a>

```go
func SiteTag() *string
```

- *Type:* *string

---

##### `SiteToken`<sup>Required</sup> <a name="SiteToken" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.property.siteToken"></a>

```go
func SiteToken() *string
```

- *Type:* *string

---

##### `Snippet`<sup>Required</sup> <a name="Snippet" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.property.snippet"></a>

```go
func Snippet() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareWebAnalyticsSitesResult
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResult">DataCloudflareWebAnalyticsSitesResult</a>

---


### DataCloudflareWebAnalyticsSitesResultRulesetOutputReference <a name="DataCloudflareWebAnalyticsSitesResultRulesetOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarewebanalyticssites"

datacloudflarewebanalyticssites.NewDataCloudflareWebAnalyticsSitesResultRulesetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareWebAnalyticsSitesResultRulesetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.property.zoneName">ZoneName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.property.zoneTag">ZoneTag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRuleset">DataCloudflareWebAnalyticsSitesResultRuleset</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ZoneName`<sup>Required</sup> <a name="ZoneName" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.property.zoneName"></a>

```go
func ZoneName() *string
```

- *Type:* *string

---

##### `ZoneTag`<sup>Required</sup> <a name="ZoneTag" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.property.zoneTag"></a>

```go
func ZoneTag() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareWebAnalyticsSitesResultRuleset
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRuleset">DataCloudflareWebAnalyticsSitesResultRuleset</a>

---


### DataCloudflareWebAnalyticsSitesResultRulesList <a name="DataCloudflareWebAnalyticsSitesResultRulesList" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarewebanalyticssites"

datacloudflarewebanalyticssites.NewDataCloudflareWebAnalyticsSitesResultRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareWebAnalyticsSitesResultRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesList.get"></a>

```go
func Get(index *f64) DataCloudflareWebAnalyticsSitesResultRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareWebAnalyticsSitesResultRulesOutputReference <a name="DataCloudflareWebAnalyticsSitesResultRulesOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarewebanalyticssites"

datacloudflarewebanalyticssites.NewDataCloudflareWebAnalyticsSitesResultRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareWebAnalyticsSitesResultRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.property.created">Created</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.property.inclusive">Inclusive</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.property.isPaused">IsPaused</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.property.paths">Paths</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRules">DataCloudflareWebAnalyticsSitesResultRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Created`<sup>Required</sup> <a name="Created" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.property.created"></a>

```go
func Created() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Inclusive`<sup>Required</sup> <a name="Inclusive" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.property.inclusive"></a>

```go
func Inclusive() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsPaused`<sup>Required</sup> <a name="IsPaused" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.property.isPaused"></a>

```go
func IsPaused() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Paths`<sup>Required</sup> <a name="Paths" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.property.paths"></a>

```go
func Paths() *[]*string
```

- *Type:* *[]*string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareWebAnalyticsSitesResultRules
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSites.DataCloudflareWebAnalyticsSitesResultRules">DataCloudflareWebAnalyticsSitesResultRules</a>

---



