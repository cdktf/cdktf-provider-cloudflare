# `dataCloudflareLogpushJobs` Submodule <a name="`dataCloudflareLogpushJobs` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareLogpushJobs <a name="DataCloudflareLogpushJobs" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/logpush_jobs cloudflare_logpush_jobs}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarelogpushjobs"

datacloudflarelogpushjobs.NewDataCloudflareLogpushJobs(scope Construct, id *string, config DataCloudflareLogpushJobsConfig) DataCloudflareLogpushJobs
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsConfig">DataCloudflareLogpushJobsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsConfig">DataCloudflareLogpushJobsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.resetMaxItems">ResetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.resetZoneId">ResetZoneId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.resetAccountId"></a>

```go
func ResetAccountId()
```

##### `ResetMaxItems` <a name="ResetMaxItems" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.resetMaxItems"></a>

```go
func ResetMaxItems()
```

##### `ResetZoneId` <a name="ResetZoneId" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.resetZoneId"></a>

```go
func ResetZoneId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareLogpushJobs resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarelogpushjobs"

datacloudflarelogpushjobs.DataCloudflareLogpushJobs_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarelogpushjobs"

datacloudflarelogpushjobs.DataCloudflareLogpushJobs_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarelogpushjobs"

datacloudflarelogpushjobs.DataCloudflareLogpushJobs_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarelogpushjobs"

datacloudflarelogpushjobs.DataCloudflareLogpushJobs_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataCloudflareLogpushJobs resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareLogpushJobs to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareLogpushJobs that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/logpush_jobs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareLogpushJobs to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.property.result">Result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultList">DataCloudflareLogpushJobsResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.property.maxItemsInput">MaxItemsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.property.zoneIdInput">ZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.property.maxItems">MaxItems</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.property.result"></a>

```go
func Result() DataCloudflareLogpushJobsResultList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultList">DataCloudflareLogpushJobsResultList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `MaxItemsInput`<sup>Optional</sup> <a name="MaxItemsInput" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.property.maxItemsInput"></a>

```go
func MaxItemsInput() *f64
```

- *Type:* *f64

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.property.zoneIdInput"></a>

```go
func ZoneIdInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `MaxItems`<sup>Required</sup> <a name="MaxItems" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.property.maxItems"></a>

```go
func MaxItems() *f64
```

- *Type:* *f64

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobs.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareLogpushJobsConfig <a name="DataCloudflareLogpushJobsConfig" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarelogpushjobs"

&datacloudflarelogpushjobs.DataCloudflareLogpushJobsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	MaxItems: *f64,
	ZoneId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsConfig.property.accountId">AccountId</a></code> | <code>*string</code> | The Account ID to use for this endpoint. Mutually exclusive with the Zone ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsConfig.property.maxItems">MaxItems</a></code> | <code>*f64</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsConfig.property.zoneId">ZoneId</a></code> | <code>*string</code> | The Zone ID to use for this endpoint. Mutually exclusive with the Account ID. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/logpush_jobs#account_id DataCloudflareLogpushJobs#account_id}

---

##### `MaxItems`<sup>Optional</sup> <a name="MaxItems" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsConfig.property.maxItems"></a>

```go
MaxItems *f64
```

- *Type:* *f64

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/logpush_jobs#max_items DataCloudflareLogpushJobs#max_items}

---

##### `ZoneId`<sup>Optional</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsConfig.property.zoneId"></a>

```go
ZoneId *string
```

- *Type:* *string

The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/logpush_jobs#zone_id DataCloudflareLogpushJobs#zone_id}

---

### DataCloudflareLogpushJobsResult <a name="DataCloudflareLogpushJobsResult" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResult.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarelogpushjobs"

&datacloudflarelogpushjobs.DataCloudflareLogpushJobsResult {

}
```


### DataCloudflareLogpushJobsResultOutputOptions <a name="DataCloudflareLogpushJobsResultOutputOptions" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarelogpushjobs"

&datacloudflarelogpushjobs.DataCloudflareLogpushJobsResultOutputOptions {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareLogpushJobsResultList <a name="DataCloudflareLogpushJobsResultList" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarelogpushjobs"

datacloudflarelogpushjobs.NewDataCloudflareLogpushJobsResultList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareLogpushJobsResultList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultList.get"></a>

```go
func Get(index *f64) DataCloudflareLogpushJobsResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareLogpushJobsResultOutputOptionsOutputReference <a name="DataCloudflareLogpushJobsResultOutputOptionsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarelogpushjobs"

datacloudflarelogpushjobs.NewDataCloudflareLogpushJobsResultOutputOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareLogpushJobsResultOutputOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputOptionsOutputReference.property.batchPrefix">BatchPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputOptionsOutputReference.property.batchSuffix">BatchSuffix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputOptionsOutputReference.property.cve202144228">Cve202144228</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputOptionsOutputReference.property.fieldDelimiter">FieldDelimiter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputOptionsOutputReference.property.fieldNames">FieldNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputOptionsOutputReference.property.outputType">OutputType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputOptionsOutputReference.property.recordDelimiter">RecordDelimiter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputOptionsOutputReference.property.recordPrefix">RecordPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputOptionsOutputReference.property.recordSuffix">RecordSuffix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputOptionsOutputReference.property.recordTemplate">RecordTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputOptionsOutputReference.property.sampleRate">SampleRate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputOptionsOutputReference.property.timestampFormat">TimestampFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputOptions">DataCloudflareLogpushJobsResultOutputOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BatchPrefix`<sup>Required</sup> <a name="BatchPrefix" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputOptionsOutputReference.property.batchPrefix"></a>

```go
func BatchPrefix() *string
```

- *Type:* *string

---

##### `BatchSuffix`<sup>Required</sup> <a name="BatchSuffix" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputOptionsOutputReference.property.batchSuffix"></a>

```go
func BatchSuffix() *string
```

- *Type:* *string

---

##### `Cve202144228`<sup>Required</sup> <a name="Cve202144228" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputOptionsOutputReference.property.cve202144228"></a>

```go
func Cve202144228() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `FieldDelimiter`<sup>Required</sup> <a name="FieldDelimiter" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputOptionsOutputReference.property.fieldDelimiter"></a>

```go
func FieldDelimiter() *string
```

- *Type:* *string

---

##### `FieldNames`<sup>Required</sup> <a name="FieldNames" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputOptionsOutputReference.property.fieldNames"></a>

```go
func FieldNames() *[]*string
```

- *Type:* *[]*string

---

##### `OutputType`<sup>Required</sup> <a name="OutputType" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputOptionsOutputReference.property.outputType"></a>

```go
func OutputType() *string
```

- *Type:* *string

---

##### `RecordDelimiter`<sup>Required</sup> <a name="RecordDelimiter" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputOptionsOutputReference.property.recordDelimiter"></a>

```go
func RecordDelimiter() *string
```

- *Type:* *string

---

##### `RecordPrefix`<sup>Required</sup> <a name="RecordPrefix" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputOptionsOutputReference.property.recordPrefix"></a>

```go
func RecordPrefix() *string
```

- *Type:* *string

---

##### `RecordSuffix`<sup>Required</sup> <a name="RecordSuffix" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputOptionsOutputReference.property.recordSuffix"></a>

```go
func RecordSuffix() *string
```

- *Type:* *string

---

##### `RecordTemplate`<sup>Required</sup> <a name="RecordTemplate" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputOptionsOutputReference.property.recordTemplate"></a>

```go
func RecordTemplate() *string
```

- *Type:* *string

---

##### `SampleRate`<sup>Required</sup> <a name="SampleRate" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputOptionsOutputReference.property.sampleRate"></a>

```go
func SampleRate() *f64
```

- *Type:* *f64

---

##### `TimestampFormat`<sup>Required</sup> <a name="TimestampFormat" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputOptionsOutputReference.property.timestampFormat"></a>

```go
func TimestampFormat() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareLogpushJobsResultOutputOptions
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputOptions">DataCloudflareLogpushJobsResultOutputOptions</a>

---


### DataCloudflareLogpushJobsResultOutputReference <a name="DataCloudflareLogpushJobsResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarelogpushjobs"

datacloudflarelogpushjobs.NewDataCloudflareLogpushJobsResultOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareLogpushJobsResultOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputReference.property.dataset">Dataset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputReference.property.destinationConf">DestinationConf</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputReference.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputReference.property.errorMessage">ErrorMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputReference.property.frequency">Frequency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputReference.property.id">Id</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputReference.property.kind">Kind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputReference.property.lastComplete">LastComplete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputReference.property.lastError">LastError</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputReference.property.logpullOptions">LogpullOptions</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputReference.property.maxUploadBytes">MaxUploadBytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputReference.property.maxUploadIntervalSeconds">MaxUploadIntervalSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputReference.property.maxUploadRecords">MaxUploadRecords</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputReference.property.outputOptions">OutputOptions</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputOptionsOutputReference">DataCloudflareLogpushJobsResultOutputOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResult">DataCloudflareLogpushJobsResult</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Dataset`<sup>Required</sup> <a name="Dataset" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputReference.property.dataset"></a>

```go
func Dataset() *string
```

- *Type:* *string

---

##### `DestinationConf`<sup>Required</sup> <a name="DestinationConf" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputReference.property.destinationConf"></a>

```go
func DestinationConf() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ErrorMessage`<sup>Required</sup> <a name="ErrorMessage" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputReference.property.errorMessage"></a>

```go
func ErrorMessage() *string
```

- *Type:* *string

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputReference.property.frequency"></a>

```go
func Frequency() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputReference.property.id"></a>

```go
func Id() *f64
```

- *Type:* *f64

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputReference.property.kind"></a>

```go
func Kind() *string
```

- *Type:* *string

---

##### `LastComplete`<sup>Required</sup> <a name="LastComplete" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputReference.property.lastComplete"></a>

```go
func LastComplete() *string
```

- *Type:* *string

---

##### `LastError`<sup>Required</sup> <a name="LastError" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputReference.property.lastError"></a>

```go
func LastError() *string
```

- *Type:* *string

---

##### `LogpullOptions`<sup>Required</sup> <a name="LogpullOptions" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputReference.property.logpullOptions"></a>

```go
func LogpullOptions() *string
```

- *Type:* *string

---

##### `MaxUploadBytes`<sup>Required</sup> <a name="MaxUploadBytes" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputReference.property.maxUploadBytes"></a>

```go
func MaxUploadBytes() *f64
```

- *Type:* *f64

---

##### `MaxUploadIntervalSeconds`<sup>Required</sup> <a name="MaxUploadIntervalSeconds" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputReference.property.maxUploadIntervalSeconds"></a>

```go
func MaxUploadIntervalSeconds() *f64
```

- *Type:* *f64

---

##### `MaxUploadRecords`<sup>Required</sup> <a name="MaxUploadRecords" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputReference.property.maxUploadRecords"></a>

```go
func MaxUploadRecords() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OutputOptions`<sup>Required</sup> <a name="OutputOptions" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputReference.property.outputOptions"></a>

```go
func OutputOptions() DataCloudflareLogpushJobsResultOutputOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputOptionsOutputReference">DataCloudflareLogpushJobsResultOutputOptionsOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResultOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareLogpushJobsResult
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushJobs.DataCloudflareLogpushJobsResult">DataCloudflareLogpushJobsResult</a>

---



