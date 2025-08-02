# `dataCloudflareR2BucketLifecycle` Submodule <a name="`dataCloudflareR2BucketLifecycle` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareR2BucketLifecycle <a name="DataCloudflareR2BucketLifecycle" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/r2_bucket_lifecycle cloudflare_r2_bucket_lifecycle}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarer2bucketlifecycle"

datacloudflarer2bucketlifecycle.NewDataCloudflareR2BucketLifecycle(scope Construct, id *string, config DataCloudflareR2BucketLifecycleConfig) DataCloudflareR2BucketLifecycle
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleConfig">DataCloudflareR2BucketLifecycleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleConfig">DataCloudflareR2BucketLifecycleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareR2BucketLifecycle resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarer2bucketlifecycle"

datacloudflarer2bucketlifecycle.DataCloudflareR2BucketLifecycle_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarer2bucketlifecycle"

datacloudflarer2bucketlifecycle.DataCloudflareR2BucketLifecycle_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarer2bucketlifecycle"

datacloudflarer2bucketlifecycle.DataCloudflareR2BucketLifecycle_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarer2bucketlifecycle"

datacloudflarer2bucketlifecycle.DataCloudflareR2BucketLifecycle_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataCloudflareR2BucketLifecycle resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareR2BucketLifecycle to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareR2BucketLifecycle that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/r2_bucket_lifecycle#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareR2BucketLifecycle to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.property.rules">Rules</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesList">DataCloudflareR2BucketLifecycleRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.property.bucketNameInput">BucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.property.rules"></a>

```go
func Rules() DataCloudflareR2BucketLifecycleRulesList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesList">DataCloudflareR2BucketLifecycleRulesList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.property.bucketNameInput"></a>

```go
func BucketNameInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareR2BucketLifecycleConfig <a name="DataCloudflareR2BucketLifecycleConfig" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarer2bucketlifecycle"

&datacloudflarer2bucketlifecycle.DataCloudflareR2BucketLifecycleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	BucketName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Account ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleConfig.property.bucketName">BucketName</a></code> | <code>*string</code> | Name of the bucket. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/r2_bucket_lifecycle#account_id DataCloudflareR2BucketLifecycle#account_id}

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleConfig.property.bucketName"></a>

```go
BucketName *string
```

- *Type:* *string

Name of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/r2_bucket_lifecycle#bucket_name DataCloudflareR2BucketLifecycle#bucket_name}

---

### DataCloudflareR2BucketLifecycleRules <a name="DataCloudflareR2BucketLifecycleRules" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarer2bucketlifecycle"

&datacloudflarer2bucketlifecycle.DataCloudflareR2BucketLifecycleRules {

}
```


### DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransition <a name="DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransition" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarer2bucketlifecycle"

&datacloudflarer2bucketlifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransition {

}
```


### DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition <a name="DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarer2bucketlifecycle"

&datacloudflarer2bucketlifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition {

}
```


### DataCloudflareR2BucketLifecycleRulesConditions <a name="DataCloudflareR2BucketLifecycleRulesConditions" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarer2bucketlifecycle"

&datacloudflarer2bucketlifecycle.DataCloudflareR2BucketLifecycleRulesConditions {

}
```


### DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransition <a name="DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransition" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarer2bucketlifecycle"

&datacloudflarer2bucketlifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransition {

}
```


### DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionCondition <a name="DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionCondition" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarer2bucketlifecycle"

&datacloudflarer2bucketlifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionCondition {

}
```


### DataCloudflareR2BucketLifecycleRulesStorageClassTransitions <a name="DataCloudflareR2BucketLifecycleRulesStorageClassTransitions" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarer2bucketlifecycle"

&datacloudflarer2bucketlifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitions {

}
```


### DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsCondition <a name="DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsCondition" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarer2bucketlifecycle"

&datacloudflarer2bucketlifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsCondition {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference <a name="DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarer2bucketlifecycle"

datacloudflarer2bucketlifecycle.NewDataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.property.maxAge">MaxAge</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition">DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxAge`<sup>Required</sup> <a name="MaxAge" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.property.maxAge"></a>

```go
func MaxAge() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition">DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition</a>

---


### DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference <a name="DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarer2bucketlifecycle"

datacloudflarer2bucketlifecycle.NewDataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference">DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransition">DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.property.condition"></a>

```go
func Condition() DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference">DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransition
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransition">DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransition</a>

---


### DataCloudflareR2BucketLifecycleRulesConditionsOutputReference <a name="DataCloudflareR2BucketLifecycleRulesConditionsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarer2bucketlifecycle"

datacloudflarer2bucketlifecycle.NewDataCloudflareR2BucketLifecycleRulesConditionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareR2BucketLifecycleRulesConditionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditions">DataCloudflareR2BucketLifecycleRulesConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareR2BucketLifecycleRulesConditions
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditions">DataCloudflareR2BucketLifecycleRulesConditions</a>

---


### DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference <a name="DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarer2bucketlifecycle"

datacloudflarer2bucketlifecycle.NewDataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.property.date">Date</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.property.maxAge">MaxAge</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionCondition">DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Date`<sup>Required</sup> <a name="Date" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.property.date"></a>

```go
func Date() *string
```

- *Type:* *string

---

##### `MaxAge`<sup>Required</sup> <a name="MaxAge" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.property.maxAge"></a>

```go
func MaxAge() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionCondition
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionCondition">DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionCondition</a>

---


### DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference <a name="DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarer2bucketlifecycle"

datacloudflarer2bucketlifecycle.NewDataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference">DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransition">DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.property.condition"></a>

```go
func Condition() DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference">DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransition
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransition">DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransition</a>

---


### DataCloudflareR2BucketLifecycleRulesList <a name="DataCloudflareR2BucketLifecycleRulesList" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarer2bucketlifecycle"

datacloudflarer2bucketlifecycle.NewDataCloudflareR2BucketLifecycleRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareR2BucketLifecycleRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesList.get"></a>

```go
func Get(index *f64) DataCloudflareR2BucketLifecycleRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareR2BucketLifecycleRulesOutputReference <a name="DataCloudflareR2BucketLifecycleRulesOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarer2bucketlifecycle"

datacloudflarer2bucketlifecycle.NewDataCloudflareR2BucketLifecycleRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareR2BucketLifecycleRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.property.abortMultipartUploadsTransition">AbortMultipartUploadsTransition</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference">DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.property.conditions">Conditions</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference">DataCloudflareR2BucketLifecycleRulesConditionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.property.deleteObjectsTransition">DeleteObjectsTransition</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference">DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.property.storageClassTransitions">StorageClassTransitions</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsList">DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRules">DataCloudflareR2BucketLifecycleRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AbortMultipartUploadsTransition`<sup>Required</sup> <a name="AbortMultipartUploadsTransition" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.property.abortMultipartUploadsTransition"></a>

```go
func AbortMultipartUploadsTransition() DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference">DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference</a>

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.property.conditions"></a>

```go
func Conditions() DataCloudflareR2BucketLifecycleRulesConditionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference">DataCloudflareR2BucketLifecycleRulesConditionsOutputReference</a>

---

##### `DeleteObjectsTransition`<sup>Required</sup> <a name="DeleteObjectsTransition" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.property.deleteObjectsTransition"></a>

```go
func DeleteObjectsTransition() DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference">DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference</a>

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `StorageClassTransitions`<sup>Required</sup> <a name="StorageClassTransitions" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.property.storageClassTransitions"></a>

```go
func StorageClassTransitions() DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsList">DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareR2BucketLifecycleRules
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRules">DataCloudflareR2BucketLifecycleRules</a>

---


### DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference <a name="DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarer2bucketlifecycle"

datacloudflarer2bucketlifecycle.NewDataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.property.date">Date</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.property.maxAge">MaxAge</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsCondition">DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Date`<sup>Required</sup> <a name="Date" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.property.date"></a>

```go
func Date() *string
```

- *Type:* *string

---

##### `MaxAge`<sup>Required</sup> <a name="MaxAge" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.property.maxAge"></a>

```go
func MaxAge() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsCondition
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsCondition">DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsCondition</a>

---


### DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsList <a name="DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsList" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarer2bucketlifecycle"

datacloudflarer2bucketlifecycle.NewDataCloudflareR2BucketLifecycleRulesStorageClassTransitionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsList.get"></a>

```go
func Get(index *f64) DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference <a name="DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarer2bucketlifecycle"

datacloudflarer2bucketlifecycle.NewDataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference">DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.property.storageClass">StorageClass</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitions">DataCloudflareR2BucketLifecycleRulesStorageClassTransitions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.property.condition"></a>

```go
func Condition() DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference">DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference</a>

---

##### `StorageClass`<sup>Required</sup> <a name="StorageClass" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.property.storageClass"></a>

```go
func StorageClass() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareR2BucketLifecycleRulesStorageClassTransitions
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitions">DataCloudflareR2BucketLifecycleRulesStorageClassTransitions</a>

---



