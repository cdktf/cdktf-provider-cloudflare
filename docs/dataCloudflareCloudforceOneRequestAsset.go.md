# `dataCloudflareCloudforceOneRequestAsset` Submodule <a name="`dataCloudflareCloudforceOneRequestAsset` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareCloudforceOneRequestAsset <a name="DataCloudflareCloudforceOneRequestAsset" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/cloudforce_one_request_asset cloudflare_cloudforce_one_request_asset}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarecloudforceonerequestasset"

datacloudflarecloudforceonerequestasset.NewDataCloudflareCloudforceOneRequestAsset(scope Construct, id *string, config DataCloudflareCloudforceOneRequestAssetConfig) DataCloudflareCloudforceOneRequestAsset
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAssetConfig">DataCloudflareCloudforceOneRequestAssetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAssetConfig">DataCloudflareCloudforceOneRequestAssetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareCloudforceOneRequestAsset resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarecloudforceonerequestasset"

datacloudflarecloudforceonerequestasset.DataCloudflareCloudforceOneRequestAsset_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarecloudforceonerequestasset"

datacloudflarecloudforceonerequestasset.DataCloudflareCloudforceOneRequestAsset_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarecloudforceonerequestasset"

datacloudflarecloudforceonerequestasset.DataCloudflareCloudforceOneRequestAsset_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarecloudforceonerequestasset"

datacloudflarecloudforceonerequestasset.DataCloudflareCloudforceOneRequestAsset_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataCloudflareCloudforceOneRequestAsset resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareCloudforceOneRequestAsset to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareCloudforceOneRequestAsset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/cloudforce_one_request_asset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareCloudforceOneRequestAsset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.created">Created</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.fileType">FileType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.id">Id</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.assetIdInput">AssetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.requestIdInput">RequestIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.assetId">AssetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.requestId">RequestId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Created`<sup>Required</sup> <a name="Created" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.created"></a>

```go
func Created() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `FileType`<sup>Required</sup> <a name="FileType" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.fileType"></a>

```go
func FileType() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.id"></a>

```go
func Id() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `AssetIdInput`<sup>Optional</sup> <a name="AssetIdInput" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.assetIdInput"></a>

```go
func AssetIdInput() *string
```

- *Type:* *string

---

##### `RequestIdInput`<sup>Optional</sup> <a name="RequestIdInput" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.requestIdInput"></a>

```go
func RequestIdInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `AssetId`<sup>Required</sup> <a name="AssetId" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.assetId"></a>

```go
func AssetId() *string
```

- *Type:* *string

---

##### `RequestId`<sup>Required</sup> <a name="RequestId" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.requestId"></a>

```go
func RequestId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAsset.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareCloudforceOneRequestAssetConfig <a name="DataCloudflareCloudforceOneRequestAssetConfig" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAssetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAssetConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarecloudforceonerequestasset"

&datacloudflarecloudforceonerequestasset.DataCloudflareCloudforceOneRequestAssetConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	AssetId: *string,
	RequestId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAssetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAssetConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAssetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAssetConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAssetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAssetConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAssetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAssetConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAssetConfig.property.assetId">AssetId</a></code> | <code>*string</code> | UUID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAssetConfig.property.requestId">RequestId</a></code> | <code>*string</code> | UUID. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAssetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAssetConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAssetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAssetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAssetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAssetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAssetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAssetConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/cloudforce_one_request_asset#account_id DataCloudflareCloudforceOneRequestAsset#account_id}

---

##### `AssetId`<sup>Required</sup> <a name="AssetId" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAssetConfig.property.assetId"></a>

```go
AssetId *string
```

- *Type:* *string

UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/cloudforce_one_request_asset#asset_id DataCloudflareCloudforceOneRequestAsset#asset_id}

---

##### `RequestId`<sup>Required</sup> <a name="RequestId" id="@cdktf/provider-cloudflare.dataCloudflareCloudforceOneRequestAsset.DataCloudflareCloudforceOneRequestAssetConfig.property.requestId"></a>

```go
RequestId *string
```

- *Type:* *string

UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/cloudforce_one_request_asset#request_id DataCloudflareCloudforceOneRequestAsset#request_id}

---



