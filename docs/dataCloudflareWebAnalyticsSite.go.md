# `dataCloudflareWebAnalyticsSite` Submodule <a name="`dataCloudflareWebAnalyticsSite` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareWebAnalyticsSite <a name="DataCloudflareWebAnalyticsSite" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/web_analytics_site cloudflare_web_analytics_site}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarewebanalyticssite"

datacloudflarewebanalyticssite.NewDataCloudflareWebAnalyticsSite(scope Construct, id *string, config DataCloudflareWebAnalyticsSiteConfig) DataCloudflareWebAnalyticsSite
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteConfig">DataCloudflareWebAnalyticsSiteConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteConfig">DataCloudflareWebAnalyticsSiteConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.resetSiteId">ResetSiteId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.putFilter"></a>

```go
func PutFilter(value DataCloudflareWebAnalyticsSiteFilter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilter">DataCloudflareWebAnalyticsSiteFilter</a>

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetSiteId` <a name="ResetSiteId" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.resetSiteId"></a>

```go
func ResetSiteId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareWebAnalyticsSite resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarewebanalyticssite"

datacloudflarewebanalyticssite.DataCloudflareWebAnalyticsSite_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarewebanalyticssite"

datacloudflarewebanalyticssite.DataCloudflareWebAnalyticsSite_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarewebanalyticssite"

datacloudflarewebanalyticssite.DataCloudflareWebAnalyticsSite_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarewebanalyticssite"

datacloudflarewebanalyticssite.DataCloudflareWebAnalyticsSite_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataCloudflareWebAnalyticsSite resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareWebAnalyticsSite to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareWebAnalyticsSite that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/web_analytics_site#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareWebAnalyticsSite to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.autoInstall">AutoInstall</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.created">Created</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference">DataCloudflareWebAnalyticsSiteFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.rules">Rules</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesList">DataCloudflareWebAnalyticsSiteRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.ruleset">Ruleset</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference">DataCloudflareWebAnalyticsSiteRulesetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.siteTag">SiteTag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.siteToken">SiteToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.snippet">Snippet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.siteIdInput">SiteIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.siteId">SiteId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AutoInstall`<sup>Required</sup> <a name="AutoInstall" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.autoInstall"></a>

```go
func AutoInstall() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Created`<sup>Required</sup> <a name="Created" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.created"></a>

```go
func Created() *string
```

- *Type:* *string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.filter"></a>

```go
func Filter() DataCloudflareWebAnalyticsSiteFilterOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference">DataCloudflareWebAnalyticsSiteFilterOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.rules"></a>

```go
func Rules() DataCloudflareWebAnalyticsSiteRulesList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesList">DataCloudflareWebAnalyticsSiteRulesList</a>

---

##### `Ruleset`<sup>Required</sup> <a name="Ruleset" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.ruleset"></a>

```go
func Ruleset() DataCloudflareWebAnalyticsSiteRulesetOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference">DataCloudflareWebAnalyticsSiteRulesetOutputReference</a>

---

##### `SiteTag`<sup>Required</sup> <a name="SiteTag" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.siteTag"></a>

```go
func SiteTag() *string
```

- *Type:* *string

---

##### `SiteToken`<sup>Required</sup> <a name="SiteToken" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.siteToken"></a>

```go
func SiteToken() *string
```

- *Type:* *string

---

##### `Snippet`<sup>Required</sup> <a name="Snippet" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.snippet"></a>

```go
func Snippet() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `SiteIdInput`<sup>Optional</sup> <a name="SiteIdInput" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.siteIdInput"></a>

```go
func SiteIdInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `SiteId`<sup>Required</sup> <a name="SiteId" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.siteId"></a>

```go
func SiteId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSite.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareWebAnalyticsSiteConfig <a name="DataCloudflareWebAnalyticsSiteConfig" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarewebanalyticssite"

&datacloudflarewebanalyticssite.DataCloudflareWebAnalyticsSiteConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	Filter: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilter,
	SiteId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteConfig.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilter">DataCloudflareWebAnalyticsSiteFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/web_analytics_site#filter DataCloudflareWebAnalyticsSite#filter}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteConfig.property.siteId">SiteId</a></code> | <code>*string</code> | Identifier. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/web_analytics_site#account_id DataCloudflareWebAnalyticsSite#account_id}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteConfig.property.filter"></a>

```go
Filter DataCloudflareWebAnalyticsSiteFilter
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilter">DataCloudflareWebAnalyticsSiteFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/web_analytics_site#filter DataCloudflareWebAnalyticsSite#filter}.

---

##### `SiteId`<sup>Optional</sup> <a name="SiteId" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteConfig.property.siteId"></a>

```go
SiteId *string
```

- *Type:* *string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/web_analytics_site#site_id DataCloudflareWebAnalyticsSite#site_id}

---

### DataCloudflareWebAnalyticsSiteFilter <a name="DataCloudflareWebAnalyticsSiteFilter" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarewebanalyticssite"

&datacloudflarewebanalyticssite.DataCloudflareWebAnalyticsSiteFilter {
	OrderBy: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilter.property.orderBy">OrderBy</a></code> | <code>*string</code> | The property used to sort the list of results. Available values: "host", "created". |

---

##### `OrderBy`<sup>Optional</sup> <a name="OrderBy" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilter.property.orderBy"></a>

```go
OrderBy *string
```

- *Type:* *string

The property used to sort the list of results. Available values: "host", "created".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/web_analytics_site#order_by DataCloudflareWebAnalyticsSite#order_by}

---

### DataCloudflareWebAnalyticsSiteRules <a name="DataCloudflareWebAnalyticsSiteRules" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarewebanalyticssite"

&datacloudflarewebanalyticssite.DataCloudflareWebAnalyticsSiteRules {

}
```


### DataCloudflareWebAnalyticsSiteRuleset <a name="DataCloudflareWebAnalyticsSiteRuleset" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRuleset"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRuleset.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarewebanalyticssite"

&datacloudflarewebanalyticssite.DataCloudflareWebAnalyticsSiteRuleset {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareWebAnalyticsSiteFilterOutputReference <a name="DataCloudflareWebAnalyticsSiteFilterOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarewebanalyticssite"

datacloudflarewebanalyticssite.NewDataCloudflareWebAnalyticsSiteFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareWebAnalyticsSiteFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.resetOrderBy">ResetOrderBy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOrderBy` <a name="ResetOrderBy" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.resetOrderBy"></a>

```go
func ResetOrderBy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.property.orderByInput">OrderByInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.property.orderBy">OrderBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OrderByInput`<sup>Optional</sup> <a name="OrderByInput" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.property.orderByInput"></a>

```go
func OrderByInput() *string
```

- *Type:* *string

---

##### `OrderBy`<sup>Required</sup> <a name="OrderBy" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.property.orderBy"></a>

```go
func OrderBy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataCloudflareWebAnalyticsSiteRulesetOutputReference <a name="DataCloudflareWebAnalyticsSiteRulesetOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarewebanalyticssite"

datacloudflarewebanalyticssite.NewDataCloudflareWebAnalyticsSiteRulesetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareWebAnalyticsSiteRulesetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.property.zoneName">ZoneName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.property.zoneTag">ZoneTag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRuleset">DataCloudflareWebAnalyticsSiteRuleset</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ZoneName`<sup>Required</sup> <a name="ZoneName" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.property.zoneName"></a>

```go
func ZoneName() *string
```

- *Type:* *string

---

##### `ZoneTag`<sup>Required</sup> <a name="ZoneTag" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.property.zoneTag"></a>

```go
func ZoneTag() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesetOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareWebAnalyticsSiteRuleset
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRuleset">DataCloudflareWebAnalyticsSiteRuleset</a>

---


### DataCloudflareWebAnalyticsSiteRulesList <a name="DataCloudflareWebAnalyticsSiteRulesList" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarewebanalyticssite"

datacloudflarewebanalyticssite.NewDataCloudflareWebAnalyticsSiteRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareWebAnalyticsSiteRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesList.get"></a>

```go
func Get(index *f64) DataCloudflareWebAnalyticsSiteRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareWebAnalyticsSiteRulesOutputReference <a name="DataCloudflareWebAnalyticsSiteRulesOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarewebanalyticssite"

datacloudflarewebanalyticssite.NewDataCloudflareWebAnalyticsSiteRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareWebAnalyticsSiteRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.property.created">Created</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.property.inclusive">Inclusive</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.property.isPaused">IsPaused</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.property.paths">Paths</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRules">DataCloudflareWebAnalyticsSiteRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Created`<sup>Required</sup> <a name="Created" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.property.created"></a>

```go
func Created() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Inclusive`<sup>Required</sup> <a name="Inclusive" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.property.inclusive"></a>

```go
func Inclusive() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsPaused`<sup>Required</sup> <a name="IsPaused" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.property.isPaused"></a>

```go
func IsPaused() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Paths`<sup>Required</sup> <a name="Paths" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.property.paths"></a>

```go
func Paths() *[]*string
```

- *Type:* *[]*string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareWebAnalyticsSiteRules
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWebAnalyticsSite.DataCloudflareWebAnalyticsSiteRules">DataCloudflareWebAnalyticsSiteRules</a>

---



