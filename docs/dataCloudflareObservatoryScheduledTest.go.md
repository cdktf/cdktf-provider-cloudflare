# `dataCloudflareObservatoryScheduledTest` Submodule <a name="`dataCloudflareObservatoryScheduledTest` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareObservatoryScheduledTest <a name="DataCloudflareObservatoryScheduledTest" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/data-sources/observatory_scheduled_test cloudflare_observatory_scheduled_test}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareobservatoryscheduledtest"

datacloudflareobservatoryscheduledtest.NewDataCloudflareObservatoryScheduledTest(scope Construct, id *string, config DataCloudflareObservatoryScheduledTestConfig) DataCloudflareObservatoryScheduledTest
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTestConfig">DataCloudflareObservatoryScheduledTestConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTestConfig">DataCloudflareObservatoryScheduledTestConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.resetRegion"></a>

```go
func ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareObservatoryScheduledTest resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareobservatoryscheduledtest"

datacloudflareobservatoryscheduledtest.DataCloudflareObservatoryScheduledTest_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareobservatoryscheduledtest"

datacloudflareobservatoryscheduledtest.DataCloudflareObservatoryScheduledTest_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareobservatoryscheduledtest"

datacloudflareobservatoryscheduledtest.DataCloudflareObservatoryScheduledTest_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareobservatoryscheduledtest"

datacloudflareobservatoryscheduledtest.DataCloudflareObservatoryScheduledTest_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataCloudflareObservatoryScheduledTest resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareObservatoryScheduledTest to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareObservatoryScheduledTest that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/data-sources/observatory_scheduled_test#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareObservatoryScheduledTest to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.property.frequency">Frequency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.property.zoneIdInput">ZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.property.frequency"></a>

```go
func Frequency() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.property.zoneIdInput"></a>

```go
func ZoneIdInput() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareObservatoryScheduledTestConfig <a name="DataCloudflareObservatoryScheduledTestConfig" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTestConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareobservatoryscheduledtest"

&datacloudflareobservatoryscheduledtest.DataCloudflareObservatoryScheduledTestConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Url: *string,
	ZoneId: *string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTestConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTestConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTestConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTestConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTestConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTestConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTestConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTestConfig.property.url">Url</a></code> | <code>*string</code> | A URL. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTestConfig.property.zoneId">ZoneId</a></code> | <code>*string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTestConfig.property.region">Region</a></code> | <code>*string</code> | A test region. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTestConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTestConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTestConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTestConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTestConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTestConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTestConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTestConfig.property.url"></a>

```go
Url *string
```

- *Type:* *string

A URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/data-sources/observatory_scheduled_test#url DataCloudflareObservatoryScheduledTest#url}

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTestConfig.property.zoneId"></a>

```go
ZoneId *string
```

- *Type:* *string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/data-sources/observatory_scheduled_test#zone_id DataCloudflareObservatoryScheduledTest#zone_id}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTestConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

A test region.

Available values: "asia-east1", "asia-northeast1", "asia-northeast2", "asia-south1", "asia-southeast1", "australia-southeast1", "europe-north1", "europe-southwest1", "europe-west1", "europe-west2", "europe-west3", "europe-west4", "europe-west8", "europe-west9", "me-west1", "southamerica-east1", "us-central1", "us-east1", "us-east4", "us-south1", "us-west1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/data-sources/observatory_scheduled_test#region DataCloudflareObservatoryScheduledTest#region}

---



