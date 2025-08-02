# `dataCloudflareStreamWatermark` Submodule <a name="`dataCloudflareStreamWatermark` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareStreamWatermark"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareStreamWatermarkA <a name="DataCloudflareStreamWatermarkA" id="@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/stream_watermark cloudflare_stream_watermark}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarestreamwatermark"

datacloudflarestreamwatermark.NewDataCloudflareStreamWatermarkA(scope Construct, id *string, config DataCloudflareStreamWatermarkAConfig) DataCloudflareStreamWatermarkA
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkAConfig">DataCloudflareStreamWatermarkAConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkAConfig">DataCloudflareStreamWatermarkAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareStreamWatermarkA resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarestreamwatermark"

datacloudflarestreamwatermark.DataCloudflareStreamWatermarkA_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarestreamwatermark"

datacloudflarestreamwatermark.DataCloudflareStreamWatermarkA_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarestreamwatermark"

datacloudflarestreamwatermark.DataCloudflareStreamWatermarkA_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarestreamwatermark"

datacloudflarestreamwatermark.DataCloudflareStreamWatermarkA_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataCloudflareStreamWatermarkA resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareStreamWatermarkA to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareStreamWatermarkA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/stream_watermark#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareStreamWatermarkA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.property.created">Created</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.property.downloadedFrom">DownloadedFrom</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.property.height">Height</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.property.opacity">Opacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.property.padding">Padding</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.property.position">Position</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.property.scale">Scale</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.property.size">Size</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.property.width">Width</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.property.identifierInput">IdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.property.identifier">Identifier</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Created`<sup>Required</sup> <a name="Created" id="@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.property.created"></a>

```go
func Created() *string
```

- *Type:* *string

---

##### `DownloadedFrom`<sup>Required</sup> <a name="DownloadedFrom" id="@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.property.downloadedFrom"></a>

```go
func DownloadedFrom() *string
```

- *Type:* *string

---

##### `Height`<sup>Required</sup> <a name="Height" id="@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.property.height"></a>

```go
func Height() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Opacity`<sup>Required</sup> <a name="Opacity" id="@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.property.opacity"></a>

```go
func Opacity() *f64
```

- *Type:* *f64

---

##### `Padding`<sup>Required</sup> <a name="Padding" id="@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.property.padding"></a>

```go
func Padding() *f64
```

- *Type:* *f64

---

##### `Position`<sup>Required</sup> <a name="Position" id="@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.property.position"></a>

```go
func Position() *string
```

- *Type:* *string

---

##### `Scale`<sup>Required</sup> <a name="Scale" id="@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.property.scale"></a>

```go
func Scale() *f64
```

- *Type:* *f64

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.property.size"></a>

```go
func Size() *f64
```

- *Type:* *f64

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `Width`<sup>Required</sup> <a name="Width" id="@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.property.width"></a>

```go
func Width() *f64
```

- *Type:* *f64

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `IdentifierInput`<sup>Optional</sup> <a name="IdentifierInput" id="@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.property.identifierInput"></a>

```go
func IdentifierInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.property.identifier"></a>

```go
func Identifier() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkA.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareStreamWatermarkAConfig <a name="DataCloudflareStreamWatermarkAConfig" id="@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkAConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarestreamwatermark"

&datacloudflarestreamwatermark.DataCloudflareStreamWatermarkAConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	Identifier: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkAConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkAConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkAConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkAConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkAConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkAConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkAConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkAConfig.property.accountId">AccountId</a></code> | <code>*string</code> | The account identifier tag. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkAConfig.property.identifier">Identifier</a></code> | <code>*string</code> | The unique identifier for a watermark profile. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkAConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkAConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkAConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkAConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkAConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkAConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkAConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkAConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

The account identifier tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/stream_watermark#account_id DataCloudflareStreamWatermarkA#account_id}

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktf/provider-cloudflare.dataCloudflareStreamWatermark.DataCloudflareStreamWatermarkAConfig.property.identifier"></a>

```go
Identifier *string
```

- *Type:* *string

The unique identifier for a watermark profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/stream_watermark#identifier DataCloudflareStreamWatermarkA#identifier}

---



