# `dataCloudflareApiShieldOperation` Submodule <a name="`dataCloudflareApiShieldOperation` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareApiShieldOperation <a name="DataCloudflareApiShieldOperation" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/api_shield_operation cloudflare_api_shield_operation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflareapishieldoperation"

datacloudflareapishieldoperation.NewDataCloudflareApiShieldOperation(scope Construct, id *string, config DataCloudflareApiShieldOperationConfig) DataCloudflareApiShieldOperation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationConfig">DataCloudflareApiShieldOperationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationConfig">DataCloudflareApiShieldOperationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.resetFeature">ResetFeature</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.resetOperationId">ResetOperationId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.putFilter"></a>

```go
func PutFilter(value DataCloudflareApiShieldOperationFilter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilter">DataCloudflareApiShieldOperationFilter</a>

---

##### `ResetFeature` <a name="ResetFeature" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.resetFeature"></a>

```go
func ResetFeature()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetOperationId` <a name="ResetOperationId" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.resetOperationId"></a>

```go
func ResetOperationId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareApiShieldOperation resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflareapishieldoperation"

datacloudflareapishieldoperation.DataCloudflareApiShieldOperation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflareapishieldoperation"

datacloudflareapishieldoperation.DataCloudflareApiShieldOperation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflareapishieldoperation"

datacloudflareapishieldoperation.DataCloudflareApiShieldOperation_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflareapishieldoperation"

datacloudflareapishieldoperation.DataCloudflareApiShieldOperation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataCloudflareApiShieldOperation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareApiShieldOperation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareApiShieldOperation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/api_shield_operation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareApiShieldOperation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.property.features">Features</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesOutputReference">DataCloudflareApiShieldOperationFeaturesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilterOutputReference">DataCloudflareApiShieldOperationFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.property.lastUpdated">LastUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.property.method">Method</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.property.featureInput">FeatureInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.property.operationIdInput">OperationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.property.zoneIdInput">ZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.property.feature">Feature</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.property.operationId">OperationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `Features`<sup>Required</sup> <a name="Features" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.property.features"></a>

```go
func Features() DataCloudflareApiShieldOperationFeaturesOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesOutputReference">DataCloudflareApiShieldOperationFeaturesOutputReference</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.property.filter"></a>

```go
func Filter() DataCloudflareApiShieldOperationFilterOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilterOutputReference">DataCloudflareApiShieldOperationFilterOutputReference</a>

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastUpdated`<sup>Required</sup> <a name="LastUpdated" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.property.lastUpdated"></a>

```go
func LastUpdated() *string
```

- *Type:* *string

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.property.method"></a>

```go
func Method() *string
```

- *Type:* *string

---

##### `FeatureInput`<sup>Optional</sup> <a name="FeatureInput" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.property.featureInput"></a>

```go
func FeatureInput() *[]*string
```

- *Type:* *[]*string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `OperationIdInput`<sup>Optional</sup> <a name="OperationIdInput" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.property.operationIdInput"></a>

```go
func OperationIdInput() *string
```

- *Type:* *string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.property.zoneIdInput"></a>

```go
func ZoneIdInput() *string
```

- *Type:* *string

---

##### `Feature`<sup>Required</sup> <a name="Feature" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.property.feature"></a>

```go
func Feature() *[]*string
```

- *Type:* *[]*string

---

##### `OperationId`<sup>Required</sup> <a name="OperationId" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.property.operationId"></a>

```go
func OperationId() *string
```

- *Type:* *string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareApiShieldOperationConfig <a name="DataCloudflareApiShieldOperationConfig" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflareapishieldoperation"

&datacloudflareapishieldoperation.DataCloudflareApiShieldOperationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ZoneId: *string,
	Feature: *[]*string,
	Filter: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilter,
	OperationId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationConfig.property.zoneId">ZoneId</a></code> | <code>*string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationConfig.property.feature">Feature</a></code> | <code>*[]*string</code> | Add feature(s) to the results. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationConfig.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilter">DataCloudflareApiShieldOperationFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/api_shield_operation#filter DataCloudflareApiShieldOperation#filter}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationConfig.property.operationId">OperationId</a></code> | <code>*string</code> | UUID. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationConfig.property.zoneId"></a>

```go
ZoneId *string
```

- *Type:* *string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/api_shield_operation#zone_id DataCloudflareApiShieldOperation#zone_id}

---

##### `Feature`<sup>Optional</sup> <a name="Feature" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationConfig.property.feature"></a>

```go
Feature *[]*string
```

- *Type:* *[]*string

Add feature(s) to the results.

The feature name that is given here corresponds to the resulting feature object. Have a look at the top-level object description for more details on the specific meaning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/api_shield_operation#feature DataCloudflareApiShieldOperation#feature}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationConfig.property.filter"></a>

```go
Filter DataCloudflareApiShieldOperationFilter
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilter">DataCloudflareApiShieldOperationFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/api_shield_operation#filter DataCloudflareApiShieldOperation#filter}.

---

##### `OperationId`<sup>Optional</sup> <a name="OperationId" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationConfig.property.operationId"></a>

```go
OperationId *string
```

- *Type:* *string

UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/api_shield_operation#operation_id DataCloudflareApiShieldOperation#operation_id}

---

### DataCloudflareApiShieldOperationFeatures <a name="DataCloudflareApiShieldOperationFeatures" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeatures.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflareapishieldoperation"

&datacloudflareapishieldoperation.DataCloudflareApiShieldOperationFeatures {

}
```


### DataCloudflareApiShieldOperationFeaturesApiRouting <a name="DataCloudflareApiShieldOperationFeaturesApiRouting" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesApiRouting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesApiRouting.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflareapishieldoperation"

&datacloudflareapishieldoperation.DataCloudflareApiShieldOperationFeaturesApiRouting {

}
```


### DataCloudflareApiShieldOperationFeaturesConfidenceIntervals <a name="DataCloudflareApiShieldOperationFeaturesConfidenceIntervals" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervals"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervals.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflareapishieldoperation"

&datacloudflareapishieldoperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervals {

}
```


### DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThreshold <a name="DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThreshold" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThreshold.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflareapishieldoperation"

&datacloudflareapishieldoperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThreshold {

}
```


### DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervals <a name="DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervals" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervals"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervals.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflareapishieldoperation"

&datacloudflareapishieldoperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervals {

}
```


### DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90 <a name="DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflareapishieldoperation"

&datacloudflareapishieldoperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90 {

}
```


### DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95 <a name="DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflareapishieldoperation"

&datacloudflareapishieldoperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95 {

}
```


### DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99 <a name="DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflareapishieldoperation"

&datacloudflareapishieldoperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99 {

}
```


### DataCloudflareApiShieldOperationFeaturesParameterSchemas <a name="DataCloudflareApiShieldOperationFeaturesParameterSchemas" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemas"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemas.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflareapishieldoperation"

&datacloudflareapishieldoperation.DataCloudflareApiShieldOperationFeaturesParameterSchemas {

}
```


### DataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemas <a name="DataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemas" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemas"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemas.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflareapishieldoperation"

&datacloudflareapishieldoperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemas {

}
```


### DataCloudflareApiShieldOperationFeaturesSchemaInfo <a name="DataCloudflareApiShieldOperationFeaturesSchemaInfo" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflareapishieldoperation"

&datacloudflareapishieldoperation.DataCloudflareApiShieldOperationFeaturesSchemaInfo {

}
```


### DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchema <a name="DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchema" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchema"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchema.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflareapishieldoperation"

&datacloudflareapishieldoperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchema {

}
```


### DataCloudflareApiShieldOperationFeaturesThresholds <a name="DataCloudflareApiShieldOperationFeaturesThresholds" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesThresholds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesThresholds.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflareapishieldoperation"

&datacloudflareapishieldoperation.DataCloudflareApiShieldOperationFeaturesThresholds {

}
```


### DataCloudflareApiShieldOperationFilter <a name="DataCloudflareApiShieldOperationFilter" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflareapishieldoperation"

&datacloudflareapishieldoperation.DataCloudflareApiShieldOperationFilter {
	Direction: *string,
	Endpoint: *string,
	Feature: *[]*string,
	Host: *[]*string,
	Method: *[]*string,
	Order: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilter.property.direction">Direction</a></code> | <code>*string</code> | Direction to order results. Available values: "asc", "desc". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilter.property.endpoint">Endpoint</a></code> | <code>*string</code> | Filter results to only include endpoints containing this pattern. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilter.property.feature">Feature</a></code> | <code>*[]*string</code> | Add feature(s) to the results. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilter.property.host">Host</a></code> | <code>*[]*string</code> | Filter results to only include the specified hosts. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilter.property.method">Method</a></code> | <code>*[]*string</code> | Filter results to only include the specified HTTP methods. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilter.property.order">Order</a></code> | <code>*string</code> | Field to order by. |

---

##### `Direction`<sup>Optional</sup> <a name="Direction" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilter.property.direction"></a>

```go
Direction *string
```

- *Type:* *string

Direction to order results. Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/api_shield_operation#direction DataCloudflareApiShieldOperation#direction}

---

##### `Endpoint`<sup>Optional</sup> <a name="Endpoint" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilter.property.endpoint"></a>

```go
Endpoint *string
```

- *Type:* *string

Filter results to only include endpoints containing this pattern.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/api_shield_operation#endpoint DataCloudflareApiShieldOperation#endpoint}

---

##### `Feature`<sup>Optional</sup> <a name="Feature" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilter.property.feature"></a>

```go
Feature *[]*string
```

- *Type:* *[]*string

Add feature(s) to the results.

The feature name that is given here corresponds to the resulting feature object. Have a look at the top-level object description for more details on the specific meaning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/api_shield_operation#feature DataCloudflareApiShieldOperation#feature}

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilter.property.host"></a>

```go
Host *[]*string
```

- *Type:* *[]*string

Filter results to only include the specified hosts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/api_shield_operation#host DataCloudflareApiShieldOperation#host}

---

##### `Method`<sup>Optional</sup> <a name="Method" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilter.property.method"></a>

```go
Method *[]*string
```

- *Type:* *[]*string

Filter results to only include the specified HTTP methods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/api_shield_operation#method DataCloudflareApiShieldOperation#method}

---

##### `Order`<sup>Optional</sup> <a name="Order" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilter.property.order"></a>

```go
Order *string
```

- *Type:* *string

Field to order by.

When requesting a feature, the feature keys are available for ordering as well, e.g., `thresholds.suggested_threshold`.
Available values: "method", "host", "endpoint", "thresholds.$key".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/api_shield_operation#order DataCloudflareApiShieldOperation#order}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareApiShieldOperationFeaturesApiRoutingOutputReference <a name="DataCloudflareApiShieldOperationFeaturesApiRoutingOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesApiRoutingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesApiRoutingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflareapishieldoperation"

datacloudflareapishieldoperation.NewDataCloudflareApiShieldOperationFeaturesApiRoutingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareApiShieldOperationFeaturesApiRoutingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesApiRoutingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesApiRoutingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesApiRoutingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesApiRoutingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesApiRoutingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesApiRoutingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesApiRoutingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesApiRoutingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesApiRoutingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesApiRoutingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesApiRoutingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesApiRoutingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesApiRoutingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesApiRoutingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesApiRoutingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesApiRoutingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesApiRoutingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesApiRoutingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesApiRoutingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesApiRoutingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesApiRoutingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesApiRoutingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesApiRoutingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesApiRoutingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesApiRoutingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesApiRoutingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesApiRoutingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesApiRoutingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesApiRoutingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesApiRoutingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesApiRoutingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesApiRoutingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesApiRoutingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesApiRoutingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesApiRoutingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesApiRoutingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesApiRoutingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesApiRoutingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesApiRoutingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesApiRoutingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesApiRoutingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesApiRoutingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesApiRoutingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesApiRoutingOutputReference.property.lastUpdated">LastUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesApiRoutingOutputReference.property.route">Route</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesApiRoutingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesApiRouting">DataCloudflareApiShieldOperationFeaturesApiRouting</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesApiRoutingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesApiRoutingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LastUpdated`<sup>Required</sup> <a name="LastUpdated" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesApiRoutingOutputReference.property.lastUpdated"></a>

```go
func LastUpdated() *string
```

- *Type:* *string

---

##### `Route`<sup>Required</sup> <a name="Route" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesApiRoutingOutputReference.property.route"></a>

```go
func Route() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesApiRoutingOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareApiShieldOperationFeaturesApiRouting
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesApiRouting">DataCloudflareApiShieldOperationFeaturesApiRouting</a>

---


### DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsOutputReference <a name="DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflareapishieldoperation"

datacloudflareapishieldoperation.NewDataCloudflareApiShieldOperationFeaturesConfidenceIntervalsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsOutputReference.property.lastUpdated">LastUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsOutputReference.property.suggestedThreshold">SuggestedThreshold</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference">DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervals">DataCloudflareApiShieldOperationFeaturesConfidenceIntervals</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LastUpdated`<sup>Required</sup> <a name="LastUpdated" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsOutputReference.property.lastUpdated"></a>

```go
func LastUpdated() *string
```

- *Type:* *string

---

##### `SuggestedThreshold`<sup>Required</sup> <a name="SuggestedThreshold" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsOutputReference.property.suggestedThreshold"></a>

```go
func SuggestedThreshold() DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference">DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareApiShieldOperationFeaturesConfidenceIntervals
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervals">DataCloudflareApiShieldOperationFeaturesConfidenceIntervals</a>

---


### DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference <a name="DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflareapishieldoperation"

datacloudflareapishieldoperation.NewDataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.property.p90">P90</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference">DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.property.p95">P95</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference">DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.property.p99">P99</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference">DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervals">DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervals</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `P90`<sup>Required</sup> <a name="P90" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.property.p90"></a>

```go
func P90() DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference">DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference</a>

---

##### `P95`<sup>Required</sup> <a name="P95" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.property.p95"></a>

```go
func P95() DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference">DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference</a>

---

##### `P99`<sup>Required</sup> <a name="P99" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.property.p99"></a>

```go
func P99() DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference">DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervals
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervals">DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervals</a>

---


### DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference <a name="DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflareapishieldoperation"

datacloudflareapishieldoperation.NewDataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.property.lower">Lower</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.property.upper">Upper</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90">DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Lower`<sup>Required</sup> <a name="Lower" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.property.lower"></a>

```go
func Lower() *f64
```

- *Type:* *f64

---

##### `Upper`<sup>Required</sup> <a name="Upper" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.property.upper"></a>

```go
func Upper() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90">DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90</a>

---


### DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference <a name="DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflareapishieldoperation"

datacloudflareapishieldoperation.NewDataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.property.lower">Lower</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.property.upper">Upper</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95">DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Lower`<sup>Required</sup> <a name="Lower" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.property.lower"></a>

```go
func Lower() *f64
```

- *Type:* *f64

---

##### `Upper`<sup>Required</sup> <a name="Upper" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.property.upper"></a>

```go
func Upper() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95">DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95</a>

---


### DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference <a name="DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflareapishieldoperation"

datacloudflareapishieldoperation.NewDataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.property.lower">Lower</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.property.upper">Upper</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99">DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Lower`<sup>Required</sup> <a name="Lower" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.property.lower"></a>

```go
func Lower() *f64
```

- *Type:* *f64

---

##### `Upper`<sup>Required</sup> <a name="Upper" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.property.upper"></a>

```go
func Upper() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99">DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99</a>

---


### DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference <a name="DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflareapishieldoperation"

datacloudflareapishieldoperation.NewDataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.property.confidenceIntervals">ConfidenceIntervals</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference">DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.property.mean">Mean</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThreshold">DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThreshold</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConfidenceIntervals`<sup>Required</sup> <a name="ConfidenceIntervals" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.property.confidenceIntervals"></a>

```go
func ConfidenceIntervals() DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference">DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference</a>

---

##### `Mean`<sup>Required</sup> <a name="Mean" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.property.mean"></a>

```go
func Mean() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThreshold
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThreshold">DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThreshold</a>

---


### DataCloudflareApiShieldOperationFeaturesOutputReference <a name="DataCloudflareApiShieldOperationFeaturesOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflareapishieldoperation"

datacloudflareapishieldoperation.NewDataCloudflareApiShieldOperationFeaturesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareApiShieldOperationFeaturesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesOutputReference.property.apiRouting">ApiRouting</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesApiRoutingOutputReference">DataCloudflareApiShieldOperationFeaturesApiRoutingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesOutputReference.property.confidenceIntervals">ConfidenceIntervals</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsOutputReference">DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesOutputReference.property.parameterSchemas">ParameterSchemas</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasOutputReference">DataCloudflareApiShieldOperationFeaturesParameterSchemasOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesOutputReference.property.schemaInfo">SchemaInfo</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoOutputReference">DataCloudflareApiShieldOperationFeaturesSchemaInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesOutputReference.property.thresholds">Thresholds</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference">DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeatures">DataCloudflareApiShieldOperationFeatures</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiRouting`<sup>Required</sup> <a name="ApiRouting" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesOutputReference.property.apiRouting"></a>

```go
func ApiRouting() DataCloudflareApiShieldOperationFeaturesApiRoutingOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesApiRoutingOutputReference">DataCloudflareApiShieldOperationFeaturesApiRoutingOutputReference</a>

---

##### `ConfidenceIntervals`<sup>Required</sup> <a name="ConfidenceIntervals" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesOutputReference.property.confidenceIntervals"></a>

```go
func ConfidenceIntervals() DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsOutputReference">DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsOutputReference</a>

---

##### `ParameterSchemas`<sup>Required</sup> <a name="ParameterSchemas" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesOutputReference.property.parameterSchemas"></a>

```go
func ParameterSchemas() DataCloudflareApiShieldOperationFeaturesParameterSchemasOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasOutputReference">DataCloudflareApiShieldOperationFeaturesParameterSchemasOutputReference</a>

---

##### `SchemaInfo`<sup>Required</sup> <a name="SchemaInfo" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesOutputReference.property.schemaInfo"></a>

```go
func SchemaInfo() DataCloudflareApiShieldOperationFeaturesSchemaInfoOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoOutputReference">DataCloudflareApiShieldOperationFeaturesSchemaInfoOutputReference</a>

---

##### `Thresholds`<sup>Required</sup> <a name="Thresholds" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesOutputReference.property.thresholds"></a>

```go
func Thresholds() DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference">DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareApiShieldOperationFeatures
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeatures">DataCloudflareApiShieldOperationFeatures</a>

---


### DataCloudflareApiShieldOperationFeaturesParameterSchemasOutputReference <a name="DataCloudflareApiShieldOperationFeaturesParameterSchemasOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflareapishieldoperation"

datacloudflareapishieldoperation.NewDataCloudflareApiShieldOperationFeaturesParameterSchemasOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareApiShieldOperationFeaturesParameterSchemasOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasOutputReference.property.lastUpdated">LastUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasOutputReference.property.parameterSchemas">ParameterSchemas</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference">DataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemas">DataCloudflareApiShieldOperationFeaturesParameterSchemas</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LastUpdated`<sup>Required</sup> <a name="LastUpdated" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasOutputReference.property.lastUpdated"></a>

```go
func LastUpdated() *string
```

- *Type:* *string

---

##### `ParameterSchemas`<sup>Required</sup> <a name="ParameterSchemas" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasOutputReference.property.parameterSchemas"></a>

```go
func ParameterSchemas() DataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference">DataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareApiShieldOperationFeaturesParameterSchemas
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemas">DataCloudflareApiShieldOperationFeaturesParameterSchemas</a>

---


### DataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference <a name="DataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflareapishieldoperation"

datacloudflareapishieldoperation.NewDataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.property.parameters">Parameters</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.property.responses">Responses</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemas">DataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemas</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.property.parameters"></a>

```go
func Parameters() *[]*string
```

- *Type:* *[]*string

---

##### `Responses`<sup>Required</sup> <a name="Responses" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.property.responses"></a>

```go
func Responses() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemas
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemas">DataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemas</a>

---


### DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference <a name="DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflareapishieldoperation"

datacloudflareapishieldoperation.NewDataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.property.isLearned">IsLearned</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchema">DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchema</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsLearned`<sup>Required</sup> <a name="IsLearned" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.property.isLearned"></a>

```go
func IsLearned() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchema
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchema">DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchema</a>

---


### DataCloudflareApiShieldOperationFeaturesSchemaInfoOutputReference <a name="DataCloudflareApiShieldOperationFeaturesSchemaInfoOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflareapishieldoperation"

datacloudflareapishieldoperation.NewDataCloudflareApiShieldOperationFeaturesSchemaInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareApiShieldOperationFeaturesSchemaInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoOutputReference.property.activeSchema">ActiveSchema</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference">DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoOutputReference.property.learnedAvailable">LearnedAvailable</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoOutputReference.property.mitigationAction">MitigationAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfo">DataCloudflareApiShieldOperationFeaturesSchemaInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActiveSchema`<sup>Required</sup> <a name="ActiveSchema" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoOutputReference.property.activeSchema"></a>

```go
func ActiveSchema() DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference">DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference</a>

---

##### `LearnedAvailable`<sup>Required</sup> <a name="LearnedAvailable" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoOutputReference.property.learnedAvailable"></a>

```go
func LearnedAvailable() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `MitigationAction`<sup>Required</sup> <a name="MitigationAction" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoOutputReference.property.mitigationAction"></a>

```go
func MitigationAction() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareApiShieldOperationFeaturesSchemaInfo
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesSchemaInfo">DataCloudflareApiShieldOperationFeaturesSchemaInfo</a>

---


### DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference <a name="DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflareapishieldoperation"

datacloudflareapishieldoperation.NewDataCloudflareApiShieldOperationFeaturesThresholdsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference.property.authIdTokens">AuthIdTokens</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference.property.dataPoints">DataPoints</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference.property.lastUpdated">LastUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference.property.p50">P50</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference.property.p90">P90</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference.property.p99">P99</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference.property.periodSeconds">PeriodSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference.property.requests">Requests</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference.property.suggestedThreshold">SuggestedThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesThresholds">DataCloudflareApiShieldOperationFeaturesThresholds</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthIdTokens`<sup>Required</sup> <a name="AuthIdTokens" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference.property.authIdTokens"></a>

```go
func AuthIdTokens() *f64
```

- *Type:* *f64

---

##### `DataPoints`<sup>Required</sup> <a name="DataPoints" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference.property.dataPoints"></a>

```go
func DataPoints() *f64
```

- *Type:* *f64

---

##### `LastUpdated`<sup>Required</sup> <a name="LastUpdated" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference.property.lastUpdated"></a>

```go
func LastUpdated() *string
```

- *Type:* *string

---

##### `P50`<sup>Required</sup> <a name="P50" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference.property.p50"></a>

```go
func P50() *f64
```

- *Type:* *f64

---

##### `P90`<sup>Required</sup> <a name="P90" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference.property.p90"></a>

```go
func P90() *f64
```

- *Type:* *f64

---

##### `P99`<sup>Required</sup> <a name="P99" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference.property.p99"></a>

```go
func P99() *f64
```

- *Type:* *f64

---

##### `PeriodSeconds`<sup>Required</sup> <a name="PeriodSeconds" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference.property.periodSeconds"></a>

```go
func PeriodSeconds() *f64
```

- *Type:* *f64

---

##### `Requests`<sup>Required</sup> <a name="Requests" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference.property.requests"></a>

```go
func Requests() *f64
```

- *Type:* *f64

---

##### `SuggestedThreshold`<sup>Required</sup> <a name="SuggestedThreshold" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference.property.suggestedThreshold"></a>

```go
func SuggestedThreshold() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareApiShieldOperationFeaturesThresholds
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFeaturesThresholds">DataCloudflareApiShieldOperationFeaturesThresholds</a>

---


### DataCloudflareApiShieldOperationFilterOutputReference <a name="DataCloudflareApiShieldOperationFilterOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflareapishieldoperation"

datacloudflareapishieldoperation.NewDataCloudflareApiShieldOperationFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareApiShieldOperationFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilterOutputReference.resetDirection">ResetDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilterOutputReference.resetEndpoint">ResetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilterOutputReference.resetFeature">ResetFeature</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilterOutputReference.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilterOutputReference.resetMethod">ResetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilterOutputReference.resetOrder">ResetOrder</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDirection` <a name="ResetDirection" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilterOutputReference.resetDirection"></a>

```go
func ResetDirection()
```

##### `ResetEndpoint` <a name="ResetEndpoint" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilterOutputReference.resetEndpoint"></a>

```go
func ResetEndpoint()
```

##### `ResetFeature` <a name="ResetFeature" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilterOutputReference.resetFeature"></a>

```go
func ResetFeature()
```

##### `ResetHost` <a name="ResetHost" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilterOutputReference.resetHost"></a>

```go
func ResetHost()
```

##### `ResetMethod` <a name="ResetMethod" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilterOutputReference.resetMethod"></a>

```go
func ResetMethod()
```

##### `ResetOrder` <a name="ResetOrder" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilterOutputReference.resetOrder"></a>

```go
func ResetOrder()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilterOutputReference.property.directionInput">DirectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilterOutputReference.property.endpointInput">EndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilterOutputReference.property.featureInput">FeatureInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilterOutputReference.property.hostInput">HostInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilterOutputReference.property.methodInput">MethodInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilterOutputReference.property.orderInput">OrderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilterOutputReference.property.direction">Direction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilterOutputReference.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilterOutputReference.property.feature">Feature</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilterOutputReference.property.host">Host</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilterOutputReference.property.method">Method</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilterOutputReference.property.order">Order</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilterOutputReference.property.directionInput"></a>

```go
func DirectionInput() *string
```

- *Type:* *string

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilterOutputReference.property.endpointInput"></a>

```go
func EndpointInput() *string
```

- *Type:* *string

---

##### `FeatureInput`<sup>Optional</sup> <a name="FeatureInput" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilterOutputReference.property.featureInput"></a>

```go
func FeatureInput() *[]*string
```

- *Type:* *[]*string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilterOutputReference.property.hostInput"></a>

```go
func HostInput() *[]*string
```

- *Type:* *[]*string

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilterOutputReference.property.methodInput"></a>

```go
func MethodInput() *[]*string
```

- *Type:* *[]*string

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilterOutputReference.property.orderInput"></a>

```go
func OrderInput() *string
```

- *Type:* *string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilterOutputReference.property.direction"></a>

```go
func Direction() *string
```

- *Type:* *string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilterOutputReference.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `Feature`<sup>Required</sup> <a name="Feature" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilterOutputReference.property.feature"></a>

```go
func Feature() *[]*string
```

- *Type:* *[]*string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilterOutputReference.property.host"></a>

```go
func Host() *[]*string
```

- *Type:* *[]*string

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilterOutputReference.property.method"></a>

```go
func Method() *[]*string
```

- *Type:* *[]*string

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilterOutputReference.property.order"></a>

```go
func Order() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldOperation.DataCloudflareApiShieldOperationFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



